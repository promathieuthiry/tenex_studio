import type { Bilingual } from "@/data/_types";
import { assertArrayParity } from "@/data/__guards";

export type PricingTier = Readonly<{
  id: "starter" | "growth" | "mvp";
  name: Bilingual;
  price: Bilingual;
  priceQualifier: "fixed" | "from";
  timeline: Bilingual;
  description: Bilingual;
  scope: Bilingual<ReadonlyArray<string>>;
  ctaLabel: Bilingual;
}>;

export const PRICING: ReadonlyArray<PricingTier> = [
  {
    id: "starter",
    name: { fr: "Présence en ligne", en: "Online presence" },
    price: { fr: "1 500 €", en: "€1,500" },
    priceQualifier: "fixed",
    timeline: { fr: "1 semaine", en: "1 week" },
    description: {
      fr: "Site vitrine de 4 pages livré en une semaine. Pour exister en ligne avec un site rapide que vous gérez vous-même.",
      en: "Four-page showcase site delivered in one week. To establish your presence online with a fast site you manage yourself.",
    },
    scope: {
      fr: [
        "4 pages (accueil + trois pages internes)",
        "Gérez votre contenu vous-même, sans développeur (CMS Sanity)",
        "Formulaire de contact",
        "Site rapide et optimisé pour le référencement",
        "Mise en ligne et nom de domaine inclus",
        "Statistiques de visite et prise de rendez-vous (Google Analytics, Calendly)",
        "Un cycle de retours",
      ],
      en: [
        "Four pages (home + three inner pages)",
        "Manage your own content, no developer needed (Sanity CMS)",
        "Contact form",
        "Fast site, optimized for search engines",
        "Deployment and domain included",
        "Visitor stats and booking (Google Analytics, Calendly)",
        "One round of feedback",
      ],
    },
    ctaLabel: { fr: "Lancer mon site", en: "Launch my site" },
  },
  {
    id: "growth",
    name: { fr: "Site complet", en: "Full website" },
    price: { fr: "3 500 €", en: "€3,500" },
    priceQualifier: "from",
    timeline: { fr: "2 à 3 semaines", en: "2 to 3 weeks" },
    description: {
      fr: "Site complet avec design sur mesure, paiements en ligne et plusieurs langues. Pour publier du contenu dynamique (blog, études de cas) ou lancer une boutique en ligne.",
      en: "Full site with custom design, online payments and multiple languages. To publish dynamic content (blog, case studies) or launch an online store.",
    },
    scope: {
      fr: [
        "Jusqu’à 8 pages secondaires",
        "Design sur mesure : typographie et couleurs construites pour votre marque",
        "Paiements en ligne (Stripe)",
        "Site multilingue, prêt à publier dans plusieurs langues",
        "Contrôle éditorial complet sur votre contenu (CMS Sanity enrichi)",
        "Blog ou journal géré depuis votre interface",
        "Page contact avec emails automatiques",
        "Emailing, CRM, chat en direct et analyse de comportement (Mailchimp, HubSpot, Crisp, Hotjar)",
        "Deux cycles de retours",
      ],
      en: [
        "Up to 8 secondary pages",
        "Custom design: typography and colors built for your brand",
        "Online payments (Stripe)",
        "Multilingual site, ready to publish in several languages",
        "Full editorial control over your content (Sanity CMS upgrade)",
        "Blog or journal managed from your dashboard",
        "Contact page with automated emails",
        "Email marketing, CRM, live chat and behavior analytics (Mailchimp, HubSpot, Crisp, Hotjar)",
        "Two rounds of feedback",
      ],
    },
    ctaLabel: { fr: "Démarrer mon projet", en: "Start my project" },
  },
  {
    id: "mvp",
    name: { fr: "SaaS", en: "SaaS" },
    price: { fr: "8 000 €", en: "€8,000" },
    priceQualifier: "from",
    timeline: { fr: "6 à 10 semaines", en: "6 to 10 weeks" },
    description: {
      fr: "Application web sur mesure avec comptes utilisateurs, base de données et tableau de bord. Pour valider un MVP ou livrer un produit SaaS sur une base solide.",
      en: "Custom web application with user accounts, database and dashboard. To validate an MVP or ship a SaaS product on a solid foundation.",
    },
    scope: {
      fr: [
        "Audit produit et conception technique",
        "Application web sur mesure : votre logique métier, pas un simple site",
        "Comptes utilisateurs et base de données",
        "Tableau de bord et fonctionnalités sur mesure",
        "Support client, analytics produit et suivi des erreurs (Intercom, Mixpanel, Sentry)",
        "Hébergement et mise en ligne configurés",
        "Le code vous appartient, sans dépendance au studio",
        "Passation complète : code, documentation et architecture",
      ],
      en: [
        "Product audit and technical design",
        "Custom web app: your business logic, not just a website",
        "User accounts and database ",
        "Dashboard and custom features",
        "Customer support, product analytics and error tracking (Intercom, Mixpanel, Sentry)",
        "Hosting and deployment configured",
        "The code is yours, no lock-in to the studio",
        "Full handover: code, documentation and architecture",
      ],
    },
    ctaLabel: { fr: "Cadrer mon produit", en: "Scope my product" },
  },
] as const;

for (const tier of PRICING) {
  assertArrayParity(`pricing.${tier.id}.scope`, tier.scope);
}
