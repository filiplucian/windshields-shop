import { SERVICE_AREAS } from '@/lib/config'

export default function Areas() {
  const [primary, ...rest] = SERVICE_AREAS

  return (
    <section id='zone' className='py-20 bg-brand-dark-gray'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text */}
          <div>
            <div className='flex items-center gap-2 mb-3'>
              <span className='section-label'>Zone Deservite</span>
            </div>
            <h2 className='section-title'>Venim la tine sau vii la noi</h2>
            <p className='font-body text-brand-mid-gray mb-8'>
              Centrul nostru este în Rădăuți, dar deservim și localitățile din
              împrejurimi. Service mobil disponibil pentru anumite zone.
            </p>

            {/* Primary city */}
            <div className='flex items-center gap-3 bg-brand-red rounded-lg px-5 py-4 mb-4 w-fit'>
              <svg
                className='w-5 h-5 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>
              <span className='font-heading font-bold text-white uppercase tracking-wide'>
                {primary} – sediu principal
              </span>
            </div>

            {/* Rest of areas */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
              {rest.map(area => (
                <div
                  key={area}
                  className='flex items-center gap-2 bg-brand-black rounded px-3 py-2 border border-white/5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-brand-red shrink-0' />
                  <span className='font-body text-brand-mid-gray text-sm'>
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Info card */}
          <div className='card bg-brand-black'>
            <h3 className='font-heading font-bold text-white text-xl mb-6'>
              Unde ne găsești
            </h3>
            <div className='space-y-5'>
              <div className='flex items-start gap-4'>
                <svg
                  className='w-5 h-5 text-brand-red mt-0.5 shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                  />
                </svg>
                <div>
                  <p className='font-heading font-semibold text-white text-sm mb-0.5'>
                    Adresă
                  </p>
                  <p className='font-body text-brand-mid-gray text-sm'>
                    str. Ștefan cel Mare, nr. 129, Rădăuți
                  </p>
                  <p className='font-body text-brand-mid-gray text-sm'>
                    (intrare de pe str. Salcâmilor)
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <svg
                  className='w-5 h-5 text-brand-red mt-0.5 shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  />
                </svg>
                <div>
                  <p className='font-heading font-semibold text-white text-sm mb-0.5'>
                    Telefoane
                  </p>
                  <a
                    href='tel:+40754760568'
                    className='block font-body text-brand-mid-gray text-sm hover:text-white'>
                    0754 760 568
                  </a>
                  <a
                    href='tel:+40744509464'
                    className='block font-body text-brand-mid-gray text-sm hover:text-white'>
                    0744 509 464
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <svg
                  className='w-5 h-5 text-brand-red mt-0.5 shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <div>
                  <p className='font-heading font-semibold text-white text-sm mb-0.5'>
                    Program
                  </p>
                  <p className='font-body text-brand-mid-gray text-sm'>
                    Luni–Vineri: 08:00–18:00
                  </p>
                  <p className='font-body text-brand-mid-gray text-sm'>
                    Sâmbătă–Duminică: Închis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
