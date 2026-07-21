import type { Bilingual, Slug, Url } from "@/data/_types";
import { slug, url } from "@/data/_types";
import { pathFor, type Locale } from "@/lib/i18n";

export type CaseStudy = Readonly<{
  cover: Url;
  overview: Bilingual;
  challenge: Bilingual;
  solution: Bilingual;
  deliverables: ReadonlyArray<Bilingual>;
}>;

export type WorkProject = Readonly<{
  slug: Slug;
  name: Bilingual;
  icon: Url;
  cover: Url;
  tags: ReadonlyArray<Bilingual>;
  description: Bilingual;
  sector: Bilingual;
  liveUrl?: Url;
  duration?: Bilingual;
  study: CaseStudy;
}>;

export const WORK_HEADER: Readonly<{ title: Bilingual }> = {
  title: { fr: "Réalisations", en: "Realizations" },
} as const;

export const WORK: ReadonlyArray<WorkProject> = [
  {
    slug: slug("osmosia"),
    name: { fr: "Osmosia", en: "Osmosia" },
    icon: url("/work/icons/osmosia.svg"),
    cover: url("/work/osmosia-cover.webp"),
    tags: [
      { fr: "Design Website", en: "Website Design" },
      { fr: "Développement", en: "Development" },
    ],
    description: {
      fr: "Assistant IA qui répond aux leads des vendeurs auto sur leboncoin et La Centrale en moins de 15 minutes. Site vitrine bilingue qui rend un produit technique immédiatement clair et invite à réserver une démo en un clic.",
      en: "AI assistant that answers car dealers' leads on leboncoin and La Centrale in under 15 minutes. A bilingual marketing site that makes a technical product instantly clear and invites visitors to book a demo in one click.",
    },
    sector: { fr: "agents ia", en: "ai agents" },
    liveUrl: url("https://www.osmosia.io"),
    study: {
      cover: url("/work/osmosia-mockup.webp"),
      overview: {
        fr: "Osmosia est un assistant IA qui répond aux leads des vendeurs auto sur leboncoin et La Centrale en moins de 15 minutes. Le site rend ce produit technique clair et pousse à réserver une démo.",
        en: "Osmosia is an AI assistant that answers car dealers' leads on leboncoin and La Centrale in under 15 minutes. The site makes this technical product clear and drives demo bookings.",
      },
      challenge: {
        fr: "Un produit IA est difficile à expliquer vite. Les vendeurs auto ne sont pas des acheteurs techniques. Il fallait rendre la valeur évidente en une lecture, inspirer confiance pour un produit jeune, et transformer la visite en démo réservée. Le tout en français et en anglais.",
        en: "An AI product is hard to explain fast. Car dealers are not technical buyers. The value had to land in one read, a young product had to feel trustworthy, and a visit had to turn into a booked demo. In French and English.",
      },
      solution: {
        fr: "Un site vitrine bilingue centré sur une promesse simple: répondre aux leads en moins de 15 minutes. La structure va droit au bénéfice, la réservation de démo tient en un clic, et le design pose une image sérieuse pour une startup IA.",
        en: "A bilingual marketing site built around one simple promise: answer leads in under 15 minutes. The structure goes straight to the benefit, demo booking takes one click, and the design gives an AI startup a serious face.",
      },
      deliverables: [
        { fr: "Design de site sur mesure", en: "Custom website design" },
        { fr: "Développement", en: "Development" },
        { fr: "Version bilingue FR / EN", en: "Bilingual FR / EN build" },
      ],
    },
  },
  {
    slug: slug("renardo-tech"),
    name: { fr: "Renardo Tech", en: "Renardo Tech" },
    icon: url("/work/icons/renardo-tech.svg"),
    cover: url("/work/renardo-tech-cover.webp"),
    tags: [
      { fr: "Design Website", en: "Website Design" },
      { fr: "Développement", en: "Development" },
      { fr: "CMS", en: "CMS" },
    ],
    description: {
      fr: "Imagerie électromagnétique portable pour diagnostiquer réseaux électriques et infrastructures industrielles. Site qui rend une technologie pointue immédiatement compréhensible, avec un parcours produit détaillé.",
      en: "Portable electromagnetic imaging for diagnosing electrical networks and industrial infrastructure. A technical site that turns complex tech into a clear proposition, with a product journey.",
    },
    sector: { fr: "deeptech", en: "deeptech" },
    liveUrl: url("https://www.renardo-tech.fr"),
    study: {
      cover: url("/work/renardo-tech-mockup.webp"),
      overview: {
        fr: "Renardo Tech conçoit une imagerie électromagnétique portable pour diagnostiquer réseaux électriques et infrastructures industrielles. Le site rend une technologie pointue immédiatement compréhensible.",
        en: "Renardo Tech builds portable electromagnetic imaging to diagnose electrical networks and industrial infrastructure. The site turns advanced technology into a clear proposition.",
      },
      challenge: {
        fr: "La deeptech se vend mal quand personne ne la comprend. Les décideurs industriels devaient saisir vite ce que fait la technologie et pourquoi elle est crédible. Il fallait aussi dérouler un parcours produit détaillé et laisser l'équipe maîtriser son contenu.",
        en: "Deeptech does not sell when no one understands it. Industrial decision-makers had to grasp fast what the technology does and why it holds up. The site also had to carry a detailed product journey and let the team own its content.",
      },
      solution: {
        fr: "Un site au parcours structuré, du problème à la technologie puis aux cas d'usage. La hiérarchie guide la lecture, le design affirme la crédibilité d'ingénierie, et un CMS Sanity rend l'équipe autonome.",
        en: "A site with a structured journey, from problem to technology to use cases. The hierarchy guides the read, the design asserts engineering credibility, and a Sanity CMS keeps the team autonomous.",
      },
      deliverables: [
        { fr: "Design de site sur mesure", en: "Custom website design" },
        { fr: "Développement", en: "Development" },
        { fr: "CMS Sanity", en: "Sanity CMS" },
      ],
    },
  },
  {
    slug: slug("studio-lumen"),
    name: { fr: "Studio Lumen", en: "Studio Lumen" },
    icon: url("/work/icons/studio-lumen.svg"),
    cover: url("/work/studio-lumen-cover.webp"),
    tags: [
      { fr: "Design Website", en: "Website Design" },
      { fr: "Développement", en: "Development" },
      { fr: "CMS", en: "CMS" },
    ],
    description: {
      fr: "Studio vidéo mobile pour entreprises. Site portfolio qui convertit, prise de rendez-vous Calendly et CMS Sanity sur mesure pour rester maître du contenu.",
      en: "Mobile video studio for businesses. A portfolio site that converts, Calendly booking, and a tailored Sanity CMS that keeps them in control of their content.",
    },
    sector: { fr: "studio video", en: "studio video" },
    liveUrl: url("https://www.studiolumen.fr"),
    study: {
      cover: url("/work/studio-lumen-mockup.webp"),
      overview: {
        fr: "Studio Lumen est un studio vidéo mobile pour les entreprises. Le site met le travail en avant, convertit, et gère la prise de rendez-vous et le contenu sans friction.",
        en: "Studio Lumen is a mobile video studio for businesses. The site puts the work forward, converts, and handles booking and content without friction.",
      },
      challenge: {
        fr: "Un studio vidéo se juge sur ce qu'il montre. Il fallait un site qui met le travail en avant et convertit, une prise de rendez-vous sans friction, et une identité cohérente. Le studio voulait aussi rester maître de son contenu.",
        en: "A video studio is judged on what it shows. It needed a site that puts the work forward and converts, frictionless booking, and a coherent identity. The studio also wanted to stay in control of its content.",
      },
      solution: {
        fr: "Un site portfolio qui met la vidéo au centre, avec une prise de rendez-vous Calendly intégrée et un CMS Sanity sur mesure. L'identité et le site avancent ensemble, et le studio gère ses projets seul.",
        en: "A portfolio site that puts video at the center, with Calendly booking built in and a tailored Sanity CMS. Identity and site move together, and the studio manages its projects on its own.",
      },
      deliverables: [
        { fr: "Identité", en: "Identity" },
        { fr: "Design de site sur mesure", en: "Custom website design" },
        { fr: "Développement", en: "Development" },
        { fr: "CMS Sanity", en: "Sanity CMS" },
        { fr: "Réservation Calendly", en: "Calendly booking" },
      ],
    },
  },
] as const;

