import Image from 'next/image'
import TransitionLink from './motion/TransitionLink'
import InView from './motion/InView'

interface ShowcaseRowProps {
  title: string
  year: string
  role?: string
  href: string
  imageSrc?: string
  imageAlt?: string
  priority?: boolean
  /** 成果メタ（例: '公開数日で初の問い合わせ'）— 画像下メタ行の下に表示 */
  stats?: string[]
}

/**
 * フルブリード没入型ショーケース行 — NOT A HOTEL構成の翻訳。
 * メディアが主役（clip-path reveal）。ライトテーマのスクショでも破綻しないよう
 * タイトル・メタは画像の下（オーバーレイしない）。hoverで赤の一閃下線。
 */
export default function ShowcaseRow({
  title,
  year,
  role,
  href,
  imageSrc,
  imageAlt,
  priority = false,
  stats,
}: ShowcaseRowProps) {
  return (
    <InView as="div" className="group pb-s4">
      <TransitionLink href={href} className="block" data-cursor="view">
        <div className="media-reveal relative h-[65vh] max-h-[42rem] min-h-[18rem] w-full overflow-hidden bg-surface">
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
        </div>

        <div className="mx-auto max-w-shell px-6 md:px-10">
          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h3 className="text-title font-display font-light text-ink">{title}</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-1 text-meta font-mono text-ink-faint">
              <span>YEAR — {year}</span>
              {role && <span>ROLE — {role}</span>}
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                VIEW CASE →
              </span>
            </div>
          </div>
          {stats && (
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-meta font-mono text-ink-muted">
              {stats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </p>
          )}
          <span
            className="mt-5 block h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden="true"
          />
        </div>
      </TransitionLink>
    </InView>
  )
}
