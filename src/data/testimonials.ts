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
      fr: 'Avant, mon site ne convertissait pas. Aujourd’hui, je le partage à mes partenaires et prospects sans hésiter. Studio Tenex m’a livré une vraie vitrine : page sur mesure pour mon équipement, galerie de mes projets réalisés, réservation Calendly intégrée. Les clients arrivent, voient mon travail, choisissent leur créneau. Résultat : plus de rendez-vous, plus de clients signés.',
      en: 'Before, my site wasn’t converting. Today, I share it with partners and prospects without hesitation. Studio Tenex delivered a real showcase: a custom page for my equipment, a gallery of past projects, Calendly booking built in. Clients land, see my work, pick their slot. Result: more calls, more signed clients.',
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
      fr: 'À quelques jours du lancement, mon site n’était pas prêt, mon questionnaire pas finalisé. Studio Tenex est intervenu en urgence, sur une seule journée : site terminé, questionnaire livré, mise en ligne dans la foulée. Résultat : deadline tenue, lancement sauvé.',
      en: 'Days before launch, my site wasn’t ready, my questionnaire wasn’t finalized. Studio Tenex stepped in fast, in a single day: site finished, questionnaire delivered, live straight after. Result: deadline met, launch saved.',
    },
    name: { fr: 'Eugénie Druart', en: 'Eugénie Druart' },
    role: {
      fr: 'Fondatrice, Women Equity Label',
      en: 'Founder, Women Equity Label',
    },
    portrait: '/testimonials/eugenie_druart_wel.jpeg',
    website: 'https://womenequitylabel.fr/',
  },
  {
    id: 'placeholder-003',
    quote: {
      fr: 'Je développe une solution de confirmation de réservations pour la restauration. Avant, j’envoyais les SMS à la main, un par un. Une journée entière y passait. Studio Tenex m’a livré une web app interne clé en main : envoi SMS automatique via l’API Octopush, mails récapitulatifs automatisés, dashboard dédié par restaurant, base de données qui rend la solution duplicable à volonté. Résultat : des heures économisées chaque semaine, zéro erreur manuelle, du temps réinvesti en prospection, et de nouveaux contrats signés à la clé.',
      en: 'I build a reservation confirmation solution for the restaurant industry. Before, I was sending SMS by hand, one by one. A full day went into it. Studio Tenex delivered a turnkey internal web app: automated SMS through the Octopush API, automated email recaps, a dedicated dashboard per restaurant, a database that makes the solution replicable on demand. Result: hours saved every week, zero manual errors, time reinvested into prospecting, with new signed contracts to show for it.',
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
