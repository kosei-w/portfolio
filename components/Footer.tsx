import Link from 'next/link'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/kosei-w' },
  // { label: 'X', href: 'https://x.com/your_handle' },        // TODO: Add X URL
  // { label: 'Instagram', href: 'https://instagram.com/your_handle' }, // TODO: Add Instagram URL
]

export default function Footer() {
  return (
    <footer
      className="footer-pad border-t border-[var(--c-bg)]/20"
      style={{ backgroundColor: 'var(--c-dark)' }}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] footer-flex">
        {/* Left */}
        <div className="footer-left">
          <span
            className="text-[var(--c-bg)] font-bold tracking-widest text-sm"
            style={{ fontFamily: 'var(--f-serif)' }}
          >
            KOSEI IDEZUKA
          </span>
          <span
            className="text-[var(--c-gray)] tracking-widest text-fine uppercase font-medium"
            style={{ fontFamily: 'var(--f-sans)' }}
          >
            © 2026 All rights reserved.
          </span>
        </div>

        {/* Center */}
        <nav className="footer-center">
          {['ABOUT', 'WORKS', 'CONTACT'].map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-fine tracking-widest text-[var(--c-bg)] uppercase hover:text-[var(--c-accent)] transition-colors duration-300 font-bold"
              style={{ fontFamily: 'var(--f-sans)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="footer-right">
          {SOCIAL_LINKS.map((sns) => (
            <Link
              key={sns.label}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fine tracking-widest text-[var(--c-bg)] uppercase hover:text-[var(--c-accent)] transition-colors duration-300 font-bold"
              style={{ fontFamily: 'var(--f-sans)' }}
            >
              {sns.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
