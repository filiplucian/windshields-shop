'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/config'

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
    </svg>
  )
}

function FacebookIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
    </svg>
  )
}

function BrandLogo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <Image
      src='/logo.png'
      alt='Centru de Parbrize Bădiliță'
      height={size === 'sm' ? 32 : 44}
      width={size === 'sm' ? 120 : 165}
      className='object-contain w-auto'
      priority
    />
  )
}

export { BrandLogo, WhatsAppIcon, FacebookIcon }

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Acasă', href: '#' },
    { label: 'Servicii', href: '#servicii' },
    { label: 'De Ce Noi', href: '#diferentiatori' },
    { label: 'Zone', href: '#zone' },
    { label: 'Locație', href: '#locatie' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    closeMenu()
    setTimeout(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const target = document.querySelector(href)
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 4
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    }, 50)
  }

  return (
    <>
      {/* Checkbox ascuns – fixed în centrul viewport-ului ca să nu cauzeze scroll la focus */}
      <input
        type='checkbox'
        id='nav-toggle'
        className='peer'
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          opacity: 0,
          pointerEvents: 'none',
          width: 0,
          height: 0,
        }}
        checked={menuOpen}
        onChange={e => setMenuOpen(e.target.checked)}
      />

      <header className='fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-[82px]'>
            {/* Logo */}
            <a
              href='#'
              className='flex items-center shrink-0 min-w-0 py-2'
              aria-label='Centru de Parbrize Bădiliță'>
              <BrandLogo size='sm' />
            </a>

            {/* Desktop nav */}
            <nav className='hidden lg:flex items-center gap-6 xl:gap-8'>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className='font-heading font-semibold text-xs xl:text-sm text-brand-mid-gray uppercase tracking-wide hover:text-white transition-colors whitespace-nowrap'>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className='hidden lg:flex items-center gap-2'>
              <a
                href='https://www.facebook.com/centrudeparbrize/?locale=ro_RO'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-9 h-9 rounded bg-[#1877F2] text-white hover:bg-[#166FE5] transition-colors'
                aria-label='Facebook'>
                <FacebookIcon className='w-4 h-4' />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.phonesRaw[0].replace('+', '')}`}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-whatsapp text-xs px-4 py-2.5'>
                <WhatsAppIcon className='w-4 h-4' />
                WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.phonesRaw[0]}`}
                className='btn-primary text-xs px-4 py-2.5'>
                Sună Acum
              </a>
            </div>

            {/* Mobile: phone + hamburger label */}
            <div className='flex lg:hidden items-center gap-2'>
              <a
                href={`tel:${SITE_CONFIG.phonesRaw[0]}`}
                className='flex items-center justify-center w-10 h-10 rounded-full bg-brand-red text-white'
                aria-label='Sună'>
                <svg
                  className='w-4 h-4'
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
              </a>

              {/* Label care togglează checkbox-ul – funcționează nativ, fără JS */}
              <label
                htmlFor='nav-toggle'
                className='flex items-center justify-center w-10 h-10 text-white cursor-pointer select-none touch-manipulation'
                aria-label={menuOpen ? 'Închide meniu' : 'Deschide meniu'}>
                {menuOpen ? (
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu – vizibilitate controlată prin CSS peer-checked */}
      <nav
        className='hidden peer-checked:flex flex-col fixed inset-0 z-[200] bg-brand-black/80 backdrop-blur-sm'
        aria-label='Meniu mobil'>
        {/* Buton X – dreapta sus */}
        <div className='flex justify-end px-4 pt-4'>
          <button
            type='button'
            className='flex items-center justify-center w-10 h-10 text-white touch-manipulation'
            onClick={closeMenu}
            aria-label='Închide meniu'>
            <svg
              className='w-7 h-7'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Link-uri centrate */}
        <div className='flex-1 flex flex-col items-center justify-center gap-6'>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className='font-heading font-bold text-2xl text-white uppercase tracking-widest hover:text-brand-red transition-colors touch-manipulation'>
              {link.label}
            </a>
          ))}
        </div>

        {/* Facebook jos */}
        <div className='flex justify-center pb-12 px-6'>
          <a
            href='https://www.facebook.com/centrudeparbrize/?locale=ro_RO'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-white/50 hover:text-[#1877F2] transition-colors font-heading text-sm uppercase tracking-wide touch-manipulation'
            onClick={closeMenu}>
            <FacebookIcon className='w-4 h-4' />
            Facebook
          </a>
        </div>
      </nav>
    </>
  )
}
