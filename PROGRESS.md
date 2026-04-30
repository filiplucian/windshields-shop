# Centru de Parbrize Bădiliță – Progres Proiect

## Stack tehnic
- **Framework**: Next.js 14.2 (App Router, TypeScript)
- **Stilizare**: Tailwind CSS 3 cu token-uri brand customizate
- **Fonturi**: Poppins (headings) + Inter (body) via `next/font/google`
- **Imagini**: `next/image` cu surse Unsplash CDN
- **Email**: Nodemailer (opțional, prin variabile de mediu SMTP)
- **Schema**: JSON-LD (AutoRepair, FAQPage, WebSite)

---

## Structura fișierelor

```
windshields-shop/
├── app/
│   ├── api/contact/route.ts   – API contact cu rate limiting
│   ├── globals.css            – Stiluri globale + clase componente
│   ├── layout.tsx             – Metadata SEO complet + fonturi Google
│   ├── page.tsx               – Pagina principală (asamblare componente)
│   └── sitemap.ts             – Sitemap dinamic Next.js
├── components/
│   ├── Header.tsx             – Logo SVG brand + nav + WhatsApp + mobile menu
│   ├── Hero.tsx               – Secțiune hero fullscreen cu CTA
│   ├── Services.tsx           – 2 servicii principale cu imagini + 4 iconuri suport
│   ├── Gallery.tsx            – 2 poze profesionale (problema → soluția)
│   ├── Differentiators.tsx    – De ce să ne alegi
│   ├── Benefits.tsx           – Avantaje numerice
│   ├── Areas.tsx              – Zone deservite
│   ├── Map.tsx                – Google Maps embed satelit/hybrid (fără API key)
│   ├── Testimonials.tsx       – Recenzii clienți
│   ├── FAQ.tsx                – 6 întrebări frecvente
│   ├── ContactForm.tsx        – Formular + butoane WhatsApp pereche
│   ├── Footer.tsx             – Footer cu logo brand
│   └── MobileBar.tsx          – Bar fix mobil (Sună + WhatsApp x2)
├── lib/
│   ├── config.ts              – Date site: telefoane, email, zone deservite
│   └── schema.ts              – Schema.org JSON-LD (LocalBusiness, FAQ, WebSite)
├── next.config.js             – Headers securitate + CSP + domenii imagini
├── tailwind.config.js         – Culori brand + fonturi CSS variables
└── PROGRESS.md                – Acest fișier
```

---

## Ce s-a construit

### Componente vizuale
| Componentă | Conținut |
|---|---|
| **Header** | Logo SVG (arc parbriz + ștergătoare + sparkle roșu), nav desktop/mobil, butoane WhatsApp verzi, hamburger menu |
| **Hero** | Ecran complet `100svh`, H1 cu accent roșu, 3 badge-uri brand (RAPID / SIGUR / PROFESIONAL), CTA-uri |
| **Services** | 2 carduri mari cu imagini (Reparație + Montaj), 4 carduri icon (Geamuri, Intervenție Rapidă, CASCO, Consultanță) |
| **Gallery** | Split 50/50 desktop: parbriz crăpat + echipament reparație. Strip roșu CTA în jos |
| **Differentiators** | De ce Bădiliță vs concurență |
| **Benefits** | Cifre cheie: stoc, timp intervenție, garanție |
| **Areas** | 11 localități deservite cu distanțe |
| **Map** | Google Maps embed hybrid/satelit (t=h), fără API key. Info contact + "Obține Traseu" |
| **Testimonials** | Recenzii 5 stele |
| **FAQ** | 6 Q&A în format accordion |
| **ContactForm** | Câmpuri (Nume, Telefon, Mașină, Mesaj), validare, rate limit, butoane WhatsApp perechi |
| **Footer** | Logo brand, coloane contact/servicii/zone, copyright |
| **MobileBar** | Bar fix jos pe mobil (ascuns pe desktop): Sună 568 \| WhatsApp 568 \| WhatsApp 464 |

### SEO implementat
| Element | Detalii |
|---|---|
| `<title>` | "Parbrize Rădăuți \| Centru de Parbrize Bădiliță" (48 chars) |
| `<meta description>` | ~155 chars, include cuvinte cheie principale |
| `metadataBase` | `https://parbrizebadilita.ro` — URL-uri OG absolute |
| `canonical` | `alternates: { canonical: '/' }` |
| `robots` | `index: true, follow: true` |
| Open Graph | title, description, siteName, locale, type, url |
| Twitter Card | `summary_large_image` |
| Schema LocalBusiness | AutoRepair, geo GPS, openingHours, areaServed, priceRange |
| Schema FAQPage | Toate 6 întrebările din componenta FAQ |
| Schema WebSite | SearchAction pentru Google Sitelinks Searchbox |
| Sitemap dinamic | `app/sitemap.ts` → `/sitemap.xml` generat automat |
| Keywords | 18 termeni: cu/fără diacritice, zone limitrofe |

### Funcționalitate
- **WhatsApp**: Butoane pentru ambele numere (0754 760 568 + 0744 509 464) în Header, ContactForm, Footer, MobileBar
- **Formular contact**: Validare + sanitizare input + rate limiting 5 req/oră/IP + trimitere email opțională
- **Securitate headers**: CSP, X-Frame-Options:DENY, HSTS, XSS-Protection în `next.config.js`
- **Harta**: Google Maps hybrid/satelit embed (gratuit, fără API key) cu `t=h`

---

## Ce mai lipsește / de făcut

| Task | Prioritate | Detalii |
|---|---|---|
| `public/og-image.jpg` | **CRITIC** | Imagine 1200×630px pentru share social (Facebook, WhatsApp). Dupa adaugare, decomentează 2 linii în `layout.tsx` și `schema.ts` |
| Social media links | Medie | Adaugă URL Facebook/Instagram în `lib/schema.ts` → `sameAs: []` |
| Email SMTP | Opțional | Adaugă `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL` în `.env.local` |
| Google Analytics | Opțional | Adaugă `gtag` sau Plausible pentru tracking vizitatori |
| Domeniu + deploy | – | Deploy pe Vercel recomandat (gratuit pentru Next.js) |

---

## Unde să decomentezi după ce adaugi og-image.jpg

### `app/layout.tsx` (linia ~71)
```ts
// images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Centru de Parbrize Bădiliță' }],
```

### `lib/schema.ts` (linia ~13)
```ts
// image: `${SITE_URL}/og-image.jpg`,
```

---

## Informații tehnice brand

| Token | Valoare |
|---|---|
| `brand-red` | `#D41111` |
| `brand-dark-red` | `#8B0000` |
| `brand-black` | `#111111` |
| `brand-dark-gray` | `#1E1E1E` |
| `brand-light-gray` | `#F5F5F5` |
| `brand-mid-gray` | `#C9C9C9` |
| Font heading | Poppins 400/600/700 (`--font-poppins`) |
| Font body | Inter 400/500 (`--font-inter`) |
| Coordonate GPS | lat: 47.8498, lng: 25.9194 |
| Adresă | str. Salcâmilor, nr. 129, Rădăuți, Suceava |
| Tel 1 | 0754 760 568 (+40754760568) |
| Tel 2 | 0744 509 464 (+40744509464) |
