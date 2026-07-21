import type { Bilingual } from "@/data/_types";
import { BOOK_URL } from "@/lib/book";

export type HeroCopy = Readonly<{
  wordmark: string;
  monogram: string;
  monogramAriaLabel: Bilingual;
  withTeneXStudio: Bilingual;
  monogramTagline: Bilingual;
  headline: Bilingual;
  subheadline: Bilingual;
  status: Bilingual;
  primaryCta: Readonly<{
    label: Bilingual;
    href: Bilingual;
  }>;
  secondaryCta: Readonly<{
    label: Bilingual;
    href: Bilingual;
  }>;
}>;

export const HERO: HeroCopy = {
  wordmark: "TeneX Studio",
  monogram: "10x",
  monogramAriaLabel: {
    fr: "Dix fois. TeneX Studio.",
    en: "Ten times. TeneX Studio.",
  },
  withTeneXStudio: {
    fr: "Avec TeneX Studio.",
    en: "With TeneX Studio.",
  },
  monogramTagline: {
    fr: "Dix fois l’impact.",
    en: "Ten times the output.",
  },
  headline: {
    fr: "Sites web sur mesure.",
    en: "Custom websites.",
  },
  subheadline: {
    fr: "Site, SEO et contenu. Un seul système, mesuré, qui fait décoller votre taux de conversion.",
    en: "Website, SEO and content. One system, measured, that lifts your conversion rate.",
  },
  status: {
    fr: "Studio ouvert · 2026",
    en: "Studio open · 2026",
  },
  primaryCta: {
    label: { fr: "Parlons-en", en: "Get in touch" },
    href: { fr: BOOK_URL, en: BOOK_URL },
  },
  secondaryCta: {
    label: { fr: "Voir les services", en: "See the services" },
    href: { fr: "/#services", en: "/en/#services" },
  },
} as const;
