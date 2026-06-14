import type { Bilingual } from "@/data/_types";

export type FooterLink = Readonly<{
  label: Bilingual;
  href: Bilingual;
}>;

export type FooterCopy = Readonly<{
  tagline: Bilingual;
  navHeading: Bilingual;
  contactHeading: Bilingual;
  addressHeading: Bilingual;
  email: string;
  linkedin: string;
  address: ReadonlyArray<string>;
  legalLinks: ReadonlyArray<FooterLink>;
  rights: Bilingual;
  closingTagline: Bilingual;
  yearmark: string;
}>;

export const FOOTER: FooterCopy = {
  tagline: {
    fr: "Sites web et applications sur mesure qui rendent votre expertise 10 fois plus crédible.",
    en: "Custom websites and web apps that make your expertise ten times more credible.",
  },
  navHeading: { fr: "Navigation", en: "Navigation" },
  contactHeading: { fr: "Contact", en: "Contact" },
  addressHeading: { fr: "Adresse", en: "Address" },
  email: "contact@tenex.studio",
  linkedin: "https://www.linkedin.com/company/113208945/",
  address: [
    "La Cantine x La French Tech Nantes",
    "40 Rue la Tour d'Auvergne",
    "44200 Nantes",
  ],
  legalLinks: [
    {
      label: { fr: "Mentions légales", en: "Legal notice" },
      href: { fr: "/mentions-legales/", en: "/en/legal-notice/" },
    },
  ],
  rights: {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },
  closingTagline: {
    fr: "Sites web sur mesure à Nantes",
    en: "Custom websites in Nantes",
  },
  yearmark: "(©26)",
} as const;
