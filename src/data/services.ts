import {
  BackpackIcon,
  CodeIcon,
  DesktopIcon,
  LayoutIcon,
  MagicWandIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons'
import type { Bilingual } from '@/data/_types'
import { assertArrayParity } from '@/data/__guards'

export type ServiceIcon = typeof LayoutIcon

export type Service = Readonly<{
  number: string
  slug: string
  name: Bilingual
  description: Bilingual
  scope: Bilingual<ReadonlyArray<string>>
  icon: ServiceIcon
}>

export const SERVICES: ReadonlyArray<Service> = [
  {
    number: '001',
    slug: 'ui-ux-design',
    icon: LayoutIcon,
    name: { fr: 'Design UI/UX', en: 'UI/UX Design' },
    description: {
      fr: 'Design d’interfaces web et mobile centré utilisateur. Du wireframe au design system, des écrans prêts à être développés et pensés pour convertir.',
      en: 'User-centered web and mobile interface design. From wireframes to a complete design system — screens ready to ship and built to convert.',
    },
    scope: {
      fr: [
        'Recherche utilisateur et architecture d’information',
        'Wireframes et parcours interactifs',
        'Maquettes haute-fidélité et prototypes',
        'Design system et bibliothèque de composants',
        'Accessibilité WCAG AA',
        'Tests d’utilisabilité',
      ],
      en: [
        'User research and information architecture',
        'Wireframes and interactive user flows',
        'High-fidelity mockups and prototypes',
        'Design system and component library',
        'Accessibility (WCAG AA)',
        'Usability testing',
      ],
    },
  },
  {
    number: '002',
    slug: 'website-creation',
    icon: DesktopIcon,
    name: { fr: 'Création de site internet', en: 'Website Creation' },
    description: {
      fr: 'Sites vitrines, e-commerce ou sur mesure. Rapides, sécurisés et adaptés à votre activité — conçus pour convertir, optimisés pour le SEO et pensés pour durer.',
      en: 'Showcase, e-commerce, or custom websites. Fast, secure, and tailored to your business — built to convert, SEO-optimized, and designed to last.',
    },
    scope: {
      fr: [
        'Sites vitrines et marques',
        'E-commerce et boutiques en ligne',
        'Sites sur mesure (Next.js, React)',
        'CMS Sanity et architecture headless',
        'Performance, Core Web Vitals et SEO technique',
        'Déploiement Vercel et CI/CD',
      ],
      en: [
        'Showcase and brand websites',
        'E-commerce and online stores',
        'Custom websites (Next.js, React)',
        'Sanity CMS and headless architecture',
        'Performance, Core Web Vitals, and technical SEO',
        'Vercel deployment and CI/CD',
      ],
    },
  },
  {
    number: '003',
    slug: 'saas-application',
    icon: CodeIcon,
    name: {
      fr: 'Création d’application SaaS',
      en: 'SaaS Application',
    },
    description: {
      fr: 'Conception et développement d’applications web SaaS sur mesure. Architectures modernes en Next.js, React et TypeScript, prêtes à évoluer avec votre produit.',
      en: 'Design and engineering of custom SaaS applications. Modern Next.js, React, and TypeScript architectures, ready to scale with your product.',
    },
    scope: {
      fr: [
        'Architecture SaaS et multi-tenant',
        'Authentification, rôles et permissions',
        'Tableaux de bord et interfaces produit',
        'API, intégrations et back-end TypeScript',
        'Paiements, abonnements et facturation',
        'Déploiement Vercel et CI/CD',
      ],
      en: [
        'SaaS and multi-tenant architecture',
        'Authentication, roles, and permissions',
        'Dashboards and product interfaces',
        'APIs, integrations, and TypeScript back-end',
        'Payments, subscriptions, and billing',
        'Vercel deployment and CI/CD',
      ],
    },
  },
  {
    number: '004',
    slug: 'seo-geo',
    icon: MagnifyingGlassIcon,
    name: { fr: 'SEO et GEO', en: 'SEO & GEO' },
    description: {
      fr: 'Stratégie de référencement complète pour Google et les moteurs de recherche IA — ChatGPT, Perplexity, Gemini. Plus de visibilité, plus de trafic qualifié, plus de leads.',
      en: 'Full search strategy for Google and AI-powered engines — ChatGPT, Perplexity, Gemini. More visibility, more qualified traffic, more leads.',
    },
    scope: {
      fr: [
        'Audit SEO technique et Core Web Vitals',
        'Optimisation on-page et off-page',
        'Recherche de mots-clés et intentions de recherche',
        'Optimisation pour moteurs génératifs (GEO)',
        'Stratégie éditoriale et rédaction de contenu',
        'SEO local et fiches Google Business',
        'Netlinking et autorité de domaine',
      ],
      en: [
        'Technical SEO audit and Core Web Vitals',
        'On-page and off-page optimization',
        'Keyword and search-intent research',
        'Generative Engine Optimization (GEO)',
        'Content strategy and editorial writing',
        'Local SEO and Google Business profiles',
        'Link building and domain authority',
      ],
    },
  },
  {
    number: '005',
    slug: 'ai-automations',
    icon: MagicWandIcon,
    name: {
      fr: 'Automatisations et workflows IA',
      en: 'AI Automations & Workflows',
    },
    description: {
      fr: 'Agents IA et workflows d’automatisation pour vos opérations quotidiennes. Moins de tâches répétitives, plus de temps pour ce qui compte vraiment.',
      en: 'AI agents and automation workflows for your day-to-day operations. Less repetitive work, more time for what actually matters.',
    },
    scope: {
      fr: [
        'Conception de workflows IA sur mesure',
        'Automatisation de processus métier',
        'Agents conversationnels et support client',
        'Génération et qualification de leads',
        'Pipelines de contenu automatisés',
        'Intégration aux outils existants (CRM, Notion, Slack)',
        'Cycle de développement assisté par IA',
      ],
      en: [
        'Custom AI workflow design',
        'Business process automation',
        'Conversational agents and customer support',
        'Lead generation and qualification',
        'Automated content pipelines',
        'Integration with existing tools (CRM, Notion, Slack)',
        'AI-assisted development lifecycle',
      ],
    },
  },
  {
    number: '006',
    slug: 'training-support',
    icon: BackpackIcon,
    name: { fr: 'Formation et support', en: 'Training & Support' },
    description: {
      fr: 'Formation sur les outils que vous utilisez au quotidien et accompagnement tout au long de vos projets — et bien après leur livraison.',
      en: 'Training on the tools you use every day and hands-on guidance throughout your projects — and long after delivery.',
    },
    scope: {
      fr: [
        'Formation aux outils et plateformes',
        'Documentation et guides sur mesure',
        'Onboarding des équipes',
        'Accompagnement projet et conseil',
        'Support technique continu',
        'Maintenance et évolutions',
      ],
      en: [
        'Training on tools and platforms',
        'Custom documentation and guides',
        'Team onboarding',
        'Project guidance and advisory',
        'Ongoing technical support',
        'Maintenance and improvements',
      ],
    },
  },
] as const

for (const service of SERVICES) {
  assertArrayParity(`services.${service.number}.scope`, service.scope)
}
