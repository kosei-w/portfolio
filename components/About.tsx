'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const strengths = [
  {
    icon: '⚡',
    title: '最短10日納品',
    desc: '制作会社で2〜3ヶ月かかるところを、最短10日で対応。AIと最新技術を使い倒しているから実現できるスピードです。',
  },
  {
    icon: '💬',
    title: 'コンサル出身のヒアリング力',
    desc: '医療DX SaaS企業のコンサルティングセールス経験から、「何を作るか」より「何のために作るか」を先に深掘りします。',
  },
  {
    icon: '🏥',
    title: '医療・ヘルスケア領域に強い',
    desc: '業界知見があるから、医療・クリニック・ヘルスケア系の訴求ポイントをわかっています。業種理解ゼロの制作会社とは違います。',
  },
  {
    icon: '🔧',
    title: '作って終わりにしない',
    desc: '公開後の保守・更新・SEO対応まで一気通貫。月¥15,000〜の保守プランで、サイトを「資産」として育てます。',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children ?? [], {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">About</p>
        <h2 className="text-[#0a0f1e] font-black text-3xl md:text-5xl mb-6 leading-tight">
          なぜ、Koseiに
          <br />
          頼むと早いのか。
        </h2>
        <p className="text-[#6b7280] text-lg max-w-xl mb-16 leading-relaxed">
          制作会社との違いは「スピード」だけじゃない。
          ヒアリングの深さと、業界理解の差が、
          サイトの成果に直結します。
        </p>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#f59e0b] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-[#0a0f1e] font-bold text-xl mb-3 group-hover:text-[#f59e0b] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#6b7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
