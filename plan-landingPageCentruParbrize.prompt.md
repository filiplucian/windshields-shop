# Plan landing page Next.js – Centru de Parbrize Bădiliță

## **Sumar Executive**

**Scop:** Landing page SEO-optimizată în limba română, design minimalist mobile-first, cu mesaje de suport, consultanță gratuită, decontare CASCO, și securitate enterprise.

**Deliverable:** Website Next.js 14+, TypeScript, Tailwind CSS, Google Maps embed, Schema.org, Rate limiting, GDPR compliant.

**Timp estimat:** 3-4 săptămâni (din setup până la lansare)

---

## **Informații de bază**

| Detaliu            | Valoare                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Denumire**       | Centru de Parbrize Bădiliță                                                                                       |
| **Adresă**         | str. Salcâmilor, nr 129, Rădăuți                                                                                  |
| **Telefoane**      | 0754760568, 0744509464                                                                                            |
| **Email**          | contact@parbrizebadilita.ro                                                                                       |
| **Branding**       | Roșu, Gri, Negru                                                                                                  |
| **Motto**          | "Parbrize montate corect, fără griji și fără timp pierdut."                                                       |
| **Keywords**       | reparatii parbrize, reparatie parbriz, service parbrize, parbrize Rădăuți, depozit parbrize                       |
| **Zone deservite** | Rădăuți, Horodnic de Sus, Horodnic de Jos, Marginea, Sucevița, Solca, Dornești, Siret, Frătăuți, Milișăuți, Vicov |

---

# **PLAN PE ETAPE (SPRINT-BASED)**

---

## **ETAPA 1: SETUP ȘI ARHITECTURĂ** (Ziua 1-2)

### **1.1 Setup mediu de dezvoltare**

- [ ] Instalare Node.js 18+ și npm/yarn
- [ ] Creare proiect Next.js 14+ cu TypeScript: `npx create-next-app@latest`
- [ ] Configurare: TypeScript, ESLint, Tailwind CSS
- [ ] Inițializare Git repository
- [ ] Creare .env.local pentru variabile de mediu sensibile

### **1.2 Arhitectura proiectului**

```
roservice/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Differentiators.tsx
│   │   ├── Areas.tsx
│   │   ├── Benefits.tsx
│   │   ├── Map.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── seo.ts (SEO config, meta tags, keywords)
│   │   ├── schema.ts (Schema.org JSON-LD)
│   │   ├── contact.ts (Email/form logic)
│   │   └── security.ts (CSRF tokens, sanitization)
│   ├── types/
│   │   └── index.ts (TypeScript interfaces)
│   └── styles/
│       └── tailwind.config.ts
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero.jpg
│   │   ├── services/
│   │   └── og-image.jpg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── .env.local (variabile de mediu)
├── next.config.js (security headers, image config)
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

### **1.3 Dependențe principale**

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "dompurify": "^3.0.0",
    "nodemailer": "^6.9.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "@types/react": "^18.0.0"
  }
}
```

### **1.4 Configurare Next.js pentru securitate**

- [ ] Setare HTTP security headers în next.config.js (CSP, X-Frame-Options, HSTS)
- [ ] Configurare image optimization
- [ ] Setare CORS și rate limiting middleware

---

## **ETAPA 2: STRUCTURA PROIECTULUI ȘI FIȘIERE CORE** (Ziua 3-4)

### **2.1 Creare fișiere core**

#### **next.config.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value:
            "default-src 'self'; script-src 'self' 'unsafe-inline' https://maps.googleapis.com; frame-src 'self' https://www.google.com;",
        },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ],
}

module.exports = nextConfig
```

#### **pages/\_document.tsx (or app/layout.tsx)**

- [ ] Setare viewport meta tag
- [ ] Schema.org JSON-LD pentru LocalBusiness
- [ ] Google Analytics (cu CMP pentru GDPR)
- [ ] Favicon și meta tags necesare

#### **.env.local**

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
CONTACT_EMAIL=contact@parbrizebadilita.ro
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...
RATE_LIMIT_REQUESTS=5
RATE_LIMIT_WINDOW=3600000
```

### **2.2 Fișiere configurare SEO**

#### **lib/seo.ts**

