---
name: Tenex Studio
version: 1.0.0
type: design-system
stack: Astro 6 (static) · Tailwind v4 · React 19 islands · motion 12
fonts:
  display: Arimo
  body: Inter
  mono: Geist Mono
---

# Tenex Studio — Design System

> **Stack note.** This is an **Astro 6** static site (`output: 'static'`,
> Vercel adapter), styled with **Tailwind v4** (loaded as a Vite plugin —
> there is **no `tailwind.config.js`**; the entire theme lives in
> `src/styles/global.css` via `@theme`). Interactive pieces are **React 19**
> islands hydrated with `client:load` / `client:visible`; animation is
> **`motion`** (`motion/react`). Fonts are self-hosted at build time by
> Astro's native font API. This document is the source of truth for the
> tokens that actually exist in the codebase — every variable named here is
> defined in `src/styles/global.css` or `astro.config.mjs`.

## 1. Visual Theme & Atmosphere

Tenex Studio is a small studio website that performs as a wordmark. The visual identity is carried by typographic discipline rather than by color, illustration, or ornament — a Swiss-design grid sensibility (Müller-Brockmann, Hofmann, Ruder) filtered through 2026 web craft, where the page reads less like marketing and more like a printed monograph.

The canvas is paper white (`--color-paper` `#FFFFFF`) for content surfaces, but the studio inserts dramatic dark slabs for the hero, testimonials, and stats cards — black-and-white pages alternating like a magazine spread. The dark is not pure black: it is the ink scale, `--color-ink` `#0F0F12` deepened by `--color-ink-soft` `#1C1C1F`, rendered as a two-stop gradient. Ink _is_ the structural brand — it carries the type, the slabs, the depth. The site's one chromatic voice is a single Swiss-poster red (`--color-accent` `#E2231A`), in the lineage of Müller-Brockmann's red-on-black-and-white posters: the lone signal color, used **sparingly and deliberately** — it punctuates, it never decorates. Restraint is what makes the red read as a brand rather than as marketing.

Tenex Studio's typographic signature is **Arimo** — a modern, clean, humanist sans-serif used for **every title, headline, and display element**. Arimo carries the wordmark, the hero, every section heading, every sub-heading, every card title. Its balanced letterforms and even rhythm give the brand a precise, contemporary, editorial voice. Body, navigation, and UI text fall back to **Inter** so Arimo never gets diluted by appearing at small sizes — it stays a _display_ face exclusively. **Geist Mono** handles technical labels, counts, and yearmark stamps.

Display type is pushed to the edge: hero text sits near 176px with deeply negative letter-spacing and a 0.85 line-height, collapsing into a near-logo. Section headings use tight negative tracking. Letter-spacing scales with type size, always negative, always tight — Arimo is rendered like a custom display logotype rather than running text.

Surfaces are flat with subtle two-stop gradients (`--gradient-card-dark` on dark cards; `--gradient-card-light` on light cards) rather than hard fills, adding just enough dimension to keep dark slabs from feeling vinyl. Animations are character-level and scroll-driven (`motion/react`) — headlines reveal letter-by-letter, the wordmark fills on scroll. The site moves like a kinetic poster, and every motion respects `prefers-reduced-motion`.

### Key Characteristics

- Light-mode primary (`--color-paper` canvas) with deliberate dark-slab sections (ink gradient) for cinematic contrast
- **Arimo** as the sole title / display typeface — every headline, sub-heading, card title, wordmark
- **Inter** as the body / UI typeface — nav, paragraphs, captions, metadata
- **Geist Mono** for technical labels, parenthetical counts, yearmark stamps
- Aggressive negative letter-spacing scaled to size on display: tight at hero scale, easing toward `-0.04em` for the wordmark
- Compressed line-heights: `0.85` on hero, `1.10–1.4` everywhere else — text as dense slab
- Ink is the structural brand; the page stays monochrome-dominant — `--color-accent` `#E2231A` (Swiss-poster red) is the single chromatic signal, used with restraint
- Subtle two-stop gradients on cards (`--gradient-card-dark` / `--gradient-card-light`) — never flat fills
- Pill-shaped CTAs (`rounded-pill`), 10–20px radius cards, `0px` sharp edges for media plates
- Depth is contrast first; soft elevation shadows are reserved for **floating UI only** (nav pill, testimonial cards)
- One section rhythm, no drift: every section pulls its padding, gutter, and container from `src/lib/layout.ts` — magazine-spread vertical pacing
- No eyebrows. A headline opens a section on its own; the uppercase mono line above an H1/H2 is banned
- Character-by-character, scroll-driven text animation as the kinetic signature
- `font-feature-settings: 'ss01', 'ss02'` enabled globally for Inter's stylistic sets

## 2. Color Palette & Roles

All colors are Tailwind `@theme` tokens in `src/styles/global.css`. Each token becomes a utility class automatically (`--color-ink` → `bg-ink`, `text-ink`, `border-ink`, plus alpha variants like `text-ink/40`).

