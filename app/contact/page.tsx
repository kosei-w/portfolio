import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'お問い合わせ — Kosei | HP制作',
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
      <main>
        {/* Split hero */}
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left: dark panel */}
          <div className="bg-[#0a0f1e] relative overflow-hidden flex flex-col justify-center px-8 md:px-16 pt-32 pb-16 lg:pt-0 lg:pb-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(rgba(245,158,11,0.08) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#f59e0b] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-md">
              <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-5">Contact</p>
              <h1
                className="text-white font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                まず、
                <br />
                話しましょう。
              </h1>
              <p className="text-[#9ca3af] text-lg leading-relaxed mb-14">
                初回相談は無料・30分・オンライン。
                「まだぼんやりしている」でも大丈夫です。
              </p>

              {/* Steps */}
              <div className="space-y-7">
                {steps.map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#f59e0b] font-black text-xs">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1">{item.title}</p>
                      <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="mt-12 space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                    <p className="text-white font-bold text-sm mb-1.5">Q. {faq.q}</p>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form panel */}
          <div className="bg-white flex flex-col justify-center px-8 md:px-16 py-16">
            <div className="max-w-md w-full mx-auto">
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
