'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const works = [
  {
    tag: '飲食業',
    title: '友人社長の会社サイト リニューアル',
    period: '依頼から10日で公開',
    before: [
      'スマホで見るとボタンがズレる',
      '2010年代のデザインのまま',
      '何を売っているかパッと伝わらない',
    ],
    after: [
      'スマホ・PCどちらもきれいに表示',
      '会社の雰囲気が一発で伝わる',
      '問い合わせボタンが目立つ導線設計',
    ],
    quote: '「思ったより全然早かった。しかもかっこいい」',
    plan: 'スタンダードプラン',
  },
]

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-card',
          start: 'top 80%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="works" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">Works</p>
        <h2 className="text-[#0a0f1e] font-black text-3xl md:text-5xl mb-4 leading-tight">
          制作実績
        </h2>
        <p className="text-[#6b7280] text-lg mb-16">
          ※ クライアントの許可のもと掲載しています
        </p>

        {works.map((work, i) => (
          <div
            key={i}
            className="work-card bg-[#f9fafb] rounded-3xl p-8 md:p-12 border border-[#e5e7eb]"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#0a0f1e] text-white text-sm font-bold px-4 py-1.5 rounded-full">
                {work.tag}
              </span>
              <span className="bg-[#fef3c7] text-[#92400e] text-sm font-bold px-4 py-1.5 rounded-full">
                ⚡ {work.period}
              </span>
              <span className="text-[#6b7280] text-sm">{work.plan}</span>
            </div>

            <h3 className="text-[#0a0f1e] font-black text-2xl md:text-3xl mb-10">
              {work.title}
            </h3>

            {/* Before / After */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 border border-[#fca5a5]">
                <p className="text-[#ef4444] font-bold text-sm uppercase tracking-wider mb-4">
                  Before
                </p>
                <ul className="space-y-3">
                  {work.before.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#374151]">
                      <span className="text-[#ef4444] font-bold mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#6ee7b7]">
                <p className="text-[#059669] font-bold text-sm uppercase tracking-wider mb-4">
                  After
                </p>
                <ul className="space-y-3">
                  {work.after.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#374151]">
                      <span className="text-[#059669] font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#f59e0b] pl-6 py-2">
              <p className="text-[#0a0f1e] text-xl font-bold italic">{work.quote}</p>
              <p className="text-[#6b7280] text-sm mt-2">— クライアント（飲食業・代表）</p>
            </blockquote>
          </div>
        ))}

        {/* Coming soon */}
        <div className="mt-6 bg-[#f9fafb] rounded-3xl p-8 border border-dashed border-[#d1d5db] text-center">
          <p className="text-[#9ca3af] text-lg">実績を順次追加予定</p>
          <p className="text-[#6b7280] text-sm mt-2">
            最初のクライアントになりませんか？
            <a href="#contact" className="text-[#f59e0b] font-bold hover:underline ml-1">
              無料相談はこちら →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