### Brand

- **Ink** (`--color-ink` `#0F0F12`) → `text-ink` / `bg-ink`: Primary text, primary CTA fill, social glyphs — _the_ brand color (a near-black carbon, not pure `#000000`)
- **Paper** (`--color-paper` `#FFFFFF`) → `bg-paper` / `text-paper`: Primary canvas, dark-section text — counterpart to ink
- **Accent / Signal** (`--color-accent` `#E2231A`) → `bg-accent` / `text-accent`: The sole chromatic voice — a Swiss-poster red used **sparingly and deliberately** for true emphasis: a key CTA, an active/selected marker, a single highlight pill, a yearmark or index that must be _seen_. One red moment per view, not per element. Never a fill for large surfaces, never a link default, never decorative.

### Token Scale

| Token            | Value     | Tailwind class    | Role                                                       |
| ---------------- | --------- | ----------------- | ---------------------------------------------------------- |
| `--color-ink`        | `#0F0F12` | `bg-ink` `text-ink`   | Primary text, CTA fill, dark gradient end-stop             |
| `--color-ink-soft`   | `#1C1C1F` | `bg-ink-soft`         | Dark gradient start-stop, hover state on dark glyphs       |
| `--color-paper`      | `#FFFFFF` | `bg-paper` `text-paper` | Page canvas, primary surface, text on dark              |
| `--color-paper-warm` | `#F5F5F5` | `bg-paper-warm`       | Secondary surface (testimonials section), light grad start |
| `--color-paper-cool` | `#F5F6F8` | (gradient stop)       | Mid-stop in `--gradient-card-light`                        |
| `--color-paper-deep` | `#DEE0E4` | (gradient stop)       | End-stop in `--gradient-card-light` — cool undertone       |
| `--color-accent`     | `#E2231A` | `bg-accent` `text-accent` | Sole chromatic signal — Swiss-poster red, used sparingly for true emphasis |

**Alpha-derived tones** (no separate token — use Tailwind alpha syntax on `ink`/`paper`):

- Dividers / hairlines: `border-ink/8`, `border-ink/5`
- Muted meta text: `text-ink/40`, `text-ink/55`, `text-ink/70`
- Translucent surfaces on dark: `bg-paper/90` (nav), `bg-paper/10–0.15` (glass cards)
- Scrims & image vignettes: `bg-ink/35`, `radial-gradient` over media for legibility

### Surface Gradients

Defined in `:root` (runtime CSS vars, applied via inline `style` or `bg-[var(--…)]`):

- **`--gradient-card-dark`**: `linear-gradient(180deg, var(--color-ink-soft) 0%, var(--color-ink) 100%)` — default dark card fill — never flat black
- **`--gradient-card-light`**: `linear-gradient(180deg, var(--color-paper-warm) 0%, var(--color-paper-cool) 60%, var(--color-paper-deep) 100%)` — default light card fill — slight cool gradation

### Shadows — Depth Policy

Tenex Studio is contrast-first: most depth comes from tonal slabs, gradient surfaces, and alpha overlays. **Cards on a paper surface carry no shadow — the gradient _is_ the depth.** Shadows exist only on **floating / elevated UI**, and only the two exact values below are sanctioned:

| Element                          | Shadow                                                                  | Where                 |
| -------------------------------- | ----------------------------------------------------------------------- | --------------------- |
| Floating nav pill                | `shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]`                           | `nav-bar.tsx`         |
| Testimonial card (lifts off bg)  | `shadow-[0_1px_0_rgba(15,15,18,0.04),0_30px_60px_-30px_rgba(15,15,18,0.12)]` | `testimonials.tsx` |

Do not invent new shadow values. If an element is not the floating nav or a testimonial card, it gets no shadow.

## 3. Typography Rules

Tenex Studio runs on a **two-and-a-half-font system**: **Arimo** for everything that _signs_ (titles, headlines, display, wordmark), **Inter** for everything that _runs_ (body, nav, captions, UI), and **Geist Mono** for technical punctuation (counts, chips, field labels, yearmarks). Arimo never appears below 24px; the body face never appears above 22px. The split is hard.

### Font Families

Fonts are declared in `astro.config.mjs` and exposed as CSS variables; `@theme inline` in `global.css` maps them onto Tailwind font tokens:

- **Display / Title**: `font-display` → `var(--font-arimo), 'Arimo', system-ui, sans-serif`. Arimo weights **400, 700** only.
- **Body / UI**: `font-sans` → `var(--font-inter), 'Inter', system-ui, sans-serif`. Inter weights **400, 500, 600**. This is the `<body>` default.
- **Mono**: `font-mono` → `var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace`. Geist Mono weights **400, 500**. Technical labels, counts, yearmarks.

### Hierarchy

