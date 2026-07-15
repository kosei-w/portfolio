import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkCard from '@/components/WorkCard'

export const metadata: Metadata = {
  title: 'Kosei Idezuka — Web Designer & Developer',
  description: '営業出身のフリーランスWebデザイナー。デザインではなく「問い合わせが来る」サイトを納品。最短7日、AI検索（ChatGPT等）対応の設計。Next.js + Vercel。',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-20">
          <div className="mx-auto w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-8 fade-up fade-up-1"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              SALES-DRIVEN WEB DESIGN
            </p>

            <h1
              className="font-bold text-[var(--c-text)] leading-none mb-6 fade-up fade-up-2"
              style={{
                fontFamily: 'var(--f-sans)',
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Kosei Idezuka
            </h1>

            <p
              className="text-base text-[var(--c-text)] mb-8 fade-up fade-up-3"
              style={{ fontFamily: 'var(--f-sans)', fontWeight: 500 }}
            >
              デザインではなく、&ldquo;問い合わせ&rdquo;を納品する。
            </p>

            <div
              className="w-10 border-t border-[var(--c-text)] mb-8 fade-up fade-up-3"
            />

            <p
              className="text-sm text-[var(--c-muted)] max-w-lg leading-relaxed mb-8 fade-up fade-up-4"
              style={{ fontFamily: 'var(--f-sans)' }}
            >
              本業はB2Bのコンサルティングセールス。数字を追う営業の現場から、&ldquo;見た目がいいだけ&rdquo;のサイトでは問い合わせが来ないことを知っています。ヒアリングから公開まで最短7日。Google検索とAI検索の両方から見つかる設計で、サイトをあなたの営業資産に変えます。
            </p>

            <p
              className="text-[11px] tracking-[0.2em] text-[var(--c-muted)] fade-up fade-up-5"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              最短7日納品 / LIGHTHOUSE 95+ / AI検索（AIAO）対応
            </p>
          </div>
        </section>

        {/* Works Preview */}
        <section
          className="px-6 md:px-10 py-20 border-t"
          style={{ borderColor: 'var(--c-border)' }}
        >
          <div className="mx-auto w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <div className="flex items-center justify-between mb-10">
              <p
                className="text-[11px] tracking-[0.3em] text-[var(--c-muted)]"
                style={{ fontFamily: 'var(--f-mono)' }}
              >
                WORKS
              </p>
              <Link
                href="/works"
                className="text-[11px] tracking-[0.15em] text-[var(--c-muted)] hover:text-[var(--c-accent)] transition-colors duration-300"
                style={{ fontFamily: 'var(--f-mono)' }}
              >
                VIEW ALL →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <WorkCard
                title="HIGHER LLC"
                year="2026"
                href="/works/higher"
              />
              <WorkCard
                title="Coming Soon"
                year="—"
                href="/works"
                comingSoon
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="px-6 md:px-10 py-24 border-t"
          style={{ borderColor: 'var(--c-border)' }}
        >
          <div className="mx-auto w-full text-center" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-xl md:text-2xl text-[var(--c-text)] mb-8 font-medium"
              style={{ fontFamily: 'var(--f-sans)' }}
            >
              Let&apos;s build something together.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-[var(--c-accent)] text-[var(--c-accent)] px-8 py-3 text-[11px] tracking-[0.3em] hover:bg-[var(--c-accent)] hover:text-[var(--c-bg)] transition-all duration-300"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              GET IN TOUCH
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
