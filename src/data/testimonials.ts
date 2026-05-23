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
  eyebrow: Bilingual;
  titleLead: Bilingual;
  titleTail: Bilingual;
}> = {
  eyebrow: { fr: "Témoignages", en: "Testimonials" },
  titleLead: { fr: "Clients qui nous", en: "clients showing us some" },
  titleTail: { fr: "recommandent", en: "love" },
} as const;

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [
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
      fr: "Je développe une solution de confirmation de réservations pour la restauration. Avant, j’envoyais les SMS à la main, un par un. Une journée entière y passait. TeneX Studio m’a livré une web app interne clé en main : envoi SMS automatique via l’API Octopush, mails récapitulatifs automatisés, dashboard dédié par restaurant, base de données qui rend la solution duplicable à volonté. Résultat : des heures économisées chaque semaine, zéro erreur manuelle, du temps réinvesti en prospection, et de nouveaux contrats signés à la clé.",
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
