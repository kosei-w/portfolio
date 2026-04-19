import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkCard from '@/components/WorkCard'

export const metadata: Metadata = {
  title: 'Kosei Idezuka — Web Designer & Developer',
  description: 'Freelance web designer and developer. Next.js + Tailwind CSS + Vercel. Helping businesses in Japan build modern, high-performance web experiences.',
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
              FREELANCE WEB DESIGNER
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
              className="text-base text-[var(--c-muted)] mb-8 fade-up fade-up-3"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              Web Design / Development / Consulting
            </p>

            <div
              className="w-10 border-t border-[var(--c-text)] mb-8 fade-up fade-up-3"
            />

            <p
              className="text-sm text-[var(--c-muted)] max-w-lg leading-relaxed fade-up fade-up-4"
              style={{ fontFamily: 'var(--f-sans)' }}
            >
              Next.js + Tailwind CSS + Vercel. Helping businesses in Japan build modern, high-performance web experiences.
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