| Role            | Font  | Size            | Weight | Line Height   | Letter Spacing | Notes                          |
| --------------- | ----- | --------------- | ------ | ------------- | -------------- | ------------------------------ |
| Hero Wordmark   | Arimo | ~176px (≤11rem) | 700    | 0.85          | ~ -8px         | Compressed sub-1 leading       |
| Page Title      | Arimo | ~96px           | 400    | 1.0           | ~ -0.03em      | H1 on `/blog`, `/glossaire`, `/outils`, legal, articles, landings |
| Section Heading | Arimo | ~64px           | 400    | 1.10          | ~ -2px         | Statement headline — large and light, the scale carries it, not the weight |
| Display Number  | Arimo | ~36–48px        | 700    | 1.10          | ~ -3px         | Pricing, large stats — a figure reads as a mark, so it keeps the weight |
| Sub-heading     | Arimo | ~27px           | 700    | 1.10          | ~ -1px         | Card titles, H4                |
| FAQ Question    | Arimo | ~24px           | 400    | 1.12          | -0.02em        | Reads as a spoken question, not a label |
| Quote / Lead    | Arimo | 18–20px         | 400    | 1.4           | -0.005em       | Testimonial blockquotes        |
| Nav / Body      | Inter | 14–16px         | 400–500 | 1.10         | ~ -0.04em (display sizes) | Navigation, primary body |
| Caption / Meta  | Mono  | 10–12px         | 400–500 | normal       | +0.14–0.18em uppercase | Counts, chips, field labels, yearmarks — **never above a heading** |

> The Arimo wordmark in `nav-bar.tsx` uses `font-display font-bold tracking-[-0.04em]` at `text-base`/`md:text-lg` — a literal miniature of the hero.

### Title Section — Arimo as the Voice

The "title section" is everything that introduces, names, or punctuates the page. Arimo owns it entirely:

- **Hero wordmark** (~176px, 700) — the studio's signature, rendered as a typographic logo
- **Page titles** (~96px, 400) — the H1 that names a page
- **Section headings** (~64px, 400) — magazine-spread chapter openers (`SectionHeader` component)
- **Display numbers** (~36–48px, 700) — prices, stats, counters, dates
- **Sub-headings** (~24–27px, 700) — card titles, feature names
- **FAQ questions** (~24px, 400) — asked, not announced

The scale itself lives in **`src/lib/type.ts`** — `TITLE_PAGE` / `TITLE_XL` / `TITLE_LG` / `TITLE_MD` / `TITLE_SM` / `TITLE_SM_REGULAR` / `NUMBER` / `QUOTE` / `LEAD` / `BODY` / `BODY_SM` / `META`. Import from it the way sections import spacing from `layout.ts`. Hand-written `font-display text-…` on a heading is drift.

Below 24px Arimo is replaced by Inter. This guarantees Arimo always reads as a _display_ face — the moment it would lose authority is the moment we hand off.

### Principles

- **Arimo is for titles only**: 24px and up. Never below. The contrast between Arimo headlines and Inter body is the system's primary rhythm.
- **Weight is not how a heading gets its authority — scale is.** Page titles and section headings run Arimo **400** at 48px and up: they open a page or a section by being large, not by being heavy. Weight **700** is reserved for the marks that must punch at small or mid size — the wordmark, card titles, prices. A bolded section heading reads as shouting; a large light one reads as printed.
- **Letter-spacing scales with size, always negative on display**: tight at hero scale (~`-8px`), easing toward `-0.04em` at wordmark size. The bigger the text, the tighter it gets.
- **Sub-1.0 hero leading**: the hero's `0.85` line-height is the typographic signature — letters compress vertically, behaving as a logo rather than a sentence.
- **Tight universal leading**: body and headings use `1.10`; testimonial quotes relax to `1.4`. Tight enough to feel intentional, loose enough to read.
- **Character-level rendering**: Arimo headings split into per-letter spans for scroll-driven reveals (`motion/react`), gated by `useReducedMotion`.
- **Yearmark grammar**: project names paired with `(©26)`-style stamps; captions like `Work (4)` use parenthetical counts — rendered in **Geist Mono**, uppercase, wide tracking. Parens and yearmark glyphs are part of the typographic vocabulary.
- **Stylistic sets on**: `html { font-feature-settings: 'ss01', 'ss02'; }` is global — Inter's alternate forms are part of the voice.

## 4. Component Stylings

Components live in `src/components/` — `.astro` for static shells/composers, `.tsx` for interactive React islands.

### Buttons

#### Primary Pill (Ink)

- Background: `bg-ink`
- Text: `text-paper`, Inter, `text-xs`–`text-sm`
- Padding: `px-4 py-2`
- Radius: `rounded-full` (`--radius-pill`)
- Hover: `hover:opacity-80`
- Use: Primary CTA ("Let's talk", "Book a call", "Start a project")

#### Secondary / Glyph Button

