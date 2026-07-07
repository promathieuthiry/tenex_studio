import type { Locale } from '@/lib/i18n'
import { OG_LOCALE, pathFor } from '@/lib/i18n'
import { SITE_ORIGIN } from '@/lib/site'
import { digitalCardSeo, homeSeo } from '@/data/seo'
import type { Bilingual } from '@/data/_types'
import { FOOTER } from '@/data/footer'
import { FAQ } from '@/data/faq'
import {
  DIGITAL_CARD_EMAIL,
  DIGITAL_CARD_PHOTO,
  DIGITAL_CARD_WEBSITE,
} from '@/data/digital-card'
import {
  seoLandingPath,
  type SeoLandingPage,
} from '@/data/seo-landing-pages'
import { RESOURCE_CATEGORIES, RESOURCES_HEADER } from '@/data/resources'
import {
  GLOSSARY_TERMS,
  GLOSSARY_HEADER,
  glossaryIndexPath,
  glossaryPath,
  glossarySeo,
  type GlossaryTerm,
} from '@/data/glossary'

export type SeoProps = {
  title: string
  description: string
  canonical: string
  ogLocale: string
  ogLocaleAlternate?: string
  ogImage?: string
  ogImageAlt?: string
  hreflang: { fr: string; en: string; 'x-default': string }
  robots?: string
  jsonLd?: string
  ogType?: 'website' | 'article'
  article?: {
    publishedTime: string
    modifiedTime: string
    author: string
    section?: string
  }
}

const PERSON_ID = `${SITE_ORIGIN}/mathieu/#person`

const authorPerson = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Mathieu Thiry',
  url: `${SITE_ORIGIN}/mathieu/`,
  sameAs: [FOOTER.linkedin],
}

const HREFLANG = { fr: '/', en: '/en/', 'x-default': '/' } as const
const DIGITAL_CARD_HREFLANG = {
  fr: '/mathieu/',
  en: '/en/mathieu/',
  'x-default': '/mathieu/',
} as const

const CORE_OFFERS: ReadonlyArray<{
  name: Bilingual
  description: Bilingual
}> = [
  {
    name: {
      fr: 'Design de site web sur mesure',
      en: 'Custom website design',
    },
    description: {
      fr: 'Une interface sur mesure qui vous démarque au premier regard et inspire confiance dès la première seconde.',
      en: 'A custom interface that stands out at first glance and builds trust from the first second.',
    },
  },
  {
    name: {
      fr: 'Conversion et copywriting',
      en: 'Conversion and copywriting',
    },
    description: {
      fr: 'Structure de page et textes pensés pour transformer vos visiteurs en clients.',
      en: 'Page structure and copy built to turn visitors into clients.',
    },
  },
  {
    name: {
      fr: 'Référencement et visibilité (SEO, AEO, GEO)',
      en: 'Search visibility (SEO, AEO, GEO)',
    },
    description: {
      fr: 'Un site trouvé en haut de Google et recommandé dans les réponses des IA comme ChatGPT.',
      en: 'A site found at the top of Google and recommended in AI answers like ChatGPT.',
    },
  },
] as const

export function buildHomeSeo(locale: Locale): SeoProps {
  const { title, description, ogImageAlt } = homeSeo[locale]
  const canonical = pathFor(locale)
  const alternate: Locale = locale === 'fr' ? 'en' : 'fr'

  const [venue, streetAddress, cityLine = ''] = FOOTER.address
  const [postalCode, ...localityParts] = cityLine.split(' ')

  const langTag = locale === 'fr' ? 'fr-FR' : 'en'
  const businessId = `${SITE_ORIGIN}/#business`

  const business = {
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: 'Tenex Studio',
    url: `${SITE_ORIGIN}${canonical}`,
    logo: `${SITE_ORIGIN}/icon-512.png`,
    image: `${SITE_ORIGIN}/icon-512.png`,
    description,
    email: FOOTER.email,
    founder: { '@type': 'Person', name: 'Mathieu Thiry' },
    address: {
      '@type': 'PostalAddress',
      name: venue,
      streetAddress,
      postalCode,
      addressLocality: localityParts.join(' '),
      addressCountry: 'FR',
    },
    areaServed: ['Nantes', 'France'],
    knowsLanguage: ['fr', 'en'],
    sameAs: [FOOTER.linkedin],
    makesOffer: CORE_OFFERS.map((offer) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: offer.name[locale],
        description: offer.description[locale],
      },
    })),
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    url: `${SITE_ORIGIN}${canonical}`,
    name: 'Tenex Studio',
    inLanguage: langTag,
    publisher: { '@id': businessId },
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${SITE_ORIGIN}${canonical}#faq`,
    inLanguage: langTag,
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question[locale],
      acceptedAnswer: { '@type': 'Answer', text: item.answer[locale] },
    })),
  }

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [business, website, faqPage],
  })

  return {
    title,
    description,
    canonical,
    ogLocale: OG_LOCALE[locale],
    ogLocaleAlternate: OG_LOCALE[alternate],
    ogImage: `/og/og-${locale}.jpg`,
    ogImageAlt,
    hreflang: HREFLANG,
    jsonLd,
  }
}

