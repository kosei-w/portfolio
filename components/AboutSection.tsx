'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set('.gsap-fade-up', { autoAlpha: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-fade-up',
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
      id="about"
      className="pad-xy"
      style={{ backgroundColor: 'var(--c-bg)' }}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        <p
          className="text-[var(--c-gray)] text-[10px] tracking-widest uppercase mb-12 font-bold gsap-fade-up"
          style={{ fontFamily: 'var(--f-sans)' }}
        >
          ABOUT ME
        </p>

        <div className="about-grid">
          <div className="about-col-head gsap-fade-up">
            <h2
              className="text-[var(--c-text)] font-bold leading-tight"
              style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
            >
              "開拓進行形"を<br />
              歩んでいる。
            </h2>
          </div>

          <div className="about-col-text gsap-fade-up">
            <div
              className="text-[var(--c-gray)] leading-loose space-y-6 text-body-sm font-medium"
              style={{ fontFamily: 'var(--f-sans)', maxWidth: '65ch' }}
            >
              <p>
                はじめまして、出塚航世と申します。<br />
                SaaSのコンサルティングセールスとして働きながら、<br />
                五反田唯一のギフトセレクトショップのバイヤー・運営、<br />
                そして毎月60〜70人規模のイベントプランナーとして活動しています。<br />
                2028年の店舗出店・法人化に向けて、現在進行形で動き続けています。
              </p>
              <p>
                Web制作を始めたきっかけは、あるシリコンバレーの起業家との出会いでした。<br />
                開発への思い、工程、最先端のツール——それらを学ぶうちに<br />
                「自分にもできる、やる意味がある」と感じた瞬間がスタートラインです。
              </p>
              <p>
                自分自身の可能性を開拓し続けながら、<br />
                「&quot;開拓進行形&quot;を歩む全ての人の背中を押す」というビジョンのもと、<br />
                Web制作でも誰かの一歩を後押ししたいと思っています。
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#about-full"
                className="inline-block border-b border-[var(--c-text)] text-[var(--c-text)] pb-1 font-bold tracking-widest text-[10px] uppercase transition-colors duration-300 hover:text-[var(--c-accent)] hover:border-[var(--c-accent)] nav-link-underline"
                style={{ fontFamily: 'var(--f-sans)' }}
              >
                More About Me →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
