export default function Map() {
  // Google Maps embed – gratuit, fără API key, cu satelit/hartă switcher integrat
  // t=h = hybrid (satelit + etichete), t=m = hartă standard, t=k = satelit pur
  const gmapsEmbed =
    'https://maps.google.com/maps?q=47.8498,25.9194&hl=ro&z=17&t=h&output=embed'

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=47.8498%2C25.9194&destination_place_id=str+Salcamilor+129+Radauti'

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="section-label">Locație</span>
          </div>
          <h2 className="section-title">Găsește-ne ușor</h2>
          <p className="font-body text-brand-mid-gray text-sm sm:text-base">
            str. Salcâmilor, nr. 129, Rădăuți
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Google Maps embed cu vedere satelit/hartă */}
          <div
            className="lg:col-span-2 rounded-lg overflow-hidden border border-white/10 bg-brand-dark-gray"
            style={{ minHeight: '380px' }}
          >
            <iframe
              src={gmapsEmbed}
              width="100%"
              height="100%"
              style={{ minHeight: '380px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harta satelit Centru de Parbrize Bădiliță – str. Salcâmilor 129, Rădăuți"
            />
          </div>

          {/* Contact info card */}
          <div className="card flex flex-col gap-5">
            <h3 className="font-heading font-bold text-white text-lg sm:text-xl">
              Informații Contact
            </h3>

            <div className="space-y-4 flex-1">
              {/* Address */}
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
                <div>
                  <p className="font-heading font-semibold text-white text-sm mb-0.5">Adresă</p>
                  <p className="font-body text-brand-mid-gray text-sm">str. Salcâmilor, nr. 129</p>
                  <p className="font-body text-brand-mid-gray text-sm">Rădăuți, Suceava</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p className="font-heading font-semibold text-white text-sm mb-0.5">Program</p>
                  <p className="font-body text-brand-mid-gray text-sm">Luni–Sâmbătă: 08:00–18:00</p>
                  <p className="font-body text-brand-mid-gray text-sm">Duminică: Închis</p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                <div>
                  <p className="font-heading font-semibold text-white text-sm mb-1">Telefoane</p>
                  <a href="tel:+40754760568" className="block font-body text-brand-mid-gray text-sm hover:text-white transition-colors">
                    0754 760 568
                  </a>
                  <a href="tel:+40744509464" className="block font-body text-brand-mid-gray text-sm hover:text-white transition-colors">
                    0744 509 464
                  </a>
                </div>
              </div>

              {/* Note satelit */}
              <p className="font-body text-brand-mid-gray/60 text-xs italic">
                💡 În hartă poți comuta între vedere stradă și satelit folosind butonul din colțul hărții.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a href="#contact" className="btn-primary w-full text-sm">
                Programează Acum
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-sm gap-2"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c-.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
                </svg>
                Obține Traseu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
