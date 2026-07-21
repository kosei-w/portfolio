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
  'w-full bg-surface border border-line px-4 py-3 text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-accent'

const labelClass = 'block text-meta font-mono text-ink-muted mb-2'

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
      <div className="border border-accent p-10 text-center">
        <div className="text-4xl mb-4 text-accent">✓</div>
        <h3 className="font-bold font-mono text-xl mb-3 text-ink">Sent.</h3>
        <p className="text-body text-ink-muted">
          送信できました。1営業日以内にご返信します。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            お名前 <span className="text-accent" aria-label="必須">*</span>
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
          />
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClass}>
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
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          メールアドレス <span className="text-accent" aria-label="必須">*</span>
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

      <div>
        <label htmlFor="contact-plan" className={labelClass}>
          気になるプラン
        </label>
        <select
          id="contact-plan"
          name="plan"
          value={form.plan}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">選択してください（任意）</option>
          <option value="starter">スターター ¥128,000〜</option>
          <option value="standard">スタンダード ¥198,000〜</option>
          <option value="premium">プレミアム ¥350,000〜</option>
          <option value="undecided">まだ決めていない</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
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
        />
      </div>

      {status === 'error' && (
        <p className="text-sm font-mono text-accent border border-accent/30 px-4 py-3" role="alert">
          送信に失敗しました。時間をおいて再度お試しいただくか、メールで直接ご連絡ください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full border border-accent text-accent py-4 text-label font-mono hover:bg-accent hover:text-bg transition-all duration-300 active:scale-[0.97] active:duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'SENDING…' : 'SEND MESSAGE →'}
      </button>

      <p className="text-center text-label font-mono text-ink-faint">
        1営業日以内に返信します
      </p>
    </form>
  )
}
