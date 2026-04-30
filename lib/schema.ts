import { SITE_CONFIG, SERVICE_AREAS } from './config'

const SITE_URL = 'https://parbrizebadilita.ro'
const MAPS_URL =
  'https://www.google.com/maps/place/str.+Salcamilor+nr+129+Radauti+Romania'

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: SITE_CONFIG.name,
  description:
    'Reparații și înlocuiri de parbrize rapide și profesionale pentru toate tipurile de autovehicule în Rădăuți și zone limitrofe.',
  // image: `${SITE_URL}/og-image.jpg`,  // Adaugă public/og-image.jpg (1200×630px)

  url: SITE_URL,
  telephone: SITE_CONFIG.phonesRaw[0],
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'str. Salcâmilor, nr. 129',
    addressLocality: 'Rădăuți',
    addressRegion: 'Suceava',
    postalCode: '725400',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.8498,
    longitude: 25.9194,
  },
  hasMap: MAPS_URL,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  areaServed: SERVICE_AREAS.map((name) => ({
    '@type': 'City',
    name,
  })),
  sameAs: [
    'https://www.facebook.com/centrudeparbrize/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
}

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cât durează o reparație de parbriz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reparațiile simple (fisuri mici, ciobituri) durează 30–60 de minute. Înlocuirile complete pot dura 1–2 ore, în funcție de modelul mașinii. Dacă te grăbești, folosim adeziv cu uscare rapidă.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cum funcționează decontarea CASCO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simplu: după intervenție, emitem o factură detaliată. Tu o prezinți asigurătorului tău conform contractului CASCO. Te ajutăm cu orice detaliu ai nevoie pentru dosar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Oferiți garanție pentru lucrări și materiale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, oferim garanție pe lucrări și pe materialele utilizate (parbrize, adezivi). Detaliile exacte sunt discutate la momentul intervenției.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce tipuri de parbrize folosiți?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Folosim parbrize originale (OEM) și after-market cu certificare, de calitate superioară. Avem în stoc peste 200 de modele pentru cele mai frecvente mărci și modele de autovehicule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Deserviți și localități din afara Rădăuțiului?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, deservim Horodnic de Sus, Horodnic de Jos, Marginea, Sucevița, Solca, Dornești, Siret, Frătăuți, Milișăuți și Vicov. Service mobil disponibil pentru unele zone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot programa o intervenție în aceeași zi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De cele mai multe ori, da. Sunați-ne la 0754 760 568 sau completați formularul de pe site și vă confirmăm disponibilitatea în cel mai scurt timp.',
      },
    },
  ],
}

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_CONFIG.name,
  url: SITE_URL,
  inLanguage: 'ro',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
