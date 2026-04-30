const items = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
      </svg>
    ),
    label: 'Garanție',
    description: 'Garanție pe lucrări și materiale',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    label: 'Rapid',
    description: 'Reparații în 30–60 minute',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.885-9.02a3.747 3.747 0 013.747 3.747l-3.93 3.93a2.25 2.25 0 01-3.182 0l-.53-.53a2.25 2.25 0 010-3.182l3.93-3.93z"/>
      </svg>
    ),
    label: 'Profesional',
    description: 'Tehnicieni experimentați și certificați',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
      </svg>
    ),
    label: 'Toate Tipurile',
    description: 'Orice marcă și model de autovehicul',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
    label: 'Local',
    description: 'Rădăuți și zone din împrejurimi',
  },
]

const differentiators = [
  'Parbrize originale și after-market cu certificare',
  'Adezivi de calitate superioară',
  'Adeziv cu uscare rapidă disponibil',
  'Lucrăm curat, fără urme sau mizerie',
  'Protejăm interiorul mașinii la fiecare intervenție',
  'Servicii de calitate cu atenție la detalii',
]

export default function Differentiators() {
  return (
    <section id="diferentiatori" className="py-20 bg-brand-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red inline-block" />
            <span className="font-heading font-semibold text-brand-red uppercase tracking-widest text-sm">De Ce Noi</span>
          </div>
          <h2 className="section-title">Calitate și profesionalism la fiecare intervenție</h2>
        </div>

        {/* Icon strip */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-0 md:divide-x md:divide-white/10 mb-16">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center px-8 py-4 min-w-[140px]">
              <span className="text-brand-red mb-3">{item.icon}</span>
              <span className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-1">{item.label}</span>
              <span className="font-body text-brand-mid-gray text-xs">{item.description}</span>
            </div>
          ))}
        </div>

        {/* Differentiator list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-brand-black rounded-lg p-5 border border-white/5">
              <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-brand-red flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
              </span>
              <span className="font-body text-brand-mid-gray text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
