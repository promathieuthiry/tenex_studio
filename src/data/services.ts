import {
  BackpackIcon,
  CodeIcon,
  DesktopIcon,
  LayoutIcon,
  MagicWandIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import type { Bilingual } from "@/data/_types";
import { assertArrayParity } from "@/data/__guards";

export type ServiceIcon = typeof LayoutIcon;

export type Service = Readonly<{
  number: string;
  slug: string;
  name: Bilingual;
  description: Bilingual;
  scope: Bilingual<ReadonlyArray<string>>;
  pills: Bilingual<ReadonlyArray<string>>;
  image: Readonly<{ src: string; alt: Bilingual }>;
  icon: ServiceIcon;
}>;

export const SERVICES: ReadonlyArray<Service> = [
  {
    number: "1",
    slug: "ui-ux-design",
    icon: LayoutIcon,
    name: { fr: "Design UI/UX", en: "UI/UX Design" },
    description: {
      fr: "Des écrans clairs, testés, prêts à coder. Vos visiteurs trouvent vite, comprennent vite, agissent.",
      en: "Clear, tested screens, ready to code. Your visitors find fast, understand fast, take action.",
    },
    scope: {
      fr: [
        "Recherche utilisateur et architecture d’information",
        "Wireframes et parcours interactifs",
        "Maquettes haute-fidélité et prototypes",
        "Design system et bibliothèque de composants",
        "Accessibilité WCAG AA",
        "Tests d’utilisabilité",
      ],
      en: [
        "User research and information architecture",
        "Wireframes and interactive user flows",
        "High-fidelity mockups and prototypes",
        "Design system and component library",
        "Accessibility (WCAG AA)",
        "Usability testing",
      ],
    },
    pills: {
      fr: [
        "Recherche utilisateur",
        "Parcours",
        "Maquettes",
        "Design System",
        "Accessibilité",
      ],
      en: [
        "User research",
        "Flows",
        "Mockups",
        "Design system",
        "Accessibility",
      ],
    },
    image: {
      src: "/services/ui-ux-design.jpg",
      alt: {
        fr: "Interface design haute-fidélité",
        en: "High-fidelity interface design",
      },
    },
  },
  {
    number: "2",
    slug: "website-creation",
    icon: DesktopIcon,
    name: { fr: "Création de site internet", en: "Website Creation" },
    description: {
      fr: "Un site rapide qui transforme vos visiteurs en clients. Vitrine, e-commerce ou sur mesure, conçu pour durer.",
      en: "A fast website that turns visitors into customers. Showcase, e-commerce, or custom build, made to last.",
    },
    scope: {
      fr: [
        "Sites vitrines et marques",
        "E-commerce et boutiques en ligne",
        "Sites sur mesure (Next.js, React)",
        "CMS Sanity et architecture headless",
        "Performance, Core Web Vitals et SEO technique",
        "Déploiement Vercel et CI/CD",
      ],
      en: [
        "Showcase and brand websites",
        "E-commerce and online stores",
        "Custom websites (Next.js, React)",
        "Sanity CMS and headless architecture",
        "Performance, Core Web Vitals, and technical SEO",
        "Vercel deployment and CI/CD",
      ],
    },
    pills: {
      fr: [
        "Vitrine",
        "E-commerce",
        "Sur mesure",
        "SEO technique",
        "Performance",
        "CMS",
      ],
      en: [
        "Showcase",
        "E-commerce",
        "Custom build",
        "Technical SEO",
        "Performance",
        "CMS",
      ],
    },
    image: {
      src: "/services/website-creation.jpg",
      alt: {
        fr: "Site web sur mesure en production",
        en: "Custom website in production",
      },
    },
  },
  {
    number: "3",
    slug: "saas-application",
    icon: CodeIcon,
    name: {
      fr: "Création d’application SaaS",
      en: "SaaS Application",
    },
    description: {
      fr: "Votre produit web, de la maquette à la mise en ligne. Une base solide, prête à grandir avec vos clients.",
      en: "Your web product, from mockup to launch. A solid foundation, ready to grow with your customers.",
    },
    scope: {
      fr: [
        "Architecture SaaS et multi-tenant",
        "Authentification, rôles et permissions",
        "Tableaux de bord et interfaces produit",
        "API, intégrations et back-end TypeScript",
        "Paiements, abonnements et facturation",
        "Déploiement Vercel et CI/CD",
      ],
      en: [
        "SaaS and multi-tenant architecture",
        "Authentication, roles, and permissions",
        "Dashboards and product interfaces",
        "APIs, integrations, and TypeScript back-end",
        "Payments, subscriptions, and billing",
        "Vercel deployment and CI/CD",
      ],
    },
    pills: {
      fr: ["Architecture", "Connexion", "Tableaux de bord", "API", "Paiements"],
      en: ["Architecture", "Auth", "Dashboards", "API", "Payments"],
    },
    image: {
      src: "/services/saas-application.jpg",
      alt: {
        fr: "Interface produit SaaS",
        en: "SaaS product interface",
      },
    },
  },
  {
    number: "4",
    slug: "seo-geo",
    icon: MagnifyingGlassIcon,
    name: { fr: "SEO et GEO", en: "SEO & GEO" },
    description: {
      fr: "Soyez visible sur Google et dans les réponses de ChatGPT, Perplexity, Gemini. Plus de trafic qualifié, plus de clients.",
      en: "Get found on Google and inside answers from ChatGPT, Perplexity, Gemini. More qualified traffic, more customers.",
    },
    scope: {
      fr: [
        "Audit SEO technique et Core Web Vitals",
        "Optimisation on-page et off-page",
        "Recherche de mots-clés et intentions de recherche",
        "Optimisation pour moteurs génératifs (GEO)",
        "Stratégie éditoriale et rédaction de contenu",
        "SEO local et fiches Google Business",
        "Netlinking et autorité de domaine",
      ],
      en: [
        "Technical SEO audit and Core Web Vitals",
        "On-page and off-page optimization",
        "Keyword and search-intent research",
        "Generative Engine Optimization (GEO)",
        "Content strategy and editorial writing",
        "Local SEO and Google Business profiles",
        "Link building and domain authority",
      ],
    },
    pills: {
      fr: ["Audit", "Mots-clés", "GEO", "Contenu", "SEO local", "Autorité"],
      en: ["Audit", "Keywords", "GEO", "Content", "Local SEO", "Authority"],
    },
    image: {
      src: "/services/seo-geo.jpg",
      alt: {
        fr: "Tableau de bord de performance SEO",
        en: "SEO performance dashboard",
      },
    },
  },
  {
    number: "5",
    slug: "ai-automations",
    icon: MagicWandIcon,
    name: {
      fr: "Automatisations et workflows IA",
      en: "AI Automations & Workflows",
    },
    description: {
      fr: "Des agents IA qui gèrent vos tâches répétitives. Vos équipes gagnent des heures chaque semaine.",
      en: "AI agents that handle the repetitive work. Your team gains hours every week.",
    },
    scope: {
      fr: [
        "Conception de workflows IA sur mesure",
        "Automatisation de processus métier",
        "Agents conversationnels et support client",
        "Génération et qualification de leads",
        "Pipelines de contenu automatisés",
        "Intégration aux outils existants (CRM, Notion, Slack)",
        "Cycle de développement assisté par IA",
      ],
      en: [
        "Custom AI workflow design",
        "Business process automation",
        "Conversational agents and customer support",
        "Lead generation and qualification",
        "Automated content pipelines",
        "Integration with existing tools (CRM, Notion, Slack)",
        "AI-assisted development lifecycle",
      ],
    },
    pills: {
      fr: ["Workflows", "Agents IA", "Leads", "Contenu", "CRM", "Intégrations"],
      en: ["Workflows", "AI agents", "Leads", "Content", "CRM", "Integrations"],
    },
    image: {
      src: "/services/ai-automations.webp",
      alt: {
        fr: "Workflow IA en action",
        en: "AI workflow in motion",
      },
    },
  },
  {
    number: "6",
    slug: "training-support",
    icon: BackpackIcon,
    name: { fr: "Formation et support", en: "Training & Support" },
    description: {
      fr: "On forme vos équipes à vos nouveaux outils. Un accompagnement qui dure bien après la mise en ligne.",
      en: "We train your team on the new tools. Support that lasts well beyond launch.",
    },
    scope: {
      fr: [
        "Formation aux outils et plateformes",
        "Documentation et guides sur mesure",
        "Onboarding des équipes",
        "Accompagnement projet et conseil",
        "Support technique continu",
        "Maintenance et évolutions",
      ],
      en: [
        "Training on tools and platforms",
        "Custom documentation and guides",
        "Team onboarding",
        "Project guidance and advisory",
        "Ongoing technical support",
        "Maintenance and improvements",
      ],
    },
    pills: {
      fr: [
        "Formation",
        "Documentation",
        "Onboarding",
        "Conseil",
        "Support",
        "Maintenance",
      ],
      en: [
        "Training",
        "Documentation",
        "Onboarding",
        "Advisory",
        "Support",
        "Maintenance",
      ],
    },
    image: {
      src: "/services/training-support.jpg",
      alt: {
        fr: "Session de formation en studio",
        en: "Studio training session",
      },
    },
  },
] as const;

for (const service of SERVICES) {
  assertArrayParity(`services.${service.number}.scope`, service.scope);
  assertArrayParity(`services.${service.number}.pills`, service.pills);
}
