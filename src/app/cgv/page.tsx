"use client"

import { motion } from "framer-motion"

export default function CGVPage() {
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
            Conditions Générales <span className="text-emerald-400">de Vente</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 font-light"
          >
            Applicables aux prestations d&apos;audit et de conseil
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
          {/* Objet */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">1. Objet</h2>
            <p className="text-slate-600 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société <strong>AEC (AUDIT ENERGETIQUE CONSEIL)</strong> et ses clients professionnels ou particuliers, dans le cadre de la vente de prestations de services intellectuels (audits énergétiques, maîtrise d&apos;œuvre, assistance à maîtrise d&apos;ouvrage, conseil).
            </p>
          </section>

          {/* Devis et Commandes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">2. Devis et Commandes</h2>
            <p className="text-slate-600 leading-relaxed">
              Toute intervention de AEC fait l&apos;objet d&apos;un devis préalable détaillé, valable pour une durée de 30 jours (sauf mention contraire). La commande est considérée comme ferme et définitive dès réception du devis signé par le Client avec la mention &quot;Bon pour accord&quot;, accompagné le cas échéant de l&apos;acompte demandé.
            </p>
          </section>

          {/* Tarifs */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">3. Tarifs et Paiement</h2>
            <p className="text-slate-600 leading-relaxed">
              Les prix des prestations sont indiqués en euros hors taxes (HT). La TVA applicable est celle en vigueur au jour de la facturation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Sauf accord spécifique, les factures sont payables à réception ou selon l&apos;échéancier défini au devis (ex: 30% à la commande, solde à la remise du rapport). Tout retard de paiement entraînera l&apos;application de pénalités de retard égales à trois fois le taux d&apos;intérêt légal.
            </p>
          </section>

          {/* Obligations */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">4. Obligations des parties</h2>
            <div className="space-y-2">
              <p className="text-slate-600 leading-relaxed"><strong>Engagements de AEC :</strong> AEC s&apos;engage à réaliser les prestations selon les règles de l&apos;art et les normes en vigueur. Il s&apos;agit d&apos;une obligation de moyens.</p>
              <p className="text-slate-600 leading-relaxed"><strong>Engagements du Client :</strong> Le Client s&apos;engage à fournir à AEC toutes les informations et l&apos;accès aux locaux nécessaires à la bonne exécution de la mission (plans, factures énergétiques, accès chaufferie, etc.).</p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">5. Responsabilité et Assurances</h2>
            <p className="text-slate-600 leading-relaxed">
              AEC déclare être titulaire d&apos;une police d&apos;assurance Responsabilité Civile Professionnelle couvrant l&apos;ensemble de ses activités. La responsabilité de AEC ne saurait être engagée pour des dommages indirects ou imprévisibles.
            </p>
          </section>

          {/* Litiges */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">6. Droit applicable et juridiction</h2>
            <p className="text-slate-600 leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut d&apos;accord amiable, compétence exclusive est attribuée au Tribunal de Commerce de Bobigny.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
