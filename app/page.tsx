import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Link from 'next/link'

const sections = [
  {
    href: '/about',
    eyebrow: 'About',
    title: 'なぜ、Koseiに頼むと早いのか。',
    desc: '医療DX出身のコンサルタントが、ヒアリング力と最新技術で「集客できるHP」を最短10日で届けます。',
    cta: 'Koseiについて詳しく →',
    bg: 'bg-white',
  },
  {
    href: '/works',
    eyebrow: 'Works',
    title: '友人社長のサイトを10日でリニューアル。',
    desc: '「思ったより全然早かった。しかもかっこいい」— 制作実績のビフォーアフターを公開しています。',
    cta: '制作実績を見る →',
    bg: 'bg-[#f9fafb]',
  },
  {
    href: '/plans',
    eyebrow: 'Plans',
    title: '¥128,000〜 明瞭な料金体系。',
    desc: '追加費用・隠れたコストなし。3プランから選べて、すべて保守対応可能。見積もり無料。',
    cta: '料金プランを見る →',
    bg: 'bg-white',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Teaser sections */}
        {sections.map(({ href, eyebrow, title, desc, cta, bg }) => (
          <section key={href} className={`${bg} py-20 md:py-28 px-6`}>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  {eyebrow}
                </p>
                <h2 className="text-[#0a0f1e] font-black text-2xl md:text-4xl leading-tight mb-5">
                  {title}
                </h2>
                <p className="text-[#6b7280] leading-relaxed mb-8">{desc}</p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-[#0a0f1e] font-bold border-b-2 border-[#f59e0b] pb-1 hover:text-[#f59e0b] transition-colors"
                >
                  {cta}
                </Link>
              </div>
              {/* Decorative block */}
              <div className="hidden md:flex justify-end">
                <div className="w-64 h-64 rounded-3xl bg-[#0a0f1e] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <span className="text-[#f59e0b] text-6xl font-black relative z-10">
                    {eyebrow[0]}
                  </span>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <section className="bg-[#f59e0b] py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[#0a0f1e] font-black text-3xl md:text-5xl mb-6 leading-tight">
              まず、話しましょう。
              <br />
              30分・無料・オンライン。
            </h2>
            <p className="text-[#78350f] text-lg mb-10">
              「まだぼんやりしている」で大丈夫です。
              <br />
              現状のサイトの課題を一緒に整理するところから始めます。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0a0f1e] text-white font-black px-10 py-5 rounded-full text-xl hover:bg-[#111827] transition-all duration-200 hover:scale-105"
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
