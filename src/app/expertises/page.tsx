import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, LineChart, Banknote, HardHat, FileText, Leaf } from "lucide-react"

export default function ExpertisesPage() {
  const expertises = [
    {
      title: "Ingénierie & Audit Technique",
      icon: ShieldCheck,
      description: "Diagnostics approfondis de vos installations et conformité réglementaire.",
      features: ["Audit Énergétique Réglementaire", "Diagnostic Technique Global (DTG)", "Audit des installations CVC", "Décret Tertiaire & BACS"]
    },
    {
      title: "Maîtrise d'Œuvre (MOE) & AMO",
      icon: HardHat,
      description: "Pilotage technique et administratif complet de vos projets de rénovation.",
      features: ["Conception & Études d'exécution", "Consultation des entreprises (DCE)", "Suivi & Réception de travaux", "Commissionnement"]
    },
    {
      title: "Ingénierie Financière & CEE",
      icon: Banknote,
      description: "Maximisation des aides et subventions pour financer vos projets.",
      features: ["Montage dossiers CEE", "MaPrimeRénov' & Fonds Chaleur", "Tiers Financement", "Calcul de ROI & VAN"]
    },
    {
      title: "Décarbonation & Environnement",
      icon: Leaf,
      description: "Stratégies de réduction de l'empreinte carbone et valorisation verte.",
      features: ["Bilan Carbone® (Méthode ADEME)", "Stratégie de décarbonation", "Intégration des EnR", "Certifications (BREEAM, HQE)"]
    },
    {
      title: "Monitoring & Performance",
      icon: LineChart,
      description: "Suivi en temps réel et pilotage de la performance énergétique.",
      features: ["Monitoring multi-fluides", "Suivi des indicateurs (IPE/KPI)", "Contrat de Performance (CPE)", "Energy Management"]
    },
    {
      title: "Smart Building & GTB",
      icon: FileText,
      description: "Optimisation du pilotage des bâtiments connectés.",
      features: ["Audit des systèmes GTB/GTC", "Conformité Décret BACS", "IoT & Capteurs connectés", "Pilotage à distance"]
    }
  ]

  return (
    <div className="container-centered py-12 space-y-16 pt-32">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-primary">Nos Domaines d&apos;Intervention</h1>
        <p className="text-lg text-muted-foreground">
          AEC met à votre disposition une équipe d&apos;ingénieurs pluridisciplinaires pour intervenir sur toute la chaîne de valeur de la performance énergétique.
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
