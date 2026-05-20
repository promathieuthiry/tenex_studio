# Tenex Studio — Claude Instructions

## What this is

Tenex Studio is an **AI-native studio** in Nantes for entrepreneurs and modern businesses, working bilingually FR/EN. The studio sells **leverage** — the name is the multiple, *Tenex, ten times*. Three services, one promise: 10× the output with the same hands.

- **AI-integrated content engines**
- **SEO & GEO** (future-proof search + generative engine visibility)
- **Custom AI workflows** to automate growth

Delivery is mainly **websites and web apps** — the studio ships production frontends and lightweight web apps as the surface for every engagement.

This repo is the **public marketing site + content engine** (blog, case studies). Not an app, not a product platform.

## Stack (locked)

- **Astro 6** — `output: 'static'`, `@astrojs/vercel` adapter
- **React 19** islands — `client:load` / `client:visible` only when needed
- **Tailwind v4** — loaded as Vite plugin, **no `tailwind.config.js`**; theme lives in `src/styles/global.css` via `@theme`
- **TypeScript strict** (`astro/tsconfigs/strict`) — no `any`, path alias `@/* → src/*`
- **`motion`** (`motion/react`) for animation — respect `prefers-reduced-motion`
- **Resend** for contact form (server action)
- **Vercel** deploy — Analytics + Speed Insights wired
- **Node ≥ 22.12**

## Architecture

```text
src/
├── actions/        # Astro server actions (contact form)
├── components/     # .astro + .tsx components, one component per file
├── data/           # bilingual content as TS modules (services, faq, work, etc.)
├── layouts/        # BaseLayout.astro
├── lib/            # i18n helpers, pure utilities
├── pages/          # / (FR), /en/* (EN), /contact, /404
└── styles/         # global.css — Tailwind v4 @theme tokens
```

**Content lives in `src/data/*.ts`** as typed bilingual records. Astro Content Collections (MDX) is the **planned** path for blog/case studies — not yet wired. When adding long-form content, propose the migration first; don't quietly introduce a new pattern.

## i18n (locked)

- `defaultLocale: 'fr'`, `locales: ['fr','en']`, `prefixDefaultLocale: false`
- Routes: FR at `/`, `/contact` — EN at `/en/`, `/en/contact`
- All copy uses `Bilingual<T>` from `src/data/_types.ts`: `{ fr: ..., en: ... }`
- Use `pathFor(locale, path)` from `@/lib/i18n` for locale-aware links
- **Every FR string MUST have an EN counterpart.** Never ship FR without EN, or vice versa.

## Voice & copy rules

Brand voice is **Swiss/editorial restraint** — typographic discipline, magazine-monograph tone, confident understatement. Match `DESIGN.md`.

**Banned in copy (both languages):**

- Em dashes (`—`) in body copy — use periods or commas
- AI-slop words: `leverage` (as verb), `unlock`, `seamless`, `robust`, `cutting-edge`, `revolutionary`, `game-changer`, `empower`, `synergy`, `holistic`
- Hype, superlatives, marketing puff
- Mixed-language strings ("notre AI workflow") — keep each locale clean

**Yes:**

- Short sentences. Plain language.
- Concrete nouns over vague abstractions.
- Numbers over adjectives ("10× output" beats "massive output").

## Design system

`DESIGN.md` is the source of truth for tokens, type, color, motion. **Do not modify it without an explicit ask.** Read it before any visual work.

Key tokens (all in `src/styles/global.css` `@theme`):

- Color: `--color-ink` `#0F0F12`, `--color-paper` `#FFFFFF`, `--color-accent` `#E2231A` (Swiss-poster red, **sparingly**)
- Type: Arimo (display, every title), Inter (body/UI), Geist Mono (technical labels)
- Use Tailwind utilities derived from `@theme` (`bg-ink`, `text-accent`, `border-ink/8`). No custom CSS files. No inline `<style>` unless dynamic.

## Code style

- **Strict TS, no `any`.** Branded types for `Slug`/`Url`/`IsoYear2` (see `src/data/_types.ts`).
- **One component per file.** PascalCase filename for `.tsx`, kebab-case for `.astro` is acceptable (current mix exists — match neighboring files).
- **Tailwind utility-first.** No new custom CSS. Extend the theme via `@theme` in `global.css` only when a token is genuinely reusable.
- **Comments only when WHY is non-obvious.** No "what" comments. No section banner comments. No docstrings on obvious functions.
- **No new dependencies without asking.** Deps are minimal and intentional.

## Guardrails — ask before doing

- Modifying `DESIGN.md`, `astro.config.mjs` (i18n, fonts, adapter), or `tsconfig.json`
- Adding npm dependencies
- Migrating content from `src/data/*.ts` to Content Collections
- Restructuring routes or locale strategy
- Anything that touches `.vercel/` or production env

## Workflows

**Adding a new section/component:**

1. Add bilingual data to `src/data/<section>.ts` (`Bilingual<T>` shape)
2. Add component in `src/components/` — `.astro` for static, `.tsx` for interactive
3. Wire into `src/components/HomeView.astro` (or relevant view)
4. Verify FR and EN both render

**Editing copy:**

- Edit the matching `src/data/*.ts` module. Update both `fr` and `en` in the same change.

**Before commit:**

```sh
npm run check    # astro check + tsc
npm run build    # ensure static build passes
```

Conventional commits (`feat:`, `fix:`, `chore:`, ...). Keep subjects ≤ 50 chars.

**Dev:**

```sh
npm run dev      # localhost:4321
```

## When asked to "test the site" or verify UI

Use the `agent-browser` skill (per user global config). Do **not** ship a UI change without seeing it render at both `/` and `/en/`.
