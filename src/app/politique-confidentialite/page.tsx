"use client"

import { motion } from "framer-motion"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <section className="relative bg-primary pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Politique de <span className="text-emerald-400">Confidentialité</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 font-light"
          >
            Protection de vos données personnelles et RGPD
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <div className="container-centered -mt-10 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 max-w-4xl mx-auto space-y-12"
        >
          {/* Intro */}
          <section className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              La société <strong>AEC (AUDIT ENERGETIQUE CONSEIL)</strong>, soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus afin qu’ils puissent au mieux exercer leurs droits.
            </p>
          </section>

          {/* Collecte */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">1. Collecte des données</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous collectons les renseignements suivants via le formulaire de contact ou d&apos;étude en ligne :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Nom et Prénom</li>
              <li>Adresse email professionnelle</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l&apos;entreprise / Organisme</li>
              <li>Informations relatives à votre projet (type de bâtiment, surface, etc.)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Ces données sont nécessaires pour traiter votre demande, réaliser des devis ou vous recontacter dans le cadre de nos prestations de conseil.
            </p>
          </section>

          {/* Finalités */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">2. Finalités du traitement</h2>
            <p className="text-slate-600 leading-relaxed">
              Vos données sont collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Réponse aux demandes de contact et d&apos;information</li>
              <li>Élaboration de propositions commerciales et d&apos;audits</li>
              <li>Gestion de la relation client</li>
              <li>Envoi d&apos;informations réglementaires (newsletter) si vous y avez consenti</li>
            </ul>
          </section>

          {/* Conservation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">3. Durée de conservation</h2>
            <p className="text-slate-600 leading-relaxed">
              Les données sont conservées pendant une durée qui n&apos;excède pas la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Données prospects : 3 ans après le dernier contact</li>
              <li>Données clients : Pendant toute la durée de la relation contractuelle et 5 ans après la fin de celle-ci (prescription légale)</li>
            </ul>
          </section>

          {/* Droits */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">4. Vos droits (RGPD)</h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément à la réglementation européenne en vigueur, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Droit d&apos;accès (article 15 RGPD) et de rectification (article 16 RGPD)</li>
              <li>Droit à l&apos;effacement de vos données (article 17 RGPD)</li>
              <li>Droit de retirer à tout moment un consentement (article 13-2c RGPD)</li>
              <li>Droit à la limitation du traitement de vos données (article 18 RGPD)</li>
              <li>Droit d&apos;opposition au traitement de vos données (article 21 RGPD)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Pour exercer ces droits, vous pouvez nous contacter par email à : <strong>contact@auditenergetiqueconseil.fr</strong>
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">5. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement (session, sécurité). Aucune donnée personnelle n&apos;est cédée à des tiers à des fins commerciales.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
