'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Hero() {
  const topRef = useRef<HTMLDivElement>(null)
  const midRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from(topRef.current, { y: -20, opacity: 0, duration: 0.8 })
        .from(midRef.current?.children ?? [], { y: 60, opacity: 0, stagger: 0.08, duration: 1 }, '-=0.4')
        .from(botRef.current?.children ?? [], { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.4')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen bg-[#0a0f1e] flex flex-col justify-between px-8 md:px-16 pt-28 pb-12 relative overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top bar */}
      <div ref={topRef} className="relative z-10 flex items-center justify-between">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-medium">
          Kosei Idezuka — HP制作
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full animate-pulse" />
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase">受付中</p>
        </div>
      </div>

      {/* Main headline — editorial, massive */}
      <div ref={midRef} className="relative z-10 py-8 md:py-0">
        <h1
          className="text-white font-black leading-[0.88] tracking-tight"
          style={{ fontSize: 'clamp(4.5rem, 13vw, 13rem)' }}
        >
          <span className="block">最短</span>
          <span
            className="block text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }}
          >
            10日で、
          </span>
          <span className="block">集客する。</span>
        </h1>
      </div>

      {/* Bottom: description + CTA */}
      <div ref={botRef} className="relative z-10 flex flex-col md:flex-row gap-10 md:items-end justify-between">
        <p className="text-white/50 text-base md:text-lg max-w-sm leading-relaxed">
          制作会社の1/6の納期。医療DX出身のコンサルタントが、
          ヒアリングから保守まで一気通貫で担います。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#f59e0b] text-[#0a0f1e] font-black px-8 py-4 text-base hover:bg-[#fbbf24] transition-colors duration-200"
          >
            無料で相談する →
          </Link>
          <Link
            href="/works"
            className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 text-base hover:border-white/60 hover:text-white transition-colors duration-200"
          >
            制作実績を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
