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

  return (
    <section id="contact" className="section-padding bg-[#f9fafb]">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">Contact</p>
        <h2 className="text-[#0a0f1e] font-black text-3xl md:text-5xl mb-4 leading-tight">
          まず、話しましょう。
        </h2>
        <p className="text-[#6b7280] text-lg mb-12 leading-relaxed">
          初回相談は無料・30分・オンラインで。
          <br />
          「まだぼんやりしている」でも大丈夫です。
        </p>

        {status === 'success' ? (
          <div className="bg-[#ecfdf5] border border-[#6ee7b7] rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-[#065f46] font-black text-2xl mb-3">送信しました！</h3>
            <p className="text-[#047857]">
              1〜2営業日以内にご連絡いたします。
              <br />
              少しお待ちください😊
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#374151] mb-2">
                  お名前 <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full bg-white border border-[#d1d5db] rounded-xl px-4 py-3 text-[#0a0f1e] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#374151] mb-2">
                  会社名・屋号
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  className="w-full bg-white border border-[#d1d5db] rounded-xl px-4 py-3 text-[#0a0f1e] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#374151] mb-2">
                メールアドレス <span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-white border border-[#d1d5db] rounded-xl px-4 py-3 text-[#0a0f1e] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#374151] mb-2">
                気になるプラン
              </label>
              <select
                name="plan"
                value={form.plan}
                onChange={handleChange}
                className="w-full bg-white border border-[#d1d5db] rounded-xl px-4 py-3 text-[#0a0f1e] focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all"
              >
                <option value="">選択してください（任意）</option>
                <option value="starter">スターター ¥128,000〜</option>
                <option value="standard">スタンダード ¥198,000〜</option>
                <option value="premium">プレミアム ¥350,000〜</option>
                <option value="undecided">まだ決めていない</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#374151] mb-2">
                現状の課題・ご要望
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="例：サイトが古くてスマホで崩れている、そもそもHPがない、問い合わせが来ないなど、何でもお気軽に"
                className="w-full bg-white border border-[#d1d5db] rounded-xl px-4 py-3 text-[#0a0f1e] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-[#ef4444] text-sm bg-[#fef2f2] border border-[#fca5a5] rounded-xl px-4 py-3">
                送信に失敗しました。時間をおいて再度お試しください。
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#0a0f1e] text-white font-black py-4 rounded-full text-lg hover:bg-[#f59e0b] hover:text-[#0a0f1e] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? '送信中...' : '無料相談を申し込む →'}
            </button>

            <p className="text-center text-[#9ca3af] text-sm">
              返信は1〜2営業日以内。勧誘・営業は一切しません。
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
