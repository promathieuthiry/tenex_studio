import type { Bilingual } from "@/data/_types";
import raw from "./resources.json";

export type ResourceTool = Readonly<{
  id: string;
  name: string;
  url: string;
  /** Hand-picked file in public/tool-icons/ (e.g. an SVG); wins over the fetched favicon. */
  icon?: string;
}>;

export type ResourceCategory = Readonly<{
  id: string;
  label: Bilingual;
  tools: ReadonlyArray<ResourceTool>;
}>;

// Source of truth is resources.json so scripts/fetch-tool-icons.mjs can read
// it without resolving TS or the @/* alias.
export const RESOURCE_CATEGORIES: ReadonlyArray<ResourceCategory> = raw;

export const RESOURCE_TOOL_COUNT = RESOURCE_CATEGORIES.reduce(
  (sum, category) => sum + category.tools.length,
  0,
);

export const RESOURCES_HEADER: Bilingual<{
  title: string;
  subtitle: string;
  credit: string;
  countLabel: string;
}> = {
  fr: {
    title: "Outils",
    subtitle:
      "Une sélection d'outils pour concevoir, construire et lancer un site.",
    credit: "Sélection TeneX Studio",
    countLabel: "outils",
  },
  en: {
    title: "Tools",
    subtitle: "A curated set of tools to design, build and ship a site.",
    credit: "Curated by TeneX Studio",
    countLabel: "tools",
  },
} as const;
