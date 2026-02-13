"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Search, FileBarChart, PiggyBank, Hammer, LucideIcon } from "lucide-react"

export default function MethodologyPage() {
  const containerRef = useRef(null)

  const steps = [
    {
      id: "01",
      title: "Diagnostic",
      subtitle: "Audit & État des lieux",
      desc: "Analyse approfondie des systèmes (Bâti, CVC, Usages), instrumentation si nécessaire, et identification précise des gisements d'économies d'énergie.",
      icon: Search,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "02",
      title: "Conception",
      subtitle: "Ingénierie & Stratégie",
      desc: "Modélisation thermique (STD), dimensionnement des équipements, et élaboration de scénarios de travaux chiffrés avec calcul de ROI et TRI.",
      icon: FileBarChart,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      id: "03",
      title: "Financement",
      subtitle: "Ingénierie Financière",
      desc: "Montage administratif et technique des dossiers de subventions (CEE, MaPrimeRénov', Fonds Chaleur) pour optimiser votre plan de financement.",
      icon: PiggyBank,
      color: "from-emerald-400 to-emerald-600"
    },
    {
      id: "04",
      title: "Réalisation",
      subtitle: "Maîtrise d'Œuvre (MOE)",
      desc: "Direction de l'exécution des travaux (DET), coordination des entreprises, suivi financier et commissionnement pour garantir la performance réelle.",
      icon: Hammer,
      color: "from-slate-600 to-slate-800"
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* Sticky Header Section */}
      <section className="h-[50vh] flex flex-col items-center justify-center sticky top-0 bg-white z-10 border-b border-slate-100">
        <div className="container-centered text-center space-y-6">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 100 }} 
            className="h-1 bg-primary mx-auto"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter">
            Démarche d&apos;Ingénierie
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-xl mx-auto">
            Une méthodologie éprouvée, de l&apos;audit à la garantie de performance.
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Section (Desktop) / Vertical Stack (Mobile) */}
      <div className="relative z-20 bg-slate-50">
        <div className="container-centered py-24 md:py-0">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 min-h-[50vh] md:min-h-screen items-stretch">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Spacer */}
      <div className="h-[20vh] bg-white" />
    </div>
  )
}

interface StepProps {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

function StepCard({ step, index }: { step: StepProps, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 last:border-r-0 min-h-[300px] md:h-auto bg-white md:bg-transparent hover:bg-white transition-colors duration-500"
    >
      <div className="space-y-6 relative z-10">
        <div className="flex justify-between items-start">
          <span className="text-6xl md:text-8xl font-bold text-slate-100 group-hover:text-slate-50 transition-colors duration-500 select-none">
            {step.id}
          </span>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
            <step.icon className="text-white w-6 h-6" />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{step.title}</h3>
          <p className="text-sm font-medium text-emerald-600 uppercase tracking-widest">{step.subtitle}</p>
        </div>
      </div>

      <div className="mt-8 md:mt-auto relative z-10">
        <p className="text-slate-600 leading-relaxed font-light text-lg">
          {step.desc}
        </p>
      </div>

      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
    </motion.div>
  )
}
