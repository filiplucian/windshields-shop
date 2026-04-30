import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
}

const SITE_URL = 'https://parbrizebadilita.ro'
const OG_TITLE = 'Parbrize Rădăuți | Centru de Parbrize Bădiliță'
const OG_DESCRIPTION =
  'Reparații și înlocuiri de parbrize în Rădăuți. Parbrize originale, adezivi certificați, intervenție 30–60 min, decontare CASCO, consultanță gratuită.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: OG_TITLE,
  description: OG_DESCRIPTION,

  keywords: [
    'reparatii parbrize Radauti',
    'reparatie parbriz Radauti',
    'service parbrize Radauti',
    'parbrize Radauti',
    'depozit parbrize Radauti',
    'centru parbrize Badilita',
    'fisura parbriz',
    'ciobitura parbriz',
    'lovitură piatră parbriz',
    'schimb parbriz',
    'montaj parbriz',
    'reparatii parbrize Suceava',
    'parbrize Horodnic',
    'parbrize Marginea',
    'parbrize Siret',
    'parbrize Sucevita',
    'CASCO parbrize',
    'garantie parbrize',
  ].join(', '),

  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: '/',
    siteName: 'Centru de Parbrize Bădiliță',
    locale: 'ro_RO',
    type: 'website',
    // Adaugă o imagine reală 1200×630px în public/og-image.jpg și decomentează:
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Centru de Parbrize Bădiliță' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    // images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
