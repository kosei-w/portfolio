'use client'

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  y?: number
  stagger?: boolean
}

export default function ScrollReveal({ children, className, style, delay = 0, y = 40, stagger = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger)
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const useStagger = stagger && el.children.length > 1
      const targets = useStagger ? Array.from(el.children) : el

      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        ...(useStagger ? { stagger: 0.1 } : {}),
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [delay, y, stagger])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
