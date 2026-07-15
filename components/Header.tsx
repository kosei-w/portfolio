'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/lib/nav'

const SCROLL_THRESHOLD = 60

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    firstMenuLinkRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header
        className="site-header fixed top-0 left-0 right-0 z-[var(--z-nav)]"
        data-scrolled={scrolled || undefined}
      >
        <div className="mx-auto flex h-20 max-w-shell items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="font-mono text-xl font-bold leading-none tracking-[0.2em] text-ink"
            aria-label="Kosei Idezuka — Home"
          >
            KI
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                data-text={label}
                className="nav-link py-3 text-label font-mono text-ink-faint"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger — 44px+ tap target */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative z-[calc(var(--z-nav)+10)] flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className="block h-px w-6 origin-center bg-ink transition-transform duration-400"
              style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block h-px w-6 bg-ink transition-opacity duration-400"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px w-6 origin-center bg-ink transition-transform duration-400"
              style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu — ハンバーガー起点のサークル展開（globals.css .mobile-menu） */}
      <div
        className="mobile-menu fixed inset-0 z-[calc(var(--z-nav)+5)] flex flex-col justify-center bg-bg px-10"
        data-open={menuOpen || undefined}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              ref={i === 0 ? firstMenuLinkRef : undefined}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-5xl font-bold leading-none tracking-tight text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="absolute bottom-10 left-10 text-label font-mono text-ink-faint">
          © 2026 Kosei Idezuka
        </p>
      </div>
    </>
  )
}
