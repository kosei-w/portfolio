'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set('.gsap-reveal', { y: '0%' })
      const img = sectionRef.current?.querySelector('.img-reveal')
      if (img) img.classList.add('is-inview')
      return
    }

    const hasLoaded = sessionStorage.getItem('site-loaded')
    const delay = hasLoaded ? 0.2 : 2.6

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-reveal',
        { y: '120%' },
        { y: '0%', duration: 1.2, ease: 'power3.out', stagger: 0.1, delay }
      )

      setTimeout(() => {
        const img = sectionRef.current?.querySelector('.img-reveal')
        if (img) img.classList.add('is-inview')
      }, delay * 1000)

      gsap.to('.rotating-badge', {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: 'linear',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] w-full pad-x hero-py flex items-center"
      style={{ backgroundColor: 'var(--c-bg)' }}
      id="hero"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] hero-grid">
        {/* Texts - 55% */}
        <div className="hero-col-text">
          <p
            className="text-[var(--c-gray)] text-[10px] tracking-widest uppercase hero-mb-label font-bold"
            style={{ fontFamily: 'var(--f-sans)' }}
          >
            <span className="reveal-wrap">
              <span className="gsap-reveal">FREELANCE PORTFOLIO — Kosei Idezuka</span>
            </span>
          </p>

          <h1
            className="text-[var(--c-text)] font-bold leading-tight mb-8"
            style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)' }}
          >
            <span className="reveal-wrap">
              <span className="gsap-reveal">可能性を、</span>
            </span>
            <span className="reveal-wrap">
              <span className="gsap-reveal">開拓し続ける。</span>
            </span>
          </h1>

          <div
            className="text-[var(--c-text)] text-body-sm leading-relaxed mb-12"
            style={{ fontFamily: 'var(--f-sans)' }}
          >
            <span className="reveal-wrap">
              <span className="gsap-reveal">Sales / Buyer / Event Planner</span>
            </span>
            <span className="reveal-wrap">
              <span className="gsap-reveal">自分と、誰かの一歩を後押しするために。</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="reveal-wrap inline-block">
              <Link
                href="#works"
                className="gsap-reveal block font-bold text-xs tracking-widest uppercase text-[var(--c-bg)] bg-[var(--c-text)] px-8 py-4 transition-colors duration-300 hover:bg-[var(--c-accent)]"
              >
                View Works
              </Link>
            </span>
            <span className="reveal-wrap inline-block">
              <Link
                href="#contact"
                className="gsap-reveal block font-bold text-xs tracking-widest uppercase text-[var(--c-text)] border border-[var(--c-text)] px-8 py-4 transition-colors duration-300 hover:bg-[var(--c-light)] hover:border-transparent"
              >
                Get in Touch
              </Link>
            </span>
          </div>
        </div>

        {/* Visual - 45% */}
        <div className="hero-col-img">
          <div className="w-full h-full relative overflow-hidden img-reveal bg-[var(--c-light)]">
            <img
              src="/images/hero.png"
              alt="Brand Visual"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply grayscale opacity-90"
            />
          </div>

          <div className="hero-badge">
            <svg viewBox="0 0 200 200" className="rotating-badge w-full h-full fill-[var(--c-text)]">
              <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
              <text fontSize="22" letterSpacing="5.5" fontWeight="bold">
                <textPath href="#curve" startOffset="0">
                  SCROLL DOWN ↓ SCROLL DOWN ↓
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
