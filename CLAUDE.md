# TeneX Studio — Claude Instructions

## What this is

**FR.** TeneX Studio est une agence web spécialisée dans la création de sites et applications web sur mesures. Basée à Nantes, nous accompagnons les entrepreneurs et entreprises modernes dans leur transformation digitale. Notre expertise couvre :

- 🎨 Design : démarquez-vous au premier regard
- 💶 Conversion : transformez vos visiteurs en clients
- 🔍 Visibilité : soyez trouvé par Google, recommandé par les IA

Notre approche centrée sur le client garantit des solutions 10× plus personnalisées qui répondent à vos besoins spécifiques.

**EN.** TeneX Studio is a web agency specialized in building custom websites and web apps. Based in Nantes, we support entrepreneurs and modern businesses through their digital transformation. Our expertise covers:

- 🎨 Design: stand out at first glance
- 💶 Conversion: turn visitors into clients
- 🔍 Visibility: get found on Google, recommended by AI

Our client-centered approach delivers solutions 10× more personalized that meet your specific needs.

Delivery is mainly **websites and web apps** — the studio ships production frontends and lightweight web apps as the surface for every engagement.

This repo is the **public marketing site + content engine** (blog, case studies). Not an app, not a product platform.

## Cible client (ICP)

Cible définie par le **moment**, pas par l'industrie. Garde le positionnement premium sans enfermer dans une verticale.

**En une ligne :** des fondateurs à un moment décisif (levée, lancement, salon) où le site est _load-bearing_ — il gagne ou perd des deals, de l'argent ou de la crédibilité dans les 90 jours.

- **Offre cœur :** site complet sur mesure, 3 500 €+. Ne jamais ancrer ces acheteurs sur le tier 1 500 €.
- **Portée :** France + international, FR/EN actif.
- **Croissance :** viser des clients plus gros (ticket), pas le volume.

**Moments déclencheurs** (le vrai ciblage) : levée de fonds, lancement / go-to-market avec deadline, ouverture à l'international, gros événement (salon, demo day, presse), site qui ne convertit pas. Pas de déclencheur = pas la cible.

**Qualify IN :** deadline réelle, résultat lié au site, veut une identité forte, veut craft + ownership.
**Qualify OUT :** "juste un truc basique", shopping sans deadline, compare au prix des template shops.

**Pourquoi ils paient premium (colonne vertébrale du pitch) :** 1. vitesse sous pression ("en ligne en 2 semaines", preuve #1 de tous les témoignages) · 2. identité sur mesure, 0 slop · 3. le site convertit / crédibilise.

**Message marché (modèle 🎯 cible / 🚀 service / 💎 valeur) :**

> Site web 100% sur-mesure qui convertit. En ligne en 2 semaines.

**Slogan (motto) :** `10x your sales` (EN) · `Boostez par 10 vos ventes` (FR)

## Stack (locked)

- **Astro 6** — `output: 'static'`, `@astrojs/vercel` adapter
- **React 19** islands — `client:load` / `client:visible` only when needed
- **Tailwind v4** — loaded as Vite plugin, **no `tailwind.config.js`**; theme lives in `src/styles/global.css` via `@theme`
- **TypeScript strict** (`astro/tsconfigs/strict`) — no `any`, path alias `@/* → src/*`
- **`motion`** (`motion/react`) for animation — respect `prefers-reduced-motion`
- **Cal.com** booking link (`PUBLIC_BOOK_URL`) is the contact path — no contact form, no server action
- **Vercel** deploy — Analytics + Speed Insights wired
- **Node ≥ 22.12**

## Architecture

```text
src/
├── components/     # .astro + .tsx components, one component per file
├── content/        # blog/ — MDX content collection, locale subfolders (fr/, en/)
├── content.config.ts  # collection schemas (blog)
├── data/           # bilingual content as TS modules (services, faq, work, etc.)
├── layouts/        # BaseLayout.astro
├── lib/            # i18n helpers, pure utilities (blog.ts query helpers)
├── pages/          # / (FR), /en/ (EN), /blog, /mentions-legales, /en/legal-notice, /404
└── styles/         # global.css — Tailwind v4 @theme tokens
```

**Short structured content lives in `src/data/*.ts`** as typed bilingual records (services, faq, work, etc.). **Long-form blog content lives in MDX content collections** under `src/content/blog/{fr,en}/<slug>.mdx` — one file per locale, shared filename = shared slug. Query via `src/lib/blog.ts` (`postsForLocale`, `relatedPosts`, `postSlug`); render with `render(entry)` + the `proseComponents` map (`src/components/article-prose.ts`). Frontmatter validated by the zod schema in `src/content.config.ts`. New post = drop matching `fr/` + `en/` files; no code change. Case studies are still TS-data; if migrated to a collection, follow the same pattern.

## i18n (locked)

- `defaultLocale: 'fr'`, `locales: ['fr','en']`, `prefixDefaultLocale: false`
- Routes: FR at `/`, `/mentions-legales` — EN at `/en/`, `/en/legal-notice`
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
- Migrating remaining content (case studies, etc.) from `src/data/*.ts` to Content Collections (blog already migrated)
- Restructuring routes or locale strategy
- Anything that touches `.vercel/` or production env

## Workflows

**Adding a new section/component:**

1. Add bilingual data to `src/data/<section>.ts` (`Bilingual<T>` shape)
2. Add component in `src/components/` — `.astro` for static, `.tsx` for interactive
3. Wire into `src/components/HomeView.astro` (or relevant view)
4. Verify FR and EN both render

**Adding a blog post:**

1. Create `src/content/blog/fr/<slug>.mdx` and `src/content/blog/en/<slug>.mdx` (same filename).
2. Fill frontmatter per the schema in `src/content.config.ts` (title, date, excerpt, cover, category, author, authorRole, faq) — localized per file. `author` is always `Mathieu Thiry` / role `Fondateur` (FR) · `Founder` (EN); the article schema links it to the `/mathieu` Person entity. Set `updated` only when re-editing a published post (drives `dateModified`).
3. Every post MUST ship a `faq` array (min 1, localized) — it renders a visible Q&A block and emits FAQPage JSON-LD for SEO/GEO. No em dashes, no banned words (voice rules apply to questions and answers too).
4. Write the body in Markdown.
5. Verify the article renders at `/blog/<slug>` and `/en/blog/<slug>`, including the FAQ section.

**Editing copy:**

- Data-driven sections: edit the matching `src/data/*.ts` module. Update both `fr` and `en` in the same change.
- Blog posts: edit the matching `src/content/blog/{fr,en}/<slug>.mdx` files. Keep both locales in sync.

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
