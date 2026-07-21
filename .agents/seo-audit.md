# SEO Audit

*Last updated: 2026-06-14*

## Executive Summary

Overall SEO health: **much stronger than the previous audit, with a few important cleanup items left**.

The site now builds 29 static pages, including the core custom website page and bilingual vertical pages for law firms, accountants, clinics, wealth management, consultants, real estate, recruitment, engineering, B2B agencies and architects. The new pages are server-rendered, indexable, internally linked, included in the sitemap, and have page-specific titles, descriptions, canonicals, hreflang links and JSON-LD.

The highest-impact remaining issue is the homepage. Its metadata, schema description and footer label still use the old "web and AI agency" positioning instead of the current expert-service website positioning.

## Top Priorities

1. **Update homepage SEO metadata and schema description**
   - Impact: High
   - Evidence: Rendered `/` title is `TeneX Studio - Agence web et IA à Nantes`; rendered `/en/` title is `TeneX Studio - Web and AI Studio in Nantes`. The homepage `ProfessionalService` schema description also repeats the old "Agence web et IA" positioning.
   - Fix: Update `src/data/seo.ts` so the homepage targets custom websites for expert-service firms. Keep FR and EN paired.

2. **Replace old footer positioning**
   - Impact: Medium
   - Evidence: `src/data/footer.ts` still contains `Agence web et IA à Nantes`, and this renders in the footer across pages.
   - Fix: Replace with restrained expert-service positioning, for example `Sites web sur mesure à Nantes` / `Custom websites in Nantes`.

3. **Make hreflang codes consistent between HTML and sitemap**
   - Impact: Medium
   - Evidence: Rendered HTML uses `hreflang="fr"` and `hreflang="en"`, while `dist/sitemap-0.xml` uses `fr-FR` and `en-US`.
   - Fix: Pick one convention. For this market, `fr-FR` and `en` is likely cleaner than `en-US` if English is international.

4. **Decide whether to keep flat SEO URLs before deployment**
   - Impact: Medium
   - Evidence: The new URLs are flat, for example `/sites-web-cabinets-avocats/`, while the strategy document recommended hierarchical URLs such as `/sites-web/cabinets-avocats/`.
   - Fix: If these pages are not yet indexed, consider moving vertical pages under `/sites-web/` and service pages under `/services/`. If they are already deployed and linked, keep them and avoid churn unless redirects are planned.

5. **Reduce crawl-visible duplication from reveal animations**
   - Impact: Low to Medium
   - Evidence: `RevealText` still renders an `aria-label` plus hidden animated spans. Browser accessibility snapshots are clean, but generated HTML still contains repeated text patterns.
   - Fix: Consider a reveal implementation that preserves accessible names without repeating the same phrase in crawler-visible markup.

## Technical SEO Findings

### Build and type checks

Status: **Healthy**

- `npm run check` completed with 0 errors.
- `npm run build` completed successfully.
- Build output contains 29 pages.
- The only check note is an existing hint: `src/components/HomeView.astro` imports `ToolsMarquee` but does not use it.

### Crawlability and sitemap

Status: **Healthy**

- `public/robots.txt` references `https://tenex.studio/sitemap-index.xml`.
- The sitemap includes the homepage, legal pages, Mathieu card pages and all new FR/EN landing pages.
- Internal link scan of generated HTML found no broken internal links.
- The 404 page is not included in the sitemap.

Recommendation: Submit the regenerated sitemap in Google Search Console after deployment.

### Canonicals

Status: **Healthy**

- Every generated page checked has a self-referencing canonical.
- FR and EN pages do not cross-canonical to each other.
- Examples:
  - `/sites-web-sur-mesure/` canonical: `https://tenex.studio/sites-web-sur-mesure/`
  - `/en/custom-websites/` canonical: `https://tenex.studio/en/custom-websites/`
  - `/404.html` canonical: `https://tenex.studio/404/` with `noindex, follow`

### Hreflang

Status: **Mostly healthy, inconsistent codes**

- Rendered pages include reciprocal `fr`, `en` and `x-default` alternates.
- Sitemap includes reciprocal `fr-FR`, `en-US` and `x-default` alternates.
- Targets are canonical URLs and return generated pages.

Issue: HTML and sitemap annotations use different language code conventions.

Recommendation: Align them. Use `fr-FR` for French. Use `en` if English is international, or `en-US` only if the English content is specifically US-targeted.

### Structured data

Status: **Good base**

- Homepage renders `ProfessionalService`, `WebSite` and `FAQPage`.
- Landing pages render `Service`, `BreadcrumbList` and `FAQPage` where FAQ content exists.
- Digital card pages render `Person`.
- Browser-rendered checks confirmed JSON-LD on `/` and `/sites-web-sur-mesure/`.

Issue: Homepage schema description still uses the old broad web and AI positioning.

