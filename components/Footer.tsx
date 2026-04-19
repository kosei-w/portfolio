import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="border-t px-6 md:px-10 py-10"
      style={{ borderColor: 'var(--c-border)' }}
    >
      <div className="mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6" style={{ maxWidth: 'var(--container-max)' }}>
        <span
          className="text-[var(--c-text)] font-bold tracking-[0.2em] text-sm"
          style={{ fontFamily: 'var(--f-mono)' }}
        >
          KI
        </span>

        <nav className="flex items-center gap-8">
          {['WORKS', 'ABOUT', 'CONTACT'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-[11px] tracking-[0.2em] text-[var(--c-muted)] hover:text-[var(--c-text)] transition-colors duration-300"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <span
          className="text-[11px] tracking-[0.15em] text-[var(--c-subtle)]"
          style={{ fontFamily: 'var(--f-mono)' }}
        >
          © 2026 All rights reserved.
        </span>
      </div>
    </footer>
  )
}
