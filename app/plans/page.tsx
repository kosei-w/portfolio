import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Plans — Kosei Idezuka',
  description: '¥128,000〜の明瞭な3プラン。追加費用・隠れたコストなし。初回見積もり無料。',
}

const plans = [
  {
    name: 'STARTER',
    nameJa: 'スターター',
    price: '¥128,000',
    unit: '〜',
    period: '最短7日',
    desc: '小さく始めたい方に。シンプルで清潔感のあるHPを素早く届けます。',
    features: [
      'レスポンシブデザイン（スマホ・PC対応）',
      '5ページまで',
      'お問い合わせフォーム',
      '高速表示・グローバルCDN配信',
      '公開後1ヶ月サポート',
    ],
    notIncluded: ['アニメーション', 'CMS（自分で更新できる仕組み）', 'SEO詳細設定'],
    featured: false,
  },
  {
    name: 'STANDARD',
    nameJa: 'スタンダード',
    price: '¥198,000',
    unit: '〜',
    period: '最短10日',
    desc: '最も選ばれるプラン。アニメーションと通知機能で、成果につながるサイトに。',
    features: [
      'スターターの全機能',
      'スクロールアニメーション',
      'お問い合わせ自動メール通知',
      'Google Analytics設置',
      '10ページまで',
      '公開後3ヶ月サポート',
    ],
    notIncluded: ['CMS（自分で更新できる仕組み）'],
    featured: true,
  },
  {
    name: 'PREMIUM',
    nameJa: 'プレミアム',
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
    featured: false,
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
    a: '見積もり時に提示した金額以外の追加費用は発生しません。ドメイン・ホスティング費用は別途かかりますが、事前にお伝えします。',
  },
  {
    q: '修正は何回までできますか？',
    a: '制作期間中の修正は回数制限なしで対応します。「なんか違う」が起きないよう、最初のヒアリングに時間をかけています。',
  },
  {
    q: '公開後に自分でも更新できますか？',
    a: 'プレミアムプランにはCMSが含まれているため、自分で文章や画像を更新できます。スターター・スタンダードは保守プランでの対応になります。',
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
      <main className="pt-20">

        {/* Page header */}
        <div className="px-8 md:px-14 section-py pb-0 border-b border-[var(--border)]">
          <div className="max-w-[1200px] mx-auto pb-16">
            <p className="eyebrow text-[var(--muted)] mb-10">PLANS</p>
            <h1
              className="font-display font-extrabold text-[var(--ink)] leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)', letterSpacing: '-0.03em' }}
            >
              Pricing
            </h1>
            <p className="text-[var(--muted)] text-sm mt-6 max-w-md leading-relaxed">
              追加費用・隠れたコストなし。すべて税抜き表示・初回お見積もり無料。
            </p>
          </div>
        </div>

        {/* Plans */}
        <ScrollReveal className="px-8 md:px-14 section-py">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border border-[var(--border)]">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col p-8 md:p-10"
                  style={{ background: plan.featured ? 'var(--ink)' : 'var(--bg)' }}
                >
                  {plan.featured && (
                    <span className="font-display text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-3">
                      Most Popular
                    </span>
                  )}
                  <p
                    className="font-display font-bold text-xs tracking-[0.1em] mb-4"
                    style={{ color: plan.featured ? 'rgba(242,240,235,0.4)' : 'var(--muted)' }}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className="font-display font-extrabold"
                      style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        color: plan.featured ? 'var(--bg)' : 'var(--ink)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ color: plan.featured ? 'rgba(242,240,235,0.4)' : 'var(--muted)', fontSize: '0.9rem' }}>
                      {plan.unit}
                    </span>
                  </div>
                  <p
                    className="font-display text-xs mb-6"
                    style={{ color: plan.featured ? 'var(--gold)' : 'var(--muted)' }}
                  >
                    ⚡ {plan.period}
                  </p>
                  <p
                    className="text-xs leading-relaxed mb-8"
                    style={{ color: plan.featured ? 'rgba(242,240,235,0.5)' : 'var(--muted)' }}
                  >
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 mb-4 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-xs">
                        <span className="text-[var(--gold)] shrink-0 mt-0.5">✓</span>
                        <span style={{ color: plan.featured ? 'rgba(242,240,235,0.7)' : 'var(--muted)' }}>{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-xs opacity-40">
                        <span className="shrink-0 mt-0.5" style={{ color: plan.featured ? 'var(--bg)' : 'var(--muted)' }}>—</span>
                        <span style={{ color: plan.featured ? 'var(--bg)' : 'var(--muted)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="font-display font-bold text-xs tracking-[0.1em] text-center py-3.5 mt-8 transition-colors duration-200"
                    style={{
                      background: plan.featured ? 'var(--gold)' : 'var(--ink)',
                      color: plan.featured ? 'var(--ink)' : 'var(--bg)',
                    }}
                  >
                    このプランで相談 →
                  </Link>
                </div>
              ))}
            </ScrollReveal>
            <p className="text-[var(--muted)] text-xs mt-6">
              ※ 表示価格はすべて税抜きです。ドメイン・ホスティング費用は別途。
            </p>
          </div>
        </ScrollReveal>

        {/* Maintenance */}
        <ScrollReveal className="border-t border-[var(--border)] bg-[var(--ink)] px-8 md:px-14 section-py">
          <div className="max-w-[1200px] mx-auto">
            <p className="eyebrow text-[var(--gold)] mb-16">MAINTENANCE</p>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2
                  className="font-display font-extrabold text-[var(--bg)] leading-none mb-4"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5.25rem)', letterSpacing: '-0.02em' }}
                >
                  保守プラン
                </h2>
                <p className="body-text-dark mb-8">
                  作って終わりにしない。サイトを「資産」として育て続けます。
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span
                    className="font-display font-extrabold text-[var(--bg)]"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
                  >
                    {maintenance.price}
                  </span>
                  <span className="text-white/40 text-lg">{maintenance.unit}</span>
                </div>
                <Link
                  href="/contact"
                  className="font-display font-bold text-xs tracking-[0.1em] bg-[var(--gold)] text-[var(--ink)] px-8 py-3.5 hover:bg-[var(--bg)] transition-colors duration-200 inline-block"
                >
                  保守プランを申し込む →
                </Link>
              </div>
              <ul className="border-t border-white/10">
                {maintenance.features.map((f) => (
                  <li key={f} className="flex items-center gap-4 py-6 border-b border-white/10">
                    <span className="text-[var(--gold)] text-xs shrink-0">✓</span>
                    <span className="body-text-dark">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal className="border-t border-[var(--border)] px-8 md:px-14 section-py">
          <div className="max-w-[1200px] mx-auto">
            <p className="eyebrow text-[var(--muted)] mb-16">FAQ</p>
            <div className="border-t border-[var(--border)]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-[var(--border)]">
                  <summary className="flex items-center justify-between py-7 cursor-pointer font-display font-bold text-[var(--ink)] text-base list-none hover:text-[var(--gold)] transition-colors duration-200">
                    {faq.q}
                    <span className="text-[var(--gold)] font-bold text-lg group-open:rotate-45 transition-transform duration-200 shrink-0 ml-4">
                      +
                    </span>
                  </summary>
                  <div className="pb-8 pl-0">
                    <p className="body-text">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="border-t border-[var(--border)] px-8 md:px-14 section-py">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 items-start md:items-end justify-between">
            <h2
              className="font-display font-extrabold text-[var(--ink)] leading-tight"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.25rem)', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              どのプランか迷ったら、
              <br />
              まず相談を。
            </h2>
            <Link
              href="/contact"
              className="font-display font-bold text-sm tracking-[0.1em] bg-[var(--ink)] text-[var(--bg)] px-10 py-4 hover:bg-[var(--gold)] transition-colors duration-300 shrink-0"
            >
              FREE CONSULTATION →
            </Link>
          </div>
        </ScrollReveal>

      </main>
      <Footer />
    </>
  )
}
