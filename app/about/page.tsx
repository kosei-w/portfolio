import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Kosei | HP制作',
  description: '医療DX出身のコンサルタントがHP制作を始めた理由と、4つの強み・制作への姿勢をご紹介します。',
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
            <p className="text-[#f59e0b] text-xs font-black tracking-[0.3em] uppercase mb-6">About</p>
            <h1
              className="text-white font-black leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', textWrap: 'balance' }}
            >
              Koseiについて
            </h1>
            <p className="text-white/40 text-base mt-4 max-w-md leading-relaxed">
              医療DXのコンサルタントが、なぜHP制作を始めたのか。強みと制作への姿勢を全部書きました。
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="bg-white py-24 md:py-36 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <SectionLabel num="01" label="Story" />

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2
                  className="text-[#111] font-black leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textWrap: 'balance' }}
                >
                  「なんでこんなに古いサイトのまま
                  <br />
                  商売してるんだろう」と思った。
                </h2>
              </div>
              <div className="space-y-6 text-[#555] leading-[1.9] text-lg lg:pt-4">
                <p>
                  本業は医療DX SaaS企業のコンサルティングセールス。
                  病院・クリニック・医療法人を日々訪問して気づいたことがある。
                </p>
                <p>
                  <strong className="text-[#111]">「HPが信頼を大きく左右している」</strong>こと。
                  スマホで崩れていたり、2010年代のデザインのまま止まっていたり、
                  何を売っているのかパッと伝わらなかったり。
                </p>
                <p>
                  同時に、「制作会社に頼むと高い・遅い・融通が利かない」という声も耳にした。
                  150万円かけて作ってもらったのに、2ヶ月かかった上に更新できない——そんな話を何度も聞いた。
                </p>
                <p>
                  最初のクライアントのサイトが公開されたとき、
                  「思ったより全然早かった。しかもかっこいい」という言葉をもらった。
                </p>
                <p>
                  <strong className="text-[#111]">自分の知識とスキルで、この課題を解ける。</strong>
                  そう確信して、HP制作を始めた。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="bg-[#fafafa] py-24 md:py-36 px-8 md:px-16 border-t border-[#e5e5e5]">
          <div className="max-w-7xl mx-auto">
            <SectionLabel num="02" label="Strengths" />
            <h2
              className="text-[#111] font-black leading-tight mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textWrap: 'balance' }}
            >
              4つの強み
            </h2>
            <div className="border-t border-[#e5e5e5]">
              {strengths.map((item) => (
                <div
                  key={item.num}
                  className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-[#f0f0f0] group"
                >
                  <span className="text-[#f59e0b] font-black text-xs w-6 shrink-0 mt-1">{item.num}</span>
                  <p className="text-[#111] font-bold text-lg md:w-52 shrink-0 group-hover:text-[#f59e0b] transition-colors duration-200">
                    {item.title}
                  </p>
                  <p className="text-[#777] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality pillars */}
        <section className="bg-[#0a0f1e] py-24 md:py-36 px-8 md:px-16 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: 'radial-gradient(rgba(245,158,11,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-[#f59e0b] text-xs font-black tracking-[0.3em] uppercase shrink-0">
                03 / Quality
              </span>
              <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
            </div>
            <h2
              className="text-white font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textWrap: 'balance' }}
            >
              品質を支える6つの柱
            </h2>
            <p className="text-white/40 text-lg mb-16 max-w-xl">
              エンタープライズ水準の技術基盤で、公開後も安定して動き続けるサイトを作ります。
            </p>
            <div className="border-t border-white/10">
              {qualities.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col md:flex-row gap-4 md:gap-12 py-6 border-b border-white/5"
                >
                  <p className="text-white font-bold md:w-36 shrink-0">{item.label}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24 md:py-32 px-8 md:px-16 border-t border-[#e5e5e5]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start md:items-end justify-between">
            <div>
              <p className="text-[#f59e0b] text-xs font-black tracking-[0.3em] uppercase mb-6">Contact</p>
              <h2
                className="text-[#111] font-black leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textWrap: 'balance' }}
              >
                まずは話を
                <br />
                聞いてみませんか？
              </h2>
              <p className="text-[#777] text-base mt-4 max-w-xs leading-relaxed">
                30分・無料・オンライン。「まだぼんやりしている」でも大丈夫です。
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center bg-[#f59e0b] text-[#0a0f1e] font-black px-10 py-5 text-lg hover:bg-[#fbbf24] transition-colors duration-200"
            >
              無料相談を申し込む →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
