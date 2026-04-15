import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '制作実績 — Kosei | HP制作',
  description: '実際に作ったサイトのビフォーアフターを公開。飲食業のサイトを依頼から10日でリニューアルした実績など。',
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="text-[#f59e0b] text-xs font-black tracking-[0.3em] uppercase shrink-0">
        {num} / {label}
      </span>
      <div className="flex-1 h-px bg-[#e5e5e5]" aria-hidden="true" />
    </div>
  )
}

const works = [
  {
    id: '01',
    tag: '飲食業',
    plan: 'スタンダード',
    period: '10日',
    year: '2026',
    title: '企業サイト 全面リニューアル',
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
      <main>
        {/* Page header */}
        <div className="bg-[#0a0f1e] pt-32 pb-16 px-8 md:px-16 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="text-[#f59e0b] text-xs font-black tracking-[0.3em] uppercase mb-6">Works</p>
            <h1
              className="text-white font-black leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', textWrap: 'balance' }}
            >
              制作実績
            </h1>
            <p className="text-white/40 text-base mt-4 max-w-md leading-relaxed">
              実際に作ったサイトのビフォーアフターを公開しています。クライアントの許可のもと掲載。
            </p>
          </div>
        </div>

        {/* Works list */}
        <section className="bg-white py-24 md:py-36 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <SectionLabel num="01" label="Cases" />

            {works.map((work) => (
              <article key={work.id} className="mb-24">
                {/* Work header row */}
                <div className="flex flex-wrap items-baseline gap-4 mb-12 pb-8 border-b border-[#e5e5e5]">
                  <span className="text-[#f59e0b] font-black text-xs shrink-0">{work.id}</span>
                  <span className="text-[#aaa] text-xs uppercase tracking-widest">{work.tag}</span>
                  <h2
                    className="text-[#111] font-black flex-1"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', textWrap: 'balance' }}
                  >
                    {work.title}
                  </h2>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[#aaa] text-sm">{work.year}</span>
                    <span className="bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold px-3 py-1">⚡ {work.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-[#555] text-lg leading-relaxed max-w-2xl mb-16">{work.summary}</p>

                {/* Before / After */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div>
                    <p className="text-xs font-black tracking-[0.25em] uppercase text-[#ef4444] mb-6">Before</p>
                    <ul className="space-y-0">
                      {work.before.map((item) => (
                        <li key={item} className="flex items-start gap-4 py-4 border-b border-[#f0f0f0]">
                          <span className="text-[#ef4444] font-bold shrink-0 mt-0.5 text-sm">✗</span>
                          <span className="text-[#555] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-[0.25em] uppercase text-[#f59e0b] mb-6">After</p>
                    <ul className="space-y-0">
                      {work.after.map((item) => (
                        <li key={item} className="flex items-start gap-4 py-4 border-b border-[#f0f0f0]">
                          <span className="text-[#f59e0b] font-bold shrink-0 mt-0.5 text-sm">✓</span>
                          <span className="text-[#555] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pull quote */}
                <div className="border-l-2 border-[#f59e0b] pl-8">
                  <p
                    className="text-[#111] font-black leading-tight mb-3"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', textWrap: 'balance' }}
                  >
                    {work.quote}
                  </p>
                  <p className="text-[#aaa] text-sm">— {work.quoteBy}</p>
                </div>
              </article>
            ))}

            {/* Coming soon */}
            <div className="border-t border-[#e5e5e5] pt-16">
              <p className="text-[#aaa] text-xs font-black tracking-[0.3em] uppercase mb-6">Coming Soon</p>
              <p
                className="text-[#111] font-black leading-tight mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                実績を順次追加予定
              </p>
              <p className="text-[#777] leading-relaxed mb-10 max-w-md">
                初期クライアントとして特別価格でのご相談も承っています。
                まずはお気軽にご連絡ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[#111] font-bold text-sm tracking-wide group"
              >
                <span className="border-b border-[#f59e0b] pb-0.5 group-hover:text-[#f59e0b] transition-colors duration-200">
                  無料相談を申し込む
                </span>
                <span className="text-[#f59e0b] group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-[#fafafa] py-24 md:py-36 px-8 md:px-16 border-t border-[#e5e5e5]">
          <div className="max-w-7xl mx-auto">
            <SectionLabel num="02" label="Process" />
            <h2
              className="text-[#111] font-black leading-tight mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textWrap: 'balance' }}
            >
              依頼から公開まで
            </h2>
            <div className="border-t border-[#e5e5e5]">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-7 border-b border-[#f0f0f0]"
                >
                  <span className="text-[#f59e0b] font-black text-xs w-6 shrink-0">{item.step}</span>
                  <p className="text-[#111] font-bold md:w-40 shrink-0">{item.title}</p>
                  <p className="text-[#777] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
