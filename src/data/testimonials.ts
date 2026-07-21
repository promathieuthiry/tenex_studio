import type { Bilingual } from "@/data/_types";

export type Testimonial = Readonly<{
  id: string;
  quote: Bilingual;
  name: Bilingual;
  role: Bilingual;
  portrait: string;
  website: string;
}>;

export const TESTIMONIALS_HEADER: Readonly<{
  titleLead: Bilingual;
  titleTail: Bilingual;
}> = {
  titleLead: { fr: "Clients qui nous", en: "clients showing us some" },
  titleTail: { fr: "recommandent", en: "love" },
} as const;

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    id: "osmosia.io",
    quote: {
      fr: "Ce qui m’a frappé chez Mathieu, c’est son professionnalisme et sa réactivité. Il nous a accompagnés à chaque étape et ajusté au fil de nos retours, avec beaucoup de souplesse. Plutôt qu’une démo générique, il a fait preuve d’une vraie créativité : une démo 100% sur mesure qui reflète notre façon de dialoguer avec les acheteurs. Et au lieu d’un CMS, il nous a donné accès au code. On met à jour le contenu nous-mêmes, directement depuis l’application Claude. Un vrai gain de temps, et je le remercie de nous avoir formés à cette méthode. Un site web clair, optimisé pour le référencement, et un contrôle total sur notre contenu. Le résultat surpasse mes attentes.",
      en: "What struck me about Mathieu is his professionalism and his responsiveness. He supported us at every step and adjusted as our feedback came in, with real flexibility. Rather than a generic demo, he showed real creativity: a fully custom demo that mirrors how we talk with buyers. And instead of a CMS, he gave us access to the code. We update the content ourselves, straight from the Claude app. A real time-saver, and I’m grateful he trained us on the method. A clear website, optimized for search, and full control over our content. The result is beyond my expectations.",
    },
    name: { fr: "Pierre Osmont", en: "Pierre Osmont" },
    role: {
      fr: "Fondateur, Osmosia",
      en: "Founder, Osmosia",
    },
    portrait: "/testimonials/pierre-osmont_osmosia.webp",
    website: "https://www.osmosia.io",
  },
  {
    id: "renardo-tech.fr",
    quote: {
      fr: "Chez Renardo Tech, on conçoit des capteurs d’imagerie de champ électromagnétique pour le diagnostic des réseaux électriques et structures métalliques. Un sujet pointu, qu’il fallait rendre clair et engageant sans en trahir la rigueur, le tout avant nos prochains salons. Mathieu a commencé par notre identité, de fond en comble, puis a construit un site qui la porte vraiment : codes visuels taillés pour nous, zéro template recyclé, structure pensée pour notre métier. Ce qui m’a marquée, c’est la réactivité. Site opérationnel en moins de deux semaines. Résultat : on est arrivés aux salons avec un site qui sort du lot. Il nous crédibilise vraiment, rassure nos partenaires, et aujourd’hui on partage notre site avec fierté.",
      en: "At Renardo Tech, we design imaging sensors to diagnose the state of metal structures. A specialized subject we had to make clear and engaging without losing the rigor, all before our upcoming trade shows. Mathieu started with our identity, built from the ground up, then a site that truly carries it: visual codes shaped for us, zero recycled template, a structure built for our field. What struck me was the responsiveness. Site live in under two weeks. Result: we showed up at the shows with a site that stands out. It genuinely builds our credibility, reassures our partners, and today we share our site with pride. That wasn’t the case before.",
    },
    name: { fr: "Jessie Coiffard", en: "Jessie Coiffard" },
    role: {
      fr: "Présidente, Renardo Tech",
      en: "President, Renardo Tech",
    },
    portrait: "/testimonials/jessie-coiffard_renardo-tech.webp",
    website: "https://www.renardo-tech.fr/",
  },
  {
    id: "studiolumen.fr",
    quote: {
      fr: "Avant, mon site ne convertissait pas. Aujourd’hui, je le partage à mes partenaires et prospects sans hésiter. Mathieu m’a livré une vraie vitrine : page sur mesure pour mon équipement, galerie de mes projets réalisés, réservation Calendly intégrée. Les clients arrivent, voient mon travail, choisissent leur créneau. Résultat : plus de rendez-vous, plus de clients signés.",
      en: "Before, my site wasn’t converting. Today, I share it with partners and prospects without hesitation. Mathieu delivered a real showcase: a custom page for my equipment, a gallery of past projects, Calendly booking built in. Clients land, see my work, pick their slot. Result: more calls, more signed clients.",
    },
    name: { fr: "Cyril Ben Said", en: "Cyril Ben Said" },
    role: {
      fr: "Fondateur, Studio Lumen",
      en: "Founder, Studio Lumen",
    },
    portrait: "/testimonials/cyril-bensaid_studiolumen.webp",
    website: "https://studiolumen.fr",
  },
  {
    id: "ouiclient.fr",
    quote: {
      fr: "Je développe une solution de confirmation de réservations pour la restauration et j’avais besoin d’un outil fiable pour automatiser tout le process sans perdre des heures en gestion manuelle. Studio TeneX m’a développé une web app interne parfaitement adaptée à mon besoin : automatisation des SMS via API, dashboard par établissements et gestion centralisée des données. Mathieu a cette capacité à prendre une idée métier et à la transformer rapidement en un outil concret et exploitable au quotidien. Résultat pour les équipes : un gain de temps sur l'opérationnel et une base solide pour développer l'activité.",
      en: "I build a reservation confirmation solution for the restaurant industry. Before, I was sending SMS by hand, one by one. A full day went into it. TeneX Studio delivered a turnkey internal web app: automated SMS through the Octopush API, automated email recaps, a dedicated dashboard per restaurant, a database that makes the solution replicable on demand. Result: hours saved every week, zero manual errors, time reinvested into prospecting, with new signed contracts to show for it.",
    },
    name: { fr: "Mathieu Thiebault", en: "Mathieu Thiebault" },
    role: {
      fr: "Fondateur, OuiClient",
      en: "Founder, OuiClient",
    },
    portrait: "/testimonials/mathieu_thiebault_oui_client.jpeg",
    website: "https://www.ouiclient.fr/",
  },
  {
    id: "womenequitylabel.fr",
    quote: {
      fr: "À quelques jours du lancement, mon site n’était pas prêt, mon questionnaire pas finalisé. Mathieu est intervenu en urgence, sur une seule journée : site terminé, questionnaire livré, mise en ligne dans la foulée. Résultat : deadline tenue, lancement sauvé.",
      en: "Days before launch, my site wasn’t ready, my questionnaire wasn’t finalized. Mathieu stepped in fast, in a single day: site finished, questionnaire delivered, live straight after. Result: deadline met, launch saved.",
    },
    name: { fr: "Eugénie Druart", en: "Eugénie Druart" },
    role: {
      fr: "Fondatrice, Women Equity Label",
      en: "Founder, Women Equity Label",
    },
    portrait: "/testimonials/eugenie_druart_wel.jpeg",
    website: "https://womenequitylabel.fr/",
  },
] as const;
