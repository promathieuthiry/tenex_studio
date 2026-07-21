# Portfolio case study pages — design

Date: 2026-07-21

## Goal

Give each `WORK` project a dedicated case study page, structured
Description → Challenge → Solution → Impact. Inspired by
`bycrawford.com/portfolio/<slug>` (hero → overview + meta → approach →
prev/next → CTA), adapted to Tenex Studio's Swiss/editorial restraint.

Three pages ship: Osmosia, Renardo Tech, Studio Lumen.

## Decisions (locked with user)

- **Routes:** `/portfolio/<slug>` (FR) · `/en/portfolio/<slug>` (EN). Static.
- **Impact:** qualitative outcomes only. No invented metrics.
- **Duration:** no verified per-client value, so the field is optional and
  omitted for now. Meta panel shows Client · Secteur · Type · Site.
- **Cards:** the work card body links internally to the case study. The arrow
  button keeps the external live site (secondary, only when `liveUrl` exists).
- **Solution section:** short prose paragraph followed by a tight deliverables
  list (derived from `study.deliverables`).
- **Out of scope:** section label stays "Réalisations" / "Realizations"; no
  gallery (one cover asset per project); no FAQ / newsletter block.

## Data model — `src/data/work.ts`

Extend `WorkProject` with a required `study` object:

```ts
export type CaseStudy = Readonly<{
  overview: Bilingual;               // 1–2 sentence intro / description
  challenge: Bilingual;              // one paragraph
  solution: Bilingual;              // one paragraph
  deliverables: ReadonlyArray<Bilingual>; // scannable "what we built" list
  impact: ReadonlyArray<Bilingual>;  // qualitative outcome bullets
}>;

export type WorkProject = Readonly<{
  // …existing fields…
  duration?: Bilingual;              // optional, omitted until verified
  study: CaseStudy;
}>;
```

Helpers added next to the data:

- `workPath(project, locale)` → `/portfolio/<slug>/` · `/en/portfolio/<slug>/`
  (via `pathFor`).
- `WORK_BY_SLUG: ReadonlyMap<Slug, WorkProject>`.
- `CASE_STUDY_LABELS: Record<Locale, {...}>` — section titles and UI strings:
  challenge, solution, impact, deliverables, meta labels (client, sector,
  type, site), visitSite, prev, next, backToWork, breadcrumbWork.

## Routes

- `src/pages/portfolio/[slug].astro` (FR, `locale = 'fr'`)
- `src/pages/en/portfolio/[slug].astro` (EN, `locale = 'en'`)

Each: `getStaticPaths()` maps `WORK` → `{ params: { slug }, props: { project } }`,
then renders `<CaseStudy project locale />` inside `BaseLayout` with
`buildCaseStudySeo(project, locale)`. Mirrors `glossaire/[slug].astro`.

## Component — `src/components/case-study.astro`

Static `.astro`. Mirrors `glossary-term.astro` layout container
(`max-w-3xl`, `px-6 pt-32`, `border-ink/10` dividers) and type tokens
(`TITLE_LG`, `LEAD`, `BODY`, `META`). No new CSS, no inline style.

Order:

1. **Breadcrumb** — Accueil (`pathFor(locale)`) / Réalisations
   (`pathFor(locale) + '#work'`) / project name.
2. **Header** — category tag (pill), `h1` = project name, headline eyebrow.
3. **Cover** — `project.cover` full-width, `aspect-[5/4]` or `16/9`, lazy.
4. **Overview + meta** — `study.overview` as lead paragraph; meta list beside
   it (Client = name, Secteur = headline, Type = category, Site = live link
   "Voir le site" when `liveUrl`).
5. **Défi / Challenge** — section heading + `study.challenge`.
6. **Solution** — section heading + `study.solution` paragraph + deliverables
   `<ul>`.
7. **Impact** — section heading + `study.impact` outcome `<ul>`.
8. **Prev / Next** — neighbouring `WORK` entries (wrap-around), linked via
   `workPath`.
9. **Contact CTA** — reuse existing `ContactCta` (booking link).

## SEO — `buildCaseStudySeo(project, locale)` in `src/lib/seo.ts`

Mirrors `buildGlossaryTermSeo`. Returns `SeoProps`:

- `title` = `${name} — Tenex Studio`, `description` = `study.overview[locale]`.
- `canonical` = `workPath(project, locale)`; hreflang fr/en/x-default.
- `ogImage` = `project.cover`, `ogImageAlt` = name.
- `jsonLd` `@graph`:
  - `CreativeWork` — name, description, `image` = cover, `url` = canonical,
    `inLanguage`, `creator` = `{ '@id': businessId }`,
    `about` = `{ '@type': 'Organization', name }`, `keywords` = tags joined.
  - `BreadcrumbList` — Tenex Studio → Réalisations (`/#work`) → name.

## Card linking — `src/components/work-card.tsx`

- The figure/body (currently wrapped in the external `liveUrl` anchor) instead
  links to `workPath(project, locale)` (internal). Uses an internal `<a>`.
- The small arrow button in the header keeps `liveUrl` (external, secondary),
  rendered only when `liveUrl` is set.
- `aria-label` updates to reflect "view case study" for the internal link;
  external arrow keeps the `visitAriaLabel` "open website" label.

## Content (drafted — review for voice)

Voice rules enforced: no em dashes, no banned words, short sentences, FR+EN.

### Osmosia

