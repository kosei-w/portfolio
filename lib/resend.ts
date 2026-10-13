import { Resend } from 'resend'

export function getResend(): Resend {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')
  return new Resend(key)
}

/** 通知メールの宛先（Kose）。未設定なら送らずにエラーにする（仮のアドレスへ黙って飛ばさない） */
export const CONTACT_TO = process.env.CONTACT_EMAIL

/** 通知メールの送信元。独自ドメインを認証するまではResendのテスト用アドレス（Resendアカウント本人宛てにしか届かない） */
export const NOTIFY_FROM = process.env.CONTACT_NOTIFY_FROM ?? 'onboarding@resend.dev'

/**
 * 送ってくれた人への自動返信の送信元。独自ドメインを認証した送信元を設定するまでは空にしておき、
 * 自動返信は送らない（テスト用アドレスからは第三者に届かないため）
 */
export const AUTOREPLY_FROM = process.env.CONTACT_AUTOREPLY_FROM
