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
      fr: 'Sites web premium sur mesure',
      en: 'Premium custom websites',
    },
    description: {
      fr: 'Sites web sur mesure pour cabinets, cliniques, studios et sociétés de conseil qui doivent inspirer confiance avant le premier appel.',
      en: 'Custom websites for firms, clinics, studios and consultancies that need to build trust before the first call.',
    },
  },
  {
    name: {
      fr: 'Applications web sur mesure',
      en: 'Custom web apps',
    },
    description: {
      fr: 'Applications web légères pour structurer un processus, automatiser une opération ou livrer un portail client.',
      en: 'Lightweight web apps to structure a workflow, automate an operation or ship a client portal.',
    },
  },
  {
    name: {
      fr: 'Intégration IA dans les workflows',
      en: 'AI workflow integration',
    },
    description: {
      fr: 'Intégration d’IA dans les outils et processus métier quand le gain est concret, mesurable et maintenable.',
      en: 'AI integration inside business tools and processes when the gain is concrete, measurable and maintainable.',
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