export const WORK_BY_SLUG: ReadonlyMap<Slug, WorkProject> = new Map(
  WORK.map((project) => [project.slug, project]),
);

export function workPath(project: WorkProject, locale: Locale): string {
  return pathFor(locale, `/portfolio/${project.slug}`);
}

export const CASE_STUDY_LABELS: Readonly<
  Record<
    Locale,
    {
      home: string;
      challenge: string;
      solution: string;
      deliverables: string;
      client: string;
      sector: string;
      type: string;
      site: string;
      visitSite: string;
      viewCaseStudy: string;
      prev: string;
      next: string;
      back: string;
    }
  >
> = {
  fr: {
    home: "Accueil",
    challenge: "Défi",
    solution: "Solution",
    deliverables: "Livrables",
    client: "Client",
    sector: "Secteur",
    type: "Type",
    site: "Site",
    visitSite: "Voir le site",
    viewCaseStudy: "Voir l'étude de cas",
    prev: "Projet précédent",
    next: "Projet suivant",
    back: "Retour aux réalisations",
  },
  en: {
    home: "Home",
    challenge: "Challenge",
    solution: "Solution",
    deliverables: "Deliverables",
    client: "Client",
    sector: "Sector",
    type: "Type",
    site: "Site",
    visitSite: "View the site",
    viewCaseStudy: "View the case study",
    prev: "Previous project",
    next: "Next project",
    back: "Back to work",
  },
} as const;
