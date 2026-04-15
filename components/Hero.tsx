'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

const stats = [
  { value: '10日', label: '最短納期', sub: '制作会社の平均は2〜3ヶ月' },
  { value: '1/6', label: '制作会社比の納期', sub: '実証済みのスピード' },
  { value: '¥128k〜', label: 'スターター', sub: '明瞭な料金・追加費用なし' },
]

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        // Desktop: animate both columns
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from(leftRef.current?.children ?? [], {
          y: 50, opacity: 0, stagger: 0.12, duration: 0.8,
        }).from(
          rightRef.current?.children ?? [],
          { y: 30, opacity: 0, stagger: 0.1, duration: 0.6 },
          '-=0.4'
        )
      })

      mm.add('(max-width: 1023px)', () => {
        // Mobile: lighter animation, left column only
        gsap.from(leftRef.current?.children ?? [], {
          y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0f1e] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(245,158,11,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow spots */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#f59e0b] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600 opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={leftRef}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
              <span className="text-white/70 text-sm font-medium">HP制作 — 受付中</span>
            </div>

            <h1
              className="text-white font-black leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              集客できる
              <br />
              サイトを、
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}
              >
                最短10日で。
              </span>
            </h1>

            <p className="text-[#9ca3af] text-xl leading-relaxed mb-10 max-w-lg">
              「古い・崩れる・問い合わせが来ない」を解決する。
              <br />
              医療DX出身のコンサルタントが、
              <br />
              作って終わりにしないHPを届けます。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#f59e0b] text-[#0a0f1e] font-black px-8 py-4 rounded-xl text-lg hover:bg-[#fbbf24] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                無料相談を申し込む →
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center justify-center border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg hover:border-[#f59e0b]/60 hover:bg-white/5 transition-all duration-200"
              >
                制作実績を見る
              </Link>
            </div>
          </div>

          {/* Right: Stats panel */}
          <div ref={rightRef} className="hidden lg:flex flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:border-[#f59e0b]/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div
                  className="text-5xl font-black text-transparent bg-clip-text shrink-0"
                  style={{ backgroundImage: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}
                >
                  {stat.value}
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">{stat.label}</p>
                  <p className="text-[#6b7280] text-sm mt-1">{stat.sub}</p>
                </div>
              </div>
            ))}

            {/* Bottom note */}
            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-2xl p-5 mt-2">
              <p className="text-[#f59e0b] text-sm font-bold mb-1">初回相談 無料</p>
              <p className="text-white/60 text-sm">30分・オンライン・「まだぼんやり」でもOK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-[#f59e0b]/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
