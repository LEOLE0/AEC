"use client"

import { motion } from "framer-motion"

export default function MentionsLegalesPage() {
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
            Mentions <span className="text-emerald-400">Légales</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 font-light"
          >
            Informations juridiques et administratives
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
          {/* Editeur */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">1. Éditeur du site</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-600">
              <ul className="space-y-2">
                <li><strong className="text-slate-900">Dénomination sociale :</strong> AUDIT ENERGETIQUE CONSEIL (AEC)</li>
                <li><strong className="text-slate-900">Forme juridique :</strong> SAS (Société par Actions Simplifiée)</li>
                <li><strong className="text-slate-900">Capital social :</strong> 1 000,00 €</li>
                <li><strong className="text-slate-900">RCS :</strong> Bobigny B 950 825 844</li>
                <li><strong className="text-slate-900">SIRET :</strong> 950 825 844 00026</li>
              </ul>
              <ul className="space-y-2">
                <li><strong className="text-slate-900">Siège social :</strong> 95 Avenue du Président Wilson, 93100 Montreuil</li>
                <li><strong className="text-slate-900">Numéro de TVA :</strong> FR96950825844</li>
                <li><strong className="text-slate-900">Directeur de la publication :</strong> M. Ahmed BELLAHCENE</li>
                <li><strong className="text-slate-900">Contact :</strong> contact@auditenergetiqueconseil.fr</li>
              </ul>
            </div>
          </section>

          {/* Hébergement */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">2. Hébergement</h2>
            <p className="text-slate-600 leading-relaxed">
              Le site est hébergé par <strong>Vercel Inc.</strong><br/>
              Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA<br/>
              Site web : https://vercel.com
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">3. Propriété intellectuelle</h2>
            <p className="text-slate-600 leading-relaxed">
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Toute reproduction, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de la société AEC.
            </p>
          </section>

          {/* Responsabilité */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-2">4. Limitation de responsabilité</h2>
            <p className="text-slate-600 leading-relaxed">
              AEC s&apos;efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
