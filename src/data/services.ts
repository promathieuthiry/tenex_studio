import {
  DesktopIcon,
  LayoutIcon,
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
    slug: "design",
    icon: DesktopIcon,
    name: { fr: "Design", en: "Design" },
    description: {
      fr: "Démarquez-vous au premier regard. Une interface sur mesure, zéro template, qui inspire confiance dès la première seconde.",
      en: "Stand out at first glance. A custom interface, zero templates, that builds trust from the first second.",
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
      src: "/services/design-isometric-endorsement-balanced.webp",
      alt: {
        fr: "Icône d’approbation incrustée dans un bloc isométrique",
        en: "Endorsement icon inlaid into an isometric block",
      },
    },
  },
  {
    number: "2",
    slug: "conversion",
    icon: LayoutIcon,
    name: { fr: "Conversion", en: "Conversion" },
    description: {
      fr: "Transformez vos visiteurs en clients. Structure des pages, textes et appels à l’action, chaque clic a un objectif.",
      en: "Turn visitors into clients. Page structure, copy and calls to action, every click has a purpose.",
    },
    scope: {
      fr: [
        "Architecture d’information et parcours client",
        "Copywriting et promesse principale",
        "Appels à l’action et microcopy",
        "Hiérarchie des contenus",
        "Chargement en moins de 1 seconde",
      ],
      en: [
        "Information architecture and customer journey",
        "Copywriting and core promise",
        "Calls to action and microcopy",
        "Content hierarchy",
        "Loading in under 1 second",
      ],
    },
    pills: {
      fr: ["Parcours", "Copywriting", "CTA", "Hiérarchie", "Vitesse"],
      en: ["Journeys", "Copywriting", "CTAs", "Hierarchy", "Speed"],
    },
    image: {
      src: "/services/website-creation.webp",
      tone: "light",
      alt: {
        fr: "Parcours de conversion sur ordinateur et mobile",
        en: "Conversion path on desktop and mobile",
      },
    },
  },
  {
    number: "3",
    slug: "visibilite",
    icon: MagnifyingGlassIcon,
    name: { fr: "Visibilité", en: "Visibility" },
    description: {
      fr: "Soyez trouvé par Google, recommandé par les IA. Optimisation technique pour viser le top 5 et apparaitre dans les réponses de ChatGPT.",
      en: "Get found on Google, recommended by AI. Technical optimization to target the top 5 and surface in ChatGPT answers.",
    },
    scope: {
      fr: [
        "Audit SEO technique et mots-clés",
        "Optimisation AEO pour les moteurs de réponse",
        "Optimisation GEO pour les LLM",
        "Balises et données structurées",
        "Core Web Vitals",
      ],
      en: [
        "Technical SEO audit and keywords",
        "AEO optimization for answer engines",
        "GEO optimization for LLMs",
        "Metadata and structured data",
        "Core Web Vitals",
      ],
    },
    pills: {
      fr: ["SEO", "AEO", "GEO", "LLM", "Mots-clés", "Core Web Vitals"],
      en: ["SEO", "AEO", "GEO", "LLMs", "Keywords", "Core Web Vitals"],
    },
    image: {
      src: "/services/visibility-isometric-found.webp",
      alt: {
        fr: "Icône de recherche validée incrustée dans un bloc isométrique",
        en: "Validated search icon inlaid into an isometric block",
      },
    },
  },
] as const;

for (const service of SERVICES) {
  assertArrayParity(`services.${service.number}.scope`, service.scope);
  assertArrayParity(`services.${service.number}.pills`, service.pills);
}
