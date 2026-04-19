'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const visionData = [
  {
    num: '01',
    title: 'Explore',
    desc: 'まず自分が動く。\n試して、失敗して、また試す。\n可能性は行動の先にしかない。',
  },
  {
    num: '02',
    title: 'Connect',
    desc: '人と繋がることで世界が広がる。\nセールス・バイヤー・イベント——\nすべては「出会い」から始まった。',
  },
  {
    num: '03',
    title: 'Create',
    desc: 'アイデアを形にする力が、\n誰かの一歩を生む。\nWeb制作もその手段のひとつ。',
  },
]

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set('.gsap-fade-up-vision', { autoAlpha: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-fade-up-vision',
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      id="vision"
      className="pad-xy bg-[var(--c-bg)] border-t border-[var(--c-light)]"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        <p
          className="text-[var(--c-gray)] text-[10px] tracking-widest uppercase mb-16 font-bold gsap-fade-up-vision"
          style={{ fontFamily: 'var(--f-sans)' }}
        >
          VISION & PHILOSOPHY
        </p>

        <div className="vision-grid">
          {visionData.map((item) => (
            <div
              key={item.num}
              className="flex flex-col gap-6 gsap-fade-up-vision p-8 border border-[var(--c-light)] transition-colors duration-500 hover:border-[var(--c-accent)]"
            >
              <div className="flex items-center gap-4">
                <span
                  className="font-bold text-[var(--c-accent)] text-lg"
                  style={{ fontFamily: 'var(--f-sans)' }}
                >
                  {item.num}
                </span>
                <div className="flex-1 h-[1px] bg-[var(--c-light)]"></div>
              </div>

              <h3
                className="text-[var(--c-text)] font-bold text-h3-l mt-2"
                style={{ fontFamily: 'var(--f-serif)' }}
              >
                {item.title}
              </h3>

              <div
                className="text-[var(--c-gray)] text-body-sm leading-loose whitespace-pre-wrap mt-2 font-medium"
                style={{ fontFamily: 'var(--f-sans)' }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
