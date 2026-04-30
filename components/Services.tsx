const services = [
  {
    icon: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.885-9.02a3.747 3.747 0 013.747 3.747l-3.93 3.93a2.25 2.25 0 01-3.182 0l-.53-.53a2.25 2.25 0 010-3.182l3.93-3.93z"/></svg>,
    title: 'Reparație Parbriz',
    description: 'Reparăm fisuri, ciobituri și lovituri de piatră rapid și profesional, fără înlocuire costisitoare.',
  },
  {
    icon: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>,
    title: 'Montaj Parbriz Nou',
    description: 'Înlocuim parbrize originale și after-market cu certificare, cu adezivi de calitate superioară.',
  },
  {
    icon: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.885-9.02a3.747 3.747 0 013.747 3.747l-3.93 3.93a2.25 2.25 0 01-3.182 0l-.53-.53a2.25 2.25 0 010-3.182l3.93-3.93z"/></svg>,
    title: 'Geamuri Laterale',
    description: 'Înlocuim geamuri laterale și lunete pentru toate modelele de autovehicule.',
  },
  {
    icon: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    title: 'Intervenție Rapidă',
    description: 'Dacă te grăbești, optează pentru adeziv cu uscare rapidă. Pleci în 60 de minute.',
  },
  {
    icon: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/></svg>,
    title: 'Decontare CASCO',
    description: 'În baza facturii emise de noi, poți deconta costul intervenției prin asigurarea CASCO.',
  },
  {
    icon: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>,
    title: 'Tratament Hidrofob',
    description: 'Aplicăm tratament hidrofob pe parbriz — apa se respinge instant, vizibilitate maximă pe ploaie.',
  },
  {
    icon: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>,
    title: 'Consultanță Gratuită',
    description: 'Inginerii noștri îți răspund la orice întrebare. Consultanță gratuită, fără obligații.',
  },
]

export default function Services() {
  return (
    <section id="servicii" className="py-12 sm:py-16 lg:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="section-label">Serviciile Noastre</span>
          </div>
          <h2 className="section-title">Tot ce ai nevoie pentru parbrizul tău</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
            Peste 200 de parbrize în stoc. Lucrăm curat și protejăm interiorul mașinii la fiecare intervenție.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div key={service.title} className="card group hover:border-brand-red/40 transition-colors duration-300">
              <div className="text-brand-red mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading font-semibold text-white text-base sm:text-lg mb-2">{service.title}</h3>
              <p className="font-body text-brand-mid-gray text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
