import { ShieldCheck, TrendingUp, Leaf, Factory, Building2, Users2, Home } from "lucide-react";

export const PARTNERS = [
  "Nexity", "BNP Real Estate", "Vinci", "Bouygues", "Foncia", 
  "Eiffage", "Sogeprom", "Kaufman & Broad",
  "JLL", "CBRE", "Cushman & Wakefield", "Blackstone", 
  "Allianz Real Estate", "AXA IM", "Generali", "Prologis"
];

export const EXPERTISE_POLES = [
  {
    title: "Ingénierie Technique",
    desc: "Audits énergétiques, Diagnostics, Maîtrise d'Œuvre (MOE) et Assistance à Maîtrise d'Ouvrage (AMO) pour vos projets de rénovation.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Conformité & Décrets",
    desc: "Accompagnement complet pour le Décret Tertiaire, Décret BACS et certifications environnementales (ISO 50001, Bilan Carbone®).",
    icon: Leaf,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Ingénierie Financière",
    desc: "Optimisation du financement de vos travaux via les CEE (Certificats d'Économies d'Énergie) et subventions publiques.",
    icon: TrendingUp,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

export const SECTORS = [
  {
    title: "Industrie",
    desc: "Récupération de chaleur, utilités, process : décarbonez votre production.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
  },
  {
    title: "Tertiaire Public & Privé",
    desc: "Mise en conformité Décret Tertiaire et amélioration du confort occupant.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  },
  {
    title: "Copropriété",
    desc: "Audit global, PPT et accompagnement aux travaux de rénovation énergétique.",
    icon: Users2,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
  },
  {
    title: "Bailleurs Sociaux",
    desc: "Stratégie patrimoniale et lutte contre la précarité énergétique.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80"
  }
];

export const KEY_POINTS = [
  "Qualifications OPQIBI & RGE",
  "Ingénieurs & Énergéticiens certifiés",
  "Maîtrise des CEE & Financements",
  "Vision globale : Audit > Travaux > Suivi"
];
