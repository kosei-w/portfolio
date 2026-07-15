import Link from 'next/link'
import Image from 'next/image'
import InView from './motion/InView'

interface ShowcaseRowProps {
  title: string
  year: string
  role?: string
  href: string
  imageSrc?: string
  imageAlt?: string
  priority?: boolean
  comingSoon?: boolean
}

/**
 * フルブリード没入型ショーケース行 — NOT A HOTEL構成の翻訳。
 * メディアが主役（clip-path reveal）、タイトルは巨大、メタは極小mono。
 */
export default function ShowcaseRow({
  title,
  year,
  role,
  href,
  imageSrc,
  imageAlt,
  priority = false,
  comingSoon = false,
}: ShowcaseRowProps) {
  if (comingSoon) {
    return (
      <div className="border-t border-line py-s4 px-6 md:px-10">
        <div className="mx-auto flex max-w-shell items-baseline justify-between gap-6 opacity-50">
          <span className="text-title font-display font-light text-ink-faint">{title}</span>
          <span className="text-label font-mono text-ink-faint shrink-0">COMING SOON</span>
        </div>
      </div>
    )
  }

  return (
    <InView as="div" className="group">
      <Link href={href} className="block">
        <div className="media-reveal relative h-[70vh] max-h-[45rem] min-h-[20rem] w-full overflow-hidden bg-surface">
          <div data-zoom className="absolute inset-0">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                sizes="100vw"
                priority={priority}
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-label font-mono text-ink-faint">{title}</span>
              </div>
            )}
          </div>
          {/* タイトル可読性のためのスクリム */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-8 md:px-10 md:pb-10">
            <div className="mx-auto max-w-shell">
              <h3 className="text-title font-display font-light text-ink">{title}</h3>
              <span className="mt-3 block h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-meta font-mono text-ink-faint">
                <span>YEAR — {year}</span>
                {role && <span>ROLE — {role}</span>}
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">VIEW CASE →</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </InView>
  )
}
