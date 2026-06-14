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
    title: "Sites web sur mesure pour experts - Tenex Studio",
    description:
      "Sites web sur mesure pour cabinets, studios et sociétés de conseil. Clairs, rapides, sécurisés.",
    ogImageAlt: "Tenex Studio, sites web sur mesure pour services experts",
  },
  en: {
    title: "Custom Websites for Expert Firms - Tenex Studio",
    description:
      "Custom websites for firms, studios and consultancies that need to build trust before the first call.",
    ogImageAlt: "Tenex Studio, custom websites for expert-service firms",
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
