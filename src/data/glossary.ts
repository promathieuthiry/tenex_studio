import type { Bilingual, Slug } from "./_types";
import { slug } from "./_types";
import type { Locale } from "../lib/i18n";
import { pathFor } from "../lib/i18n";
import { assertArrayParity } from "./__guards";

export type GlossaryCategoryId = "ai" | "geo" | "seo" | "web" | "ux";

export type GlossaryTerm = Readonly<{
  slug: Slug;
  term: Bilingual;
  abbr?: Bilingual;
  category: GlossaryCategoryId;
  short: Bilingual;
  body: Bilingual<ReadonlyArray<string>>;
  related: ReadonlyArray<string>;
}>;

export const GLOSSARY_CATEGORIES: ReadonlyArray<{
  id: GlossaryCategoryId;
  label: Bilingual;
}> = [
  { id: "ai", label: { fr: "IA", en: "AI" } },
  { id: "geo", label: { fr: "GEO", en: "GEO" } },
  { id: "seo", label: { fr: "SEO", en: "SEO" } },
  { id: "web", label: { fr: "Web", en: "Web" } },
  { id: "ux", label: { fr: "Design", en: "Design" } },
] as const;

export const GLOSSARY_TERMS: ReadonlyArray<GlossaryTerm> = [
  {
    slug: slug("ai-agent"),
    term: { fr: "Agent IA", en: "AI Agent" },
    category: "ai",
    short: { fr: "Un agent IA est un système logiciel qui perçoit son environnement, prend des décisions et exécute des actions pour atteindre un objectif, avec peu ou pas d'intervention humaine.", en: "An AI agent is a software system that perceives its environment, makes decisions, and executes actions to reach a goal, with little or no human intervention." },
    body: {
      fr: [
        "Un agent IA combine un modèle de langage avec des outils, une mémoire et une boucle de décision. Il planifie une suite d'actions plutôt que de répondre à une seule question, et peut appeler des API, lire des fichiers ou naviguer sur le web.",
        "Pour un site web, un agent IA change la façon dont les visiteurs interagissent avec le contenu. Un acheteur peut demander à son propre agent de comparer des offres, réserver un rendez-vous ou remplir un formulaire, sans jamais ouvrir le navigateur lui-même.",
      ],
      en: [
        "An AI agent combines a language model with tools, memory, and a decision loop. It plans a sequence of actions rather than answering a single question, and can call APIs, read files, or browse the web.",
        "For a website, an AI agent changes how visitors interact with content. A buyer can ask their own agent to compare offers, book a meeting, or fill a form, without ever opening a browser themselves.",
      ],
    },
    related: ["llm", "mcp", "agentic-search", "agent-economy"],
  },
  {
    slug: slug("harness"),
    term: { fr: "Harness", en: "Harness" },
    category: "ai",
    short: { fr: "Le harness est la couche logicielle qui entoure un modèle d'IA. Il gère le contexte, les outils et les étapes, et transforme un modèle brut en assistant capable d'agir.", en: "A harness is the software layer wrapping an AI model. It manages context, tools, and steps, turning a raw model into an assistant that can act." },
    body: {
      fr: [
        "Un modèle seul se contente de prédire du texte. Le harness décide ce qu'il voit, quels outils il peut appeler et dans quel ordre il agit. Concrètement, il rassemble les instructions, les hooks, les skills, les sous-agents et les serveurs MCP autour du modèle. À modèle identique, deux harness différents produisent des résultats très différents sur la même tâche.",
        "Les assistants de code comme Claude Code, ou les agents qui lisent un site pour répondre, reposent tous sur un harness. Cette couche compte souvent plus que le modèle: c'est elle qui détermine si l'IA tombe sur la bonne information ou se perd dans du bruit.",
      ],
      en: [
        "A model on its own only predicts text. The harness decides what it sees, which tools it can call, and in what order it acts. In practice, it assembles the instructions, hooks, skills, sub-agents, and MCP servers around the model. With the same model, two different harnesses produce very different results on the same task.",
        "Coding assistants like Claude Code, or agents that read a site to answer, all rely on a harness. This layer often matters more than the model itself: it decides whether the AI lands on the right information or gets lost in noise.",
      ],
    },
    related: ["ai-agent", "llm", "context-window", "mcp"],
  },
  {
    slug: slug("llm"),
    term: { fr: "LLM", en: "LLM" },
    abbr: { fr: "Grand modèle de langage", en: "Large Language Model" },
    category: "ai",
    short: { fr: "Un LLM est un modèle d'IA entraîné sur d'immenses volumes de texte pour prédire et générer du langage naturel. Il sert de moteur à la plupart des chatbots et assistants actuels.", en: "An LLM is an AI model trained on massive amounts of text to predict and generate natural language. It powers most chatbots and assistants in use today." },
    body: {
      fr: [
        "Un LLM apprend des régularités statistiques du langage à partir de milliards de mots. Il ne comprend pas le sens comme un humain, il calcule le mot suivant le plus probable étant donné le contexte.",
        "GPT, Claude ou Gemini sont des LLM. Ils déterminent comment un site est résumé, cité ou recommandé quand un utilisateur pose une question à un assistant IA plutôt qu'à Google.",
      ],
      en: [
        "An LLM learns statistical patterns in language from billions of words. It doesn't understand meaning the way a human does, it computes the most probable next word given the context.",
        "GPT, Claude, and Gemini are LLMs. They determine how a website gets summarized, cited, or recommended when a user asks an AI assistant a question instead of searching Google.",
      ],
    },
    related: ["ai-agent", "generative-ai", "foundation-model", "hallucination"],
  },
  {
    slug: slug("generative-ai"),
    term: { fr: "IA générative", en: "Generative AI" },
    category: "ai",
    short: { fr: "L'IA générative désigne les systèmes capables de créer du texte, des images, du code ou du son originaux, plutôt que de simplement classer ou prédire des données existantes.", en: "Generative AI refers to systems that create original text, images, code, or audio, rather than simply classifying or predicting existing data." },
    body: {
      fr: [
        "Contrairement à l'IA classique qui trie ou prédit, l'IA générative produit un contenu nouveau à partir d'un prompt. Les LLM pour le texte, les modèles de diffusion pour l'image en sont les formes les plus connues.",
        "Elle a changé la recherche d'information. De plus en plus d'utilisateurs demandent une réponse générée plutôt qu'une liste de liens. Un site doit désormais être lisible aussi bien par un humain que par un modèle générateur de réponses.",
      ],
      en: [
        "Unlike classic AI that sorts or predicts, generative AI produces new content from a prompt. LLMs for text and diffusion models for images are its best known forms.",
        "It has changed how people search for information. More users ask for a generated answer instead of a list of links. A website now needs to be readable by both humans and the models generating those answers.",
      ],
    },
    related: ["llm", "ai-agent", "nlg", "machine-learning"],
  },
  {
    slug: slug("machine-learning"),
    term: { fr: "Apprentissage automatique", en: "Machine Learning" },
    category: "ai",
    short: { fr: "L'apprentissage automatique est une branche de l'IA où un système apprend des motifs à partir de données, sans être programmé explicitement pour chaque règle.", en: "Machine learning is a branch of AI where a system learns patterns from data instead of being explicitly programmed with each rule." },
    body: {
      fr: [
        "Un algorithme de machine learning s'entraîne sur des exemples et ajuste ses paramètres pour réduire ses erreurs. Une fois entraîné, il applique ces motifs à de nouvelles données jamais vues.",
        "Le machine learning est la base technique des LLM, des moteurs de recommandation et des filtres de recherche. Comprendre le principe aide à saisir pourquoi ces systèmes se trompent parfois de façon inattendue.",
      ],
      en: [
        "A machine learning algorithm trains on examples and adjusts its parameters to reduce errors. Once trained, it applies those patterns to new data it has never seen.",
        "Machine learning is the technical foundation of LLMs, recommendation engines, and search ranking. Understanding the principle helps explain why these systems sometimes fail in unexpected ways.",
      ],
    },
    related: ["llm", "generative-ai", "foundation-model", "inference"],
  },
  {
    slug: slug("rag"),
    term: { fr: "RAG", en: "RAG" },
    abbr: { fr: "Génération augmentée par récupération", en: "Retrieval-Augmented Generation" },
    category: "ai",
    short: { fr: "Le RAG associe un modèle de langage à une base de connaissances externe consultée en temps réel, pour ancrer ses réponses dans des sources vérifiables plutôt que dans sa seule mémoire.", en: "RAG pairs a language model with an external knowledge base queried in real time, so answers are grounded in specific sources instead of relying only on the model's memory." },
    body: {
      fr: [
        "Avant de répondre, le système récupère les passages les plus pertinents dans une base documentaire, souvent une base de données vectorielle, puis les fournit au modèle comme contexte. Le modèle génère alors sa réponse à partir de ces extraits.",
        "Le RAG réduit les hallucinations et permet de citer des sources vérifiables. C'est la technique derrière la plupart des assistants IA qui répondent avec des liens, et un contenu bien structuré augmente ses chances d'être récupéré.",
      ],
      en: [
        "Before answering, the system retrieves the most relevant passages from a document base, often a vector database, then feeds them to the model as context. The model generates its answer from those excerpts.",
        "RAG reduces hallucinations and allows answers to cite verifiable sources. It's the technique behind most AI assistants that respond with links, and well structured content has a better chance of being retrieved.",
      ],
    },
    related: ["vector-database", "hallucination", "vector-embedding", "llm"],
  },
  {
    slug: slug("hallucination"),
    term: { fr: "Hallucination", en: "Hallucination" },
    category: "ai",
    short: { fr: "Une hallucination désigne une réponse générée par une IA qui semble plausible mais qui est fausse, inventée ou non vérifiable.", en: "A hallucination is an AI generated answer that sounds plausible but is false, invented, or unverifiable." },
    body: {
      fr: [
        "Un modèle de langage génère du texte en prédisant le mot suivant le plus probable, pas en vérifiant des faits. Sans source fiable, il peut inventer un chiffre, une citation ou un nom avec la même assurance qu'une réponse correcte.",
        "Pour une marque, une hallucination peut attribuer une fausse information à votre entreprise. Un contenu clair, daté et structuré réduit ce risque en donnant au modèle une source fiable à citer.",
      ],
      en: [
        "A language model generates text by predicting the most probable next word, not by verifying facts. Without a reliable source, it can invent a number, a quote, or a name with the same confidence as a correct answer.",
        "For a brand, a hallucination can attach false information to your company. Clear, dated, well structured content reduces this risk by giving the model a reliable source to cite.",
      ],
    },
    related: ["rag", "llm", "ai-citation", "e-e-a-t"],
  },
  {
    slug: slug("prompt-engineering"),
    term: { fr: "Ingénierie de prompt", en: "Prompt Engineering" },
    category: "ai",
    short: { fr: "L'ingénierie de prompt est la pratique qui consiste à formuler des instructions précises pour orienter la réponse d'un modèle de langage vers le résultat voulu.", en: "Prompt engineering is the practice of crafting precise instructions to steer a language model's output toward the intended result." },
    body: {
      fr: [
        "Le choix des mots, l'ordre des instructions, les exemples fournis et le format demandé influencent directement la qualité d'une réponse générée. Un bon prompt réduit l'ambiguïté et limite les hallucinations.",
        "C'est une compétence transversale. Elle sert à configurer un agent IA, à interroger un assistant pour la recherche, ou à tester comment un contenu de site est résumé par un modèle.",
      ],
      en: [
        "Word choice, instruction order, provided examples, and the requested format all directly affect the quality of a generated answer. A good prompt reduces ambiguity and limits hallucinations.",
        "It's a cross cutting skill. It's used to configure an AI agent, to query an assistant for research, or to test how a website's content gets summarized by a model.",
      ],
    },
    related: ["llm", "ai-agent", "context-window", "hallucination"],
  },
  {
    slug: slug("mcp"),
    term: { fr: "MCP", en: "MCP" },
    abbr: { fr: "Protocole de contexte de modèle", en: "Model Context Protocol" },
    category: "ai",
    short: { fr: "Le MCP est un protocole ouvert qui standardise la façon dont un modèle de langage se connecte à des outils, des fichiers et des services externes.", en: "MCP is an open protocol that standardizes how a language model connects to external tools, files, and services." },
    body: {
      fr: [
        "Avant le MCP, chaque connexion entre une IA et un outil externe nécessitait une intégration sur mesure. Le protocole définit une interface commune pour que n'importe quel modèle compatible puisse appeler n'importe quel serveur compatible.",
        "Pour une entreprise, exposer ses données via un serveur MCP permet à des agents IA d'accéder à son catalogue, sa documentation ou ses API de façon fiable, sans développement spécifique pour chaque assistant.",
      ],
      en: [
        "Before MCP, every connection between an AI and an external tool required a custom integration. The protocol defines a shared interface so any compatible model can call any compatible server.",
        "For a company, exposing its data through an MCP server lets AI agents access its catalog, documentation, or APIs reliably, without custom development for each assistant.",
      ],
    },
    related: ["mcp-client", "mcp-server", "ai-agent", "ai-connector"],
  },
  {
    slug: slug("mcp-client"),
    term: { fr: "Client MCP", en: "MCP Client" },
    category: "ai",
    short: { fr: "Un client MCP est l'application ou l'agent IA qui se connecte à un serveur MCP pour utiliser les outils et données qu'il expose.", en: "An MCP client is the application or AI agent that connects to an MCP server to use the tools and data it exposes." },
    body: {
      fr: [
        "Le client MCP gère la connexion, envoie les requêtes de l'utilisateur ou de l'agent, et reçoit les réponses du serveur. Claude, un IDE ou un agent autonome peuvent tous jouer ce rôle.",
        "C'est la moitié demandeuse du protocole. Elle ne fournit pas de données, elle les consomme pour accomplir une tâche, comme rechercher une information ou déclencher une action.",
      ],
      en: [
        "The MCP client manages the connection, sends the user's or agent's requests, and receives the server's responses. Claude, an IDE, or an autonomous agent can all play this role.",
        "It's the requesting half of the protocol. It doesn't provide data, it consumes it to complete a task, such as looking up information or triggering an action.",
      ],
    },
    related: ["mcp", "mcp-server", "ai-agent"],
  },
  {
    slug: slug("mcp-server"),
    term: { fr: "Serveur MCP", en: "MCP Server" },
    category: "ai",
    short: { fr: "Un serveur MCP expose des données, des fichiers ou des outils d'une application à un modèle de langage, selon le protocole MCP.", en: "An MCP server exposes an application's data, files, or tools to a language model, following the MCP protocol." },
    body: {
      fr: [
        "Le serveur MCP déclare les actions disponibles (lire un fichier, interroger une base, appeler une API) et les rend accessibles à tout client MCP compatible. Il agit comme une passerelle contrôlée entre l'IA et le système.",
        "Une entreprise peut exposer son propre serveur MCP pour que les agents IA de ses clients accèdent à son catalogue produit ou à sa documentation technique de façon structurée et sécurisée.",
      ],
      en: [
        "The MCP server declares the available actions (reading a file, querying a database, calling an API) and makes them accessible to any compatible MCP client. It acts as a controlled gateway between the AI and the system.",
        "A company can expose its own MCP server so its customers' AI agents can access its product catalog or technical documentation in a structured, secure way.",
      ],
    },
    related: ["mcp", "mcp-client", "ai-connector"],
  },
  {
    slug: slug("nlp"),
    term: { fr: "NLP", en: "NLP" },
    abbr: { fr: "Traitement du langage naturel", en: "Natural Language Processing" },
    category: "ai",
    short: { fr: "Le NLP regroupe les techniques d'IA qui permettent à un ordinateur d'analyser, comprendre ou produire du langage humain.", en: "NLP covers the AI techniques that let a computer analyze, understand, or produce human language." },
    body: {
      fr: [
        "Le NLP inclut des tâches comme l'analyse grammaticale, la détection d'intention, la traduction ou l'extraction d'entités. Les LLM actuels s'appuient sur des décennies de recherche en NLP.",
        "Pour un site, le NLP est ce qui permet à un moteur de recherche ou à un assistant IA de comprendre qu'une question et une page de contenu parlent du même sujet, même avec des mots différents.",
      ],
      en: [
        "NLP includes tasks like grammatical parsing, intent detection, translation, and entity extraction. Today's LLMs build on decades of NLP research.",
        "For a website, NLP is what lets a search engine or an AI assistant understand that a question and a content page are about the same topic, even when the wording differs.",
      ],
    },
    related: ["nlg", "llm", "semantic-search", "machine-learning"],
  },
  {
    slug: slug("nlg"),
    term: { fr: "NLG", en: "NLG" },
    abbr: { fr: "Génération de langage naturel", en: "Natural Language Generation" },
    category: "ai",
    short: { fr: "La NLG est la sous-discipline du NLP qui produit du texte en langage naturel à partir de données structurées ou d'une intention donnée.", en: "NLG is the NLP subfield that produces natural language text from structured data or a given intent." },
    body: {
      fr: [
        "La NLG transforme une entrée, des données, un plan, un prompt, en phrases lisibles par un humain. C'est la partie génération d'un LLM, par opposition à la partie compréhension.",
        "Elle est utilisée pour générer des résumés automatiques, des réponses de chatbot, ou des descriptions produit. Un modèle de génération peut aussi transformer le contenu d'un site en réponse conversationnelle.",
      ],
      en: [
        "NLG turns an input, data, a plan, a prompt, into sentences a human can read. It's the generation half of an LLM's work, as opposed to the comprehension half.",
        "It's used to produce automatic summaries, chatbot replies, or product descriptions. A generative model can also turn a website's content into a conversational answer.",
      ],
    },
    related: ["nlp", "generative-ai", "llm"],
  },
  {
    slug: slug("vector-embedding"),
    term: { fr: "Plongement vectoriel", en: "Vector Embedding" },
    category: "ai",
    short: { fr: "Un plongement vectoriel est une représentation numérique d'un mot, d'une phrase ou d'une image sous forme de liste de nombres, où la proximité mathématique traduit une proximité de sens.", en: "A vector embedding is a numeric representation of a word, sentence, or image as a list of numbers, where mathematical closeness reflects closeness in meaning." },
    body: {
      fr: [
        "Un modèle convertit un texte en un vecteur à plusieurs centaines de dimensions. Deux phrases au sens proche produisent des vecteurs proches, même si elles n'utilisent aucun mot commun.",
        "Cette technique permet la recherche sémantique, retrouver un contenu pertinent par le sens plutôt que par la correspondance exacte de mots-clés. Elle est au cœur du RAG et des bases de données vectorielles.",
      ],
      en: [
        "A model converts a piece of text into a vector with several hundred dimensions. Two sentences with similar meaning produce close vectors, even if they share no common words.",
        "This technique enables semantic search, finding relevant content by meaning rather than exact keyword match. It sits at the core of RAG and vector databases.",
      ],
    },
    related: ["vector-database", "semantic-search", "rag", "nlp"],
  },
  {
    slug: slug("vector-database"),
    term: { fr: "Base de données vectorielle", en: "Vector Database" },
    category: "ai",
    short: { fr: "Une base de données vectorielle stocke des plongements vectoriels et permet de retrouver rapidement les contenus les plus proches en sens d'une requête donnée.", en: "A vector database stores vector embeddings and quickly retrieves the content closest in meaning to a given query." },
    body: {
      fr: [
        "Contrairement à une base de données classique qui cherche des correspondances exactes, une base vectorielle calcule une distance entre vecteurs pour trouver les résultats les plus similaires sémantiquement.",
        "C'est le composant de stockage typique d'un système RAG. Un site qui veut être bien récupéré par un agent IA a intérêt à structurer son contenu pour qu'il s'indexe proprement dans ce type de base.",
      ],
      en: [
        "Unlike a classic database that looks for exact matches, a vector database computes distance between vectors to find the results most similar in meaning.",
        "It's the typical storage component of a RAG system. A website that wants to be well retrieved by an AI agent benefits from structuring its content so it indexes cleanly in this kind of database.",
      ],
    },
    related: ["vector-embedding", "rag", "semantic-search"],
  },
  {
    slug: slug("token"),
    term: { fr: "Token", en: "Token" },
    category: "ai",
    short: { fr: "Un token est l'unité de base qu'un modèle de langage lit et génère, souvent un mot, une partie de mot ou un signe de ponctuation.", en: "A token is the basic unit a language model reads and generates, often a word, part of a word, or a punctuation mark." },
    body: {
      fr: [
        "Avant de traiter un texte, un modèle le découpe en tokens. En anglais, un mot correspond en moyenne à environ 1,3 token, un peu plus en français à cause des accents et des mots composés.",
        "Le nombre de tokens détermine le coût et la vitesse d'une requête, et limite la taille du contexte qu'un modèle peut traiter en une fois, voir fenêtre de contexte.",
      ],
      en: [
        "Before processing a text, a model splits it into tokens. In English, a word corresponds on average to about 1.3 tokens, slightly more in languages with accents or compound words.",
        "The number of tokens determines the cost and speed of a request, and limits how much context a model can process at once, see context window.",
      ],
    },
    related: ["context-window", "llm", "inference"],
  },
  {
    slug: slug("context-window"),
    term: { fr: "Fenêtre de contexte", en: "Context Window" },
    category: "ai",
    short: { fr: "La fenêtre de contexte est la quantité maximale de texte, mesurée en tokens, qu'un modèle de langage peut prendre en compte en une seule requête.", en: "The context window is the maximum amount of text, measured in tokens, a language model can take into account in a single request." },
    body: {
      fr: [
        "Tout ce qui dépasse cette limite est tronqué ou ignoré. Une fenêtre plus large permet de fournir plus de documents, un historique de conversation plus long, ou un contenu de site plus complet en une seule fois.",
        "Pour un agent IA qui lit un site afin de répondre à une question, une page trop longue ou mal structurée risque de dépasser cette limite ou de diluer les passages réellement pertinents.",
      ],
      en: [
        "Anything beyond that limit is truncated or ignored. A larger window allows more documents, a longer conversation history, or more complete website content to be provided at once.",
        "For an AI agent reading a site to answer a question, a page that's too long or poorly structured risks exceeding this limit or diluting the passages that actually matter.",
      ],
    },
    related: ["token", "llm", "inference"],
  },
  {
    slug: slug("inference"),
    term: { fr: "Inférence", en: "Inference" },
    category: "ai",
    short: { fr: "L'inférence est le moment où un modèle déjà entraîné génère une réponse à partir d'une nouvelle entrée, par opposition à la phase d'entraînement.", en: "Inference is the moment a trained model generates an answer from new input, as opposed to the training phase." },
    body: {
      fr: [
        "L'entraînement fixe les paramètres du modèle une fois pour toutes, ou presque. L'inférence est chaque appel suivant, par exemple une question posée à un chatbot, qui utilise ces paramètres sans les modifier.",
        "La vitesse et le coût d'inférence sont ce que paie une entreprise à chaque utilisation d'un modèle, contrairement au coût d'entraînement, payé une seule fois par le fournisseur du modèle.",
      ],
      en: [
        "Training sets the model's parameters once, or nearly so. Inference is every following call, such as a question asked to a chatbot, that uses those parameters without changing them.",
        "Inference speed and cost are what a company pays each time it uses a model, unlike training cost, which the model provider pays once.",
      ],
    },
    related: ["llm", "foundation-model", "fine-tuning"],
  },
  {
    slug: slug("foundation-model"),
    term: { fr: "Modèle de fondation", en: "Foundation Model" },
    category: "ai",
    short: { fr: "Un modèle de fondation est un grand modèle entraîné sur des données massives et généralistes, conçu pour être adapté ensuite à de nombreuses tâches spécifiques.", en: "A foundation model is a large model trained on massive, general purpose data, designed to later be adapted to many specific tasks." },
    body: {
      fr: [
        "GPT, Claude ou Gemini sont des modèles de fondation. Leur entraînement initial coûte des millions d'euros et nécessite d'immenses volumes de texte, mais ce coût est mutualisé sur tous leurs usages ultérieurs.",
        "Une entreprise n'entraîne presque jamais son propre modèle de fondation. Elle adapte un modèle existant par prompt engineering, RAG ou fine-tuning selon ses besoins.",
      ],
      en: [
        "GPT, Claude, and Gemini are foundation models. Their initial training costs millions and requires huge volumes of text, but that cost is shared across every later use.",
        "A company almost never trains its own foundation model. It adapts an existing one through prompt engineering, RAG, or fine-tuning depending on its needs.",
      ],
    },
    related: ["llm", "fine-tuning", "inference", "generative-ai"],
  },
  {
    slug: slug("fine-tuning"),
    term: { fr: "Fine-tuning", en: "Fine-tuning" },
    category: "ai",
    short: { fr: "Le fine-tuning consiste à poursuivre l'entraînement d'un modèle de fondation sur un jeu de données spécifique, pour le spécialiser sur une tâche ou un ton précis.", en: "Fine-tuning means continuing the training of a foundation model on a specific dataset, to specialize it for a particular task or tone." },
    body: {
      fr: [
        "Plutôt que de repartir de zéro, le fine-tuning ajuste les paramètres d'un modèle déjà entraîné avec un nombre d'exemples bien plus réduit. Le modèle garde ses connaissances générales et gagne une compétence ciblée.",
        "Pour la plupart des entreprises, le RAG suffit et coûte moins cher que le fine-tuning. Ce dernier devient utile pour fixer un style de réponse précis ou une tâche répétitive à grande échelle.",
      ],
      en: [
        "Rather than starting from scratch, fine-tuning adjusts an already trained model's parameters using a much smaller set of examples. The model keeps its general knowledge and gains a targeted skill.",
        "For most companies, RAG is enough and costs less than fine-tuning. Fine-tuning becomes useful for locking in a precise response style or a repetitive task at scale.",
      ],
    },
    related: ["foundation-model", "llm", "inference"],
  },
  {
    slug: slug("agentic-search"),
    term: { fr: "Recherche agentique", en: "Agentic Search" },
    category: "ai",
    short: { fr: "La recherche agentique désigne un agent IA qui décompose une question en plusieurs recherches successives et affine sa réponse au lieu de renvoyer une seule liste de résultats.", en: "Agentic search is a search mode where an AI agent breaks down a question into several searches and refines its answer, instead of returning a single list of results." },
    body: {
      fr: [
        "Au lieu d'une requête unique, l'agent planifie une suite d'étapes, reformuler la question, consulter plusieurs sources, comparer les réponses, parfois reformuler à nouveau si le résultat est insuffisant. Voir aussi query fan-out.",
        "Pour un site, cela signifie être consulté plusieurs fois sous des angles différents lors d'une même recherche utilisateur. Un contenu structuré et précis a plus de chances d'être retenu à chaque passage de l'agent.",
      ],
      en: [
        "Instead of a single query, the agent plans a sequence of steps, rephrase the question, check several sources, compare answers, sometimes rephrase again if the result falls short. See also query fan-out.",
        "For a website, this means being consulted several times from different angles during a single user search. Structured, precise content has a better chance of being picked up at each pass the agent makes.",
      ],
    },
    related: ["ai-agent", "query-fan-out", "semantic-search", "answer-engine"],
  },
  {
    slug: slug("ai-connector"),
    term: { fr: "Connecteur IA", en: "AI Connector" },
    category: "ai",
    short: { fr: "Un connecteur IA est le composant technique qui relie un modèle ou un agent à une source de données ou à un service externe, par exemple via MCP ou une API.", en: "An AI connector is the technical component that links a model or agent to a data source or external service, for example through MCP or an API." },
    body: {
      fr: [
        "Un connecteur traduit les requêtes de l'IA dans le format attendu par le système cible, et renvoie la réponse dans un format que le modèle peut exploiter. Il peut s'agir d'un connecteur natif fourni par une plateforme ou d'un serveur MCP développé sur mesure.",
        "Pour une entreprise, disposer d'un connecteur IA vers son catalogue ou sa base de connaissances permet aux assistants de ses clients d'accéder à des informations à jour plutôt qu'à une version figée indexée par un moteur de recherche.",
      ],
      en: [
        "A connector translates the AI's requests into the format expected by the target system, and returns the response in a format the model can use. It can be a native connector provided by a platform or a custom built MCP server.",
        "For a company, having an AI connector to its catalog or knowledge base lets its customers' assistants access up to date information instead of a frozen version indexed by a search engine.",
      ],
    },
    related: ["mcp", "mcp-server", "ai-agent"],
  },
  {
    slug: slug("geo"),
    term: { fr: "GEO", en: "GEO" },
    abbr: { fr: "Optimisation pour les moteurs génératifs", en: "Generative Engine Optimization" },
    category: "geo",
    short: { fr: "Ensemble de pratiques qui rendent un contenu compréhensible et citable par les moteurs génératifs (ChatGPT, Perplexity, Google AI Overview).", en: "Set of practices that make content understandable and citable by generative engines (ChatGPT, Perplexity, Google AI Overview)." },
    body: {
      fr: [
        "Le GEO adapte la structure et le langage d'un contenu pour qu'un modèle de langage puisse l'extraire, le résumer et le citer dans une réponse. Il complète le SEO classique, pensé pour les moteurs de recherche traditionnels et leurs liens bleus.",
        "Pour un site d'entreprise, le GEO conditionne la visibilité future. Une partie croissante des recherches se termine dans une réponse IA, sans clic vers le site source.",
      ],
      en: [
        "GEO adapts a content's structure and language so a language model can extract, summarize, and cite it in an answer. It complements classic SEO, built for traditional search engines and blue links.",
        "For a business site, GEO shapes future visibility. A growing share of searches end in an AI answer, with no click to the source site.",
      ],
    },
    related: ["aeo", "llmo", "ai-overview"],
  },
  {
    slug: slug("aeo"),
    term: { fr: "AEO", en: "AEO" },
    abbr: { fr: "Optimisation pour les moteurs de réponse", en: "Answer Engine Optimization" },
    category: "geo",
    short: { fr: "Discipline qui optimise un contenu pour qu'il devienne la réponse directe donnée par un assistant IA ou un moteur de réponse, plutôt qu'un simple résultat de recherche.", en: "Discipline that optimizes content to become the direct answer given by an AI assistant or answer engine, rather than a simple search result." },
    body: {
      fr: [
        "L'AEO cible le format question-réponse: structurer un contenu pour qu'il fournisse une réponse claire et autonome, extractible sans contexte supplémentaire. Elle recoupe le GEO mais insiste sur le mécanisme de réponse plutôt que sur le moteur génératif lui-même.",
        "Pour une agence ou une PME, l'AEO se traduit par des pages FAQ, des définitions nettes et des réponses en une ou deux phrases, prêtes à être reprises telles quelles.",
      ],
      en: [
        "AEO targets the question-answer format: structuring content to provide a clear, self-contained answer that can be extracted without extra context. It overlaps with GEO but focuses on the answer mechanism rather than the generative engine itself.",
        "For an agency or small business, AEO means FAQ pages, sharp definitions, and one- or two-sentence answers ready to be reused as is.",
      ],
    },
    related: ["geo", "answer-engine", "featured-snippets", "people-also-ask"],
  },
  {
    slug: slug("llmo"),
    term: { fr: "LLMO", en: "LLMO" },
    abbr: { fr: "Optimisation pour les grands modèles de langage", en: "Large Language Model Optimization" },
    category: "geo",
    short: { fr: "Pratiques qui augmentent les chances qu'un grand modèle de langage retienne, comprenne et restitue correctement les informations d'une marque.", en: "Practices that increase the odds a large language model retains, understands, and correctly restates a brand's information." },
    body: {
      fr: [
        "Le LLMO couvre tout ce qui influence la représentation d'une marque dans un modèle: contenu public cohérent, données structurées, présence sur des sources fiables citées en entraînement ou en récupération.",
        "Contrairement au GEO, centré sur une réponse ponctuelle, le LLMO vise la mémoire de long terme du modèle: comment il décrit l'entreprise même sans recherche en temps réel.",
      ],
      en: [
        "LLMO covers everything that shapes how a model represents a brand: consistent public content, structured data, and presence on reliable sources cited during training or retrieval.",
        "Unlike GEO, focused on a single answer, LLMO targets the model's long-term memory: how it describes the company even without a real-time search.",
      ],
    },
    related: ["geo", "llm", "fine-tuning", "knowledge-graph"],
  },
  {
    slug: slug("ai-overview"),
    term: { fr: "Aperçu IA (AI Overview)", en: "AI Overview" },
    category: "geo",
    short: { fr: "Résumé généré par IA que Google affiche en haut des résultats de recherche, synthétisant plusieurs sources avant les liens classiques.", en: "AI-generated summary Google shows at the top of search results, synthesizing multiple sources before the classic links." },
    body: {
      fr: [
        "L'AI Overview répond directement à la requête en s'appuyant sur plusieurs pages web, citées en sources sous forme de liens. Il remplace la lecture de plusieurs résultats par une synthèse unique.",
        "Être cité dans un AI Overview apporte de la visibilité mais réduit souvent le clic vers le site. Un contenu clair et bien structuré augmente les chances d'y figurer.",
      ],
      en: [
        "AI Overview answers a query directly by drawing on several web pages, cited as sources with links. It replaces reading multiple results with a single synthesis.",
        "Being cited in an AI Overview brings visibility but often reduces clicks to the site. Clear, well-structured content increases the odds of appearing there.",
      ],
    },
    related: ["sge", "zero-click-search", "featured-snippets", "geo"],
  },
  {
    slug: slug("ai-mode"),
    term: { fr: "Mode IA", en: "AI Mode" },
    category: "geo",
    short: { fr: "Mode de recherche Google entièrement conversationnel, qui remplace la page de résultats classique par un dialogue avec relances et réponses synthétisées.", en: "Fully conversational Google search mode that replaces the classic results page with a dialogue of follow-up questions and synthesized answers." },
    body: {
      fr: [
        "Le mode IA permet à l'utilisateur de poser une question, d'obtenir une réponse construite à partir de plusieurs sources, puis d'affiner par des questions de suivi dans le même fil. La page de résultats traditionnelle disparaît de l'échange.",
        "Pour un site, cela renforce l'enjeu du GEO: sans lien bleu à cliquer, seule une citation ou une mention dans la réponse maintient la visibilité de la marque.",
      ],
      en: [
        "AI Mode lets a user ask a question, receive an answer built from several sources, then refine it with follow-up questions in the same thread. The traditional results page disappears from the exchange.",
        "For a website, this raises the stakes of GEO: with no blue link to click, only a citation or mention inside the answer keeps the brand visible.",
      ],
    },
    related: ["ai-overview", "conversational-search", "sge", "query-fan-out"],
  },
  {
    slug: slug("sge"),
    term: { fr: "SGE", en: "SGE" },
    abbr: { fr: "Expérience de recherche générative", en: "Search Generative Experience" },
    category: "geo",
    short: { fr: "Ancien nom du dispositif expérimental de Google intégrant des réponses générées par IA dans les résultats de recherche, devenu AI Overview puis mode IA.", en: "Former name of Google's experimental feature integrating AI-generated answers into search results, later renamed AI Overview and then AI Mode." },
    body: {
      fr: [
        "Lancé en 2023 comme test, le SGE ajoutait un panneau de réponse générative au-dessus des résultats classiques. Google l'a ensuite scindé en deux produits stables: AI Overview pour les résumés courts, mode IA pour l'expérience conversationnelle complète.",
        "Le terme reste utilisé par habitude dans les articles et outils SEO plus anciens, même si le produit a changé de nom.",
      ],
      en: [
        "Launched in 2023 as a test, SGE added a generative answer panel above classic results. Google later split it into two stable products: AI Overview for short summaries, AI Mode for the full conversational experience.",
        "The term is still used out of habit in older SEO articles and tools, even though the product has been renamed.",
      ],
    },
    related: ["ai-overview", "ai-mode", "geo"],
  },
  {
    slug: slug("query-fan-out"),
    term: { fr: "Éclatement de requête", en: "Query Fan-Out" },
    category: "geo",
    short: { fr: "Technique par laquelle un moteur génératif décompose une question en plusieurs sous-requêtes envoyées en parallèle pour construire une réponse complète.", en: "Technique by which a generative engine breaks a question into several sub-queries sent in parallel to build a complete answer." },
    body: {
      fr: [
        "Plutôt que traiter une requête comme un seul terme de recherche, le moteur génère des variantes et des angles complémentaires, interroge plusieurs sources pour chacun, puis synthétise l'ensemble dans une réponse unique.",
        "Un contenu qui couvre un sujet sous plusieurs angles a plus de chances d'être capté par au moins une de ces sous-requêtes, d'où l'intérêt de traiter un sujet en profondeur plutôt qu'un seul mot-clé isolé.",
      ],
      en: [
        "Rather than treating a query as one search term, the engine generates related variants and angles, queries several sources for each, then synthesizes the results into a single answer.",
        "Content that covers a topic from several angles has better odds of being picked up by at least one of these sub-queries, which favors depth over targeting a single isolated keyword.",
      ],
    },
    related: ["geo", "ai-mode", "semantic-search", "topic-cluster"],
  },
  {
    slug: slug("answer-engine"),
    term: { fr: "Moteur de réponse", en: "Answer Engine" },
    category: "geo",
    short: { fr: "Système qui répond directement à une question par une réponse synthétisée, plutôt qu'en listant des pages web à consulter.", en: "System that answers a question directly with a synthesized response, rather than listing web pages to visit." },
    body: {
      fr: [
        "ChatGPT, Perplexity ou l'AI Overview de Google fonctionnent comme des moteurs de réponse: ils lisent, résument et citent des sources pour produire un texte final, à la différence d'un moteur de recherche classique qui renvoie une liste de liens.",
        "Pour une marque, apparaître dans la réponse compte désormais autant, sinon plus, qu'apparaître en première position d'une page de résultats.",
      ],
      en: [
        "ChatGPT, Perplexity, and Google's AI Overview work as answer engines: they read, summarize, and cite sources to produce a final text, unlike a classic search engine that returns a list of links.",
        "For a brand, appearing inside the answer now matters as much as, if not more than, ranking first on a results page.",
      ],
    },
    related: ["aeo", "ai-overview", "geo", "ai-citation"],
  },
  {
    slug: slug("conversational-search"),
    term: { fr: "Recherche conversationnelle", en: "Conversational Search" },
    category: "geo",
    short: { fr: "Mode de recherche sous forme de dialogue en langage naturel, avec mémoire du contexte et possibilité de questions de suivi.", en: "Search mode conducted as a natural-language dialogue, with context memory and the option to ask follow-up questions." },
    body: {
      fr: [
        "Au lieu de reformuler une requête depuis zéro, l'utilisateur affine sa demande dans un même fil: le moteur se souvient des échanges précédents et ajuste sa réponse. C'est le mode d'interaction par défaut des assistants IA.",
        "Cette continuité change la façon de structurer le contenu: il doit répondre à des questions de suivi prévisibles, pas seulement à une requête isolée.",
      ],
      en: [
        "Instead of rewriting a query from scratch, the user refines their request within the same thread: the engine remembers previous exchanges and adjusts its answer. This is the default interaction mode of AI assistants.",
        "This continuity changes how content should be structured: it needs to answer predictable follow-up questions, not just a single isolated query.",
      ],
    },
    related: ["ai-mode", "answer-engine", "query-fan-out"],
  },
  {
    slug: slug("inline-citation"),
    term: { fr: "Citation en ligne", en: "Inline Citation" },
    category: "geo",
    short: { fr: "Lien ou mention de source placé directement à l'intérieur d'une réponse générée par IA, à côté de l'affirmation qu'il justifie.", en: "Link or source mention placed directly inside an AI-generated answer, next to the claim it supports." },
    body: {
      fr: [
        "Contrairement à une liste de sources en bas de page, la citation en ligne apparaît au fil du texte généré, souvent sous forme de petit numéro ou de lien cliquable rattaché à une phrase précise.",
        "Obtenir une citation en ligne exige un contenu factuel, daté et facile à isoler phrase par phrase: c'est l'unité que le modèle reprend telle quelle.",
      ],
      en: [
        "Unlike a source list at the bottom of a page, an inline citation appears within the generated text itself, often as a small number or clickable link attached to a specific sentence.",
        "Earning an inline citation requires factual, dated content that is easy to isolate sentence by sentence: that is the unit the model reuses as is.",
      ],
    },
    related: ["ai-citation", "extractable-snippet", "answer-engine"],
  },
  {
    slug: slug("zero-click-search"),
    term: { fr: "Recherche sans clic", en: "Zero-Click Search" },
    category: "geo",
    short: { fr: "Recherche dont l'utilisateur obtient sa réponse directement sur la page de résultats ou dans une réponse IA, sans jamais cliquer vers un site.", en: "Search where the user gets their answer directly on the results page or in an AI answer, without ever clicking through to a site." },
    body: {
      fr: [
        "Featured snippets, panneaux de connaissance et AI Overview répondent souvent assez précisément pour que l'utilisateur n'ait plus besoin de visiter la page source. Le clic, mesure historique du trafic organique, devient optionnel.",
        "Pour un site d'entreprise, cela déplace la valeur de la visite vers la citation: être mentionné et associé à la bonne réponse compte même sans clic généré.",
      ],
      en: [
        "Featured snippets, knowledge panels, and AI Overview often answer precisely enough that the user no longer needs to visit the source page. The click, the historic measure of organic traffic, becomes optional.",
        "For a business site, this shifts value from the visit to the citation: being mentioned and associated with the right answer matters even without a generated click.",
      ],
    },
    related: ["ai-overview", "featured-snippets", "share-of-voice"],
  },
  {
    slug: slug("ai-citation"),
    term: { fr: "Citation IA", en: "AI Citation" },
    category: "geo",
    short: { fr: "Mention d'une marque, d'une page ou d'une donnée par un assistant IA dans sa réponse, avec ou sans lien cliquable.", en: "Mention of a brand, page, or data point by an AI assistant within its answer, with or without a clickable link." },
    body: {
      fr: [
        "La citation IA peut prendre la forme d'un lien direct vers le site source, ou d'une simple mention du nom de la marque sans lien. Les deux formes contribuent à la visibilité et à la crédibilité perçue.",
        "Suivre ses citations IA (par outil ou manuellement) devient un indicateur de performance complémentaire au trafic organique classique.",
      ],
      en: [
        "An AI citation can take the form of a direct link to the source site, or a simple mention of the brand name with no link. Both forms contribute to visibility and perceived credibility.",
        "Tracking AI citations, by tool or manually, becomes a performance metric that complements classic organic traffic.",
      ],
    },
    related: ["inline-citation", "share-of-voice", "ai-referral-traffic"],
  },
  {
    slug: slug("share-of-voice"),
    term: { fr: "Part de voix", en: "Share of Voice" },
    category: "geo",
    short: { fr: "Proportion des mentions ou citations qu'obtient une marque face à ses concurrents sur un sujet donné, dans les moteurs de recherche ou les réponses IA.", en: "Proportion of mentions or citations a brand gets compared to competitors on a given topic, across search engines or AI answers." },
    body: {
      fr: [
        "En GEO, la part de voix se mesure en comptant combien de fois une marque apparaît dans les réponses générées pour un ensemble de requêtes types, comparé aux concurrents cités sur les mêmes sujets.",
        "C'est un indicateur relatif: une progression n'a de sens que rapportée à la présence des concurrents directs sur les mêmes requêtes.",
      ],
      en: [
        "In GEO, share of voice is measured by counting how often a brand appears in generated answers for a set of typical queries, compared to competitors cited on the same topics.",
        "It is a relative metric: growth only makes sense when measured against direct competitors' presence on the same queries.",
      ],
    },
    related: ["ai-citation", "ai-referral-traffic", "domain-authority"],
  },
  {
    slug: slug("ai-referral-traffic"),
    term: { fr: "Trafic de référence IA", en: "AI Referral Traffic" },
    category: "geo",
    short: { fr: "Visiteurs arrivant sur un site via un lien cliqué dans un assistant IA (ChatGPT, Perplexity, Copilot) plutôt que via un moteur de recherche classique.", en: "Visitors arriving on a site through a link clicked inside an AI assistant (ChatGPT, Perplexity, Copilot) rather than a classic search engine." },
    body: {
      fr: [
        "Les outils d'analytics identifient ce trafic par la source (chat.openai.com, perplexity.ai...) dans les rapports de référents. Il reste faible en volume comparé au trafic organique mais progresse rapidement.",
        "Ce trafic tend à convertir mieux: l'utilisateur arrive après avoir déjà obtenu une réponse contextualisée, sa demande est plus qualifiée.",
      ],
      en: [
        "Analytics tools identify this traffic by source (chat.openai.com, perplexity.ai...) in referrer reports. It remains small in volume compared to organic traffic but is growing quickly.",
        "This traffic tends to convert better: the user arrives after already receiving a contextualized answer, so their intent is more qualified.",
      ],
    },
    related: ["share-of-voice", "zero-click-search", "conversion"],
  },
  {
    slug: slug("semantic-search"),
    term: { fr: "Recherche sémantique", en: "Semantic Search" },
    category: "geo",
    short: { fr: "Recherche qui comprend le sens et l'intention d'une requête plutôt que de faire correspondre des mots-clés exacts.", en: "Search that understands the meaning and intent behind a query rather than matching exact keywords." },
    body: {
      fr: [
        "Grâce aux vecteurs d'embedding, un moteur sémantique rapproche une requête de contenus proches en sens, même sans mot commun. 'Comment faire venir plus de clients' peut ainsi remonter une page sur l'acquisition.",
        "Cette évolution réduit l'intérêt du bourrage de mots-clés: mieux vaut couvrir un sujet avec des synonymes et un vocabulaire naturel qu'un terme répété.",
      ],
      en: [
        "Using embedding vectors, a semantic engine matches a query to content that is close in meaning, even without a shared word. 'How to get more customers' can surface a page about acquisition.",
        "This shift reduces the value of keyword stuffing: covering a topic with synonyms and natural language works better than repeating a single term.",
      ],
    },
    related: ["vector-embedding", "query-fan-out", "keyword-stuffing"],
  },
  {
    slug: slug("agentic-aeo"),
    term: { fr: "AEO agentique", en: "Agentic AEO" },
    category: "geo",
    short: { fr: "Optimisation d'un contenu pour qu'il soit exploitable non seulement par un assistant conversationnel, mais aussi par un agent IA autonome qui agit à la place de l'utilisateur.", en: "Content optimization aimed not only at conversational assistants, but at autonomous AI agents that act on the user's behalf." },
    body: {
      fr: [
        "Un agent IA ne se contente pas de répondre: il peut comparer des offres, remplir un formulaire ou déclencher une réservation. L'AEO agentique demande des données structurées et des actions claires (prix, disponibilité, contact) que l'agent peut lire et exécuter sans ambiguïté.",
        "Pour un site marchand ou de service, cela veut dire des informations fiables et à jour dans des formats machine-lisibles, pas seulement dans un texte destiné à un humain.",
      ],
      en: [
        "An AI agent does not just answer: it can compare offers, fill out a form, or trigger a booking. Agentic AEO requires structured data and clear actions (price, availability, contact) that the agent can read and execute without ambiguity.",
        "For a service or ecommerce site, this means reliable, up-to-date information in machine-readable formats, not only in text written for a human reader.",
      ],
    },
    related: ["agent-economy", "ai-agent", "mcp", "structured-data"],
  },
  {
    slug: slug("agent-economy"),
    term: { fr: "Économie des agents", en: "Agent Economy" },
    category: "geo",
    short: { fr: "Économie émergente où des agents IA autonomes recherchent, comparent et achètent au nom des utilisateurs, réduisant le rôle direct de l'humain dans certaines décisions.", en: "Emerging economy where autonomous AI agents search, compare, and buy on behalf of users, reducing the human's direct role in some decisions." },
    body: {
      fr: [
        "Dans ce modèle, un agent peut réserver un billet, choisir un prestataire ou remplir un panier selon des critères donnés par l'utilisateur, sans que celui-ci consulte chaque site un par un.",
        "Un site pensé pour l'économie des agents expose ses informations clés de façon structurée et stable, car c'est un programme, pas un humain, qui les lit en premier.",
      ],
      en: [
        "In this model, an agent can book a ticket, choose a provider, or fill a cart based on criteria set by the user, without the user checking each site one by one.",
        "A site built for the agent economy exposes its key information in a structured, stable way, because a program, not a human, reads it first.",
      ],
    },
    related: ["agentic-aeo", "ai-agent", "mcp-server"],
  },
  {
    slug: slug("extractable-snippet"),
    term: { fr: "Extrait extractible", en: "Extractable Snippet" },
    category: "geo",
    short: { fr: "Passage de contenu rédigé pour être isolé et repris tel quel par un moteur de réponse, sans perdre son sens hors contexte.", en: "Piece of content written to be isolated and reused as is by an answer engine, without losing its meaning out of context." },
    body: {
      fr: [
        "Une phrase ou un court paragraphe autonome, avec sujet et verbe explicites, se prête mieux à l'extraction qu'une phrase qui dépend d'un paragraphe précédent pour se comprendre.",
        "Rédiger des définitions et des réponses courtes en début de section augmente les chances qu'un moteur en extraie un passage propre.",
      ],
      en: [
        "A self-contained sentence or short paragraph, with an explicit subject and verb, lends itself better to extraction than a sentence that depends on a previous paragraph to make sense.",
        "Writing definitions and short answers at the start of a section increases the odds that an engine will extract a clean passage.",
      ],
    },
    related: ["inline-citation", "featured-snippets", "aeo"],
  },
  {
    slug: slug("llms-txt"),
    term: { fr: "llms.txt", en: "llms.txt" },
    category: "geo",
    short: { fr: "Fichier texte à la racine d'un site qui liste ses pages clés en langage simple, destiné à guider les modèles de langage plutôt que les robots d'indexation classiques.", en: "Text file at a site's root that lists its key pages in plain language, meant to guide language models rather than classic indexing bots." },
    body: {
      fr: [
        "Sur le modèle de robots.txt, llms.txt propose une liste structurée de liens et de descriptions courtes, en Markdown, pour faciliter la lecture d'un site par un modèle de langage lors d'une recherche ou d'une génération de réponse.",
        "L'adoption reste inégale et aucun moteur majeur ne garantit son utilisation, mais le fichier coûte peu à mettre en place et clarifie la structure du site.",
      ],
      en: [
        "Modeled on robots.txt, llms.txt offers a structured list of links and short descriptions, in Markdown, to help a language model read a site during a search or an answer generation.",
        "Adoption remains uneven and no major engine guarantees it will use the file, but it costs little to set up and clarifies the site's structure.",
      ],
    },
    related: ["robots-txt", "sitemap-xml", "geo", "llm"],
  },
  {
    slug: slug("knowledge-graph"),
    term: { fr: "Graphe de connaissances", en: "Knowledge Graph" },
    category: "geo",
    short: { fr: "Base de données qui relie des entités (personnes, entreprises, lieux) entre elles par des relations explicites, utilisée par les moteurs pour comprendre le contexte d'une requête.", en: "Database that links entities (people, companies, places) to each other through explicit relationships, used by engines to understand a query's context." },
    body: {
      fr: [
        "Google associe une entreprise à son graphe de connaissances via des signaux cohérents: nom, adresse, site officiel, réseaux sociaux, mentions sur des sources tierces fiables. Cela alimente le panneau de connaissance affiché en recherche.",
        "Un graphe de connaissances propre aide aussi les modèles de langage à désambiguïser une marque, condition préalable pour qu'ils la citent correctement.",
      ],
      en: [
        "Google links a company to its knowledge graph through consistent signals: name, address, official site, social profiles, mentions on reliable third-party sources. This feeds the knowledge panel shown in search.",
        "A clean knowledge graph also helps language models disambiguate a brand, a prerequisite for citing it correctly.",
      ],
    },
    related: ["structured-data", "schema-markup", "e-e-a-t", "topical-authority"],
  },
  {
    slug: slug("seo"),
    term: { fr: "SEO", en: "SEO" },
    abbr: { fr: "Optimisation pour les moteurs de recherche", en: "Search Engine Optimization" },
    category: "seo",
    short: { fr: "Le SEO regroupe les techniques qui améliorent la visibilité d'un site dans les résultats de recherche naturels. L'objectif : plus de trafic qualifié, sans payer pour chaque clic.", en: "SEO covers the techniques that improve a site's visibility in organic search results. The goal: more qualified traffic, without paying for every click." },
    body: {
      fr: [
        "Le référencement naturel combine trois leviers : le technique (vitesse, indexation, structure), le contenu (mots-clés, intention de recherche) et l'autorité (backlinks, réputation). Google évalue ces signaux pour classer les pages.",
        "Pour un site professionnel, le SEO reste le canal le moins cher sur la durée. Un site bien positionné continue de générer des visites des mois après la publication, contrairement à une campagne publicitaire qui s'arrête net.",
      ],
      en: [
        "Organic search optimization combines three levers: technical (speed, indexing, structure), content (keywords, search intent), and authority (backlinks, reputation). Google weighs these signals to rank pages.",
        "For a business site, SEO stays the cheapest channel over time. A well-ranked page keeps generating visits months after publication, unlike an ad campaign that stops the moment spending stops.",
      ],
    },
    related: ["keyword", "backlinks", "meta-title", "serp"],
  },
  {
    slug: slug("keyword"),
    term: { fr: "Mot-clé", en: "Keyword" },
    category: "seo",
    short: { fr: "Un mot-clé est le terme ou l'expression qu'un utilisateur tape dans un moteur de recherche. Il sert de point de départ pour structurer le contenu et cibler une audience.", en: "A keyword is the term or phrase a user types into a search engine. It's the starting point for structuring content and targeting an audience." },
    body: {
      fr: [
        "Chaque page cible un mot-clé principal et plusieurs variantes proches. Le choix dépend du volume de recherche, de la concurrence et surtout de l'intention derrière la requête : informative, transactionnelle ou de navigation.",
        "Bâtir un site sans recherche de mots-clés revient à deviner ce que cherchent les visiteurs. Une page alignée sur une vraie requête attire un trafic plus pertinent et convertit mieux.",
      ],
      en: [
        "Each page targets one primary keyword and several close variants. The choice depends on search volume, competition, and above all the intent behind the query: informational, transactional, or navigational.",
        "Building a site without keyword research means guessing what visitors search for. A page aligned with a real query draws more relevant traffic and converts better.",
      ],
    },
    related: ["seo", "keyword-density", "user-intent", "serp"],
  },
  {
    slug: slug("keyword-density"),
    term: { fr: "Densité de mots-clés", en: "Keyword Density" },
    category: "seo",
    short: { fr: "La densité de mots-clés mesure la fréquence d'apparition d'un terme dans un texte, rapportée au nombre total de mots. Un indicateur ancien, aujourd'hui secondaire.", en: "Keyword density measures how often a term appears in a text relative to total word count. An older metric, now secondary." },
    body: {
      fr: [
        "Autrefois, répéter un mot-clé à un pourcentage précis suffisait à améliorer un classement. Les moteurs de recherche actuels analysent le sens et le contexte plutôt qu'un ratio mécanique.",
        "Viser une densité fixe n'a plus de sens. Mieux vaut écrire pour le lecteur, avec des synonymes et des termes liés, et laisser le mot-clé apparaître naturellement.",
      ],
      en: [
        "Repeating a keyword at a set percentage used to be enough to boost rankings. Modern search engines analyze meaning and context instead of a mechanical ratio.",
        "Targeting a fixed density no longer makes sense. It's better to write for the reader, use synonyms and related terms, and let the keyword appear naturally.",
      ],
    },
    related: ["keyword", "keyword-stuffing", "seo"],
  },
  {
    slug: slug("keyword-cannibalization"),
    term: { fr: "Cannibalisation de mots-clés", en: "Keyword Cannibalization" },
    category: "seo",
    short: { fr: "La cannibalisation survient quand plusieurs pages d'un même site ciblent le même mot-clé. Elles se font concurrence au lieu de se renforcer.", en: "Cannibalization happens when several pages on the same site target the same keyword. They compete with each other instead of reinforcing one another." },
    body: {
      fr: [
        "Google doit choisir quelle page afficher pour une requête donnée. Quand deux pages se disputent le même terme, l'autorité se dilue et aucune ne se classe aussi bien qu'une page unique et claire.",
        "La solution : un mot-clé principal par page, une architecture de contenu claire, et des liens internes qui pointent vers la page de référence plutôt que de la dupliquer.",
      ],
      en: [
        "Google has to pick which page to show for a given query. When two pages fight for the same term, authority gets diluted and neither ranks as well as a single, clear page would.",
        "The fix: one primary keyword per page, a clear content architecture, and internal links pointing to the reference page instead of duplicating it.",
      ],
    },
    related: ["keyword", "internal-links", "topic-cluster", "seo"],
  },
  {
    slug: slug("keyword-stuffing"),
    term: { fr: "Bourrage de mots-clés", en: "Keyword Stuffing" },
    category: "seo",
    short: { fr: "Le bourrage de mots-clés consiste à répéter un terme de façon excessive et artificielle dans un texte pour tenter de manipuler le classement.", en: "Keyword stuffing means repeating a term excessively and artificially in a text to try to manipulate rankings." },
    body: {
      fr: [
        "La pratique remonte aux débuts du référencement, quand les moteurs de recherche comptaient les occurrences plutôt que d'analyser le sens. Aujourd'hui, elle nuit à la lisibilité et déclenche des pénalités algorithmiques.",
        "Un texte bourré de mots-clés se repère au premier coup d'œil : phrases lourdes, répétitions inutiles. Les moteurs et les lecteurs le sanctionnent de la même façon.",
      ],
      en: [
        "The practice dates back to early search engines, which counted occurrences instead of analyzing meaning. Today it hurts readability and triggers algorithmic penalties.",
        "Stuffed text is easy to spot at a glance: heavy sentences, needless repetition. Search engines and readers penalize it the same way.",
      ],
    },
    related: ["keyword-density", "keyword", "seo"],
  },
  {
    slug: slug("backlinks"),
    term: { fr: "Backlinks", en: "Backlinks" },
    category: "seo",
    short: { fr: "Un backlink est un lien externe qui pointe vers une page depuis un autre site. C'est l'un des principaux signaux de confiance utilisés par les moteurs de recherche.", en: "A backlink is an external link pointing to a page from another site. It's one of the main trust signals used by search engines." },
    body: {
      fr: [
        "Chaque lien entrant agit comme un vote de confiance. Un backlink depuis un site reconnu du même secteur pèse plus qu'une dizaine de liens depuis des sites peu fiables.",
        "La qualité prime sur la quantité. Une stratégie de backlinks efficace passe par du contenu qui mérite d'être cité : études, outils, prises de position, plutôt que des échanges de liens artificiels.",
      ],
      en: [
        "Each inbound link acts as a vote of confidence. A backlink from a recognized site in the same industry outweighs a dozen links from low-trust sites.",
        "Quality beats quantity. An effective backlink strategy relies on content worth citing, studies, tools, strong opinions, rather than artificial link exchanges.",
      ],
    },
    related: ["domain-authority", "anchor-text", "seo"],
  },
  {
    slug: slug("internal-links"),
    term: { fr: "Maillage interne", en: "Internal Links" },
    category: "seo",
    short: { fr: "Le maillage interne désigne les liens entre les pages d'un même site. Il guide les visiteurs et distribue l'autorité entre les pages.", en: "Internal linking refers to the links between pages on the same site. It guides visitors and distributes authority across pages." },
    body: {
      fr: [
        "Un lien interne bien placé aide un lecteur à approfondir un sujet et signale aux moteurs de recherche la structure et l'importance relative de chaque page.",
        "Un site sans maillage interne cohérent laisse ses meilleures pages isolées. Relier les contenus entre eux renforce les pages stratégiques et allonge la durée de visite.",
      ],
      en: [
        "A well-placed internal link helps a reader go deeper on a topic and signals to search engines the structure and relative importance of each page.",
        "A site without coherent internal linking leaves its best pages isolated. Connecting content together strengthens strategic pages and extends time on site.",
      ],
    },
    related: ["anchor-text", "topic-cluster", "keyword-cannibalization", "seo"],
  },
  {
    slug: slug("anchor-text"),
    term: { fr: "Texte d'ancrage", en: "Anchor Text" },
    category: "seo",
    short: { fr: "Le texte d'ancrage est le texte cliquable d'un lien. Son contenu indique aux lecteurs et aux moteurs de recherche le sujet de la page ciblée.", en: "Anchor text is the clickable text of a link. Its wording tells readers and search engines what the target page is about." },
    body: {
      fr: [
        "Un ancrage descriptif ('guide du référencement local') est plus utile qu'un ancrage vague ('cliquez ici'). Il donne du contexte avant même d'ouvrir le lien.",
        "Varier les ancrages, internes comme externes, évite un pattern répétitif jugé artificiel. L'objectif reste la clarté pour l'utilisateur, pas l'optimisation mécanique.",
      ],
      en: [
        "Descriptive anchor text ('local SEO guide') is more useful than a vague one ('click here'). It gives context before the link is even opened.",
        "Varying anchors, both internal and external, avoids a repetitive pattern that reads as artificial. The goal stays clarity for the user, not mechanical optimization.",
      ],
    },
    related: ["internal-links", "backlinks", "seo"],
  },
  {
    slug: slug("meta-title"),
    term: { fr: "Balise title", en: "Meta Title" },
    category: "seo",
    short: { fr: "La balise title est le titre affiché dans les résultats de recherche et l'onglet du navigateur. C'est le premier élément qui donne envie de cliquer.", en: "The meta title is the title shown in search results and the browser tab. It's the first element that makes someone want to click." },
    body: {
      fr: [
        "Chaque page doit avoir une balise title unique, sous 60 caractères environ, qui contient le mot-clé principal et reste lisible pour un humain, pas seulement pour un algorithme.",
        "Un titre générique ou dupliqué sur plusieurs pages dilue le référencement et n'incite pas au clic. Un titre précis, avec la marque en fin de chaîne, améliore le taux de clic dans les résultats.",
      ],
      en: [
        "Every page needs a unique meta title, around 60 characters or fewer, that includes the primary keyword and stays readable for a human, not just an algorithm.",
        "A generic or duplicated title across pages dilutes rankings and doesn't drive clicks. A precise title, with the brand name at the end, improves click-through rate in search results.",
      ],
    },
    related: ["meta-description", "meta-tag", "serp", "keyword"],
  },
  {
    slug: slug("meta-description"),
    term: { fr: "Méta description", en: "Meta Description" },
    category: "seo",
    short: { fr: "La méta description est le court résumé affiché sous le titre dans les résultats de recherche. Elle n'influence pas le classement mais influence le clic.", en: "The meta description is the short summary shown under the title in search results. It doesn't affect ranking, but it affects the click." },
    body: {
      fr: [
        "Limitée à environ 155-160 caractères, elle doit résumer la page et donner une raison concrète de cliquer plutôt qu'un résultat concurrent.",
        "Sans méta description définie, Google en génère une automatiquement, souvent moins convaincante. En écrire une pour chaque page reste un des ajustements SEO les plus rentables et les plus rapides.",
      ],
      en: [
        "Limited to roughly 155-160 characters, it should summarize the page and give a concrete reason to click over a competing result.",
        "Without a defined meta description, Google generates one automatically, often less compelling. Writing one for every page remains one of the fastest, highest-return SEO fixes.",
      ],
    },
    related: ["meta-title", "meta-tag", "serp"],
  },
  {
    slug: slug("meta-tag"),
    term: { fr: "Balise meta", en: "Meta Tag" },
    category: "seo",
    short: { fr: "Une balise meta est une donnée placée dans le code d'une page, invisible pour le visiteur, qui renseigne les moteurs de recherche et les navigateurs sur son contenu.", en: "A meta tag is a piece of data placed in a page's code, invisible to visitors, that tells search engines and browsers about its content." },
    body: {
      fr: [
        "Le titre, la description, l'encodage ou les instructions d'indexation passent tous par des balises meta. Chacune a un rôle précis : décrire, catégoriser ou donner une instruction technique.",
        "Mal configurées, ces balises peuvent bloquer l'indexation d'une page importante sans que personne ne s'en aperçoive. Une vérification régulière évite ce genre d'erreur silencieuse.",
      ],
      en: [
        "The title, description, character encoding, or indexing instructions all run through meta tags. Each has a precise role: describe, categorize, or give a technical instruction.",
        "Misconfigured, these tags can block indexing on an important page without anyone noticing. Regular checks prevent this kind of silent error.",
      ],
    },
    related: ["meta-title", "meta-description", "robots-meta", "canonical-tag"],
  },
  {
    slug: slug("schema-markup"),
    term: { fr: "Balisage Schema", en: "Schema Markup" },
    category: "seo",
    short: { fr: "Le balisage Schema est un vocabulaire structuré ajouté au code d'une page pour aider les moteurs de recherche à comprendre son contenu précisément.", en: "Schema markup is a structured vocabulary added to a page's code to help search engines understand its content precisely." },
    body: {
      fr: [
        "Grâce à Schema.org, une page peut préciser qu'elle est un article, une recette, un événement ou une fiche produit, avec des champs comme le prix, la date ou la note moyenne.",
        "Ce balisage ouvre l'accès aux rich snippets : étoiles, prix, FAQ directement dans les résultats de recherche. Sur un marché concurrentiel, il fait la différence entre un résultat brut et un résultat qui capte l'œil.",
      ],
      en: [
        "Through Schema.org, a page can specify that it's an article, a recipe, an event, or a product listing, with fields like price, date, or average rating.",
        "This markup unlocks rich snippets: stars, prices, FAQs shown directly in search results. In a competitive market, it's the difference between a plain result and one that catches the eye.",
      ],
    },
    related: ["structured-data", "rich-snippets", "seo"],
  },
  {
    slug: slug("structured-data"),
    term: { fr: "Données structurées", en: "Structured Data" },
    category: "seo",
    short: { fr: "Les données structurées sont un format standardisé qui organise les informations d'une page pour que les machines puissent les lire sans ambiguïté.", en: "Structured data is a standardized format that organizes a page's information so machines can read it without ambiguity." },
    body: {
      fr: [
        "Contrairement à un texte libre, une donnée structurée précise qu'un chiffre est un prix, qu'une date est celle d'un événement, ou qu'un nom est celui d'un auteur. Le format le plus courant est JSON-LD.",
        "Au-delà du référencement classique, les données structurées deviennent essentielles pour les IA génératives qui cherchent des faits vérifiables à citer. Un site bien balisé se fait comprendre plus facilement, par Google comme par un assistant IA.",
      ],
      en: [
        "Unlike free text, structured data specifies that a number is a price, that a date belongs to an event, or that a name belongs to an author. The most common format is JSON-LD.",
        "Beyond classic search, structured data is becoming essential for generative AI systems looking for verifiable facts to cite. A well-marked-up site is easier to understand, for Google and for an AI assistant alike.",
      ],
    },
    related: ["schema-markup", "rich-snippets", "knowledge-graph"],
  },
  {
    slug: slug("rich-snippets"),
    term: { fr: "Rich snippets", en: "Rich Snippets" },
    category: "seo",
    short: { fr: "Les rich snippets sont des résultats de recherche enrichis d'éléments visuels, étoiles, prix, image, grâce aux données structurées.", en: "Rich snippets are search results enhanced with extra visual elements, stars, price, image, thanks to structured data." },
    body: {
      fr: [
        "Un résultat classique se limite à un titre, une URL et une description. Un rich snippet ajoute des informations concrètes qui aident l'utilisateur à décider avant même de cliquer.",
        "Ils n'améliorent pas directement le classement, mais augmentent le taux de clic. Sur une page de résultats saturée, un résultat enrichi se démarque visuellement des autres.",
      ],
      en: [
        "A standard result is limited to a title, a URL, and a description. A rich snippet adds concrete details that help a user decide before even clicking.",
        "They don't directly improve ranking, but they raise click-through rate. On a crowded results page, an enhanced result visually stands out from the rest.",
      ],
    },
    related: ["schema-markup", "structured-data", "serp"],
  },
  {
    slug: slug("featured-snippets"),
    term: { fr: "Extrait optimisé", en: "Featured Snippet" },
    category: "seo",
    short: { fr: "L'extrait optimisé est un encadré affiché en haut des résultats de recherche, qui répond directement à la question de l'utilisateur, avant même le premier lien.", en: "A featured snippet is a boxed answer shown at the top of search results, answering the user's question directly, before even the first link." },
    body: {
      fr: [
        "Google extrait ce contenu d'une page qui répond clairement à une requête, souvent sous forme de définition, de liste ou de tableau. La page reste classée normalement mais gagne cet encart en plus.",
        "Décrocher un extrait optimisé demande une réponse concise et bien structurée, placée tôt dans la page. C'est une des rares positions qui peut dépasser le premier résultat classique en visibilité.",
      ],
      en: [
        "Google pulls this content from a page that clearly answers a query, often as a definition, list, or table. The page still ranks normally but gains this extra box on top.",
        "Winning a featured snippet takes a concise, well-structured answer placed early in the page. It's one of the few spots that can outshine the top organic result in visibility.",
      ],
    },
    related: ["people-also-ask", "serp", "structured-data"],
  },
  {
    slug: slug("people-also-ask"),
    term: { fr: "Autres questions posées", en: "People Also Ask" },
    category: "seo",
    short: { fr: "Les 'autres questions posées' sont un bloc de questions liées, affiché dans les résultats de recherche, qui s'étend à chaque clic.", en: "People Also Ask is a block of related questions shown in search results, expanding with each click." },
    body: {
      fr: [
        "Chaque question dépliée révèle une réponse courte extraite d'une page, et fait apparaître de nouvelles questions. Le bloc capte une part importante de l'attention sur la page de résultats.",
        "Analyser ces questions aide à structurer un article autour des vraies interrogations des utilisateurs. Répondre à l'une d'elles clairement, tôt dans une page, augmente les chances d'y apparaître.",
      ],
      en: [
        "Each expanded question reveals a short answer pulled from a page, and surfaces new questions in turn. The block captures a significant share of attention on the results page.",
        "Analyzing these questions helps structure an article around users' real questions. Answering one of them clearly, early in a page, raises the odds of appearing there.",
      ],
    },
    related: ["featured-snippets", "serp", "user-intent"],
  },
  {
    slug: slug("e-e-a-t"),
    term: { fr: "E-E-A-T", en: "E-E-A-T" },
    abbr: { fr: "Expérience, expertise, autorité, fiabilité", en: "Experience, Expertise, Authoritativeness, Trustworthiness" },
    category: "seo",
    short: { fr: "E-E-A-T désigne les critères que Google utilise pour juger la qualité d'un contenu et de son auteur : expérience vécue, expertise, autorité et fiabilité.", en: "E-E-A-T refers to the criteria Google uses to judge the quality of content and its author: experience, expertise, authoritativeness, and trustworthiness." },
    body: {
      fr: [
        "Ce n'est pas un facteur de classement direct, mais un cadre d'évaluation, en particulier sur des sujets sensibles : santé, finance, sécurité. Google cherche des signaux concrets : auteur identifiable, sources citées, expérience démontrée.",
        "Pour un site professionnel, cela se traduit par des pages d'auteur claires, des études de cas réelles, et des contenus qui montrent une pratique du sujet plutôt qu'une simple reformulation.",
      ],
      en: [
        "This isn't a direct ranking factor but an evaluation framework, especially for sensitive topics: health, finance, safety. Google looks for concrete signals: an identifiable author, cited sources, demonstrated experience.",
        "For a business site, this means clear author pages, real case studies, and content that shows hands-on practice with the subject rather than a simple rewrite.",
      ],
    },
    related: ["topical-authority", "seo", "domain-authority"],
  },
  {
    slug: slug("topical-authority"),
    term: { fr: "Autorité thématique", en: "Topical Authority" },
    category: "seo",
    short: { fr: "L'autorité thématique mesure la profondeur et la cohérence du contenu d'un site sur un sujet donné, aux yeux des moteurs de recherche.", en: "Topical authority measures how deep and consistent a site's content is on a given subject, in the eyes of search engines." },
    body: {
      fr: [
        "Un site qui couvre un sujet sous plusieurs angles, avec des pages qui se répondent et se complètent, est perçu comme plus fiable qu'un site avec un seul article isolé sur le même thème.",
        "Construire cette autorité prend du temps : elle se bâtit article après article, autour d'un même noyau thématique, plutôt qu'en dispersant les efforts sur des sujets sans lien.",
      ],
      en: [
        "A site that covers a subject from multiple angles, with pages that reference and complement one another, reads as more trustworthy than a site with one isolated article on the same theme.",
        "Building this authority takes time: it's earned article by article, around a consistent topic core, rather than by spreading effort across unrelated subjects.",
      ],
    },
    related: ["topic-cluster", "e-e-a-t", "internal-links"],
  },
  {
    slug: slug("topic-cluster"),
    term: { fr: "Cluster thématique", en: "Topic Cluster" },
    category: "seo",
    short: { fr: "Un cluster thématique organise le contenu autour d'une page pilier et de plusieurs articles connexes, reliés entre eux par des liens internes.", en: "A topic cluster organizes content around a pillar page and several related articles, linked together through internal links." },
    body: {
      fr: [
        "La page pilier couvre un sujet large. Chaque article satellite approfondit un aspect précis et renvoie vers la page pilier, qui renvoie elle-même vers chaque article. Cette structure signale une couverture complète du sujet.",
        "Au-delà du référencement, cette organisation aide le visiteur à naviguer logiquement d'une question générale vers une réponse précise, sans se perdre dans le site.",
      ],
      en: [
        "The pillar page covers a broad topic. Each satellite article dives into one specific aspect and links back to the pillar page, which in turn links to each article. This structure signals full coverage of the topic.",
        "Beyond search rankings, this organization helps visitors move logically from a general question to a precise answer, without getting lost in the site.",
      ],
    },
    related: ["topical-authority", "internal-links", "information-architecture"],
  },
  {
    slug: slug("sitemap-xml"),
    term: { fr: "Sitemap.xml", en: "Sitemap.xml" },
    category: "seo",
    short: { fr: "Le sitemap.xml est un fichier qui liste toutes les pages importantes d'un site, pour aider les moteurs de recherche à les découvrir et les explorer.", en: "The sitemap.xml is a file listing all the important pages of a site, to help search engines discover and crawl them." },
    body: {
      fr: [
        "Sur un petit site, les moteurs de recherche trouvent les pages sans aide. Sur un site plus large ou récent, le sitemap accélère la découverte et signale les mises à jour.",
        "Un sitemap propre, soumis via la Search Console, ne contient que des pages valides et indexables. Y laisser des pages cassées ou redirigées brouille le signal envoyé aux moteurs.",
      ],
      en: [
        "On a small site, search engines find pages without help. On a larger or newer site, the sitemap speeds up discovery and signals updates.",
        "A clean sitemap, submitted through Search Console, contains only valid, indexable pages. Leaving broken or redirected pages in it muddies the signal sent to search engines.",
      ],
    },
    related: ["robots-txt", "crawler", "index"],
  },
  {
    slug: slug("robots-txt"),
    term: { fr: "Robots.txt", en: "Robots.txt" },
    category: "seo",
    short: { fr: "Le fichier robots.txt indique aux robots des moteurs de recherche quelles parties d'un site ils peuvent explorer ou non.", en: "The robots.txt file tells search engine crawlers which parts of a site they can or can't crawl." },
    body: {
      fr: [
        "Placé à la racine du domaine, ce fichier texte simple donne des instructions par robot et par dossier. Il ne garantit pas qu'une page reste hors des résultats de recherche, il empêche seulement son exploration.",
        "Une erreur dans ce fichier peut bloquer l'accès à tout un site sans avertissement visible. Une vérification après chaque mise en production évite ce risque, rare mais coûteux.",
      ],
      en: [
        "Placed at the domain root, this simple text file gives instructions per crawler and per folder. It doesn't guarantee a page stays out of search results, it only prevents it from being crawled.",
        "An error in this file can block access to an entire site without any visible warning. Checking it after every deployment avoids this rare but costly risk.",
      ],
    },
    related: ["sitemap-xml", "crawler", "index"],
  },
  {
    slug: slug("canonical-tag"),
    term: { fr: "Balise canonique", en: "Canonical Tag" },
    category: "seo",
    short: { fr: "La balise canonique indique aux moteurs de recherche quelle version d'une page, parmi plusieurs similaires, doit être considérée comme la référence.", en: "The canonical tag tells search engines which version of a page, among several similar ones, should be treated as the reference." },
    body: {
      fr: [
        "Un même contenu accessible via plusieurs URL, avec ou sans paramètres, en HTTP ou HTTPS, avec ou sans www, crée un risque de contenu dupliqué. La balise canonique règle ce risque en pointant vers une seule URL de référence.",
        "Sans elle, l'autorité d'une page peut se diluer entre plusieurs versions concurrentes, et aucune ne se classe aussi bien qu'une seule page consolidée.",
      ],
      en: [
        "The same content accessible through several URLs, with or without parameters, over HTTP or HTTPS, with or without www, creates a duplicate content risk. The canonical tag settles this by pointing to one reference URL.",
        "Without it, a page's authority can get split across several competing versions, and none ranks as well as a single, consolidated page would.",
      ],
    },
    related: ["meta-tag", "url", "seo"],
  },
  {
    slug: slug("serp"),
    term: { fr: "SERP", en: "SERP" },
    abbr: { fr: "Page de résultats de recherche", en: "Search Engine Results Page" },
    category: "seo",
    short: { fr: "La SERP est la page affichée par un moteur de recherche en réponse à une requête : résultats organiques, annonces, extraits enrichis.", en: "The SERP is the page a search engine displays in response to a query: organic results, ads, enhanced snippets." },
    body: {
      fr: [
        "Une SERP moderne dépasse largement dix liens bleus : elle mêle annonces payantes, extrait optimisé, autres questions posées, résultats locaux et, de plus en plus, une réponse générée par IA en haut de page.",
        "Comprendre la SERP d'un mot-clé avant d'écrire une page révèle ce que Google juge pertinent pour cette requête, et donc quel format de contenu a le plus de chances de s'y classer.",
      ],
      en: [
        "A modern SERP goes well beyond ten blue links: it mixes paid ads, a featured snippet, People Also Ask, local results, and increasingly an AI-generated answer at the top of the page.",
        "Studying a keyword's SERP before writing a page reveals what Google judges relevant for that query, and therefore which content format has the best odds of ranking there.",
      ],
    },
    related: ["featured-snippets", "people-also-ask", "keyword"],
  },
  {
    slug: slug("domain-authority"),
    term: { fr: "Autorité de domaine", en: "Domain Authority" },
    category: "seo",
    short: { fr: "L'autorité de domaine est un score, développé par des outils tiers, qui estime la force globale d'un site à se classer dans les résultats de recherche.", en: "Domain authority is a score, developed by third-party tools, that estimates a site's overall strength to rank in search results." },
    body: {
      fr: [
        "Ce score se base surtout sur le profil de backlinks : nombre et qualité des sites qui pointent vers le domaine. Ce n'est pas une métrique officielle de Google, mais un indicateur comparatif utile.",
        "Un score élevé ne garantit pas un bon classement sur une requête précise. Il sert surtout à comparer la force relative de plusieurs sites, notamment face à la concurrence.",
      ],
      en: [
        "This score relies mainly on backlink profile: the number and quality of sites linking to the domain. It's not an official Google metric, but a useful comparative indicator.",
        "A high score doesn't guarantee good ranking for a specific query. It's mostly used to compare the relative strength of several sites, especially against competitors.",
      ],
    },
    related: ["backlinks", "e-e-a-t", "seo"],
  },
  {
    slug: slug("crawl-budget"),
    term: { fr: "Budget de crawl", en: "Crawl Budget" },
    category: "seo",
    short: { fr: "Le budget de crawl est le nombre de pages qu'un moteur de recherche accepte d'explorer sur un site pendant une période donnée.", en: "Crawl budget is the number of pages a search engine agrees to crawl on a site within a given period." },
    body: {
      fr: [
        "Sur un petit site, cette limite ne pose jamais de problème. Sur un site avec des milliers de pages, un budget mal utilisé peut laisser des pages importantes rarement explorées, donc mal indexées.",
        "Éliminer les pages inutiles, corriger les redirections en chaîne et garder un site rapide libère du budget pour les pages qui comptent vraiment.",
      ],
      en: [
        "On a small site, this limit never becomes an issue. On a site with thousands of pages, a poorly used budget can leave important pages rarely crawled, and therefore poorly indexed.",
        "Removing useless pages, fixing chained redirects, and keeping a site fast frees up budget for the pages that actually matter.",
      ],
    },
    related: ["crawler", "index", "sitemap-xml"],
  },
  {
    slug: slug("url"),
    term: { fr: "URL", en: "URL" },
    abbr: { fr: "Localisateur uniforme de ressource", en: "Uniform Resource Locator" },
    category: "web",
    short: { fr: "Une URL est l'adresse unique qui pointe vers une page ou une ressource sur le web. Elle indique au navigateur où aller et quoi charger.", en: "A URL is the unique address that points to a page or resource on the web. It tells the browser where to go and what to load." },
    body: {
      fr: [
        "Une URL se compose de plusieurs parties : le protocole (https), le nom de domaine, un chemin et parfois des paramètres. Chaque page d'un site a sa propre URL, ce qui permet de la partager, de la lier et de l'indexer.",
        "Une structure d'URL claire aide les visiteurs à comprendre où ils se trouvent et aide Google à comprendre la hiérarchie du site. Des URL courtes et lisibles convertissent mieux qu'un enchaînement de paramètres illisibles.",
      ],
      en: [
        "A URL is made of several parts: the protocol (https), the domain name, a path, and sometimes parameters. Every page on a site has its own URL, which makes it shareable, linkable, and indexable.",
        "A clear URL structure helps visitors understand where they are and helps Google understand site hierarchy. Short, readable URLs convert better than a string of unreadable parameters.",
      ],
    },
    related: ["website-structure", "dns", "redirect", "canonical-tag"],
  },
  {
    slug: slug("ssl-https"),
    term: { fr: "SSL / HTTPS", en: "SSL / HTTPS" },
    category: "web",
    short: { fr: "SSL est le protocole qui chiffre les échanges entre un navigateur et un serveur. HTTPS est la version sécurisée de HTTP qui l'utilise.", en: "SSL is the protocol that encrypts the exchange between a browser and a server. HTTPS is the secure version of HTTP that uses it." },
    body: {
      fr: [
        "Sans HTTPS, les données échangées entre un visiteur et un site (mots de passe, formulaires, paiements) circulent en clair et peuvent être interceptées. Le certificat SSL chiffre cette connexion et affiche le cadenas dans le navigateur.",
        "Google traite HTTPS comme un critère de classement et affiche un avertissement pour les sites en HTTP simple. Pour un site qui doit convertir des visiteurs en clients, l'absence de cadenas casse la confiance avant même la lecture de la page.",
      ],
      en: [
        "Without HTTPS, data exchanged between a visitor and a site (passwords, forms, payments) travels unencrypted and can be intercepted. The SSL certificate encrypts that connection and shows the padlock in the browser.",
        "Google treats HTTPS as a ranking signal and flags plain HTTP sites with a warning. For a site meant to convert visitors into clients, a missing padlock breaks trust before the page is even read.",
      ],
    },
    related: ["url", "dns", "domain-authority", "seo"],
  },
  {
    slug: slug("crawler"),
    term: { fr: "Robot d'exploration", en: "Crawler" },
    category: "web",
    short: { fr: "Un crawler est un programme automatisé qui parcourt les pages web en suivant les liens, pour les analyser et les indexer.", en: "A crawler is an automated program that browses web pages by following links, to analyze and index them." },
    body: {
      fr: [
        "Googlebot est le crawler le plus connu, mais chaque moteur de recherche et chaque IA générative a le sien. Il lit le code HTML, suit les liens internes et externes, et transmet ce qu'il trouve à l'index.",
        "Si un crawler ne peut pas accéder à une page (erreur serveur, blocage dans robots.txt, lien cassé), cette page reste invisible en recherche. Un site bien structuré facilite le passage du crawler et donc l'indexation.",
      ],
      en: [
        "Googlebot is the best known crawler, but every search engine and generative AI has its own. It reads HTML code, follows internal and external links, and passes what it finds to the index.",
        "If a crawler cannot reach a page (server error, robots.txt block, broken link), that page stays invisible in search. A well structured site makes the crawler's job easier, and indexing follows.",
      ],
    },
    related: ["index", "robots-txt", "crawl-budget", "sitemap-xml"],
  },
  {
    slug: slug("index"),
    term: { fr: "Index", en: "Index" },
    category: "web",
    short: { fr: "L'index est la base de données dans laquelle un moteur de recherche stocke les pages qu'il a explorées, pour pouvoir les afficher en résultats.", en: "The index is the database where a search engine stores the pages it has crawled, so it can return them as results." },
    body: {
      fr: [
        "Une page n'apparaît dans les résultats de recherche que si elle est indexée. Passer le crawl ne suffit pas : Google doit ensuite décider que la page mérite une place dans l'index.",
        "Une page peut être exclue de l'index pour plusieurs raisons : contenu dupliqué, balise noindex, faible qualité perçue. Vérifier l'indexation dans Google Search Console fait partie du suivi minimal d'un site.",
      ],
      en: [
        "A page only appears in search results if it is indexed. Passing the crawl is not enough: Google then has to decide the page deserves a place in the index.",
        "A page can be left out of the index for several reasons: duplicate content, a noindex tag, low perceived quality. Checking indexing in Google Search Console is part of basic site monitoring.",
      ],
    },
    related: ["crawler", "sitemap-xml", "serp", "robots-meta"],
  },
  {
    slug: slug("core-web-vitals"),
    term: { fr: "Core Web Vitals", en: "Core Web Vitals" },
    category: "web",
    short: { fr: "Les Core Web Vitals sont trois métriques Google qui mesurent la vitesse de chargement, la réactivité et la stabilité visuelle d'une page.", en: "Core Web Vitals are three Google metrics that measure a page's loading speed, responsiveness, and visual stability." },
    body: {
      fr: [
        "Les trois métriques sont LCP (temps d'affichage du contenu principal), INP (délai de réponse aux interactions) et CLS (décalages visuels pendant le chargement). Chacune a un seuil chiffré à respecter.",
        "Ces métriques font partie des critères de classement Google et influencent l'expérience réelle des visiteurs. Un site lent ou instable perd des clients avant même que le message ne soit lu.",
      ],
      en: [
        "The three metrics are LCP (time to display the main content), INP (response delay to interactions), and CLS (visual shifts during loading). Each one has a numeric threshold to meet.",
        "These metrics are part of Google's ranking criteria and shape the real experience of visitors. A slow or unstable site loses clients before the message is even read.",
      ],
    },
    related: ["page-speed", "lighthouse", "lazy-loading", "user-experience"],
  },
  {
    slug: slug("lighthouse"),
    term: { fr: "Lighthouse", en: "Lighthouse" },
    category: "web",
    short: { fr: "Lighthouse est l'outil gratuit de Google qui audite une page sur la performance, l'accessibilité, les bonnes pratiques et le SEO.", en: "Lighthouse is Google's free tool that audits a page on performance, accessibility, best practices, and SEO." },
    body: {
      fr: [
        "L'outil génère un score sur 100 pour chaque catégorie et liste les problèmes précis à corriger : images trop lourdes, contraste insuffisant, balises manquantes. Il est intégré directement dans Chrome DevTools.",
        "Lighthouse est un point de départ, pas une garantie de résultat : un score élevé ne remplace pas un test réel sur le terrain. Il reste l'outil de référence pour prioriser les corrections techniques avant mise en ligne.",
      ],
      en: [
        "The tool produces a score out of 100 for each category and lists the specific issues to fix: oversized images, insufficient contrast, missing tags. It is built directly into Chrome DevTools.",
        "Lighthouse is a starting point, not a guarantee of results: a high score does not replace real field testing. It remains the reference tool for prioritizing technical fixes before launch.",
      ],
    },
    related: ["core-web-vitals", "page-speed", "accessibility", "seo"],
  },
  {
    slug: slug("progressive-web-app"),
    term: { fr: "PWA", en: "PWA" },
    abbr: { fr: "Application web progressive", en: "Progressive Web App" },
    category: "web",
    short: { fr: "Une PWA est un site web qui se comporte comme une application native : installable, utilisable hors ligne, avec des notifications.", en: "A PWA is a website that behaves like a native app: installable, usable offline, with notifications." },
    body: {
      fr: [
        "Une PWA repose sur un service worker qui met en cache les ressources et un fichier manifest qui décrit l'icône, le nom et le comportement de l'app. Le visiteur peut l'ajouter à son écran d'accueil sans passer par un store.",
        "Pour une PME, une PWA évite les coûts et les délais de publication sur l'App Store ou Google Play tout en gardant une partie de l'expérience app. Le choix a du sens quand l'usage répété prime sur la découverte.",
      ],
      en: [
        "A PWA relies on a service worker that caches resources and a manifest file that defines the icon, name, and behavior of the app. The visitor can add it to their home screen without going through a store.",
        "For a small business, a PWA avoids the cost and delay of publishing to the App Store or Google Play while keeping part of the app experience. The choice makes sense when repeat use matters more than discovery.",
      ],
    },
    related: ["responsive-design", "hydration", "page-speed", "user-experience"],
  },
  {
    slug: slug("website-structure"),
    term: { fr: "Structure du site", en: "Website Structure" },
    category: "web",
    short: { fr: "La structure d'un site est la manière dont ses pages sont organisées et reliées entre elles, du plus général au plus précis.", en: "Website structure is how its pages are organized and linked to each other, from general to specific." },
    body: {
      fr: [
        "Une bonne structure suit une hiérarchie claire : page d'accueil, catégories, pages produits ou articles. Chaque page doit être accessible en 3 clics maximum depuis la page d'accueil.",
        "Cette organisation guide autant les visiteurs que les crawlers. Un site mal structuré dilue l'autorité entre trop de pages isolées et complique la navigation, ce qui fait fuir les visiteurs avant conversion.",
      ],
      en: [
        "A good structure follows a clear hierarchy: homepage, categories, product or article pages. Every page should be reachable within 3 clicks from the homepage.",
        "This organization guides both visitors and crawlers. A poorly structured site spreads authority across too many isolated pages and complicates navigation, which drives visitors away before they convert.",
      ],
    },
    related: ["information-architecture", "internal-links", "sitemap-xml", "url"],
  },
  {
    slug: slug("alt-attribute"),
    term: { fr: "Attribut alt", en: "Alt Attribute" },
    category: "web",
    short: { fr: "L'attribut alt est le texte alternatif d'une image, lu par les lecteurs d'écran et affiché si l'image ne charge pas.", en: "The alt attribute is an image's alternative text, read by screen readers and shown if the image fails to load." },
    body: {
      fr: [
        "Ce texte décrit le contenu de l'image en quelques mots précis, sans bourrage de mots-clés. Il permet aux personnes malvoyantes de comprendre une page et aux moteurs de recherche de comprendre une image qu'ils ne peuvent pas voir.",
        "Une image sans attribut alt est une occasion manquée : pour l'accessibilité, pour le référencement image, et pour l'indexation dans les résultats de recherche visuelle.",
      ],
      en: [
        "This text describes the image's content in a few precise words, without keyword stuffing. It lets visually impaired people understand a page and lets search engines understand an image they cannot see.",
        "An image without an alt attribute is a missed opportunity: for accessibility, for image search rankings, and for indexing in visual search results.",
      ],
    },
    related: ["accessibility", "index", "crawler", "seo"],
  },
  {
    slug: slug("page-speed"),
    term: { fr: "Vitesse de page", en: "Page Speed" },
    category: "web",
    short: { fr: "La vitesse de page mesure le temps qu'il faut à une page pour charger et devenir utilisable pour le visiteur.", en: "Page speed measures how long it takes a page to load and become usable for the visitor." },
    body: {
      fr: [
        "Elle dépend du poids des images, du nombre de scripts chargés, de l'hébergement et du code lui-même. Chaque seconde de chargement en plus augmente le taux d'abandon avant même que la page ne s'affiche.",
        "C'est aussi un critère de classement Google via les Core Web Vitals. Un site rapide n'est pas un confort technique : c'est une condition de base pour convertir et pour être trouvé.",
      ],
      en: [
        "It depends on image weight, the number of scripts loaded, hosting, and the code itself. Every extra second of loading time raises the abandonment rate before the page even displays.",
        "It is also a Google ranking factor through Core Web Vitals. A fast site is not a technical nicety: it is a baseline condition to convert visitors and to get found.",
      ],
    },
    related: ["core-web-vitals", "lighthouse", "lazy-loading", "cdn"],
  },
  {
    slug: slug("responsive-design"),
    term: { fr: "Design responsive", en: "Responsive Design" },
    category: "web",
    short: { fr: "Le design responsive adapte automatiquement la mise en page d'un site à la taille de l'écran, du mobile à l'ordinateur de bureau.", en: "Responsive design automatically adapts a site's layout to screen size, from mobile to desktop." },
    body: {
      fr: [
        "Plutôt que de créer une version différente par appareil, la mise en page se redimensionne et se réorganise selon des points de rupture définis dans le CSS. Le contenu reste le même, sa présentation s'ajuste.",
        "La majorité du trafic web passe par mobile. Un site non responsive perd des visiteurs dès la première seconde et pénalise le classement, Google indexant en priorité la version mobile d'un site.",
      ],
      en: [
        "Rather than building a separate version per device, the layout resizes and reorganizes itself according to breakpoints defined in the CSS. The content stays the same, its presentation adjusts.",
        "Most web traffic comes from mobile. A non responsive site loses visitors within the first second and hurts rankings, since Google indexes a site's mobile version first.",
      ],
    },
    related: ["user-experience", "wireframe", "progressive-web-app", "above-the-fold"],
  },
  {
    slug: slug("lazy-loading"),
    term: { fr: "Chargement différé", en: "Lazy Loading" },
    category: "web",
    short: { fr: "Le chargement différé retarde le chargement des images et contenus jusqu'à ce que le visiteur soit sur le point de les voir.", en: "Lazy loading delays loading images and content until the visitor is about to see them." },
    body: {
      fr: [
        "Au lieu de charger toutes les ressources d'une page dès l'ouverture, le navigateur ne charge que ce qui est visible à l'écran, puis le reste au fil du défilement. Le premier affichage devient plus rapide.",
        "Bien utilisé, le chargement différé améliore directement les Core Web Vitals. Mal implémenté, sur une image visible dès l'ouverture par exemple, il peut au contraire ralentir l'affichage principal.",
      ],
      en: [
        "Instead of loading every resource on a page as soon as it opens, the browser only loads what is visible on screen, then the rest as the visitor scrolls. The first paint becomes faster.",
        "Used correctly, lazy loading directly improves Core Web Vitals. Implemented poorly, on an image visible right at opening for example, it can slow down the main render instead.",
      ],
    },
    related: ["page-speed", "core-web-vitals", "cdn", "static-site"],
  },
  {
    slug: slug("cdn"),
    term: { fr: "CDN", en: "CDN" },
    abbr: { fr: "Réseau de diffusion de contenu", en: "Content Delivery Network" },
    category: "web",
    short: { fr: "Un CDN est un réseau de serveurs répartis dans le monde qui livre les fichiers d'un site depuis le serveur le plus proche du visiteur.", en: "A CDN is a network of servers spread around the world that delivers a site's files from the server closest to the visitor." },
    body: {
      fr: [
        "Sans CDN, chaque visiteur charge les fichiers depuis un seul serveur, parfois à des milliers de kilomètres. Avec un CDN, une copie des fichiers est mise en cache sur plusieurs points du globe, ce qui réduit le temps de trajet des données.",
        "Pour un site avec une audience internationale, le CDN fait une différence directe sur la vitesse perçue et donc sur la conversion. C'est un élément standard des hébergements modernes comme Vercel.",
      ],
      en: [
        "Without a CDN, every visitor loads files from a single server, sometimes thousands of kilometers away. With a CDN, a copy of the files is cached at multiple points around the globe, cutting the data's travel time.",
        "For a site with an international audience, a CDN makes a direct difference to perceived speed and therefore to conversion. It is a standard part of modern hosting platforms like Vercel.",
      ],
    },
    related: ["page-speed", "static-site", "dns", "lazy-loading"],
  },
  {
    slug: slug("dns"),
    term: { fr: "DNS", en: "DNS" },
    abbr: { fr: "Système de noms de domaine", en: "Domain Name System" },
    category: "web",
    short: { fr: "Le DNS traduit un nom de domaine lisible (tenexstudio.com) en adresse IP, l'adresse numérique que les serveurs utilisent pour se trouver.", en: "DNS translates a readable domain name (tenexstudio.com) into an IP address, the numeric address servers use to find each other." },
    body: {
      fr: [
        "Quand un visiteur tape une adresse dans son navigateur, une requête DNS cherche l'IP correspondante avant même que le chargement de la page ne commence. Cette étape est invisible mais indispensable.",
        "Une mauvaise configuration DNS retarde l'affichage du site ou le rend carrément inaccessible. C'est aussi via le DNS que se règlent les redirections de domaine et la vérification de propriété pour un certificat SSL.",
      ],
      en: [
        "When a visitor types an address into their browser, a DNS query looks up the matching IP before the page even starts loading. This step is invisible but essential.",
        "A misconfigured DNS delays a site's display or makes it flatly unreachable. DNS is also where domain redirects are set and where ownership gets verified for an SSL certificate.",
      ],
    },
    related: ["url", "ssl-https", "cdn", "redirect"],
  },
  {
    slug: slug("redirect"),
    term: { fr: "Redirection (301/302)", en: "Redirect (301/302)" },
    category: "web",
    short: { fr: "Une redirection renvoie automatiquement un visiteur ou un moteur de recherche d'une URL vers une autre.", en: "A redirect automatically sends a visitor or search engine from one URL to another." },
    body: {
      fr: [
        "La redirection 301 est permanente : elle transmet la quasi-totalité de la valeur SEO de l'ancienne page vers la nouvelle. La 302 est temporaire et ne transmet pas cette valeur de la même façon, elle indique au moteur que l'ancienne URL reste la référence.",
        "Les redirections sont indispensables lors d'une refonte ou d'un changement d'URL, pour ne pas perdre le classement acquis et éviter les pages d'erreur 404 pour les visiteurs qui arrivent via un ancien lien.",
      ],
      en: [
        "A 301 redirect is permanent: it passes on nearly all the SEO value of the old page to the new one. A 302 is temporary and does not pass on that value the same way, it tells the engine the old URL remains the reference.",
        "Redirects are essential during a redesign or a URL change, to avoid losing the ranking already earned and to avoid 404 error pages for visitors arriving through an old link.",
      ],
    },
    related: ["url", "canonical-tag", "crawl-budget", "serp"],
  },
  {
    slug: slug("static-site"),
    term: { fr: "Site statique", en: "Static Site" },
    category: "web",
    short: { fr: "Un site statique génère ses pages HTML à l'avance, au moment du build, plutôt qu'à chaque visite.", en: "A static site generates its HTML pages ahead of time, at build time, rather than on every visit." },
    body: {
      fr: [
        "Contrairement à un site dynamique qui interroge une base de données à chaque requête, un site statique livre des fichiers déjà prêts. Le serveur n'a rien à calculer, il envoie directement le fichier.",
        "Résultat : un chargement plus rapide, une surface d'attaque plus réduite et un hébergement moins cher. C'est le choix par défaut pour un site vitrine ou un blog dont le contenu ne change pas à chaque visite.",
      ],
      en: [
        "Unlike a dynamic site that queries a database on every request, a static site delivers files that are already ready. The server has nothing to compute, it just sends the file directly.",
        "The result: faster loading, a smaller attack surface, and cheaper hosting. It is the default choice for a showcase site or a blog whose content does not change on every visit.",
      ],
    },
    related: ["cdn", "page-speed", "hydration", "progressive-web-app"],
  },
  {
    slug: slug("hydration"),
    term: { fr: "Hydratation", en: "Hydration" },
    category: "web",
    short: { fr: "L'hydratation est le processus qui rend interactif du HTML déjà affiché, en y attachant le code JavaScript côté client.", en: "Hydration is the process that makes already displayed HTML interactive, by attaching client side JavaScript to it." },
    body: {
      fr: [
        "Le serveur envoie d'abord une page HTML complète, visible immédiatement. Le JavaScript se charge ensuite en arrière-plan et vient attacher les comportements interactifs (clics, formulaires) à ce HTML déjà présent.",
        "Cette approche, utilisée par des frameworks comme Astro, combine l'affichage rapide d'un site statique et l'interactivité d'une application. Seuls les composants qui en ont besoin sont hydratés, ce qui allège la page.",
      ],
      en: [
        "The server first sends a complete HTML page, visible right away. JavaScript then loads in the background and attaches interactive behaviors (clicks, forms) to that already present HTML.",
        "This approach, used by frameworks like Astro, combines the fast display of a static site with the interactivity of an application. Only the components that need it get hydrated, which keeps the page light.",
      ],
    },
    related: ["static-site", "progressive-web-app", "page-speed", "core-web-vitals"],
  },
  {
    slug: slug("robots-meta"),
    term: { fr: "Balise meta robots", en: "Robots Meta Tag" },
    category: "web",
    short: { fr: "La balise meta robots indique aux moteurs de recherche si une page doit être indexée et si ses liens doivent être suivis.", en: "The robots meta tag tells search engines whether a page should be indexed and whether its links should be followed." },
    body: {
      fr: [
        "Placée dans le head d'une page, elle accepte des valeurs comme noindex (ne pas indexer), nofollow (ne pas suivre les liens) ou leur combinaison. Elle agit page par page, contrairement au fichier robots.txt qui agit à l'échelle du site.",
        "Elle sert par exemple à exclure une page de remerciement ou une page de test des résultats de recherche, sans bloquer le crawl du reste du site. Une balise noindex oubliée sur une page importante peut la faire disparaître de Google.",
      ],
      en: [
        "Placed in a page's head, it accepts values like noindex (do not index), nofollow (do not follow links), or a combination of both. It works page by page, unlike the robots.txt file, which works at the site level.",
        "It is used, for example, to exclude a thank you page or a test page from search results without blocking the crawl of the rest of the site. A noindex tag left on an important page by mistake can make it disappear from Google.",
      ],
    },
    related: ["robots-txt", "crawler", "index", "canonical-tag"],
  },
  {
    slug: slug("user-experience"),
    term: { fr: "Expérience utilisateur", en: "User Experience" },
    abbr: { fr: "UX", en: "UX" },
    category: "ux",
    short: { fr: "L'UX désigne la qualité globale de l'expérience vécue par un visiteur sur un site : facilité d'usage, clarté, plaisir. Elle conditionne la conversion.", en: "UX is the overall quality of a visitor's experience on a site: ease of use, clarity, satisfaction. It drives conversion." },
    body: {
      fr: [
        "L'expérience utilisateur regroupe tout ce qu'un visiteur ressent en naviguant sur un site : rapidité, lisibilité, facilité à trouver une information, sentiment de confiance. Elle se construit à chaque écran, chaque interaction.",
        "Une bonne UX réduit les frictions avant l'achat ou la prise de contact. Sur un site B2B, elle se traduit par un temps de décision plus court et un taux de rebond plus faible.",
      ],
      en: [
        "User experience covers everything a visitor feels while navigating a site: speed, clarity, ease of finding information, trust. It's built at every screen and every interaction.",
        "Good UX removes friction before a purchase or contact request. On a B2B site, it shows up as a shorter decision time and a lower bounce rate.",
      ],
    },
    related: ["usability", "user-interface", "conversion", "visual-hierarchy"],
  },
  {
    slug: slug("user-interface"),
    term: { fr: "Interface utilisateur", en: "User Interface" },
    abbr: { fr: "UI", en: "UI" },
    category: "ux",
    short: { fr: "L'UI regroupe les éléments visuels et interactifs d'un site : boutons, menus, formulaires, typographie. C'est la couche que l'utilisateur touche directement.", en: "UI covers the visual and interactive elements of a site: buttons, menus, forms, typography. It's the layer the user directly touches." },
    body: {
      fr: [
        "L'interface utilisateur est l'ensemble des composants visuels avec lesquels un visiteur interagit : boutons, champs, icônes, mise en page. Elle donne forme concrète à l'expérience utilisateur.",
        "Une UI cohérente accélère la prise en main. Un bouton reconnaissable, un menu prévisible, une hiérarchie claire évitent l'hésitation et rassurent avant une action comme un devis ou une réservation.",
      ],
      en: [
        "The user interface is the set of visual components a visitor interacts with: buttons, fields, icons, layout. It gives concrete shape to the user experience.",
        "A consistent UI speeds up first contact. A recognizable button, a predictable menu, a clear hierarchy remove hesitation and build confidence before an action like a quote request or booking.",
      ],
    },
    related: ["user-experience", "design-system", "visual-hierarchy", "micro-interaction"],
  },
  {
    slug: slug("usability"),
    term: { fr: "Utilisabilité", en: "Usability" },
    category: "ux",
    short: { fr: "L'utilisabilité mesure la facilité avec laquelle un visiteur accomplit une tâche sur un site : trouver une information, remplir un formulaire, réserver un créneau.", en: "Usability measures how easily a visitor completes a task on a site: finding information, filling a form, booking a slot." },
    body: {
      fr: [
        "L'utilisabilité évalue si un site permet d'atteindre un objectif rapidement et sans erreur. Elle se teste par l'observation : un visiteur trouve-t-il le bouton de contact en quelques secondes ?",
        "Un site utilisable réduit les abandons. Chaque clic inutile, chaque champ de formulaire flou coûte des prospects, surtout sur mobile où la marge d'erreur est faible.",
      ],
      en: [
        "Usability evaluates whether a site lets someone reach a goal quickly and without error. It's tested through observation: does a visitor find the contact button in a few seconds?",
        "A usable site reduces drop-off. Every unnecessary click, every unclear form field costs leads, especially on mobile where the margin for error is small.",
      ],
    },
    related: ["user-experience", "user-interface", "conversion-rate", "heuristic"],
  },
  {
    slug: slug("user-intent"),
    term: { fr: "Intention de recherche", en: "User Intent" },
    category: "ux",
    short: { fr: "L'intention de recherche est l'objectif réel derrière une requête : s'informer, comparer, acheter. Un site doit y répondre pour convertir et bien se positionner.", en: "User intent is the real goal behind a search query: learning, comparing, buying. A site needs to match it to convert and rank well." },
    body: {
      fr: [
        "Chaque recherche cache une intention : informationnelle, navigationnelle, transactionnelle. Une page qui ne répond pas à cette intention perd le visiteur, même si elle contient le bon mot-clé.",
        "Aligner une page sur l'intention de recherche améliore le référencement et la conversion. Une page 'devis site web' doit mener à une action, pas à un article de blog.",
      ],
      en: [
        "Every search hides an intent: informational, navigational, transactional. A page that ignores that intent loses the visitor, even if it contains the right keyword.",
        "Matching a page to user intent improves both SEO and conversion. A 'website quote' page should lead to an action, not a blog article.",
      ],
    },
    related: ["keyword", "conversion", "seo", "serp"],
  },
  {
    slug: slug("conversion"),
    term: { fr: "Conversion", en: "Conversion" },
    category: "ux",
    short: { fr: "La conversion est le moment où un visiteur accomplit l'action visée : demander un devis, réserver un appel, s'abonner. C'est l'objectif final d'un site.", en: "Conversion is the moment a visitor completes the intended action: request a quote, book a call, subscribe. It's a site's final goal." },
    body: {
      fr: [
        "Une conversion peut être une vente, mais aussi une prise de contact, un téléchargement ou une inscription. Chaque page d'un site sert, directement ou non, à rapprocher le visiteur de cette action.",
        "Un site qui convertit bien ne fait pas que plaire : il guide. Structure claire, preuve sociale, appel à l'action visible sont les leviers qui transforment le trafic en résultat.",
      ],
      en: [
        "A conversion can be a sale, but also a contact request, a download, or a signup. Every page on a site works, directly or not, toward moving the visitor closer to that action.",
        "A site that converts well doesn't just look good, it guides. Clear structure, social proof, a visible call to action are the levers that turn traffic into results.",
      ],
    },
    related: ["conversion-rate", "call-to-action", "above-the-fold", "user-experience"],
  },
  {
    slug: slug("conversion-rate"),
    term: { fr: "Taux de conversion", en: "Conversion Rate" },
    category: "ux",
    short: { fr: "Le taux de conversion est le pourcentage de visiteurs qui accomplissent l'action visée sur un site. C'est l'indicateur clé de la performance commerciale.", en: "Conversion rate is the percentage of visitors who complete the intended action on a site. It's the key metric for commercial performance." },
    body: {
      fr: [
        "Le taux de conversion se calcule en divisant le nombre d'actions accomplies par le nombre de visiteurs. Un site à 3 000 visites et 60 devis affiche un taux de 2%.",
        "Ce chiffre varie selon le secteur et l'offre, mais reste comparable dans le temps. Suivre son évolution après une refonte permet de mesurer l'impact réel du design sur le business.",
      ],
      en: [
        "Conversion rate is calculated by dividing completed actions by total visitors. A site with 3,000 visits and 60 quote requests shows a 2% rate.",
        "This figure varies by industry and offer, but stays comparable over time. Tracking its evolution after a redesign measures the real business impact of design.",
      ],
    },
    related: ["conversion", "call-to-action", "user-experience", "above-the-fold"],
  },
  {
    slug: slug("call-to-action"),
    term: { fr: "Appel à l'action", en: "Call to Action" },
    abbr: { fr: "CTA", en: "CTA" },
    category: "ux",
    short: { fr: "Le CTA est l'élément qui invite le visiteur à agir : un bouton, un lien, une phrase courte. Il concentre l'intention de conversion d'une page.", en: "A CTA is the element that invites the visitor to act: a button, a link, a short phrase. It carries a page's conversion intent." },
    body: {
      fr: [
        "Un appel à l'action donne une direction claire : 'Réserver un appel', 'Demander un devis'. Sa formulation, sa couleur et sa position déterminent en grande partie s'il est vu et suivi.",
        "Un site efficace limite le nombre de CTA par page pour éviter de diluer l'attention. Un objectif clair, un bouton visible, valent mieux que trois choix concurrents.",
      ],
      en: [
        "A call to action gives a clear direction: 'Book a call', 'Request a quote'. Its wording, color, and placement largely determine whether it's seen and followed.",
        "An effective site limits the number of CTAs per page to avoid diluting attention. One clear goal, one visible button, beats three competing choices.",
      ],
    },
    related: ["conversion", "conversion-rate", "above-the-fold", "visual-hierarchy"],
  },
  {
    slug: slug("above-the-fold"),
    term: { fr: "Au-dessus de la ligne de flottaison", en: "Above the Fold" },
    category: "ux",
    short: { fr: "La zone au-dessus de la ligne de flottaison est ce qui est visible sans défiler. Elle doit convaincre en quelques secondes.", en: "Above the fold is what's visible without scrolling. It has to convince within a few seconds." },
    body: {
      fr: [
        "Le terme vient de la presse papier, où le pli d'un journal cachait le bas de la page. En web, il désigne la portion d'écran visible à l'arrivée sur une page, avant tout défilement.",
        "Cette zone porte le message principal : ce que fait l'entreprise, pour qui, et l'appel à l'action. Un visiteur qui ne comprend pas l'offre en un coup d'œil repart souvent sans défiler plus loin.",
      ],
      en: [
        "The term comes from print, where a newspaper's fold hid the bottom of the page. On the web, it refers to the screen area visible on arrival, before any scrolling.",
        "This zone carries the main message: what the company does, for whom, and the call to action. A visitor who doesn't understand the offer at a glance often leaves without scrolling further.",
      ],
    },
    related: ["call-to-action", "visual-hierarchy", "conversion", "user-experience"],
  },
  {
    slug: slug("wireframe"),
    term: { fr: "Wireframe", en: "Wireframe" },
    category: "ux",
    short: { fr: "Un wireframe est une maquette schématique d'une page, sans design final, qui pose la structure et la hiérarchie des contenus.", en: "A wireframe is a schematic page layout, without final design, that sets structure and content hierarchy." },
    body: {
      fr: [
        "Le wireframe montre où se placent les blocs : titre, image, formulaire, sans couleur ni typographie définitive. Il sert à valider l'organisation avant d'investir dans le design visuel.",
        "Travailler en wireframe évite les allers-retours coûteux. Une fois la structure validée par le client, l'équipe design peut se concentrer sur l'identité visuelle sans repenser la mise en page.",
      ],
      en: [
        "A wireframe shows where blocks sit: heading, image, form, without final color or typography. It validates the organization before investing in visual design.",
        "Working in wireframes avoids costly back-and-forth. Once the structure is approved by the client, the design team can focus on visual identity without rethinking layout.",
      ],
    },
    related: ["information-architecture", "visual-hierarchy", "design-system", "usability"],
  },
  {
    slug: slug("design-system"),
    term: { fr: "Design system", en: "Design System" },
    category: "ux",
    short: { fr: "Un design system est l'ensemble cohérent de composants, règles et tokens (couleurs, typographies, espacements) qui garantit l'unité visuelle d'un site.", en: "A design system is the coherent set of components, rules, and tokens (colors, typography, spacing) that keeps a site visually unified." },
    body: {
      fr: [
        "Un design system centralise les décisions visuelles : palette de couleurs, échelle typographique, style des boutons, espacements. Chaque composant du site puise dans ces règles communes.",
        "Sur un site en croissance, il évite l'incohérence : deux boutons différents, trois nuances de bleu. Il accélère aussi le développement de nouvelles pages, chaque brique étant déjà définie.",
      ],
      en: [
        "A design system centralizes visual decisions: color palette, type scale, button style, spacing. Every component on the site draws from these shared rules.",
        "On a growing site, it prevents inconsistency: two different buttons, three shades of blue. It also speeds up building new pages, since each building block is already defined.",
      ],
    },
    related: ["visual-hierarchy", "user-interface", "responsive-design", "whitespace"],
  },
  {
    slug: slug("accessibility"),
    term: { fr: "Accessibilité", en: "Accessibility" },
    category: "ux",
    short: { fr: "L'accessibilité garantit qu'un site est utilisable par tous, y compris les personnes en situation de handicap, via un code et un design adaptés.", en: "Accessibility ensures a site is usable by everyone, including people with disabilities, through adapted code and design." },
    body: {
      fr: [
        "Un site accessible respecte des règles concrètes : contraste suffisant, navigation au clavier, textes alternatifs sur les images, structure HTML sémantique lisible par un lecteur d'écran.",
        "Au-delà de l'obligation légale dans certains cas, l'accessibilité profite à tous les visiteurs : un site plus clair, plus rapide à parcourir, mieux compris par les moteurs de recherche.",
      ],
      en: [
        "An accessible site follows concrete rules: sufficient contrast, keyboard navigation, alt text on images, semantic HTML structure readable by a screen reader.",
        "Beyond legal obligation in some cases, accessibility benefits every visitor: a clearer site, faster to scan, better understood by search engines.",
      ],
    },
    related: ["alt-attribute", "usability", "responsive-design", "user-experience"],
  },
  {
    slug: slug("information-architecture"),
    term: { fr: "Architecture de l'information", en: "Information Architecture" },
    category: "ux",
    short: { fr: "L'architecture de l'information organise les contenus d'un site en une structure claire et logique : menus, catégories, arborescence des pages.", en: "Information architecture organizes a site's content into a clear, logical structure: menus, categories, page hierarchy." },
    body: {
      fr: [
        "Elle définit comment les pages s'articulent entre elles : quelles rubriques, quels sous-menus, quels chemins pour atteindre une information. Une bonne architecture se devine avant même d'être expliquée.",
        "Sur un site avec beaucoup de contenu, comme un blog ou un catalogue, une architecture claire réduit le nombre de clics nécessaires et facilite aussi le travail des moteurs de recherche pour indexer le site.",
      ],
      en: [
        "It defines how pages relate to one another: which sections, which submenus, which paths lead to a given piece of information. Good architecture feels obvious before it's even explained.",
        "On a content-heavy site, like a blog or a catalog, clear architecture reduces the number of clicks needed and also helps search engines index the site.",
      ],
    },
    related: ["sitemap-xml", "internal-links", "usability", "website-structure"],
  },
  {
    slug: slug("user-signals"),
    term: { fr: "Signaux utilisateur", en: "User Signals" },
    category: "ux",
    short: { fr: "Les signaux utilisateur sont les comportements observés sur un site (temps passé, clics, scroll, taux de rebond) qui indiquent la qualité de l'expérience.", en: "User signals are observed behaviors on a site (time on page, clicks, scroll depth, bounce rate) that indicate experience quality." },
    body: {
      fr: [
        "Un temps de visite long, un scroll jusqu'en bas de page, un clic sur le CTA sont des signaux positifs. Un retour immédiat aux résultats de recherche est un signal négatif.",
        "Ces signaux orientent les décisions de design, mais aussi le référencement : les moteurs de recherche, dont Google, en tiennent compte pour évaluer la pertinence d'une page.",
      ],
      en: [
        "A long time on page, scrolling to the bottom, clicking a CTA are positive signals. An immediate return to search results is a negative one.",
        "These signals guide design decisions, and also SEO: search engines, including Google, factor them in when assessing a page's relevance.",
      ],
    },
    related: ["conversion-rate", "serp", "core-web-vitals", "usability"],
  },
  {
    slug: slug("visual-hierarchy"),
    term: { fr: "Hiérarchie visuelle", en: "Visual Hierarchy" },
    category: "ux",
    short: { fr: "La hiérarchie visuelle organise les éléments d'une page par ordre d'importance, grâce à la taille, la couleur et l'espacement, pour guider le regard.", en: "Visual hierarchy organizes page elements by order of importance, using size, color, and spacing, to guide the eye." },
    body: {
      fr: [
        "Un titre plus grand qu'un paragraphe, un bouton coloré sur fond neutre : ces choix ne sont pas décoratifs, ils indiquent où regarder en premier. Sans hiérarchie, tout est lu au même niveau, donc rien ne ressort.",
        "Une hiérarchie claire réduit l'effort de lecture. Le visiteur comprend en quelques secondes ce qui compte : le message principal, puis l'action à réaliser.",
      ],
      en: [
        "A heading larger than a paragraph, a colored button on a neutral background: these choices aren't decorative, they signal where to look first. Without hierarchy, everything reads at the same level, so nothing stands out.",
        "Clear hierarchy reduces reading effort. The visitor understands within seconds what matters: the main message, then the action to take.",
      ],
    },
    related: ["above-the-fold", "whitespace", "design-system", "call-to-action"],
  },
  {
    slug: slug("micro-interaction"),
    term: { fr: "Micro-interaction", en: "Micro-interaction" },
    category: "ux",
    short: { fr: "Une micro-interaction est une animation courte en réponse à une action : survol de bouton, coche de formulaire, chargement. Elle rend l'interface vivante.", en: "A micro-interaction is a short animation in response to an action: button hover, form checkmark, loading state. It makes an interface feel alive." },
    body: {
      fr: [
        "Ces détails, souvent inférieurs à une seconde, confirment qu'une action a bien été prise en compte : un bouton qui change de couleur, un champ qui valide en vert. Ils rassurent sans distraire.",
        "Bien utilisées, les micro-interactions renforcent la confiance dans un formulaire ou un tunnel de conversion. Mal dosées, elles ralentissent l'interface et agacent le visiteur.",
      ],
      en: [
        "These details, often under a second long, confirm that an action was registered: a button that changes color, a field that turns green on validation. They reassure without distracting.",
        "Used well, micro-interactions build confidence in a form or conversion flow. Overused, they slow the interface down and irritate the visitor.",
      ],
    },
    related: ["user-interface", "usability", "user-experience", "conversion"],
  },
  {
    slug: slug("whitespace"),
    term: { fr: "Espace blanc", en: "Whitespace" },
    category: "ux",
    short: { fr: "L'espace blanc est l'espace vide autour et entre les éléments d'une page. Il structure la lecture et donne une impression de qualité.", en: "Whitespace is the empty space around and between page elements. It structures reading and signals quality." },
    body: {
      fr: [
        "L'espace blanc n'est pas un vide à combler, c'est un outil de hiérarchie. Il sépare les blocs, met en valeur un titre, allège une page dense.",
        "Un site trop chargé fatigue le regard et dilue le message. Un usage généreux de l'espace, à l'inverse, associe souvent la marque à une image plus soignée, plus premium.",
      ],
      en: [
        "Whitespace isn't empty space to fill, it's a hierarchy tool. It separates blocks, highlights a heading, lightens a dense page.",
        "An overcrowded site tires the eye and dilutes the message. Generous use of space, by contrast, often associates a brand with a more refined, more premium image.",
      ],
    },
    related: ["visual-hierarchy", "design-system", "user-interface", "above-the-fold"],
  },
  {
    slug: slug("heuristic"),
    term: { fr: "Heuristique", en: "Heuristic" },
    category: "ux",
    short: { fr: "Une heuristique est une règle empirique d'ergonomie utilisée pour évaluer rapidement l'utilisabilité d'une interface, comme les 10 heuristiques de Nielsen.", en: "A heuristic is an empirical usability rule used to quickly evaluate an interface, such as Nielsen's 10 heuristics." },
    body: {
      fr: [
        "Les heuristiques sont des principes généraux, comme 'garder la visibilité de l'état du système' ou 'éviter les erreurs plutôt que de les corriger'. Elles servent de grille de lecture rapide pour un audit.",
        "Sans remplacer des tests utilisateurs complets, une évaluation heuristique révèle vite les frictions évidentes : un menu incohérent, une action sans retour visuel, un message d'erreur incompréhensible.",
      ],
      en: [
        "Heuristics are general principles, like 'keep system status visible' or 'prevent errors rather than fix them'. They serve as a quick reading grid for an audit.",
        "Without replacing full user testing, a heuristic evaluation quickly surfaces obvious friction: an inconsistent menu, an action with no visual feedback, an error message that makes no sense.",
      ],
    },
    related: ["usability", "user-interface", "user-experience", "micro-interaction"],
  },
] as const;

