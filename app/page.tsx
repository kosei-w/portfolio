import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* ── About teaser ── */
function AboutTeaser() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-5">About</p>
          <h2
            className="text-[#0a0f1e] font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.5rem)' }}
          >
            なぜ、これほど
            <br />
            早く作れるのか。
          </h2>
          <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
            医療DX出身のコンサルタントとして培った「課題を掴む力」と、
            独自の高速制作プロセスの掛け合わせ。
            ヒアリングから設計・実装・公開まで、すべて一人で完結します。
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#0a0f1e] font-black group"
          >
            <span className="border-b-2 border-[#f59e0b] pb-0.5 group-hover:text-[#f59e0b] transition-colors">
              Koseiについて詳しく
            </span>
            <span className="text-[#f59e0b] group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Visual: big number */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="text-[#0a0f1e] font-black select-none"
              style={{
                fontSize: 'clamp(8rem, 20vw, 16rem)',
                lineHeight: 1,
                opacity: 0.06,
                letterSpacing: '-0.04em',
              }}
            >
              10
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p
                className="font-black text-transparent bg-clip-text text-center"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                  fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                  lineHeight: 1,
                }}
              >
                最短10日
              </p>
              <p className="text-[#6b7280] text-sm mt-3 tracking-wider">で公開まで</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Works teaser ── */
function WorksTeaser() {
  return (
    <section className="bg-[#0a0f1e] py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(245,158,11,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual: before/after cards */}
        <div className="order-2 lg:order-1 flex flex-col gap-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-[#ef4444] text-xs font-black tracking-widest uppercase mb-4">Before</p>
            {['スマホで崩れて表示される', '何を売っているか伝わらない', '問い合わせが来ない'].map((t) => (
              <div key={t} className="flex items-center gap-3 mb-2.5">
                <span className="w-4 h-4 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/40 flex items-center justify-center shrink-0">
                  <span className="text-[#ef4444] text-xs">✗</span>
                </span>
                <span className="text-[#9ca3af] text-sm line-through">{t}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-2xl p-6">
            <p className="text-[#f59e0b] text-xs font-black tracking-widest uppercase mb-4">After</p>
            {['スマホ・PCどちらもきれいに表示', '会社の強みが一発で伝わる', '問い合わせ導線が整備される'].map((t) => (
              <div key={t} className="flex items-center gap-3 mb-2.5">
                <span className="w-4 h-4 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 flex items-center justify-center shrink-0">
                  <span className="text-[#f59e0b] text-xs">✓</span>
                </span>
                <span className="text-white text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-5">Works</p>
          <h2
            className="text-white font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.5rem)' }}
          >
            「思ったより全然早かった。
            <br />
            しかもかっこいい」
          </h2>
          <p className="text-[#9ca3af] text-lg leading-relaxed mb-8">
            実際のビフォーアフターを公開しています。
            古いサイトを10日でリニューアルした実績を、そのままお見せします。
          </p>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-[#f59e0b] font-black group"
          >
            <span className="border-b-2 border-[#f59e0b]/40 pb-0.5 group-hover:border-[#f59e0b] transition-colors">
              制作実績を見る
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Plans teaser ── */
function PlansTeaser() {
  return (
    <section className="bg-[#f9fafb] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-5">Plans</p>
          <h2
            className="text-[#0a0f1e] font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.5rem)' }}
          >
            追加費用なし。
            <br />
            明瞭な3プラン。
          </h2>
          <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
            「頼んだら思ったより高かった」が起きない料金体系。
            初回のお見積もりは無料で、金額に納得してから始められます。
          </p>
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 text-[#0a0f1e] font-black group"
          >
            <span className="border-b-2 border-[#f59e0b] pb-0.5 group-hover:text-[#f59e0b] transition-colors">
              料金プランを見る
            </span>
            <span className="text-[#f59e0b] group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Visual: plan preview */}
        <div className="flex flex-col gap-3">
          {[
            { name: 'スターター', price: '¥128,000〜', period: '最短7日', muted: true },
            { name: 'スタンダード', price: '¥198,000〜', period: '最短10日', muted: false },
            { name: 'プレミアム', price: '¥350,000〜', period: '最短14日', muted: true },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl px-6 py-4 flex items-center justify-between transition-all duration-200 ${
                plan.muted
                  ? 'bg-white border border-[#e5e7eb]'
                  : 'bg-[#0a0f1e] border border-[#0a0f1e] shadow-lg'
              }`}
            >
              <div className="flex items-center gap-3">
                {!plan.muted && (
                  <span className="bg-[#f59e0b] text-[#0a0f1e] text-[10px] font-black px-2 py-0.5 rounded-full">
                    人気
                  </span>
                )}
                <span className={`font-bold ${plan.muted ? 'text-[#374151]' : 'text-white'}`}>
                  {plan.name}
                </span>
              </div>
              <div className="text-right">
                <p className={`font-black ${plan.muted ? 'text-[#0a0f1e]' : 'text-[#f59e0b]'}`}>
                  {plan.price}
                </p>
                <p className={`text-xs mt-0.5 ${plan.muted ? 'text-[#9ca3af]' : 'text-[#9ca3af]'}`}>
                  {plan.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA ── */
function FinalCta() {
  return (
    <section className="relative py-28 md:py-36 px-6 bg-[#0a0f1e] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(245,158,11,0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#f59e0b] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-6">Contact</p>
        <h2
          className="text-white font-black leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          まず、話しましょう。
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}
          >
            30分・無料・オンライン。
          </span>
        </h2>
        <p className="text-[#9ca3af] text-lg mb-12 leading-relaxed">
          「まだぼんやりしている」「見積もりだけ知りたい」でも大丈夫です。
          <br />
          現状の課題を一緒に整理するところから始めます。
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#f59e0b] text-[#0a0f1e] font-black px-12 py-5 rounded-xl text-xl hover:bg-[#fbbf24] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_50px_rgba(245,158,11,0.3)]"
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
        <AboutTeaser />
        <WorksTeaser />
        <PlansTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
