'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const worksData = [
  {
    id: '01',
    image: '/images/hero.png',
    title: '合同会社HIGHER',
    tags: 'Web Design / Next.js / GSAP',
    desc: '企業サイトのゼロからの設計・開発。ブランドの世界観をアニメーションとタイポグラフィで表現。',
    href: '#', // TODO: Replace with Vercel deploy URL after production release
    comingSoon: false,
  },
  {
    id: '02',
    image: null,
    title: 'Coming Soon',
    tags: 'In Progress',
    desc: '現在進行中のプロジェクト。詳細は後日公開予定です。',
    href: '#',
    comingSoon: true,
  },
  {
    id: '03',
    image: null,
    title: 'Coming Soon',
    tags: 'Concept',
    desc: '新しい可能性を開拓しています。',
    href: '#',
    comingSoon: true,
  },
]

export default function WorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const getScrollAmount = () => -(wrapper.scrollWidth - window.innerWidth)

      const tween = gsap.to(wrapper, { x: getScrollAmount, ease: 'none' })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
        pin: true,
        animation: tween,
        scrub: 1.5,
        invalidateOnRefresh: true,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative h-[100svh] w-full overflow-hidden flex flex-col justify-center"
      style={{ backgroundColor: 'var(--c-dark)' }}
    >
      <div className="works-top-label z-20 pointer-events-none">
        <p
          className="text-[var(--c-bg)] text-[10px] tracking-widest uppercase mb-4 font-bold"
          style={{ fontFamily: 'var(--f-sans)' }}
        >
          01 / WORKS
        </p>
      </div>

      <div ref={wrapperRef} className="works-strip pt-10">
        {worksData.map((work) => (
          <div
            key={work.id}
            className="relative flex-shrink-0"
            style={{ width: 'min(75vw, 900px)', height: '65vh' }}
          >
            <div className="w-full h-full bg-[var(--c-bg)] relative overflow-hidden group border border-[var(--c-gray)]/30">
              {work.image ? (
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[var(--c-gray)] text-sm uppercase tracking-widest font-bold">
                  Image Coming Soon
                </div>
              )}

              {!work.comingSoon && (
                <Link
                  href={work.href}
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--c-dark)]/40"
                  {...(work.href !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="bg-[var(--c-bg)] text-[var(--c-text)] text-xs uppercase tracking-widest px-8 py-4 font-bold">
                    View Case
                  </span>
                </Link>
              )}
            </div>

            <div className="works-content-box">
              <div className="flex items-center justify-between">
                <span className="block text-[var(--c-accent)] text-[10px] font-bold tracking-widest uppercase">
                  {work.tags}
                </span>
                <span className="works-id">{work.id}</span>
              </div>
              <h3
                className="text-[var(--c-text)] text-h3 font-bold"
                style={{ fontFamily: 'var(--f-serif)' }}
              >
                {work.title}
              </h3>
              <p
                className="text-[var(--c-gray)] text-body-sm leading-relaxed"
                style={{ fontFamily: 'var(--f-sans)' }}
              >
                {work.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
