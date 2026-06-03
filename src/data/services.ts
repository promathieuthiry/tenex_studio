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

export type ImageTone = "dark" | "light";

export type Service = Readonly<{
  number: string;
  slug: string;
  name: Bilingual;
  description: Bilingual;
  scope: Bilingual<ReadonlyArray<string>>;
  pills: Bilingual<ReadonlyArray<string>>;
  image: Readonly<{ src: string; alt: Bilingual; tone?: ImageTone }>;
  icon: ServiceIcon;
}>;

export const SERVICES: ReadonlyArray<Service> = [
  {
    number: "1",
    slug: "speed",
    icon: MagicWandIcon,
    name: { fr: "La rapidité", en: "Speed" },
    description: {
      fr: "Un site ultra-rapide qui charge en moins de 1 seconde. Vos visiteurs restent, Google le récompense.",
      en: "An ultra-fast website that loads in under 1 second. Visitors stay, Google rewards it.",
    },
    scope: {
      fr: [
        "Audit de performance et Core Web Vitals",
        "Optimisation des images et du chargement",
        "Architecture front-end légère",
        "Cache et rendu statique",
        "Suivi des temps de chargement",
      ],
      en: [
        "Performance audit and Core Web Vitals",
        "Image and loading optimization",
        "Lightweight front-end architecture",
        "Caching and static rendering",
        "Load-time monitoring",
      ],
    },
    pills: {
      fr: [
        "Chargement rapide",
        "Core Web Vitals",
        "Performance",
        "Optimisation",
        "Cache",
      ],
      en: [
        "Fast loading",
        "Core Web Vitals",
        "Performance",
        "Optimization",
        "Caching",
      ],
    },
    image: {
      src: "/services/ui-ux-design.webp",
      alt: {
        fr: "Indicateur de performance web",
        en: "Web performance indicator",
      },
    },
  },
  {
    number: "2",
    slug: "structure",
    icon: LayoutIcon,
    name: { fr: "La structure", en: "Structure" },
    description: {
      fr: "Une architecture de pages pensée pour guider vers l’action. Chaque clic a un objectif.",
      en: "A page architecture built to guide people toward action. Every click has a purpose.",
    },
    scope: {
      fr: [
        "Architecture d’information",
        "Parcours client",
        "Parcours de conversion",
        "Priorisation des pages clés",
        "Hiérarchie des contenus",
      ],
      en: [
        "Information architecture",
        "Customer journey",
        "Conversion paths",
        "Key page prioritization",
        "Content hierarchy",
      ],
    },
    pills: {
      fr: [
        "Architecture",
        "Parcours client",
        "Parcours",
        "Hiérarchie",
        "Conversion",
      ],
      en: [
        "Architecture",
        "Customer journey",
        "Flows",
        "Hierarchy",
        "Conversion",
      ],
    },
    image: {
      src: "/services/website-creation.webp",
      tone: "light",
      alt: {
        fr: "Structure de page et données de conversion",
        en: "Page structure and conversion data",
      },
    },
  },
  {
    number: "3",
    slug: "copywriting",
    icon: CodeIcon,
    name: {
      fr: "Le copywriting",
      en: "Copywriting",
    },
    description: {
      fr: "Des textes écrits pour convertir. Promesses, arguments, titres et appels à l’action, chaque mot compte.",
      en: "Copy written to convert. Promises, arguments, headlines and calls to action, every word matters.",
    },
    scope: {
      fr: [
        "Promesse principale",
        "Titres et intertitres",
        "Arguments de conversion",
        "Appels à l’action",
        "Microcopy et messages d’interface",
      ],
      en: [
        "Core promise",
        "Headlines and subheads",
        "Conversion arguments",
        "Calls to action",
        "Microcopy and interface messages",
      ],
    },
    pills: {
      fr: ["Titres", "Promesse", "Arguments", "CTA", "Microcopy"],
      en: ["Headlines", "Promise", "Arguments", "CTAs", "Microcopy"],
    },
    image: {
      src: "/services/saas-application.webp",
      alt: {
        fr: "Cartes de messages et de titres",
        en: "Message and headline cards",
      },
    },
  },
  {
    number: "4",
    slug: "seo-aeo-geo",
    icon: MagnifyingGlassIcon,
    name: { fr: "Le référencement naturel", en: "SEO, AEO & GEO" },
    description: {
      fr: "Optimisation technique pour vous positionner top 5 sur Google et apparaitre dans les réponses des LLM comme ChatGPT.",
      en: "Technical optimization to secure a top 5 Google ranking and surface in LLM responses like ChatGPT.",
    },
    scope: {
      fr: [
        "Google",
        "Audit SEO technique",
        "Recherche de mots-clés",
        "Optimisation AEO pour les moteurs de réponse",
        "Optimisation GEO pour les LLM",
        "Optimisation des balises",
        "Structure des contenus",
      ],
      en: [
        "Google",
        "Technical SEO audit",
        "Keyword research",
        "AEO optimization for answer engines",
        "GEO optimization for LLMs",
        "Metadata optimization",
        "Content structure",
      ],
    },
    pills: {
      fr: ["SEO", "AEO", "GEO", "LLM", "Mots-clés", "Contenu"],
      en: ["SEO", "AEO", "GEO", "LLMs", "Keywords", "Content"],
    },
    image: {
      src: "/services/seo-geo.webp",
      tone: "light",
      alt: {
        fr: "Globe et visibilité internationale",
        en: "Globe and international visibility",
      },
    },
  },
  {
    number: "5",
    slug: "design",
    icon: DesktopIcon,
    name: {
      fr: "Le design",
      en: "Design",
    },
    description: {
      fr: "Une interface moderne et professionnelle qui inspire confiance dès la première seconde.",
      en: "A modern, professional interface that builds trust from the first second.",
    },
    scope: {
      fr: [
        "Direction artistique web",
        "Maquettes haute-fidélité",
        "Design responsive",
        "Bibliothèque de composants",
        "Accessibilité et lisibilité",
      ],
      en: [
        "Web art direction",
        "High-fidelity mockups",
        "Responsive design",
        "Component library",
        "Accessibility and readability",
      ],
    },
    pills: {
      fr: ["UI", "Identité", "Maquettes", "Responsive", "Accessibilité"],
      en: ["UI", "Identity", "Mockups", "Responsive", "Accessibility"],
    },
    image: {
      src: "/services/ai-automations.webp?v=20260603-design-centered",
      alt: {
        fr: "Interface web moderne",
        en: "Modern web interface",
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
      src: "/services/training-support.webp?v=20260603-support-mark",
      alt: {
        fr: "Casque de support avec coche de validation",
        en: "Support headset with validation checkmark",
      },
    },
  },
] as const;

for (const service of SERVICES) {
  assertArrayParity(`services.${service.number}.scope`, service.scope);
  assertArrayParity(`services.${service.number}.pills`, service.pills);
}
