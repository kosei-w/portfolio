import type { Metadata } from 'next'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '制作実績 — Kosei | HP制作',
  description: '実際に作ったサイトのビフォーアフターを公開。飲食業のサイトを依頼から10日でリニューアルした実績など。',
}

const works = [
  {
    id: 1,
    tag: '飲食業',
    plan: 'スタンダードプラン',
    period: '依頼から10日で公開',
    title: '飲食業 企業サイト 全面リニューアル',
    summary:
      'スマホで崩れていた古いサイトを全面リニューアル。シンプルで清潔感のあるデザインに生まれ変わり、問い合わせ導線を整備。依頼から10日で公開まで完了した。',
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
    features: ['レスポンシブデザイン', '問い合わせフォーム', 'アクセス解析設置', '自動メール通知'],
  },
]

export default function WorksPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Works"
          title="制作実績"
          desc="実際に作ったサイトのビフォーアフターを公開しています。クライアントの許可のもと掲載。"
        />

        {/* Works list */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-5xl mx-auto space-y-16">
            {works.map((work) => (
              <article
                key={work.id}
                className="rounded-3xl overflow-hidden border border-[#e5e7eb] shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header band */}
                <div className="bg-[#0a0f1e] px-8 py-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#f59e0b] text-[#0a0f1e] text-xs font-black px-3 py-1.5 rounded-full">
                      {work.tag}
                    </span>
                    <span className="text-white/60 text-sm">⚡ {work.period}</span>
                    <span className="text-white/40 text-sm">{work.plan}</span>
                  </div>
                  <div className="flex gap-2">
                    {work.features.map((f) => (
                      <span key={f} className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="bg-[#f9fafb] p-8 md:p-10">
                  <h2 className="text-[#0a0f1e] font-black text-2xl md:text-3xl mb-4">{work.title}</h2>
                  <p className="text-[#6b7280] leading-relaxed mb-10 max-w-2xl">{work.summary}</p>

                  {/* Before / After */}
                  <div className="grid md:grid-cols-2 gap-5 mb-10">
                    <div className="bg-white rounded-2xl p-6 border border-[#fca5a5]">
                      <div className="flex items-center gap-2 mb-5">
                        <span className="w-2 h-2 bg-[#ef4444] rounded-full" />
                        <p className="text-[#ef4444] font-black text-xs uppercase tracking-widest">Before</p>
                      </div>
                      <ul className="space-y-3">
                        {work.before.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[#374151] text-sm">
                            <span className="text-[#ef4444] font-bold mt-0.5 shrink-0">✗</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border-2 border-[#f59e0b]/30">
                      <div className="flex items-center gap-2 mb-5">
                        <span className="w-2 h-2 bg-[#f59e0b] rounded-full" />
                        <p className="text-[#f59e0b] font-black text-xs uppercase tracking-widest">After</p>
                      </div>
                      <ul className="space-y-3">
                        {work.after.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[#374151] text-sm">
                            <span className="text-[#f59e0b] font-bold mt-0.5 shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-[#0a0f1e] rounded-2xl p-8">
                    <p className="text-white text-xl md:text-2xl font-black leading-relaxed mb-4">
                      {work.quote}
                    </p>
                    <p className="text-[#6b7280] text-sm">— {work.quoteBy}</p>
                  </div>
                </div>
              </article>
            ))}

            {/* Coming soon */}
            <div className="rounded-3xl p-12 border-2 border-dashed border-[#d1d5db] bg-[#f9fafb] text-center">
              <p className="text-[#0a0f1e] font-black text-2xl mb-3">実績を順次追加予定</p>
              <p className="text-[#6b7280] mb-8 leading-relaxed">
                初期クライアントとして特別価格でのご相談も承っています。
                <br />
                まずはお気軽にご連絡ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#0a0f1e] text-white font-black px-8 py-4 rounded-xl hover:bg-[#f59e0b] hover:text-[#0a0f1e] transition-all hover:scale-105"
              >
                無料相談を申し込む →
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 md:py-32 px-6 bg-[#0a0f1e] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(245,158,11,0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-4">Process</p>
            <h2
              className="text-white font-black leading-tight mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              依頼から公開まで
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: '無料相談', desc: '現状の課題・目標・予算をヒアリング。30分でゴールを決める。' },
                { step: '02', title: 'ご提案・見積', desc: '最適なプランと構成を提案。1〜2営業日以内に回答。' },
                { step: '03', title: '制作', desc: 'デザイン〜実装まで一気通貫。最短7日で初稿を提出。' },
                { step: '04', title: '公開・保守', desc: '高速インフラで即日公開。保守プランで継続的にサポート。' },
              ].map((item, i) => (
                <div key={item.step} className="relative">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-px bg-white/10 -translate-x-1/2" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center mb-5">
                    <span className="text-[#f59e0b] font-black text-sm">{item.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
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
