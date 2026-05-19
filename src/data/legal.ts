import type { Bilingual } from '@/data/_types'

export type ContactCopy = Readonly<{
  eyebrow: Bilingual
  title: Bilingual
  body: Bilingual
  bookCta: Readonly<{
    label: Bilingual
    helper: Bilingual
  }>
  fields: Readonly<{
    firstName: Bilingual
    lastName: Bilingual
    email: Bilingual
    company: Bilingual
    message: Bilingual
    messagePlaceholder: Bilingual
  }>
  validation: Readonly<{
    firstNameRequired: Bilingual
    lastNameRequired: Bilingual
    emailRequired: Bilingual
    emailInvalid: Bilingual
    messageRequired: Bilingual
    messageTooShort: Bilingual
  }>
  submitLabel: Bilingual
  submittingLabel: Bilingual
  formError: Bilingual
  confirmation: Readonly<{
    title: Bilingual
    body: Bilingual
    fallbackEmail: string
  }>
  privacyNote: Bilingual
}>

export const CONTACT: ContactCopy = {
  eyebrow: { fr: '(05) Contact', en: '(05) Contact' },
  title: {
    fr: 'Parlons de votre projet.',
    en: "Let's talk about your project.",
  },
  body: {
    fr: 'Décrivez le projet en quelques lignes — calendrier, périmètre, marqueurs de succès. Mathieu répond sous 24 heures ouvrées.',
    en: 'Describe the project in a few lines — timeline, scope, success markers. Mathieu replies within one business day.',
  },
  bookCta: {
    label: { fr: 'Réserver un appel', en: 'Book a call' },
    helper: {
      fr: 'Trente minutes, calendrier ouvert.',
      en: 'Thirty minutes, open calendar.',
    },
  },
  fields: {
    firstName: { fr: 'Prénom', en: 'First name' },
    lastName: { fr: 'Nom', en: 'Last name' },
    email: { fr: 'Courriel', en: 'Email' },
    company: { fr: 'Entreprise (facultatif)', en: 'Company (optional)' },
    message: { fr: 'Votre message', en: 'Your message' },
    messagePlaceholder: {
      fr: 'Une refonte éditoriale ? Un site bilingue ? Un audit ?',
      en: 'An editorial redesign? A bilingual site? An audit?',
    },
  },
  validation: {
    firstNameRequired: {
      fr: 'Indiquez votre prénom.',
      en: 'Enter your first name.',
    },
    lastNameRequired: {
      fr: 'Indiquez votre nom.',
      en: 'Enter your last name.',
    },
    emailRequired: {
      fr: 'Indiquez un courriel valide.',
      en: 'Enter a valid email.',
    },
    emailInvalid: {
      fr: 'Le courriel ne semble pas valide.',
      en: 'That email does not look valid.',
    },
    messageRequired: {
      fr: 'Décrivez le projet en quelques lignes.',
      en: 'Describe the project in a few lines.',
    },
    messageTooShort: {
      fr: 'Au moins 20 caractères, merci.',
      en: 'At least 20 characters, please.',
    },
  },
  submitLabel: { fr: 'Envoyer', en: 'Send' },
  submittingLabel: { fr: 'Envoi…', en: 'Sending…' },
  formError: {
    fr: 'Le message n’a pas pu être envoyé. Réessayez ou écrivez directement à hello@tenex.studio.',
    en: 'The message could not be sent. Try again or email hello@tenex.studio directly.',
  },
  confirmation: {
    title: { fr: 'Message reçu.', en: 'Message received.' },
    body: {
      fr: 'Mathieu vous répond sous 24 heures ouvrées. Pour les sujets urgents, écrivez à hello@tenex.studio.',
      en: 'Mathieu replies within one business day. For urgent matters, email hello@tenex.studio.',
    },
    fallbackEmail: 'hello@tenex.studio',
  },
  privacyNote: {
    fr: 'Vos coordonnées servent uniquement à répondre à votre demande.',
    en: 'Your details are used only to reply to your inquiry.',
  },
} as const
