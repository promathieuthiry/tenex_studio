import type { Locale } from '@/lib/i18n'
import { OG_LOCALE, pathFor } from '@/lib/i18n'
import { SITE_ORIGIN } from '@/lib/site'
import { digitalCardSeo, homeSeo } from '@/data/seo'
import { FOOTER } from '@/data/footer'
import { FAQ } from '@/data/faq'
import { SERVICES } from '@/data/services'
import {
  DIGITAL_CARD_EMAIL,
  DIGITAL_CARD_PHOTO,
  DIGITAL_CARD_WEBSITE,
} from '@/data/digital-card'

export type SeoProps = {
  title: string
  description: string
  canonical: string
  ogLocale: string
  ogLocaleAlternate?: string
  ogImage?: string
  ogImageAlt?: string
  hreflang: { fr: string; en: string; 'x-default': string }
  jsonLd?: string
}

const HREFLANG = { fr: '/', en: '/en/', 'x-default': '/' } as const
const DIGITAL_CARD_HREFLANG = {
  fr: '/mathieu/',
  en: '/en/mathieu/',
  'x-default': '/mathieu/',
} as const

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
    makesOffer: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name[locale],
        description: service.description[locale],
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
    '@id': `${SITE_ORIGIN}/mathieu/#person`,
    name: 'Mathieu Thiry',
    jobTitle: locale === 'fr' ? 'Fondateur' : 'Founder',
    url: `${SITE_ORIGIN}/mathieu/`,
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
