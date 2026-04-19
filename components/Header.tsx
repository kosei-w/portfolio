'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#works', label: 'WORKS' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[var(--z-nav)] transition-all duration-500"
        style={{
          paddingTop: scrolled ? '1rem' : '2.5rem',
          paddingBottom: scrolled ? '1rem' : '2.5rem',
          backgroundColor: scrolled ? 'rgba(245,244,241,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div 
          className="mx-auto flex items-center justify-between px-8 pad-x"
          style={{ maxWidth: 'var(--container-max)' }}
        >

          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-[var(--c-text)] tracking-widest text-xl leading-none"
            style={{ fontFamily: 'var(--f-serif)' }}
            aria-label="Kosei Idezuka — Home"
          >
            KI
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                data-text={label}
                className="nav-link text-sm tracking-widest text-[var(--c-text)]"
                style={{ fontFamily: 'var(--f-sans)' }}
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
            className="header-burger hover"
          >
            <span
              className="block w-6 h-[1px] bg-[var(--c-text)] transition-transform duration-500 origin-center"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-6 h-[1px] bg-[var(--c-text)] transition-opacity duration-500"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-[1px] bg-[var(--c-text)] transition-transform duration-500 origin-center"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 flex flex-col justify-center mobile-nav flex flex-col justify-center"
        style={{
          backgroundColor: 'var(--c-light)',
          zIndex: 'calc(var(--z-nav) + 5)',
          clipPath: menuOpen ? 'circle(150% at calc(100% - 3rem) 3rem)' : 'circle(0% at calc(100% - 3rem) 3rem)',
          transition: 'clip-path 0.8s var(--ease-out-expo)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-bold text-[var(--c-text)] leading-none"
              style={{ 
                fontFamily: 'var(--f-serif)',
                fontSize: 'clamp(2.5rem, 10vw, 4rem)',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p
          className="absolute bottom-10 left-10 text-xs tracking-widest text-[var(--c-gray)]"
          style={{ fontFamily: 'var(--f-sans)' }}
        >
          © 2026 Kosei Idezuka
        </p>
      </div>
    </>
  )
}