export const GLOSSARY_BY_SLUG: ReadonlyMap<string, GlossaryTerm> = new Map(
  GLOSSARY_TERMS.map((term) => [term.slug, term]),
);

export const GLOSSARY_HEADER: Bilingual<{ title: string; subtitle: string }> = {
  fr: {
    title: "Glossaire",
    subtitle:
      "Les termes de l'IA, du SEO, du web et du design, définis simplement. Le vocabulaire d'un site trouvé, lu et cité.",
  },
  en: {
    title: "Glossary",
    subtitle:
      "AI, SEO, web and design terms, defined simply. The vocabulary of a site that gets found, read and cited.",
  },
};

export const glossarySeo: Bilingual<{ title: string; description: string }> = {
  fr: {
    title: "Glossaire IA, SEO et web — TeneX Studio",
    description:
      "Définitions claires des termes de l'IA, du SEO, du GEO, du web et de l'UX. Le vocabulaire pour comprendre un site moderne.",
  },
  en: {
    title: "AI, SEO and web glossary — TeneX Studio",
    description:
      "Clear definitions of AI, SEO, GEO, web and UX terms. The vocabulary to understand a modern website.",
  },
};

const GLOSSARY_SEGMENT: Readonly<Record<Locale, string>> = {
  fr: "glossaire",
  en: "glossary",
};

export function glossaryIndexPath(locale: Locale): string {
  return pathFor(locale, `/${GLOSSARY_SEGMENT[locale]}`);
}

export function glossaryPath(term: GlossaryTerm, locale: Locale): string {
  return pathFor(locale, `/${GLOSSARY_SEGMENT[locale]}/${term.slug}`);
}

for (const term of GLOSSARY_TERMS) {
  assertArrayParity(`glossary.${term.slug}.body`, term.body);
}