```typescript
export const SEO_CONFIG = {
  title:
    'Reparații și Înlocuire Parbrize Rădăuți | Centru de Parbrize Bădiliță',
  description:
    'Reparații rapide și profesionale de parbrize în Rădăuți. Parbrize originale și after market cu certificare, adezivi de calitate, consultanță gratuită, decontare CASCO.',
  keywords:
    'reparatii parbrize, reparatie parbriz, service parbrize, parbrize Rădăuți, depozit parbrize',
  robots: 'index, follow',
  og: {
    title: 'Centru de Parbrize Bădiliță - Service Profesionist',
    description: 'Reparații și înlocuiri parbrize rapide în Rădăuți',
    image: 'https://yourdomain.com/og-image.jpg',
    url: 'https://yourdomain.com',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@parbrizebadilita',
  },
}

export const KEYWORDS = [
  'reparatii parbrize',
  'reparatie parbriz',
  'reparatie lovitura piatra',
  'reparatie fisura',
  'fisura parbriz',
  'ciobitura parbriz',
  'service parbrize',
  'parbrize Rădăuți',
  'depozit parbrize',
  'parbrize originale',
  'CASCO',
]

export const SERVICE_AREAS = [
  'Rădăuți',
  'Horodnic de Sus',
  'Horodnic de Jos',
  'Marginea',
  'Sucevița',
  'Solca',
  'Dornești',
  'Siret',
  'Frătăuți',
  'Milișăuți',
  'Vicov',
]
```

#### **lib/schema.ts**

```typescript
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Centru de Parbrize Bădiliță',
  image: 'https://yourdomain.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'str. Salcâmilor, nr 129',
    addressLocality: 'Rădăuți',
    postalCode: '725400',
    addressCountry: 'RO',
  },
  telephone: '+40754760568',
  email: 'contact@parbrizebadilita.ro',
  url: 'https://yourdomain.com',
  areaServed: SERVICE_AREAS,
  priceRange: '$$',
  serviceType: 'Auto Glass Repair and Replacement',
}
```

### **2.3 Fișiere public (robots.txt, sitemap.xml)**

#### **public/robots.txt**

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*.json

