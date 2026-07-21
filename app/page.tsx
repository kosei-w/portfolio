import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShowcaseRow from '@/components/ShowcaseRow'
import SectionHeading from '@/components/SectionHeading'
import InView from '@/components/motion/InView'
import TransitionLink from '@/components/motion/TransitionLink'
import LocalTime from '@/components/LocalTime'

export const metadata: Metadata = {
  title: 'Kosei Idezuka — Web Designer & Developer',
  description: '営業出身のフリーランスWebデザイナー。デザインではなく「問い合わせが来る」サイトを納品。最短7日、AI検索（ChatGPT等）対応の設計。Next.js + Vercel。',
}

const delay = (s: number) => ({ '--reveal-delay': `${s}s` } as CSSProperties)

// 発注前の不安を先回りで潰す（B: 日本のSMB発注者が必ず確認する要素）
const promises = [
  {
    no: '01',
    title: '写真も文章も、丸ごと任せられる',
    desc: '素材集めで止まるのが、公開が遅れるいちばんの原因。撮影・文章もこちらで用意するので、"何を準備すればいいか分からない"が起きません。',
  },
  {
    no: '02',
    title: '最短7日で公開',
    desc: 'AIを使い倒す制作フローで、ヒアリングから公開まで最短7日。浮いた時間は設計と作り込みに再投資します。速いから雑、にはしません。',
  },
  {
    no: '03',
    title: '作って終わりにしない',
    desc: '営業時間の変更も、メニューの差し替えも。公開後の更新・改善まで伴走します。サイトは公開してからが本番です。',
  },
  {
    no: '04',
    title: 'AI検索からも見つかる',
    desc: 'Google検索（SEO）に加えて、ChatGPTなどのAI検索に引用される構造設計（AIAO）まで対応。集客の入り口の変化を先回りします。',
  },
]

const processSteps = [
  {
    no: '01',
    title: 'ヒアリング',
    days: 'DAY 0',
    desc: '"どんなサイトにしたいか"ではなく、"誰から問い合わせが欲しいか"から聞きます。',
  },
  {
    no: '02',
    title: '設計',
    days: 'DAY 1–2',
    desc: '集客の導線とページ構成を先に固める。文章と写真もここで揃えます。',
  },
  {
    no: '03',
    title: 'デザイン',
    days: 'DAY 2–4',
    desc: '世界観と読みやすさの両立。途中経過を見ながら一緒に決めます。',
  },
  {
    no: '04',
    title: '実装',
    days: 'DAY 4–6',
    desc: '表示速度1秒未満・スマホ最優先。細部の動きまで作り込みます。',
  },
  {
    no: '05',
    title: '公開・運用',
    days: 'DAY 7–',
    desc: '公開して終わりではなく、更新と改善に伴走します。',
  },
]

