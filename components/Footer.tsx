import TransitionLink from './motion/TransitionLink'
import LocalTime from './LocalTime'
import { navLinks } from '@/lib/nav'

/**
 * サイト共通のクロージング。巨大mailto（実在する人にすぐ届く）＋
 * 実在感シグナル（AVAILABLE・拠点・現地時刻）で転換に着地させる。
 */
export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-10 pt-s5 md:px-10">
      <div className="mx-auto w-full max-w-shell">
        {/* 巨大mailto */}
        <p className="mb-6 text-label font-mono text-ink-faint">NEXT PROJECT?</p>
        <a href="mailto:Kosei.idezuka@navislab.jp" className="group block">
          <span className="block text-title font-display font-light text-ink transition-colors duration-300 group-hover:text-accent md:text-display">
            Let&apos;s work together.
          </span>
          <span
            className="mt-6 block h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden="true"
          />
          <span className="mt-4 inline-block text-meta font-mono text-ink-faint transition-colors duration-300 group-hover:text-accent">
            Kosei.idezuka@navislab.jp
          </span>
        </a>

        {/* 実在感シグナル + ナビ */}
        <div className="mt-s4 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap items-center gap-8" aria-label="Footer navigation">
            {navLinks.map(({ href, label }) => (
              <TransitionLink
                key={href}
                href={href}
                data-text={label}
                className="nav-link py-2 text-label font-mono text-ink-faint"
              >
                {label}
              </TransitionLink>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-meta font-mono text-ink-faint">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
              AVAILABLE FOR NEW PROJECTS
            </span>
            <span>
              TOKYO, JP — <LocalTime /> JST
            </span>
            <span>© 2026 Kosei Idezuka</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
