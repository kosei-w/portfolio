import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import InView from '@/components/motion/InView'
import TransitionLink from '@/components/motion/TransitionLink'

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

// 制作の流れ完全版 — 「任せて大丈夫」の可視化。お客様側の負担も先に明示する
const processSteps = [
  {
    no: '01',
    title: 'ヒアリング',
    days: 'DAY 0',
    you: '現状の課題とお客様像を話すだけ。資料の準備は不要です',
    me: '"誰から問い合わせが欲しいか"を一緒に固め、構成と見積もりを提示',
  },
  {
    no: '02',
    title: '設計',
    days: 'DAY 1–2',
    you: '既存の素材（写真・文章）があれば共有。なくても大丈夫',
    me: '集客導線とページ構成の設計。文章の下書き・写真の手配もこちらで',
  },
  {
    no: '03',
    title: 'デザイン',
    days: 'DAY 2–4',
    you: '途中経過を見て、率直なフィードバック',
    me: '世界観と読みやすさの両立。修正は回数無制限で対応',
  },
  {
    no: '04',
    title: '実装',
    days: 'DAY 4–6',
    you: '公開前の最終確認',
    me: '表示速度1秒未満・スマホ最優先で実装。AI検索対応の構造も',
  },
  {
    no: '05',
    title: '公開・運用',
    days: 'DAY 7–',
    you: '公開の承認',
    me: 'ドメイン設定と公開作業。公開後サポート・保守プランで伴走',
  },
]

// リスク逆転 — すべて既存の約束の集約（新しいコミットは作らない）
const assurances = [
  {
    title: '追加費用なし',
    desc: '見積もり提示額以外の費用は発生しません。発生しうる実費（ドメイン等）は事前にお伝えします。',
  },
  {
    title: '修正は回数無制限',
    desc: '制作期間中の修正に回数制限はありません。"なんか違う"を残したまま公開しません。',
  },
  {
    title: '公開後サポート付き',
    desc: '全プランに公開後サポート（1〜6ヶ月）が含まれます。作って終わりにしません。',
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
  {
    q: '公開後の修正や更新はいくらかかりますか？',
    a: '各プランに公開後サポート（1〜6ヶ月）が付いており、期間中の軽微な修正は無料です。その後は保守プラン（月¥15,000）か、単発のお見積もりで対応します。"更新費が後から高かった"は起こしません。',
  },
  {
    q: 'AIを使うから安い、ということですか？',
    a: 'いいえ。AIで浮いた時間を、設計・文章・作り込みに再投資しています。「同じ予算で、より高い品質を」がAIを使う理由です。速さは、品質を削らずに手に入れています。',
  },
  {
    q: '打ち合わせはオンラインですか？',
    a: 'オンライン（Zoom等）で全国対応しています。都内近郊であれば対面のご相談も可能です。ご連絡には1営業日以内に返信します。',
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

            {/* リスク逆転 — 発注の恐怖を消す3つの約束 */}
            <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
              {assurances.map((item) => (
                <div key={item.title} className="bg-bg p-6 md:p-8">
                  <p className="mb-2 font-mono text-sm font-medium text-ink">
                    <span className="mr-3 text-accent">✓</span>
                    {item.title}
                  </p>
                  <p className="text-meta text-ink-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* (01) Process — 完全版 */}
        <InView as="section" className="rise border-t border-line px-6 py-s5 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionHeading no="01" label="PROCESS" className="mb-6" />
                <h2 className="text-title font-display font-light tracking-jp text-ink">制作の流れ</h2>
              </div>
              <p className="text-meta font-mono text-ink-faint">ご連絡には1営業日以内に返信します</p>
            </div>
            <ol className="border-t border-line">
              {processSteps.map((step) => (
                <li
                  key={step.no}
                  className="grid gap-4 border-b border-line py-8 md:grid-cols-[200px_1fr_1fr] md:gap-10"
                >
                  <div>
                    <p className="mb-2 text-label font-mono text-accent">({step.no})</p>
                    <p className="mb-1 font-mono text-sm font-medium text-ink">{step.title}</p>
                    <p className="text-label font-mono text-ink-faint">{step.days}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-label font-mono text-ink-faint">お客様がすること</p>
                    <p className="text-meta text-ink-muted">{step.you}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-label font-mono text-ink-faint">こちらがやること</p>
                    <p className="text-meta text-ink-muted">{step.me}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-meta text-ink-faint">
              ※ 日数はスターター（最短7日）の目安です。スタンダードは最短10日、プレミアムは最短14日。
            </p>
          </div>
        </InView>

        {/* Maintenance */}
        <InView as="section" className="rise border-t border-line px-6 py-s5 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <SectionHeading no="02" label="MAINTENANCE" className="mb-10" />
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
            <SectionHeading no="03" label="FAQ" className="mb-10" />
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
            <TransitionLink
              href="/contact"
              className="shrink-0 border border-ink bg-ink px-10 py-4 text-label font-mono text-bg transition-all duration-300 hover:bg-accent hover:border-accent active:scale-[0.97] active:duration-100"
            >
              FREE CONSULTATION →
            </TransitionLink>
          </InView>
        </section>
      </main>
      <Footer />
    </>
  )
}
