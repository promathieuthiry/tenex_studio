import type { Bilingual } from "@/data/_types";

export type ContactCtaCopy = Readonly<{
  eyebrow?: Bilingual;
  title: Bilingual;
  body: Bilingual;
  cta: Bilingual;
}>;

export const CONTACT_CTA: ContactCtaCopy = {
  title: {
    fr: "Un projet en tête ?",
    en: "A project in mind?",
  },
  body: {
    fr: "Décrivez-le en quelques lignes. On vous répond sous 24 heures ouvrées.",
    en: "Describe it in a few lines. We respond within one business day.",
  },
  cta: {
    fr: "Réserver un appel",
    en: "Book a call",
  },
} as const;
