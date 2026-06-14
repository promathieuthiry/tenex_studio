import type { Bilingual } from "@/data/_types";
import { BOOK_URL } from "@/lib/book";

export type HeroCopy = Readonly<{
  wordmark: string;
  monogram: string;
  monogramAriaLabel: Bilingual;
  withTenexStudio: Bilingual;
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
  wordmark: "Tenex Studio",
  monogram: "10x",
  monogramAriaLabel: {
    fr: "Dix fois. Tenex Studio.",
    en: "Ten times. Tenex Studio.",
  },
  withTenexStudio: {
    fr: "Avec Tenex Studio.",
    en: "With Tenex Studio.",
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
    fr: "Nous créons des sites web premium pour cabinets, studios et sociétés de conseil dont l’expertise doit inspirer confiance avant le premier échange.",
    en: "We build premium custom websites for firms, studios and consultancies whose expertise needs to build trust before the first call.",
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
