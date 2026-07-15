import Link from 'next/link'
import { navLinks } from '@/lib/nav'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-shell flex-col items-center gap-6 md:flex-row md:justify-between">
        <span className="font-mono text-sm font-bold tracking-[0.2em] text-ink">KI</span>

        <nav className="flex items-center gap-8" aria-label="Footer navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              data-text={label}
              className="nav-link py-2 text-label font-mono text-ink-faint"
            >
              {label}
            </Link>
          ))}
        </nav>

        <span className="text-meta font-mono text-ink-faint">© 2026 All rights reserved.</span>
      </div>
    </footer>
  )
}
