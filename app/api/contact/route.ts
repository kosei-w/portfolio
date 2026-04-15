import { NextRequest, NextResponse } from 'next/server'
import { resend, CONTACT_TO } from '@/lib/resend'

type ContactBody = {
  name: string
  company?: string
  email: string
  plan?: string
  message?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let body: ContactBody

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, company, email, plan, message } = body

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'name and email are required' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const planLabel: Record<string, string> = {
    starter: 'スターター ¥128,000〜',
    standard: 'スタンダード ¥198,000〜',
    premium: 'プレミアム ¥350,000〜',
    undecided: 'まだ決めていない',
  }

  try {
    await resend.emails.send({
      from: 'portfolio@resend.dev',
      to: CONTACT_TO,
      subject: `【HP制作相談】${name}様より`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold;width:120px">お名前</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">会社名</td><td style="padding:8px">${company ?? '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">メール</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">プラン</td><td style="padding:8px">${plan ? planLabel[plan] ?? plan : '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">ご要望</td><td style="padding:8px;white-space:pre-wrap">${message ?? '—'}</td></tr>
        </table>
      `,
    })

    // Auto-reply to client
    await resend.emails.send({
      from: 'portfolio@resend.dev',
      to: email,
      subject: 'お問い合わせありがとうございます — Kosei',
      html: `
        <p>${name} 様</p>
        <p>お問い合わせいただき、ありがとうございます。<br>
        1〜2営業日以内にご連絡いたします。</p>
        <p>少しお待ちください😊</p>
        <hr>
        <p style="color:#6b7280;font-size:12px">Kosei | HP制作</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
