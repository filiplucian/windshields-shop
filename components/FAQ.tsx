'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Cât durează o reparație de parbriz?',
    answer: 'Reparațiile simple (fisuri mici, ciobituri) durează 30–60 de minute. Înlocuirile complete pot dura 1–2 ore, în funcție de modelul mașinii. Dacă te grăbești, folosim adeziv cu uscare rapidă.',
  },
  {
    question: 'Cum funcționează decontarea CASCO?',
    answer: 'Simplu: după intervenție, emitem o factură detaliată. Tu o prezinți asigurătorului tău conform contractului CASCO. Te ajutăm cu orice detaliu ai nevoie pentru dosar.',
  },
  {
    question: 'Oferiți garanție pentru lucrări și materiale?',
    answer: 'Da, oferim garanție pe lucrări și pe materialele utilizate (parbrize, adezivi). Detaliile exacte sunt discutate la momentul intervenției.',
  },
  {
    question: 'Ce tipuri de parbrize folosiți?',
    answer: 'Folosim parbrize originale (OEM) și after-market cu certificare, de calitate superioară. Avem în stoc peste 200 de modele pentru cele mai frecvente mărci și modele de autovehicule.',
  },
  {
    question: 'Deserviți și localități din afara Rădăuțiului?',
    answer: 'Da, deservim Horodnic de Sus, Horodnic de Jos, Marginea, Sucevița, Solca, Dornești, Siret, Frătăuți, Milișăuți și Vicov. Service mobil disponibil pentru unele zone.',
  },
  {
    question: 'Pot programa o intervenție în aceeași zi?',
    answer: 'De cele mai multe ori, da. Sună-ne la 0754 760 568 sau completează formularul și îți confirmăm disponibilitatea în cel mai scurt timp.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-brand-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red inline-block" />
            <span className="font-heading font-semibold text-brand-red uppercase tracking-widest text-sm">FAQ</span>
          </div>
          <h2 className="section-title">Întrebări frecvente</h2>
          <p className="section-subtitle">Ai o întrebare? Consultanță gratuită la telefon sau pe email.</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-brand-dark-gray hover:bg-brand-dark-gray/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-heading font-semibold text-white text-sm sm:text-base">
                  {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-brand-red flex items-center justify-center text-brand-red font-bold transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 py-5 bg-brand-dark-gray border-t border-white/5">
                  <p className="font-body text-brand-mid-gray text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
