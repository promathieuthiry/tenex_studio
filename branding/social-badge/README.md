# TeneX social badge — source files

Editable HTML/CSS templates for the TeneX ID-badge social graphics.
Rendered to PNG via a headless browser (no build step, no deps).

## Files

| File | Output | Canvas |
|------|--------|--------|
| `badge.html` | `tenex-badge-social.png` | 3000×1890 — lanyard mockup (straps + holder) |
| `cards.html` | `tenex-cards-social.png` | 3000×1890 — flat cards, wide |
| `cards-square.html` | `tenex-cards-square.png` | 1080×1080 — WhatsApp / Instagram |
| `cards-og.html` | `tenex-cards-og.png` | 1200×630 — OpenGraph / link preview |
| `photo.webp` | — | founder portrait (referenced relatively by every template) |

`cards-og.html` was originally derived from `cards-square.html` but the two
**diverged**: social + square show the positioning line as a caption *below*
the cards (`.subtitle`), while OG + lanyard keep it as an in-card footer label.
Edit `cards-og.html` directly now — do not regenerate it from the square.

The original derivation (stage size + `--s` scale only):

```sh
# historical reference — no longer the source of truth for cards-og.html
sed -e 's/--s:1.08;/--s:0.9;/' \
    -e 's/width:1080px;height:1080px;/width:1200px;height:630px;/' \
    cards-square.html > cards-og.html
```

## Positioning line ("Agence Web et IA")

All four formats: on the **front card**, bottom row (`.frow`, space-between),
opposite the `TeneX Studio` wordmark. Mono (`.tag`, Geist Mono 13px, gray
`#76767c`) to contrast the Arimo wordmark. Back-card footer is contact-only.

## Design tokens (match `src/styles/global.css`)

- ink `#0f0f12` · paper `#ffffff` · accent `#e2231a`
- Arimo (display) · Inter (UI) · Geist Mono (labels/contact)
- Front: white card, photo + name + TeneX Studio wordmark
- Back: pure `#e2231a` panel, big `TENEX STUDIO`, tonal `10x` watermark,
  footer = hairline rule + ink label + white contact (weights 700/600 for AA)

## Render (agent-browser)

`cards.html` / `badge.html` use `zoom:2` → `--full` already outputs at 2× (3000×1890).
`cards-square.html` / `cards-og.html` render at native size but the viewport is
wider than the stage, so center the stage (`margin:0 auto`) and center-crop.

```sh
# wide / lanyard (exact size, no crop needed)
agent-browser open "file://$PWD/cards.html"
agent-browser wait --fn "document.fonts.status==='loaded'"
agent-browser wait 600
agent-browser screenshot --full ../../tenex-cards-social.png

# square — render then center-crop to exact dims
agent-browser open "file://$PWD/cards-square.html"
agent-browser wait --fn "document.fonts.status==='loaded'"
agent-browser wait 600
agent-browser screenshot --full _sq_raw.png
sips -c 1080 1080 _sq_raw.png --out ../../tenex-cards-square.png

# og — same, crop to 630×1200 (sips order is height width)
agent-browser screenshot --full _og_raw.png   # after opening cards-og.html
sips -c 630 1200 _og_raw.png --out ../../tenex-cards-og.png
```

Always wait for `document.fonts` before the screenshot or the layout fires
before web fonts load and the cards clip short.
