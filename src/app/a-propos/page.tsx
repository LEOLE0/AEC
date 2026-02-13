"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ShieldCheck, Lightbulb, Users, Target, Rocket, Leaf } from "lucide-react"

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Hero / Intro */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
           <Image
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
             alt="Bureaux AEC"
             fill
             className="object-cover brightness-50"
             priority
           />
        </motion.div>
        
        <div className="container-centered relative z-10 text-center text-white space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            L&apos;Ingénierie de la <br/>
            <span className="text-emerald-400">Maîtrise Énergétique.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-slate-200 max-w-2xl mx-auto"
          >
            Bureau d&apos;études technique spécialisé dans la performance énergétique et la décarbonation des sites et équipements.
          </motion.p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 bg-white">
        <div className="container-centered grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
              Notre Mission
            </div>
            <h2 className="text-4xl font-bold text-primary leading-tight">
              Accompagner la transition énergétique par l&apos;excellence technique.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                AEC intervient sur l&apos;ensemble du territoire pour déployer des missions complètes : de l&apos;audit énergétique à la maîtrise d&apos;œuvre, en passant par l&apos;ingénierie financière.
              </p>
              <p>
                Face aux enjeux climatiques et réglementaires (Décret Tertiaire, BACS), nous apportons une réponse structurée, pragmatique et ROIste. Notre objectif : réduire vos consommations et décarboner vos actifs tout en valorisant votre patrimoine.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] bg-slate-100 rounded-[2rem] overflow-hidden">
             <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4">
                <div className="relative rounded-2xl overflow-hidden bg-slate-200 row-span-2">
                   <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Detail 1" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-slate-200">
                   <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" alt="Detail 2" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-slate-200">
                   <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Detail 3" fill className="object-cover" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Chiffres Clés (Animated Counters style) */}
      <section className="py-20 bg-primary text-white">
        <div className="container-centered grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { number: "20+", label: "Années d'expertise" },
            { number: "5000+", label: "Audits réalisés" },
            { number: "30", label: "Ingénieurs & Experts" },
            { number: "25%", label: "Économies moyennes" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-emerald-400">{stat.number}</div>
              <div className="text-sm md:text-base text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container-centered">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Nos Valeurs</h2>
            <p className="text-xl text-slate-500 font-light">
              Rigueur technique, transparence et engagement de résultat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Indépendance & Éthique",
                desc: "Garantie d'objectivité dans nos préconisations. Nous privilégions toujours l'intérêt du maître d'ouvrage.",
                icon: ShieldCheck,
                color: "bg-blue-500"
              },
              {
                title: "Ingénierie de Pointe",
                desc: "Une équipe pluridisciplinaire formée aux dernières réglementations et technologies (Simulation Thermique Dynamique, BIM).",
                icon: Lightbulb,
                color: "bg-amber-500"
              },
              {
                title: "Décarbonation & Impact",
                desc: "Un engagement concret pour la réduction des GES et la préservation de l'environnement.",
                icon: Leaf,
                color: "bg-emerald-500"
              },
              {
                title: "Proximité Client",
                desc: "Un interlocuteur unique dédié suit votre projet de A à Z, garantissant réactivité et fluidité.",
                icon: Users,
                color: "bg-indigo-500"
              },
              {
                title: "Innovation",
                desc: "Nous intégrons les dernières technologies (Drones, IA, IoT) pour affiner nos diagnostics.",
                icon: Rocket,
                color: "bg-purple-500"
              },
              {
                title: "Pragmatisme",
                desc: "Nos solutions sont techniquement robustes mais surtout économiquement viables.",
                icon: Target,
                color: "bg-rose-500"
              }
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                <div className={`w-12 h-12 rounded-2xl ${val.color} flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:scale-110 transition-transform`}>
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
