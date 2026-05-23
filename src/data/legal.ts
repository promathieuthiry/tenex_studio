import type { Bilingual } from "@/data/_types";

export type LegalSection = Readonly<{
  heading: string;
  body: ReadonlyArray<string>;
}>;

export type LegalDoc = Readonly<{
  title: string;
  intro: string;
  sections: ReadonlyArray<LegalSection>;
  updated: string;
}>;

export type LegalCopy = Readonly<{
  eyebrow: Bilingual;
  doc: Bilingual<LegalDoc>;
}>;

const PLACEHOLDER = {
  fr: "À compléter.",
  en: "To be completed.",
} as const;

export const LEGAL: LegalCopy = {
  eyebrow: { fr: "Légal", en: "Legal" },
  doc: {
    fr: {
      title: "Mentions légales",
      intro:
        "Informations légales relatives au site tenex.studio et à son éditeur.",
      sections: [
        {
          heading: "Éditeur",
          body: [
            "Tenex Studio",
            "40 Rue la Tour d'Auvergne, 44200 Nantes, France",
            "contact@tenex.studio",
            PLACEHOLDER.fr,
          ],
        },
        {
          heading: "Directeur de la publication",
          body: ["Mathieu Thiry"],
        },
        {
          heading: "Hébergeur",
          body: [
            "Vercel Inc.",
            "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
            "vercel.com",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          body: [PLACEHOLDER.fr],
        },
        {
          heading: "Données personnelles",
          body: [PLACEHOLDER.fr],
        },
        {
          heading: "Cookies",
          body: [PLACEHOLDER.fr],
        },
      ],
      updated: "Dernière mise à jour : à compléter",
    },
    en: {
      title: "Legal notice",
      intro:
        "Legal information about the tenex.studio website and its publisher.",
      sections: [
        {
          heading: "Publisher",
          body: [
            "Tenex Studio",
            "40 Rue la Tour d'Auvergne, 44200 Nantes, France",
            "contact@tenex.studio",
            PLACEHOLDER.en,
          ],
        },
        {
          heading: "Publication director",
          body: ["Mathieu Thiry"],
        },
        {
          heading: "Hosting",
          body: [
            "Vercel Inc.",
            "340 S Lemon Ave #4133, Walnut, CA 91789, USA",
            "vercel.com",
          ],
        },
        {
          heading: "Intellectual property",
          body: [PLACEHOLDER.en],
        },
        {
          heading: "Personal data",
          body: [PLACEHOLDER.en],
        },
        {
          heading: "Cookies",
          body: [PLACEHOLDER.en],
        },
      ],
      updated: "Last updated: to be completed",
    },
  },
} as const;