- Background: `bg-ink`, hover `hover:bg-ink-soft`
- Text/icon: `text-paper`
- Radius: `rounded-full`
- Reveal pattern: `opacity-0 group-hover:opacity-100` with translate — used for the arrow glyph on testimonial cards

#### Glass Button (Over Imagery)

- Background: translucent paper (`bg-paper/90`+) with `backdrop-blur`
- Text: `text-ink`
- Radius: `rounded-card` (14px) or `rounded-full`
- Use: Floating CTAs over dark photography or video backgrounds

### Cards & Containers

#### Light Card (Pricing, Feature)

- Background: `var(--gradient-card-light)` — _never_ flat
- Title: Arimo 700, 27–48px
- Body: Inter, 16px
- Radius: `rounded-card-sm` (10px) / `rounded-card` (14px)
- Border: none · Shadow: none (gradient is the depth)

#### Dark Card (Stats, CTA)

- Background: `var(--gradient-card-dark)` — _never_ flat black
- Title: Arimo 700, color `text-paper`
- Body: Inter, color `text-paper/70`
- Radius: `rounded-card-sm` (10px) / `rounded-card-lg` (20px)
- Border: none · Shadow: none

#### Testimonial Card (Floating)

- Background: `bg-paper` (the section behind it is `bg-paper-warm`)
- Radius: `rounded-[var(--radius-card-lg)]` (20px)
- Padding: `p-7 md:p-9`
- **Shadow (the one sanctioned card shadow):** `shadow-[0_1px_0_rgba(15,15,18,0.04),0_30px_60px_-30px_rgba(15,15,18,0.12)]`
- Quote: Arimo 400, 18–20px, `leading-[1.4]`, `tracking-[-0.005em]`
- Meta: Inter `text-sm` (name) + Geist Mono `text-[11px]` uppercase `tracking-[0.14em]` (role)
- Index stamp: Geist Mono `text-[10px]` uppercase `tracking-[0.18em]` `text-ink/40` — `(01)` style

#### Glass Card (Form, Goal — over dark)

- Background: `bg-paper/10` to `bg-paper/15` with implied `backdrop-blur`
- Radius: `rounded-card-sm` (10px)
- Border: none

#### Work Card (Media Plate)

- Background: image fills container (~1.55:1 aspect)
- Radius: `rounded-plate` (`0px` — sharp edges, print-style plates)
- Caption below: Arimo 700 (project name) + `(©26)` Geist Mono yearmark stamp
- Optional overlay: `bg-ink/45` linear or `radial-gradient` vignette for legibility

### Tabs / Pills (Tags)

- Background: `bg-ink` (or `bg-ink-soft`)
- Radius: `rounded-full`
- Text: `text-paper`, Inter, `text-xs`

### Links

- **Default**: `a { color: inherit; text-decoration: none; }` (set in `@layer base`). Inherits ink on light, paper on dark.
- **Underline accent**: a thin decorative bar element — _not_ `text-decoration`. Use a `border-ink/8` or `border-ink/5` hairline.
- **No colored link by default** — links inherit ink (on light) / paper (on dark). The accent red is reserved for deliberate emphasis, never a default link color.

### Navigation (`nav-bar.tsx`)

- A **fixed floating pill**, centered, that hides/reveals on scroll direction (`motion`, hidden offset `y: -140`, respects `useReducedMotion`)
- Container: `rounded-full border border-ink/5 bg-paper/90 backdrop-blur` + the sanctioned nav shadow `shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]`
- Padding: `px-4 py-2 md:px-6 md:py-3`; `max-w-screen-xl`
- Logo: `WORDMARK` in `font-display font-bold tracking-[-0.04em]` at `text-base md:text-lg text-ink`
- Nav links: `font-sans text-sm text-ink hover:opacity-70`; disabled link `text-ink/40`
- Right side: `LocaleSwitcher` + ink primary pill ("talk") shown `md:` and up
- Height token: `--nav-h` `56px` mobile / `69px` at `≥768px`

### Forms

- Inputs: minimal — single 1–2px bottom border (`border-ink/…`), transparent background, Inter 16px, `text-ink`
- Labels: Geist Mono, 10–12px, uppercase, wide tracking
- Form Card (over dark): `bg-paper/15`, `rounded-card-sm`, 24px internal padding
- Form handling: **Astro Actions** (`src/actions/`), email via `resend`

### Decorative Elements

- **Skip link**: visually hidden, on focus becomes an ink pill (`focus:bg-ink focus:text-paper focus:rounded-full`)
- **Selection**: `::selection { background: var(--color-ink); color: var(--color-paper); }`
- **Focus ring**: `:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }`
- **Dot / Underline Bar**: thin ink hairline used as bullet or decoration — never CSS `text-decoration`

## 5. Layout Principles

### Spacing System

