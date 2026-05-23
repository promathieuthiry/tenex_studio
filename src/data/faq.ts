import type { Bilingual } from "@/data/_types";

export type FAQItem = Readonly<{
  number: string;
  question: Bilingual;
  answer: Bilingual;
}>;

export const FAQ: ReadonlyArray<FAQItem> = [
  {
    number: "01",
    question: {
      fr: "Travaillez-vous seul ?",
      en: "Do you work alone?",
    },
    answer: {
      fr: "Oui. Le studio est un opérateur unique : Mathieu Thiry, design et ingénierie. Pour les pièces hors périmètre — illustration, photo, vidéo — le studio collabore avec des partenaires de confiance, nommés à l’avance.",
      en: "Yes. The studio is a single operator: Mathieu Thiry, design and engineering. For pieces outside that scope — illustration, photo, video — the studio works with named, vetted partners agreed up front.",
    },
  },
  {
    number: "02",
    question: {
      fr: "Quels délais pour un projet ?",
      en: "What is the timeline for a project?",
    },
    answer: {
      fr: "Starter : 2 semaines. Growth : 4 à 6 semaines, selon le périmètre éditorial. Le calendrier est partagé en démarrage et tenu à jour chaque vendredi.",
      en: "Starter: 2 weeks. Growth: 4 to 6 weeks, depending on editorial scope. The schedule is shared at kickoff and refreshed every Friday.",
    },
  },
  {
    number: "03",
    question: {
      fr: "Travaillez-vous en français et en anglais ?",
      en: "Do you work in French and English?",
    },
    answer: {
      fr: "Oui. Mathieu travaille indistinctement en français et en anglais. Tout site qui le justifie part en bilingue, écrit nativement dans chaque langue, pas traduit mécaniquement.",
      en: "Yes. Mathieu works interchangeably in French and English. Any site that warrants it ships bilingual, written natively in each language, not machine-translated.",
    },
  },
  {
    number: "04",
    question: {
      fr: "Qu’est-ce qui n’est pas inclus ?",
      en: "What is not included?",
    },
    answer: {
      fr: "Pas de hébergement de courriel, pas de gestion publicitaire, pas de production vidéo. Ces livrables existent chez des partenaires nommés ; le studio peut les piloter pour vous.",
      en: "No email hosting, no ad management, no video production. These deliverables live with named partners; the studio can coordinate them on your behalf.",
    },
  },
  {
    number: "05",
    question: {
      fr: "Comment se déroule la facturation ?",
      en: "How does billing work?",
    },
    answer: {
      fr: "Forfait fixe par offre — Starter ou Growth. 50 % au démarrage, 50 % à la livraison. Devis additionnel pour tout périmètre hors offre, validé avant exécution.",
      en: "Flat fee per package — Starter or Growth. 50% at kickoff, 50% at delivery. Out-of-scope work is quoted and approved before any execution.",
    },
  },
  {
    number: "06",
    question: {
      fr: "Que se passe-t-il après la livraison ?",
      en: "What happens after delivery?",
    },
    answer: {
      fr: "Le code est à vous, déposé sur votre Vercel et votre dépôt Git. Le studio offre 30 jours de support inclus, puis un forfait mensuel optionnel pour la maintenance et l’éditorial.",
      en: "The code is yours, deployed to your Vercel and committed to your Git repository. The studio includes 30 days of support; an optional monthly retainer covers maintenance and editorial.",
    },
  },
  {
    number: "07",
    question: {
      fr: "Quels projets prenez-vous en charge ?",
      en: "What kinds of projects do you take?",
    },
    answer: {
      fr: "Trois axes : sites animés par l’IA, SEO & GEO, et workflows d’automatisation IA. Pour des produits SaaS complets ou des projets très spécialisés en dehors de ces axes, écrivez quand même — le studio oriente vers un partenaire si la demande sort du périmètre.",
      en: "Three lanes: AI-powered websites, SEO & GEO, and AI automation workflows. For full SaaS products or highly specialized work outside these lanes, write anyway — the studio refers to a partner when the request falls outside scope.",
    },
  },
] as const;
