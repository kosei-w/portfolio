'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/works', label: '実績' },
  { href: '/plans', label: '料金' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const headerBg = isHome
    ? scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    : 'bg-white border-b border-[#e5e7eb]'

  const logoColor = isHome ? 'text-white' : 'text-[#0a0f1e]'
  const linkColor = isHome ? 'text-white/80 hover:text-[#f59e0b]' : 'text-[#374151] hover:text-[#f59e0b]'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className={`text-xl font-black tracking-tight transition-colors ${logoColor}`}>
            Kosei<span className="text-[#f59e0b]">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${linkColor} ${pathname === href ? 'text-[#f59e0b]' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#f59e0b] text-[#0a0f1e] px-5 py-2 rounded-full hover:bg-[#fbbf24] transition-all duration-200 font-black"
            >
              無料相談
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
            className={`md:hidden flex flex-col gap-1.5 p-2 ${isHome ? 'text-white' : 'text-[#0a0f1e]'}`}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0f1e] flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-white text-3xl font-black hover:text-[#f59e0b] transition-colors"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 bg-[#f59e0b] text-[#0a0f1e] font-black px-10 py-4 rounded-full text-xl hover:bg-[#fbbf24] transition-all"
        >
          無料相談
        </Link>
      </div>
    </>
  )
}
