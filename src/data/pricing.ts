import type { Bilingual } from '@/data/_types'
import { assertArrayParity } from '@/data/__guards'

export type PricingTier = Readonly<{
  id: 'starter' | 'growth' | 'mvp'
  name: Bilingual
  price: Bilingual
  priceQualifier: 'fixed' | 'from'
  timeline: Bilingual
  description: Bilingual
  scope: Bilingual<ReadonlyArray<string>>
  ctaLabel: Bilingual
}>

export const PRICING: ReadonlyArray<PricingTier> = [
  {
    id: 'starter',
    name: { fr: 'Vitrine', en: 'Vitrine' },
    price: { fr: '1 500 €', en: '€1,500' },
    priceQualifier: 'fixed',
    timeline: { fr: '1 semaine', en: '1 week' },
    description: {
      fr: 'Site vitrine 4 pages livré en une semaine — CMS Sanity, formulaire de contact, SEO optimisé. Pour exister en ligne avec un site rapide géré en autonomie.',
      en: 'Four-page showcase site delivered in one week — Sanity CMS, contact form, optimized SEO. To establish your presence online with a fast site you manage yourself.',
    },
    scope: {
      fr: [
        '4 pages (accueil + trois internes)',
        'CMS Sanity pour gérer le contenu en autonomie',
        'Formulaire de contact',
        'Audit Lighthouse ≥ 90 + optimisation des performances et SEO',
        'Déploiement et nom de domaine',
        'Intégrations Google Analytics et Calendly',
        'Un cycle de retours',
      ],
      en: [
        'Four pages (home + three inner)',
        'Sanity CMS for autonomous content management',
        'Contact form',
        'Lighthouse audit ≥ 90 + performance and SEO optimization',
        'Deployment and domain',
        'Google Analytics and Calendly integrations',
        'One round of feedback',
      ],
    },
    ctaLabel: { fr: 'Réserver un appel', en: 'Book a call' },
  },
  {
    id: 'growth',
    name: { fr: 'Site', en: 'Site' },
    price: { fr: '3 500 €', en: '€3,500' },
    priceQualifier: 'from',
    timeline: { fr: '2 à 3 semaines', en: '2 to 3 weeks' },
    description: {
      fr: 'Site complet avec design sur mesure, CMS, paiements Stripe et internationalisation — pour publier du contenu dynamique (blog, études de cas) ou lancer un site e-commerce.',
      en: 'Full site with custom design, CMS, Stripe payments and internationalization — to publish dynamic content (blog, case studies) or launch an e-commerce site.',
    },
    scope: {
      fr: [
        'Jusqu’à 8 pages secondaires',
        'Design system sur mesure, typographie et palette selon les meilleures pratiques (Google Labs DESIGN.md)',
        'Paiements Stripe',
        'Internationalisation (i18n) prête à publier dans plusieurs langues',
        'CMS Sanity enrichi — contrôle éditorial complet',
        'Blog ou journal dynamique géré depuis le CMS',
        'Page Contact avec courriels automatisés (Resend)',
        'Mailchimp, HubSpot, Hotjar et Crisp',
        'Deux cycles de retours',
      ],
      en: [
        'Up to 8 secondary pages',
        'Custom design system, typography and palette following best practices (Google Labs DESIGN.md)',
        'Stripe payments',
        'Internationalization (i18n) ready to publish in multiple languages',
        'Sanity CMS upgrade — full editorial control',
        'Dynamic blog or journal managed from the CMS',
        'Automated contact emails (Resend)',
        'Mailchimp, HubSpot, Hotjar and Crisp',
        'Two rounds of feedback',
      ],
    },
    ctaLabel: { fr: 'Réserver un appel', en: 'Book a call' },
  },
  {
    id: 'mvp',
    name: { fr: 'MVP', en: 'MVP' },
    price: { fr: '8 000 €', en: '€8,000' },
    priceQualifier: 'from',
    timeline: { fr: '6 à 10 semaines', en: '6 to 10 weeks' },
    description: {
      fr: 'Application web sur mesure avec authentification, base de données Postgres et tableau de bord — pour valider un MVP ou livrer un produit SaaS sur une architecture évolutive.',
      en: 'Custom web application with authentication, Postgres database and dashboard — to validate an MVP or ship a SaaS product on a scalable architecture.',
    },
    scope: {
      fr: [
        'Audit produit et architecture technique',
        'Application Next.js / TypeScript sur mesure (logique métier, pas un site)',
        'Authentification et base de données Postgres',
        'Tableau de bord et fonctionnalités sur mesure',
        'Intercom, Mixpanel et Sentry',
        'Passation complète du code, de la documentation et de l’architecture',
      ],
      en: [
        'Product audit and technical architecture',
        'Bespoke Next.js / TypeScript application (business logic, not a website)',
        'Authentication and Postgres database',
        'Dashboard and custom features',
        'Intercom, Mixpanel and Sentry',
        'Full code, documentation and architecture handover',
      ],
    },
    ctaLabel: { fr: 'Réserver un appel', en: 'Book a call' },
  },
] as const

for (const tier of PRICING) {
  assertArrayParity(`pricing.${tier.id}.scope`, tier.scope)
}
