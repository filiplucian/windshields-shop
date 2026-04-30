import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D41111',
}

const SITE_URL = 'https://parbrizeradauti.ro'
const OG_TITLE = 'Parbrize Rădăuți | Centru de Parbrize Bădiliță'
const OG_DESCRIPTION =
  'Reparații și montaj parbrize în Rădăuți — intervenție 30–60 min, parbrize OEM, decontare CASCO, tratament hidrofob, garanție. Sună acum: 0754 760 568.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: OG_TITLE,
  description: OG_DESCRIPTION,
  applicationName: 'Centru de Parbrize Bădiliță',
  category: 'automotive',

  keywords: [
    // Servicii principale
    'reparatii parbrize Radauti',
    'reparatie parbriz Radauti',
    'montaj parbriz Radauti',
    'schimb parbriz Radauti',
    'schimbare parbriz Radauti',
    'inlocuire parbriz Radauti',
    'service parbrize Radauti',
    'service auto sticla Radauti',
    // Brand
    'Centrul de Parbrize Badilita',
    'centru parbrize Badilita',
    'parbrize Badilita Radauti',
    // Probleme specifice
    'fisura parbriz',
    'ciobitura parbriz',
    'crapaturi parbriz',
    'loviture piatra parbriz',
    'reparatie fisura parbriz',
    'reparatie ciobitura parbriz',
    // Tipuri de servicii
    'parbrize originale OEM',
    'parbrize aftermarket certificate',
    'geamuri laterale auto Radauti',
    'luneta auto Radauti',
    'tratament hidrofob parbriz',
    'tratament hidrofob auto',
    // CASCO / asigurare
    'CASCO parbrize Radauti',
    'decontare CASCO parbriz',
    'garantie parbrize',
    // Urgente / rapid
    'montaj parbriz rapid',
    'reparatie parbriz urgenta',
    'parbrize urgente Radauti',
    'parbrize aceeasi zi Radauti',
    // Județ / regiune
    'reparatii parbrize Suceava',
    'parbrize judet Suceava',
    'depozit parbrize Radauti',
    // Zone deservite
    'parbrize Horodnic de Sus',
    'parbrize Horodnic de Jos',
    'parbrize Marginea',
    'parbrize Sucevita',
    'parbrize Solca',
    'parbrize Dornesti',
    'parbrize Siret',
    'parbrize Fratautii Noi',
    'parbrize Milisauti',
    'parbrize Vicov',
    'parbrize Brodina',
    'parbrize Falcau',
    'parbrize Straja',
    'parbrize Voitinel',
    'parbrize Bilca',
    'parbrize Putna',
    'parbrize Arbore',
    'parbrize Volovat',
    // Variante cu diacritice
    'parbrize Fălcău',
    'parbrize Volovăț',
    // Cautari regionale
    'service parbrize zona Radauti',
    'service parbrize nord Suceava',
    'reparatii parbrize Bucovina',
  ].join(', '),

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: '/',
    siteName: 'Centru de Parbrize Bădiliță',
    locale: 'ro_RO',
    type: 'website',
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Centru de Parbrize Bădiliță – Rădăuți' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    // images: ['/og-image.jpg'],
  },

  other: {
    // Apple Web App
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Parbrize Bădiliță',
    // Microsoft Edge / Windows
    'msapplication-TileColor': '#D41111',
    'msapplication-navbutton-color': '#D41111',
    // Geo meta (Yandex, Bing Maps, AI crawlers)
    'geo.region': 'RO-SV',
    'geo.placename': 'Rădăuți, Suceava, România',
    'geo.position': '47.8498;25.9194',
    ICBM: '47.8498, 25.9194',
    // AI / LLM search engines
    robots: 'index, follow, max-image-preview:large',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ro' className={dmSans.variable}>
      <body>{children}</body>
    </html>
  )
}