// 価格・納期は app/plans/page.tsx の plans 配列と同期させること
const planDigest = [
  { name: 'STARTER', price: '¥128,000', period: '最短7日', featured: false },
  { name: 'STANDARD', price: '¥198,000', period: '最短10日', featured: true },
  { name: 'PREMIUM', price: '¥350,000', period: '最短14日', featured: false },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — ローダーのパネル分割と連続して下から突き上げる（.hero-reveal契約） */}
        <section className="flex min-h-screen flex-col justify-center px-6 pt-24 md:px-10">
          <div className="hero-reveal mx-auto w-full max-w-shell">
            <p className="reveal-wrap mb-8">
              <span className="reveal-line text-label font-mono text-ink-faint">
                SALES-DRIVEN WEB DESIGN
              </span>
            </p>

            <h1 className="mb-8 text-display font-display font-light text-ink">
              <span className="reveal-wrap">
                <span className="reveal-line" style={delay(0.08)}>Kosei</span>
              </span>{' '}
              <span className="reveal-wrap">
                <span className="reveal-line" style={delay(0.16)}>Idezuka</span>
              </span>
            </h1>

            <p className="reveal-wrap mb-10">
              <span className="reveal-line text-lead font-medium tracking-jp text-ink" style={delay(0.26)}>
                デザインではなく、<span className="font-serif">&ldquo;問い合わせ&rdquo;</span>を納品する。
              </span>
            </p>

            <span className="strike-line mb-10 max-w-[26rem]" style={delay(0.4)} aria-hidden="true" />

            <p className="rise mb-8 max-w-lg text-body text-ink-muted" style={delay(0.5)}>
              本業はB2Bのコンサルティングセールス。数字を追う営業の現場から、&ldquo;見た目がいいだけ&rdquo;のサイトでは問い合わせが来ないことを知っています。ヒアリングから公開まで最短7日。Google検索とAI検索の両方から見つかる設計で、サイトをあなたの営業資産に変えます。
            </p>

            <div className="rise flex flex-wrap items-center justify-between gap-x-8 gap-y-3" style={delay(0.6)}>
              <p className="text-meta font-mono text-ink-faint">
                最短7日納品 / LIGHTHOUSE 95+ / AI検索（AIAO）対応
              </p>
              <p className="flex flex-wrap items-center gap-x-6 gap-y-2 text-meta font-mono text-ink-faint">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
                  AVAILABLE
                </span>
                <span>
                  TOKYO, JP — <LocalTime /> JST
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* (01) Selected Work — 憧れと証拠。フルブリード没入型 */}
        <section className="border-t border-line py-s5">
          <div className="mx-auto mb-s3 flex w-full max-w-shell items-end justify-between px-6 md:px-10">
            <SectionHeading no="01" label="SELECTED WORK" />
            <TransitionLink
              href="/works"
              className="text-label font-mono text-ink-faint transition-colors duration-300 hover:text-accent"
            >
              VIEW ALL →
            </TransitionLink>
          </div>

          <ShowcaseRow
            title="HIGHER LLC"
            year="2026"
            role="Design / Development"
            href="/works/higher"
            imageSrc="/images/works/higher/hero.png"
            imageAlt="HIGHER LLC コーポレートサイトのヒーロー画面"
            stats={['公開数日で初の問い合わせ', '表示速度 1秒未満', 'LIGHTHOUSE 95+']}
          />
        </section>

        {/* (02) Promise — 発注前の不安を先に潰す */}
        <InView as="section" className="rise border-t border-line px-6 py-s5 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <SectionHeading no="02" label="PROMISE" className="mb-6" />
            <h2 className="mb-4 text-title font-display font-light tracking-jp text-ink">4つの約束</h2>
            <p className="mb-s3 max-w-lg text-body text-ink-muted">
              発注前の&ldquo;よくある不安&rdquo;は、先に潰しておきます。
            </p>
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {promises.map((item) => (
                <div key={item.no} className="bg-bg p-8 md:p-10">
                  <p className="mb-4 text-label font-mono text-accent">({item.no})</p>
                  <h3 className="mb-3 text-lead font-medium tracking-jp text-ink">{item.title}</h3>
                  <p className="text-body text-ink-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* (03) Process — 任せて大丈夫、の可視化 */}
        <InView as="section" className="rise border-t border-line px-6 py-s5 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <div className="mb-s3 flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionHeading no="03" label="PROCESS" className="mb-6" />
                <h2 className="text-title font-display font-light tracking-jp text-ink">制作の流れ</h2>
              </div>
              <p className="text-meta font-mono text-ink-faint">ご連絡には1営業日以内に返信します</p>
            </div>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 md:grid-cols-5">
              {processSteps.map((step) => (
                <li key={step.no} className="bg-bg p-6 md:p-7">
                  <p className="mb-6 flex items-baseline justify-between">
                    <span className="text-label font-mono text-accent">({step.no})</span>
                    <span className="text-label font-mono text-ink-faint">{step.days}</span>
                  </p>
                  <h3 className="mb-3 font-mono text-sm font-medium text-ink">{step.title}</h3>
                  <p className="text-meta text-ink-muted">{step.desc}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-meta text-ink-faint">
              制作期間中の修正は回数無制限。詳しい流れと料金は{' '}
              <TransitionLink href="/plans" className="text-ink-muted underline underline-offset-4 transition-colors duration-300 hover:text-accent">
                プランページ
              </TransitionLink>
              へ。
            </p>
          </div>
        </InView>

        {/* (04) Voice — 人は人に発注する */}
        <InView as="section" className="rise border-t border-line px-6 py-s5 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-16 md:grid-cols-2">
            <div>
              <SectionHeading no="04" label="CLIENT VOICE" className="mb-8" />
              <blockquote>
                <p className="mb-6 font-serif text-title font-light leading-snug text-ink">
                  &ldquo;思ったより全然早かった。
                  <br />
                  しかもかっこいい。&rdquo;
                </p>
                <cite className="text-label font-mono not-italic text-ink-faint">
                  — HIGHER LLC 代表（コーポレートサイト制作 / 2026）
                </cite>
              </blockquote>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex items-center gap-6">
                <Image
                  src="/avatar.png"
                  alt="出塚航世の似顔絵イラスト"
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 border border-line invert"
                />
                <div>
                  <p className="mb-1 font-mono text-sm font-medium text-ink">出塚航世 / Kosei Idezuka</p>
                  <p className="text-meta text-ink-muted">
                    本業はB2Bのコンサルティングセールス。&ldquo;売れる導線&rdquo;から逆算してサイトを設計します。
                  </p>
                </div>
              </div>
              <TransitionLink
                href="/about"
                className="mt-8 inline-block text-label font-mono text-ink-faint transition-colors duration-300 hover:text-accent"
              >
                MORE ABOUT ME →
              </TransitionLink>
            </div>
          </div>
        </InView>

        {/* (05) Pricing — 明朗さそのものが信頼 */}
        <InView as="section" className="rise border-t border-line px-6 py-s5 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <div className="mb-s3 flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionHeading no="05" label="PRICING" className="mb-6" />
                <h2 className="text-title font-display font-light tracking-jp text-ink">明朗な3プラン</h2>
              </div>
              <TransitionLink
                href="/plans"
                className="text-label font-mono text-ink-faint transition-colors duration-300 hover:text-accent"
              >
                VIEW ALL PLANS →
              </TransitionLink>
            </div>
            <div className="grid grid-cols-1 divide-y divide-line border border-line md:grid-cols-3 md:divide-x md:divide-y-0">
              {planDigest.map((plan) => (
                <TransitionLink
                  key={plan.name}
                  href="/plans"
                  className="group relative block p-8 transition-colors duration-300 hover:bg-surface md:p-10"
                >
                  {plan.featured && (
                    <span
                      className="absolute inset-x-0 top-0 h-[2px] bg-accent"
                      style={{ boxShadow: '0 0 16px 1px var(--glow-accent)' }}
                      aria-hidden="true"
                    />
                  )}
                  <p className="mb-4 text-label font-mono text-ink-faint">{plan.name}</p>
                  <p className="flex items-baseline gap-1">
                    <span className="text-counter font-display font-light text-ink">{plan.price}</span>
                    <span className="text-meta text-ink-faint">〜</span>
                  </p>
                  <p className="mt-2 text-label font-mono text-accent">{plan.period}</p>
                </TransitionLink>
              ))}
            </div>
            <p className="mt-6 text-meta text-ink-faint">
              追加費用なし・初回見積もり無料。制作期間中の修正は回数無制限です。
            </p>
          </div>
        </InView>
      </main>
      <Footer />
    </>
  )
}
