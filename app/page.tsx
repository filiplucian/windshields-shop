import { LOCAL_BUSINESS_SCHEMA, FAQ_SCHEMA, WEBSITE_SCHEMA } from '@/lib/schema'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Differentiators from '@/components/Differentiators'
import Benefits from '@/components/Benefits'
import Areas from '@/components/Areas'
import Map from '@/components/Map'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />

      <Header />
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <Benefits />
        <Areas />
        <Map />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
