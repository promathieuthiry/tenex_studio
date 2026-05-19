import type { Bilingual } from '@/data/_types'

export type NavLink = Readonly<{
  id: string
  label: Bilingual
  href: Bilingual | null
}>

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  {
    id: 'studio',
    label: { fr: 'Studio', en: 'Studio' },
    href: null,
  },
  {
    id: 'work',
    label: { fr: 'Travail', en: 'Work' },
    href: null,
  },
  {
    id: 'news',
    label: { fr: 'Journal', en: 'Journal' },
    href: null,
  },
  {
    id: 'contact',
    label: { fr: 'Contact', en: 'Contact' },
    href: { fr: '/contact', en: '/en/contact' },
  },
] as const

export const TALK_PILL: Readonly<{
  label: Bilingual
  href: Bilingual
}> = {
  label: { fr: 'Parler à Mathieu', en: 'Talk to Mathieu' },
  href: { fr: '/contact', en: '/en/contact' },
} as const

export const SKIP_LINK: Bilingual = {
  fr: 'Aller au contenu',
  en: 'Skip to content',
} as const

export const SWITCHER_LABEL: Readonly<{
  toFr: string
  toEn: string
}> = {
  toFr: 'Passer en français',
  toEn: 'Switch to English',
} as const

export const NAV_LANDMARK: Bilingual = {
  fr: 'Navigation principale',
  en: 'Main navigation',
} as const

export const WORDMARK = 'Tenex Studio' as const
