import type { Bilingual } from "@/data/_types";

export type FAQLink = Readonly<{
  kind: "book" | "email";
  label: Bilingual;
}>;

export type FAQItem = Readonly<{
  number: string;
  question: Bilingual;
  answer: Bilingual;
  links?: ReadonlyArray<FAQLink>;
}>;

export const FAQ_HEADER: Readonly<{ eyebrow: Bilingual; title: Bilingual }> = {
  eyebrow: { fr: "Questions", en: "Questions" },
  title: {
    fr: "Ce qu’on demande souvent.",
    en: "What people often ask.",
  },
} as const;

export const FAQ: ReadonlyArray<FAQItem> = [
  {
    number: "01",
    question: {
      fr: "Le studio, c’est une seule personne ?",
      en: "Is the studio one person?",
    },
    answer: {
      fr: "Oui. Mathieu Thiry, design et ingénierie, du premier échange à la mise en ligne. Un seul interlocuteur, aucune information perdue entre un commercial, un chef de projet et un développeur. Selon les besoins, le studio s’entoure de spécialistes nommés à l’avance : spécialiste SEO, graphiste, photographe, vidéaste. Vous gardez le même point de contact, le studio coordonne le reste.",
      en: "Yes. Mathieu Thiry, design and engineering, from the first call to launch. One contact, no information lost between a salesperson, a project manager and a developer. When a project calls for it, the studio brings in specialists named up front: SEO specialist, graphic designer, photographer, videographer. You keep the same point of contact, the studio coordinates the rest.",
    },
  },
  {
    number: "02",
    question: {
      fr: "Combien ça coûte, et le prix est-il vraiment fixe ?",
      en: "How much does it cost, and is the price really fixed?",
    },
    answer: {
      fr: "Trois forfaits clairs : Présence en ligne à 1 500 €, Site complet à partir de 3 500 €, SaaS à partir de 8 000 €. Le premier est à prix fixe. Les deux autres démarrent sur devis selon le périmètre, validé avant tout démarrage. Aucun coût ne tombe en cours de route sans votre accord écrit.",
      en: "Three clear packages: Online presence at €1,500, Full website from €3,500, SaaS from €8,000. The first is a flat fee. The other two start from a quote based on scope, approved before any work begins. No cost ever appears mid-project without your written sign-off.",
    },
  },
  {
    number: "03",
    question: {
      fr: "Quels délais, et sont-ils tenables ?",
      en: "What are the timelines, and are they realistic?",
    },
    answer: {
      fr: "Une semaine pour la Présence en ligne. Deux à trois semaines pour un Site complet. Six à dix semaines pour un SaaS. Le calendrier est partagé au démarrage, puis on fait des points de passage en visio, sur Google Meet en direct. Le studio privilégie le contact humain.",
      en: "One week for Online presence. Two to three weeks for a Full website. Six to ten weeks for a SaaS. The schedule is shared at kickoff, then we hold progress check-ins over a live Google Meet call. The studio favors real human contact.",
    },
  },
  {
    number: "04",
    question: {
      fr: "Et si le résultat ne me convient pas ?",
      en: "What if I’m not happy with the result?",
    },
    answer: {
      fr: "Chaque forfait inclut des cycles de retours : un pour la Présence en ligne, deux pour un Site complet. Vous voyez le design avant le développement, jamais l’inverse. Rien ne part en production sans votre validation.",
      en: "Every package includes feedback rounds: one for Online presence, two for a Full website. You see the design before development, never the reverse. Nothing ships to production without your sign-off.",
    },
  },
  {
    number: "05",
    question: {
      fr: "Une fois livré, suis-je dépendant du studio ?",
      en: "Once delivered, am I locked in to the studio?",
    },
    answer: {
      fr: "Non. Le code vous appartient et vous est remis dans un fichier zip. Vous modifiez votre contenu vous-même, sans repasser par le studio, via un CMS Sanity paramétré au préalable pour votre site. Trente jours de support sont inclus, puis un forfait mensuel reste optionnel pour la maintenance et l’éditorial.",
      en: "No. The code is yours and is handed over as a zip file. You edit your own content, without coming back to the studio, through a Sanity CMS set up in advance for your site. Thirty days of support are included, then a monthly retainer stays optional for maintenance and editorial.",
    },
  },
  {
    number: "06",
    question: {
      fr: "Pourquoi le studio plutôt qu’un Wix, un Webflow ou un Framer ?",
      en: "Why the studio over Wix, Webflow or Framer?",
    },
    answer: {
      fr: "Un site sur mesure dont vous possédez le code, sans abonnement mensuel ni template partagé avec mille autres marques. Wix, Webflow et Framer vous louent un éditeur en ligne ; le studio vous livre un site qui vous appartient. Et un seul tarif, pas une facture qui tombe chaque mois.",
      en: "A custom site whose code you own, with no monthly subscription and no template shared with a thousand other brands. Wix, Webflow and Framer rent you an online editor; the studio hands you a site you own. And one price, not a bill that lands every month.",
    },
  },
  {
    number: "07",
    question: {
      fr: "Vous travaillez à distance, et dans quelles langues ?",
      en: "Do you work remotely, and in which languages?",
    },
    answer: {
      fr: "Le studio est à Nantes et travaille à distance, partout en France comme à l’international. En français comme en anglais, indistinctement.",
      en: "The studio is in Nantes and works remotely, across France and internationally.",
    },
  },
  {
    number: "08",
    question: {
      fr: "Comment on démarre ?",
      en: "How do we get started?",
    },
    answer: {
      fr: "Deux façons de démarrer : réservez un appel de trente minutes via le calendrier en ligne, ou écrivez directement au studio. On cadre le projet ensemble, puis le studio vous envoie un devis sous quelques jours.",
      en: "Two ways to start: book a thirty-minute call from the online calendar, or email the studio directly. We scope the project together, then the studio sends a quote within a few days.",
    },
    links: [
      {
        kind: "book",
        label: { fr: "Réserver un appel", en: "Book a call" },
      },
      {
        kind: "email",
        label: { fr: "contact@tenex.studio", en: "contact@tenex.studio" },
      },
    ],
  },
] as const;
