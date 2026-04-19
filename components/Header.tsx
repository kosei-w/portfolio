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
        className="fixed top-0 left-0 right-0 z-[var(--z-nav)] transition-all duration-500"
        style={{
          paddingTop: scrolled ? '1rem' : '1.75rem',
          paddingBottom: scrolled ? '1rem' : '1.75rem',
          backgroundColor: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--c-border)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex items-center justify-between px-6 md:px-10" style={{ maxWidth: 'var(--container-max)' }}>
          <Link
            href="/"
            className="text-[var(--c-text)] font-bold tracking-[0.2em] text-xl leading-none"
            style={{ fontFamily: 'var(--f-mono)' }}
            aria-label="Kosei Idezuka — Home"
          >
            KI
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                data-text={label}
                className="nav-link text-[11px] tracking-[0.2em] text-[var(--c-muted)] hover:text-[var(--c-text)] transition-colors duration-300"
                style={{ fontFamily: 'var(--f-mono)' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex md:hidden flex-col gap-[5px] p-2 relative z-[calc(var(--z-nav)+10)]"
          >
            <span
              className="block w-5 h-px bg-[var(--c-text)] transition-transform duration-400 origin-center"
              style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-px bg-[var(--c-text)] transition-opacity duration-400"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-[var(--c-text)] transition-transform duration-400 origin-center"
              style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 flex flex-col justify-center px-10 bg-[var(--c-bg)]"
        style={{
          zIndex: 'calc(var(--z-nav) + 5)',
          clipPath: menuOpen ? 'circle(150% at calc(100% - 2.5rem) 2.5rem)' : 'circle(0% at calc(100% - 2.5rem) 2.5rem)',
          transition: 'clip-path 0.7s var(--ease-out-expo)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-bold text-[var(--c-text)] leading-none text-5xl tracking-tight"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p
          className="absolute bottom-10 left-10 text-[11px] tracking-[0.2em] text-[var(--c-muted)]"
          style={{ fontFamily: 'var(--f-mono)' }}
        >
          © 2026 Kosei Idezuka
        </p>
      </div>
    </>
  )
}