**`src/lib/layout.ts` is the source of truth.** Every section imports from it. Spacing drift between sections is the loudest tell that a page was assembled rather than designed, so there is exactly one rhythm and no section opts out casually.

| Export         | Value                                          | Use                                          |
| -------------- | ---------------------------------------------- | -------------------------------------------- |
| `SECTION_X`    | `px-6 md:px-10`                                | Gutter. Every section, every page.           |
| `SECTION_Y`    | `py-24 md:py-40`                               | Vertical pad (96px → 160px)                  |
| `SECTION`      | `SECTION_X` + `SECTION_Y`                      | The default. Reach for this first.           |
| `SECTION_LEAD` | `SECTION_X` + `pb-24 pt-32 md:pb-40 md:pt-48`  | Page-opening section — extra top clears the fixed nav |
| `CONTAINER`    | `mx-auto max-w-7xl`                            | Centered content column (1280px)             |
| `HEADER_GAP`   | `mt-16 md:mt-24`                               | Gap between a `SectionHeader` and section body |

`--nav-h` (`56px` / `69px` at `≥768px`) remains the fixed-nav offset token, used for `calc()` clearance.

**Sanctioned exceptions** — only these, and each has a structural reason:

- **Edge-bleed sections** (testimonials carousel) put `SECTION_Y` on the `<section>` and `SECTION_X` on the inner container, so the track can run to the viewport edge.
- **The hero** (`mono-hero`, SEO landing header) sets its own vertical rhythm — it is a full-viewport slab, not a section.
- **Decorative slabs** (`monogram-reveal`) carry no padding at all.

Anything else uses `SECTION` + `CONTAINER`. If a new section "needs" different padding, that is a signal to reconsider the section, not to fork the scale.

### Grid & Container

- Centered content, `CONTAINER` (`max-w-7xl`), `SECTION_X` gutter
- Full-bleed dark sections punctuate constrained light content — magazine spreads
- Work grid: 1- or 2-column with `rounded-plate` (0px) media plates
- Pricing: 2-column with gradient cards
- Section dividers: `border-y border-ink/8`
- Footer: dark slab, multi-column

### Section Pacing — the Cinematic Cadence

- Sections breathe at `SECTION_Y` (96px mobile → 160px desktop) — uniform, so the surface change does the work
- Background change (`bg-paper` ↔ ink gradient, or `bg-paper` ↔ `bg-paper-warm`) is the primary section boundary, not whitespace alone
- **A section opens on its headline.** No eyebrow, no label, no uppercase run-up — the H2 carries the weight alone (see `section-header.tsx`)
- Scroll-pinned moments (e.g. the testimonials horizontal track, the `name-mark` scroll-fill) act as cinematic beats

### Whitespace Philosophy

- **Cinematic vertical rhythm**: 100–200px between major sections — pauses between scenes, not margins.
- **Tight intra-section density**: line-height `1.10`, small gaps — content packs tightly, sections breathe widely.
- **Slab-defined separation**: surface color change is the primary boundary.

### Border Radius Scale

Tokenized in `@theme` (each becomes `rounded-*`):

| Token            | Value    | Tailwind class     | Use                                       |
| ---------------- | -------- | ------------------ | ----------------------------------------- |
| `--radius-plate`     | `0px`    | `rounded-plate`        | Work cards, media plates (print-style)    |
| `--radius-card-sm`   | `10px`   | `rounded-card-sm`      | Pricing, stats, glass cards               |
| `--radius-card`      | `14px`   | `rounded-card`         | Default card / glass button radius        |
| `--radius-card-lg`   | `20px`   | `rounded-card-lg`      | Image wrappers, testimonial cards         |
| `--radius-pill`      | `9999px` | `rounded-pill` / `rounded-full` | CTAs, nav pill, social, badges   |

> Responsive breakpoints are defined in **Section 8 — Responsive Behavior**.

## 6. Depth & Elevation

| Level                  | Treatment                                                | Use                                  |
| ---------------------- | -------------------------------------------------------- | ------------------------------------ |
| Flat (Level 0)         | No fill, no shadow                                       | Plain paper canvas, default state    |
| Tonal Slab (Level 1)   | Surface change (`bg-paper` ↔ ink gradient ↔ `bg-paper-warm`) | Section breaks                  |
| Gradient Surface (L2)  | `--gradient-card-light` / `--gradient-card-dark`         | Cards, panels                        |
| Translucent Layer (L3) | `bg-paper/10–0.97` or `bg-ink/10–0.55`, `backdrop-blur`  | Glass overlays, scrims, frosted nav  |
| Floating Shadow (L4)   | One of the **two sanctioned shadows** (nav / testimonial)| Floating nav pill, testimonial cards |
| Vignette (Level 5)     | `radial-gradient` ink scrim over imagery                 | Media overlays for text legibility   |

