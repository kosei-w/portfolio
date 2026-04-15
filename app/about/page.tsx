import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import Link from 'next/link'

const strengths = [
  {
    icon: '⚡',
    title: '最短10日納品',
    desc: '制作会社で2〜3ヶ月かかるところを、最短10日で対応。Claude CodeなどのAIと、Next.js + Vercelの最新スタックを使い倒しているから実現できるスピードです。手を抜いているわけではなく、無駄なプロセスを排除しているから早い。',
  },
  {
    icon: '💬',
    title: 'コンサルティングセールス出身のヒアリング力',
    desc: '医療DX SaaS企業で培ったコンサルティングセールスの経験から、「何を作るか」より「何のために作るか」を先に深掘りします。課題の本質を掴んでから設計するので、作ったあとに「なんか違う」が起きない。',
  },
  {
    icon: '🏥',
    title: '医療・ヘルスケア領域に強い',
    desc: '医療DX業界に身を置いているから、クリニック・医療法人・ヘルスケアサービスの訴求ポイントをわかっています。「患者さんへの安心感をどう伝えるか」「スタッフ採用に強いサイトとは何か」を業種理解ゼロの制作会社より深く考えられる。',
  },
  {
    icon: '🔧',
    title: '作って終わりにしない設計',
    desc: '公開がゴールではなく、「集客・問い合わせ獲得」がゴール。公開後の保守・更新・SEO対応まで一気通貫で担います。月¥15,000〜の保守プランで、サイトを「資産」として育て続けます。',
  },
]

const stack = [
  { name: 'Next.js', desc: 'App Router / SSR / 最速表示' },
  { name: 'TypeScript', desc: '型安全・バグが少ない' },
  { name: 'Tailwind CSS', desc: 'モダンで整ったデザイン' },
  { name: 'GSAP', desc: 'スムーズなアニメーション' },
  { name: 'Resend', desc: 'メール通知・自動返信' },
  { name: 'Vercel', desc: '高速・安定・グローバルCDN' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About"
          title="Koseiについて"
          desc="医療DXのコンサルタントが、なぜHP制作を始めたのか。強みと使っている技術を全部書きました。"
        />

        {/* Story */}
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-6">Story</p>
            <h2 className="text-[#0a0f1e] font-black text-2xl md:text-4xl mb-10 leading-tight">
              「なんでこんなに古いサイトのまま<br className="hidden md:block" />
              商売してるんだろう」と思った。
            </h2>
            <div className="space-y-6 text-[#374151] leading-[1.9] text-lg">
              <p>
                本業は医療DX SaaS企業のコンサルティングセールス。病院・クリニック・医療法人を日々訪問して気づいたことがある。
              </p>
              <p>
                <strong className="text-[#0a0f1e]">「HPが信頼を大きく左右している」</strong>こと。スマホで崩れていたり、2010年代のデザインのまま止まっていたり、何を売っているのかパッと伝わらなかったり。
              </p>
              <p>
                同時に、「制作会社に頼むと高い・遅い・融通が利かない」という声も耳にした。150万円かけて作ってもらったのに、2ヶ月かかった上に更新できない——そんな話を何度も聞いた。
              </p>
              <p>
                最初のクライアントは友人の社長。依頼から10日でサイトが公開された。「思ったより全然早かった。しかもかっこいい」という言葉をもらったとき、確信した。
              </p>
              <p>
                <strong className="text-[#0a0f1e]">自分の知識とスキルで、この課題を解ける。</strong>そう思って副業としてHP制作を始めた。
              </p>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-20 md:py-28 px-6 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">Strengths</p>
            <h2 className="text-[#0a0f1e] font-black text-3xl md:text-5xl mb-16 leading-tight">
              4つの強み
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#f59e0b] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-[#0a0f1e] font-bold text-xl mb-3 group-hover:text-[#f59e0b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-20 md:py-28 px-6 bg-[#0a0f1e]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">Tech Stack</p>
            <h2 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">
              使っている技術
            </h2>
            <p className="text-[#9ca3af] text-lg mb-16 max-w-xl">
              モダンで高速なスタック構成で、公開後も安定して動き続けるサイトを作ります。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {stack.map((item) => (
                <div
                  key={item.name}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#f59e0b] transition-all duration-200"
                >
                  <p className="text-white font-black text-xl mb-2">{item.name}</p>
                  <p className="text-[#9ca3af] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-white text-center">
          <h2 className="text-[#0a0f1e] font-black text-3xl md:text-4xl mb-6">
            まずは話を聞いてみませんか？
          </h2>
          <p className="text-[#6b7280] text-lg mb-10">
            30分・無料・オンライン。「まだぼんやりしている」でも大丈夫です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#f59e0b] text-[#0a0f1e] font-black px-10 py-5 rounded-full text-xl hover:bg-[#fbbf24] transition-all hover:scale-105"
          >
            無料相談を申し込む →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
