import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* ── Section label with ruled line ── */
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

/* ── About teaser ── */
function AboutTeaser() {
  return (
    <section className="bg-white py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="01" label="About" />
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <h2
              className="text-[#111] font-black leading-tight mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', textWrap: 'balance' }}
            >
              なぜ、これほど
              <br />
              早く作れるのか。
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[#111] font-bold text-sm tracking-wide group"
            >
              <span className="border-b border-[#f59e0b] pb-0.5 group-hover:text-[#f59e0b] transition-colors duration-200">
                Koseiについて詳しく
              </span>
              <span className="text-[#f59e0b] group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
          <div className="space-y-6">
            {[
              { num: '01', title: '独自の高速制作プロセス', desc: '制作会社で2〜3ヶ月かかるところを最短10日で対応。無駄なプロセスを排除しているから早い。' },
              { num: '02', title: 'コンサル出身のヒアリング力', desc: '「何を作るか」より「何のために作るか」を先に掴む。作ったあとに「なんか違う」が起きない。' },
              { num: '03', title: '作って終わりにしない設計', desc: '公開後の保守・更新・SEO対応まで一気通貫。サイトを「資産」として育て続けます。' },
            ].map((item) => (
              <div key={item.num} className="flex gap-5 py-5 border-b border-[#f0f0f0]">
                <span className="text-[#f59e0b] font-black text-sm shrink-0 mt-0.5">{item.num}</span>
                <div>
                  <p className="text-[#111] font-bold mb-1">{item.title}</p>
                  <p className="text-[#777] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Works teaser ── */
function WorksTeaser() {
  const works = [
    { num: '01', tag: '飲食業', title: '企業サイト全面リニューアル', year: '2026', period: '10日' },
  ]

  return (
    <section className="bg-[#fafafa] py-24 md:py-36 px-8 md:px-16 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="02" label="Works" />
        <div className="mb-12">
          <h2
            className="text-[#111] font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', textWrap: 'balance' }}
          >
            「思ったより全然早かった。
            <br />
            しかもかっこいい」
          </h2>
          <p className="text-[#777] text-lg max-w-lg leading-relaxed">
            実際に作ったサイトのビフォーアフターを公開しています。
          </p>
        </div>

        {/* Work list */}
        <div className="border-t border-[#e5e5e5]">
          {works.map((w) => (
            <Link
              key={w.num}
              href="/works"
              className="flex items-center justify-between py-6 border-b border-[#e5e5e5] group hover:pl-2 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <span className="text-[#f59e0b] font-black text-xs w-6 shrink-0">{w.num}</span>
                <div>
                  <span className="text-[#aaa] text-xs uppercase tracking-widest block mb-1">{w.tag}</span>
                  <span className="text-[#111] font-bold text-lg group-hover:text-[#f59e0b] transition-colors duration-200">
                    {w.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <span className="text-[#aaa] text-sm hidden md:block">{w.year}</span>
                <span className="bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold px-3 py-1">⚡ {w.period}</span>
                <span className="text-[#aaa] group-hover:text-[#111] transition-colors duration-200 text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/works"
            className="inline-flex items-center gap-3 text-[#111] font-bold text-sm tracking-wide group"
          >
            <span className="border-b border-[#f59e0b] pb-0.5 group-hover:text-[#f59e0b] transition-colors duration-200">
              全ての実績を見る
            </span>
            <span className="text-[#f59e0b] group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Plans teaser ── */
function PlansTeaser() {
  return (
    <section className="bg-white py-24 md:py-36 px-8 md:px-16 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="03" label="Plans" />
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="text-[#111] font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', textWrap: 'balance' }}
            >
              追加費用なし。
              <br />
              明瞭な3プラン。
            </h2>
            <p className="text-[#777] leading-relaxed mb-8 max-w-sm">
              「頼んだら思ったより高かった」が起きない料金体系。
              初回のお見積もりは無料です。
            </p>
            <Link
              href="/plans"
              className="inline-flex items-center gap-3 text-[#111] font-bold text-sm tracking-wide group"
            >
              <span className="border-b border-[#f59e0b] pb-0.5 group-hover:text-[#f59e0b] transition-colors duration-200">
                料金プランを見る
              </span>
              <span className="text-[#f59e0b] group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>

          {/* Plan list */}
          <div className="border-t border-[#e5e5e5]">
            {[
              { name: 'スターター', price: '¥128,000〜', period: '最短7日', popular: false },
              { name: 'スタンダード', price: '¥198,000〜', period: '最短10日', popular: true },
              { name: 'プレミアム', price: '¥350,000〜', period: '最短14日', popular: false },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`flex items-center justify-between py-5 border-b border-[#e5e5e5] ${plan.popular ? 'opacity-100' : 'opacity-60'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#111] font-bold">{plan.name}</span>
                  {plan.popular && (
                    <span className="bg-[#f59e0b] text-[#0a0f1e] text-[10px] font-black px-2 py-0.5 tracking-wider">
                      人気
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#aaa] text-xs">{plan.period}</span>
                  <span className={`font-black ${plan.popular ? 'text-[#111]' : 'text-[#777]'}`}>
                    {plan.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA ── */
function FinalCta() {
  return (
    <section className="bg-[#0a0f1e] py-28 md:py-40 px-8 md:px-16 relative overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(rgba(245,158,11,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start md:items-end justify-between">
        <div>
          <p className="text-[#f59e0b] text-xs font-black tracking-[0.3em] uppercase mb-6">Contact</p>
          <h2
            className="text-white font-black leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', lineHeight: 0.9, textWrap: 'balance' }}
          >
            まず、
            <br />
            話しましょう。
          </h2>
          <p className="text-white/40 text-base mt-6 max-w-xs leading-relaxed">
            30分・無料・オンライン。
            「まだぼんやりしている」でも大丈夫。
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
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <AboutTeaser />
        <WorksTeaser />
        <PlansTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