const BLOG_HREFLANG = {
  fr: '/blog/',
  en: '/en/blog/',
  'x-default': '/blog/',
} as const

const blogSeo: Bilingual<{ title: string; description: string }> = {
  fr: {
    title: 'Journal — Tenex Studio',
    description:
      'Notes sur le design, la conversion et la construction de sites web sur mesure qui tiennent sous pression.',
  },
  en: {
    title: 'Journal — Tenex Studio',
    description:
      'Notes on design, conversion, and building custom websites that hold under pressure.',
  },
}

export function buildBlogSeo(locale: Locale): SeoProps {
  const { title, description } = blogSeo[locale]
  const canonical = pathFor(locale, '/blog')
  const alternate: Locale = locale === 'fr' ? 'en' : 'fr'
  const langTag = locale === 'fr' ? 'fr-FR' : 'en'
  const businessId = `${SITE_ORIGIN}/#business`
  const canonicalUrl = `${SITE_ORIGIN}${canonical}`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${canonicalUrl}#blog`,
    name: title,
    description,
    url: canonicalUrl,
    inLanguage: langTag,
    publisher: { '@id': businessId },
  })

  return {
    title,
    description,
    canonical,
    ogLocale: OG_LOCALE[locale],
    ogLocaleAlternate: OG_LOCALE[alternate],
    ogImage: `/og/og-${locale}.jpg`,
    ogImageAlt: title,
    hreflang: BLOG_HREFLANG,
    jsonLd,
  }
}

const RESOURCES_HREFLANG = {
  fr: '/outils/',
  en: '/en/tools/',
  'x-default': '/outils/',
} as const

const resourcesSeo: Bilingual<{ title: string; description: string }> = {
  fr: {
    title: 'Outils — Tenex Studio',
    description:
      "Une sélection d'outils pour concevoir, construire et lancer un site web : inspiration, design, composants, animation et IA.",
  },
  en: {
    title: 'Tools — Tenex Studio',
    description:
      'A curated set of tools to design, build and ship a website: inspiration, design, components, motion and AI.',
  },
}

