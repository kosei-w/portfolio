import type { ReactNode } from 'react'
import TransitionLink from './motion/TransitionLink'
import Magnetic from './motion/Magnetic'

const VARIANT_CLASSES = {
  outline: 'border border-accent text-accent hover:bg-accent hover:text-bg',
  fill: 'bg-ink text-bg hover:bg-accent',
} as const

/**
 * 統一CTA。押下の瞬間に反応する（:active scale 0.97 / 100ms — apple-design §1 Response）。
 * カーソルに吸着し（Magnetic）、抜刀トランジションで遷移する。
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
    <Magnetic className={className}>
      <TransitionLink
        href={href}
        className={`inline-block px-8 py-4 text-label font-mono text-center transition-all duration-300 active:scale-[0.97] active:duration-100 ${VARIANT_CLASSES[variant]}`}
      >
        {children}
      </TransitionLink>
    </Magnetic>
  )
}
