import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, LineChart, Banknote, HardHat, FileText, Leaf } from "lucide-react"

export default function ExpertisesPage() {
  const expertises = [
    {
      title: "Audit Réglementaire & Tertiaire",
      icon: ShieldCheck,
      description: "Mise en conformité avec les obligations légales (Décret Tertiaire, Décret BACS).",
      features: ["Audit Énergétique Réglementaire", "DPE Collectif & Tertiaire", "Déclaration OPERAT", "Schéma Directeur Énergie"]
    },
    {
      title: "Ingénierie Financière",
      icon: Banknote,
      description: "Optimisation du financement de vos travaux via les dispositifs d'aides.",
      features: ["Certificats d'Économies d'Énergie (CEE)", "MaPrimeRénov' Copropriété", "Fonds Chaleur ADEME", "Prêts bonifiés & Tiers Financement"]
    },
    {
      title: "Assistance à Maîtrise d'Ouvrage",
      icon: HardHat,
      description: "Accompagnement technique et administratif de la conception à la réception.",
      features: ["Programmation technique", "Consultation des entreprises", "Suivi d'exécution", "Commissionnement des installations"]
    },
    {
      title: "Stratégie Bas Carbone",
      icon: Leaf,
      description: "Réduction de l'empreinte environnementale de votre parc immobilier.",
      features: ["Bilan Carbone", "Analyse de Cycle de Vie (ACV)", "Intégration des EnR (Solaire, Géothermie)", "Biodiversité urbaine"]
    },
    {
      title: "Contrats de Performance",
      icon: LineChart,
      description: "Pilotage et suivi des engagements de performance énergétique (CPE).",
      features: ["Suivi des consommations (IPMVP)", "Optimisation des contrats d'exploitation", "Monitoring & GTB", "Sensibilisation des occupants"]
    },
    {
      title: "Certifications & Labels",
      icon: FileText,
      description: "Valorisation de votre patrimoine par des certifications reconnues.",
      features: ["BREEAM In-Use", "HQE Exploitation", "Label BBC Rénovation", "WiredScore"]
    }
  ]

  return (
    <div className="container-centered py-12 space-y-16 pt-32">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-primary">Nos Expertises</h1>
        <p className="text-lg text-muted-foreground">
          AEC déploie une offre de services complète pour sécuriser vos décisions et maximiser la performance de vos actifs immobiliers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertises.map((item, index) => (
          <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-base pt-2">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
