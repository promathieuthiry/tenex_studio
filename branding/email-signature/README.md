# Tenex email signature — source + install

Paste-ready HTML signature for Gmail, on the Tenex design system
(Arimo display · Inter body · Geist Mono labels · ink/paper · one red rule).
Adapted from the ID-badge work in `../social-badge/`.

## Layout

Wide editorial banner, three top-aligned columns:

```
TeneX Studio
┌─────┐  FONDATEUR        EMAIL
│photo│  Mathieu Thiry    mathieu@tenex.studio
└─────┘  ─(red)           WEBSITE
         Agence web et IA  www.tenex.studio
         [ Prendre rdv ]   LINKEDIN
                           tenex.studio
                           ADRESSE
                           La Cantine x La French Tech
                           40 rue de la Tour d'Auvergne · 44200 Nantes
```

- **Column 1** — logo on top, then the sharp portrait plate.
- **Column 2** — role, name, red rule, tagline, CTA, stacked.
- **Column 3** — contacts (single column).
- **Logo** is the `TeneX Studio` wordmark as live text (Arimo 700, 17px), above
  the photo. The `public/brand/tenex-mark-dark.svg` is itself just Arimo text,
  and SVG does not render in email — so it's reproduced as text.
- **CTA** (`Prendre rendez-vous`) sits at the bottom of column 2, under the
  tagline. `white-space:nowrap` keeps it on one line.
- Photo is a **118px sharp plate** in the left column, vertically centered
  against the text zones (`vertical-align:middle`).
- Name: both first and last in Arimo **700**, stacked, tight negative tracking.
- The 34×2px red rule is the single accent (one red moment per `DESIGN.md`).
- The `LinkedIn` value reads `tenex.studio` but links to the company page.

## Files

`signature.html` — the signature. Open in a browser to preview; copy into
Gmail to install.

Portrait is the already-live image:
`https://www.tenex.studio/portrait/mathieu_thiry_founder_tenex_studio.webp`
(displayed 112², `object-fit:cover`). No deploy step needed.

## Install in Gmail

1. Open `signature.html` in a browser (`file://…/signature.html`).
2. `Cmd/Ctrl+A` → `Cmd/Ctrl+C` (selects + copies the rendered signature).
3. Gmail → **Settings (gear) → See all settings → General → Signature →
   Create new** → paste into the box → **Save changes**.

The grey "PREVIEW" frame around it is preview-only chrome (a `<style>` block
Gmail strips on paste); only the inline-styled signature block is copied.

## Responsive / mobile

Gmail **strips `<style>` blocks and `@media` queries** from pasted signatures,
so classic media-query responsive does not survive. Instead this uses a
**fluid-hybrid table** (inline styles only): the three zones are `inline-block`
with `max-width`, inside a `width:100%; max-width:660px` table.

- Wide client (desktop Gmail compose / reading pane): the three columns sit
  **side by side** — (logo + photo) · (name + CTA) · contacts.
- Narrow client (phone, Gmail mobile app): the columns wrap and **stack** —
  logo, photo, then name + CTA, then contacts. No media query needed.
- Stacking gap: columns 1 and 2 carry `margin-bottom:26px`. Side-by-side
  (desktop) it's a harmless trailing space; stacked (mobile) it becomes the
  vertical gap between zones — the media-query-free way to breathe on mobile.
- Inter-column gaps use `margin-right` on the left columns (not `padding-left`
  on the right ones), so on mobile every zone is **flush-left** instead of
  indented. The right margin is just harmless trailing space when stacked.
- **Contacts are a single column** (Email · Website · LinkedIn · Adresse). A
  2-column grid was tried but cramped the email/address at narrow widths and
  could not collapse to one column without media queries — so single column is
  the robust choice that stays clean everywhere.

Verified at 880px (banner) and 360px (stacked).

## Image-format caveat (webp)

The portrait is `.webp`. Gmail (web + mobile) and Apple Mail render it fine.
**Outlook desktop on Windows (Word engine) does NOT render webp** — the photo
shows broken for those recipients. If Outlook reach matters, swap the `<img src>`
for a PNG/JPG:

```sh
sips -s format png -z 240 240 ../../public/portrait/mathieu_thiry_founder_tenex_studio.webp --out ../../public/brand/signature-mathieu.png
# then deploy, and point <img src> at https://www.tenex.studio/brand/signature-mathieu.png
```

## Editing

- **Fonts**: web fonts load via `<link>` for browser-preview fidelity only.
  On paste Gmail falls back to the inline stacks — `Arimo` is metric-compatible
  with `Arial`, so the pasted result stays faithful. Keep the `Arial`/`monospace`
  fallbacks in every inline `font-family`.
- **The one red moment**: the 34×2px `#e2231a` rule under the name. Per
  `DESIGN.md`, the accent is the single signal — don't add more red.
- **Portrait**: live `…/portrait/mathieu_thiry_founder_tenex_studio.webp`. For a
  PNG fallback (Outlook), see the webp caveat above.
- **Booking link**: button points at `https://cal.eu/tenex/intro` (from
  `PUBLIC_BOOK_URL`). Update the `<a href>` if that changes.

## Re-render the previews

```sh
# local-image copy so the photo resolves before deploy
sed 's#https://www.tenex.studio/brand/signature-mathieu.png#../../public/brand/signature-mathieu.png#' signature.html > _check.html
agent-browser set viewport 760 640
agent-browser open "file://$PWD/_check.html"
agent-browser wait --fn "document.fonts.status==='loaded'"
agent-browser screenshot desktop.png
agent-browser set viewport 384 900
agent-browser reload
agent-browser screenshot mobile.png
rm _check.html
```
