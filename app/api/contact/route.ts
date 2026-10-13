import { NextRequest, NextResponse } from 'next/server'
import { getResend, CONTACT_TO, NOTIFY_FROM, AUTOREPLY_FROM } from '@/lib/resend'

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  message: 2000,
} as const

type ContactBody = {
  name: string
  email: string
  message?: string
}

// In-memory rate limiter (per serverless instance — sufficient for personal portfolio)
const rateMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: '送信回数の上限に達しました。しばらくお待ちください。' },
      { status: 429 }
    )
  }

  let body: ContactBody
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, message } = body

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'name and email are required' }, { status: 400 })
  }

  if (name.trim().length > FIELD_LIMITS.name) {
    return NextResponse.json({ error: 'name is too long' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  if (email.length > FIELD_LIMITS.email) {
    return NextResponse.json({ error: 'email is too long' }, { status: 400 })
  }

  if (message && message.length > FIELD_LIMITS.message) {
    return NextResponse.json({ error: 'message is too long' }, { status: 400 })
  }

  if (!CONTACT_TO) {
    console.error('[contact] CONTACT_EMAIL is not set')
    return NextResponse.json({ error: 'Contact is not configured' }, { status: 500 })
  }

  let resend
  try {
    resend = getResend()
  } catch (err) {
    console.error('[contact] resend setup error:', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Contact is not configured' }, { status: 500 })
  }

  // 通知メール（Kose宛て）。Resendは送信失敗でも例外を投げず { error } を返すので、必ず確認する。
  // 届かなかったら画面にエラーを出し、メールで直接連絡してもらう
  try {
    const { error } = await resend.emails.send({
      from: NOTIFY_FROM,
      to: CONTACT_TO,
      replyTo: email,
      // 件名に改行が入るとヘッダが崩れるので、1行にそろえる
      subject: `【ポートフォリオ】${name.trim().replace(/[\r\n]+/g, ' ')}様よりメッセージ`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold;width:120px">お名前</td><td style="padding:8px">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">メール</td><td style="padding:8px">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">メッセージ</td><td style="padding:8px;white-space:pre-wrap">${message ? escapeHtml(message) : '—'}</td></tr>
        </table>
      `,
    })
    if (error) {
      console.error('[contact] notification failed:', error.name, error.message)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }
  } catch (err) {
    console.error('[contact] notification error:', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
  }

  // 自動返信（送ってくれた人宛て）。独自ドメインの送信元（CONTACT_AUTOREPLY_FROM）を設定するまでは送らない。
  // 通知はもう届いているので、ここで失敗しても利用者にはエラーを返さず、ログにだけ残す
  if (AUTOREPLY_FROM) {
    try {
      const { error } = await resend.emails.send({
        from: AUTOREPLY_FROM,
        to: email,
        subject: 'メッセージありがとうございます — 出塚航世',
        html: `
          <p>${escapeHtml(name)} 様</p>
          <p>メッセージをありがとうございます。<br>
          2営業日以内に返信します。</p>
          <hr>
          <p style="color:#6b7280;font-size:12px">出塚航世 / Kosei Idezuka</p>
        `,
      })
      if (error) console.error('[contact] auto-reply failed:', error.name, error.message)
    } catch (err) {
      console.error('[contact] auto-reply error:', err instanceof Error ? err.message : 'unknown')
    }
  }

  return NextResponse.json({ success: true })
}