export function buildResourcesSeo(locale: Locale): SeoProps {
  const { title, description } = resourcesSeo[locale]
  // FR and EN segments differ, so pass the locale-specific one to pathFor.
  const canonical = pathFor(locale, locale === 'fr' ? '/outils' : '/tools')
  const alternate: Locale = locale === 'fr' ? 'en' : 'fr'
  const langTag = locale === 'fr' ? 'fr-FR' : 'en'
  const canonicalUrl = `${SITE_ORIGIN}${canonical}`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collectionpage`,
        name: title,
        description,
        url: canonicalUrl,
        inLanguage: langTag,
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        mainEntity: { '@id': `${canonicalUrl}#itemlist` },
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#itemlist`,
        itemListElement: RESOURCE_CATEGORIES.flatMap(
          (category) => category.tools,
        ).map((tool, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: tool.name,
          url: tool.url,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Tenex Studio',
            item: `${SITE_ORIGIN}${pathFor(locale)}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: RESOURCES_HEADER[locale].title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  })

  return {
    title,
    description,
    canonical,
    ogLocale: OG_LOCALE[locale],
    ogLocaleAlternate: OG_LOCALE[alternate],
    ogImage: `/og/og-${locale}.jpg`,
    ogImageAlt: title,
    hreflang: RESOURCES_HREFLANG,
    jsonLd,
  }
}

export function buildArticleSeo(
  entry: import('@/lib/blog').BlogEntry,
  locale: Locale,
): SeoProps {
  const slug = entry.id.split('/').slice(1).join('/')
  const canonical = pathFor(locale, `/blog/${slug}`)
  const alternate: Locale = locale === 'fr' ? 'en' : 'fr'
  const langTag = locale === 'fr' ? 'fr-FR' : 'en'
  const businessId = `${SITE_ORIGIN}/#business`
  const canonicalUrl = `${SITE_ORIGIN}${canonical}`

  const publishedTime = entry.data.date.toISOString().slice(0, 10)
  const modifiedTime = (entry.data.updated ?? entry.data.date)
    .toISOString()
    .slice(0, 10)
  const blogLabel = locale === 'fr' ? 'Journal' : 'Journal'

  const article = {
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline: entry.data.title,
    description: entry.data.excerpt,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    image: `${SITE_ORIGIN}${entry.data.cover}`,
    inLanguage: langTag,
    url: canonicalUrl,
    author: { '@id': PERSON_ID },
    publisher: { '@id': businessId },
    mainEntityOfPage: canonicalUrl,
    articleSection: entry.data.category,
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Tenex Studio',
        item: `${SITE_ORIGIN}${pathFor(locale)}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: blogLabel,
        item: `${SITE_ORIGIN}${pathFor(locale, '/blog')}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: entry.data.title,
        item: canonicalUrl,
      },
    ],
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    inLanguage: langTag,
    mainEntity: entry.data.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [article, authorPerson, breadcrumb, faqPage],
  })

  return {
    title: `${entry.data.title} — Tenex Studio`,
    description: entry.data.excerpt,
    canonical,
    ogLocale: OG_LOCALE[locale],
    ogLocaleAlternate: OG_LOCALE[alternate],
    ogImage: entry.data.cover,
    ogImageAlt: entry.data.title,
    hreflang: {
      fr: `/blog/${slug}/`,
      en: `/en/blog/${slug}/`,
      'x-default': `/blog/${slug}/`,
    },
    jsonLd,
    ogType: 'article',
    article: {
      publishedTime,
      modifiedTime,
      author: 'Mathieu Thiry',
      section: entry.data.category.join(', '),
    },
  }
}

export function buildDigitalCardSeo(locale: Locale): SeoProps {
  const { title, description, ogImageAlt } = digitalCardSeo[locale]
  const canonical = pathFor(locale, '/mathieu')
  const alternate: Locale = locale === 'fr' ? 'en' : 'fr'
  const langTag = locale === 'fr' ? 'fr-FR' : 'en'

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_ORIGIN}${canonical}#person`,
    name: 'Mathieu Thiry',
    jobTitle: locale === 'fr' ? 'Fondateur' : 'Founder',
    url: `${SITE_ORIGIN}${canonical}`,
    image: `${SITE_ORIGIN}${DIGITAL_CARD_PHOTO}`,
    email: DIGITAL_CARD_EMAIL,
    worksFor: {
      '@type': 'ProfessionalService',
      name: 'Tenex Studio',
      url: DIGITAL_CARD_WEBSITE,
    },
    inLanguage: langTag,
  })

  return {
    title,
    description,
    canonical,
    ogLocale: OG_LOCALE[locale],
    ogLocaleAlternate: OG_LOCALE[alternate],
    ogImage: `/og/og-${locale}.jpg`,
    ogImageAlt,
    hreflang: DIGITAL_CARD_HREFLANG,
    jsonLd,
  }
}

export function buildSeoLandingPageSeo(
  page: SeoLandingPage,
  locale: Locale,
): SeoProps {
  const alternate: Locale = locale === 'fr' ? 'en' : 'fr'
  const canonical = seoLandingPath(page, locale)
  const frPath = seoLandingPath(page, 'fr')
  const enPath = seoLandingPath(page, 'en')
  const langTag = locale === 'fr' ? 'fr-FR' : 'en'
  const businessId = `${SITE_ORIGIN}/#business`
  const canonicalUrl = `${SITE_ORIGIN}${canonical}`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: page.title[locale],
        description: page.intro[locale],
        serviceType: page.eyebrow[locale],
        provider: { '@id': businessId },
        areaServed: ['Nantes', 'France'],
        inLanguage: langTag,
        url: canonicalUrl,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Tenex Studio',
            item: `${SITE_ORIGIN}${pathFor(locale)}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: page.title[locale],
            item: canonicalUrl,
          },
        ],
      },
      ...(page.faq
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${canonicalUrl}#faq`,
              inLanguage: langTag,
              mainEntity: page.faq.map((item) => ({
                '@type': 'Question',
                name: item.question[locale],
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer[locale],
                },
              })),
            },
          ]
        : []),
    ],
  })

  return {
    title: page.meta[locale].title,
    description: page.meta[locale].description,
    canonical,
    ogLocale: OG_LOCALE[locale],
    ogLocaleAlternate: OG_LOCALE[alternate],
    ogImage: `/og/og-${locale}.jpg`,
    ogImageAlt: page.title[locale],
    hreflang: { fr: frPath, en: enPath, 'x-default': frPath },
    jsonLd,
  }
}

