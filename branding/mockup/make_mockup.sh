#!/usr/bin/env bash
# TeneX Studio website-mockup builder.
# Keys the black background off a shots-style screenshot, drops it on a themed
# stage (mockup.html), renders a 1600x1600 square PNG. By default the stage
# background is auto-adapted to the screenshot's dominant colors.
#
# Usage: make_mockup.sh [--no-adapt] [--fuzz N] [--logo FILE [--logo-keep]] \
#                       <input_screenshot> [output_png]
#   --no-adapt   keep the default navy/violet background
#   --fuzz N     black-key tolerance % (default 14; use ~4 for dark screenshots)
#   --logo FILE  place a brand logo on a frosted backdrop above the browser.
#                Logo is recolored white by default (for dark logos on transparent);
#   --logo-keep  keep the logo's original colors instead of whitening.
#   --logo-height N  logo height in px inside the badge (default 58; use ~120-140
#                    for stacked/square logos so they don't render tiny).
#   output defaults to <input_dir>/<input_name>_tenex.png
#
# Deps: ImageMagick (magick), python3, agent-browser.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ADAPT=1
FUZZ=14   # black-key tolerance %. Lower (~4) for dark screenshots whose content
          # sits close to the black border, higher for bright content.
LOGO=""
LOGOKEEP=0
LOGOH=58
while [[ "${1:-}" == --* ]]; do
  case "$1" in
    --no-adapt) ADAPT=0; shift;;
    --fuzz) FUZZ="$2"; shift 2;;
    --logo) LOGO="$2"; shift 2;;
    --logo-keep) LOGOKEEP=1; shift;;
    --logo-height) LOGOH="$2"; shift 2;;
    *) echo "unknown flag: $1" >&2; exit 2;;
  esac
done
IN="${1:?usage: make_mockup.sh [--no-adapt] [--fuzz N] <input_screenshot> [output_png]}"
OUT="${2:-${IN%.*}_tenex.png}"

dims=$(magick identify -format "%w %h" "$IN"); W=${dims% *}; H=${dims#* }
xr=$((W-2)); yb=$((H-2)); xm=$((W/2)); ym=$((H/2))

# 1. key pure/near-black bg -> transparent via floodfill from corners + edge mids
magick "$IN" -alpha set -fuzz ${FUZZ}% -fill none \
  -draw "alpha 1,1 floodfill"      -draw "alpha ${xr},1 floodfill" \
  -draw "alpha 1,${yb} floodfill"  -draw "alpha ${xr},${yb} floodfill" \
  -draw "alpha ${xm},2 floodfill"  -draw "alpha 2,${ym} floodfill" \
  -draw "alpha $((W-3)),${ym} floodfill" -draw "alpha ${xm},$((H-3)) floodfill" \
  "$DIR/_cut.png"

# 2. trim to tight bounds -> becomes the stage's browser image
magick "$DIR/_cut.png" -trim +repage "$DIR/browser_trim.png"
rm -f "$DIR/_cut.png"

# 3. build the render html, injecting an adapted theme block (unless --no-adapt)
THEME=""
if [[ "$ADAPT" == "1" ]]; then
  THEME=$(python3 "$DIR/theme.py" "$DIR/browser_trim.png" || true)
fi
if [[ -n "$THEME" ]]; then
  awk -v t="$THEME" '/^[[:space:]]*<\/head>[[:space:]]*$/ && !done{print t; done=1} {print}' "$DIR/mockup.html" > "$DIR/_render.html"
else
  cp "$DIR/mockup.html" "$DIR/_render.html"
fi

# 3b. optional brand logo -> frosted backdrop above the browser (swaps <!--LOGO-->)
if [[ -n "$LOGO" ]]; then
  if [[ "$LOGOKEEP" == "1" ]]; then
    magick -density 400 -background none "$LOGO" -trim +repage "$DIR/logo.png"
  else
    magick -density 400 -background none "$LOGO" -channel RGB -evaluate set 100% +channel -trim +repage "$DIR/logo.png"
  fi
  awk -v h="$LOGOH" '/<!--LOGO-->/{print "    <div class=\"logo-badge\"><img src=\"logo.png\" alt=\"\" style=\"height:" h "px\"></div>"; next} {print}' \
    "$DIR/_render.html" > "$DIR/_render2.html" && mv "$DIR/_render2.html" "$DIR/_render.html"
fi

# 4. render the stage at 1600x1600
agent-browser set viewport 1600 1600 >/dev/null
agent-browser open "file://$DIR/_render.html" >/dev/null
agent-browser wait --fn "document.fonts.ready.then(()=>true)" >/dev/null
agent-browser wait 500 >/dev/null
agent-browser screenshot ".stage" "$OUT" >/dev/null
agent-browser close >/dev/null

echo "✓ $OUT"
magick identify -format "  %wx%h\n" "$OUT"
