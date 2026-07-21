import type { Bilingual } from "@/data/_types";

// Service catalog used as work-card tags. Reference entries by key so the label
// lives in one place: SERVICE_TAGS.websiteCreation, not an inline literal.
export const SERVICE_TAGS = {
  websiteCreation: { fr: "Création de site", en: "Website Creation" },
  graphicDesign: { fr: "Design graphique", en: "Graphic Design" },
  uxui: { fr: "Ergonomie (UX/UI)", en: "Ergonomy (UX/UI)" },
  seo: { fr: "SEO", en: "SEO" },
  geo: { fr: "GEO", en: "GEO" },
  websiteAdmin: { fr: "Administration de site", en: "Website Administration" },
  digitalStrategy: { fr: "Stratégie digitale", en: "Digital Strategy" },
  webApp: { fr: "Application web", en: "Web Application" },
} as const satisfies Record<string, Bilingual>;

export const SERVICE_TAG_LIST: ReadonlyArray<Bilingual> =
  Object.values(SERVICE_TAGS);
