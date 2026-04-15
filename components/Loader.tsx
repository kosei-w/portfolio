'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Loader() {
  const [show, setShow] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  /* Only show on first visit per browser session */
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('kw_loaded')) return
    sessionStorage.setItem('kw_loaded', '1')
    setShow(true)
  }, [])

  useEffect(() => {
    if (!show) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setShow(false)
      return
    }

    const ctx = gsap.context(() => {
      const obj = { val: 0 }
      const tl = gsap.timeline()

      /* Count 00 → 100 */
      tl.to(obj, {
        val: 100,
        duration: 1.6,
        ease: 'power2.inOut',
        onUpdate() {
          if (numRef.current) {
            numRef.current.textContent = String(Math.floor(obj.val)).padStart(2, '0')
          }
        },
      })

      /* Progress bar fills in sync */
      tl.to(
        barRef.current,
        { scaleX: 1, duration: 1.6, ease: 'power2.inOut' },
        0,
      )

      /* Slide overlay up to reveal the page */
      tl.to(wrapRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
        delay: 0.25,
        onComplete: () => setShow(false),
      })
    })

    return () => ctx.revert()
  }, [show])

  if (!show) return null

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center"
      aria-hidden="true"
    >
      <span
        ref={numRef}
        className="font-display text-[#F2F0EB] font-extrabold tabular-nums select-none"
        style={{ fontSize: 'clamp(6rem, 22vw, 20rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
      >
        00
      </span>

      <div className="mt-8 w-40 h-px bg-white/15 overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-full bg-[#C9A96E] origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  )
}
