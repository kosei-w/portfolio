import Link from 'next/link'
import type { ReactNode } from 'react'

const VARIANT_CLASSES = {
  outline: 'border border-accent text-accent hover:bg-accent hover:text-bg',
  fill: 'bg-ink text-bg hover:bg-accent',
} as const

/**
 * 統一CTA。押下の瞬間に反応する（:active scale 0.97 / 100ms — apple-design §1 Response）。
 */
export default function Button({
  href,
  children,
  variant = 'outline',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof VARIANT_CLASSES
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`inline-block px-8 py-4 text-label font-mono text-center transition-all duration-300 active:scale-[0.97] active:duration-100 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