Depth is structural: a dark card next to a light card is the elevation; a two-stop gradient is the surface curvature; a translucent paper over a photograph is the floating affordance. Box-shadows are an _exception_, not a system primitive — restricted to the floating nav pill and testimonial cards, with the exact values in Section 2.

## 7. Do's and Don'ts

### Do

- Use **Arimo for every title, headline, sub-heading, and wordmark** (24px and up)
- Use **Inter for every body, nav, and UI element** (≤22px); **Geist Mono** for counts, chips, field labels, and yearmarks
- Apply negative letter-spacing scaling with size on display — always tight, always negative (wordmark `tracking-[-0.04em]`)
- Set hero line-height `0.85` — the compressed leading is the typographic signature
- Use the ink/paper token system: `text-ink` / `bg-ink` / `bg-paper` — ink is the brand
- Insert dark ink-gradient slabs between paper sections for cinematic contrast
- Apply two-stop gradients to cards (`--gradient-card-dark` / `--gradient-card-light`) — never flat fills
- Use `rounded-pill` for CTAs, `rounded-card-sm`/`-card`/`-lg` for cards, `rounded-plate` for media
- Pace sections with `SECTION` / `CONTAINER` / `HEADER_GAP` from `src/lib/layout.ts` — one rhythm, magazine-spread cadence
- Open a section with its headline alone — `SectionHeader` renders an H2 and nothing above it
- Pair project names with `(©26)` Geist Mono yearmark stamps
- Reserve the Arimo-bold wordmark as the recurring identity — never substituted, no trademark glyph
- Animate Arimo text per-letter via `motion/react` — and always gate motion behind `useReducedMotion`

### Don't

- Don't render body, nav, or UI text in Arimo — it is a _display_ face only, never below 24px
- Don't render a hero or section heading in Inter — display type is Arimo's job
- Don't use positive letter-spacing or normal tracking on display text — negative tracking is non-negotiable
- Don't scatter the accent — `--color-accent` `#E2231A` is the single chromatic signal; one red moment per view, never a large fill, never decorative, never a default link color
- Don't invent box-shadows — only the **two sanctioned values** (nav pill, testimonial card) exist; everything else on paper has no shadow
- Don't apply rounded corners to media or work cards — use `rounded-plate` (0px), print-plate sharp
- Don't flatten card surfaces — gradients carry the dimensional weight
- **Don't add an eyebrow** — a short uppercase line above the H1/H2 is banned. It is the single most templated move in web design, and it is what every AI-assembled page reaches for. If the label carries real information, it belongs in the headline or not at all
- Don't hand-write section padding, gutters, or container widths — import `SECTION` / `SECTION_X` / `SECTION_Y` / `CONTAINER` / `HEADER_GAP` from `src/lib/layout.ts`. A section with a bespoke `py-*` is drift, and drift reads as sloppiness before anyone can name why
- Don't use `text-decoration: underline` — use a decorative ink hairline instead
- Don't reach for italic, condensed, or alt cuts of Arimo — 400 and 700 only (those are the only weights loaded)
- Don't add a `tailwind.config.js` — all theme config lives in `src/styles/global.css` `@theme`
- Don't stamp live quantity counts on list pages — total-term counts and per-category tallies (`(101)`, `(02)`) are auto-derived list lengths, not curated index marks. The parenthetical-count vocabulary (`(©26)` yearmarks, `(01) Studio` chapter markers, the fixed `Work (4)` caption) is reserved for hand-authored structure. Never render `terms.length` / `items.length` as a Geist Mono stamp on the glossary or any dynamic listing.

## 8. Responsive Behavior

### Breakpoints

Tailwind v4 defaults; key custom join at `768px` (`md:`), where `--nav-h` shifts 56→69px.

| Name    | Width      | Key Changes                                                            |
| ------- | ---------- | ---------------------------------------------------------------------- |
| Mobile  | <768px     | Arimo hero scales down, single-column stacks, condensed nav pill       |
| Tablet+ | ≥768px     | `md:` — fuller nav (links + talk pill), wider padding, taller nav      |
| Desktop | ≥1280px    | `CONTAINER` (`max-w-7xl`), full multi-column grids                     |

### Collapsing Strategy

- **Hero (Arimo)**: scales down proportionally; line-height stays `0.85`
- **Section heading (Arimo)**: scales down; tracking stays negative
- **Letter-spacing**: scales with size — never collapses to `normal`
- **Section padding**: `SECTION_Y` handles it — `py-40` (160px) desktop → `py-24` (96px) mobile floor
- **Work grid**: 2-col → 1-col stacked plates
- **Nav**: link row + talk pill hidden below `md:` → condensed pill (wordmark + locale switcher only)
- **Testimonials**: scroll-pinned horizontal track on desktop → native snap-scroll carousel on reduced-motion / small screens

## 9. Agent Prompt Guide

### Quick Color Reference

