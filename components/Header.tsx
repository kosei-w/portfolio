'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
  { href: '/plans', label: 'Plans' },
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

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const headerBg = isHome
    ? scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    : 'bg-white border-b border-[#e5e7eb]'

  const linkColor = isHome
    ? 'text-white/70 hover:text-white'
    : 'text-[#6b7280] hover:text-[#0a0f1e]'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">

          {/* Logo: avatar + name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-[#f59e0b]/10 border-2 border-[#f59e0b]/30 group-hover:border-[#f59e0b] transition-all duration-200 shrink-0">
              <Image
                src="/avatar.png"
                alt="Kosei Idezuka"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="leading-none">
              <span className={`block font-black text-base tracking-tight transition-colors ${isHome ? 'text-white' : 'text-[#0a0f1e]'}`}>
                Kosei Idezuka
              </span>
              <span className="block text-[10px] font-medium tracking-[0.15em] uppercase text-[#f59e0b] mt-0.5">
                Web Designer
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors tracking-wide ${linkColor} ${pathname === href ? (isHome ? 'text-[#f59e0b]' : 'text-[#0a0f1e] font-bold') : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#f59e0b] text-[#0a0f1e] px-5 py-2.5 rounded-lg font-black text-sm hover:bg-[#fbbf24] transition-all duration-200 tracking-wide"
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
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0f1e] flex flex-col justify-center items-center gap-10 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Avatar in mobile menu */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f59e0b]/40 mb-2">
          <Image src="/avatar.png" alt="Kosei Idezuka" width={80} height={80} className="w-full h-full object-cover" />
        </div>

        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-white text-4xl font-black tracking-tight hover:text-[#f59e0b] transition-colors"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 bg-[#f59e0b] text-[#0a0f1e] font-black px-10 py-4 rounded-xl text-xl hover:bg-[#fbbf24] transition-all"
        >
          無料相談
        </Link>
      </div>
    </>
  )
}
