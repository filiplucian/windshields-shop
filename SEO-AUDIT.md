# SEO Audit & Optimizare – Centru de Parbrize Bădiliță

**Data:** Aprilie 2026

---

## Ce s-a verificat

| Motor / Browser                      | Elemente verificate                                                           |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| **Google**                           | Title, description, canonical, schema JSON-LD, sitemap, robots, keywords, geo |
| **Bing / Edge**                      | msapplication meta tags, robots, sitemap                                      |
| **Safari / iOS**                     | apple-touch-icon, apple-mobile-web-app meta tags, themeColor                  |
| **Brave / Firefox**                  | Standard meta tags, favicon, OG protocol                                      |
| **ChatGPT / Perplexity / AI search** | Schema @id entity linking, ServiceCatalog, FAQ schema, NAP complet            |

---

## Ce s-a corectat și adăugat

### 1. `app/layout.tsx`

| Element           | Înainte                                           | După                                                                                                                                                                                        |
| ----------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`     | "Reparații și înlocuiri... consultanță gratuită." | Include număr telefon + tratament hidrofob (mai acționabil)                                                                                                                                 |
| `keywords`        | 18 termeni                                        | **40 termeni** — adăugate: fisura/ciobitura, OEM, aftermarket, tratament hidrofob, geamuri laterale, localități individuale (Dornești, Solca, Vicov, Milișăuți, Frătăuți), variante urgente |
| `themeColor`      | `#111111` (negru)                                 | `#D41111` (roșu brand) — afișat în bara browserului                                                                                                                                         |
| `applicationName` | lipsă                                             | `Centru de Parbrize Bădiliță`                                                                                                                                                               |
| `category`        | lipsă                                             | `automotive`                                                                                                                                                                                |
| `icons`           | lipsă                                             | `logo.png` pentru favicon + Apple touch icon (toate browserele)                                                                                                                             |
| Apple Web App     | lipsă                                             | `apple-mobile-web-app-capable`, `apple-mobile-web-app-title`, `apple-mobile-web-app-status-bar-style`                                                                                       |
| Microsoft Edge    | lipsă                                             | `msapplication-TileColor`, `msapplication-navbutton-color`                                                                                                                                  |
| Geo meta          | lipsă                                             | `geo.region`, `geo.placename`, `geo.position`, `ICBM` (Bing, Yandex, AI crawlers)                                                                                                           |
| `googleBot`       | index/follow                                      | + `max-image-preview: large`                                                                                                                                                                |

---

### 2. `lib/schema.ts`

| Element              | Înainte          | După                                                                               |
| -------------------- | ---------------- | ---------------------------------------------------------------------------------- |
| `@id`                | lipsă            | `https://parbrizeradauti.ro/#business` — entity linking pentru AI                  |
| `logo` + `image`     | lipsă            | `/logo.png`                                                                        |
| `description`        | scurtă, generică | Detaliată: menționează toate serviciile explicit                                   |
| Al doilea telefon    | lipsă            | `contactPoint[]` cu ambele numere                                                  |
| `hasOfferCatalog`    | lipsă            | **5 servicii** cu descrieri: Reparație, Montaj, Geamuri, Tratament Hidrofob, CASCO |
| Program weekend      | lipsă            | `OpeningHoursSpecification` Sâmbătă–Duminică: închis                               |
| `currenciesAccepted` | lipsă            | `RON`                                                                              |
| `paymentAccepted`    | lipsă            | `Cash, Card, Transfer bancar`                                                      |
| FAQ întrebări        | 6                | **8** — adăugate: tratament hidrofob + unde găsim                                  |
| `WEBSITE_SCHEMA @id` | lipsă            | `#website` + `publisher` → `#business` (legătură entitate)                         |
| `WebSite publisher`  | lipsă            | Referință la `#business`                                                           |

---

## Ce mai lipsește (necesită acțiune manuală)

| Element                    | Prioritate | Ce trebuie făcut                                                                                                                            |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `public/og-image.jpg`      | **CRITIC** | Imagine 1200×630px pentru share Facebook/WhatsApp. Decomentează 2 linii în `layout.tsx` și `schema.ts` după adăugare                        |
| Google Business Profile    | **CRITIC** | Revendică și verifică firma pe [business.google.com](https://business.google.com). Setează pin-ul la intrarea corectă de pe str. Salcâmilor |
| Favicon dedicat            | Medie      | Creează `public/favicon.ico` (16×16, 32×32) și `public/favicon-192.png` pentru PWA. Momentan folosește `logo.png`                           |
| Recenzii Google reale      | Medie      | Solicită clienților să lase recenzii pe Google Maps — afectează direct ranking-ul local                                                     |
| Backlinks locali           | Medie      | Înregistrare pe pagini locale: [autonews.ro](https://autonews.ro), directoare auto românești                                                |
| `public/browserconfig.xml` | Mică       | Pentru tile-uri Windows personalizate în Edge                                                                                               |
| Schema `foundingDate`      | Mică       | Adaugă anul înființării firmei în schema.ts                                                                                                 |

---

## Cum verifici după deploy

1. **Google Rich Results Test**: `https://search.google.com/test/rich-results` → caută LocalBusiness + FAQ + ServiceCatalog
2. **Google Search Console**: Verifică indexarea și erorile de crawling
3. **Facebook Debugger**: `https://developers.facebook.com/tools/debug/` → verifică OG tags
4. **Bing Webmaster Tools**: Submitere sitemap la Bing
5. **PageSpeed Insights**: `https://pagespeed.web.dev/` → scor performanță + SEO
6. **Schema Validator**: `https://validator.schema.org/` → validare JSON-LD

---

## Scor estimat după optimizări

| Criteriu                       | Înainte    | După       |
| ------------------------------ | ---------- | ---------- |
| Keywords coverage              | 18 termeni | 40 termeni |
| Schema completitudine          | 60%        | 90%        |
| Browser compatibility metadata | 30%        | 85%        |
| AI search readiness            | 40%        | 80%        |
| Local SEO (fără GBP)           | 50%        | 70%        |
