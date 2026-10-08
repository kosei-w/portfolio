'use client'

import { useState } from 'react'

type FormData = {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const initialForm: FormData = {
  name: '',
  email: '',
  message: '',
}

const inputClass =
  'w-full border-b border-line bg-transparent py-3 text-body text-ink placeholder:text-ink-3 transition-colors duration-300 focus:border-ink'

const labelClass = 'block font-mono text-label text-ink-3'

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <div className="border-t border-line pt-6" role="status">
        <p className="font-display text-headline font-medium text-ink">Sent.</p>
        <p className="mt-2 text-body text-ink-2">送信できました。2営業日以内に返信します。</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            NAME <span aria-label="必須">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="お名前"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            EMAIL <span aria-label="必須">*</span>
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
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          MESSAGE
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="相談・取材・ただ話してみたい、なんでもどうぞ"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-body text-ink" role="alert">
          送信に失敗しました。時間をおいて再度お試しいただくか、メールで直接ご連絡ください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="border border-line px-8 py-4 font-mono text-label text-ink transition-colors duration-300 hover:border-ink active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'loading' ? 'SENDING…' : 'SEND →'}
      </button>
    </form>
  )
}
