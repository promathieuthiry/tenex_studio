import type { Bilingual } from '@/data/_types'
import { BOOK_URL } from '@/lib/book'

export type FooterColumn = Readonly<{
  id: string
  heading: Bilingual
  links: ReadonlyArray<
    Readonly<{
      id: string
      label: Bilingual
      href: Bilingual | null
      external?: boolean
    }>
  >
}>

export type FooterCopy = Readonly<{
  tagline: Bilingual
  columns: ReadonlyArray<FooterColumn>
  legalLine: Bilingual
  yearmark: string
}>

export const FOOTER: FooterCopy = {
  tagline: {
    fr: 'Studio IA-natif. Mêmes mains, dix fois le rendement.',
    en: 'AI-native studio. Same hands, ten times the output.',
  },
  columns: [
    {
      id: 'studio',
      heading: { fr: 'Studio', en: 'Studio' },
      links: [
        {
          id: 'home',
          label: { fr: 'Accueil', en: 'Home' },
          href: { fr: '/', en: '/en' },
        },
        {
          id: 'contact',
          label: { fr: 'Contact', en: 'Contact' },
          href: { fr: BOOK_URL, en: BOOK_URL },
          external: true,
        },
      ],
    },
    {
      id: 'content',
      heading: { fr: 'Lecture', en: 'Reading' },
      links: [
        {
          id: 'journal',
          label: { fr: 'Journal', en: 'Journal' },
          href: null,
        },
        {
          id: 'work',
          label: { fr: 'Travail', en: 'Work' },
          href: null,
        },
      ],
    },
  ],
  legalLine: {
    fr: '© 2026 Tenex Studio. Tous droits réservés.',
    en: '© 2026 Tenex Studio. All rights reserved.',
  },
  yearmark: '(©26)',
} as const
