import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import InView from '@/components/motion/InView'

export const metadata: Metadata = {
  title: 'About — Kosei Idezuka',
  description: '営業出身のフリーランスWebデザイナー。ヒアリング力とAI活用の制作フローで、問い合わせにつながるサイトをつくります。',
}

const strengths = [
  {
    title: '営業出身のヒアリング',
    desc: '商談・提案が本業。要件定義はヒアリングそのものなので、公開後に"なんか違う"が起きる前に潰します。制作期間中の修正は回数無制限。',
  },
  {
    title: 'AI-Nativeなスピード',
    desc: 'AIを軸にした制作フローで最短7日納品。浮いた時間は設計と作り込みに再投資します。初案件のクライアントからは"思ったより全然早かった。しかもかっこいい"の声をいただきました。',
  },
  {
    title: 'AI検索時代の集客設計',
    desc: 'Google検索（SEO）に加えて、ChatGPTなどのAI検索に引用される構造設計（AIAO）まで対応。検索の入り口が変わる時代を先回りします。',
  },
]

const experience = [
  {
    year: '2026 — Present',
    role: 'Freelance Web Designer & Developer',
    desc: '中小企業・個人事業主向けのサイト制作。表示速度1秒未満・Lighthouse 95+を標準ラインに、公開後の運用まで伴走。',
  },
  {
    year: '2024 — Present',
    role: 'Consultative Sales — B2B SaaS',
    desc: '企業向けSaaSの提案営業。ヒアリング・提案書づくり・商談構築が日常業務。',
  },
  {
    year: '2023 — 2024',
    role: 'Event Planning & Coordination',
    desc: '大規模イベントの企画・運営。多職種チームのコーディネーションを担当。',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page header — 顔を出す（人は人に発注する） */}
        <InView as="section" className="px-6 pb-s4 pt-40 md:px-10">
          <div className="mx-auto flex w-full max-w-shell flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-8">
                <span className="reveal-wrap">
                  <span className="reveal-line text-label font-mono text-ink-faint">ABOUT</span>
                </span>
              </p>
              <h1 className="text-display font-display font-light text-ink">
                <span className="reveal-wrap">
                  <span className="reveal-line">Kosei Idezuka</span>
                </span>
              </h1>
            </div>
            <Image
              src="/avatar.png"
              alt="出塚航世の似顔絵イラスト"
              width={128}
              height={128}
              priority
              className="rise h-28 w-28 border border-line invert md:h-32 md:w-32"
            />
          </div>
        </InView>

        {/* (01) Profile + Strengths */}
        <InView as="section" className="rise border-t border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-16 md:grid-cols-2">
            <div>
              <SectionHeading no="01" label="PROFILE" className="mb-8" />
              <div className="space-y-4">
                <p className="text-body text-ink-muted">
                  本業はB2Bのコンサルティングセールス。企業の課題を聞き出して提案する仕事を毎日しています。その現場で何度も見てきたのが、<span className="text-ink">&ldquo;きれいなのに問い合わせが来ないサイト&rdquo;</span>でした。デザインは手段で、目的は商売が動くこと——だから作る側に回りました。
                </p>
                <p className="text-body text-ink-muted">
                  最初に聞くのは&ldquo;どんなサイトにしたいか&rdquo;ではなく&ldquo;誰から問い合わせが欲しいか&rdquo;。制作はNext.js + Tailwind CSS + Vercel、AIを全面活用した制作フローで、ヒアリングから公開まで最短7日。公開して終わりではなく、サイトを&ldquo;営業資産&rdquo;として育てるところまで伴走します。
                </p>
              </div>
            </div>

            <div>
              <p className="mb-8 text-label font-mono text-ink-faint">STRENGTHS</p>
              <div className="space-y-6">
                {strengths.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 font-mono text-accent">→</span>
                    <div>
                      <p className="mb-1 font-mono text-sm font-medium text-ink">{item.title}</p>
                      <p className="text-meta text-ink-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InView>

        {/* (02) Experience */}
        <InView as="section" className="rise border-t border-line px-6 py-s4 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <SectionHeading no="02" label="EXPERIENCE" className="mb-8" />
            <div className="border-t border-line">
              {experience.map((item) => (
                <div key={item.role} className="flex flex-col gap-4 border-b border-line py-8 md:flex-row md:gap-10">
                  <p className="shrink-0 text-meta font-mono text-ink-faint md:w-44">{item.year}</p>
                  <div>
                    <p className="mb-2 font-mono text-sm font-medium text-ink">{item.role}</p>
                    <p className="text-body text-ink-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* CTA */}
        <section className="border-t border-line px-6 py-s5 md:px-10">
          <InView className="rise mx-auto flex w-full max-w-shell flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-label font-mono text-ink-faint">CONTACT</p>
              <p className="text-lead tracking-jp text-ink">相談だけでも歓迎です。1営業日以内に返信します。</p>
            </div>
            <Button href="/contact">GET IN TOUCH</Button>
          </InView>
        </section>
      </main>
      <Footer />
    </>
  )
}
