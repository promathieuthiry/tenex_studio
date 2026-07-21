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
  faq?: ReadonlyArray<{
    question: Bilingual;
    answer: Bilingual;
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
      fr: "Un site web sur mesure qui rend votre expertise évidente.",
      en: "A custom website that makes your expertise obvious.",
    },
    heroImage: "/landing/site-vitrine-hero.webp",
    intro: {
      fr: "Un site web sur mesure n’est pas une carte de visite en ligne. Pour un cabinet, une clinique, un studio ou une société de conseil, c’est souvent le premier lieu où un prospect vérifie votre niveau, votre sérieux et votre différence.",
      en: "A website is not an online business card. For a firm, clinic, studio or consultancy, it is often the first place where a prospect checks your level, seriousness and difference.",
    },
    meta: {
      fr: {
        title: "Création site web sur mesure à Nantes - TeneX Studio",
        description:
          "Création de sites web sur mesure pour cabinets, cliniques, studios et sociétés de conseil. Positionnement, UX, SEO, code et mise en ligne.",
      },
      en: {
        title: "Custom Websites for Expert-Service Firms - TeneX Studio",
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
          fr: "Un parcours clair vers la demande qualifiée",
          en: "A clear path to action",
        },
        body: {
          fr: "Un bon site vitrine informe, rassure et guide. Chaque page doit donner un prochain pas net: réserver un appel, demander une consultation, consulter une expertise, lire un cas ou vérifier une référence.",
          en: "A good website informs, reassures and guides. Every page needs a clear next step: book a call, request a consultation, read an expertise page, study a case or check a reference.",
        },
      },
      {
        title: {
          fr: "Ce que comprend une création de site web sur mesure",
          en: "What a custom website project includes",
        },
        body: {
          fr: "Le projet couvre le cadrage, l’arborescence, les textes clés, la direction visuelle, le développement Astro, les bases SEO, l’optimisation responsive, la mise en ligne et la passation. L’objectif est de livrer un site utilisable, pas une maquette isolée.",
          en: "The project covers scoping, site structure, key copy, visual direction, Astro development, SEO foundations, responsive optimization, launch and handover. The goal is to ship a usable website, not an isolated mockup.",
        },
      },
      {
        title: {
          fr: "Quand le sur mesure devient rentable",
          en: "When custom work becomes worth it",
        },
        body: {
          fr: "Le sur mesure devient pertinent quand le site doit soutenir des honoraires plus élevés, expliquer une expertise complexe, présenter des preuves, filtrer les mauvais prospects ou préparer une ouverture à l’international. Dans ces cas, un template économise rarement le bon coût.",
          en: "Custom work becomes relevant when the site must support higher fees, explain complex expertise, present proof, filter poor-fit prospects or prepare for international growth. In those cases, a template rarely saves the right cost.",
        },
      },
      {
        title: {
          fr: "Une base prête pour les pages SEO de demain",
          en: "A base ready for tomorrow’s SEO pages",
        },
        body: {
          fr: "Le site peut ensuite accueillir des pages d’expertises, des cas clients, des pages locales, des contenus longs ou des versions anglaises. La structure évite de repartir de zéro quand l’offre, l’équipe ou les marchés évoluent.",
          en: "The site can later receive expertise pages, client cases, local pages, long-form content or English versions. The structure avoids starting from scratch when the offer, team or markets evolve.",
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
          fr: "Un site bon marché peut suffire pour exister. Il tient rarement quand l’enjeu est la confiance, le recrutement de meilleurs clients ou la montée en gamme. TeneX vise le site qui clarifie, qualifie et dure.",
          en: "A cheap site can be enough to exist. It rarely holds when the stakes are trust, better clients or moving upmarket. TeneX focuses on a site that clarifies, qualifies and lasts.",
        },
      },
    ],
    faq: [
      {
        question: {
          fr: "Combien coûte un site web sur mesure avec TeneX Studio ?",
          en: "How much does a custom website cost with TeneX Studio?",
        },
        answer: {
          fr: "L’offre cœur commence à 3 500 € pour un site complet sur mesure. Le prix dépend du nombre de pages, du niveau de contenu, des langues, du CMS et des besoins techniques.",
          en: "The core offer starts at EUR 3,500 for a full custom website. Pricing depends on page count, content depth, languages, CMS needs and technical requirements.",
        },
      },
      {
        question: {
          fr: "Quel délai prévoir pour une création de site web sur mesure ?",
          en: "How long does a custom website project take?",
        },
        answer: {
          fr: "Un site complet peut être livré en deux à trois semaines quand le périmètre est clair. Les projets plus éditoriaux, bilingues ou intégrés à un CMS demandent un cadrage plus large.",
          en: "A full website can be delivered in two to three weeks when scope is clear. More editorial, bilingual or CMS-based projects need broader scoping.",
        },
      },
      {
        question: {
          fr: "Est-ce adapté à une refonte de site existant ?",
          en: "Is this suitable for a website redesign?",
        },
        answer: {
          fr: "Oui. La refonte part du site actuel, des prospects à attirer, des pages qui fonctionnent déjà et des points qui nuisent à la crédibilité ou à la conversion.",
          en: "Yes. A redesign starts from the current site, the prospects to attract, pages that already work and the points that weaken credibility or conversion.",
        },
      },
      {
        question: {
          fr: "Le site est-il optimisé pour le SEO dès la mise en ligne ?",
          en: "Is the website SEO-ready at launch?",
        },
        answer: {
          fr: "Oui. Les bases SEO sont intégrées: structure des titres, métadonnées, performance, responsive, maillage interne, sitemap, données structurées et pages pensées pour répondre à une intention de recherche.",
          en: "Yes. SEO foundations are built in: heading structure, metadata, performance, responsive behavior, internal links, sitemap, structured data and pages planned around search intent.",
        },
      },
      {
        question: {
          fr: "Est-ce que le code et le contenu m’appartiennent ?",
          en: "Do I own the code and content?",
        },
        answer: {
          fr: "Oui. Le code appartient au client. Le contenu peut être administrable via un CMS si le projet le demande, avec une passation claire après la mise en ligne.",
          en: "Yes. The code belongs to the client. Content can be editable through a CMS when the project needs it, with a clear handover after launch.",
        },
      },
    ],
    cta: {
      fr: "Cadrer mon site web",
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
        title: "Site web cabinet avocat sur mesure - TeneX Studio",
        description:
          "Création de sites web premium pour cabinets d’avocats. Expertises, associés, références, SEO local, crédibilité et demandes qualifiées.",
      },
      en: {
        title: "Custom Law Firm Websites - TeneX Studio",
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
    faq: [
      {
        question: {
          fr: "Pourquoi un cabinet d’avocats a-t-il besoin d’un site sur mesure ?",
          en: "Why does a law firm need a custom website?",
        },
        answer: {
          fr: "Parce que la crédibilité dépend de la précision des expertises, des profils, des références et du ton. Un template rend souvent les cabinets interchangeables.",
          en: "Because credibility depends on precise practice areas, profiles, references and tone. Templates often make firms look interchangeable.",
        },
      },
      {
        question: {
          fr: "Peut-on travailler le SEO sans dégrader le sérieux juridique ?",
          en: "Can SEO be improved without weakening legal tone?",
        },
        answer: {
          fr: "Oui. Les pages peuvent cibler les recherches utiles avec des titres clairs, des contenus précis et un maillage sobre, sans empiler les mots-clés.",
          en: "Yes. Pages can target useful searches with clear titles, precise content and restrained internal linking, without keyword stuffing.",
        },
      },
      {
        question: {
          fr: "Le site peut-il filtrer les demandes hors sujet ?",
          en: "Can the website filter poor-fit inquiries?",
        },
        answer: {
          fr: "Oui. La structure peut préciser les domaines traités, les situations acceptées, les informations attendues et le bon chemin de contact.",
          en: "Yes. The structure can clarify handled practices, accepted situations, expected information and the right contact path.",
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
    id: "accounting-firm-websites",
    slug: {
      fr: "sites-web-experts-comptables",
      en: "accounting-firm-websites",
    },
    eyebrow: {
      fr: "Experts-comptables",
      en: "Accounting firms",
    },
    title: {
      fr: "Un site de cabinet comptable qui rend le conseil visible.",
      en: "An accounting firm website that makes advisory work visible.",
    },
    heroImage: "/landing/experts-comptables-hover.webp",
    intro: {
      fr: "Un cabinet comptable ne se résume pas à la tenue, aux bilans ou aux échéances fiscales. Le site doit montrer la qualité du conseil, les secteurs accompagnés, la méthode de travail et le niveau de relation proposé aux dirigeants.",
      en: "An accounting firm is not defined only by bookkeeping, accounts or tax deadlines. The site must show advisory quality, sectors served, working method and the level of relationship offered to business owners.",
    },
    meta: {
      fr: {
        title: "Site web expert-comptable sur mesure - TeneX Studio",
        description:
          "Sites web premium pour experts-comptables et cabinets comptables. Conseil, fiscalité, CFO-as-a-service, crédibilité et demandes qualifiées.",
      },
      en: {
        title: "Custom Accounting Firm Websites - TeneX Studio",
        description:
          "Premium websites for accounting firms. Advisory, tax, CFO-as-a-service, credibility and better-qualified inquiries.",
      },
    },
    proof: [
      {
        fr: "Des offres qui distinguent la conformité, le conseil et l’accompagnement dirigeant.",
        en: "Offers that separate compliance, advisory work and business-owner support.",
      },
      {
        fr: "Des pages de secteurs, missions et expertises qui expliquent le bon niveau d’intervention.",
        en: "Sector, mission and expertise pages that explain the right level of engagement.",
      },
      {
        fr: "Un parcours de contact pensé pour qualifier les entreprises avant le premier échange.",
        en: "A contact path designed to qualify companies before the first conversation.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Sortir de l’image du cabinet généraliste",
          en: "Move beyond the generalist firm image",
        },
        body: {
          fr: "Beaucoup de cabinets se ressemblent en ligne: comptabilité, paie, fiscalité, conseil. Un site premium doit montrer les situations traitées, les clients servis, les sujets maîtrisés et les raisons de vous choisir.",
          en: "Many firms look the same online: accounting, payroll, tax, advisory. A premium site must show the situations handled, clients served, subjects mastered and reasons to choose you.",
        },
      },
      {
        title: {
          fr: "Mettre le conseil au même niveau que la conformité",
          en: "Put advisory work on the same level as compliance",
        },
        body: {
          fr: "Fiscalité internationale, structuration, pilotage, transmission, levée de fonds ou CFO-as-a-service: chaque expertise mérite une page claire qui explique les enjeux, les livrables et le bon moment pour solliciter le cabinet.",
          en: "International tax, structuring, management reporting, succession, fundraising or CFO-as-a-service: each expertise deserves a clear page that explains stakes, deliverables and the right moment to contact the firm.",
        },
      },
      {
        title: {
          fr: "Rassurer les dirigeants avant le rendez-vous",
          en: "Reassure business owners before the meeting",
        },
        body: {
          fr: "Un dirigeant veut comprendre si le cabinet connaît son contexte, son rythme et ses enjeux. Le site doit présenter la méthode, l’équipe, les outils, les références et le type de relation attendu.",
          en: "A business owner wants to know whether the firm understands their context, pace and stakes. The site must present the method, team, tools, references and expected working relationship.",
        },
      },
      {
        title: {
          fr: "Attirer des dossiers mieux alignés",
          en: "Attract better-aligned engagements",
        },
        body: {
          fr: "Le site peut filtrer les demandes trop basiques, nommer les tailles d’entreprise pertinentes et mettre en avant les missions à plus forte valeur. Les prospects arrivent avec une meilleure compréhension du niveau du cabinet.",
          en: "The site can filter basic requests, name relevant company sizes and highlight higher-value missions. Prospects arrive with a better understanding of the firm’s level.",
        },
      },
      {
        title: {
          fr: "Préparer la croissance du cabinet",
          en: "Prepare the firm’s growth",
        },
        body: {
          fr: "Nouveaux associés, recrutements, pages sectorielles, publications, offres internationales ou contenus pédagogiques peuvent être ajoutés sans refaire le site. La base reste rapide, propriétaire et évolutive.",
          en: "New partners, hiring pages, sector pages, publications, international offers or educational content can be added without rebuilding the site. The base stays fast, owned and ready to evolve.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site du cabinet comptable",
      en: "Scope the accounting firm website",
    },
    relatedIds: ["custom-websites", "law-firm-websites", "consultant-websites"],
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
        title: "Site web clinique privée sur mesure - TeneX Studio",
        description:
          "Sites web premium pour cliniques privées et médecins spécialistes. Parcours patient, SEO, confiance, expertises et prise de rendez-vous.",
      },
      en: {
        title: "Custom Private Clinic Websites - TeneX Studio",
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
    faq: [
      {
        question: {
          fr: "Quels contenus sont prioritaires pour un site de clinique privée ?",
          en: "What content matters most for a private clinic website?",
        },
        answer: {
          fr: "Les pages de soins, les praticiens, les informations pratiques, les preuves de sérieux et le parcours de rendez-vous doivent être lisibles très tôt.",
          en: "Treatment pages, practitioners, practical information, trust proof and the booking path should be easy to read very early.",
        },
      },
      {
        question: {
          fr: "Le ton peut-il rester médical tout en convertissant ?",
          en: "Can the tone stay medical while still converting?",
        },
        answer: {
          fr: "Oui. La conversion vient surtout de la clarté, de la réassurance et du bon prochain pas. Le site n’a pas besoin de pression commerciale.",
          en: "Yes. Conversion comes mainly from clarity, reassurance and the right next step. The site does not need commercial pressure.",
        },
      },
      {
        question: {
          fr: "Le SEO local est-il prévu pour les cliniques ?",
          en: "Is local SEO planned for clinics?",
        },
        answer: {
          fr: "Oui. Les pages de spécialités, les informations locales, les données structurées et le maillage aident la clinique à être comprise et trouvée.",
          en: "Yes. Specialty pages, local information, structured data and internal linking help the clinic be understood and found.",
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
    id: "wealth-management-websites",
    slug: {
      fr: "sites-web-gestion-patrimoine",
      en: "wealth-management-websites",
    },
    eyebrow: {
      fr: "Gestion de patrimoine",
      en: "Wealth management",
    },
    title: {
      fr: "Un site de gestion de patrimoine qui inspire confiance avec retenue.",
      en: "A wealth management website that builds trust with restraint.",
    },
    heroImage: "/landing/wealth-management-hover.webp",
    intro: {
      fr: "Un conseiller patrimonial, un family office ou une boutique d’investissement vend d’abord une relation de confiance. Le site doit expliquer le niveau d’accompagnement, la méthode, les expertises et les critères d’adéquation sans surpromettre.",
      en: "A wealth advisor, family office or investment boutique first sells a relationship of trust. The site must explain the level of support, method, expertise and fit criteria without overpromising.",
    },
    meta: {
      fr: {
        title: "Site web gestion de patrimoine sur mesure - TeneX Studio",
        description:
          "Sites web premium pour conseillers en gestion de patrimoine, family offices et boutiques d’investissement. Confiance, pédagogie, discrétion et demandes qualifiées.",
      },
      en: {
        title: "Custom Wealth Management Websites - TeneX Studio",
        description:
          "Premium websites for wealth advisors, family offices and investment boutiques. Trust, education, discretion and qualified inquiries.",
      },
    },
    proof: [
      {
        fr: "Une présentation claire des profils accompagnés, des seuils et des situations traitées.",
        en: "Clear presentation of client profiles, thresholds and situations handled.",
      },
      {
        fr: "Des pages pédagogiques qui expliquent sans banaliser les sujets patrimoniaux.",
        en: "Educational pages that explain wealth topics without trivializing them.",
      },
      {
        fr: "Un parcours de contact discret, rassurant et adapté aux demandes sensibles.",
        en: "A discreet, reassuring contact path suited to sensitive inquiries.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Rendre le niveau d’accompagnement lisible",
          en: "Make the level of support readable",
        },
        body: {
          fr: "Dirigeants, familles, expatriés, professions libérales ou investisseurs n’ont pas les mêmes questions. Le site doit préciser les situations accompagnées, les seuils pertinents et la manière de travailler.",
          en: "Business owners, families, expatriates, independent professionals and investors do not have the same questions. The site should clarify situations served, relevant thresholds and the way of working.",
        },
      },
      {
        title: {
          fr: "Installer la confiance sans effet de manche",
          en: "Build trust without theatrical claims",
        },
        body: {
          fr: "Indépendance, agréments, partenaires, méthode de suivi, allocation, fiscalité ou transmission sont présentés avec précision. Le ton reste sobre, parce que la confiance se gagne mieux avec des preuves qu’avec des promesses.",
          en: "Independence, credentials, partners, monitoring method, allocation, tax or succession topics are presented with precision. The tone stays restrained, because trust is built better with proof than promises.",
        },
      },
      {
        title: {
          fr: "Expliquer les expertises sensibles",
          en: "Explain sensitive expertise",
        },
        body: {
          fr: "Bilan patrimonial, stratégie d’investissement, optimisation fiscale, transmission ou structuration internationale demandent de la clarté. Chaque page doit aider le prospect à comprendre l’enjeu et le bon moment pour solliciter le cabinet.",
          en: "Wealth audit, investment strategy, tax planning, succession or international structuring require clarity. Each page should help prospects understand the stake and the right moment to contact the firm.",
        },
      },
      {
        title: {
          fr: "Qualifier sans exposer",
          en: "Qualify without exposing",
        },
        body: {
          fr: "Le site peut guider vers un rendez-vous sans demander trop d’informations publiques. Il donne assez de contexte pour filtrer les demandes, tout en respectant la confidentialité attendue par les clients patrimoniaux.",
          en: "The site can guide people toward a meeting without asking for too much public information. It gives enough context to filter inquiries while respecting the confidentiality expected by wealth clients.",
        },
      },
      {
        title: {
          fr: "Construire une base éditoriale durable",
          en: "Build a durable editorial base",
        },
        body: {
          fr: "Guides, pages de situations, actualités fiscales, vues de marché et contenus pédagogiques peuvent renforcer la visibilité sans transformer le site en média bruyant. La structure anticipe cette progression.",
          en: "Guides, situation pages, tax updates, market views and educational content can strengthen visibility without turning the site into a noisy media property. The structure anticipates that growth.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site patrimonial",
      en: "Scope the wealth website",
    },
    relatedIds: ["custom-websites", "accounting-firm-websites", "law-firm-websites"],
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
        title: "Site web consultant sur mesure - TeneX Studio",
        description:
          "Sites web premium pour consultants et sociétés de conseil. Positionnement, offres, méthode, preuves, SEO et rendez-vous qualifiés.",
      },
      en: {
        title: "Custom Consultant Websites - TeneX Studio",
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
    faq: [
      {
        question: {
          fr: "Comment rendre une offre de conseil moins abstraite ?",
          en: "How do you make a consulting offer less abstract?",
        },
        answer: {
          fr: "En partant des problèmes clients, des contextes d’intervention, des livrables, de la méthode et des preuves. Le visiteur doit comprendre quand vous appeler.",
          en: "By starting from client problems, engagement contexts, deliverables, method and proof. Visitors should understand when to contact you.",
        },
      },
      {
        question: {
          fr: "Un consultant indépendant peut-il avoir une page SEO efficace ?",
          en: "Can an independent consultant have an effective SEO page?",
        },
        answer: {
          fr: "Oui, si la page cible une expertise ou une situation claire. Le site doit éviter les listes de prestations vagues et montrer un point de vue.",
          en: "Yes, if the page targets a clear expertise or situation. The site should avoid vague service lists and show a point of view.",
        },
      },
      {
        question: {
          fr: "Le site peut-il aider à qualifier les prospects avant le rendez-vous ?",
          en: "Can the website qualify prospects before the meeting?",
        },
        answer: {
          fr: "Oui. Les formats, budgets, conditions de collaboration, secteurs et projets refusés peuvent être rendus visibles avec retenue.",
          en: "Yes. Formats, budgets, collaboration conditions, sectors and rejected projects can be made visible with restraint.",
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
    id: "premium-real-estate-websites",
    slug: {
      fr: "sites-web-immobilier-premium",
      en: "premium-real-estate-websites",
    },
    eyebrow: {
      fr: "Immobilier premium",
      en: "Premium real estate",
    },
    title: {
      fr: "Un site immobilier premium qui qualifie avant la visite.",
      en: "A premium real estate website that qualifies before the viewing.",
    },
    heroImage: "/landing/real-estate-hover.webp",
    intro: {
      fr: "Dans l’immobilier haut de gamme, le site doit vendre plus qu’un bien. Il doit montrer un territoire, une exigence, un niveau de mandat et une capacité à filtrer les demandes avant le premier échange.",
      en: "In premium real estate, the website must sell more than a property. It must show a territory, a standard, a mandate level and the ability to filter inquiries before the first conversation.",
    },
    meta: {
      fr: {
        title: "Site web immobilier premium sur mesure - TeneX Studio",
        description:
          "Sites web premium pour agences immobilières haut de gamme, chasseurs, promoteurs et conseil immobilier. Biens, territoires, preuves et demandes qualifiées.",
      },
      en: {
        title: "Custom Premium Real Estate Websites - TeneX Studio",
        description:
          "Premium websites for high-end agencies, buyer agents, developers and real estate advisors. Properties, territories, proof and qualified inquiries.",
      },
    },
    proof: [
      {
        fr: "Des pages de biens qui donnent du contexte, pas seulement des photos.",
        en: "Property pages that give context, not only photos.",
      },
      {
        fr: "Une présentation claire du territoire, des mandats et du niveau de service.",
        en: "Clear presentation of territory, mandates and service level.",
      },
      {
        fr: "Un parcours de contact qui filtre les demandes curieuses ou mal qualifiées.",
        en: "A contact path that filters curious or poor-fit inquiries.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Faire porter la valeur par le contexte",
          en: "Let context carry value",
        },
        body: {
          fr: "Adresse, architecture, rareté, usage, lumière, quartier, potentiel et contraintes donnent de la valeur au bien. Le site doit organiser ces éléments pour aider l’acheteur ou le vendeur à comprendre le niveau proposé.",
          en: "Address, architecture, rarity, use, light, neighborhood, potential and constraints give value to a property. The site must organize these elements so buyers or sellers understand the level offered.",
        },
      },
      {
        title: {
          fr: "Montrer le niveau de mandat",
          en: "Show the mandate level",
        },
        body: {
          fr: "Agence premium, conseil en immobilier d’entreprise, promoteur ou chasseur immobilier: chaque modèle doit expliquer son périmètre, ses critères de sélection, son accompagnement et ses preuves.",
          en: "Premium agency, commercial real estate advisor, developer or buyer agent: each model should explain scope, selection criteria, support and proof.",
        },
      },
      {
        title: {
          fr: "Qualifier les demandes sans friction inutile",
          en: "Qualify inquiries without needless friction",
        },
        body: {
          fr: "Le site peut aider à distinguer acheteurs sérieux, vendeurs alignés, investisseurs et demandes exploratoires. Les appels à l’action restent clairs, mais le parcours protège le temps de l’équipe.",
          en: "The site can help distinguish serious buyers, aligned sellers, investors and exploratory requests. Calls to action stay clear, but the path protects the team’s time.",
        },
      },
      {
        title: {
          fr: "Installer une présence locale forte",
          en: "Build a strong local presence",
        },
        body: {
          fr: "Pages de quartiers, typologies, biens vendus, références et contenus de marché peuvent soutenir le SEO local. Le ton reste éditorial, précis et compatible avec une image haut de gamme.",
          en: "Neighborhood pages, property types, sold properties, references and market content can support local SEO. The tone stays editorial, precise and compatible with a high-end image.",
        },
      },
      {
        title: {
          fr: "Préparer le portefeuille de demain",
          en: "Prepare tomorrow’s portfolio",
        },
        body: {
          fr: "Nouveaux biens, campagnes, contenus, pages internationales ou espaces de préqualification peuvent être ajoutés progressivement. La base reste rapide, propriétaire et simple à faire évoluer.",
          en: "New properties, campaigns, content, international pages or prequalification paths can be added progressively. The base stays fast, owned and easy to evolve.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site immobilier",
      en: "Scope the real estate website",
    },
    relatedIds: ["custom-websites", "wealth-management-websites", "architecture-studio-websites"],
  },
  {
    id: "expert-recruitment-websites",
    slug: {
      fr: "sites-web-recrutement-expert",
      en: "expert-recruitment-websites",
    },
    eyebrow: {
      fr: "Recrutement expert",
      en: "Expert recruitment",
    },
    title: {
      fr: "Un site de recrutement expert qui crédibilise les missions sensibles.",
      en: "An expert recruitment website that gives sensitive mandates credibility.",
    },
    heroImage: "/landing/expert-recruitment-hover.webp",
    intro: {
      fr: "Executive search, recrutement tech, juridique ou finance: le site doit rassurer les clients et les candidats. Il montre la spécialisation, la méthode, la confidentialité et le niveau de mandat sans transformer le cabinet en plateforme générique.",
      en: "Executive search, tech, legal or finance recruitment: the site must reassure clients and candidates. It shows specialization, method, confidentiality and mandate level without turning the firm into a generic platform.",
    },
    meta: {
      fr: {
        title: "Site web recrutement expert sur mesure - TeneX Studio",
        description:
          "Sites web premium pour cabinets de recrutement et executive search. Spécialisation, confidentialité, méthode, crédibilité candidat et demandes qualifiées.",
      },
      en: {
        title: "Custom Expert Recruitment Websites - TeneX Studio",
        description:
          "Premium websites for recruitment and executive search firms. Specialization, confidentiality, method, candidate credibility and qualified inquiries.",
      },
    },
    proof: [
      {
        fr: "Des pages qui parlent aux clients et aux candidats sans mélanger les parcours.",
        en: "Pages that speak to clients and candidates without mixing paths.",
      },
      {
        fr: "Une méthode de recherche claire, compatible avec les mandats confidentiels.",
        en: "A clear search method suited to confidential mandates.",
      },
      {
        fr: "Des preuves de spécialisation par secteur, fonction et niveau de poste.",
        en: "Proof of specialization by sector, function and role level.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Prouver la spécialisation",
          en: "Prove specialization",
        },
        body: {
          fr: "Un cabinet de recrutement expert doit montrer les métiers compris, les fonctions traitées, les secteurs couverts et le niveau de séniorité visé. Le site aide à distinguer expertise réelle et discours généraliste.",
          en: "An expert recruitment firm must show the roles understood, functions handled, sectors covered and seniority level targeted. The site helps separate real expertise from generalist claims.",
        },
      },
      {
        title: {
          fr: "Séparer les parcours clients et candidats",
          en: "Separate client and candidate paths",
        },
        body: {
          fr: "Un dirigeant cherche une méthode, des garanties et une capacité d’approche. Un candidat cherche de la confidentialité, du sérieux et une compréhension de son marché. Chaque parcours doit répondre à ses propres objections.",
          en: "A business leader looks for method, safeguards and search capability. A candidate looks for confidentiality, seriousness and market understanding. Each path must answer its own objections.",
        },
      },
      {
        title: {
          fr: "Rendre la méthode concrète",
          en: "Make the method concrete",
        },
        body: {
          fr: "Cadrage, cartographie, approche directe, évaluation, shortlist, suivi d’intégration: les étapes montrent le niveau de travail sans exposer les éléments confidentiels du cabinet.",
          en: "Scoping, mapping, direct approach, evaluation, shortlist and onboarding follow-up show the level of work without exposing confidential firm material.",
        },
      },
      {
        title: {
          fr: "Attirer les bons mandats",
          en: "Attract the right mandates",
        },
        body: {
          fr: "Le site peut clarifier les types de postes, les secteurs, les zones géographiques et les niveaux d’urgence acceptés. Les demandes entrantes deviennent plus précises dès le premier contact.",
          en: "The site can clarify role types, sectors, geographies and accepted urgency levels. Inbound inquiries become more precise from the first contact.",
        },
      },
      {
        title: {
          fr: "Construire une autorité de marché",
          en: "Build market authority",
        },
        body: {
          fr: "Analyses de marché, notes sectorielles, pages métiers et contenus candidats peuvent renforcer la crédibilité du cabinet. Le site devient un repère pour le marché ciblé.",
          en: "Market analysis, sector notes, role pages and candidate content can strengthen firm credibility. The site becomes a reference point for the target market.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site recrutement",
      en: "Scope the recruitment website",
    },
    relatedIds: ["custom-websites", "consultant-websites", "expert-b2b-agency-websites"],
  },
  {
    id: "engineering-technical-consulting-websites",
    slug: {
      fr: "sites-web-ingenierie-conseil-technique",
      en: "engineering-technical-consulting-websites",
    },
    eyebrow: {
      fr: "Ingénierie et conseil technique",
      en: "Engineering and technical consulting",
    },
    title: {
      fr: "Un site technique qui rend l’expertise complexe compréhensible.",
      en: "A technical website that makes complex expertise understandable.",
    },
    heroImage: "/landing/engineering-technical-consulting-hover.webp",
    intro: {
      fr: "Cybersécurité, data, conformité, énergie, infrastructure ou ingénierie industrielle: le site doit expliquer des sujets exigeants sans les simplifier à l’excès. Il doit montrer la méthode, les preuves et le niveau d’intervention.",
      en: "Cybersecurity, data, compliance, energy, infrastructure or industrial engineering: the site must explain demanding subjects without oversimplifying them. It must show method, proof and level of engagement.",
    },
    meta: {
      fr: {
        title: "Site web ingénierie et conseil technique - TeneX Studio",
        description:
          "Sites web premium pour cabinets d’ingénierie, cybersécurité, data, conformité, énergie et infrastructure. Expertise complexe, preuve et demandes qualifiées.",
      },
      en: {
        title: "Custom Engineering Consulting Websites - TeneX Studio",
        description:
          "Premium websites for engineering, cybersecurity, data, compliance, energy and infrastructure consultancies. Complex expertise, proof and qualified inquiries.",
      },
    },
    proof: [
      {
        fr: "Des pages d’expertises qui clarifient les problèmes, contextes et livrables.",
        en: "Expertise pages that clarify problems, contexts and deliverables.",
      },
      {
        fr: "Des preuves adaptées aux sujets techniques: cas, normes, méthodes, résultats.",
        en: "Proof suited to technical subjects: cases, standards, methods and results.",
      },
      {
        fr: "Un discours lisible pour décideurs, acheteurs et équipes métier.",
        en: "Readable messaging for decision-makers, buyers and business teams.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Traduire sans appauvrir",
          en: "Translate without flattening",
        },
        body: {
          fr: "Un sujet technique doit être compris par plusieurs niveaux de lecture. Le site peut donner une entrée claire aux décideurs, puis garder la précision nécessaire pour les profils experts.",
          en: "A technical subject must be understood at several reading levels. The site can give decision-makers a clear entry point while keeping the precision expert profiles need.",
        },
      },
      {
        title: {
          fr: "Structurer les expertises par problèmes",
          en: "Structure expertise by problems",
        },
        body: {
          fr: "Audit, conformité, architecture, migration, supervision, performance ou sécurité: chaque page doit partir du problème client, montrer le contexte d’intervention et préciser les livrables.",
          en: "Audit, compliance, architecture, migration, monitoring, performance or security: each page should start from the client problem, show the engagement context and specify deliverables.",
        },
      },
      {
        title: {
          fr: "Prouver avec rigueur",
          en: "Prove with rigor",
        },
        body: {
          fr: "Références, certifications, normes, schémas, chiffres, environnements et cas d’usage doivent être hiérarchisés. La preuve rassure sans noyer le visiteur dans la documentation.",
          en: "References, certifications, standards, diagrams, numbers, environments and use cases must be ordered. Proof reassures without burying visitors in documentation.",
        },
      },
      {
        title: {
          fr: "Qualifier les demandes techniques",
          en: "Qualify technical inquiries",
        },
        body: {
          fr: "Le site peut clarifier les contextes acceptés, les prérequis, les niveaux d’urgence et les informations utiles avant un premier échange. Les demandes arrivent mieux cadrées.",
          en: "The site can clarify accepted contexts, prerequisites, urgency levels and useful information before a first conversation. Inquiries arrive better framed.",
        },
      },
      {
        title: {
          fr: "Préparer contenus longs et cas",
          en: "Prepare long-form content and cases",
        },
        body: {
          fr: "Articles, livres blancs, cas techniques, pages normes ou glossaires peuvent être ajoutés progressivement. La base devient un système de crédibilité, pas une simple plaquette.",
          en: "Articles, white papers, technical cases, standards pages or glossaries can be added progressively. The base becomes a credibility system, not a simple brochure.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site technique",
      en: "Scope the technical website",
    },
    relatedIds: ["custom-websites", "consultant-websites", "expert-b2b-agency-websites"],
  },
  {
    id: "expert-b2b-agency-websites",
    slug: {
      fr: "sites-web-agences-b2b-expertes",
      en: "expert-b2b-agency-websites",
    },
    eyebrow: {
      fr: "Agences B2B expertes",
      en: "Expert B2B agencies",
    },
    title: {
      fr: "Un site d’agence B2B qui prouve la spécialisation avant le brief.",
      en: "A B2B agency website that proves specialization before the brief.",
    },
    heroImage: "/landing/b2b-agency-hover.webp",
    intro: {
      fr: "Branding, production vidéo, relations presse, études de marché, revenue operations ou stratégie: une agence experte doit montrer son point de vue, ses preuves, ses secteurs et sa méthode avant même de recevoir un brief.",
      en: "Branding, video production, public relations, market research, revenue operations or strategy: an expert agency must show its point of view, proof, sectors and method before receiving a brief.",
    },
    meta: {
      fr: {
        title: "Site web agence B2B experte sur mesure - TeneX Studio",
        description:
          "Sites web premium pour agences B2B expertes. Positionnement, offres, cas clients, méthode, spécialisation et demandes qualifiées.",
      },
      en: {
        title: "Custom Expert B2B Agency Websites - TeneX Studio",
        description:
          "Premium websites for expert B2B agencies. Positioning, offers, client cases, method, specialization and qualified inquiries.",
      },
    },
    proof: [
      {
        fr: "Des offres qui rendent la spécialisation lisible dès la première page.",
        en: "Offers that make specialization readable from the first page.",
      },
      {
        fr: "Des cas clients structurés par problème, décision et résultat.",
        en: "Client cases structured by problem, decision and outcome.",
      },
      {
        fr: "Un parcours de contact qui attire les bons briefs et écarte les demandes faibles.",
        en: "A contact path that attracts the right briefs and filters weak inquiries.",
      },
    ],
    sections: [
      {
        title: {
          fr: "Sortir du discours d’agence interchangeable",
          en: "Move beyond interchangeable agency claims",
        },
        body: {
          fr: "Beaucoup d’agences promettent créativité, performance ou accompagnement. Un site premium doit montrer un angle, des secteurs, des choix, des cas et une manière de penser.",
          en: "Many agencies promise creativity, performance or support. A premium site must show an angle, sectors, choices, cases and a way of thinking.",
        },
      },
      {
        title: {
          fr: "Clarifier les offres et les formats",
          en: "Clarify offers and formats",
        },
        body: {
          fr: "Audit, sprint, production, retainer, campagne ou programme: chaque format doit expliquer ce qui est inclus, quand il est pertinent et quel type de client peut en tirer parti.",
          en: "Audit, sprint, production, retainer, campaign or program: each format should explain what is included, when it is relevant and what type of client can benefit from it.",
        },
      },
      {
        title: {
          fr: "Faire travailler les cas clients",
          en: "Make client cases work harder",
        },
        body: {
          fr: "Un bon cas ne se limite pas à une galerie. Il explique le contexte, la contrainte, les arbitrages, le résultat et le rôle exact de l’agence dans la progression du client.",
          en: "A good case is not only a gallery. It explains context, constraint, decisions, outcome and the agency’s exact role in the client’s progress.",
        },
      },
      {
        title: {
          fr: "Qualifier les briefs entrants",
          en: "Qualify inbound briefs",
        },
        body: {
          fr: "Le site peut nommer les budgets pertinents, les délais, les profils de clients, les secteurs et les demandes refusées. Les échanges commencent avec plus de clarté.",
          en: "The site can name relevant budgets, timelines, client profiles, sectors and rejected requests. Conversations start with more clarity.",
        },
      },
      {
        title: {
          fr: "Porter le point de vue de l’agence",
          en: "Carry the agency’s point of view",
        },
        body: {
          fr: "Articles, manifestes, notes de méthode, études ou pages sectorielles peuvent soutenir l’autorité. La structure du site prépare cette couche éditoriale sans alourdir l’expérience.",
          en: "Articles, manifestos, method notes, studies or sector pages can support authority. The site structure prepares that editorial layer without making the experience heavy.",
        },
      },
    ],
    cta: {
      fr: "Cadrer le site de l’agence",
      en: "Scope the agency website",
    },
    relatedIds: ["custom-websites", "consultant-websites", "engineering-technical-consulting-websites"],
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
        title: "Site web architecte sur mesure - TeneX Studio",
        description:
          "Sites web premium pour architectes et architectes d’intérieur. Portfolio, direction éditoriale, SEO, références et demandes qualifiées.",
      },
      en: {
        title: "Custom Architecture Studio Websites - TeneX Studio",
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
    hoverImage: "/landing/law-firm-hero.webp",
    body: {
      fr: "Expertises, associés, références et demandes mieux cadrées.",
      en: "Practice areas, partners, references and better-framed inquiries.",
    },
  },
  {
    pageId: "wealth-management-websites",
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
    pageId: "consultant-websites",
    label: {
      fr: "Consultants",
      en: "Consultants",
    },
    hoverImage: "/landing/consultants-hover.webp",
    body: {
      fr: "Offres, méthode, cas clients et autorité lisible.",
      en: "Offers, method, client cases and readable authority.",
    },
  },
  {
    pageId: "premium-real-estate-websites",
    label: {
      fr: "Immobilier premium",
      en: "Premium real estate",
    },
    hoverImage: "/landing/real-estate-hover.webp",
    body: {
      fr: "Biens, territoires, preuves et demandes mieux filtrées.",
      en: "Properties, territories, proof and better-filtered inquiries.",
    },
  },
  {
    pageId: "expert-b2b-agency-websites",
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
  {
    pageId: "engineering-technical-consulting-websites",
    label: {
      fr: "Ingénierie et conseil technique",
      en: "Engineering and technical consulting",
    },
    hoverImage: "/landing/engineering-technical-consulting-hover.webp",
    body: {
      fr: "Expertises complexes, conformité, data, énergie ou cybersécurité.",
      en: "Complex expertise, compliance, data, energy or cybersecurity.",
    },
  },
  {
    pageId: "architecture-studio-websites",
    label: {
      fr: "Architectes",
      en: "Architects",
    },
    hoverImage: "/landing/architectes-hover.webp",
    body: {
      fr: "Portfolio, goût, niveau de mission et projets mieux qualifiés.",
      en: "Portfolio, taste, scope level and better-qualified projects.",
    },
  },
  {
    pageId: "accounting-firm-websites",
    label: {
      fr: "Experts-comptables",
      en: "Accounting firms",
    },
    hoverImage: "/landing/experts-comptables-hover.webp",
    body: {
      fr: "Conseil, fiscalité, CFO-as-a-service et montée en gamme.",
      en: "Advisory, tax, CFO-as-a-service and upmarket positioning.",
    },
  },
  {
    pageId: "expert-recruitment-websites",
    label: {
      fr: "Recrutement expert",
      en: "Expert recruitment",
    },
    hoverImage: "/landing/expert-recruitment-hover.webp",
    body: {
      fr: "Executive search, spécialisation, crédibilité candidat et client.",
      en: "Executive search, specialization, candidate and client credibility.",
    },
  },
  {
    pageId: "private-clinic-websites",
    label: {
      fr: "Cliniques privées",
      en: "Private clinics",
    },
    hoverImage: "/landing/clinic-hero.webp",
    body: {
      fr: "Parcours patient, praticiens, soins et rendez-vous rassurants.",
      en: "Patient journey, practitioners, treatments and reassuring bookings.",
    },
  },
];

export function seoLandingPath(page: SeoLandingPage, locale: "fr" | "en") {
  return locale === "fr" ? `/${page.slug.fr}/` : `/en/${page.slug.en}/`;
}
