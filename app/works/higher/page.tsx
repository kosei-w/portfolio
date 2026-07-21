import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import StrikeLine from '@/components/StrikeLine'
import Button from '@/components/Button'
import InView from '@/components/motion/InView'
import TransitionLink from '@/components/motion/TransitionLink'

export const metadata: Metadata = {
  title: 'HIGHER LLC — Case Study | Kosei Idezuka',
  description:
    'Webに存在しなかった会社を"見つかる会社"に。HIGHER LLCコーポレートサイトをゼロから設計・実装し、公開数日で初の問い合わせ。表示速度1秒未満・Lighthouse 95+。',
}

// 根本課題（症状ではなく構造）
const challenges = [
  '会社名で検索しても情報が出てこない——紹介で興味を持った人の"確認"の受け皿がない',
  'ブランドの世界観（プレミアム×親しみやすさ）を伝える手段が存在しない',
  '問い合わせを受け取る仕組みそのものがない',
]

// 制約＝設計条件。「現実の条件で戦える」ことの証明
const constraints = [
  'ブランドガイドラインなし——ロゴ・色・書体の決めごとゼロからの立ち上げ',
  '使える素材（写真・原稿）もゼロ。撮影・文章からこちらで用意',
  '日本語圏とグローバル、両方の読者を想定',
  '短納期。それでも"安っぽく見えない"ことが絶対条件',
]

// 各判断に「なぜ」を添える——ここが差別化の本体
const approaches = [
  {
    title: 'ブランドディスカバリーから始める',
    desc: '"どんな見た目にするか"ではなく、"誰に何を信じてほしいか"を最初に固めました。ここに一番時間をかけたことで、デザイン工程の手戻りはゼロ。営業のヒアリングと同じで、要件が固まれば実装は速いです。',
  },
  {
    title: 'ベージュ×セリフ体の視覚言語',
    desc: '"プレミアムだが、冷たくない"の両立が狙いです。黒×ゴシックの威圧感でも、パステルの軽さでもなく、温かみのあるベージュとセリフ体で「信頼できて、話しかけやすい」印象に。',
  },
  {
    title: '1ページ完結の構成',
    desc: '立ち上げ期はページを分けるより、1本のスクロールで「物語→サービス→問い合わせ」へ流すほうが迷いが生まれません。読み終わった瞬間に連絡できる導線にしました。',
  },
  {
    title: '"確実に届く"問い合わせフォーム',
    desc: 'サーバー側の入力検証・自動メール通知・スパム対策まで実装。問い合わせが迷子になるサイトは営業資産になりません。',
  },
]

const craftDetails = [
  {
    label: 'TYPOGRAPHY',
    desc: '和文と欧文セリフの混植。サイズの階層を絞り、余白を大きく取って"静けさ"を作っています。高級感は装飾ではなく、余白と抑制から生まれます。',
  },
  {
    label: 'MOTION',
    desc: 'スクロール連動の動きは控えめに。読む速度を邪魔しない範囲で、上質感だけを足しました。動きは主役ではなく、内容を引き立てる照明です。',
  },
  {
    label: 'PERFORMANCE',
    desc: '画像最適化とエッジ配信で表示1秒未満、Lighthouse 95+（全カテゴリ）。「速い」は体感できる唯一の技術品質です。',
  },
  {
    label: 'AI × HUMAN',
    desc: 'AIは制作の出発点として使い倒し、視覚階層・余白・動きの最終判断はすべて人間が行います。浮いた時間は設計と作り込みに再投資——速いのに雑にならない理由です。',
  },
]

const resultStats = [
  { value: '<1s', label: 'LOAD TIME' },
  { value: '95+', label: 'LIGHTHOUSE' },
  { value: '数日', label: '公開 → 初問い合わせ' },
]

const gallery = [
  {
    src: '/images/works/higher/hero.png',
    alt: 'HIGHER LLC トップページ',
    caption: 'トップ——ベージュ×セリフ体で"プレミアムだが冷たくない"第一印象を作る',
    aspect: 'aspect-[16/10]',
  },
  {
    src: '/images/works/higher/services.png',
    alt: 'HIGHER LLC サービス紹介セクション',
    caption: 'サービス紹介——情報量を絞り、スクロールのリズムで理解を進める',
    aspect: 'aspect-video',
  },
  {
    src: '/images/works/higher/contact.png',
    alt: 'HIGHER LLC お問い合わせフォーム',
    caption: '問い合わせ——入力項目は最小限に、送信の心理的ハードルを下げる',
    aspect: 'aspect-video',
  },
]

