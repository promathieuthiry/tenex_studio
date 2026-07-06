# Tenex Studio — Codex Instructions

## What this is

**FR.** Tenex Studio est une agence web spécialisée dans la création de sites et applications web sur mesures. Basée à Nantes, nous accompagnons les cabinets, studios, cliniques et sociétés de conseil dont l'expertise doit inspirer confiance avant le premier échange. Notre expertise couvre :

- 🎨 Design : démarquez-vous au premier regard
- 💶 Conversion : transformez vos visiteurs en clients
- 🔍 Visibilité : soyez trouvé par Google, recommandé par les IA

Notre approche centrée sur le client garantit des solutions 10× plus personnalisées qui répondent à vos besoins spécifiques.

**EN.** Tenex Studio is a web agency specialized in building custom websites and web apps. Based in Nantes, we support firms, studios, clinics and consultancies whose expertise needs to build trust before the first conversation. Our expertise covers:

- 🎨 Design: stand out at first glance
- 💶 Conversion: turn visitors into clients
- 🔍 Visibility: get found on Google, recommended by AI

Our client-centered approach delivers solutions 10× more personalized that meet your specific needs.

Delivery is mainly **websites and web apps** — the studio ships production frontends and lightweight web apps as the surface for every engagement.

This repo is the **public marketing site + content engine** (blog, case studies). Not an app, not a product platform.

## Cible client (ICP)

Cible définie par les **services experts**, pas par les fondateurs ou les startups. Garde le positionnement premium en ciblant des métiers où la confiance, la preuve, le goût, les références et la clarté décident avant le premier appel.

**En une ligne :** cabinets, studios, cliniques et sociétés de conseil dont le site doit rendre l'expertise immédiatement crédible, lisible et premium.

**Segments prioritaires :**

- **Cabinets d'avocats / avocats :** droit des affaires, fiscalité, PI, social, immobilier, immigration, M&A, contentieux boutiques.
- **Experts-comptables / cabinets comptables :** cabinets qui montent en gamme, conseil, fiscalité internationale, CFO-as-a-service.
- **Consultants :** stratégie, opérations, transformation, pricing, management, durabilité, consultants IA / workflows.
- **Architectes / architectes d'intérieur :** studios où la confiance, le portfolio et le goût comptent avant l'appel.
- **Cliniques privées / médecins spécialistes :** médecine esthétique, dentaire, fertilité, dermatologie, médecine du sport, ophtalmologie.
- **Gestionnaires de patrimoine / conseillers financiers :** indépendants, family office, boutiques d'investissement.
- **Professionnels de l'immobilier :** agences premium, conseil en immobilier d'entreprise, promoteurs, chasseurs immobiliers.
- **Recrutement / chasse de têtes :** executive search, recrutement tech, juridique, finance.
- **Conseil technique / ingénierie :** ingénierie industrielle, cybersécurité, data, conformité, énergie, infrastructure.
- **Agences B2B expertes :** branding, production vidéo, relations presse, études de marché, revenue operations.

- **Offre cœur :** site complet sur mesure, 3 500 €+. Ne jamais ancrer ces acheteurs sur le tier 1 500 €.
- **Portée :** France + international, FR/EN actif.
- **Croissance :** viser des clients plus gros (ticket), pas le volume.

**Déclencheurs principaux :** montée en gamme, nouveau positionnement, site daté, site qui attire les mauvais prospects, besoin de montrer des expertises complexes, besoin de portfolio premium, ouverture à l'international, recrutement de meilleurs clients, cabinet ou clinique qui ne convertit pas assez.

**Qualify IN :** expertise forte, enjeu de confiance avant l'appel, veut une identité forte, veut clarifier son offre, veut attirer de meilleurs clients, veut craft + ownership.
**Qualify OUT :** "juste un truc basique", brochure low-cost, ne valorise pas la différenciation, compare au prix des template shops, veut copier un concurrent.

**Pourquoi ils paient premium (colonne vertébrale du pitch) :** 1. le site rend l'expertise crédible avant l'appel · 2. identité sur mesure, 0 slop · 3. le site qualifie mieux les prospects et soutient des honoraires plus élevés.

**Message marché (modèle 🎯 cible / 🚀 service / 💎 valeur) :**

> Site web 100% sur-mesure qui convertit. En ligne en 2 semaines.

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
├── data/           # bilingual content as TS modules (services, faq, work, etc.)
├── layouts/        # BaseLayout.astro
├── lib/            # i18n helpers, pure utilities
├── pages/          # / (FR), /en/ (EN), /mentions-legales, /en/legal-notice, /404
└── styles/         # global.css — Tailwind v4 @theme tokens
```

**Content lives in `src/data/*.ts`** as typed bilingual records. Astro Content Collections (MDX) is the **planned** path for blog/case studies — not yet wired. When adding long-form content, propose the migration first; don't quietly introduce a new pattern.

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
