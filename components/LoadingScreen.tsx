'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen() {
  const [show, setShow] = useState(true)
  const wrapRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hasLoaded = typeof sessionStorage !== 'undefined'
      ? sessionStorage.getItem('site-loaded')
      : null
    if (hasLoaded) {
      setShow(false)
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('site-loaded', 'true')
          setShow(false)
        }
      })

      tl.fromTo(
        logoRef.current,
        { scale: 0.88, filter: 'blur(12px)', opacity: 0 },
        { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 1, ease: 'power3.out' }
      )

      tl.to(
        wrapRef.current,
        { opacity: 0, duration: 0.6, ease: 'power2.inOut' },
        '+=2'
      )
    })

    return () => ctx.revert()
  }, [])

  if (!show) return null

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[var(--z-loader)] flex items-center justify-center bg-[var(--c-bg)]"
    >
      <div
        ref={logoRef}
        className="loader-text font-bold tracking-[0.2em] text-[var(--c-accent)]"
        style={{ fontFamily: 'var(--f-serif)' }}
      >
        KI
      </div>
    </div>
  )
}
