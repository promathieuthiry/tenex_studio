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
    title: "Sites web sur mesure, SEO et contenu - TeneX Studio",
    description:
      "Site, SEO et contenu réunis en un seul système, mesuré, qui fait décoller votre taux de conversion. Studio web à Nantes.",
    ogImageAlt: "TeneX Studio, sites web sur mesure, SEO et contenu",
  },
  en: {
    title: "Custom Websites, SEO and Content - TeneX Studio",
    description:
      "Website, SEO and content in one measured system that lifts your conversion rate. Web studio based in Nantes, France.",
    ogImageAlt: "TeneX Studio, custom websites, SEO and content",
  },
};

export const digitalCardSeo: Bilingual<DigitalCardSeoContent> = {
  fr: {
    title: "Mathieu Thiry - Carte digitale TeneX Studio",
    description:
      "Carte de visite digitale de Mathieu Thiry, fondateur de TeneX Studio à Nantes.",
    ogImageAlt: "Mathieu Thiry, fondateur de TeneX Studio",
  },
  en: {
    title: "Mathieu Thiry - TeneX Studio Digital Card",
    description:
      "Digital business card for Mathieu Thiry, founder of TeneX Studio in Nantes.",
    ogImageAlt: "Mathieu Thiry, founder of TeneX Studio",
  },
};
