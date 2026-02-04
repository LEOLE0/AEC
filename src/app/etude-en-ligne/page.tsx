"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Factory, Home, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  { id: 1, title: "Type de Bien" },
  { id: 2, title: "Caractéristiques" },
  { id: 3, title: "Vos Coordonnées" },
]

export default function OnlineStudyPage() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
    type: "",
    surface: "",
    postalCode: "",
    name: "",
    email: "",
    phone: ""
  })
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
    else handleSubmit()
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="container-centered py-24 min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 pt-32">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-primary">Demande reçue avec succès</h1>
        <p className="text-muted-foreground max-w-md">
          Un expert AEC va analyser vos premières données et vous recontactera sous 24h ouvrées pour affiner votre pré-étude.
        </p>
        <Button onClick={() => window.location.href = "/"} className="rounded-full mt-4">
          Retour à l&apos;accueil
        </Button>
      </div>
    )
  }

  return (
    <div className="container-centered py-12 max-w-3xl pt-32">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Étude Énergétique en Ligne</h1>
        <p className="text-muted-foreground">
          Remplissez ce formulaire pour obtenir une pré-analyse de vos obligations réglementaires.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step) => (
            <span
              key={step.id}
              className={cn(
                "text-sm font-medium transition-colors",
                currentStep >= step.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              {step.title}
            </span>
          ))}
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <Card className="border-none shadow-xl">
        <CardContent className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold mb-6">Quel type de bâtiment souhaitez-vous auditer ?</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { id: "tertiaire", label: "Tertiaire / Bureau", icon: Building2 },
                    { id: "copro", label: "Copropriété", icon: Home },
                    { id: "industrie", label: "Industrie", icon: Factory },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => updateForm("type", item.id)}
                      className={cn(
                        "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all hover:border-emerald-500 hover:bg-emerald-50",
                        formData.type === item.id
                          ? "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500"
                          : "border-slate-100 bg-white"
                      )}
                    >
                      <item.icon className={cn("w-8 h-8 mb-3", formData.type === item.id ? "text-emerald-600" : "text-slate-400")} />
                      <span className="font-medium text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold mb-6">Caractéristiques du bâtiment</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="surface">Surface approximative (m²)</Label>
                    <Input
                      id="surface"
                      type="number"
                      placeholder="Ex: 2500"
                      value={formData.surface}
                      onChange={(e) => updateForm("surface", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postal">Code Postal</Label>
                    <Input
                      id="postal"
                      placeholder="Ex: 75008"
                      value={formData.postalCode}
                      onChange={(e) => updateForm("postalCode", e.target.value)}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold mb-6">Vos coordonnées pour recevoir l&apos;étude</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet / Entreprise</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email professionnel</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between p-6 bg-slate-50 rounded-b-xl">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="text-muted-foreground"
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Retour
          </Button>
          <Button
            onClick={handleNext}
            className="bg-primary text-white rounded-full px-8"
            disabled={
              (currentStep === 1 && !formData.type) ||
              (currentStep === 2 && (!formData.surface || !formData.postalCode)) ||
              (currentStep === 3 && (!formData.email || !formData.name))
            }
          >
            {currentStep === 3 ? "Valider ma demande" : "Suivant"}
            {currentStep !== 3 && <ChevronRight className="w-4 h-4 ml-2" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
