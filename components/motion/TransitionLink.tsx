'use client'

import Link from 'next/link'
import type { ComponentProps, MouseEvent } from 'react'
import { usePageTransition } from './TransitionProvider'

/**
 * 内部リンク用Link。クリックで抜刀トランジションを再生してから遷移する。
 * 修飾キー・新規タブ・外部/ハッシュリンク・reduced-motionは素のLink挙動。
 */
export default function TransitionLink({ onClick, ...props }: ComponentProps<typeof Link>) {
  const navigate = usePageTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    const href = typeof props.href === 'string' ? props.href : null
    if (!navigate || !href || !href.startsWith('/') || href.includes('#')) return
    e.preventDefault()
    navigate(href)
  }

  return <Link {...props} onClick={handleClick} />
}
