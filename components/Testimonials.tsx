const testimonials = [
  {
    name: 'Ion Popescu',
    location: 'Rădăuți',
    rating: 5,
    text: 'Serviciu de top! Am venit cu o fisură mare și în mai puțin de o oră am plecat cu parbrizul nou montat perfect. Recomand cu încredere!',
  },
  {
    name: 'Maria Ionescu',
    location: 'Siret',
    rating: 5,
    text: 'Foarte mulțumită de calitate și preț. Personalul este amabil și profesionist. Au protejat interiorul mașinii și au lăsat totul curat.',
  },
  {
    name: 'Andrei Varga',
    location: 'Marginea',
    rating: 5,
    text: 'Am reparat o fisură mică rapid și la un preț corect. M-au sfătuit că nu e nevoie de înlocuire completă. Onestitate rară!',
  },
  {
    name: 'Elena Stancu',
    location: 'Horodnic',
    rating: 5,
    text: 'Am decont CASCO și m-au ajutat cu toată documentația necesară. Fără bătăi de cap, totul a mers perfect.',
  },
]

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="section-label">Testimoniale</span>
          </div>
          <h2 className="section-title">Ce spun clienții noștri</h2>
          <p className="section-subtitle">Peste 1.000 de clienți mulțumiți în Rădăuți și împrejurimi.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="font-body text-brand-mid-gray text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center font-heading font-bold text-white text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-body text-brand-mid-gray text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
