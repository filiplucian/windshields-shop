'use client'

import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/config'

type FormData = {
  name: string
  phone: string
  email: string
  interventionType: string
  message: string
  gdpr: boolean
}

type Status = 'idle' | 'loading' | 'success' | 'error'

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    interventionType: 'Reparație',
    message: '',
    gdpr: false,
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', interventionType: 'Reparație', message: '', gdpr: false })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'A apărut o eroare. Încearcă din nou.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Eroare de rețea. Te rugăm să ne contactezi telefonic.')
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-brand-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left – contact info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-red inline-block" />
              <span className="font-heading font-semibold text-brand-red uppercase tracking-widest text-xs sm:text-sm">Contact</span>
            </div>
            <h2 className="section-title">Programează o intervenție</h2>
            <p className="font-body text-brand-mid-gray mb-6 text-sm sm:text-base">
              Completează formularul sau contactează-ne direct. Echipa noastră îți va răspunde rapid!
            </p>

            {/* Phone + WhatsApp buttons */}
            <div className="space-y-3 mb-6">
              <p className="font-heading font-semibold text-white text-xs uppercase tracking-wide">Sună sau trimite mesaj pe WhatsApp:</p>
              {SITE_CONFIG.phones.map((phone, i) => (
                <div key={phone} className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${SITE_CONFIG.phonesRaw[i]}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-black border border-white/10 rounded px-4 py-3 font-body text-brand-mid-gray text-sm hover:text-white hover:border-white/30 transition-colors"
                  >
                    <svg className="w-4 h-4 text-brand-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                    {phone}
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.phonesRaw[i].replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-whatsapp text-sm py-3"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>

            {/* Email */}
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center group-hover:bg-brand-red transition-colors shrink-0">
                <svg className="w-4 h-4 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
              </span>
              <span className="font-body text-brand-mid-gray group-hover:text-white transition-colors text-sm break-all">{SITE_CONFIG.email}</span>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card bg-brand-black space-y-4">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Mesaj trimis!</h3>
                <p className="font-body text-brand-mid-gray text-sm">Îți vom răspunde în cel mai scurt timp. Mulțumim!</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-white text-xs uppercase tracking-wide mb-1.5">Nume *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      className="w-full bg-brand-dark-gray border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-brand-mid-gray focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="Ion Popescu" />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-white text-xs uppercase tracking-wide mb-1.5">Telefon *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      className="w-full bg-brand-dark-gray border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-brand-mid-gray focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="07xx xxx xxx" />
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-semibold text-white text-xs uppercase tracking-wide mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full bg-brand-dark-gray border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-brand-mid-gray focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="email@exemplu.ro" />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-white text-xs uppercase tracking-wide mb-1.5">Tip intervenție</label>
                  <select name="interventionType" value={form.interventionType} onChange={handleChange}
                    className="w-full bg-brand-dark-gray border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors">
                    <option>Reparație</option>
                    <option>Înlocuire parbriz</option>
                    <option>Geam lateral</option>
                    <option>Consultanță</option>
                    <option>Altele</option>
                  </select>
                </div>
                <div>
                  <label className="block font-heading font-semibold text-white text-xs uppercase tracking-wide mb-1.5">Mesaj</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    className="w-full bg-brand-dark-gray border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-brand-mid-gray focus:outline-none focus:border-brand-red transition-colors resize-none"
                    placeholder="Descrie problema sau întrebarea ta..." />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" name="gdpr" id="gdpr" checked={form.gdpr} onChange={handleChange} required
                    className="mt-1 w-4 h-4 accent-brand-red shrink-0" />
                  <label htmlFor="gdpr" className="font-body text-brand-mid-gray text-xs leading-relaxed">
                    Sunt de acord cu prelucrarea datelor personale conform{' '}
                    <a href="/politica-de-confidentialitate" className="text-brand-red hover:underline">Politicii de Confidențialitate</a>.
                  </label>
                </div>
                {status === 'error' && <p className="font-body text-red-400 text-sm">{errorMsg}</p>}
                <button type="submit" disabled={status === 'loading'}
                  className="btn-primary w-full py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Se trimite...' : 'Trimite Mesajul'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
