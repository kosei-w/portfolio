import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const CONTACT_TO = process.env.CONTACT_EMAIL ?? 'your@email.com'
