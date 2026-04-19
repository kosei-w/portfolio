import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — Kosei Idezuka',
  description: 'Freelance web designer combining consultative sales experience with modern web development.',
}

const techStack = [
  'Next.js', 'React', 'Tailwind CSS', 'Vercel', 'MongoDB', 'GitHub',
  'TypeScript', 'Node.js',
]

const experience = [
  {
    year: '2026 — Present',
    role: 'Freelance Web Designer & Developer',
    desc: 'Building modern websites for Japanese businesses. Focus on performance, design quality, and conversion.',
  },
  {
    year: '2024 — Present',
    role: 'Consultative Sales — Healthcare DX SaaS',
    desc: 'Enterprise sales for medical DX solutions. Visiting hospitals and clinics across Japan.',
  },
  {
    year: '2023 — 2024',
    role: 'Event Planning & Coordination',
    desc: 'Large-scale event management across multiple verticals.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">

        {/* Page header */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-6"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              ABOUT
            </p>
            <h1
              className="font-bold text-[var(--c-text)] leading-none"
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              }}
            >
              Kosei Idezuka
            </h1>
          </div>
        </section>

        {/* Profile */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full grid md:grid-cols-2 gap-16" style={{ maxWidth: 'var(--container-max)' }}>
            <div>
              <p
                className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-8"
                style={{ fontFamily: 'var(--f-mono)' }}
              >
                PROFILE
              </p>
              <div className="space-y-4">
                <p className="text-sm text-[var(--c-muted)] leading-relaxed" style={{ fontFamily: 'var(--f-sans)' }}>
                  I combine consultative sales expertise with modern web development. My background in Healthcare DX gives me a unique ability to understand what businesses actually need from their web presence — not just how it looks, but how it converts.
                </p>
                <p className="text-sm text-[var(--c-muted)] leading-relaxed" style={{ fontFamily: 'var(--f-sans)' }}>
                  I build websites that are fast, well-designed, and built to last — using Next.js, Tailwind CSS, and Vercel. Every project starts with understanding your business goals first.
                </p>
              </div>
            </div>

            <div>
              <p
                className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-8"
                style={{ fontFamily: 'var(--f-mono)' }}
              >
                STRENGTHS
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Consultative Approach',
                    desc: 'I dig into your business goals before touching design. No "what should the button say?" surprises post-launch.',
                  },
                  {
                    title: 'Fast Delivery',
                    desc: 'Minimum 7-day turnaround. Solo operation means zero coordination overhead.',
                  },
                  {
                    title: 'Healthcare Domain Knowledge',
                    desc: 'I understand clinical environments, patient trust signals, and medical compliance needs.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span
                      className="text-[var(--c-accent)] shrink-0 mt-0.5"
                      style={{ fontFamily: 'var(--f-mono)' }}
                    >
                      →
                    </span>
                    <div>
                      <p
                        className="text-sm font-medium text-[var(--c-text)] mb-1"
                        style={{ fontFamily: 'var(--f-mono)' }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm text-[var(--c-muted)] leading-relaxed"
                        style={{ fontFamily: 'var(--f-sans)' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-8"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              TECH STACK
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="border px-4 py-2 text-[11px] tracking-[0.15em] text-[var(--c-muted)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-colors duration-300"
                  style={{ borderColor: 'var(--c-border)', fontFamily: 'var(--f-mono)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-8"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              EXPERIENCE
            </p>
            <div className="border-t" style={{ borderColor: 'var(--c-border)' }}>
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-b"
                  style={{ borderColor: 'var(--c-border)' }}
                >
                  <p
                    className="text-[11px] tracking-[0.1em] text-[var(--c-muted)] shrink-0 md:w-44"
                    style={{ fontFamily: 'var(--f-mono)' }}
                  >
                    {item.year}
                  </p>
                  <div>
                    <p
                      className="text-sm font-medium text-[var(--c-text)] mb-2"
                      style={{ fontFamily: 'var(--f-mono)' }}
                    >
                      {item.role}
                    </p>
                    <p
                      className="text-sm text-[var(--c-muted)] leading-relaxed"
                      style={{ fontFamily: 'var(--f-sans)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-10 py-20">
          <div className="mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: 'var(--container-max)' }}>
            <div>
              <p
                className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-4"
                style={{ fontFamily: 'var(--f-mono)' }}
              >
                CONTACT
              </p>
              <p className="text-lg text-[var(--c-text)]" style={{ fontFamily: 'var(--f-sans)' }}>
                Let&apos;s build something together.
              </p>
            </div>
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
