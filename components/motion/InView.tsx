'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react'

const IO_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
}

interface InViewProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

/**
 * ビューポート進入時にルート要素へ .is-inview を付与する。
 * 実際の動きはglobals.cssのモーションプリミティブ（.reveal-line / .rise /
 * .media-reveal / .strike-line）が担う——ローダーと同じクラストグル機構。
 * reduced-motion時は即時付与（CSS側も初期非表示にしないため二重に安全）。
 */
export default function InView({ as: Tag = 'div', className, style, children, ...rest }: InViewProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => el.classList.add('is-inview')

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      reveal()
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      })
    }, IO_OPTIONS)
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  )
}