export default function HigherCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — 成果型見出し */}
        <section className="border-b border-line px-6 pb-s4 pt-40 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <TransitionLink
              href="/works"
              className="mb-12 inline-block text-label font-mono text-ink-faint transition-colors duration-300 hover:text-accent"
            >
              ← WORKS
            </TransitionLink>

            <p className="mb-6 text-label font-mono text-accent">CASE STUDY — HIGHER LLC</p>

            <h1 className="mb-8 max-w-4xl text-title font-display font-light leading-tight tracking-jp text-ink md:text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Webに存在しなかった会社を、
              <br />
              <span className="font-serif">&ldquo;見つかる会社&rdquo;</span>に。
            </h1>

            <StrikeLine className="mb-8 max-w-[26rem]" />

            <div className="flex flex-wrap gap-x-8 gap-y-2 text-meta font-mono text-ink-faint">
              <span>CLIENT — HIGHER LLC</span>
              <span>YEAR — 2026</span>
              <span>ROLE — Design / Development</span>
              <span>STACK — Next.js / Tailwind CSS / Vercel / MongoDB</span>
            </div>
          </div>
        </section>

        {/* (01) Client */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="01" label="CLIENT" className="pt-1" />
            <p className="max-w-2xl text-body text-ink-muted">
              HIGHER LLCは「人の可能性を最大限に引き出す」ことを掲げる会社です。事業は動き出しているのに、その信頼性を伝える場所がWeb上に存在しない——コーポレートサイトの新規立ち上げをご依頼いただきました。
            </p>
          </div>
        </InView>

        {/* (02) Challenge — 症状ではなく根本課題 */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="02" label="CHALLENGE" className="pt-1" />
            <div className="max-w-2xl space-y-6">
              <p className="text-body text-ink-muted">
                表面的な症状は「サイトがない」。でも本当の課題は、<span className="text-ink">紹介で興味を持った人が次に取る行動——検索して、確認して、連絡する——の導線が途中で切れていること</span>でした。
              </p>
              <div className="space-y-4">
                {challenges.map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="mt-1 shrink-0 font-mono text-accent">—</span>
                    <p className="text-body text-ink-muted">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-body text-ink-muted">
                この状態を放置すると、紹介の熱が冷めるたびに商談前の離脱が起きます。目に見えない機会損失が、毎週静かに積み上がっていく構造でした。
              </p>
            </div>
          </div>
        </InView>

        {/* (03) Constraints — 制約は言い訳ではなく設計条件 */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="03" label="CONSTRAINTS" className="pt-1" />
            <div className="max-w-2xl space-y-6">
              <p className="text-body text-ink-muted">
                理想論では戦えません。この案件の設計条件は次の4つでした。
              </p>
              <div className="space-y-4">
                {constraints.map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="mt-1 shrink-0 font-mono text-accent">—</span>
                    <p className="text-body text-ink-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InView>

        {/* (04) Approach — 各判断の「なぜ」 */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="04" label="APPROACH" className="pt-1" />
            <div className="max-w-2xl space-y-8">
              {approaches.map((item, i) => (
                <div key={item.title}>
                  <h3 className="mb-2 flex items-baseline gap-3 text-lead font-medium tracking-jp text-ink">
                    <span className="text-label font-mono text-accent">0{i + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-body text-ink-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* (05) Craft — 細部の意思決定を言語化できる=手を動かせる証拠 */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="05" label="CRAFT" className="pt-1" />
            <div className="grid max-w-3xl gap-px border border-line bg-line sm:grid-cols-2">
              {craftDetails.map((item) => (
                <div key={item.label} className="bg-bg p-6 md:p-8">
                  <p className="mb-3 text-label font-mono text-accent">{item.label}</p>
                  <p className="text-meta text-ink-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* (06) Result — 測定可能な成果 + 定性 + 声 */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="06" label="RESULT" className="pt-1" />
            <div className="max-w-2xl space-y-8">
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {resultStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-counter font-display font-light text-accent">{stat.value}</p>
                    <p className="mt-1 text-label font-mono text-ink-faint">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-body text-ink-muted">
                構想から公開まで一貫して担当し、公開数日でサイト経由の初問い合わせが届きました。&ldquo;検索しても出てこない会社&rdquo;から、&ldquo;調べれば信頼が確認できる会社&rdquo;へ。サイトが営業の受け皿として動き始めています。
              </p>
              <blockquote className="border-l-2 border-accent py-2 pl-6">
                <p className="mb-2 font-serif text-lead text-ink">
                  &ldquo;思ったより全然早かった。しかもかっこいい。&rdquo;
                </p>
                <cite className="text-label font-mono not-italic text-ink-faint">
                  — HIGHER LLC 代表
                </cite>
              </blockquote>
            </div>
          </div>
        </InView>

        {/* (07) Gallery — 全画像にキャプション（流し読みでも意図が伝わる） */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="07" label="GALLERY" className="pt-1" />
            <div className="space-y-10">
              {gallery.map((shot) => (
                <figure key={shot.src}>
                  <div className={`media-reveal relative ${shot.aspect} w-full overflow-hidden bg-surface`}>
                    <div data-zoom className="absolute inset-0">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(min-width: 768px) 60vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-meta font-mono text-ink-faint">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
              <figure>
                <div className="media-reveal relative aspect-[390/844] w-40 overflow-hidden bg-surface sm:w-48">
                  <div data-zoom className="absolute inset-0">
                    <Image
                      src="/images/works/higher/mobile.png"
                      alt="HIGHER LLC モバイル表示"
                      fill
                      sizes="200px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-meta font-mono text-ink-faint">
                  モバイル——閲覧の主戦場。タップ領域と読みやすさを最優先
                </figcaption>
              </figure>
            </div>
          </div>
        </InView>

        {/* CTA — 低摩擦の次アクション */}
        <section className="px-6 py-s5 md:px-10">
          <InView className="rise mx-auto flex w-full max-w-shell flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="mb-4 text-label font-mono text-ink-faint">NEXT</p>
              <p className="text-lead tracking-jp text-ink">
                「うちも、検索しても出てこない」——そんな状態なら、まず15分だけ話しませんか。
              </p>
              <p className="mt-3 text-meta text-ink-muted">
                現状を聞いて、必要なもの・要らないものを整理するところからで大丈夫です。
              </p>
            </div>
            <Button href="/contact">GET IN TOUCH</Button>
          </InView>
        </section>
      </main>
      <Footer />
    </>
  )
}
