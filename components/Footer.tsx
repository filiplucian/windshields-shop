import { SITE_CONFIG, SERVICE_AREAS } from '@/lib/config'
import { BrandLogo, FacebookIcon } from './Header'

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark-gray border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo size="sm" />
              <div>
                <span className="block font-heading font-bold text-xs text-white uppercase tracking-widest">Centru de</span>
                <span className="block font-heading font-bold text-sm text-brand-red uppercase tracking-widest">Parbrize Bădiliță</span>
              </div>
            </div>
            <p className="font-body text-brand-mid-gray text-sm leading-relaxed mb-4">
              Ca să vezi bine. Reparații și înlocuiri de parbrize rapide și profesionale în Rădăuți.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {SITE_CONFIG.personality.map((t, i) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="font-heading font-bold text-brand-red text-xs uppercase tracking-widest">{t}</span>
                  {i < SITE_CONFIG.personality.length - 1 && <span className="text-white/20 text-xs">|</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wide text-sm mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-brand-mid-gray text-sm mb-4">
              {SITE_CONFIG.phones.map((phone, i) => (
                <li key={phone}>
                  <a href={`tel:${SITE_CONFIG.phonesRaw[i]}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors break-all">{SITE_CONFIG.email}</a>
              </li>
              <li className="text-brand-mid-gray">{SITE_CONFIG.address}</li>
              <li className="text-brand-mid-gray">{SITE_CONFIG.schedule}</li>
            </ul>
            {/* Social buttons */}
            <div className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/centrudeparbrize/?locale=ro_RO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1877F2] hover:text-[#166FE5] transition-colors font-body text-sm"
              >
                <FacebookIcon className="w-4 h-4" />
                Facebook
              </a>
              {SITE_CONFIG.phones.map((phone, i) => (
                <a
                  key={phone}
                  href={`https://wa.me/${SITE_CONFIG.phonesRaw[i].replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-colors font-body text-sm"
                >
                  <WhatsAppIcon />
                  WhatsApp {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wide text-sm mb-4">Zone Deservite</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="font-body text-sm flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-red shrink-0" />
                  {area === 'Rădăuți' ? (
                    <span className="font-bold text-brand-red">
                      {area} <span className="font-normal text-brand-red/70 text-xs">(sediu)</span>
                    </span>
                  ) : (
                    <span className="text-brand-mid-gray">{area}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-brand-mid-gray text-xs text-center sm:text-left">
            &copy; {year} {SITE_CONFIG.name}. Toate drepturile rezervate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/politica-de-confidentialitate" className="font-body text-brand-mid-gray text-xs hover:text-white transition-colors">
              Politică de Confidențialitate
            </a>
            <a href="/termeni-si-conditii" className="font-body text-brand-mid-gray text-xs hover:text-white transition-colors">
              Termeni și Condiții
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
