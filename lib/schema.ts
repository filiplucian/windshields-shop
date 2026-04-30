import { SITE_CONFIG, SERVICE_AREAS } from './config'

const SITE_URL = 'https://parbrizebadilita.ro'
const MAPS_URL =
  'https://www.google.com/maps/search/Centrul+de+Parbrize+Badilita+Radauti'

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${SITE_URL}/#business`,
  name: SITE_CONFIG.name,
  description:
    'Centru specializat în reparații și montaj parbrize în Rădăuți, județul Suceava. Oferim reparare fisuri și ciobituri, înlocuire parbrize originale OEM și after-market, montaj geamuri laterale, tratament hidrofob și decontare CASCO. Intervenție în 30–60 minute, garanție pe lucrări.',
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,

  url: SITE_URL,
  telephone: SITE_CONFIG.phonesRaw[0],
  email: SITE_CONFIG.email,

  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phonesRaw[0],
      contactType: 'customer service',
      availableLanguage: 'Romanian',
      areaServed: 'RO',
    },
    {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phonesRaw[1],
      contactType: 'customer service',
      availableLanguage: 'Romanian',
      areaServed: 'RO',
    },
  ],

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'str. Ștefan cel Mare, nr. 129',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '00:00',
      closes: '00:00',
    },
  ],

  priceRange: '$$',
  currenciesAccepted: 'RON',
  paymentAccepted: 'Cash, Card, Transfer bancar',

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicii Parbrize Rădăuți',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reparație Parbriz',
          description: 'Reparare fisuri, ciobituri și lovituri de piatră cu rășină injectată sub vacuum. Rezultat invizibil în 30–60 minute.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Montaj Parbriz Nou',
          description: 'Înlocuire parbrize originale OEM și after-market certificate. Peste 200 de modele în stoc. Adezivi profesionali cu uscare rapidă.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Geamuri Laterale și Lunetă',
          description: 'Înlocuire geamuri laterale și lunetă pentru toate tipurile de autovehicule.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tratament Hidrofob',
          description: 'Aplicare tratament hidrofob pe suprafața parbrizului. Apa se respinge instant, vizibilitate maximă pe ploaie.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Decontare CASCO',
          description: 'Emitem factură detaliată pentru decontare prin asigurarea CASCO. Asistență completă pentru dosarul de daună.',
        },
      },
    ],
  },

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
    {
      '@type': 'Question',
      name: 'Ce este tratamentul hidrofob și merită aplicat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tratamentul hidrofob este un strat protector aplicat pe suprafața parbrizului care face apa să se respingă instant. Îmbunătățește vizibilitatea pe ploaie și protejează sticla. Recomandăm aplicarea după orice înlocuire de parbriz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Unde vă găsesc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ne găsești pe str. Ștefan cel Mare, nr. 129, Rădăuți (intrare de pe str. Salcâmilor). Program: Luni–Vineri 08:00–18:00. Telefon: 0754 760 568.',
      },
    },
  ],
}

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_CONFIG.name,
  url: SITE_URL,
  inLanguage: 'ro',
  publisher: {
    '@id': `${SITE_URL}/#business`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
