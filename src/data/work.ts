import type { Bilingual, Slug, Url } from "@/data/_types";
import { slug, url } from "@/data/_types";

export type WorkProject = Readonly<{
  slug: Slug;
  name: Bilingual;
  icon: Url;
  cover: Url;
  tags: ReadonlyArray<Bilingual>;
  description: Bilingual;
  headline: Bilingual;
  category: Bilingual;
  liveUrl?: Url;
}>;

export const WORK: ReadonlyArray<WorkProject> = [
  {
    slug: slug("renardo-tech"),
    name: { fr: "Renardo Tech", en: "Renardo Tech" },
    icon: url("/work/icons/renardo-tech.svg"),
    cover: url("/work/renardo-tech-cover.webp"),
    tags: [
      { fr: "Design Website", en: "Website Design" },
      { fr: "Développement", en: "Development" },
    ],
    description: {
      fr: "Imagerie électromagnétique portable pour diagnostiquer les réseaux électriques et infrastructures industrielles. Site vitrine technique qui traduit une deep tech complexe en proposition claire, avec parcours produit pour REACTY Vision.",
      en: "Portable electromagnetic imaging for diagnosing electrical networks and industrial infrastructure. A technical site that turns complex deep tech into a clear proposition, with a product journey for REACTY Vision.",
    },
    headline: {
      fr: "DEEPTECH",
      en: "DEEPTECH",
    },
    category: { fr: "Site web", en: "Website" },
    liveUrl: url("https://www.renardo-tech.fr"),
  },
  {
    slug: slug("studio-lumen"),
    name: { fr: "Studio Lumen", en: "Studio Lumen" },
    icon: url("/work/icons/studio-lumen.svg"),
    cover: url("/work/studio-lumen-cover.webp"),
    tags: [
      { fr: "Design Website", en: "Website Design" },
      { fr: "Développement", en: "Development" },
    ],
    description: {
      fr: "Studio vidéo mobile pour entreprises. Site portfolio qui convertit, prise de rendez-vous Calendly et CMS Sanity sur mesure pour rester maître du contenu.",
      en: "Mobile video studio for businesses. A portfolio site that converts, Calendly booking, and a tailored Sanity CMS that keeps them in control of their content.",
    },
    headline: {
      fr: "STUDIO VIDEO",
      en: "STUDIO VIDEO",
    },
    category: { fr: "Identité et site", en: "Identity and site" },
    liveUrl: url("https://www.studiolumen.fr"),
  },
] as const;
