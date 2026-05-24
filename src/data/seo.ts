import type { Bilingual } from "@/data/_types";

type HomeSeoContent = {
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
