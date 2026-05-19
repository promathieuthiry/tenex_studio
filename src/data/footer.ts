import type { Bilingual } from '@/data/_types'

export type FooterColumn = Readonly<{
  id: string
  heading: Bilingual
  links: ReadonlyArray<
    Readonly<{
      id: string
      label: Bilingual
      href: Bilingual | null
    }>
  >
}>

export type FooterCopy = Readonly<{
  tagline: Bilingual
  columns: ReadonlyArray<FooterColumn>
  newsletter: Readonly<{
    heading: Bilingual
    description: Bilingual
    placeholder: Bilingual
    submitLabel: Bilingual
    consentLabel: Bilingual
    successLabel: Bilingual
  }>
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
          href: { fr: '/contact', en: '/en/contact' },
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
  newsletter: {
    heading: { fr: 'Restez en orbite', en: 'Stay in orbit' },
    description: {
      fr: 'Une note brève chaque trimestre. Pas de bruit.',
      en: 'A short note every quarter. No noise.',
    },
    placeholder: { fr: 'Votre courriel', en: 'Your email' },
    submitLabel: { fr: "S'inscrire", en: 'Subscribe' },
    consentLabel: {
      fr: 'En vous inscrivant, vous acceptez de recevoir un courriel par trimestre.',
      en: 'By subscribing, you agree to receive one email per quarter.',
    },
    successLabel: {
      fr: 'Merci. Vous êtes en orbite.',
      en: 'Thanks. You are in orbit.',
    },
  },
  legalLine: {
    fr: '© 2026 Tenex Studio. Tous droits réservés.',
    en: '© 2026 Tenex Studio. All rights reserved.',
  },
  yearmark: '(©26)',
} as const
