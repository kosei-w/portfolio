'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set('.gsap-fade-up-contact', { autoAlpha: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-fade-up-contact',
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="pad-xy flex flex-col items-center text-center text-[var(--c-bg)]"
      style={{ backgroundColor: 'var(--c-dark)' }}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        <p
          className="text-[var(--c-bg)] text-[10px] tracking-widest uppercase mb-10 font-bold gsap-fade-up-contact opacity-50"
          style={{ fontFamily: 'var(--f-sans)' }}
        >
          GET IN TOUCH
        </p>

        <h2
          className="font-bold leading-tight mb-8 gsap-fade-up-contact"
          style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          一緒に、<br />
          何かを始めませんか。
        </h2>

        <p
          className="text-body-c gsap-fade-up-contact opacity-80 font-medium"
          style={{ fontFamily: 'var(--f-sans)' }}
        >
          Web制作のご依頼・ご相談はお気軽にどうぞ。
        </p>

        <div className="gsap-fade-up-contact inline-block mt-4">
          <Link
            href="mailto:Kosei.Idezuka@navislab.jp"
            className="group block"
            aria-label="Send an email to Kosei.Idezuka@navislab.jp"
          >
            <span
              className="block font-bold contact-mail transition-colors duration-300 nav-link"
              style={{ fontFamily: 'var(--f-sans)' }}
              data-text="Kosei.Idezuka@navislab.jp"
            >
              Kosei.Idezuka@navislab.jp
            </span><br />
            <span
              className="inline-block contact-btn tracking-widest uppercase border border-[var(--c-bg)] transition-colors duration-300 group-hover:bg-[var(--c-bg)] group-hover:text-[var(--c-dark)] font-bold"
              style={{ fontFamily: 'var(--f-sans)' }}
            >
              Send a Message
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
