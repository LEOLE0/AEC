export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  // Page 1
  {
    id: "1",
    title: "Comprendre le Décret Tertiaire : Obligations et échéances 2030",
    excerpt: "Le dispositif Éco Énergie Tertiaire impose une réduction progressive de la consommation énergétique. Décryptage des étapes clés pour les assujettis.",
    date: "12 Février 2026",
    category: "Réglementation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    readTime: "5 min"
  },
  {
    id: "2",
    title: "GTB et Décret BACS : Pourquoi l'automatisation devient obligatoire",
    excerpt: "D'ici 2027, la plupart des bâtiments tertiaires devront être équipés d'un système de Gestion Technique du Bâtiment. Quels sont les avantages concrets ?",
    date: "08 Février 2026",
    category: "Technologie",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80",
    readTime: "4 min"
  },
  {
    id: "3",
    title: "Financer sa rénovation énergétique avec les CEE",
    excerpt: "Les Certificats d'Économies d'Énergie peuvent couvrir une part importante de vos travaux. Découvrez comment monter un dossier éligible.",
    date: "01 Février 2026",
    category: "Financement",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
    readTime: "6 min"
  },
  {
    id: "4",
    title: "L'Audit Énergétique Réglementaire en Copropriété",
    excerpt: "Obligatoire pour les copropriétés de plus de 50 lots, l'audit est la première pierre de votre Plan Pluriannuel de Travaux (PPT).",
    date: "28 Janvier 2026",
    category: "Copropriété",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    readTime: "5 min"
  },
  {
    id: "5",
    title: "Industrie : Comment décarboner vos process ?",
    excerpt: "Récupération de chaleur fatale, électrification des usages, monitoring... Les leviers pour réduire l'empreinte carbone de votre site industriel.",
    date: "20 Janvier 2026",
    category: "Industrie",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    readTime: "7 min"
  },
  {
    id: "6",
    title: "ISO 50001 : Mettre en place un Système de Management de l'Énergie",
    excerpt: "La norme ISO 50001 permet d'ancrer la performance énergétique dans la stratégie de l'entreprise. Un atout compétitif majeur.",
    date: "15 Janvier 2026",
    category: "Certification",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    readTime: "6 min"
  },
  {
    id: "7",
    title: "Le Contrat de Performance Énergétique (CPE) expliqué",
    excerpt: "Garantir les économies d'énergie dans la durée grâce à un engagement contractuel avec votre exploitant ou bureau d'études.",
    date: "10 Janvier 2026",
    category: "Stratégie",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    readTime: "4 min"
  },
  {
    id: "8",
    title: "Photovoltaïque en toiture : Rentabilité et Autoconsommation",
    excerpt: "Produire sa propre électricité est devenu un levier incontournable pour sécuriser ses coûts énergétiques face à la volatilité des marchés.",
    date: "05 Janvier 2026",
    category: "EnR",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
    readTime: "5 min"
  },
  {
    id: "9",
    title: "MaPrimeRénov' Parcours Accompagné : Ce qui change en 2026",
    excerpt: "Le dispositif évolue pour mieux soutenir les rénovations globales. Zoom sur les nouveaux barèmes et conditions d'éligibilité.",
    date: "02 Janvier 2026",
    category: "Financement",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
    readTime: "3 min"
  },

  // Page 2
  {
    id: "10",
    title: "Remplacer sa chaudière fioul/gaz : Les alternatives",
    excerpt: "Pompe à chaleur, chaudière biomasse, raccordement au réseau de chaleur urbain... Quelle solution pour votre bâtiment ?",
    date: "28 Décembre 2025",
    category: "Technique",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    readTime: "6 min"
  },
  {
    id: "11",
    title: "Le confort d'été : Le grand oublié de la rénovation ?",
    excerpt: "Avec le réchauffement climatique, traiter la surchauffe est aussi crucial que l'isolation hivernale. Solutions passives et actives.",
    date: "20 Décembre 2025",
    category: "Confort",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80",
    readTime: "5 min"
  },
  {
    id: "12",
    title: "Qu'est-ce que la Valeur Verte d'un bâtiment ?",
    excerpt: "L'impact de la performance énergétique sur la valeur vénale de votre bien immobilier. Une corrélation de plus en plus forte.",
    date: "15 Décembre 2025",
    category: "Immobilier",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
    readTime: "4 min"
  },
  {
    id: "13",
    title: "Relamping LED : Un ROI imbattable",
    excerpt: "L'éclairage représente encore un gisement d'économies facile et rapide. Pourquoi passer au 100% LED piloté ?",
    date: "10 Décembre 2025",
    category: "Technique",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80",
    readTime: "3 min"
  },
  {
    id: "14",
    title: "Copropriété : Comment voter des travaux en AG ?",
    excerpt: "Majorités requises, préparation du dossier, rôle du conseil syndical... Nos conseils pour réussir votre assemblée générale.",
    date: "05 Décembre 2025",
    category: "Copropriété",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80",
    readTime: "6 min"
  },
  {
    id: "15",
    title: "La ventilation double flux : Luxe ou nécessité ?",
    excerpt: "Qualité de l'air intérieur et récupération de calories. Quand faut-il prescrire une VMC double flux ?",
    date: "01 Décembre 2025",
    category: "Technique",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80",
    readTime: "5 min"
  },
  {
    id: "16",
    title: "Secteur Public : Le fonds vert pour les collectivités",
    excerpt: "Comment les mairies et collectivités peuvent solliciter le Fonds Vert pour rénover écoles et bâtiments administratifs.",
    date: "25 Novembre 2025",
    category: "Secteur Public",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    readTime: "4 min"
  },
  {
    id: "17",
    title: "Mobilité électrique : Équiper son parking en bornes IRVE",
    excerpt: "Pré-équipement, gestion de la charge, facturation... Tout savoir sur l'installation de bornes de recharge.",
    date: "20 Novembre 2025",
    category: "Mobilité",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80",
    readTime: "5 min"
  },
  {
    id: "18",
    title: "L'importance du Commissionnement",
    excerpt: "Pourquoi vos installations neuves ne fonctionnent pas toujours comme prévu ? L'art de vérifier la performance réelle.",
    date: "15 Novembre 2025",
    category: "Expertise",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&q=80",
    readTime: "6 min"
  },

  // Page 3
  {
    id: "19",
    title: "Bilan Carbone : Méthodologie et périmètres",
    excerpt: "Scope 1, 2, 3... Comprendre comment comptabiliser ses émissions pour mieux les réduire.",
    date: "10 Novembre 2025",
    category: "RSE",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    readTime: "7 min"
  },
  {
    id: "20",
    title: "Isolation des combles : Le premier pas vers l'efficacité",
    excerpt: "30% des déperditions thermiques passent par le toit. Une intervention prioritaire et souvent peu coûteuse.",
    date: "05 Novembre 2025",
    category: "Technique",
    image: "https://images.unsplash.com/photo-1628135870395-5f5024467c69?auto=format&fit=crop&q=80",
    readTime: "3 min"
  },
  {
    id: "21",
    title: "Le Carnet d'Information du Logement (CIL)",
    excerpt: "Une nouvelle obligation pour conserver la mémoire technique du logement et faciliter les travaux futurs.",
    date: "01 Novembre 2025",
    category: "Réglementation",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
    readTime: "4 min"
  },
  {
    id: "22",
    title: "Fluides frigorigènes : La fin des HFC",
    excerpt: "L'impact de la réglementation F-Gas sur vos groupes froids et climatisations. Quelles alternatives pérennes ?",
    date: "25 Octobre 2025",
    category: "Industrie",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
    readTime: "6 min"
  },
  {
    id: "23",
    title: "Data Centers : Le défi de l'efficacité énergétique",
    excerpt: "PUE, Free cooling, récupération de chaleur... Optimiser la consommation des infrastructures numériques.",
    date: "20 Octobre 2025",
    category: "Technologie",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80",
    readTime: "5 min"
  },
  {
    id: "24",
    title: "Le rôle de l'AMO (Assistance à Maîtrise d'Ouvrage)",
    excerpt: "Pourquoi se faire accompagner par un expert indépendant est la clé pour sécuriser vos projets complexes.",
    date: "15 Octobre 2025",
    category: "Expertise",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    readTime: "4 min"
  },
  {
    id: "25",
    title: "Tertiaire : Optimiser l'usage pour réduire la facture",
    excerpt: "Au-delà des travaux, comment les comportements et le réglage des équipements influencent la consommation.",
    date: "10 Octobre 2025",
    category: "Exploitation",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    readTime: "5 min"
  },
  {
    id: "26",
    title: "L'avenir est aux réseaux de chaleur basse température",
    excerpt: "Les réseaux de 4ème et 5ème génération permettent d'intégrer massivement les énergies renouvelables et de récupération.",
    date: "05 Octobre 2025",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
    readTime: "6 min"
  },
  {
    id: "27",
    title: "AEC célèbre ses 13 ans d'engagement",
    excerpt: "Retour sur plus d'une décennie au service de la performance énergétique et perspectives pour l'avenir.",
    date: "01 Octobre 2025",
    category: "Vie de l'entreprise",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    readTime: "3 min"
  }
];