Recommendation: Update the homepage schema by updating `src/data/seo.ts`, since `buildHomeSeo()` uses the same description for metadata and `ProfessionalService`.

### 404

Status: **Fixed**

- The 404 page now has one H1.
- Robots metadata is `noindex, follow`.

### Images

Status: **Mostly healthy**

- Generated HTML image scan found no missing `alt` attributes.
- New landing images are mostly reasonable sizes.
- Largest current public image: `public/services/ui-ux-design.webp` at 596 KB.
- Largest new landing image: `public/landing/experts-comptables-hover.webp` at 399 KB.

Recommendation: Recompress the 596 KB service image when convenient. It is no longer the biggest SEO concern.

## On-Page SEO Findings

### Homepage title and description

Status: **Still needs repositioning**

Rendered FR:

- Title: `TeneX Studio - Agence web et IA à Nantes`
- Description: `Agence web et IA à Nantes : sites, applications et automatisations sur mesure pour produire 10× plus.`

Rendered EN:

- Title: `TeneX Studio - Web and AI Studio in Nantes`
- Description: `Web and AI studio in Nantes: custom sites, apps and automations to produce 10× more.`

Issue: This no longer matches the product-marketing context. The homepage should reinforce expert-service websites, not generic web and AI services.

### New commercial and vertical pages

Status: **Strong improvement**

- Each new page has a unique title and one H1.
- The core page `/sites-web-sur-mesure/` targets `Création site web sur mesure à Nantes`.
- Vertical pages target clear intents, for example:
  - `Site web cabinet avocat sur mesure`
  - `Site web clinique privée sur mesure`
  - `Site web consultant sur mesure`
  - `Site web expert-comptable sur mesure`
  - `Site web architecte sur mesure`

Issue: Several meta descriptions are under the ideal 150 to 160 character range, though they are specific and not harmful.

Recommendation: Do not pad them mechanically. Improve descriptions only where a stronger search-result pitch is natural.

### Heading structure

Status: **Healthy**

- Generated page scan found exactly one H1 on every page.
- New landing pages use meaningful H2 sections.
- Browser snapshots confirmed the core and law-firm pages render the expected H1 and section headings.

### Internal linking

Status: **Much improved**

- Homepage navigation links to `/sites-web-sur-mesure/`.
- The core custom website page links to all vertical pages.
- Vertical pages link back to the core page and selected related vertical pages.
- Footer links to the core custom website hub.

Issue: Mathieu card pages remain in the sitemap but are not linked from the main navigation or footer.

Recommendation: If those pages are meant to rank or support trust, add a subtle founder/about link. If they are only utility pages, consider excluding them from the sitemap.

## Content Findings

### Content-market fit

Status: **Strong improvement**

The new landing pages now match the product-marketing context: expert-service firms, trust before the first call, premium custom websites, clarity, proof and qualified inquiries.

This is the biggest improvement since the previous audit.

### Content depth

Status: **Good for V1 commercial pages**

The core page has enough depth for a commercial service page. Vertical pages are substantial enough to avoid thin-page risk, with tailored copy, proof bullets, sections, FAQs and related links.

Recommendation: Next content depth should come from real case-study pages, not more generic landing pages.

### E-E-A-T and trust

Status: **Good base, next step is proof depth**

The site already includes named clients, testimonials, legal pages, address, email and LinkedIn. The new pages add better topical relevance, but still rely on high-level proof.

Recommendation: Build case studies for Studio Lumen, Renardo Tech and OuiClient. Link each case study to the relevant commercial page.

## Prioritized Action Plan

### Critical

No critical crawl or indexation blockers found.

### High Impact

1. Update homepage metadata and schema description in `src/data/seo.ts`.
2. Replace old footer positioning in `src/data/footer.ts`.
3. Align HTML and sitemap hreflang conventions.

### Quick Wins

1. Remove the unused `ToolsMarquee` import from `src/components/HomeView.astro`.
2. Recompress `public/services/ui-ux-design.webp`.
3. Decide whether Mathieu pages should be linked or excluded from sitemap.

### Longer Term

1. Add case-study routes once Content Collections are wired.
2. Add a local page for `agence web Nantes` only if it can stay premium and not dilute the expert-service positioning.
3. Consider a less duplicative reveal-text implementation after the current SEO-critical fixes.

## Verification Run

- `npm run check`: passed, 0 errors.
- `npm run build`: passed, 29 pages generated.
- Browser-rendered pages checked:
  - `/`
  - `/en/`
  - `/sites-web-sur-mesure/`
  - `/sites-web-cabinets-avocats/`
- Generated HTML audit checked:
  - titles
  - descriptions
  - robots
  - canonicals
  - H1 counts
  - H2 counts
  - JSON-LD presence
  - image alt attributes
  - internal links
  - sitemap alternates
