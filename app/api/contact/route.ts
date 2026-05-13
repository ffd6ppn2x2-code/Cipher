import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || 'Info@cipherop.com'

const transportConfigValid = !!(SMTP_USER && SMTP_PASS)

const transporter = transportConfigValid
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER!,
        pass: SMTP_PASS!,
      },
    })
  : null

export async function POST(request: Request) {
  if (!transportConfigValid) {
    return NextResponse.json(
      { error: 'Mail server not configured. Set SMTP_USER and SMTP_PASS environment variables.' },
      { status: 500 },
    )
  }

  try {
    const { name, email, company, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const html = `<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #cbd5e1; background: #0d1b2e; padding: 32px;">
  <div style="max-width: 600px; margin: 0 auto;">
    <h1 style="color: #00d4ff; font-size: 20px; margin: 0 0 24px;">Cipher Contact</h1>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 12px 16px; border-bottom: 1px solid #1e3a5f; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Name</td><td style="padding: 12px 16px; border-bottom: 1px solid #1e3a5f; font-size: 14px;">${name}</td></tr>
      <tr><td style="padding: 12px 16px; border-bottom: 1px solid #1e3a5f; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Email</td><td style="padding: 12px 16px; border-bottom: 1px solid #1e3a5f; font-size: 14px;"><a href="mailto:${email}" style="color: #00d4ff;">${email}</a></td></tr>
      <tr><td style="padding: 12px 16px; border-bottom: 1px solid #1e3a5f; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Company</td><td style="padding: 12px 16px; border-bottom: 1px solid #1e3a5f; font-size: 14px;">${company || '—'}</td></tr>
      <tr><td style="padding: 12px 16px; border-bottom: 1px solid #1e3a5f; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Service</td><td style="padding: 12px 16px; border-bottom: 1px solid #1e3a5f; font-size: 14px;">${service || '—'}</td></tr>
    </table>
    <div style="margin-top: 24px; padding: 16px; background: #16273e; border-radius: 8px;">
      <p style="color: #94a3b8; font-size: 12px; text-transform: uppercase; margin: 0 0 8px;">Message</p>
      <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
    </div>
  </div>
</body>
</html>`

    await transporter!.sendMail({
      from: `"Cipher Website" <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` (${company})` : ''}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Contact email error:', message)
    return NextResponse.json({ error: `Failed to send message. ${message}` }, { status: 500 })
  }
}
