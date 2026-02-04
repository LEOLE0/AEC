"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Leaf, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Nexity", "BNP Real Estate", "Vinci", "Bouygues", "Foncia", 
  "Eiffage", "Sogeprom", "Kaufman & Broad",
  "JLL", "CBRE", "Cushman & Wakefield", "Blackstone", 
  "Allianz Real Estate", "AXA IM", "Generali", "Prologis"
];

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Architecture moderne AEC"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
        </motion.div>

        <motion.div 
          style={{ y: textY }}
          className="relative z-10 container-px max-w-5xl text-center space-y-8 pt-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg"
          >
            L&apos;Excellence <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Réglementaire</span> <br />
            Performance Énergétique
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light"
          >
            AEC accompagne les institutionnels et les grands comptes dans la transition énergétique et la valorisation de leur patrimoine immobilier.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button asChild size="lg" className="rounded-full text-base px-8 h-12 bg-emerald-500 hover:bg-emerald-400 text-white border-0 shadow-lg shadow-emerald-900/20 transition-all hover:scale-105">
              <Link href="/etude-en-ligne">Réaliser une étude en ligne</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 h-12 bg-white/5 hover:bg-white/10 text-white border-white/20 backdrop-blur-md transition-all hover:scale-105">
              <Link href="/expertises">Découvrir nos expertises</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Signals (Marquee) */}
      <section className="py-10 bg-white overflow-hidden relative z-20">
        <div className="container-centered mb-6">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Ils nous font confiance
          </p>
        </div>
        <div className="relative flex w-full overflow-hidden mask-linear-gradient">
           {/* Double the list for infinite scroll effect */}
           <div className="flex animate-scroll whitespace-nowrap py-4">
              {[...partners, ...partners, ...partners].map((brand, i) => (
                <div key={i} className="mx-8 md:mx-16 flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
                  <Building2 className="w-6 h-6 text-slate-400" />
                  <span className="text-xl font-bold text-slate-600">{brand}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 bg-slate-50 relative z-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />
        
        <div className="container-centered relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Une approche globale</h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light">
              Nous combinons expertise technique, maîtrise réglementaire et stratégie financière pour optimiser vos actifs durablement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Audit & Conformité",
                desc: "Diagnostic complet, DPE, Audit Énergétique Réglementaire. Mettez votre parc en conformité avec le Décret Tertiaire.",
                icon: ShieldCheck,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Stratégie Carbone",
                desc: "Définition de trajectoires bas carbone, intégration des EnR, et pilotage de la performance environnementale.",
                icon: Leaf,
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              },
              {
                title: "Valorisation d'Actifs",
                desc: "Amélioration de la \"Valeur Verte\", optimisation des charges et montage de dossiers de subventions.",
                icon: TrendingUp,
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((item, index) => (
              <Card key={index} className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {item.desc}
                  </CardDescription>
                  <Link href="/expertises" className={`inline-flex items-center text-sm font-semibold ${item.color} hover:underline group-hover:translate-x-1 transition-transform`}>
                    En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature / Corporate Section */}
      <section className="py-24 md:py-32 bg-white relative z-20 overflow-hidden">
        <div className="container-centered grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
               <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                  alt="Bureau d'études AEC"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
               <div className="absolute bottom-8 left-8 right-8 text-white">
                 <div className="text-3xl font-bold mb-2">10+ Années</div>
                 <div className="text-sm opacity-90">D&apos;expérience au service de la performance énergétique</div>
               </div>
             </div>
             {/* Decoratif pattern */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">
               Pourquoi nous ?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
              L&apos;expertise technique <br/>
              <span className="text-emerald-500">au service de vos actifs</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Notre cabinet se distingue par une rigueur scientifique et une connaissance pointue des mécanismes réglementaires. Nous ne faisons pas que des audits, nous construisons des stratégies pérennes.
            </p>
            <ul className="space-y-5">
              {[
                "Expertise certifiée OPQIBI & RGE",
                "Accompagnement de A à Z (Audit > Travaux > Suivi)",
                "Vision ROIste de la rénovation",
                "Interlocuteur unique dédié"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-foreground font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 transition-all hover:gap-3">
                <Link href="/contact">
                  Discuter de votre projet <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-20 container-centered">
        <div className="bg-primary rounded-[2.5rem] overflow-hidden relative p-8 md:p-20 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
              </svg>
          </div>
          
          <div className="text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Prêt à optimiser votre patrimoine ?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-xl font-light">
              Obtenez une première estimation de vos obligations réglementaires et du potentiel d&apos;économie d&apos;énergie dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-emerald-50 text-lg px-10 h-16 shadow-2xl transition-transform hover:-translate-y-1">
                <Link href="/etude-en-ligne">Commencer mon étude gratuite</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
