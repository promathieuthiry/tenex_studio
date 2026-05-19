import type { Bilingual } from '@/data/_types'

export type Testimonial = Readonly<{
  id: string
  quote: Bilingual
  name: Bilingual
  role: Bilingual
  portrait: string
  website: string
}>

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    id: 'placeholder-001',
    quote: {
      fr: 'Mathieu m’a livré un portfolio personnel avec des présentations sur mesure pour chaque projet. Les clients atterrissent directement sur le site et réservent leur rendez-vous via Calendly — fini les allers-retours par mail pour caler une date. Ma conversion a nettement progressé.',
      en: 'Mathieu shipped me a personal portfolio with bespoke presentations for each project. Clients land straight on the site and book their appointment through Calendly — no more back-and-forth emails to find a slot. My conversion has clearly gone up.',
    },
    name: { fr: 'Cyril Ben Said', en: 'Cyril Ben Said' },
    role: {
      fr: 'Fondateur, Studio Lumen',
      en: 'Founder, Studio Lumen',
    },
    portrait: '/testimonials/cyril-bensaid_studiolumen.webp',
    website: 'https://studiolumen.fr',
  },
  {
    id: 'placeholder-002',
    quote: {
      fr: 'Mathieu est intervenu à un moment critique : deadline serrée, un questionnaire exhaustif à livrer, le site à finaliser. Tout était en ligne en une seule journée. L’audit UX/UI qu’il m’a remis a tranché plusieurs décisions que je traînais depuis des mois.',
      en: 'Mathieu came in at a critical moment: tight deadline, a form to ship, a site to finalize. Everything went live within days. The UX/UI audit he handed me settled decisions I had been sitting on for months.',
    },
    name: { fr: 'Eugénie Druart', en: 'Eugénie Druart' },
    role: {
      fr: 'Fondatrice, Women Equity Label',
      en: 'Founder, Women Equity Label',
    },
    portrait: '/testimonials/eugénie_druart_wel.jpeg',
    website: 'https://womenequitylabel.fr/',
  },
  {
    id: 'placeholder-003',
    quote: {
      fr: 'Mathieu m’a livré une web app d’envoi de SMS branchée sur l’API Octopush, intégrée aux réservations restaurant et couplée à l’envoi de mails automatisé. Solution clé en main, 100% autonome, taillée pour la restauration. Mes clients restaurateurs n’ont plus à y penser — ça tourne tout seul.',
      en: 'Mathieu shipped me a web app for sending SMS through the Octopush API, wired into restaurant reservations and paired with automated email dispatch. A turnkey solution, fully autonomous, built for the restaurant industry. My restaurant clients no longer have to think about it — it just runs.',
    },
    name: { fr: 'Mathieu Thiebault', en: 'Mathieu Thiebault' },
    role: {
      fr: 'Fondateur, OuiClient',
      en: 'Founder, OuiClient',
    },
    portrait: '/testimonials/mathieu_thiebault_oui_client.jpeg',
    website: 'https://www.ouiclient.fr/',
  },
] as const
