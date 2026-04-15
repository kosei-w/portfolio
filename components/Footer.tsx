import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/works', label: '実績' },
  { href: '/plans', label: '料金' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div>
            <Link href="/" className="text-2xl font-black text-white">
              Kosei<span className="text-[#f59e0b]">.</span>
            </Link>
            <p className="text-[#6b7280] text-sm mt-3 max-w-xs leading-relaxed">
              中小企業・個人事業主向けHP制作。
              <br />
              最短10日・明瞭な料金・作って終わりにしない。
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#9ca3af] text-sm hover:text-[#f59e0b] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4b5563] text-sm">© 2026 Kosei. All rights reserved.</p>
          <p className="text-[#4b5563] text-xs">Built with Next.js + Vercel</p>
        </div>
      </div>
    </footer>
  )
}