Sitemap: https://yourdomain.com/sitemap.xml
```

#### **public/sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2026-04-28</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## **ETAPA 3: DESIGN ȘI COMPONENTE REUSABILE** (Ziua 5-7)

### **3.1 Tailwind CSS configurare**

- [ ] Definire paletă de culori (roșu, gri, negru)
- [ ] Tipografie: Font family, sizes, weights
- [ ] Spacing scale, breakpoints pentru mobile-first
- [ ] Componente Tailwind utils

### **3.2 Creare componente reusabile**

#### **components/Header.tsx**

- Logo și navigație
- Link-uri: Acasă, Servicii, Contact
- CTA vizibil: "Consultanță gratuită"
- Responsiv pentru mobil (hamburger menu)

#### **components/Hero.tsx**

- Imagine hero cu atelierul/echipa
- Motto principal: "Parbrize montate corect, fără griji și fără timp pierdut."
- CTA: "Programează o consultație gratuită"
- Subtitle cu beneficii rapide

#### **components/Services.tsx**

- 4-5 servicii principale cu icon-uri
- Montaj și înlocuire parbrize
- Reparații parbrize (fisuri, ciobituri)
- Diagnosticare scurgeri apă
- Reparații trape/turele
- Peste 200 parbrize în stoc

#### **components/Differentiators.tsx**

- 6 diferențiatori evidențiați clar
- Parbrize originale și after market cu certificare
- Adezivi de calitate superioară
- Adeziv cu uscare rapidă
- Servicii de calitate cu atenție la detalii
- Lucrăm curat, fără mizerie
- Protejăm interiorul mașinii

#### **components/Benefits.tsx**

- Garanție pe lucrări și materiale
- Intervenție rapidă (30-60 min)
- Prețuri corecte și transparente
- Tehnicieni experimentați
- **Decontare CASCO:** "În baza facturii, poți deconta prin CASCO"
- **Consultanță gratuită:** "Dacă ai întrebări, inginerii noștri îți vor oferi consultanță"

#### **components/Areas.tsx**

- Lista cu zone deservite
- Hartă interactivă (opțional)
- Mesaj: "Service mobil disponibil în zona Rădăuți și împrejurime"

#### **components/Map.tsx**

- Google Maps embed iframe (without API key)
- Locația serviciului
- Traseu de navigare
- Informații de contact și program pe hartă

#### **components/ContactForm.tsx**

- Câmpuri: Nume, Telefon, Email, Tip intervenție, Mesaj
- Checkbox GDPR/Confidențialitate
- Validare frontend și backend
- CSRF protection
- Rate limiting (5 request-uri/oră)
- Sanitizare date
- Mesaj: "Echipa noastră va răspunde rapid!"

#### **components/FAQ.tsx**

- 5-7 întrebări frecvente
- Cum se decontează prin CASCO?
- Cât durează o reparație?
- Care sunt garanțiile?
- Ce parbrize folosiți?
- Zone deservite?

#### **components/Footer.tsx**

- Adresă, telefoane, email, program
- Social media links (Facebook, Instagram, WhatsApp)
- Links utile: Termeni și condiții, Politică de confidențialitate
- Copyright

### **3.3 Design system**

- [ ] Button styles (primary, secondary)
- [ ] Card styles
- [ ] Typography scale
- [ ] Color opacity utilities
- [ ] Responsive grid layouts

---

## **ETAPA 4: PAGINA LANDING (CONTENT)** (Ziua 8-10)

### **4.1 app/page.tsx**

- [ ] Integrare componente în ordine: Header, Hero, Services, Differentiators, Benefits, Areas, Map, ContactForm, FAQ, Footer
- [ ] Setare meta tags în `<head>` (description, OG, Twitter, keywords)
- [ ] Integrare Schema.org JSON-LD
- [ ] Imagini optimizate cu Next.js `<Image />`

### **4.2 Optimizare imagini**

- [ ] Logo în public/images/
- [ ] Hero image (1200x600px, WebP + JPG)
- [ ] Imagini servicii (400x300px fiecare)
- [ ] OG image pentru social (1200x630px)
- [ ] Alt text descriptiv pe toate imaginile

### **4.3 Conținut text (limba română)**

- [ ] Mesaje pe fiecare secțiune
- [ ] Copy clar și concis
- [ ] Keywords integrate natural în titluri și descrieri
- [ ] CTA-uri vizibile și clare

### **4.4 Responsivitate mobile-first**

- [ ] Testare pe viewport-uri: 320px, 768px, 1024px, 1440px
- [ ] Butoane și forme ușor de interacționat pe mobil
- [ ] Imagine hero redimensionată pentru mobil
- [ ] Text ușor de citit pe orice ecran

---

## **ETAPA 5: SEO, META TAGS, ȘI OPTIMIZARE** (Ziua 11-12)

### **5.1 Meta tags și SEO**

- [ ] Title tag (60 caractere)
- [ ] Meta description (160 caractere)
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- [ ] Canonical tag
- [ ] Hreflang (dacă exista mai multe versiuni de limbă)

### **5.2 Schema.org și structured data**

- [ ] LocalBusiness schema în JSON-LD
- [ ] Service schema pentru fiecare tip de serviciu
- [ ] FAQ schema pentru secțiunea FAQ
- [ ] Validare cu Google Rich Results Test

### **5.3 Performance SEO**

- [ ] Lazy loading imagini
- [ ] Minify CSS și JavaScript
- [ ] Compression (gzip)
- [ ] CDN pentru static assets
- [ ] Core Web Vitals: LCP, FID, CLS < 0.1

### **5.4 Local SEO**

- [ ] Google My Business listing (setup pe Google Maps)
- [ ] Backlinks și local citations
- [ ] Keywords cu locație (Rădăuți, zone deservite)

---

## **ETAPA 6: SECURITATE ȘI GDPR** (Ziua 13-14)

### **6.1 Prevenire XSS (Cross-Site Scripting)**

- [ ] Input validation pe frontend
- [ ] Input sanitizace pe backend cu DOMPurify
- [ ] Encoding HTML output
- [ ] Content-Security-Policy header

### **6.2 Prevenire CSRF (Cross-Site Request Forgery)**

- [ ] CSRF tokens pe formulare
- [ ] SameSite cookie policy
- [ ] Verificare Origin header în API routes

### **6.3 HTTP Security Headers**

- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Strict-Transport-Security (HSTS)
- [ ] Referrer-Policy: strict-origin-when-cross-origin
- [ ] Implementat în next.config.js

### **6.4 Protecția datelor personale și GDPR**

- [ ] Politică de confidențialitate (legal text)
- [ ] Termeni și condiții
- [ ] Checkbox explicit pentru consentiment colectare date
- [ ] Informare despre terți (e-mail provider, analytics, etc.)
- [ ] Link-uri la drepturi GDPR (acces, ștergere, portabilitate)
- [ ] Notificare și date de contact pentru DPO (Data Protection Officer)

### **6.5 Rate limiting**

- [ ] Limitare requeste pe endpoint formular: 5 request-uri/oră per IP
- [ ] Middleware pentru rate limiting
- [ ] Error message: "Prea multe încercări. Încearcă mai târziu."

### **6.6 Variabile de mediu și secrets**

- [ ] API keys în .env.local (git-ignored)
- [ ] GitHub Secrets pentru CI/CD
- [ ] Fără expunere detalii sensibile în client-side code

### **6.7 HTTPS și TLS**

- [ ] SSL certificate (Let's Encrypt pe Vercel/production)
- [ ] Force HTTPS redirect
- [ ] HSTS header setat

### **6.8 Actualizare dependențe**

- [ ] npm audit check
- [ ] Snyk integration
- [ ] Testare post-update

---

## **ETAPA 7: TESTARE ȘI QUALITY ASSURANCE** (Ziua 15-17)

### **7.1 Testare funcțional**

- [ ] Navigare între pagini
- [ ] Scrollare și animații smooth
- [ ] Butoane și link-uri funcționale
- [ ] Formular: Submit, validare, error handling
- [ ] Google Maps embed: Load și navigare

### **7.2 Testare SEO**

- [ ] Lighthouse audit: SEO score ≥ 90
- [ ] Validare Schema.org cu Google Rich Results Test
- [ ] Testare mobile-friendly cu Google Mobile-Friendly Test
- [ ] Verificare meta tags cu Google Search Console
- [ ] Verificare robots.txt și sitemap.xml

### **7.3 Testare accesibilitate (a11y)**

- [ ] Lighthouse audit: Accessibility score ≥ 90
- [ ] axe-core tool pentru accessibility issues
- [ ] Contrast culori: WCAG AA (4.5:1 minimum)
- [ ] Navigare cu tastatura pe toate elementele
- [ ] Screen reader test (NVDA, JAWS)
- [ ] Alt text pe toate imaginile

### **7.4 Testare performance**

- [ ] Lighthouse audit: Performance score ≥ 90
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Font loading optimized
- [ ] Lazy loading imagini
- [ ] Minify și compression

### **7.5 Testare securitate**

- [ ] OWASP Top 10 check
- [ ] XSS vulnerabilities: Input validation, sanitization
- [ ] CSRF tokens: Verificare pe formular
- [ ] Security headers: Curl header check
- [ ] Rate limiting: Test cu multiple requests
- [ ] GDPR compliance: Cookie consent, privacy policy

### **7.6 Testare mobile și cross-browser**

- [ ] Chrome DevTools mobile emulation (320px, 768px, 1024px)
- [ ] iPhone 12/14/15 (Safari)
- [ ] Android (Chrome, Firefox)
- [ ] Desktop: Chrome, Firefox, Safari, Edge
- [ ] Orientare portrait și landscape

### **7.7 Testare formular**

- [ ] Submit valid data: success message
- [ ] Submit invalid data: validation errors
- [ ] Rate limiting: > 5 requests/oră
- [ ] CSRF token: Protecție
- [ ] Data sanitization: Fără XSS
- [ ] Email notification: Primire pe contact email

### **7.8 Testare Google Maps**

- [ ] Embed load corect
- [ ] Hartă interactivă (zoom, pan)
- [ ] Traseu vizibil
- [ ] Locație corectă
- [ ] Responsiv pe mobil

---

## **ETAPA 8: OPTIMIZARE ȘI PREGATIRE LANSARE** (Ziua 18-19)

### **8.1 Performance optimization**

- [ ] Image optimization final (WebP, AVIF, lazy loading)
- [ ] Bundle analysis (next/bundle-analyzer)
- [ ] Code splitting verificare
- [ ] Runtime optimizations

### **8.2 Seo final checklist**

- [ ] Sitemap.xml generat și submis la Google Search Console
- [ ] robots.txt verificat
- [ ] Meta tags finali verificati
- [ ] Internal links structure ok
- [ ] Schema.org validat

### **8.3 Monitoring și analytics setup**

- [ ] Google Analytics 4 (GA4 with CMP for GDPR)
- [ ] Google Search Console setup
- [ ] Error monitoring (Sentry opțional)
- [ ] Uptime monitoring

### **8.4 Deployment preparation**

- [ ] Environment variables setate
- [ ] Build test: `npm run build`
- [ ] Preview deploy pe Vercel
- [ ] Final QA pe preview
- [ ] Production deploy

---

## **ETAPA 9: LANSARE ȘI POST-LAUNCH** (Ziua 20+)

### **9.1 Pre-launch (Ziua -1)**

- [ ] Final testing pe production URL
- [ ] DNS setup și SSL certificate ready
- [ ] Backup și disaster recovery plan
- [ ] Support team briefing

### **9.2 Launch day**

- [ ] Deploy pe production
- [ ] Verify: Site online și accessible
- [ ] Monitorare logs și errors
- [ ] Test formular de contact

### **9.3 Post-launch monitoring (Ziua 1-7)**

- [ ] Daily check: Performance metrics
- [ ] Error logs monitoring
- [ ] Form submissions și email notifications
- [ ] User feedback collection
- [ ] Analytics data flow verification

### **9.4 Optimizări post-launch**

- [ ] Bug fixes bazate pe user feedback
- [ ] Performance tuning
- [ ] Content updates și additions
- [ ] Link-building și local SEO
- [ ] Social media sharing

---

## **CHECKLIST FINAL LAUNCH**

- [ ] Lighthouse scores ≥ 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Mobile-responsive pe toate device-urile
- [ ] Formular funcțional cu rate limiting
- [ ] Google Maps embed funcțional
- [ ] GDPR compliant (privacy policy, cookie consent)
- [ ] Security headers setat
- [ ] HTTPS și SSL certificate
- [ ] robots.txt și sitemap.xml active
- [ ] Schema.org validat
- [ ] Analytics implementat
- [ ] Backups configured
- [ ] Support contact working

---

## **CONTACT PENTRU LANSARE**

După completarea tuturor etapelor, pagina este gata pentru lansare pe producție. Confirmă dacă dorești să continui cu implementarea unui aspect specific sau dacă ai alte întrebări!

- Parbrize originale și after market cu certificare
- Folosim adezivi de calitate superioară
- Dacă te grăbești, cere adeziv cu uscare rapidă
- Servicii de calitate, cu atenție la detalii
- Lucrăm curat, fără a lăsa urme sau mizerie
- Protejăm interiorul mașinii la fiecare intervenție
- **Doar la noi:** În baza facturii, poți deconta prin CASCO

#### **Secțiune „Servicii"**

- Montaj și înlocuire parbrize și geamuri auto
- Reparații parbrize (fisuri, ciobituri, lovituri de piatră)
- Detectare scurgeri de apă
- Remedieri scurgeri trape/turele
- Peste 200 de parbrize în stoc

#### **Secțiune „Zone deservite"**

- Lista cu toate zonele: Rădăuți, Horodnic de Sus, Horodnic de Jos, Marginea, Sucevița, Solca, Dornești, Siret, Frătăuți, Milișăuți, Vicov
- Service mobil disponibil pentru anumite zone

#### **Secțiune „Beneficii și garanții"**

- Intervenție rapidă (30-60 min pentru reparații)
- Garanție pe lucrări și materiale
- Prețuri corecte și transparente
- Tehnicieni experimentati și certificati
- **Consultanță gratuită:** Dacă ai întrebări sau nelămuriri, inginerii noștri îți pot oferi consultanță gratuită
- **Decontare CASCO:** În baza facturii, poți deconta prin CASCO

#### **Formular de contact/programare**

- Câmpuri: Nume, Telefon, Email, Mesaj, Tip intervenție (Reparație/Înlocuire)
- Checkbox pentru acceptarea politicii de confidențialitate
- CTA: „Solicită ofertă" sau „Programează acum"
- Mesaj de suport sub formular: „Neclar ceva? Echipa noastră îți va răspunde rapid!"

#### **Secțiunea FAQ**

- Despre proces, garanție, decontare CASCO, zone deservite, tipuri de parbrize

#### **Google Maps embed**

- Hartă interactivă cu locația serviciului
- Traseu de navigare (iframe gratuit, fără API key)
- Informații de contact și program vizibil pe hartă

#### **Date de contact și program**

- Adresă: str. Salcâmilor, nr 129, Rădăuți
- Telefoane: 0754760568, 0744509464
- Email: contact@parbrizebadilita.ro (dacă există)
- Program de lucru (dacă dorești)
- Linkuri social media

### **5. Optimizare imagini**

- Toate imaginile cu Next.js `<Image />`, alt text descriptiv, formate moderne
- Logo și imagini relevante în public
- Imagini optimizate pentru mobile și desktop
- Format WebP/AVIF pentru performanță

### **6. Accesibilitate**

- HTML semantic (header, main, footer, nav, section, article)
- Contrast bun între culori (WCAG AA minimum)
- Navigare cu tastatura pe toate elementele interactive
- Aria-labels și aria-roles unde necesare
- Alt text descriptiv pentru toate imaginile
- Testare cu Lighthouse și axe-core

### **7. Mobile-first**

- CSS responsive (%, rem, em, vw/vh)
- Viewport meta în pages/\_document.tsx: `<meta name="viewport" content="width=device-width, initial-scale=1" />`
- Testare pe mobil și desktop
- CLS (Cumulative Layout Shift) minimal
- Fast loading times

### **8. Automatizări SEO**

- public/robots.txt: Instrucțiuni pentru crawlere
- public/sitemap.xml: Hartă de pagini
- Opțional: next-seo sau next-sitemap pentru generare automată
- Open Graph și Twitter Card meta tags

### **9. Securitate Next.js și GDPR**

#### **Prevenire XSS (Cross-Site Scripting)**

- Validare și sanitizare date de intrare pe frontend și backend
- Utilizare DOMPurify pentru renderizare conținut user-generated
- Content-Security-Policy header implementat

#### **Prevenire CSRF (Cross-Site Request Forgery)**

- Utilizare token-uri CSRF pentru formulare și API routes
- SameSite cookie policy
- Verificare Origin header în API routes

#### **HTTP Security Headers**

- Content-Security-Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security (HSTS)
- Referrer-Policy: strict-origin-when-cross-origin

#### **Validare și sanitizare date**

- Validare pe frontend (UX)
- Validare și sanitizare pe backend (securitate)
- Nu expune detalii tehnice în mesajele de eroare
- Rate limiting pe endpoint-urile de formular

#### **Protecția datelor personale și GDPR**

- Politica de confidențialitate clară și ușor accesibilă
- Checkbox explicit pentru consentiment colectare date
- Stocarea datelor personale conform GDPR
- Dată de ștergere sau arkivare date după perioada legală
- Notificare dacă datele sunt procesate prin terți
- Informare despre drepturi (acces, ștergere, portabilitate)
- Encriptare HTTPS pentru toate conexiunile
- Opțional: Google Analytics/Tag Manager cu CMP (Consent Management Platform)

#### **Rate limiting**

- Limitare requeste pe endpoint-uri de contact/formular
- Previne spam și abuse

#### **Stocarea datelor sensibile**

- Fără expunere date personale în frontend
- Variabile de mediu (.env.local) pentru API keys și configurații sensibile
- GitHub Secrets pentru CI/CD

#### **Actualizare dependențe**

- Verificare regulară pentru vulnerabilități (npm audit, Snyk)
- Actualizare promptă a dependențelor cu patch-uri de securitate
- Testare post-update

---

## **FAQ și mesaje de suport**

**Întrebare:** Cum se decontează prin CASCO?
**Răspuns:** După intervenție, emisionar factura care poate fi prezentată la asigurare pentru decontare conform contractului CASCO.

**Întrebare:** Cât durează o reparație?
**Răspuns:** Reparațiile simple (fisuri) durează 30-60 minute. Înlocuirile complete pot dura 1-2 ore.

**Întrebare:** Care sunt garanțiile?
**Răspuns:** Oferim garanție pe lucrări și materiale. Detaliile sunt discutate la moment de contact.

**Întrebare:** Aveți service mobil?
**Răspuns:** Da, serviciul mobil este disponibil în Rădăuți și zonele din jur.

**Mesaj de consultanță:** Dacă ai întrebări sau nelămuriri, inginerii noștri îți pot oferi consultanță gratuită. Contactează-ne!

---

## **Elemente tehnice Next.js**

- SSR/SSG pentru viteză și SEO
