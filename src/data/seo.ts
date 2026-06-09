import type { Bilingual } from "@/data/_types";

type HomeSeoContent = {
  title: string;
  description: string;
  ogImageAlt: string;
};

type DigitalCardSeoContent = {
  title: string;
  description: string;
  ogImageAlt: string;
};

export const homeSeo: Bilingual<HomeSeoContent> = {
  fr: {
    title: "Tenex Studio - Agence web et IA à Nantes",
    description:
      "Agence web et IA à Nantes : sites, applications et automatisations sur mesure pour produire 10× plus.",
    ogImageAlt: "Tenex Studio, agence web et IA à Nantes",
  },
  en: {
    title: "Tenex Studio - Web and AI Studio in Nantes",
    description:
      "Web and AI studio in Nantes: custom sites, apps and automations to produce 10× more.",
    ogImageAlt: "Tenex Studio, web and AI studio in Nantes",
  },
};

export const digitalCardSeo: Bilingual<DigitalCardSeoContent> = {
  fr: {
    title: "Mathieu Thiry - Carte digitale Tenex Studio",
    description:
      "Carte de visite digitale de Mathieu Thiry, fondateur de Tenex Studio à Nantes.",
    ogImageAlt: "Mathieu Thiry, fondateur de Tenex Studio",
  },
  en: {
    title: "Mathieu Thiry - Tenex Studio Digital Card",
    description:
      "Digital business card for Mathieu Thiry, founder of Tenex Studio in Nantes.",
    ogImageAlt: "Mathieu Thiry, founder of Tenex Studio",
  },
};
