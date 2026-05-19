import type { Bilingual } from '@/data/_types'

export type HeroCopy = Readonly<{
  wordmark: string
  monogram: string
  monogramAriaLabel: Bilingual
  withTenexStudio: Bilingual
  monogramTagline: Bilingual
  headline: Bilingual
  subheadline: Bilingual
  status: Bilingual
  primaryCta: Readonly<{
    label: Bilingual
    href: Bilingual
  }>
  secondaryCta: Readonly<{
    label: Bilingual
    href: Bilingual
  }>
}>

export const HERO: HeroCopy = {
  wordmark: 'Tenex Studio',
  monogram: '10x',
  monogramAriaLabel: {
    fr: 'Dix fois. Tenex Studio.',
    en: 'Ten times. Tenex Studio.',
  },
  withTenexStudio: {
    fr: 'Avec Tenex Studio.',
    en: 'With Tenex Studio.',
  },
  monogramTagline: {
    fr: 'Dix fois le levier.',
    en: 'Ten times the leverage.',
  },
  headline: {
    fr: 'SEO, sites web et automatisation propulsés par l’IA.',
    en: 'AI-Powered SEO, Websites & Automation.',
  },
  subheadline: {
    fr: 'Nous concevons des moteurs de contenu intégrés à l’IA, pérennisons votre visibilité GEO & AEO, et automatisons votre croissance avec des workflows IA sur mesure.',
    en: 'We build AI-integrated content engines, future-proof your search visibility with GEO & AEO, and automate your growth with custom AI workflows.',
  },
  status: {
    fr: 'Studio ouvert · 2026',
    en: 'Studio open · 2026',
  },
  primaryCta: {
    label: { fr: 'Parlons-en', en: 'Get in touch' },
    href: { fr: '/contact', en: '/en/contact' },
  },
  secondaryCta: {
    label: { fr: 'Voir les services', en: 'See the services' },
    href: { fr: '/#services', en: '/en#services' },
  },
} as const
