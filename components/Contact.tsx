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
  'w-full bg-white border border-[#d1d5db] px-4 py-3 text-[#0a0f1e] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all'

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
      <div className="border border-[#6ee7b7] p-10 text-center">
        <div className="text-4xl mb-4 text-[#059669]">✓</div>
        <h3 className="text-[#065f46] font-black text-2xl mb-3">送信しました</h3>
        <p className="text-[#047857] leading-relaxed">
          1〜2営業日以内にご連絡いたします。
          <br />
          少しお待ちください。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-bold text-[#374151] mb-2">
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
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-bold text-[#374151] mb-2">
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
        <label htmlFor="contact-email" className="block text-sm font-bold text-[#374151] mb-2">
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
        />
      </div>

      <div>
        <label htmlFor="contact-plan" className="block text-sm font-bold text-[#374151] mb-2">
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
        <label htmlFor="contact-message" className="block text-sm font-bold text-[#374151] mb-2">
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
        <p className="text-[#ef4444] text-sm bg-[#fef2f2] border border-[#fca5a5] px-4 py-3" role="alert">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#f59e0b] text-[#0a0f1e] font-black py-4 text-base hover:bg-[#fbbf24] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? '送信中…' : '無料相談を申し込む →'}
      </button>

      <p className="text-center text-[#9ca3af] text-sm">
        返信は1〜2営業日以内。勧誘・営業は一切しません。
      </p>
    </form>
  )
}
