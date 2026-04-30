import { NextRequest, NextResponse } from 'next/server'
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit } from '@/lib/security'

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Prea multe cereri. Încearcă mai târziu sau sună-ne direct.' },
      { status: 429 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, message: 'Date invalide.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const email = String(body.email ?? '').trim()
  const interventionType = String(body.interventionType ?? '').trim()
  const message = String(body.message ?? '').trim()
  const gdpr = Boolean(body.gdpr)

  if (!name || name.length < 2) {
    return NextResponse.json({ success: false, message: 'Numele este obligatoriu.' }, { status: 400 })
  }
  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json({ success: false, message: 'Numărul de telefon nu este valid.' }, { status: 400 })
  }
  if (email && !isValidEmail(email)) {
    return NextResponse.json({ success: false, message: 'Adresa de email nu este validă.' }, { status: 400 })
  }
  if (!gdpr) {
    return NextResponse.json({ success: false, message: 'Trebuie să accepți politica de confidențialitate.' }, { status: 400 })
  }

  const safeName = sanitizeInput(name)
  const safeMessage = sanitizeInput(message)
  const safeType = sanitizeInput(interventionType)

  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const contactEmail = process.env.CONTACT_EMAIL ?? 'contact@parbrizebadilita.ro'

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const nodemailer = (await import('nodemailer')).default
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: false,
        auth: { user: smtpUser, pass: smtpPass },
      })

      await transporter.sendMail({
        from: `"Site Parbrize" <${smtpUser}>`,
        to: contactEmail,
        subject: `Cerere nouă: ${safeType} – ${safeName}`,
        text: [
          `Nume: ${safeName}`,
          `Telefon: ${phone}`,
          `Email: ${email || 'necompletat'}`,
          `Tip intervenție: ${safeType}`,
          `Mesaj: ${safeMessage || 'necompletat'}`,
        ].join('\n'),
        html: `
          <h2>Cerere nouă de la site</h2>
          <p><strong>Nume:</strong> ${safeName}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'necompletat'}</p>
          <p><strong>Tip intervenție:</strong> ${safeType}</p>
          <p><strong>Mesaj:</strong> ${safeMessage || 'necompletat'}</p>
        `,
      })
    } catch (err) {
      console.error('Email error:', err)
      return NextResponse.json({ success: false, message: 'Eroare la trimitere. Sunați-ne la 0754 760 568.' }, { status: 500 })
    }
  }

  return NextResponse.json({ success: true, message: 'Mesaj trimis cu succes!' })
}
