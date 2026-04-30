import { SITE_CONFIG } from '@/lib/config'

export default function Hero() {
  return (
    <section className='relative min-h-[100svh] flex items-center pt-14 md:pt-20 overflow-hidden bg-brand-black'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-black via-brand-dark-gray to-brand-dark-red opacity-80' />

      {/* Decorative circle – only lg+ */}
      <div className='absolute -top-10 -right-10 w-64 h-64 lg:w-96 lg:h-96 rounded-full border-4 border-brand-red opacity-10 lg:opacity-20' />

      <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        <div className='max-w-3xl'>
          {/* Badge */}
          <span className='inline-flex items-center bg-brand-red/20 border border-brand-red text-brand-red font-heading font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5'>
            Centru de Parbrize Bădiliță · Rădăuți
          </span>

          {/* Tagline */}
          <h1 className='font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase leading-tight mb-5'>
            <span className='text-white'>Ca să </span>
            <span className='text-brand-red'>Vezi Bine</span>
          </h1>

          {/* Subtitle */}
          <p className='font-body text-brand-mid-gray text-base sm:text-lg mb-3 max-w-2xl'>
            Reparații rapide și înlocuiri de parbrize pentru toate tipurile de
            autovehicule.
          </p>
          <p className='font-body text-brand-mid-gray text-sm sm:text-base mb-8 max-w-xl italic'>
            &ldquo;{SITE_CONFIG.motto}&rdquo;
          </p>

          {/* CTAs */}
          <div className='flex flex-col sm:flex-row gap-3 mb-10'>
            <a
              href='#contact'
              className='btn-primary w-full sm:w-auto text-sm sm:text-base px-6 py-4'>
              Programează Acum
            </a>
            <a
              href={`tel:${SITE_CONFIG.phonesRaw[0]}`}
              className='btn-secondary w-full sm:w-auto text-sm sm:text-base px-6 py-4'>
              {SITE_CONFIG.phones[0]}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phonesRaw[1]}`}
              className='btn-secondary w-full sm:w-auto text-sm sm:text-base px-6 py-4'>
              {SITE_CONFIG.phones[0]}
            </a>
          </div>

          {/* Brand personality */}
          <div className='flex flex-wrap items-center gap-3 sm:gap-6'>
            {SITE_CONFIG.personality.map((trait, i) => (
              <div key={trait} className='flex items-center gap-3 sm:gap-6'>
                <span className='font-heading font-bold text-brand-red text-xs sm:text-sm tracking-widest uppercase'>
                  {trait}
                </span>
                {i < SITE_CONFIG.personality.length - 1 && (
                  <span className='text-brand-mid-gray text-xs'>|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
