import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

const faqs = [
  { q: '相談だけでも大丈夫ですか？', a: 'もちろんです。「まだぼんやりしている」「見積もりだけ知りたい」でも歓迎します。' },
  { q: '返信はどのくらいかかりますか？', a: '1〜2営業日以内にご連絡します。急ぎの場合はその旨をメッセージに記載ください。' },
  { q: '相談後に断っても大丈夫ですか？', a: 'まったく問題ありません。勧誘・営業の連絡は一切しません。' },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="まず、話しましょう。"
          desc="初回相談は無料・30分・オンライン。「まだぼんやりしている」で大丈夫です。"
        />

        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="text-[#0a0f1e] font-black text-2xl md:text-3xl mb-8 leading-tight">
                相談の流れ
              </h2>
              <div className="space-y-8 mb-12">
                {[
                  { step: '01', title: 'フォームを送る', desc: '名前・メール・ご要望を送るだけ。2〜3分で完了します。' },
                  { step: '02', title: '日程調整', desc: '1〜2営業日以内に返信。ZoomかGoogle Meetで日程を決めます。' },
                  { step: '03', title: '30分で課題整理', desc: '現状の課題・目標・ご予算をヒアリング。提案の方向性を決めます。' },
                  { step: '04', title: 'ご提案・見積', desc: '相談後1〜2営業日以内にプランと見積もりをお送りします。' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="text-[#f59e0b] font-black text-2xl w-10 shrink-0">{item.step}</span>
                    <div>
                      <p className="text-[#0a0f1e] font-bold mb-1">{item.title}</p>
                      <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini FAQ */}
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-[#f9fafb] rounded-xl p-5 border border-[#e5e7eb]">
                    <p className="text-[#0a0f1e] font-bold text-sm mb-2">Q. {faq.q}</p>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <Contact />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
