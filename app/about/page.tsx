import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import Link from 'next/link'

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
        <PageHero
          eyebrow="About"
          title="Koseiについて"
          desc="医療DXのコンサルタントが、なぜHP制作を始めたのか。強みと制作への姿勢を全部書きました。"
        />

        {/* Story */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-6">Story</p>
              <h2
                className="text-[#0a0f1e] font-black leading-tight mb-10"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
              >
                「なんでこんなに古いサイトのまま
                <br />
                商売してるんだろう」と思った。
              </h2>
            </div>
            <div className="space-y-6 text-[#374151] leading-[1.9] text-lg lg:pt-20">
              <p>
                本業は医療DX SaaS企業のコンサルティングセールス。
                病院・クリニック・医療法人を日々訪問して気づいたことがある。
              </p>
              <p>
                <strong className="text-[#0a0f1e]">「HPが信頼を大きく左右している」</strong>こと。
                スマホで崩れていたり、2010年代のデザインのまま止まっていたり、
                何を売っているのかパッと伝わらなかったり。
              </p>
              <p>
                同時に、「制作会社に頼むと高い・遅い・融通が利かない」という声も耳にした。
                150万円かけて作ってもらったのに、2ヶ月かかった上に更新できない——
                そんな話を何度も聞いた。
              </p>
              <p>
                最初のクライアントのサイトが公開されたとき、
                「思ったより全然早かった。しかもかっこいい」という言葉をもらった。
              </p>
              <p>
                <strong className="text-[#0a0f1e]">自分の知識とスキルで、この課題を解ける。</strong>
                そう確信して、HP制作を始めた。
              </p>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-24 md:py-32 px-6 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-4">Strengths</p>
            <h2
              className="text-[#0a0f1e] font-black leading-tight mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              4つの強み
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {strengths.map((item) => (
                <div
                  key={item.num}
                  className="bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#f59e0b] hover:shadow-xl transition-all duration-300 group"
                >
                  <p
                    className="font-black mb-4 text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #f59e0b44, #f59e0b)',
                      fontSize: '3rem',
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </p>
                  <h3 className="text-[#0a0f1e] font-black text-xl mb-3 group-hover:text-[#f59e0b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality pillars */}
        <section className="py-24 md:py-32 px-6 bg-[#0a0f1e] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(245,158,11,0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto">
            <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-4">Quality</p>
            <h2
              className="text-white font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              品質を支える6つの柱
            </h2>
            <p className="text-[#9ca3af] text-lg mb-16 max-w-xl">
              エンタープライズ水準の技術基盤で、公開後も安定して動き続けるサイトを作ります。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {qualities.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-[#f59e0b]/40 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <p className="text-white font-black text-lg mb-2">{item.label}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-white text-center">
          <h2
            className="text-[#0a0f1e] font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            まずは話を聞いてみませんか？
          </h2>
          <p className="text-[#6b7280] text-lg mb-10">
            30分・無料・オンライン。「まだぼんやりしている」でも大丈夫です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#f59e0b] text-[#0a0f1e] font-black px-10 py-5 rounded-xl text-xl hover:bg-[#fbbf24] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
            無料相談を申し込む →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
