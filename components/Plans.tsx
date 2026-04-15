'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'スターター',
    price: '¥128,000',
    unit: '〜',
    period: '最短7日',
    desc: '小さく始めたい方に。シンプルで清潔感のあるHPを素早く届けます。',
    features: [
      'レスポンシブデザイン（スマホ対応）',
      '5ページまで',
      'お問い合わせフォーム',
      '高速表示（Next.js + Vercel）',
      '公開後1ヶ月サポート',
    ],
    highlight: false,
  },
  {
    name: 'スタンダード',
    price: '¥198,000',
    unit: '〜',
    period: '最短10日',
    desc: '最も選ばれるプラン。アニメーションと問い合わせ通知で、成果につながるサイトに。',
    features: [
      'スターターの全機能',
      'スクロールアニメーション',
      'お問い合わせ自動メール通知',
      'Google Analytics設置',
      '10ページまで',
      '公開後3ヶ月サポート',
    ],
    highlight: true,
  },
  {
    name: 'プレミアム',
    price: '¥350,000',
    unit: '〜',
    period: '最短14日',
    desc: '本気でブランドを作りたい方に。フルカスタムデザイン×SEO完全対応。',
    features: [
      'スタンダードの全機能',
      'フルカスタムブランドデザイン',
      'SEO完全対応（構造化データ含む）',
      'CMS（更新しやすい仕組み）',
      'ページ数無制限',
      '公開後6ヶ月サポート',
    ],
    highlight: false,
  },
]

const maintenance = {
  price: '¥15,000',
  unit: '/月',
  features: [
    '月1回のコンテンツ更新',
    '表示速度・セキュリティ監視',
    'バグ対応（48時間以内）',
    '月次レポート',
  ],
}

export default function Plans() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.plan-card', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.plan-card',
          start: 'top 80%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="plans" ref={sectionRef} className="section-padding bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">Plans</p>
        <h2 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">
          明瞭な料金体系
        </h2>
        <p className="text-[#9ca3af] text-lg mb-16 max-w-xl">
          追加費用・隠れたコストなし。
          すべて税抜き表示・初回お見積もり無料です。
        </p>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlight
                  ? 'bg-[#f59e0b] border-[#f59e0b] text-[#0a0f1e]'
                  : 'bg-white/5 border-white/10 text-white hover:border-[#f59e0b]'
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-[#0a0f1e] text-[#f59e0b] text-xs font-black px-3 py-1 rounded-full mb-4 tracking-wider">
                  MOST POPULAR
                </span>
              )}
              <p className={`text-sm font-bold mb-2 ${plan.highlight ? 'text-[#92400e]' : 'text-[#9ca3af]'}`}>
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-lg font-bold">{plan.unit}</span>
              </div>
              <p className={`text-sm mb-4 ${plan.highlight ? 'text-[#92400e]' : 'text-[#9ca3af]'}`}>
                ⚡ {plan.period}
              </p>
              <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-[#78350f]' : 'text-[#d1d5db]'}`}>
                {plan.desc}
              </p>
              <ul className="space-y-2.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className={`font-bold mt-0.5 ${plan.highlight ? 'text-[#78350f]' : 'text-[#f59e0b]'}`}>
                      ✓
                    </span>
                    <span className={plan.highlight ? 'text-[#78350f]' : 'text-[#d1d5db]'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-bold py-3 rounded-full transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-[#0a0f1e] text-[#f59e0b] hover:bg-[#111827]'
                    : 'bg-[#f59e0b] text-[#0a0f1e] hover:bg-[#fbbf24]'
                }`}
              >
                このプランで相談する
              </a>
            </div>
          ))}
        </div>

        {/* Maintenance */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-[#f59e0b] text-sm font-bold mb-2">保守プラン（オプション）</p>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-white text-3xl font-black">{maintenance.price}</span>
                <span className="text-[#9ca3af]">{maintenance.unit}</span>
              </div>
              <p className="text-[#9ca3af] text-sm">作って終わりにしない。サイトを資産として育てます。</p>
            </div>
            <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {maintenance.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[#d1d5db] text-sm">
                  <span className="text-[#f59e0b]">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
