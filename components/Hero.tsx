'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const firstRef = useRef<HTMLSpanElement>(null)
  const lastRef = useRef<HTMLSpanElement>(null)
  const ruleRef = useRef<HTMLDivElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    /* Delay if Loader is running (first visit this session).
       Hero's useEffect runs before Loader's (children before parents in React).
       So on first visit sessionStorage is still empty here → apply delay. */
    const firstVisit = !sessionStorage.getItem('ki_loaded')
    const delay = firstVisit ? 2.75 : 0

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay, defaults: { ease: 'power4.out' } })

      tl.from([firstRef.current, lastRef.current], {
        y: 90,
        opacity: 0,
        immediateRender: true,
        stagger: 0.1,
        duration: 1.1,
      })
        .from(
          ruleRef.current,
          { scaleX: 0, immediateRender: true, duration: 1, ease: 'power3.inOut' },
          '-=0.6',
        )
        .from(
          metaRef.current?.children ?? [],
          { y: 20, opacity: 0, immediateRender: true, stagger: 0.08, duration: 0.7 },
          '-=0.5',
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-between px-8 md:px-14 pt-28 md:pt-36 pb-12 md:pb-16 overflow-x-clip"
      aria-label="Hero"
    >
      {/* Right-edge frame: signals intentional bleed crop */}
      <div
        className="absolute right-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: 'var(--border)' }}
        aria-hidden="true"
      />

      {/* Massive editorial name */}
      <div className="flex-1 flex flex-col justify-center py-8">
        <h1
          className="font-display font-extrabold leading-[0.86] select-none"
          style={{ fontSize: 'clamp(4.5rem, 16.5vw, 18rem)', letterSpacing: '-0.035em' }}
        >
          <span ref={firstRef} className="block text-[var(--ink)]">
            KOSEI
          </span>
          {/* Asymmetric indent + bleed — editorial signature */}
          <span
            ref={lastRef}
            className="block text-[var(--ink)]"
            style={{ paddingLeft: 'clamp(1.5rem, 5.5vw, 9rem)' }}
          >
            IDEZUKA
          </span>
        </h1>
      </div>

      {/* Full-width ruled line */}
      <div
        ref={ruleRef}
        className="w-full h-px bg-[var(--border)] origin-left mb-8 md:mb-10"
      />

      {/* Meta row: tagline left, CTAs right */}
      <div
        ref={metaRef}
        className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
      >
        <div className="space-y-1.5">
          <p className="font-display text-xs tracking-[0.22em] text-[var(--muted)] uppercase">
            HP制作 / Web Designer &amp; Developer
          </p>
          <p className="font-display text-xs tracking-[0.15em] text-[var(--muted)]/60">
            Based in Japan — Available for new projects
          </p>
        </div>

        <div className="flex items-center gap-5 shrink-0">
          <a
            href="/works"
            className="font-display font-bold text-xs tracking-[0.15em] text-[var(--ink)] link-underline"
          >
            SEE WORKS →
          </a>
          <a
            href="/contact"
            className="font-display font-bold text-xs tracking-[0.1em] bg-[var(--ink)] text-[var(--bg)] px-5 py-2.5 hover:bg-[var(--gold)] transition-colors duration-300"
          >
            CONTACT
          </a>
        </div>
      </div>
    </section>
  )
}