- **overview**
  - FR: Osmosia est un assistant IA qui répond aux leads des vendeurs auto sur
    leboncoin et La Centrale en moins de 15 minutes. Le site rend ce produit
    technique clair et pousse à réserver une démo.
  - EN: Osmosia is an AI assistant that answers car dealers' leads on leboncoin
    and La Centrale in under 15 minutes. The site makes this technical product
    clear and drives demo bookings.
- **challenge**
  - FR: Un produit IA est difficile à expliquer vite. Les vendeurs auto ne sont
    pas des acheteurs techniques. Il fallait rendre la valeur évidente en une
    lecture, inspirer confiance pour un produit jeune, et transformer la visite
    en démo réservée. Le tout en français et en anglais.
  - EN: An AI product is hard to explain fast. Car dealers are not technical
    buyers. The value had to land in one read, a young product had to feel
    trustworthy, and a visit had to turn into a booked demo. In French and
    English.
- **solution**
  - FR: Un site vitrine bilingue centré sur une promesse simple: répondre aux
    leads en moins de 15 minutes. La structure va droit au bénéfice, la
    réservation de démo tient en un clic, et le design pose une image sérieuse
    pour une startup IA.
  - EN: A bilingual marketing site built around one simple promise: answer leads
    in under 15 minutes. The structure goes straight to the benefit, demo
    booking takes one click, and the design gives an AI startup a serious face.
- **deliverables**
  - Design de site sur mesure / Custom website design
  - Développement / Development
  - Version bilingue FR / EN / Bilingual FR / EN build
- **impact**
  - FR: Un produit technique rendu clair en une lecture. · EN: A technical
    product made clear in one read.
  - FR: Une réservation de démo en un clic. · EN: Demo booking in one click.
  - FR: Un site bilingue prêt pour la France et l'international. · EN: A
    bilingual site ready for France and beyond.

### Renardo Tech

- **overview**
  - FR: Renardo Tech conçoit une imagerie électromagnétique portable pour
    diagnostiquer réseaux électriques et infrastructures industrielles. Le site
    rend une technologie pointue immédiatement compréhensible.
  - EN: Renardo Tech builds portable electromagnetic imaging to diagnose
    electrical networks and industrial infrastructure. The site turns advanced
    technology into a clear proposition.
- **challenge**
  - FR: La deeptech se vend mal quand personne ne la comprend. Les décideurs
    industriels devaient saisir vite ce que fait la technologie et pourquoi
    elle est crédible. Il fallait aussi dérouler un parcours produit détaillé
    et laisser l'équipe maîtriser son contenu.
  - EN: Deeptech does not sell when no one understands it. Industrial
    decision-makers had to grasp fast what the technology does and why it holds
    up. The site also had to carry a detailed product journey and let the team
    own its content.
- **solution**
  - FR: Un site au parcours structuré, du problème à la technologie puis aux
    cas d'usage. La hiérarchie guide la lecture, le design affirme la
    crédibilité d'ingénierie, et un CMS Sanity rend l'équipe autonome.
  - EN: A site with a structured journey, from problem to technology to use
    cases. The hierarchy guides the read, the design asserts engineering
    credibility, and a Sanity CMS keeps the team autonomous.
- **deliverables**
  - Design de site sur mesure / Custom website design
  - Développement / Development
  - CMS Sanity / Sanity CMS
- **impact**
  - FR: Une technologie pointue rendue compréhensible. · EN: Advanced
    technology made understandable.
  - FR: Un parcours produit détaillé, du problème au cas d'usage. · EN: A
    detailed product journey, from problem to use case.
  - FR: Une équipe autonome sur son contenu via le CMS. · EN: A team autonomous
    over its content through the CMS.

### Studio Lumen

- **overview**
  - FR: Studio Lumen est un studio vidéo mobile pour les entreprises. Le site
    met le travail en avant, convertit, et gère la prise de rendez-vous et le
    contenu sans friction.
  - EN: Studio Lumen is a mobile video studio for businesses. The site puts the
    work forward, converts, and handles booking and content without friction.
- **challenge**
  - FR: Un studio vidéo se juge sur ce qu'il montre. Il fallait un site qui met
    le travail en avant et convertit, une prise de rendez-vous sans friction,
    et une identité cohérente. Le studio voulait aussi rester maître de son
    contenu.
  - EN: A video studio is judged on what it shows. It needed a site that puts
    the work forward and converts, frictionless booking, and a coherent
    identity. The studio also wanted to stay in control of its content.
- **solution**
  - FR: Un site portfolio qui met la vidéo au centre, avec une prise de
    rendez-vous Calendly intégrée et un CMS Sanity sur mesure. L'identité et le
    site avancent ensemble, et le studio gère ses projets seul.
  - EN: A portfolio site that puts video at the center, with Calendly booking
    built in and a tailored Sanity CMS. Identity and site move together, and
    the studio manages its projects on its own.
- **deliverables**
  - Identité / Identity
  - Design de site sur mesure / Custom website design
  - Développement / Development
  - CMS Sanity / Sanity CMS
  - Réservation Calendly / Calendly booking
- **impact**
  - FR: Un portfolio qui met le travail en avant et convertit. · EN: A
    portfolio that puts the work forward and converts.
  - FR: Une prise de rendez-vous directe via Calendly. · EN: Direct booking
    through Calendly.
  - FR: Un contenu géré en autonomie via le CMS. · EN: Content managed
    autonomously through the CMS.

## Verification

- `npm run check` (astro check + tsc, strict, no `any`).
- `npm run build` (static build passes, all portfolio routes emitted).
- Browser check via `agent-browser`: one case study at `/portfolio/<slug>` and
  `/en/portfolio/<slug>`, plus a work card click routing to the internal page.
- Confirm FR and EN both render every section.
