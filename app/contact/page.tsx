import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact — Kosei Wakabayashi',
  description: '初回相談は無料・30分・オンライン。HP制作に関するご相談はこちらから。',
}

const steps = [
  { step: '01', title: 'フォームを送る', desc: '名前・メール・ご要望を送るだけ。2〜3分で完了します。' },
  { step: '02', title: '日程調整', desc: '1〜2営業日以内に返信。ZoomかGoogle Meetで日程を決めます。' },
  { step: '03', title: '30分で課題整理', desc: '現状の課題・目標・ご予算をヒアリング。提案の方向性を決めます。' },
  { step: '04', title: 'ご提案・見積', desc: '相談後1〜2営業日以内にプランと見積もりをお送りします。' },
]

const faqs = [
  { q: '相談だけでも大丈夫ですか？', a: 'もちろんです。「まだぼんやりしている」「見積もりだけ知りたい」でも歓迎します。' },
  { q: '返信はどのくらいかかりますか？', a: '1〜2営業日以内にご連絡します。急ぎの場合はその旨をメッセージに記載ください。' },
  { q: '相談後に断っても大丈夫ですか？', a: 'まったく問題ありません。勧誘・営業の連絡は一切しません。' },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Split layout */}
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">

          {/* Left: dark info panel */}
          <div className="bg-[var(--ink)] flex flex-col justify-center px-8 md:px-14 pt-16 pb-16">
            <div className="max-w-md">
              <p className="font-display text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-10">
                CONTACT
              </p>
              <h1
                className="font-display font-extrabold text-[var(--bg)] leading-none mb-10"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
              >
                Let&apos;s talk.
              </h1>
              <p className="text-white/40 text-sm leading-relaxed mb-14">
                初回相談は無料・30分・オンライン。
                「まだぼんやりしている」でも大丈夫です。
              </p>

              {/* Steps */}
              <div className="border-t border-white/10">
                {steps.map((item) => (
                  <div key={item.step} className="flex gap-6 py-6 border-b border-white/10">
                    <span className="font-display font-bold text-[var(--gold)] text-xs shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-display font-bold text-[var(--bg)] text-sm mb-1">{item.title}</p>
                      <p className="text-white/35 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div className="mt-10 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-white/10 p-5">
                    <p className="font-display font-bold text-[var(--bg)] text-xs mb-2">Q. {faq.q}</p>
                    <p className="text-white/35 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex flex-col justify-center px-8 md:px-14 py-16">
            <div className="max-w-md w-full mx-auto">
              <p className="font-display font-extrabold text-[var(--ink)] text-lg mb-10 tracking-tight">
                お問い合わせフォーム
              </p>
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  )
}
