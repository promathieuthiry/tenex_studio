import type { Locale } from '@/lib/i18n'
import { OG_LOCALE, SITE_ORIGIN, pathFor } from '@/lib/i18n'
import { homeSeo } from '@/data/seo'
import { FOOTER } from '@/data/footer'
import { FAQ } from '@/data/faq'
import { SERVICES } from '@/data/services'

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

const HREFLANG = { fr: '/', en: '/en', 'x-default': '/' } as const

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