export function buildGlossaryIndexSeo(locale: Locale): SeoProps {
  const { title, description } = glossarySeo[locale]
  const canonical = glossaryIndexPath(locale)
  const alternate: Locale = locale === 'fr' ? 'en' : 'fr'
  const langTag = locale === 'fr' ? 'fr-FR' : 'en'
  const canonicalUrl = `${SITE_ORIGIN}${canonical}`
  const setId = `${canonicalUrl}#definedtermset`

  const definedTermSet = {
    '@type': 'DefinedTermSet',
    '@id': setId,
    name: GLOSSARY_HEADER[locale].title,
    description,
    url: canonicalUrl,
    inLanguage: langTag,
    hasDefinedTerm: GLOSSARY_TERMS.map((term) => {
      const termUrl = `${SITE_ORIGIN}${glossaryPath(term, locale)}`
      return {
        '@type': 'DefinedTerm',
        '@id': `${termUrl}#definedterm`,
        name: term.term[locale],
        url: termUrl,
      }
    }),
  }

  const collectionPage = {
    '@type': 'CollectionPage',
    '@id': `${canonicalUrl}#collectionpage`,
    name: title,
    description,
    url: canonicalUrl,
    inLanguage: langTag,
    isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    mainEntity: { '@id': setId },
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Tenex Studio',
        item: `${SITE_ORIGIN}${pathFor(locale)}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: GLOSSARY_HEADER[locale].title,
        item: canonicalUrl,
      },
    ],
  }

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [collectionPage, definedTermSet, breadcrumb],
  })

  return {
    title,
    description,
    canonical,
    ogLocale: OG_LOCALE[locale],
    ogLocaleAlternate: OG_LOCALE[alternate],
    ogImage: `/og/og-${locale}.jpg`,
    ogImageAlt: title,
    hreflang: {
      fr: glossaryIndexPath('fr'),
      en: glossaryIndexPath('en'),
      'x-default': glossaryIndexPath('fr'),
    },
    jsonLd,
  }
}

export function buildGlossaryTermSeo(
  term: GlossaryTerm,
  locale: Locale,
): SeoProps {
  const canonical = glossaryPath(term, locale)
  const alternate: Locale = locale === 'fr' ? 'en' : 'fr'
  const langTag = locale === 'fr' ? 'fr-FR' : 'en'
  const canonicalUrl = `${SITE_ORIGIN}${canonical}`
  const setId = `${SITE_ORIGIN}${glossaryIndexPath(locale)}#definedtermset`
  const suffix =
    locale === 'fr' ? 'Glossaire Tenex Studio' : 'Tenex Studio Glossary'

  const definedTerm = {
    '@type': 'DefinedTerm',
    '@id': `${canonicalUrl}#definedterm`,
    name: term.term[locale],
    description: term.short[locale],
    termCode: term.slug,
    inDefinedTermSet: { '@id': setId },
    url: canonicalUrl,
    inLanguage: langTag,
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Tenex Studio',
        item: `${SITE_ORIGIN}${pathFor(locale)}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: GLOSSARY_HEADER[locale].title,
        item: `${SITE_ORIGIN}${glossaryIndexPath(locale)}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: term.term[locale],
        item: canonicalUrl,
      },
    ],
  }

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [definedTerm, breadcrumb],
  })

  return {
    title: `${term.term[locale]} — ${suffix}`,
    description: term.short[locale],
    canonical,
    ogLocale: OG_LOCALE[locale],
    ogLocaleAlternate: OG_LOCALE[alternate],
    ogImage: `/og/og-${locale}.jpg`,
    ogImageAlt: term.term[locale],
    hreflang: {
      fr: glossaryPath(term, 'fr'),
      en: glossaryPath(term, 'en'),
      'x-default': glossaryPath(term, 'fr'),
    },
    jsonLd,
  }
}
