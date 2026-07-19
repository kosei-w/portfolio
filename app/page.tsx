import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShowcaseRow from '@/components/ShowcaseRow'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import InView from '@/components/motion/InView'

export const metadata: Metadata = {
  title: 'Kosei Idezuka — Web Designer & Developer',
  description: '営業出身のフリーランスWebデザイナー。デザインではなく「問い合わせが来る」サイトを納品。最短7日、AI検索（ChatGPT等）対応の設計。Next.js + Vercel。',
}

const delay = (s: number) => ({ '--reveal-delay': `${s}s` } as CSSProperties)

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — ローダーのパネル分割と連続して下から突き上げる（.hero-reveal契約） */}
        <section className="flex min-h-screen flex-col justify-center px-6 pt-24 md:px-10">
          <div className="hero-reveal mx-auto w-full max-w-shell">
            <p className="reveal-wrap mb-8">
              <span className="reveal-line text-label font-mono text-ink-faint">
                SALES-DRIVEN WEB DESIGN
              </span>
            </p>

            <h1 className="mb-8 text-display font-display font-light text-ink">
              <span className="reveal-wrap">
                <span className="reveal-line" style={delay(0.08)}>Kosei</span>
              </span>{' '}
              <span className="reveal-wrap">
                <span className="reveal-line" style={delay(0.16)}>Idezuka</span>
              </span>
            </h1>

            <p className="reveal-wrap mb-10">
              <span className="reveal-line text-lead font-medium text-ink" style={delay(0.26)}>
                デザインではなく、<span className="font-serif">&ldquo;問い合わせ&rdquo;</span>を納品する。
              </span>
            </p>

            <span className="strike-line mb-10 max-w-[26rem]" style={delay(0.4)} aria-hidden="true" />

            <p className="rise mb-8 max-w-lg text-body text-ink-muted" style={delay(0.5)}>
              本業はB2Bのコンサルティングセールス。数字を追う営業の現場から、&ldquo;見た目がいいだけ&rdquo;のサイトでは問い合わせが来ないことを知っています。ヒアリングから公開まで最短7日。Google検索とAI検索の両方から見つかる設計で、サイトをあなたの営業資産に変えます。
            </p>

            <p className="rise text-meta font-mono text-ink-faint" style={delay(0.6)}>
              最短7日納品 / LIGHTHOUSE 95+ / AI検索（AIAO）対応
            </p>
          </div>
        </section>

        {/* Selected Work — フルブリード没入型ショーケース */}
        <section className="border-t border-line py-s5">
          <div className="mx-auto mb-s3 flex w-full max-w-shell items-end justify-between px-6 md:px-10">
            <SectionHeading no="01" label="SELECTED WORK" />
            <Link
              href="/works"
              className="text-label font-mono text-ink-faint transition-colors duration-300 hover:text-accent"
            >
              VIEW ALL →
            </Link>
          </div>

          <ShowcaseRow
            title="HIGHER LLC"
            year="2026"
            role="Design / Development"
            href="/works/higher"
            imageSrc="/images/works/higher/hero.png"
            imageAlt="HIGHER LLC コーポレートサイトのヒーロー画面"
          />
          <ShowcaseRow title="Next Project" year="—" href="/works" comingSoon />
        </section>

        {/* CTA */}
        <section className="border-t border-line px-6 py-s5 md:px-10">
          <InView className="rise mx-auto flex max-w-shell flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <SectionHeading no="02" label="CONTACT" className="mb-6" />
              <p className="text-title font-display font-light text-ink">
                Let&apos;s build something together.
              </p>
            </div>
            <Button href="/contact">GET IN TOUCH</Button>
          </InView>
        </section>
      </main>
      <Footer />
    </>
  )
}
