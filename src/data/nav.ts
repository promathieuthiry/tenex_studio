import type { Bilingual } from "@/data/_types";

export type NavLink = Readonly<{
  id: string;
  label: Bilingual;
  href: Bilingual | null;
}>;

export const NAV_LINKS: ReadonlyArray<NavLink> = [
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

export const WORDMARK = "Tenex Studio" as const;
