import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kosei Idezuka — HP制作',
  description:
    '最短10日納品・明瞭な料金体系。医療DX出身のコンサルタントが、集客につながるサイトを一気通貫で担います。',
}

/* ── Works thumbnail card ── */
function WorkCard({
  id,
  tag,
  title,
  period,
  bg,
  href,
  placeholder,
}: {
  id: string
  tag: string
  title: string
  period: string
  bg: string
  href: string
  placeholder?: boolean
}) {
  const EASE = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'

  return (
    <Link
      href={href}
      className="block overflow-hidden group"
      style={{ aspectRatio: '4 / 3' }}
      aria-label={title}
    >
      {/* Inner — scales on hover while outer clips overflow */}
      <div
        className="relative w-full h-full transition-transform duration-[400ms] group-hover:scale-[1.03]"
        style={{ background: bg, transitionTimingFunction: EASE }}
      >
        {/* Subtle grid lines for visual texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        {/* Ghost number — decorative */}
        <span
          className="absolute -bottom-4 -right-2 font-display font-extrabold select-none pointer-events-none leading-none text-white/[0.04]"
          style={{ fontSize: 'clamp(8rem, 22vw, 18rem)' }}
          aria-hidden="true"
        >
          {id}
        </span>

        {/* Tag */}
        <span className="absolute top-7 left-8 font-display text-[10px] tracking-[0.28em] uppercase text-white/70">
          {tag}
        </span>

        {/* Bottom permanent info — fades out on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-16 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-[400ms] group-hover:opacity-0"
          style={{ transitionTimingFunction: EASE }}
        >
          <p
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)' }}
          >
            {title}
          </p>
          {!placeholder && (
            <span className="font-display text-[10px] tracking-[0.15em] text-white/55 mt-1.5 block">
              {period}
            </span>
          )}
        </div>

        {/* Hover overlay — gold reveal */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
          style={{ transitionTimingFunction: EASE, background: 'var(--gold)' }}
        >
          <span className="font-display text-[10px] tracking-[0.28em] uppercase text-black/50 mb-2">{tag}</span>
          <p
            className="font-display font-extrabold text-black leading-tight"
            style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2rem)', textWrap: 'balance' }}
          >
            {title}
          </p>
          <div className="flex items-center justify-between mt-4">
            {!placeholder && (
              <span className="font-display text-xs text-black/50">{period}</span>
            )}
            <span className="font-display font-bold text-xl text-black ml-auto">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Hero />

        {/* ── Works ── */}
        <section aria-labelledby="section-works">
          <ScrollReveal className="px-8 md:px-14 py-8 flex items-center justify-between border-t border-[var(--border)]">
            <div className="flex items-center gap-6">
              <h2
                id="section-works"
                className="eyebrow text-[var(--muted)]"
              >
                01 / WORKS
              </h2>
              <div className="w-12 h-px bg-[var(--border)]" aria-hidden="true" />
            </div>
            <Link
              href="/works"
              className="font-display text-[10px] tracking-[0.2em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-200"
            >
              ALL WORKS →
            </Link>
          </ScrollReveal>

          {/* Full-bleed grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[var(--border)]">
            <WorkCard
              id="01"
              tag="飲食業"
              title="企業サイト全面リニューアル"
              period="10 days"
              bg="#161410"
              href="/works"
            />
            <WorkCard
              id="02"
              tag="Next project"
              title="あなたのサイトになります"
              period="—"
              bg="#1E1B16"
              href="/contact"
              placeholder
            />
          </div>
        </section>

        {/* ── About ── */}
        <section aria-labelledby="section-about" className="border-t border-[var(--border)]">
          <ScrollReveal className="px-8 md:px-14 section-py">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 md:gap-28 items-end">
              <div>
                <h2
                  id="section-about"
                  className="eyebrow text-[var(--muted)] mb-10"
                >
                  02 / ABOUT
                </h2>
                <p
                  className="font-display font-extrabold text-[var(--ink)] leading-tight"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5.25rem)', letterSpacing: '-0.02em', textWrap: 'balance' }}
                >
                  なぜ、これほど
                  <br />
                  早く作れるのか。
                </p>
              </div>
              <div>
                <ul className="space-y-0 mb-10">
                  {[
                    {
                      num: '01',
                      t: '独自の高速制作プロセス',
                      d: '制作会社で2〜3ヶ月かかるところを最短10日で。無駄なプロセスを徹底的に排除しているから早い。',
                    },
                    {
                      num: '02',
                      t: 'コンサル出身のヒアリング力',
                      d: '「何を作るか」より「何のために作るか」を先に掴む。作ったあとに「なんか違う」が起きない。',
                    },
                    {
                      num: '03',
                      t: '作って終わりにしない設計',
                      d: '公開後の保守・更新・SEO対応まで一気通貫。サイトを「資産」として育て続けます。',
                    },
                  ].map((item) => (
                    <li key={item.num} className="flex gap-6 py-7 border-b border-[var(--border)]">
                      <span className="font-display font-bold text-[var(--gold)] text-xs shrink-0 mt-0.5">
                        {item.num}
                      </span>
                      <div>
                        <p className="font-display font-bold text-[var(--ink)] text-base mb-2">{item.t}</p>
                        <p className="body-text">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="font-display font-bold text-xs tracking-[0.15em] text-[var(--ink)] link-underline link-gold"
                >
                  MORE ABOUT ME →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Plans strip ── */}
        <section aria-labelledby="section-plans" className="border-t border-[var(--border)]">
          <ScrollReveal className="px-8 md:px-14 section-py">
            <div className="max-w-[1200px] mx-auto">
              <h2
                id="section-plans"
                className="eyebrow text-[var(--muted)] mb-10"
              >
                03 / PLANS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border border-[var(--border)]">
                {[
                  { name: 'STARTER', price: '¥128,000〜', period: '最短7日', featured: false },
                  { name: 'STANDARD', price: '¥198,000〜', period: '最短10日', featured: true },
                  { name: 'PREMIUM', price: '¥350,000〜', period: '最短14日', featured: false },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex flex-col gap-3 p-8"
                    style={{ background: p.featured ? 'var(--ink)' : 'var(--bg)' }}
                  >
                    {p.featured && (
                      <span className="font-display text-[9px] tracking-[0.2em] uppercase text-[var(--gold)]">
                        Most Popular
                      </span>
                    )}
                    <p
                      className="font-display font-bold text-xs tracking-[0.1em]"
                      style={{ color: p.featured ? 'rgba(242,240,235,0.5)' : 'var(--muted)' }}
                    >
                      {p.name}
                    </p>
                    <p
                      className="font-display font-extrabold"
                      style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                        color: p.featured ? 'var(--bg)' : 'var(--ink)',
                      }}
                    >
                      {p.price}
                    </p>
                    <p
                      className="font-display text-xs"
                      style={{ color: p.featured ? 'var(--gold)' : 'var(--muted)' }}
                    >
                      ⚡ {p.period}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Link
                  href="/plans"
                  className="font-display font-bold text-xs tracking-[0.15em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-200"
                >
                  FULL PRICING →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Contact CTA ── */}
        <section className="border-t border-[var(--border)]">
          <ScrollReveal className="px-8 md:px-14 py-24 md:py-44">
            <div className="max-w-[1200px] mx-auto">
              <p className="eyebrow text-[var(--muted)] mb-12">04 / CONTACT</p>
              <h2
                className="font-display font-extrabold text-[var(--ink)] leading-none mb-16"
                style={{
                  fontSize: 'clamp(5.25rem, 16.5vw, 16.5rem)',
                  letterSpacing: '-0.03em',
                  textWrap: 'balance',
                }}
              >
                Let&apos;s work
                <br />
                together.
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
                <p className="body-text">
                  30分・無料・オンライン。「まだぼんやりしている」でも大丈夫。
                </p>
                <Link
                  href="/contact"
                  className="font-display font-bold text-sm tracking-[0.1em] text-[var(--bg)] bg-[var(--ink)] px-10 py-4 hover:bg-[var(--gold)] transition-colors duration-300 shrink-0"
                >
                  FREE CONSULTATION →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
