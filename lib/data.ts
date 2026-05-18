export const profileData = {
  // ─── Identité ───────────────────────────────────────────────────────────────
  name: "Anthony DELHOMME",
  title: "Product Owner Data | BI | IA | Adoption & Gouvernance",
  subtitle:
    "Product Owner Data avec +16 ans d'expérience en pilotage de produits data à forte valeur ajoutée pour les secteurs : Technologie, Luxe, Média et Finance.",
  bio: "Expert en gestion de produits Data (Cycle en V, SCRUM, SAFe 6 Agilist) avec capacité démontrée à placer les enjeux business et équipes utilisateurs au cœur des décisions. Spécialisé en Data Gouvernance, adoption des outils data, migration de plateformes BI et coordination d'équipes cross-fonctionnelles (métiers, techniques, data). Certifié Dataiku Core/Advanced/MLP et SAFe 6 Agilist.",
  phone: "06 27 45 56 37",
  email: "anthonydelhomme.pro@gmail.com",

  // ─── Liens ──────────────────────────────────────────────────────────────────
  calendlyUrl: "https://calendly.com/anthonydelhomme-pro",
  social: {
    linkedin:   "https://www.linkedin.com/in/anthony-delhomm%C3%A9-37979666/",
    malt:       "https://www.malt.fr/profile/anthonydelhomme",
    collective: "https://app.collective.work/collective/anthony-delhomme",
  },

  // ─── Chiffres clés ──────────────────────────────────────────────────────────
  highlights: [
    "+16 ans d'expérience en Data & transformation digitale",
    "Product Owner cumulé sur 8 ans",
    "Références clients : L'Oréal, TF1 Pub, Crédit du Nord",
    "Certifié Dataiku Core / Advanced / MLP",
    "SAFe 6 Agilist certifié 2026",
    "Certifié Manager avec l'IA (2026)",
  ],

  // ─── Expériences ────────────────────────────────────────────────────────────
  experience: [
    {
      title:       "Coach Migration & Data Gouvernance",
      company:     "Technologie (DSI - Data Factory)",
      period:      "2024 — 2025",
      duration:    "6 mois",
      description:
        "Accompagnement des équipes Data et Métier sur les problématiques de Migration, Testing et Data Gouvernance. Projet de migration de l'outillage data CALF et migration ODI vers xDI.",
      bullets: [
        "Pilotage de la gouvernance de données du projet de migration CALF avec formalisation des étapes de Testing pour un accompagnement qualitatif des utilisateurs",
        "Organisation et pilotage de la formation des équipes métiers sur Dataiku incluant la certification, avec animation de la communauté pour favoriser la participation aux master class",
        "Pilotage de la gouvernance sur la migration ODI vers xDI (2025) avec mise en place d'outils de suivi Power BI (Modélisation, Dataviz)",
        "Création d'un espace collaboratif centralisé sur SharePoint (Suivi Migration, Formation, FAQ)",
      ],
      stack: ["Dataiku", "Power BI", "SharePoint", "ODI", "xDI", "Data Gouvernance", "Migration"],
    },
    {
      title:       "Data Owner",
      company:     "L'Oréal — Beauté Dermatologique (CRM & Data)",
      period:      "2022 — 2024",
      duration:    "18 mois",
      description:
        "Programme HCP360 — source unique de vérité pour l'Europe et AMER. Accompagnement du Data Manager de LDB.",
      bullets: [
        "Traduction des business cases HCP360 en évolutions du modèle de données avec formalisation des spécifications et règles DQM",
        "Organisation du déploiement (roll-out) des pays avec cleaning, business analyse et formation aux modèles de données",
        "Formalisation des scripts de testing et supervision du mapping des données avec les sources",
        "Tests d'acceptation utilisateur (UAT) avec remontée des risques au chef de projet HCP360",
        "Pilotage de la gouvernance des données avec cartographie dans l'écosystème Data L'Oréal et formalisation du document des business rules",
      ],
      stack: ["SQL", "Excel", "Data Gouvernance", "Data Quality Management", "UAT", "Dictionnaire de données", "Business Analyse"],
    },
    {
      title:       "Product Owner",
      company:     "TF1 Pub — Équipe BI",
      period:      "2019 — 2022",
      duration:    "3 ans",
      description:
        "Mise en place de Datamarts et Dashboards pour les équipes métiers (Contrôle de Gestion, Administration des Ventes, Revenue Management, Ventes, Managers, RH).",
      bullets: [
        "Gestion de projets BI (CGV, RSE, Variables, Stocks, Facturation, Référentiel, Négociation, Radio) avec pilotage de comités de projet",
        "Analyse des besoins et rédaction des spécifications fonctionnelles et techniques avec ticketing sur AzureDevOps",
        "Développement de KPI et reporting sous SAP BO / QLIK et gestion de projets Power BI",
        "Animation d'ateliers pour la mise en œuvre de nouveaux projets et formation des utilisateurs",
        "Coordination d'équipes cross-fonctionnelles (développeurs, PO, architectes) et gestion de la maintenance BI",
      ],
      stack: ["SAP Business Objects", "QLIK", "Power BI", "SQL Server (SSMS)", "AzureDevOps", "Agile", "Data Management"],
    },
    {
      title:       "Product Owner",
      company:     "Data Warehouse — Équipe ZIPO",
      period:      "2014 — 2019",
      duration:    "5 ans",
      description:
        "Responsable des données relatives aux opérations de marché. Interlocuteur des équipes back-office et informatique. Projet de migration Calypso.",
      bullets: [
        "Pilotage et animation de comités de projet avec collecte et analyse des besoins utilisateurs",
        "Modélisation décisionnelle, optimisation de la data quality et visualisation sur périmètre international (BCE/FMI)",
        "Organisation du backlog, gestion des risques et priorisation des tickets",
        "Sessions d'ateliers BI/Business pour recueillir les besoins futurs",
        "Mise en place d'un dictionnaire de données et passage à la méthodologie SCRUM",
      ],
      stack: ["SCRUM", "Data Warehouse", "Business Intelligence", "Modélisation décisionnelle", "Dictionnaire de données", "Gestion des risques"],
    },
    {
      title:       "Data Analyst / Data Engineer",
      company:     "SI",
      period:      "2014",
      duration:    "4 mois",
      description:
        "Mise en place d'une base de données multi-sources.",
      bullets: [
        "Création de scripts SQL pour la création/modification de tables et flux d'énergie sous Talend",
        "Rédaction d'un document de formation sur les flux Talend",
        "Analyse de données, audit qualité et création de Dashboards Power BI",
        "Écriture d'un dictionnaire de données",
      ],
      stack: ["SQL Server", "Talend", "Power BI", "Audit des données", "Data dictionary"],
    },
    {
      title:       "Consultant Data",
      company:     "Crédit du Nord — Direction Financière",
      period:      "2012 — 2014",
      duration:    "18 mois",
      description:
        "Équipe Data Warehouse — Projet Lacydon lors de l'intégration de SMC (migration CMS to CDN Group).",
      bullets: [
        "Acceptation utilisateur : rédaction de feuilles d'entretien, analyse et validation des besoins",
        "Projet Lacydon (migration CMS → CDN Group) : cadrage, analyse de l'intégration des données",
        "Rédaction de protocoles de contrôle, fiches d'anomalies et acceptation fonctionnelle",
      ],
      stack: ["SCRUM", "Business Intelligence", "Business Analyse", "Cahier des charges", "Spécifications fonctionnelles et techniques"],
    },
    {
      title:       "Développeur BI",
      company:     "Info Penit — Équipe données",
      period:      "2010 — 2012",
      duration:    "18 mois",
      description:
        "Responsable du modèle de données et de la visualisation Info Penit. Participation à l'analyse de la satisfaction client.",
      bullets: [
        "Développement de rapports et univers SAP BO 4.1 / IDT avec audit et refonte d'univers complexes",
        "Création de présentations automatisées des résultats des enquêtes de satisfaction",
        "Création de la documentation fonctionnelle complète",
      ],
      stack: ["SAP Business Objects", "Power BI", "Méthodologie V", "Business Analyse", "Audit Data"],
    },
  ],

  // ─── Domaines de compétences ────────────────────────────────────────────────
  expertise: [
    {
      category: "Pilotage de Projets Data & Product Ownership",
      description:
        "Pilotage de produits data complexes avec gestion du backlog orientée impact business. 8 ans cumulés en tant que Product Owner.",
      skills: [
        "Cycle en V",
        "SCRUM",
        "SAFe 6 Agilist",
        "Pilotage de comités",
        "Gestion du backlog",
        "Animation d'ateliers métiers",
        "Coordination cross-fonctionnelle",
        "Gestion des risques",
        "Ticketing AzureDevOps",
      ],
    },
    {
      category: "Data Gouvernance & Migration",
      description:
        "+16 ans d'expérience sur les problématiques de Migration, Testing et Data Quality Management.",
      skills: [
        "Data Management",
        "Data Quality Management (DQM)",
        "Dictionnaire de données",
        "Modélisation fonctionnelle & technique",
        "Cartographie des données",
        "Règles métiers",
        "Migration de données",
        "Testing & validation",
      ],
    },
    {
      category: "Business Intelligence & Analytics",
      description:
        "Développement de KPI, tableaux de bord et solutions BI pour des équipes métiers variées.",
      skills: [
        "SAP Business Objects",
        "QLIK",
        "Power BI",
        "Développement de KPI",
        "Tableaux de bord",
        "Datamart",
        "Dataviz",
        "Modélisation décisionnelle",
      ],
    },
    {
      category: "Data Analysis & Engineering",
      description:
        "Analyse, audit et ingénierie des données avec des outils leaders du marché.",
      skills: [
        "SQL Server (SSMS)",
        "Excel avancé",
        "Talend",
        "Dataiku (Core / Advanced / MLP)",
        "ETL",
        "Data Warehouse",
        "Audit des données",
        "Analyse descriptive",
      ],
    },
    {
      category: "IA & Prompt Engineering",
      description:
        "Utilisation pratique de l'IA pour augmenter la productivité et gérer les projets avec les LLMs.",
      skills: [
        "Manager avec l'IA (certifié 2026)",
        "Augmenter la productivité grâce à l'IA (certifié 2026)",
        "Prompt Engineering",
        "LLMs",
      ],
    },
    {
      category: "Spécifications & Documentation",
      description:
        "Production de livrables clairs pour les équipes métier et technique.",
      skills: [
        "Spécifications fonctionnelles & techniques",
        "Cahiers des charges",
        "Documents utilisateurs",
        "UAT (User Acceptance Testing)",
        "Protocoles de contrôle",
        "Fiches d'anomalies",
      ],
    },
    {
      category: "Outils Collaboratifs",
      skills: ["SharePoint", "Base Camp", "AzureDevOps"],
    },
  ],

  // ─── Certifications & Formation ─────────────────────────────────────────────
  certifications: [
    {
      name:        "SAFe 6 Agilist",
      issuer:      "Scaled Agile",
      year:        2026,
      description: "Certification de leadership agile à l'échelle pour l'entreprise",
    },
    {
      name:        "Manager avec l'IA",
      issuer:      "Certification professionnelle",
      year:        2026,
      description: "Maîtrise des usages managériaux de l'intelligence artificielle",
    },
    {
      name:        "Augmenter la productivité grâce à l'IA",
      issuer:      "Certification professionnelle",
      year:        2026,
      description: "Applications pratiques de l'IA pour la productivité au quotidien",
    },
    {
      name:        "Dataiku Core / Advanced / MLP",
      issuer:      "Dataiku",
      year:        2025,
      description: "Triple certification Dataiku : niveau Core, Advanced et ML Practitioner",
    },
    {
      name:        "Se préparer au métier de chef de projet",
      issuer:      "Certification professionnelle",
      year:        2025,
      description: "Approfondissement des compétences en pilotage de projets",
    },
  ],

  // ─── Éducation ──────────────────────────────────────────────────────────────
  education: [
    {
      degree:      "Master 2 — Computer Programming, Specific Applications",
      school:      "Université Paris-Est Marne-la-Vallée",
      location:    "Paris, France",
      year:        2010,
    },
  ],

  // ─── Langues ────────────────────────────────────────────────────────────────
  languages: [
    { language: "Français", level: "Natif",         flag: "🇫🇷" },
    { language: "Anglais",  level: "Professionnel",  flag: "🇬🇧" },
  ],

  // ─── Clients de référence ───────────────────────────────────────────────────
  clients: [
    { name: "L'Oréal",        logo: "loreal",    sector: "Luxe / Beauté" },
    { name: "TF1 Pub",        logo: "tf1",       sector: "Média" },
    { name: "Crédit du Nord", logo: "cdn",       sector: "Finance" },
    { name: "Technologie DSI", logo: "tech",     sector: "Technologie" },
    { name: "PERNOD RICARD", logo: "pernod", sector: "Vins & Spiritueux" },
  ],

  // ─── À propos long ──────────────────────────────────────────────────────────
  aboutText: `Product Owner Data | BI | IA | Adoption & Gouvernance avec +16 ans d'expérience en pilotage de produits data à forte valeur ajoutée pour les secteurs Technologie, Luxe, Média et Finance.

Expert en gestion de produits Data (Cycle en V, SCRUM, SAFe 6 Agilist) avec une capacité démontrée à placer les enjeux business et les équipes utilisateurs au cœur des décisions. Spécialisé en Data Gouvernance, adoption des outils data, migration de plateformes BI et coordination d'équipes cross-fonctionnelles (métiers, techniques, data).

J'ai accompagné des entreprises de premier plan — L'Oréal, TF1 Pub, Crédit du Nord — dans leurs projets les plus critiques : migration de systèmes data, mise en place de gouvernance, développement de solutions BI et formation des équipes.

Certifié Dataiku Core / Advanced / MLP et SAFe 6 Agilist. Passionné par les applications pratiques de l'IA (certifié Manager avec l'IA et Prompt Engineering 2026).`,
};