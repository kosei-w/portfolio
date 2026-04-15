import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Kosei Idezuka',
  description: '医療DXのコンサルタントがHP制作を始めた理由と、4つの強みをご紹介します。',
}

const strengths = [
  {
    num: '01',
    title: '課題を掴むヒアリング力',
    desc: '医療DX SaaS企業でのコンサルティングセールス経験から、「何を作るか」より「何のために作るか」を先に深掘りします。課題の本質を掴んでから設計するので、作ったあとに「なんか違う」が起きない。',
  },
  {
    num: '02',
    title: '独自の高速制作プロセス',
    desc: '制作会社で2〜3ヶ月かかるところを、最短10日で対応。業界最先端の開発手法と、個人だからこそ実現できる意思決定の速さが、このスピードを生み出しています。',
  },
  {
    num: '03',
    title: '医療・ヘルスケア領域の知見',
    desc: '医療DX業界に身を置いているから、クリニック・医療法人・ヘルスケアサービスの訴求ポイントをわかっています。「患者さんへの安心感をどう伝えるか」を業種理解ゼロの制作会社より深く考えられる。',
  },
  {
    num: '04',
    title: '作って終わりにしない設計',
    desc: '公開がゴールではなく、「集客・問い合わせ獲得」がゴール。公開後の保守・更新・SEO対応まで一気通貫で担います。月¥15,000〜の保守プランで、サイトを「資産」として育て続けます。',
  },
]

const qualities = [
  { label: '表示速度', desc: '世界最高水準の配信インフラで、どこからアクセスしても爆速で表示' },
  { label: 'デザイン品質', desc: 'テンプレートは使わない。ブランドに合わせたフルオーダーの設計' },
  { label: 'アニメーション', desc: '見る人を引き込む、洗練されたスクロール演出' },
  { label: 'メール通知', desc: '問い合わせが来たら即通知・自動返信まで自動化' },
  { label: 'スマホ対応', desc: 'すべての画面サイズで崩れない、モバイルファースト設計' },
  { label: 'SEO対応', desc: '検索エンジンに正しく認識される構造化・メタ設定' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">

        {/* Page header */}
        <div className="px-8 md:px-14 pt-16 pb-0 border-b border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto pb-16">
            <p className="font-display text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase mb-10">
              ABOUT
            </p>
            <h1
              className="font-display font-extrabold text-[var(--ink)] leading-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', letterSpacing: '-0.03em', textWrap: 'balance' }}
            >
              Kosei
              <br />
              Idezuka
            </h1>
          </div>
        </div>

        {/* Story */}
        <ScrollReveal className="px-8 md:px-14 py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-28">
            <div>
              <p className="font-display text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase mb-10">
                01 / STORY
              </p>
              <h2
                className="font-display font-extrabold text-[var(--ink)] leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                「なんでこんなに古いサイトのまま
                商売してるんだろう」と思った。
              </h2>
            </div>
            <div className="space-y-6 text-[var(--muted)] leading-[1.9] md:pt-20">
              <p>
                本業は医療DX SaaS企業のコンサルティングセールス。
                病院・クリニック・医療法人を日々訪問して気づいたことがある。
              </p>
              <p>
                <strong className="text-[var(--ink)]">「HPが信頼を大きく左右している」</strong>こと。
                スマホで崩れていたり、2010年代のデザインのまま止まっていたり。
              </p>
              <p>
                同時に、「制作会社に頼むと高い・遅い・融通が利かない」という声も耳にした。
                150万円・2ヶ月・更新できない——そんな話を何度も聞いた。
              </p>
              <p>
                最初のクライアントのサイトが公開されたとき、
                「思ったより全然早かった。しかもかっこいい」という言葉をもらった。
              </p>
              <p>
                <strong className="text-[var(--ink)]">自分の知識とスキルで、この課題を解ける。</strong>
                そう確信して、HP制作を始めた。
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Strengths */}
        <ScrollReveal className="border-t border-[var(--border)] px-8 md:px-14 py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-display text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase mb-16">
              02 / STRENGTHS
            </p>
            <div className="border-t border-[var(--border)]">
              {strengths.map((item) => (
                <div key={item.num} className="flex flex-col md:flex-row gap-6 md:gap-16 py-8 border-b border-[var(--border)] group">
                  <span className="font-display font-bold text-[var(--gold)] text-xs shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <p
                    className="font-display font-bold text-[var(--ink)] text-base md:w-56 shrink-0 group-hover:text-[var(--gold)] transition-colors duration-200"
                  >
                    {item.title}
                  </p>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Quality pillars */}
        <ScrollReveal className="border-t border-[var(--border)] px-8 md:px-14 py-24 md:py-36 bg-[var(--ink)]">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-display text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-16">
              03 / QUALITY
            </p>
            <h2
              className="font-display font-extrabold text-[var(--bg)] leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              品質を支える6つの柱
            </h2>
            <p className="text-white/30 text-sm mb-16 max-w-lg leading-relaxed">
              エンタープライズ水準の技術基盤で、公開後も安定して動き続けるサイトを作ります。
            </p>
            <div className="border-t border-white/10">
              {qualities.map((item) => (
                <div key={item.label} className="flex flex-col md:flex-row gap-4 md:gap-16 py-6 border-b border-white/10">
                  <p className="font-display font-bold text-[var(--bg)] text-sm md:w-36 shrink-0">{item.label}</p>
                  <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="border-t border-[var(--border)] px-8 md:px-14 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-10 items-start md:items-end justify-between">
            <div>
              <p className="font-display text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase mb-8">
                CONTACT
              </p>
              <h2
                className="font-display font-extrabold text-[var(--ink)] leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                まずは話を
                <br />
                聞いてみませんか？
              </h2>
              <p className="text-[var(--muted)] text-sm mt-4 max-w-xs leading-relaxed">
                30分・無料・オンライン。「まだぼんやりしている」でも大丈夫です。
              </p>
            </div>
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
