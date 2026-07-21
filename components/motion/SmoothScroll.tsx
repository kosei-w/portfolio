'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/**
 * 慣性スクロール（Lenis）。fineポインタ×motion可のときだけ有効化し、
 * タッチ端末はネイティブ慣性・reduced-motionは素のスクロールに任せる。
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ autoRaf: true })
    return () => lenis.destroy()
  }, [])

  return null
}
