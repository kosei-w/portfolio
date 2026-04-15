'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backgroundColor: scrolled ? 'rgba(242,240,235,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 flex items-center justify-between h-16 md:h-20">

          {/* Logo monogram */}
          <Link
            href="/"
            className="font-display font-extrabold text-[var(--ink)] tracking-tight text-xl leading-none"
            aria-label="Kosei Wakabayashi — Home"
          >
            KW
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-display text-xs tracking-[0.2em] transition-colors duration-200"
                style={{
                  color: pathname === href ? 'var(--ink)' : 'var(--muted)',
                  fontWeight: pathname === href ? 700 : 500,
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-[5px] p-2"
          >
            <span
              className="block w-5 h-px bg-[var(--ink)] transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-px bg-[var(--ink)] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-[var(--ink)] transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-10 md:hidden transition-all duration-500"
        style={{
          backgroundColor: 'var(--bg)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-display font-extrabold text-[var(--ink)] leading-none hover:text-[var(--gold)] transition-colors duration-200"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p
          className="absolute bottom-10 left-10 font-display text-xs tracking-[0.2em] text-[var(--muted)]"
        >
          © 2026 Kosei Wakabayashi
        </p>
      </div>
    </>
  )
}
