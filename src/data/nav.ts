import type { Bilingual } from "@/data/_types";

export type NavLeaf = Readonly<{
  id: string;
  label: Bilingual;
  href: Bilingual | null;
  description?: Bilingual;
}>;

export type NavGroup = Readonly<{
  id: string;
  label: Bilingual;
  children: ReadonlyArray<NavLeaf>;
}>;

export type NavItem = NavLeaf | NavGroup;

export const isNavGroup = (item: NavItem): item is NavGroup =>
  "children" in item;

export const NAV_LINKS: ReadonlyArray<NavItem> = [
  {
    id: "services",
    label: { fr: "Services", en: "Services" },
    href: { fr: "/#services", en: "/en/#services" },
  },
  {
    id: "work",
    label: { fr: "Travail", en: "Work" },
    href: { fr: "/#work", en: "/en/#work" },
  },
  {
    id: "pricing",
    label: { fr: "Tarifs", en: "Pricing" },
    href: { fr: "/#pricing", en: "/en/#pricing" },
  },
  {
    id: "ressources",
    label: { fr: "Ressources", en: "Resources" },
    children: [
      {
        id: "custom-websites",
        label: { fr: "Sites web sur mesure", en: "Custom websites" },
        href: { fr: "/sites-web-sur-mesure/", en: "/en/custom-websites/" },
        description: {
          fr: "Notre approche du site complet sur mesure.",
          en: "Our approach to the full custom website.",
        },
      },
      {
        id: "blog",
        label: { fr: "Blog", en: "Blog" },
        href: { fr: "/blog/", en: "/en/blog/" },
        description: {
          fr: "Réflexions sur le métier et la conversion.",
          en: "Thoughts on the craft and conversion.",
        },
      },
      {
        id: "tools",
        label: { fr: "Outils", en: "Tools" },
        href: { fr: "/outils/", en: "/en/tools/" },
        description: {
          fr: "Notre sélection d'outils pour créer et lancer un site.",
          en: "Our picks for building and shipping a site.",
        },
      },
      {
        id: "glossary",
        label: { fr: "Glossaire", en: "Glossary" },
        href: { fr: "/glossaire/", en: "/en/glossary/" },
        description: {
          fr: "Les termes de l'IA, du SEO et du web, définis simplement.",
          en: "AI, SEO and web terms, defined simply.",
        },
      },
    ],
  },
] as const;

export const TALK_PILL: Readonly<{
  label: Bilingual;
}> = {
  label: { fr: "Contact", en: "Contact" },
} as const;

export const SKIP_LINK: Bilingual = {
  fr: "Aller au contenu",
  en: "Skip to content",
} as const;

export const SWITCHER_LABEL: Readonly<{
  toFr: string;
  toEn: string;
}> = {
  toFr: "Passer en français",
  toEn: "Switch to English",
} as const;

export const NAV_LANDMARK: Bilingual = {
  fr: "Navigation principale",
  en: "Main navigation",
} as const;

export const MENU_LABEL: Readonly<{
  open: Bilingual;
  close: Bilingual;
}> = {
  open: { fr: "Ouvrir le menu", en: "Open menu" },
  close: { fr: "Fermer le menu", en: "Close menu" },
} as const;

export const WORDMARK = "TeneX Studio" as const;
