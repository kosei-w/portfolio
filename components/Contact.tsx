'use client'

import { useState } from 'react'

type FormData = {
  name: string
  company: string
  email: string
  plan: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  plan: '',
  message: '',
}

const inputClass =
  'w-full bg-[var(--c-surface)] border px-4 py-3 text-[var(--c-text)] placeholder:text-[var(--c-subtle)] focus:outline-none transition-all'

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border p-10 text-center" style={{ borderColor: 'var(--c-accent)' }}>
        <div className="text-4xl mb-4" style={{ color: 'var(--c-accent)' }}>✓</div>
        <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--c-text)', fontFamily: 'var(--f-mono)' }}>Sent.</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--c-muted)', fontFamily: 'var(--f-sans)' }}>
          I&apos;ll get back to you within 1–2 business days.
        </p>
      </div>
    )
  }

  const fieldStyle = { borderColor: 'var(--c-border)', fontFamily: 'var(--f-sans)' }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-[11px] tracking-[0.15em] text-[var(--c-muted)] mb-2" style={{ fontFamily: 'var(--f-mono)' }}>
            お名前 <span className="text-[#ef4444]" aria-label="必須">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="山田 太郎"
            className={inputClass}
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-[11px] tracking-[0.15em] text-[var(--c-muted)] mb-2" style={{ fontFamily: 'var(--f-mono)' }}>
            会社名・屋号
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            placeholder="株式会社〇〇"
            className={inputClass}
            style={fieldStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-[11px] tracking-[0.15em] text-[var(--c-muted)] mb-2" style={{ fontFamily: 'var(--f-mono)' }}>
          メールアドレス <span className="text-[#ef4444]" aria-label="必須">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputClass}
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="contact-plan" className="block text-[11px] tracking-[0.15em] text-[var(--c-muted)] mb-2" style={{ fontFamily: 'var(--f-mono)' }}>
          気になるプラン
        </label>
        <select
          id="contact-plan"
          name="plan"
          value={form.plan}
          onChange={handleChange}
          className={inputClass}
          style={fieldStyle}
        >
          <option value="">選択してください（任意）</option>
          <option value="starter">スターター ¥128,000〜</option>
          <option value="standard">スタンダード ¥198,000〜</option>
          <option value="premium">プレミアム ¥350,000〜</option>
          <option value="undecided">まだ決めていない</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-[11px] tracking-[0.15em] text-[var(--c-muted)] mb-2" style={{ fontFamily: 'var(--f-mono)' }}>
          現状の課題・ご要望
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="例：サイトが古くてスマホで崩れている、そもそもHPがない、問い合わせが来ないなど、何でもお気軽に"
          className={`${inputClass} resize-none`}
          style={fieldStyle}
        />
      </div>

      {status === 'error' && (
        <p
          className="text-sm border px-4 py-3"
          style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)', fontFamily: 'var(--f-mono)' }}
          role="alert"
        >
          Failed to send. Please try again later.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full border border-[var(--c-accent)] text-[var(--c-accent)] py-4 text-[11px] tracking-[0.3em] hover:bg-[var(--c-accent)] hover:text-[var(--c-bg)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontFamily: 'var(--f-mono)' }}
      >
        {status === 'loading' ? 'SENDING…' : 'SEND MESSAGE →'}
      </button>

      <p
        className="text-center text-[11px] tracking-[0.1em]"
        style={{ color: 'var(--c-subtle)', fontFamily: 'var(--f-mono)' }}
      >
        Reply within 1–2 business days.
      </p>
    </form>
  )
}
