'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(headingRef.current, { y: 60, opacity: 0, duration: 0.9 })
        .from(subRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
        .from(badgesRef.current?.children ?? [], { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.3')
        .from(ctaRef.current?.children ?? [], { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.2')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0f1e] overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b] opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Eyebrow */}
        <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-6">
          HP制作フリーランス
        </p>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-white font-black leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          最短10日で、
          <br />
          <span className="text-[#f59e0b]">集客できる</span>
          <br />
          サイトを届ける。
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="text-[#9ca3af] text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          制作会社の1/6の納期・明瞭な料金体系。
          <br className="hidden md:block" />
          医療DX出身のコンサルタントが、
          <br className="hidden md:block" />
          「作って終わり」にしないHPを作ります。
        </p>

        {/* Badges */}
        <div ref={badgesRef} className="flex flex-wrap gap-3 mb-12">
          {['最短10日納品', '制作会社の1/6の納期', '全プラン保守対応', '初回相談無料'].map((badge) => (
            <span
              key={badge}
              className="bg-white/10 text-white text-sm px-4 py-1.5 rounded-full border border-white/20"
            >
              ✓ {badge}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#f59e0b] text-[#0a0f1e] font-black px-8 py-4 rounded-full text-lg hover:bg-[#fbbf24] transition-all duration-200 hover:scale-105"
          >
            無料で相談する →
          </a>
          <a
            href="#works"
            className="inline-flex items-center justify-center border border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:border-[#f59e0b] hover:text-[#f59e0b] transition-all duration-200"
          >
            制作実績を見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
