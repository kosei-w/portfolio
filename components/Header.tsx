import MobileMenu from '@/components/MobileMenu'
import { SECTIONS } from '@/lib/sections'

/** 名前と目次。主役は写真なので、UIは細い等幅の文字だけにとどめる */
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[var(--z-nav)]">
      {/* 本文が下を流れても目次が読めるよう、上端だけ暗く落とす（線や面は足さない） */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-bg/90 via-bg/50 to-transparent"
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <a href="#top" className="font-mono text-label font-medium text-ink" aria-label="出塚航世 — ページの先頭へ">
          KOSEI IDEZUKA
        </a>

        <nav aria-label="目次" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="py-2 font-mono text-label text-ink-3 transition-colors duration-500 hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}
