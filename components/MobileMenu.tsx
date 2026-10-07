'use client'

import { useEffect, useRef, useState } from 'react'
import { SECTIONS } from '@/lib/sections'

/** スマホの目次。MENUで全画面に開き、リンク・Esc・CLOSEで閉じる */
export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-3 px-3 py-3 font-mono text-label text-ink"
      >
        MENU
      </button>

      <div
        id="mobile-menu"
        className="mobile-menu fixed inset-0 z-[var(--z-nav)] flex flex-col bg-bg px-6 py-5"
        data-open={open || undefined}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-label font-medium text-ink">KOSEI IDEZUKA</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="-mr-3 px-3 py-3 font-mono text-label text-ink"
          >
            CLOSE
          </button>
        </div>
        <nav aria-label="目次" className="mt-auto mb-16">
          <ul className="space-y-4">
            {SECTIONS.map(({ id, label }, i) => (
              <li key={id}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={`#${id}`}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 font-display text-title text-ink"
                >
                  <span className="font-mono text-label text-ink-3">{String(i + 1).padStart(2, '0')}</span>
                  {label.charAt(0) + label.slice(1).toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
