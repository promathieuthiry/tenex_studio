import type { Bilingual } from "@/data/_types";

export type SeoLandingPage = Readonly<{
  id: string;
  slug: Bilingual;
  eyebrow: Bilingual;
  title: Bilingual;
  intro: Bilingual;
  heroImage: string;
  meta: Bilingual<{
    title: string;
    description: string;
  }>;
  proof: ReadonlyArray<Bilingual>;
  sections: ReadonlyArray<{
    title: Bilingual;
    body: Bilingual;
  }>;
  cta: Bilingual;
  relatedIds: ReadonlyArray<string>;
}>;

export const SEO_LANDING_PAGES: ReadonlyArray<SeoLandingPage> = [
  {
    id: "custom-websites",
    slug: {
      fr: "sites-web-sur-mesure",
      en: "custom-websites",
    },
    eyebrow: {
      fr: "Site vitrine premium",
      en: "Premium website",
    },
    title: {
      fr: "Un site vitrine sur mesure qui rend votre expertise évidente.",
      en: "A custom website that makes your expertise obvious.",
    },
    heroImage: "/landing/site-vitrine-hero.webp",
    intro: {
      fr: "Un site vitrine n’est pas une carte de visite en ligne. Pour un cabinet, une clinique, un studio ou une société de conseil, c’est souvent le premier lieu où un prospect vérifie votre niveau, votre sérieux et votre différence.",
      en: "A website is not an online business card. For a firm, clinic, studio or consultancy, it is often the first place where a prospect checks your level, seriousness and difference.",
    },
    meta: {
      fr: {
        title: "Création site vitrine sur mesure à Nantes - Tenex Studio",
        description:
          "Création de sites vitrines premium pour cabinets, cliniques, studios et sociétés de conseil. Positionnement, UX, SEO, code et mise en ligne.",
      },
      en: {
        title: "Custom Websites for Expert-Service Firms - Tenex Studio",
        description:
          "Premium custom websites for firms, clinics, studios and consultancies. Positioning, UX, SEO, code and launch in one focused workflow.",
      },
    },
    proof: [
      {
        fr: "Une structure qui transforme les visiteurs en demandes qualifiées.",
        en: "A structure that turns visitors into qualified inquiries.",
      },
      {
        fr: "Des textes, preuves et appels à l’action pensés avant le design.",
        en: "Copy, proof and calls to action planned before design.",
      },
      {
        fr: "Un site rapide, propriétaire, bilingue et prêt à évoluer.",
        en: "A fast, owned, bilingual site ready to evolve.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Le site qui travaille avant le premier appel",
          en: "The site that works before the first call",
        },
        body: {
          fr: "Vos prospects arrivent avec une question simple: est-ce que cette équipe est au niveau de mon problème ? Le site doit répondre vite. Il présente votre activité, votre méthode, vos références et votre manière de travailler sans noyer le visiteur.",
          en: "Your prospects arrive with a simple question: is this team at the level of my problem? The site must answer fast. It presents your activity, method, references and way of working without overwhelming the visitor.",
        },
      },
      {
        title: {
          fr: "Un parcours clair vers l’action",
          en: "A clear path to action",
        },
        body: {
          fr: "Un bon site vitrine informe, rassure et guide. Chaque page doit donner un prochain pas net: réserver un appel, demander une consultation, consulter une expertise, lire un cas ou vérifier une référence.",
          en: "A good website informs, reassures and guides. Every page needs a clear next step: book a call, request a consultation, read an expertise page, study a case or check a reference.",
        },
      },
      {
        title: {
          fr: "Le fond avant la façade",
          en: "Substance before the facade",
        },
        body: {
          fr: "On commence par l’arborescence, les messages, les preuves et les zones de conversion. Le design vient ensuite pour donner du rythme, de la hiérarchie et de la confiance. Le beau sert le contenu, pas l’inverse.",
          en: "We start with structure, messages, proof and conversion areas. Design comes next to create rhythm, hierarchy and trust. The visual layer serves the content, not the other way around.",
        },
      },
      {
        title: {
          fr: "SEO, UX et performance dans le même socle",
          en: "SEO, UX and performance in the same base",
        },
        body: {
          fr: "Les pages sont pensées pour être lues par vos prospects et comprises par Google. Titres, maillage interne, vitesse, accessibilité, responsive et données structurées sont intégrés dès la conception.",
          en: "Pages are planned to be read by prospects and understood by Google. Titles, internal links, speed, accessibility, responsive behavior and structured data are built in from the start.",
        },
      },
      {
        title: {
          fr: "Sur mesure, mais exploitable",
          en: "Custom, but usable",
        },
        body: {
          fr: "Le code vous appartient. Le contenu peut être confié à un CMS si le projet le demande. Vous gardez une base stable, sans template partagé, sans dépendance à une plateforme fermée et sans devoir tout refaire au prochain changement.",
          en: "The code belongs to you. Content can be managed through a CMS when the project needs it. You keep a stable base, without a shared template, closed platform dependency or full rebuild at the next change.",
        },
      },
      {
        title: {
          fr: "Un investissement qui évite les mauvais compromis",
          en: "An investment that avoids bad tradeoffs",
        },
        body: {
          fr: "Un site bon marché peut suffire pour exister. Il tient rarement quand l’enjeu est la confiance, le recrutement de meilleurs clients ou la montée en gamme. Tenex vise le site qui clarifie, qualifie et dure.",
          en: "A cheap site can be enough to exist. It rarely holds when the stakes are trust, better clients or moving upmarket. Tenex focuses on a site that clarifies, qualifies and lasts.",
        },
      },
    ],
    cta: {
      fr: "Cadrer mon site vitrine",
      en: "Scope my website",
    },
    relatedIds: [
      "law-firm-websites",
      "private-clinic-websites",
      "consultant-websites",
    ],
  },
  {
    id: "law-firm-websites",
    slug: {
      fr: "sites-web-cabinets-avocats",
      en: "law-firm-websites",
    },
    eyebrow: {
      fr: "Cabinets d’avocats",
      en: "Law firms",
    },
    title: {
      fr: "Un site de cabinet qui clarifie les expertises et inspire confiance.",
      en: "A law firm website that clarifies expertise and builds trust.",
    },
    heroImage: "/landing/law-firm-hero.webp",
    intro: {
      fr: "Pour un cabinet d’avocats, le site doit faire plus que lister des domaines de droit. Il doit montrer la précision du cabinet, la séniorité de l’équipe et la nature des dossiers que vous voulez attirer.",
      en: "For a law firm, the website must do more than list practice areas. It must show the firm’s precision, the team’s seniority and the kind of matters you want to attract.",
    },
    meta: {
      fr: {
        title: "Site web cabinet avocat sur mesure - Tenex Studio",
        description:
          "Création de sites web premium pour cabinets d’avocats. Expertises, associés, références, SEO local, crédibilité et demandes qualifiées.",
      },
      en: {
        title: "Custom Law Firm Websites - Tenex Studio",
        description:
          "Premium custom websites for law firms. Practice areas, partners, references, local SEO, credibility and qualified inquiries.",
      },
    },
    proof: [
      {
        fr: "Des pages d’expertises orientées problèmes clients, pas jargon interne.",
        en: "Practice pages organized around client problems, not internal jargon.",
      },
      {
        fr: "Des biographies qui prouvent la séniorité sans surjouer.",
        en: "Biographies that prove seniority without overplaying it.",
      },
      {
        fr: "Un parcours de contact qui filtre les demandes hors sujet.",
        en: "A contact path that filters poor-fit inquiries.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Donner une lecture claire des domaines d’intervention",
          en: "Make practice areas easy to understand",
        },
        body: {
          fr: "Droit des affaires, fiscalité, PI, social, immobilier ou contentieux: chaque expertise doit expliquer les situations traitées, les enjeux, le type de client accompagné et le bon moment pour contacter le cabinet.",
          en: "Business law, tax, IP, employment, real estate or litigation: each practice area should explain the situations handled, stakes, client type and right moment to contact the firm.",
        },
      },
      {
        title: {
          fr: "Rassurer sans transformer le cabinet en brochure",
          en: "Reassure without turning the firm into a brochure",
        },
        body: {
          fr: "Associés, expériences, publications, secteurs, distinctions et références sont hiérarchisés avec retenue. Le site montre la crédibilité du cabinet avant même la première prise de contact.",
          en: "Partners, experience, publications, sectors, distinctions and references are ordered with restraint. The site shows firm credibility before first contact.",
        },
      },
      {
        title: {
          fr: "Préparer un premier échange plus utile",
          en: "Prepare a more useful first conversation",
        },
        body: {
          fr: "Le prospect comprend ce que vous traitez, ce que vous ne traitez pas et les informations à transmettre. Le cabinet gagne du temps, les demandes sont mieux cadrées, le niveau perçu monte.",
          en: "Prospects understand what you handle, what you do not handle and what information to send. The firm saves time, inquiries are better framed and perceived value rises.",
        },
      },
      {
        title: {
          fr: "Travailler le référencement sans dégrader le ton",
          en: "Work on search without lowering the tone",
        },
        body: {
          fr: "Les titres, URLs, contenus et liens internes peuvent cibler les recherches utiles sans tomber dans l’empilement de mots-clés. La précision juridique reste lisible.",
          en: "Titles, URLs, content and internal links can target useful searches without keyword stuffing. Legal precision stays readable.",
        },
      },
      {
        title: {
          fr: "Une base sobre, rapide et propriétaire",
          en: "A restrained, fast and owned base",
        },
        body: {
          fr: "Le cabinet garde un site stable, rapide et administrable. Les évolutions futures, nouvelles expertises, recrutements, publications ou pages internationales, peuvent être ajoutées sans repartir de zéro.",
          en: "The firm keeps a stable, fast and manageable site. Future changes, new practice areas, hires, publications or international pages, can be added without starting over.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site du cabinet",
      en: "Scope the firm website",
    },
    relatedIds: ["custom-websites", "consultant-websites", "private-clinic-websites"],
  },
  {
    id: "private-clinic-websites",
    slug: {
      fr: "sites-web-cliniques-privees",
      en: "private-clinic-websites",
    },
    eyebrow: {
      fr: "Cliniques privées",
      en: "Private clinics",
    },
    title: {
      fr: "Un site de clinique qui rassure avant la prise de rendez-vous.",
      en: "A clinic website that reassures before booking.",
    },
    heroImage: "/landing/clinic-hero.webp",
    intro: {
      fr: "Dans la santé privée, le site doit réduire le doute. Il explique les soins, présente les praticiens, rend le parcours patient lisible et aide chacun à savoir si la clinique est le bon lieu pour sa demande.",
      en: "In private healthcare, the site must reduce doubt. It explains treatments, presents practitioners, makes the patient journey readable and helps people know whether the clinic is the right place for their request.",
    },
    meta: {
      fr: {
        title: "Site web clinique privée sur mesure - Tenex Studio",
        description:
          "Sites web premium pour cliniques privées et médecins spécialistes. Parcours patient, SEO, confiance, expertises et prise de rendez-vous.",
      },
      en: {
        title: "Custom Private Clinic Websites - Tenex Studio",
        description:
          "Premium websites for private clinics and medical specialists. Patient journey, SEO, trust, expertise pages and booking paths.",
      },
    },
    proof: [
      {
        fr: "Des pages de soins claires, rassurantes et médicalement sobres.",
        en: "Treatment pages that are clear, reassuring and medically restrained.",
      },
      {
        fr: "Une présentation précise des praticiens, équipements et protocoles.",
        en: "Precise presentation of practitioners, equipment and protocols.",
      },
      {
        fr: "Des chemins de rendez-vous visibles, sans pression commerciale.",
        en: "Visible booking paths, without commercial pressure.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Répondre aux premières questions du patient",
          en: "Answer the patient’s first questions",
        },
        body: {
          fr: "Avant de réserver, un patient veut comprendre l’indication, le déroulé, les limites, les délais et le niveau d’accompagnement. Le site doit apporter ces réponses avec calme et précision.",
          en: "Before booking, a patient wants to understand indications, process, limits, timelines and level of support. The site must answer with calm and precision.",
        },
      },
      {
        title: {
          fr: "Installer la confiance par des preuves concrètes",
          en: "Build trust through concrete proof",
        },
        body: {
          fr: "Praticiens, diplômes, plateau technique, protocoles, photos du lieu, avis et informations pratiques sont présentés dans un ordre qui rassure sans dramatiser.",
          en: "Practitioners, credentials, equipment, protocols, location photos, reviews and practical information are presented in an order that reassures without dramatizing.",
        },
      },
      {
        title: {
          fr: "Structurer le parcours patient",
          en: "Structure the patient journey",
        },
        body: {
          fr: "Chaque spécialité peut avoir son chemin: comprendre, vérifier l’éligibilité, préparer la consultation, réserver, puis recevoir les bonnes informations. Le site devient un repère, pas seulement une vitrine.",
          en: "Each specialty can have its own path: understand, check fit, prepare the consultation, book, then receive the right information. The site becomes a reference point, not just a showcase.",
        },
      },
      {
        title: {
          fr: "Être visible localement sans perdre le sérieux",
          en: "Be visible locally without losing seriousness",
        },
        body: {
          fr: "Le SEO local, les pages de spécialités et les contenus pédagogiques aident la clinique à être trouvée. Le ton reste médical, direct et compréhensible.",
          en: "Local SEO, specialty pages and educational content help the clinic get found. The tone stays medical, direct and understandable.",
        },
      },
      {
        title: {
          fr: "Garder une base durable",
          en: "Keep a durable base",
        },
        body: {
          fr: "Nouvelles spécialités, nouveaux praticiens, FAQ, pages internationales ou contenus d’information peuvent être ajoutés progressivement. La structure anticipe la croissance de la clinique.",
          en: "New specialties, practitioners, FAQ, international pages or information content can be added progressively. The structure anticipates clinic growth.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site de la clinique",
      en: "Scope the clinic website",
    },
    relatedIds: ["custom-websites", "law-firm-websites", "architecture-studio-websites"],
  },
  {
    id: "consultant-websites",
    slug: {
      fr: "sites-web-consultants",
      en: "consultant-websites",
    },
    eyebrow: {
      fr: "Consultants",
      en: "Consultants",
    },
    title: {
      fr: "Un site de conseil qui transforme une expertise abstraite en demande claire.",
      en: "A consultant website that turns abstract expertise into clear demand.",
    },
    heroImage: "/landing/consultant-hero.webp",
    intro: {
      fr: "Le conseil se vend rarement avec une simple liste de prestations. Le site doit nommer les problèmes, montrer la méthode, prouver la valeur et aider le bon prospect à se reconnaître.",
      en: "Advisory work rarely sells through a simple list of services. The site must name the problems, show the method, prove the value and help the right prospect recognize themselves.",
    },
    meta: {
      fr: {
        title: "Site web consultant sur mesure - Tenex Studio",
        description:
          "Sites web premium pour consultants et sociétés de conseil. Positionnement, offres, méthode, preuves, SEO et rendez-vous qualifiés.",
      },
      en: {
        title: "Custom Consultant Websites - Tenex Studio",
        description:
          "Premium websites for consultants and advisory firms. Positioning, offers, method, proof, SEO and qualified booking paths.",
      },
    },
    proof: [
      {
        fr: "Des offres structurées par enjeux, situations et résultats.",
        en: "Offers structured by stakes, situations and outcomes.",
      },
      {
        fr: "Une méthode lisible sans jargon de cabinet.",
        en: "A readable method without consulting jargon.",
      },
      {
        fr: "Des preuves au bon niveau: cas, secteurs, chiffres, citations.",
        en: "Proof at the right level: cases, sectors, numbers, quotes.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Sortir du flou des prestations",
          en: "Move beyond vague service lists",
        },
        body: {
          fr: "Stratégie, opérations, pricing, transformation, durabilité ou IA: chaque offre doit montrer le problème traité, le contexte d’intervention, les livrables et les critères de succès.",
          en: "Strategy, operations, pricing, transformation, sustainability or AI: each offer should show the problem handled, engagement context, deliverables and success criteria.",
        },
      },
      {
        title: {
          fr: "Faire comprendre votre méthode",
          en: "Make your method understandable",
        },
        body: {
          fr: "Un bon site de conseil explique comment vous pensez. Diagnostic, cadrage, ateliers, recommandations, mise en œuvre ou transfert: la méthode réduit le risque perçu.",
          en: "A good advisory site explains how you think. Diagnosis, scoping, workshops, recommendations, implementation or transfer: the method lowers perceived risk.",
        },
      },
      {
        title: {
          fr: "Prouver sans trop promettre",
          en: "Prove without overpromising",
        },
        body: {
          fr: "Cas clients, secteurs, références, chiffres et citations sont placés là où ils répondent à une objection. Le ton reste précis, pas spectaculaire.",
          en: "Client cases, sectors, references, numbers and quotes are placed where they answer an objection. The tone stays precise, not theatrical.",
        },
      },
      {
        title: {
          fr: "Qualifier avant le rendez-vous",
          en: "Qualify before the meeting",
        },
        body: {
          fr: "Le site rend visible votre niveau d’intervention, vos formats, vos conditions de collaboration et les projets que vous refusez. Les bons prospects arrivent mieux préparés.",
          en: "The site makes your level of intervention, formats, collaboration conditions and rejected projects visible. The right prospects arrive better prepared.",
        },
      },
      {
        title: {
          fr: "Construire une autorité durable",
          en: "Build durable authority",
        },
        body: {
          fr: "Pages d’offres, cas, points de vue et contenus longs peuvent créer un socle SEO sérieux. Le site devient une preuve d’expertise, pas seulement une page de contact.",
          en: "Offer pages, cases, viewpoints and long-form content can create a serious SEO base. The site becomes proof of expertise, not only a contact page.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site de conseil",
      en: "Scope the advisory website",
    },
    relatedIds: ["custom-websites", "law-firm-websites", "architecture-studio-websites"],
  },
  {
    id: "architecture-studio-websites",
    slug: {
      fr: "sites-web-architectes",
      en: "architecture-studio-websites",
    },
    eyebrow: {
      fr: "Architectes",
      en: "Architecture studios",
    },
    title: {
      fr: "Un site d’architecte qui cadre le portfolio et attire les bons projets.",
      en: "An architecture website that frames the portfolio and attracts the right projects.",
    },
    heroImage: "/landing/architecture-hero.webp",
    intro: {
      fr: "Un studio d’architecture vend autant la confiance que le goût. Le site doit montrer les projets, mais aussi expliquer les contextes, la méthode, le niveau de mission et la signature du studio.",
      en: "An architecture studio sells trust as much as taste. The site must show projects, but also explain contexts, method, mission level and studio signature.",
    },
    meta: {
      fr: {
        title: "Site web architecte sur mesure - Tenex Studio",
        description:
          "Sites web premium pour architectes et architectes d’intérieur. Portfolio, direction éditoriale, SEO, références et demandes qualifiées.",
      },
      en: {
        title: "Custom Architecture Studio Websites - Tenex Studio",
        description:
          "Premium websites for architects and interior architecture studios. Portfolio, editorial direction, SEO, references and qualified inquiries.",
      },
    },
    proof: [
      {
        fr: "Un portfolio structuré par typologie, enjeu et niveau de mission.",
        en: "A portfolio structured by type, stakes and mission level.",
      },
      {
        fr: "Des textes qui donnent du contexte sans voler la place aux images.",
        en: "Copy that gives context without stealing space from the images.",
      },
      {
        fr: "Une interface sobre pour soutenir le goût, pas le remplacer.",
        en: "A restrained interface that supports taste instead of replacing it.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Faire travailler le portfolio",
          en: "Make the portfolio work",
        },
        body: {
          fr: "Chaque projet doit pouvoir montrer le contexte, la contrainte, la réponse, les matériaux, les arbitrages et le niveau de détail. Le visiteur comprend la valeur avant de demander un rendez-vous.",
          en: "Each project should show context, constraints, response, materials, decisions and level of detail. Visitors understand the value before asking for a meeting.",
        },
      },
      {
        title: {
          fr: "Rendre la signature lisible",
          en: "Make the signature legible",
        },
        body: {
          fr: "Le site exprime la manière de travailler, les types de projets, les budgets pertinents, les étapes et les preuves de sérieux. Il donne un cadre clair au goût du studio.",
          en: "The site expresses the way of working, project types, relevant budgets, steps and proof of seriousness. It gives a clear frame to the studio’s taste.",
        },
      },
      {
        title: {
          fr: "Attirer de meilleurs mandats",
          en: "Attract better commissions",
        },
        body: {
          fr: "Un site bien structuré réduit les demandes mal qualifiées. Il aide les prospects à comprendre le niveau du studio, son territoire, ses contraintes et le type de relation attendu.",
          en: "A well-structured site reduces poor-fit inquiries. It helps prospects understand the studio level, territory, constraints and expected relationship.",
        },
      },
      {
        title: {
          fr: "Laisser respirer les images",
          en: "Let the images breathe",
        },
        body: {
          fr: "Le design ne doit pas faire écran. Typographie, grille, transitions et navigation restent sobres pour que les projets, les détails et les espaces gardent leur force.",
          en: "Design should not get in the way. Typography, grid, transitions and navigation stay restrained so projects, details and spaces keep their force.",
        },
      },
      {
        title: {
          fr: "Préparer la suite",
          en: "Prepare what comes next",
        },
        body: {
          fr: "Nouveaux projets, presse, offres, pages internationales ou journal peuvent être ajoutés au fil du temps. Le site devient un système éditorial pour le studio.",
          en: "New projects, press, offers, international pages or a journal can be added over time. The site becomes an editorial system for the studio.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site du studio",
      en: "Scope the studio website",
    },
    relatedIds: ["custom-websites", "consultant-websites", "private-clinic-websites"],
  },
] as const;

export const SEO_LANDING_PAGE_BY_ID = new Map(
  SEO_LANDING_PAGES.map((page) => [page.id, page]),
);

export const EXPERT_SERVICE_ICPS: ReadonlyArray<{
  label: Bilingual;
  body: Bilingual;
  pageId?: string;
  hoverImage?: string;
}> = [
  {
    pageId: "law-firm-websites",
    label: {
      fr: "Cabinets d’avocats",
      en: "Law firms",
    },
    body: {
      fr: "Expertises, associés, références et demandes mieux cadrées.",
      en: "Practice areas, partners, references and better-framed inquiries.",
    },
  },
  {
    label: {
      fr: "Experts-comptables",
      en: "Accounting firms",
    },
    body: {
      fr: "Conseil, fiscalité, CFO-as-a-service et montée en gamme.",
      en: "Advisory, tax, CFO-as-a-service and upmarket positioning.",
    },
  },
  {
    pageId: "consultant-websites",
    label: {
      fr: "Consultants",
      en: "Consultants",
    },
    body: {
      fr: "Offres, méthode, cas clients et autorité lisible.",
      en: "Offers, method, client cases and readable authority.",
    },
  },
  {
    pageId: "architecture-studio-websites",
    label: {
      fr: "Architectes",
      en: "Architects",
    },
    body: {
      fr: "Portfolio, goût, niveau de mission et projets mieux qualifiés.",
      en: "Portfolio, taste, scope level and better-qualified projects.",
    },
  },
  {
    pageId: "private-clinic-websites",
    label: {
      fr: "Cliniques privées",
      en: "Private clinics",
    },
    body: {
      fr: "Parcours patient, praticiens, soins et rendez-vous rassurants.",
      en: "Patient journey, practitioners, treatments and reassuring bookings.",
    },
  },
  {
    hoverImage: "/landing/wealth-management-hover.webp",
    label: {
      fr: "Gestion de patrimoine",
      en: "Wealth management",
    },
    body: {
      fr: "Confiance, pédagogie, discrétion et clients patrimoniaux.",
      en: "Trust, education, discretion and wealth clients.",
    },
  },
  {
    label: {
      fr: "Immobilier premium",
      en: "Premium real estate",
    },
    body: {
      fr: "Biens, territoires, preuves et demandes mieux filtrées.",
      en: "Properties, territories, proof and better-filtered inquiries.",
    },
  },
  {
    label: {
      fr: "Recrutement expert",
      en: "Expert recruitment",
    },
    body: {
      fr: "Executive search, spécialisation, crédibilité candidat et client.",
      en: "Executive search, specialization, candidate and client credibility.",
    },
  },
  {
    label: {
      fr: "Ingénierie et conseil technique",
      en: "Engineering and technical consulting",
    },
    body: {
      fr: "Expertises complexes, conformité, data, énergie ou cybersécurité.",
      en: "Complex expertise, compliance, data, energy or cybersecurity.",
    },
  },
  {
    hoverImage: "/landing/b2b-agency-hover.webp",
    label: {
      fr: "Agences B2B expertes",
      en: "Expert B2B agencies",
    },
    body: {
      fr: "Branding, vidéo, RP, études, revenue operations ou stratégie.",
      en: "Branding, video, PR, research, revenue operations or strategy.",
    },
  },
];

export function seoLandingPath(page: SeoLandingPage, locale: "fr" | "en") {
  return locale === "fr" ? `/${page.slug.fr}/` : `/en/${page.slug.en}/`;
}
