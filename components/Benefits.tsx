const benefits = [
  {
    stat: '',
    unit: '',
    title: 'Intervenție Rapidă',
    description:
      'Reparații simple finalizate în cat mai scurt timp. Înlocuiri parbrize cu silicon rapid (timp uscare 15 minute) la cerere.',
  },
  {
    stat: '200+',
    unit: '',
    title: 'Parbrize în Stoc',
    description:
      'Depozit propriu cu peste 200 de parbrize. Găsim parbrizul potrivit daca nu este in stoc.',
  },
  {
    stat: 'OEM',
    unit: '',
    title: 'Parbrize Originale',
    description: 'La cerere comandam si montam parbrize originale.',
  },
  {
    stat: '12',
    unit: 'luni',
    title: 'Garanție',
    description: 'Garanție pe lucrări. Lucrăm cu responsabilitate.',
  },
  {
    stat: '18+',
    unit: 'ani',
    title: 'Experiență',
    description:
      'Tehnicieni experimentați cu peste 18 ani în domeniu. Știm cum să rezolvăm orice problemă.',
  },
  {
    stat: '0',
    unit: 'lei',
    title: 'Consultanță Gratuită',
    description:
      'Dacă ai întrebări, inginerii noștri îți oferă consultanță gratuită, fără obligații.',
  },
  {
    stat: 'CASCO',
    unit: '',
    title: 'Decontare Asigurare',
    description:
      'Emitem factură care poate fi prezentată asigurătorului tău pentru decontare CASCO.',
  },
]

export default function Benefits() {
  return (
    <section className='py-20 bg-brand-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-14'>
          <div className='flex items-center justify-center gap-2 mb-3'>
            <span className='section-label'>Beneficii</span>
          </div>
          <h2 className='section-title'>Ce primești când alegi Bădiliță</h2>
          <p className='section-subtitle max-w-xl mx-auto'>
            Prețuri corecte, transparente și servicii de calitate fără
            compromisuri.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {benefits.map(b => (
            <div key={b.title} className='card border-t-2 border-t-brand-red'>
              <div className='flex items-end gap-1 mb-3'>
                <span className='font-heading font-bold text-4xl text-brand-red'>
                  {b.stat}
                </span>
                {b.unit && (
                  <span className='font-heading font-semibold text-brand-mid-gray text-lg mb-1'>
                    {b.unit}
                  </span>
                )}
              </div>
              <h3 className='font-heading font-semibold text-white text-lg mb-2'>
                {b.title}
              </h3>
              <p className='font-body text-brand-mid-gray text-sm leading-relaxed'>
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
