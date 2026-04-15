import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
  { href: '/plans', label: 'Plans' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-[#f59e0b]/10 border-2 border-[#f59e0b]/20 shrink-0">
              <Image
                src="/avatar.png"
                alt="Kosei Idezuka"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white font-black text-xl tracking-tight leading-none">Kosei Idezuka</p>
              <p className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase mt-1.5">Web Designer</p>
              <p className="text-[#4b5563] text-sm mt-3 max-w-xs leading-relaxed">
                中小企業・個人事業主向けHP制作。<br />
                最短10日・明瞭な料金・保守まで一気通貫。
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-12 gap-y-4 items-start">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#6b7280] text-sm hover:text-[#f59e0b] transition-colors tracking-wide"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#374151] text-sm">© 2026 Kosei Idezuka. All rights reserved.</p>
          <Link
            href="/contact"
            className="text-[#f59e0b] text-sm font-bold hover:underline tracking-wide"
          >
            無料相談はこちら →
          </Link>
        </div>
      </div>
    </footer>
  )
}