```yaml
canvas:
  light: "var(--color-paper)   #FFFFFF"
  dark:  "var(--gradient-card-dark)  (#1C1C1F → #0F0F12)"
text:
  on_light: "var(--color-ink)    #0F0F12"   # text-ink
  on_dark:  "var(--color-paper)  #FFFFFF"   # text-paper
card:
  light: "var(--gradient-card-light)  (#F5F5F5 → #F5F6F8 60% → #DEE0E4)"
  dark:  "var(--gradient-card-dark)   (#1C1C1F → #0F0F12)"
surface_alt: "var(--color-paper-warm)  #F5F5F5"   # bg-paper-warm (testimonials section)
dividers: "border-ink/8  |  border-ink/5"
accent:
  signal: "var(--color-accent)  #E2231A"    # Swiss-poster red — sparing, deliberate emphasis only
shadows:
  nav_pill:        "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]"
  testimonial_card: "shadow-[0_1px_0_rgba(15,15,18,0.04),0_30px_60px_-30px_rgba(15,15,18,0.12)]"
```

### Quick Type Reference

```yaml
title:
  font: Arimo (font-display)   # weights 400, 700 only
  min_size: 24
  rule: "48px and up -> 400. Below that -> 700."
  scale:
    hero:    { weight: 700, line_height: 0.85, letter_spacing: "~ -8px" }
    page:    { weight: 400, line_height: 1.00, letter_spacing: "-0.03em" }  # H1, TITLE_PAGE
    section: { weight: 400, line_height: 1.10, letter_spacing: "~ -2px" }   # large + light
    number:  { weight: 700, line_height: 1.10, letter_spacing: "~ -3px" }   # prices, stats
    sub:     { weight: 700, line_height: 1.10, letter_spacing: "~ -1px" }   # card titles
    faq:     { weight: 400, line_height: 1.12, letter_spacing: "-0.02em" }
    wordmark:{ weight: 700, tracking: "-0.04em" }
body:
  font: Inter (font-sans)      # weights 400, 500, 600
  max_size: 22
  scale:
    nav:     { size: 14-16, line_height: 1.10 }
    body:    { size: 16,    line_height: 1.10 }
meta:
  font: Geist Mono (font-mono) # weights 400, 500
  scale:
    caption: { size: 10-12, uppercase: true, tracking: "0.14-0.18em" }
```

### Tailwind Tokens (defined in `src/styles/global.css`)

```yaml
fonts:        # @theme inline → font-display | font-sans | font-mono
  font-display: var(--font-arimo), 'Arimo', system-ui, sans-serif
  font-sans:    var(--font-inter), 'Inter', system-ui, sans-serif
  font-mono:    var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace
colors:       # @theme → bg-* / text-* / border-* (+ /alpha)
  ink: "#0F0F12"   ink-soft: "#1C1C1F"
  paper: "#FFFFFF" paper-warm: "#F5F5F5" paper-cool: "#F5F6F8" paper-deep: "#DEE0E4"
  accent: "#E2231A"
radius:       # @theme → rounded-*
  plate: 0   card-sm: 10   card: 14   card-lg: 20   pill: 9999
space:        # @theme
  section: 200   section-sm: 150   section-mobile: 100
runtime:      # :root (use via inline style or bg-[var(--…)])
  --nav-h: 56px / 69px(≥768px)
  --gradient-card-dark, --gradient-card-light
```

### Example Component Prompts

- "Create a hero on the dark ink gradient (`background: var(--gradient-card-dark)`). Headline `Tenex Studio` in `font-display font-bold` at ~176px, `leading-[0.85]`, deep negative tracking, `text-paper`. Per-letter spans for `motion/react` reveal, gated by `useReducedMotion`. Below: Inter `text-base text-paper/70` lead."
- "Design a pricing card: `background: var(--gradient-card-light)`, `rounded-card-sm`, no border, no shadow. Title `$2,000` in `font-display font-bold` ~48px tight tracking. Body Inter 16px. Bottom CTA: `bg-ink text-paper rounded-full px-4 py-2 font-sans text-xs hover:opacity-80`."
- "Build the nav: fixed centered floating pill, `rounded-full border border-ink/5 bg-paper/90 backdrop-blur shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]`, `px-4 py-2 md:px-6 md:py-3`, `max-w-screen-xl`. Wordmark `font-display font-bold tracking-[-0.04em] text-ink`. Links `font-sans text-sm text-ink hover:opacity-70`. Hide/reveal on scroll with `motion`, respect `useReducedMotion`."
- "Create a stats card: `background: var(--gradient-card-dark)`, `rounded-card-sm`, `text-paper`. Number in `font-display font-bold` ~48px; caption Inter `text-sm text-paper/60`."
- "Design a work card: `rounded-plate` (0px), full-width image ~1.55:1. Beneath: project name in `font-display font-bold` + `(©26)` in `font-mono` uppercase tracking. Hover: `radial-gradient` ink vignette overlay."
- "Open a section: `<section className={SECTION}>` wrapping `<div className={CONTAINER}>`, then `SectionHeader` (H2, Arimo, `tracking-[-0.03em]`, optional muted `titleTail`) and the body at `HEADER_GAP`. No eyebrow above the heading — the headline opens the section alone (see `section-header.tsx`, `src/lib/layout.ts`)."

