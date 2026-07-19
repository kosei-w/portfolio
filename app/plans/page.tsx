import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import InView from '@/components/motion/InView'

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
    desc: '本気でブランドを作りたい方に。フルカスタム×SEO＋AI検索まで完全対応。',
    features: [
      'スタンダードの全機能',
      'フルカスタムブランドデザイン',
      'SEO完全対応（構造化データ・OGP含む）',
      'AI検索最適化（ChatGPT等のAI回答に引用される構造設計）',
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
    q: 'どんな業種でも依頼できますか？',
    a: 'はい、業種は問いません。本業がコンサルティングセールスのため、業種ごとの商流やお客様の意思決定を踏まえたヒアリングから設計します。コーポレートサイトから飲食店まで対応しています。',
  },
  {
    q: 'AI検索最適化（AIAO）とは何ですか？',
    a: 'ChatGPTやPerplexityなどのAIが回答を作るときに、あなたのサイトを引用しやすくする構造設計のことです。Google検索だけに頼らない、これからの集客の入り口をつくります。プレミアムプランに含まれます。',
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
        {/* Page header */}
        <InView as="section" className="px-6 pb-s4 pt-40 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <p className="mb-8">
              <span className="reveal-wrap">
                <span className="reveal-line text-label font-mono text-ink-faint">PLANS</span>
              </span>
            </p>
            <h1 className="mb-6 text-display font-display font-light text-ink">
              <span className="reveal-wrap">
                <span className="reveal-line">Pricing</span>
              </span>
            </h1>
            <p className="max-w-md text-body text-ink-muted">
              追加費用・隠れたコストなし。すべて税抜き表示・初回お見積もり無料。
            </p>
          </div>
        </InView>

        {/* Plans */}
        <InView as="section" className="rise border-t border-line px-6 py-s4 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <div className="grid grid-cols-1 divide-y divide-line border border-line md:grid-cols-3 md:divide-x md:divide-y-0">
              {plans.map((plan) => (
                <div key={plan.name} className="relative flex flex-col p-8 md:p-10">
                  {plan.featured && (
                    <span
                      className="absolute inset-x-0 top-0 h-[2px] bg-accent"
                      style={{ boxShadow: '0 0 16px 1px var(--glow-accent)' }}
                      aria-hidden="true"
                    />
                  )}
                  {plan.featured && (
                    <span className="mb-3 text-label font-mono text-accent">MOST POPULAR</span>
                  )}
                  <p className="mb-4 text-label font-mono text-ink-faint">{plan.name}</p>

                  <div className="mb-1 flex items-baseline gap-1">
                    <span className="text-counter font-display font-light text-ink">{plan.price}</span>
                    <span className="text-meta text-ink-faint">{plan.unit}</span>
                  </div>
                  <p className="mb-6 text-label font-mono text-accent">{plan.period}</p>

                  <p className="mb-8 text-meta text-ink-muted">{plan.desc}</p>

                  <ul className="mb-4 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-meta">
                        <span className="mt-0.5 shrink-0 text-accent">✓</span>
                        <span className="text-ink-muted">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-meta opacity-40">
                        <span className="mt-0.5 shrink-0 text-ink-faint">—</span>
                        <span className="text-ink-faint">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button href="/contact" variant={plan.featured ? 'fill' : 'outline'} className="mt-8 w-full">
                    このプランで相談 →
                  </Button>
                </div>
              ))}
            </div>
            <p className="mt-6 text-meta text-ink-faint">
              ※ 表示価格はすべて税抜きです。ドメイン・ホスティング費用は別途。
            </p>
          </div>
        </InView>

        {/* Maintenance */}
        <InView as="section" className="rise border-t border-line px-6 py-s5 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <SectionHeading no="01" label="MAINTENANCE" className="mb-10" />
            <div className="grid items-start gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-title font-display font-light text-ink">保守プラン</h2>
                <p className="mb-8 text-body text-ink-muted">
                  作って終わりにしない。サイトを「資産」として育て続けます。
                </p>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-counter font-display font-light text-ink">{maintenance.price}</span>
                  <span className="text-meta text-ink-faint">{maintenance.unit}</span>
                </div>
                <Button href="/contact" variant="fill">保守プランを申し込む →</Button>
              </div>
              <ul className="border-t border-line">
                {maintenance.features.map((f) => (
                  <li key={f} className="flex items-center gap-4 border-b border-line py-6">
                    <span className="shrink-0 text-meta text-accent">✓</span>
                    <span className="text-body text-ink-muted">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </InView>

        {/* FAQ */}
        <InView as="section" className="rise border-t border-line px-6 py-s5 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <SectionHeading no="02" label="FAQ" className="mb-10" />
            <div className="border-t border-line">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-line">
                  <summary className="flex list-none items-center justify-between py-7 font-display text-lead font-light text-ink transition-colors duration-200 hover:text-accent">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-lead text-accent transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-8 text-body text-ink-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </InView>

        {/* CTA */}
        <section className="border-t border-line px-6 py-s5 md:px-10">
          <InView className="rise mx-auto flex w-full max-w-shell flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <h2 className="text-title font-display font-light leading-tight text-ink text-balance">
              どのプランか迷ったら、
              <br />
              まず相談を。
            </h2>
            <Link
              href="/contact"
              className="shrink-0 border border-ink bg-ink px-10 py-4 text-label font-mono text-bg transition-all duration-300 hover:bg-accent hover:border-accent active:scale-[0.97] active:duration-100"
            >
              FREE CONSULTATION →
            </Link>
          </InView>
        </section>
      </main>
      <Footer />
    </>
  )
}
