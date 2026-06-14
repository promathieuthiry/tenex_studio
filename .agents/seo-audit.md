# SEO Audit

*Last updated: 2026-06-14*

## Executive Summary

Overall SEO health: **good technical base, weak strategic targeting**.

The site is crawlable, static, fast to build, indexed on Google, and has the main technical foundations in place: robots.txt, sitemap, canonical tags, reciprocal hreflang, Open Graph tags, image alt text, and JSON-LD on the main pages.

The highest-impact work is not a crawlability fix. It is aligning the page metadata, hero copy, schema descriptions, and content architecture with the current product-marketing positioning: premium custom websites and lightweight web apps for expert-service firms.

## Top Priorities

1. **Reposition home metadata around the target market**
   - Impact: High
   - Evidence: `src/data/seo.ts` still targets "Agence web et IA a Nantes" / "Web and AI Studio in Nantes". The product-marketing context now targets expert-service firms, premium websites, custom web apps, trust before the call, France and international.
   - Fix: Rewrite FR and EN title/meta descriptions around "site web sur mesure", "custom websites", "cabinets, cliniques, studios, consultants", "Nantes", and "premium expert services".

2. **Create indexable service/vertical pages**
   - Impact: High
   - Evidence: The site currently has only the home page, legal pages, 404, and Mathieu digital card pages. Search demand for "site web cabinet avocat", "site web clinique privee", "site web architecte", "site web consultant", and "site web sur mesure Nantes" cannot be targeted cleanly from one page.
   - Fix: Add dedicated bilingual pages for the core offer and priority verticals before blog/case-study scale. Start with `/sites-web-sur-mesure/`, `/en/custom-websites/`, then 3 to 5 vertical pages.

3. **Reduce duplicated static text from reveal animations**
   - Impact: Medium
   - Evidence: Static HTML extraction shows repeated phrases such as "Ce que tu obtiens en choisissant", "Trois facons", "Web & AI agency in Nantes". Google snippets also show duplicated visible text from the live page. Browser accessibility snapshots are cleaner, but crawlers can still extract both the `sr-only` text and animated spans.
   - Fix: Adjust `RevealText` and `SectionHeader` so search-visible HTML does not duplicate section titles. Keep the accessible label, but avoid rendering a second searchable copy where possible.

4. **Fix locale metadata inconsistencies**
   - Impact: Medium
   - Evidence: `OG_LOCALE.fr` is `fr_CA` in `src/lib/i18n.ts`, while the site targets France/Nantes and sitemap hreflang uses `fr-FR`.
   - Fix: Change Open Graph locale to `fr_FR`. Keep hreflang as `fr-FR` and `en-US`, or decide whether the English market should be generic `en`.

5. **Noindex the 404 page**
   - Impact: Low to Medium
   - Evidence: `dist/404.html` renders `meta name="robots" content="index, follow..."` and canonical `https://tenex.studio/404/`.
   - Fix: Give 404 its own SEO props with `noindex, follow`, or extend the SEO component with a robots override.

## Technical SEO Findings

### Crawlability and indexation

Status: **Healthy**

- `public/robots.txt` allows all crawlers and references `https://tenex.studio/sitemap-index.xml`.
- `npm run build` generated `dist/sitemap-index.xml` and `dist/sitemap-0.xml`.
- Sitemap contains the canonical public pages and excludes `404`.
- Google `site:tenex.studio` check found the FR and EN home pages indexed on 2026-06-14.

Recommendation: Submit or confirm the sitemap index in Google Search Console and Bing Webmaster Tools. Add subdirectory properties for `/en/` if English search visibility matters.

### Canonicals

Status: **Healthy**

- FR home canonical: `https://tenex.studio/`
- EN home canonical: `https://tenex.studio/en/`
- Mathieu pages self-canonical by locale.
- Legal pages self-canonical by locale.

Recommendation: Keep this pattern for future service and vertical pages. Do not cross-canonical FR and EN variants.

### Hreflang

Status: **Mostly healthy**

- HTML head includes `fr`, `en`, and `x-default`.
- Sitemap includes reciprocal `fr-FR`, `en-US`, and `x-default` alternates.
- Each locale points back to the other variant.

Issue: HTML uses generic `fr` / `en`, while sitemap uses `fr-FR` / `en-US`. This is valid, but less consistent than it could be.

Recommendation: Pick one convention and keep it consistent across HTML and sitemap. For this site, `fr-FR` and `en` may be the cleanest split if English is international rather than US-specific.

### Schema

Status: **Good base**

Rendered browser checks found JSON-LD on home pages:

- `ProfessionalService`
- `WebSite`
- `FAQPage`

Digital card pages include `Person` schema.

Issues:

- Business schema descriptions repeat the old "web and AI studio" positioning.
- Offer schema maps feature blocks like "Speed", "Structure", "Copywriting" rather than core commercial services.
- English `Person` schema for `/en/mathieu/` uses `url: https://tenex.studio/mathieu/`, not the English canonical URL.

Recommendations:

- Update schema descriptions with the current ICP positioning.
- Model commercial services as `Service` or `OfferCatalog`: premium websites, custom web apps, AI workflow integration.
- Use locale-canonical URLs in `Person` schema.

### 404

Status: **Needs a small fix**

