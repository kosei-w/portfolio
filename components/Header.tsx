'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight text-[#0a0f1e]">
          Kosei<span className="text-[#f59e0b]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#374151]">
          <a href="#about" className="hover:text-[#f59e0b] transition-colors">About</a>
          <a href="#works" className="hover:text-[#f59e0b] transition-colors">実績</a>
          <a href="#plans" className="hover:text-[#f59e0b] transition-colors">料金</a>
          <a
            href="#contact"
            className="bg-[#0a0f1e] text-white px-5 py-2 rounded-full hover:bg-[#f59e0b] hover:text-[#0a0f1e] transition-all duration-200 font-bold"
          >
            無料相談
          </a>
        </nav>
        {/* Mobile CTA */}
        <a
          href="#contact"
          className="md:hidden bg-[#0a0f1e] text-white text-sm px-4 py-2 rounded-full font-bold"
        >
          相談する
        </a>
      </div>
    </header>
  )
}
