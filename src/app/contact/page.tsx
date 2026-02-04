"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container-centered">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
            Disponible sous 24h
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6"
          >
            Parlons de votre <br/>
            <span className="text-emerald-500">transition énergétique</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-light"
          >
            Vous avez un projet ? Une question réglementaire ? Nos experts sont là pour vous guider.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Contact Info (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-primary rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Nos Coordonnées</h3>
              
              <div className="space-y-8 relative z-10">
                <a href="tel:+33123456789" className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Téléphone</p>
                    <p className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">01 23 45 67 89</p>
                  </div>
                </a>

                <a href="mailto:contact@aec-conseil.fr" className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <p className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">contact@aec-conseil.fr</p>
                  </div>
                </a>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Bureau</p>
                    <p className="text-lg font-semibold">6 rue d’Armaillé<br/>75017 Paris, France</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-slate-400 mb-4">Suivez-nous</p>
                <div className="flex gap-4">
                  {/* Social Icons placeholders */}
                  {['Linkedin', 'Twitter', 'Instagram'].map((social) => (
                    <div key={social} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all cursor-pointer">
                      <span className="sr-only">{social}</span>
                      <ArrowRight className="w-4 h-4 -rotate-45" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 min-h-[600px] flex flex-col justify-center">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Message envoyé !</h3>
                  <p className="text-slate-500 max-w-md text-lg leading-relaxed">
                    Merci de nous avoir contactés. Notre équipe a bien reçu votre demande et reviendra vers vous sous 24h ouvrées.
                  </p>
                  <Button onClick={() => window.location.href = "/"} className="rounded-full mt-6 bg-primary hover:bg-slate-800 text-white px-8 h-12 text-lg">
                    Retour à l&apos;accueil
                  </Button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Envoyez-nous un message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstname" className="text-slate-600 font-medium">Prénom</Label>
                        <Input id="firstname" required placeholder="Jean" className="h-12 bg-slate-50 border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastname" className="text-slate-600 font-medium">Nom</Label>
                        <Input id="lastname" required placeholder="Dupont" className="h-12 bg-slate-50 border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-600 font-medium">Email professionnel</Label>
                      <Input id="email" type="email" required placeholder="jean.dupont@entreprise.com" className="h-12 bg-slate-50 border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-600 font-medium">Entreprise / Organisme</Label>
                      <Input id="company" placeholder="Votre société" className="h-12 bg-slate-50 border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-600 font-medium">Votre projet</Label>
                      <Textarea id="message" required className="min-h-[180px] bg-slate-50 border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 rounded-xl resize-none p-4" placeholder="Décrivez vos besoins (Audit, DPE, Stratégie carbone...)" />
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full h-14 text-lg font-semibold bg-primary hover:bg-slate-800 text-white rounded-xl transition-all shadow-lg hover:shadow-xl">
                        Envoyer le message
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