The 404 page has no H1 in generated HTML and uses indexable robots metadata.

Recommendation: Add an H1 to the not-found component and set 404 robots to `noindex, follow`.

## On-Page SEO Findings

### Home page title and description

Status: **Needs repositioning**

Current FR:

- Title: `Tenex Studio - Agence web et IA a Nantes`
- Description length: 101 characters

Current EN:

- Title: `Tenex Studio - Web and AI Studio in Nantes`
- Description length: 84 characters

Issue: These are concise, but underuse the updated positioning and the primary buyer language.

Recommended direction:

- FR title: `Sites web sur mesure pour cabinets et cliniques - Tenex Studio`
- FR description: `Tenex Studio cree des sites web premium pour cabinets, cliniques, studios et societes de conseil. Sur mesure, rapide, bilingue.`
- EN title: `Custom Websites for Expert-Service Firms - Tenex Studio`
- EN description: `Tenex Studio builds premium custom websites for firms, clinics, studios and consultancies that need trust before the first call.`

### H1 and visible copy

Status: **Clear but too broad**

- FR H1: `Sites web sur mesure.`
- EN H1: `Custom websites.`

Issue: Strong and simple, but it does not name the target market or trust-before-call value. The subheadline still says "entrepreneurs", which is broader and less premium than the ICP.

Recommendation: Keep the restrained style, but add ICP language near the top. The first 100 words should mention expert-service firms, trust, premium websites, and custom delivery.

### Heading structure

Status: **Mostly healthy**

Rendered browser snapshots show one H1 on FR and EN home pages, followed by H2 and H3 sections.

Issue: Static extraction can see duplicated section headings because animated reveal text renders both an `sr-only` copy and animated visible spans.

Recommendation: Reduce duplicate searchable text in reveal components.

### Images

Status: **Good alt coverage, one asset concern**

- Generated pages had image `alt` attributes present.
- Most large images are WebP.
- Largest built image found: `dist/services/ui-ux-design.webp` at roughly 896 KB.

Recommendation: Review whether the 896 KB service image can be resized or recompressed without visible quality loss.

### Internal linking

Status: **Thin architecture**

The home page links to sections, legal pages, booking, external work, email, and LinkedIn. The Mathieu digital card pages are in the sitemap but appear unlinked from main navigation/footer.

Recommendation: If the Mathieu pages are meant for search, link them from a relevant footer or founder/about area. If they are only a digital-card utility, consider excluding them from the sitemap.

## Content Findings

### Content-market fit

Status: **Behind the current positioning**

The product-marketing file has a clear ICP: law firms, accountants, consultants, architects, clinics, wealth managers, real estate, recruiters, technical consultancies, and expert B2B agencies.

The live page still speaks to "entrepreneurs" and general custom websites/apps. That makes the page less likely to rank for high-intent professional-service queries and less likely to qualify premium buyers.

Recommendation: Update home copy first, then add specific pages for the highest-value verticals.

### Topical coverage

Status: **Too narrow**

Current indexable content is mostly a single-page commercial site. There is no blog, no case-study route, and no dedicated service page yet.

Recommendation: Before moving to Astro Content Collections, add a small service/vertical page architecture:

1. `Sites web sur mesure` / `Custom websites`
2. `Sites web pour cabinets d'avocats` / `Law firm websites`
3. `Sites web pour cliniques privees` / `Private clinic websites`
4. `Sites web pour consultants` / `Consultant websites`
5. `Sites web pour architectes` / `Architecture studio websites`

### E-E-A-T and trust

Status: **Promising**

The site includes real testimonials, named clients, legal notice, location, email, LinkedIn, and specific work examples.

Recommendations:

- Add deeper case-study pages for Renardo Tech and Studio Lumen.
- Add an about/founder page if Mathieu should be part of the trust story. There is already a digital card route that could evolve into this.
- Add proof around process, ownership, handover, and bilingual delivery.

## Prioritized Action Plan

### Critical

No critical crawl or indexation blockers found.

### High Impact

1. Rewrite home SEO metadata and schema descriptions around the new ICP.
2. Replace broad "entrepreneurs" language with expert-service firm language near the top of the page.
3. Add dedicated bilingual pages for the core website offer and priority verticals.

### Quick Wins

1. Change `fr_CA` to `fr_FR` in Open Graph locale.
2. Set 404 robots to `noindex, follow`.
3. Make 404 render an H1.
4. Fix `Person.url` on `/en/mathieu/` to use the English canonical URL.
5. Recompress or resize `services/ui-ux-design.webp`.

### Longer-Term

1. Wire Astro Content Collections for case studies and blog when ready.
2. Build a keyword map by page, in FR and EN.
3. Connect Search Console data to track query impressions, indexed pages, CTR, and organic bookings.
4. Add structured data for service pages once those pages exist.

## Verification Performed

- Ran `npm run build`: passed.
- Inspected generated `dist/*.html` pages.
- Inspected `dist/sitemap-index.xml` and `dist/sitemap-0.xml`.
- Inspected `public/robots.txt`.
- Used `agent-browser` against local preview at `http://127.0.0.1:4321/` and `/en/`.
- Checked rendered JSON-LD with browser execution.
- Checked Google `site:tenex.studio` results on 2026-06-14.

