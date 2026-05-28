const faqs = [
  {
    question: 'Cât durează o reparație de parbriz?',
    answer:
      'Reparațiile simple (fisuri mici, ciobituri) durează 30–60 de minute. Înlocuirile complete pot dura cateva ore, în funcție de modelul mașinii. Dacă te grăbești, folosim adeziv cu uscare rapidă (dupa montarea parbrizului se poate pleca la drum in doar 15 minute).',
  },
  {
    question: 'Cum funcționează decontarea CASCO?',
    answer:
      'Simplu: după intervenție, emitem o factură detaliată. Tu o prezinți asigurătorului tău conform contractului CASCO.',
  },
  {
    question: 'Oferiți garanție pentru lucrări și materiale?',
    answer:
      'Da, oferim garanție pe lucrări și pe materialele utilizate (adezivi). Detaliile exacte sunt discutate la momentul intervenției.',
  },
  {
    question: 'Ce tipuri de parbrize folosiți?',
    answer:
      'Folosim parbrize originale (OEM) și after-market si heliomate cu certificare, de calitate superioară. Avem în stoc peste 200 de parbrize pentru cele mai frecvente mărci și modele de autovehicule.',
  },
  {
    question: 'Deserviți și localități din afara Rădăuțiului?',
    answer:
      'Da, deservim Horodnic de Sus, Horodnic de Jos, Marginea, Sucevița, Solca, Dornești, Siret, Frătăuți, Milișăuți și Vicov. Service mobil disponibil pentru unele zone in functie de disponibilitate.',
  },
  {
    question: 'Pot programa o intervenție în aceeași zi?',
    answer:
      'Depinde de programarile din acea zi. Sună-ne la 0754 760 568 sau completează formularul și îți confirmăm disponibilitatea în cel mai scurt timp.',
  },
]

export default function FAQ() {
  return (
    <section id='faq' className='py-20 bg-brand-black'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-14'>
          <div className='flex items-center justify-center gap-2 mb-3'>
            <span className='section-label'>FAQ</span>
          </div>
          <h2 className='section-title'>Întrebări frecvente</h2>
          <p className='section-subtitle'>
            Ai o întrebare? Consultanță gratuită la telefon sau pe email.
          </p>
        </div>

        {/* Accordion */}
        <div className='space-y-3'>
          {faqs.map((faq, i) => (
            <details
              key={i}
              className='border border-white/10 rounded-lg overflow-hidden'>
              <summary className='px-6 py-5 cursor-pointer list-none bg-brand-dark-gray hover:bg-brand-dark-gray/80 transition-colors'>
                <span className='font-heading font-semibold text-white text-sm sm:text-base'>
                  {faq.question}
                </span>
              </summary>
              <div className='px-6 py-5 bg-brand-dark-gray border-t border-white/5'>
                <p className='font-body text-brand-mid-gray text-sm leading-relaxed italic'>
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
