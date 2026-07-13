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
    title: "Sites web sur mesure, SEO et contenu - Tenex Studio",
    description:
      "Site, SEO et contenu réunis en un seul système, mesuré, qui fait décoller votre taux de conversion. Studio web à Nantes.",
    ogImageAlt: "Tenex Studio, sites web sur mesure, SEO et contenu",
  },
  en: {
    title: "Custom Websites, SEO and Content - Tenex Studio",
    description:
      "Website, SEO and content in one measured system that lifts your conversion rate. Web studio based in Nantes, France.",
    ogImageAlt: "Tenex Studio, custom websites, SEO and content",
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
