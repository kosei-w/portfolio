import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import Link from 'next/link'

const works = [
  {
    id: 1,
    tag: '飲食業',
    plan: 'スタンダードプラン',
    period: '依頼から10日で公開',
    title: '友人社長の会社サイト リニューアル',
    summary:
      'スマホで崩れていた古いサイトを、Next.js + Tailwind CSSで全面リニューアル。シンプルで清潔感のあるデザインに生まれ変わり、問い合わせ導線も整備した。',
    before: [
      'スマホで見るとボタンがズレる・崩れる',
      '2010年代のデザインで古さが目立つ',
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
    features: ['レスポンシブデザイン', 'お問い合わせフォーム', 'Google Analytics設置', 'Vercelデプロイ'],
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
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-5xl mx-auto space-y-16">
            {works.map((work) => (
              <article key={work.id} className="bg-[#f9fafb] rounded-3xl p-8 md:p-12 border border-[#e5e7eb]">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-[#0a0f1e] text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    {work.tag}
                  </span>
                  <span className="bg-[#fef3c7] text-[#92400e] text-sm font-bold px-4 py-1.5 rounded-full">
                    ⚡ {work.period}
                  </span>
                  <span className="text-[#6b7280] text-sm">{work.plan}</span>
                </div>

                <h2 className="text-[#0a0f1e] font-black text-2xl md:text-3xl mb-4">{work.title}</h2>
                <p className="text-[#6b7280] leading-relaxed mb-10 max-w-2xl">{work.summary}</p>

                {/* Before / After */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white rounded-2xl p-6 border border-[#fca5a5]">
                    <p className="text-[#ef4444] font-bold text-xs uppercase tracking-widest mb-4">Before</p>
                    <ul className="space-y-3">
                      {work.before.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[#374151] text-sm">
                          <span className="text-[#ef4444] font-bold mt-0.5 shrink-0">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-[#6ee7b7]">
                    <p className="text-[#059669] font-bold text-xs uppercase tracking-widest mb-4">After</p>
                    <ul className="space-y-3">
                      {work.after.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[#374151] text-sm">
                          <span className="text-[#059669] font-bold mt-0.5 shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {work.features.map((f) => (
                    <span key={f} className="bg-[#0a0f1e] text-[#9ca3af] text-xs px-3 py-1.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-[#f59e0b] pl-6 py-2">
                  <p className="text-[#0a0f1e] text-xl font-bold italic">{work.quote}</p>
                  <p className="text-[#6b7280] text-sm mt-2">— {work.quoteBy}</p>
                </blockquote>
              </article>
            ))}

            {/* Coming soon */}
            <div className="rounded-3xl p-10 border-2 border-dashed border-[#d1d5db] text-center">
              <p className="text-[#0a0f1e] font-bold text-xl mb-3">実績を順次追加予定</p>
              <p className="text-[#6b7280] mb-6">
                最初のクライアントになりませんか？
                <br />
                初回相談は無料・30分・オンラインです。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#f59e0b] text-[#0a0f1e] font-black px-8 py-4 rounded-full hover:bg-[#fbbf24] transition-all hover:scale-105"
              >
                無料相談を申し込む →
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 px-6 bg-[#0a0f1e]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">Process</p>
            <h2 className="text-white font-black text-3xl md:text-5xl mb-16 leading-tight">
              依頼から公開まで
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: '無料相談', desc: '現状の課題・目標・予算をヒアリング。30分でゴールを決める。' },
                { step: '02', title: 'ご提案・見積', desc: '最適なプランと構成を提案。1〜2営業日以内に回答。' },
                { step: '03', title: '制作', desc: 'デザイン〜実装まで一気通貫。最短7日で初稿を提出。' },
                { step: '04', title: '公開・保守', desc: 'Vercelで高速公開。保守プランで継続的にサポート。' },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <p className="text-[#f59e0b] text-5xl font-black mb-4 opacity-60">{item.step}</p>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p>
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
