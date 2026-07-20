# Website mockup kit

Turns a website screenshot into a square, branded showcase image: a themed
background auto-adapted to the screenshot's colors, the browser floating with
a soft shadow, an optional brand logo on a frosted backdrop, and a
`by TeneX Studio` caption in Arimo. Output: 1600×1600 PNG.

## Use

```sh
./make_mockup.sh [flags] <screenshot.png> [output.png]
```

- Input: a shots-style screenshot with a **black background** (e.g. from
  shots.so). Any size; auto-fit. Output defaults to `<screenshot>_tenex.png`.

### Flags

| Flag | Purpose |
|------|---------|
| `--no-adapt` | Keep the default navy/violet background instead of adapting to the screenshot. |
| `--fuzz N` | Black-key tolerance % (default `14`). Use `~4` for **dark** screenshots whose content sits close to the black border, or the key bleeds into the image. |
| `--logo FILE` | Place a brand logo on a frosted backdrop above the browser. SVG/PNG/AVIF. |
| `--logo-keep` | Keep the logo's original colors. Without it, the logo is recolored **white** (for dark-on-transparent logos). |
| `--logo-height N` | Logo height px inside the badge (default `58`). Use `~120-140` for stacked/square logos so they don't render tiny. |

### Examples

```sh
# bright screenshot, adapted bg, colored logo
./make_mockup.sh --logo-keep --logo brand.svg 824shots_so.png renardo.png

# dark screenshot -> lower fuzz so the key doesn't eat the image
./make_mockup.sh --fuzz 4 --logo-keep logo.svg 843shots_so.png lumen.png

# stacked (vertical) logo -> larger height
./make_mockup.sh --logo-keep --logo-height 128 --logo logo.svg shot.png out.png
```

## How it works

1. Keys the black background to transparent (floodfill from edges, so the
   browser interior survives). `browser_trim.png` = the cropped browser.
2. `theme.py` samples the browser's palette, picks a vivid accent + dominant
   hue, and prints a `:root{}` block; the background gradient + glows adapt.
3. Optional `--logo` is rasterized (SVG at high density), optionally whitened,
   and dropped into the `<!--LOGO-->` slot.
4. `mockup.html` is rendered via agent-browser; the `.stage` element is
   captured at 1600×1600.

## Files (committed)

- `make_mockup.sh` — the builder.
- `mockup.html` — the stage template (CSS-variable driven).
- `theme.py` — palette → theme extractor (stdlib + `magick`).
- `arimo-400.woff2`, `arimo-700.woff2` — caption font.

Generated per run (git-ignored): `browser_trim.png`, `logo.png`,
`_render.html`, `_cut.png`.

## Requirements

ImageMagick (`magick`), `python3`, `agent-browser`.
