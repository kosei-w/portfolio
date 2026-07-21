'use client'

import { useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'

/**
 * カーソルに吸着するラッパー。外側spanを静的なヒット領域に保ち、
 * 内側spanだけをtransformする（rect計測のフィードバックずれ防止）。
 * hover:hover×pointer:fine かつ motion可のときだけ作動。
 */
export default function Magnetic({
  children,
  strength = 0.25,
  className = '',
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const outerRef = useRef<HTMLSpanElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)

  const isActive = () =>
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner || !isActive()) return
    const r = outer.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * strength
    const y = (e.clientY - r.top - r.height / 2) * strength
    inner.style.transition = 'transform 0.2s ease-out'
    inner.style.transform = `translate(${x}px, ${y}px)`
  }

  const onLeave = () => {
    const inner = innerRef.current
    if (!inner) return
    inner.style.transition = 'transform 0.55s var(--ease-out-expo)'
    inner.style.transform = 'translate(0px, 0px)'
  }

  return (
    <span
      ref={outerRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
    >
      <span ref={innerRef} className="inline-block">
        {children}
      </span>
    </span>
  )
}