### Iteration Guide

1. Start on `bg-paper` — light is the default ground.
2. Per text element decide: **title (Arimo, ≥24px) or body (Inter, ≤22px) or meta (Geist Mono)** — never mix. Pull the class from `src/lib/type.ts`; don't hand-roll it.
3. Weight follows scale: display at **48px and up is 400**, below that is 700. Never bold a section heading.
4. Letter-spacing is negative and scales with size on display.
5. Hero line-height `0.85` is the signature.
6. Insert ink-gradient dark slabs (or `bg-paper-warm`) for section contrast — alternate like spreads.
7. Cards carry two-stop gradients (`--gradient-card-*`) — flat fills break the system.
8. `rounded-pill` for CTAs, `rounded-card-sm/-card/-lg` for cards, `rounded-plate` for media.
9. No shadows except the two sanctioned floating-UI values.
10. Section padding, gutter, container: `SECTION` / `CONTAINER` / `HEADER_GAP` — never hand-rolled. Headline opens the section; no eyebrow.
11. Pair project names with `(©26)` Geist Mono yearmark stamps.
12. Preserve the Arimo wordmark everywhere, no trademark glyph.
13. Gate every animation behind `useReducedMotion` / `prefers-reduced-motion`.

## 10. Fonts — Install & Wiring (Astro)

Arimo, Inter, and Geist Mono are loaded via **Astro's native font API** (`fontProviders.google()`) — no npm font packages, no runtime third-party requests. Astro self-hosts the files at build time and exposes each as a CSS variable.

### `astro.config.mjs`

```js
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // …site, output: 'static', adapter, integrations…
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Arimo',
      cssVariable: '--font-arimo',
      weights: [400, 700],
      subsets: ['latin', 'latin-ext'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      subsets: ['latin', 'latin-ext'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: [400, 500],
      subsets: ['latin'],
      styles: ['normal'],
    },
  ],
});
```

### `src/layouts/BaseLayout.astro`

Import the `Font` component from `astro:assets` and emit one tag per font in `<head>` (preload the two display/body faces). The global stylesheet is imported here.

```astro
---
import { Font } from 'astro:assets';
import '@/styles/global.css';
---
<head>
  <Font cssVariable="--font-arimo" preload />
  <Font cssVariable="--font-inter" preload />
  <Font cssVariable="--font-geist-mono" />
</head>
<body class="relative flex min-h-full flex-col bg-paper text-ink font-sans">
  <slot />
</body>
```

### `src/styles/global.css`

Tailwind v4: `@theme inline` maps the Astro font variables onto the `font-*` utilities; `@theme` registers color/radius/space tokens; `:root` holds runtime vars. **No `tailwind.config.js`.**

```css
@import 'tailwindcss';

@theme inline {
  --font-display: var(--font-arimo), 'Arimo', system-ui, sans-serif;
  --font-sans: var(--font-inter), 'Inter', system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;
}

@theme {
  --color-ink: #0f0f12;
  --color-ink-soft: #1c1c1f;
  --color-paper: #ffffff;
  --color-paper-warm: #f5f5f5;
  --color-paper-cool: #f5f6f8;
  --color-paper-deep: #dee0e4;
  --color-accent: #e2231a;

  --radius-pill: 9999px;
  --radius-card: 14px;
  --radius-card-sm: 10px;
  --radius-card-lg: 20px;
  --radius-plate: 0px;

  /* DEPRECATED — declared but referenced nowhere. Section rhythm lives in
     src/lib/layout.ts (SECTION / SECTION_Y). Safe to delete from global.css. */
  --space-section: 200px;
  --space-section-sm: 150px;
  --space-section-mobile: 100px;
}

:root {
  color-scheme: light;
  --nav-h: 56px;
  --gradient-card-dark: linear-gradient(180deg, var(--color-ink-soft) 0%, var(--color-ink) 100%);
  --gradient-card-light: linear-gradient(180deg, var(--color-paper-warm) 0%, var(--color-paper-cool) 60%, var(--color-paper-deep) 100%);
}

@media (min-width: 768px) {
  :root { --nav-h: 69px; }
}

html { font-feature-settings: 'ss01', 'ss02'; }
body { font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }
::selection { background: var(--color-ink); color: var(--color-paper); }
```

### Usage

- Titles (≥24px): `font-display` — Arimo (400 / 700 only).
- Body, nav, UI (≤22px): default `font-sans` — Inter (400 / 500 / 600).
- Counts, chips, field labels, yearmarks: `font-mono` — Geist Mono (400 / 500). Never as a line above a heading.
