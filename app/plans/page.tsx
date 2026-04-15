import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import Link from 'next/link'

const plans = [
  {
    name: 'スターター',
    price: '¥128,000',
    unit: '〜',
    period: '最短7日',
    desc: '小さく始めたい方に。シンプルで清潔感のあるHPを素早く届けます。',
    features: [
      'レスポンシブデザイン（スマホ・PC対応）',
      '5ページまで',
      'お問い合わせフォーム',
      '高速表示（Next.js + Vercel）',
      '公開後1ヶ月サポート',
    ],
    notIncluded: ['アニメーション', 'CMS（自分で更新できる仕組み）', 'SEO詳細設定'],
    highlight: false,
  },
  {
    name: 'スタンダード',
    price: '¥198,000',
    unit: '〜',
    period: '最短10日',
    desc: '最も選ばれるプラン。アニメーションと通知機能で、成果につながるサイトに。',
    features: [
      'スターターの全機能',
      'スクロールアニメーション（GSAP）',
      'お問い合わせ自動メール通知',
      'Google Analytics設置',
      '10ページまで',
      '公開後3ヶ月サポート',
    ],
    notIncluded: ['CMS（自分で更新できる仕組み）'],
    highlight: true,
  },
  {
    name: 'プレミアム',
    price: '¥350,000',
    unit: '〜',
    period: '最短14日',
    desc: '本気でブランドを作りたい方に。フルカスタム×SEO完全対応。',
    features: [
      'スタンダードの全機能',
      'フルカスタムブランドデザイン',
      'SEO完全対応（構造化データ・OGP含む）',
      'CMS（自分で更新できる仕組み）',
      'ページ数無制限',
      '公開後6ヶ月サポート',
    ],
    notIncluded: [],
    highlight: false,
  },
]

const maintenance = {
  price: '¥15,000',
  unit: '/月',
  features: [
    '月1回のコンテンツ更新',
    '表示速度・セキュリティ監視',
    'バグ対応（48時間以内）',
    '月次レポート',
    'Google Analytics確認',
  ],
}

const faqs = [
  {
    q: '追加費用はかかりますか？',
    a: '見積もり時に提示した金額以外の追加費用は発生しません。ドメイン・サーバー（Vercel）費用は別途かかりますが、事前にお伝えします。',
  },
  {
    q: '修正は何回までできますか？',
    a: '制作期間中の修正は回数制限なしで対応します。「なんか違う」が起きないよう、最初のヒアリングに時間をかけています。',
  },
  {
    q: '公開後に自分でも更新できますか？',
    a: 'プレミアムプランにはCMSが含まれているため、自分で文章や画像を更新できます。スターター・スタンダードの場合は保守プランでの対応になります。',
  },
  {
    q: 'WordPressでも作れますか？',
    a: 'Next.js + Vercelでの制作を専門にしています。WordPressより表示速度が圧倒的に速く、セキュリティリスクも低いため、こちらをおすすめしています。',
  },
  {
    q: '医療・クリニック以外でも依頼できますか？',
    a: 'もちろんです。飲食業・サービス業・士業など、業種は問いません。医療分野は特に得意ですが、すべての中小企業・個人事業主に対応しています。',
  },
  {
    q: '分割払いはできますか？',
    a: '基本は一括払い（前払い50%・公開時残50%）ですが、ご相談ください。状況に応じて柔軟に対応します。',
  },
]

export default function PlansPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Plans"
          title="料金プラン"
          desc="追加費用・隠れたコストなし。すべて税抜き表示・初回お見積もり無料。"
        />

        {/* Plans */}
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 border transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-[#0a0f1e] border-[#0a0f1e] shadow-2xl scale-[1.02]'
                      : 'bg-white border-[#e5e7eb] hover:border-[#f59e0b]'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block bg-[#f59e0b] text-[#0a0f1e] text-xs font-black px-3 py-1 rounded-full mb-4 tracking-wider">
                      MOST POPULAR
                    </span>
                  )}
                  <p className={`text-sm font-bold mb-2 ${plan.highlight ? 'text-[#9ca3af]' : 'text-[#6b7280]'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-[#0a0f1e]'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlight ? 'text-[#9ca3af]' : 'text-[#6b7280]'}>{plan.unit}</span>
                  </div>
                  <p className={`text-sm mb-3 ${plan.highlight ? 'text-[#f59e0b]' : 'text-[#f59e0b]'}`}>
                    ⚡ {plan.period}
                  </p>
                  <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-[#d1d5db]' : 'text-[#6b7280]'}`}>
                    {plan.desc}
                  </p>

                  {/* Included */}
                  <ul className="space-y-2.5 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="text-[#f59e0b] font-bold mt-0.5 shrink-0">✓</span>
                        <span className={plan.highlight ? 'text-[#d1d5db]' : 'text-[#374151]'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Not included */}
                  {plan.notIncluded.length > 0 && (
                    <ul className="space-y-2 mb-8">
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <span className="text-[#4b5563] mt-0.5 shrink-0">—</span>
                          <span className={plan.highlight ? 'text-[#4b5563]' : 'text-[#9ca3af]'}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href="/contact"
                    className={`block text-center font-black py-3.5 rounded-full transition-all duration-200 mt-8 ${
                      plan.highlight
                        ? 'bg-[#f59e0b] text-[#0a0f1e] hover:bg-[#fbbf24]'
                        : 'bg-[#0a0f1e] text-white hover:bg-[#f59e0b] hover:text-[#0a0f1e]'
                    }`}
                  >
                    このプランで相談する
                  </Link>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-center text-[#9ca3af] text-sm">
              ※ 表示価格はすべて税抜きです。ドメイン・Vercelホスティング費用は別途。
            </p>
          </div>
        </section>

        {/* Maintenance */}
        <section className="py-20 md:py-28 px-6 bg-[#f9fafb]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">Maintenance</p>
            <h2 className="text-[#0a0f1e] font-black text-3xl md:text-5xl mb-4 leading-tight">
              保守プラン
            </h2>
            <p className="text-[#6b7280] text-lg mb-12 max-w-xl">
              作って終わりにしない。サイトを「資産」として育て続けます。
            </p>
            <div className="bg-[#0a0f1e] rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="shrink-0">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-white text-5xl font-black">{maintenance.price}</span>
                    <span className="text-[#9ca3af] text-lg">{maintenance.unit}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 block text-center bg-[#f59e0b] text-[#0a0f1e] font-black px-8 py-3.5 rounded-full hover:bg-[#fbbf24] transition-all"
                  >
                    保守プランを申し込む
                  </Link>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {maintenance.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[#d1d5db]">
                      <span className="text-[#f59e0b] font-bold shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="text-[#0a0f1e] font-black text-3xl md:text-5xl mb-16 leading-tight">
              よくある質問
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-[#f9fafb] rounded-2xl border border-[#e5e7eb] overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-[#0a0f1e] list-none hover:text-[#f59e0b] transition-colors">
                    {faq.q}
                    <span className="text-[#f59e0b] font-black text-xl group-open:rotate-45 transition-transform duration-200 shrink-0 ml-4">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-[#6b7280] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#f59e0b] text-center">
          <h2 className="text-[#0a0f1e] font-black text-3xl md:text-4xl mb-4">
            どのプランか迷ったら、まず相談を。
          </h2>
          <p className="text-[#78350f] text-lg mb-10">
            ヒアリングをして、最適なプランをご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0a0f1e] text-white font-black px-10 py-5 rounded-full text-xl hover:bg-[#111827] transition-all hover:scale-105"
          >
            無料相談を申し込む →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
