import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Works — Kosei Wakabayashi',
  description: '実際に作ったサイトのビフォーアフターを公開。飲食業のサイトを依頼から10日でリニューアルした実績など。',
}

const works = [
  {
    id: '01',
    tag: '飲食業',
    plan: 'STANDARD',
    period: '10 days',
    year: '2026',
    title: '企業サイト全面リニューアル',
    summary:
      'スマホで崩れていた古いサイトを全面リニューアル。シンプルで清潔感のあるデザインに生まれ変わり、問い合わせ導線を整備。依頼から10日で公開まで完了。',
    before: [
      'スマホで見るとボタンがズレる・崩れる',
      'デザインが古く、第一印象が悪い',
      '何を売っているかパッと伝わらない',
      '問い合わせボタンが見つけにくい',
    ],
    after: [
      'スマホ・PCどちらもきれいに表示',
      '会社の雰囲気が一発で伝わるデザイン',
      'サービス・強みがすぐわかる構成',
      '問い合わせボタンが目立つ導線設計',
    ],
    quote: '「思ったより全然早かった。しかもかっこいい」',
    quoteBy: 'クライアント（飲食業・代表）',
  },
]

const process = [
  { step: '01', title: '無料相談', desc: '現状の課題・目標・予算をヒアリング。30分でゴールを決める。' },
  { step: '02', title: 'ご提案・見積', desc: '最適なプランと構成を提案。1〜2営業日以内に回答。' },
  { step: '03', title: '制作', desc: 'デザイン〜実装まで一気通貫。最短7日で初稿を提出。' },
  { step: '04', title: '公開・保守', desc: '高速インフラで即日公開。保守プランで継続的にサポート。' },
]

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className="pt-20">

        {/* Page header */}
        <div className="px-8 md:px-14 pt-16 pb-0 border-b border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto pb-16">
            <p className="font-display text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase mb-10">
              WORKS
            </p>
            <h1
              className="font-display font-extrabold text-[var(--ink)] leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', letterSpacing: '-0.03em' }}
            >
              Selected Work
            </h1>
            <p className="text-[var(--muted)] text-sm mt-6 max-w-md leading-relaxed">
              実際に作ったサイトのビフォーアフターを公開しています。クライアントの許可のもと掲載。
            </p>
          </div>
        </div>

        {/* Works list */}
        <section className="px-8 md:px-14 py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto">

            {works.map((work) => (
              <article key={work.id} className="mb-28">

                {/* Work header */}
                <ScrollReveal className="flex flex-wrap items-baseline gap-6 mb-12 pb-8 border-b border-[var(--border)]">
                  <span className="font-display font-bold text-[var(--gold)] text-xs shrink-0">{work.id}</span>
                  <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">
                    {work.tag}
                  </span>
                  <h2
                    className="font-display font-extrabold text-[var(--ink)] flex-1"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em', textWrap: 'balance' }}
                  >
                    {work.title}
                  </h2>
                  <div className="flex items-center gap-5 shrink-0">
                    <span className="font-display text-xs text-[var(--muted)]">{work.year}</span>
                    <span className="font-display text-xs text-[var(--gold)] border border-[var(--gold)]/30 px-3 py-1">
                      ⚡ {work.period}
                    </span>
                  </div>
                </ScrollReveal>

                {/* Summary */}
                <ScrollReveal>
                  <p className="text-[var(--muted)] text-base leading-relaxed max-w-2xl mb-16">{work.summary}</p>
                </ScrollReveal>

                {/* Before / After */}
                <ScrollReveal className="grid md:grid-cols-2 gap-12 mb-16">
                  <div>
                    <p className="font-display text-[10px] tracking-[0.28em] uppercase text-red-400/80 mb-6">
                      BEFORE
                    </p>
                    <ul>
                      {work.before.map((item) => (
                        <li key={item} className="flex items-start gap-5 py-4 border-b border-[var(--border)]">
                          <span className="text-red-400 text-xs font-bold shrink-0 mt-0.5">✗</span>
                          <span className="text-[var(--muted)] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-display text-[10px] tracking-[0.28em] uppercase text-[var(--gold)] mb-6">
                      AFTER
                    </p>
                    <ul>
                      {work.after.map((item) => (
                        <li key={item} className="flex items-start gap-5 py-4 border-b border-[var(--border)]">
                          <span className="text-[var(--gold)] text-xs font-bold shrink-0 mt-0.5">✓</span>
                          <span className="text-[var(--muted)] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Pull quote */}
                <ScrollReveal className="border-l-2 border-[var(--gold)] pl-8">
                  <p
                    className="font-display font-extrabold text-[var(--ink)] leading-tight mb-3"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', textWrap: 'balance' }}
                  >
                    {work.quote}
                  </p>
                  <p className="font-display text-xs tracking-[0.1em] text-[var(--muted)]">— {work.quoteBy}</p>
                </ScrollReveal>
              </article>
            ))}

            {/* Coming soon */}
            <ScrollReveal className="border-t border-[var(--border)] pt-16">
              <p className="font-display text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase mb-8">
                COMING SOON
              </p>
              <p
                className="font-display font-extrabold text-[var(--ink)] leading-none mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
              >
                実績を順次追加予定
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-10 max-w-md">
                初期クライアントとして特別価格でのご相談も承っています。まずはお気軽にご連絡ください。
              </p>
              <Link
                href="/contact"
                className="font-display font-bold text-xs tracking-[0.15em] text-[var(--ink)] link-underline"
              >
                GET IN TOUCH →
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Process */}
        <ScrollReveal className="border-t border-[var(--border)] bg-[var(--ink)] px-8 md:px-14 py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-display text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-16">
              PROCESS
            </p>
            <h2
              className="font-display font-extrabold text-[var(--bg)] leading-tight mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              依頼から公開まで
            </h2>
            <div className="border-t border-white/10">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16 py-7 border-b border-white/10"
                >
                  <span className="font-display font-bold text-[var(--gold)] text-xs shrink-0">{item.step}</span>
                  <p className="font-display font-bold text-[var(--bg)] text-sm md:w-36 shrink-0">{item.title}</p>
                  <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </main>
      <Footer />
    </>
  )
}
