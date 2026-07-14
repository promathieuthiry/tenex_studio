import type { Bilingual } from "@/data/_types";

export type LegalSection = Readonly<{
  heading: string;
  body: ReadonlyArray<string>;
}>;

export type LegalDoc = Readonly<{
  title: string;
  intro: string;
  sections: ReadonlyArray<LegalSection>;
  updated: string;
}>;

export type LegalCopy = Readonly<{
  doc: Bilingual<LegalDoc>;
}>;

export const LEGAL: LegalCopy = {
  doc: {
    fr: {
      title: "Mentions légales",
      intro:
        "Informations légales relatives au site tenex.studio et à son éditeur, conformément à la loi du 21 juin 2004 pour la confiance dans l'économie numérique.",
      sections: [
        {
          heading: "Éditeur",
          body: [
            "Tenex Studio",
            "40 Rue la Tour d'Auvergne, 44200 Nantes, France",
            "contact@tenex.studio",
            "SIRET : 981 657 992 00021",
          ],
        },
        {
          heading: "Directeur de la publication",
          body: ["Mathieu Thiry, joignable à contact@tenex.studio."],
        },
        {
          heading: "Hébergeur",
          body: [
            "Vercel Inc.",
            "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
            "vercel.com",
            "Serveurs situés dans l'Union européenne.",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          body: [
            "Tenex Studio détient les droits sur l'ensemble des éléments du site : textes, images, graphismes, logo et code.",
            "Toute reproduction ou réutilisation, totale ou partielle, est interdite sans accord écrit préalable.",
          ],
        },
        {
          heading: "Données personnelles",
          body: [
            "Le site collecte le minimum de données nécessaires au traitement des demandes envoyées via le formulaire de contact : nom, adresse e-mail et message.",
            "Ces données servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni transmises à des tiers.",
            "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression. Écrivez à contact@tenex.studio.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Le site n'utilise aucun cookie publicitaire ni traceur commercial.",
            "Les mesures d'audience (Vercel Analytics, Speed Insights) sont anonymes et n'identifient pas les visiteurs.",
          ],
        },
        {
          heading: "Droit applicable",
          body: [
            "Ce site et son utilisation sont régis par le droit français. Tout litige relève des tribunaux compétents.",
          ],
        },
      ],
      updated: "Dernière mise à jour : mai 2026",
    },
    en: {
      title: "Legal notice",
      intro:
        "Legal information about the tenex.studio website and its publisher, under French law of 21 June 2004 on confidence in the digital economy.",
      sections: [
        {
          heading: "Publisher",
          body: [
            "Tenex Studio",
            "40 Rue la Tour d'Auvergne, 44200 Nantes, France",
            "contact@tenex.studio",
            "SIRET: 981 657 992 00021",
          ],
        },
        {
          heading: "Publication director",
          body: ["Mathieu Thiry, reachable at contact@tenex.studio."],
        },
        {
          heading: "Hosting",
          body: [
            "Vercel Inc.",
            "340 S Lemon Ave #4133, Walnut, CA 91789, USA",
            "vercel.com",
            "Servers located in the European Union.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "Tenex Studio owns the rights to every element on this site: text, images, graphics, logo and code.",
            "No part may be reproduced or reused, in whole or in part, without prior written consent.",
          ],
        },
        {
          heading: "Personal data",
          body: [
            "The site collects the minimum data needed to handle requests sent through the contact form: name, email address and message.",
            "This data is used only to answer your request. It is never sold or shared with third parties.",
            "Under the GDPR and French data protection law, you can access, correct or delete your data. Write to contact@tenex.studio.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "The site uses no advertising cookies and no commercial trackers.",
            "Audience metrics (Vercel Analytics, Speed Insights) are anonymous and do not identify visitors.",
          ],
        },
        {
          heading: "Applicable law",
          body: [
            "This site and its use are governed by French law. Any dispute falls under the competent French courts.",
          ],
        },
      ],
      updated: "Last updated: May 2026",
    },
  },
} as const;
