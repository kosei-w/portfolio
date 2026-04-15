import Link from 'next/link'

const navLinks = [
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
  { href: '/plans', label: 'PLANS' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-8 md:px-14 py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-display font-extrabold text-[var(--ink)] text-sm tracking-tight">
          KW
        </p>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-display text-[10px] tracking-[0.2em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="font-display text-[10px] tracking-[0.15em] text-[var(--muted)]">
          © 2026 Kosei Wakabayashi
        </p>
      </div>
    </footer>
  )
}
