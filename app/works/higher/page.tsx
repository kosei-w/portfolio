import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HIGHER LLC — Case Study | Kosei Idezuka',
  description: 'Full website redesign for HIGHER LLC. Next.js, Tailwind CSS, Vercel, MongoDB.',
}

const techStack = [
  { name: 'Next.js', desc: 'App Router, SSG/ISR' },
  { name: 'Tailwind CSS', desc: 'Utility-first styling' },
  { name: 'Vercel', desc: 'Edge deployment' },
  { name: 'MongoDB', desc: 'Contact form storage' },
]

export default function HigherCaseStudy() {
  return (
    <>
      <Header />
      <main className="pt-24">

        {/* Hero */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <Link
              href="/works"
              className="inline-block text-[11px] tracking-[0.2em] text-[var(--c-muted)] hover:text-[var(--c-accent)] transition-colors duration-300 mb-12"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              ← WORKS
            </Link>

            <div className="flex flex-wrap items-start gap-6 mb-8">
              <p
                className="text-[11px] tracking-[0.3em] text-[var(--c-accent)]"
                style={{ fontFamily: 'var(--f-mono)' }}
              >
                CASE STUDY
              </p>
            </div>

            <h1
              className="font-bold text-[var(--c-text)] leading-none mb-6"
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              }}
            >
              HIGHER LLC
            </h1>

            <div className="flex flex-wrap gap-8 text-[11px] tracking-[0.15em] text-[var(--c-muted)]" style={{ fontFamily: 'var(--f-mono)' }}>
              <span>CLIENT — HIGHER LLC</span>
              <span>YEAR — 2026</span>
              <span>ROLE — Design / Development</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full grid md:grid-cols-[200px_1fr] gap-10" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] pt-1"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              01 / OVERVIEW
            </p>
            <div>
              <p className="text-base text-[var(--c-muted)] leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--f-sans)' }}>
                HIGHER LLC is a company dedicated to helping people realize their full potential. They needed a modern, high-performance website that embodied their brand philosophy — clean, elegant, and aspirational. The project involved a full design and development rebuild from scratch using the latest web technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full grid md:grid-cols-[200px_1fr] gap-10" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] pt-1"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              02 / CHALLENGE
            </p>
            <div className="space-y-4 max-w-2xl">
              {[
                'No existing web presence — building from zero with no brand guidelines.',
                'The brand needed to convey premium quality and trustworthiness while remaining approachable.',
                'Required both Japanese and global audience considerations in design language.',
                'Contact form with reliable delivery and spam protection.',
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="text-[var(--c-accent)] mt-1 shrink-0" style={{ fontFamily: 'var(--f-mono)' }}>—</span>
                  <p className="text-sm text-[var(--c-muted)] leading-relaxed" style={{ fontFamily: 'var(--f-sans)' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full grid md:grid-cols-[200px_1fr] gap-10" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] pt-1"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              03 / APPROACH
            </p>
            <div className="max-w-2xl space-y-5">
              <p className="text-sm text-[var(--c-muted)] leading-relaxed" style={{ fontFamily: 'var(--f-sans)' }}>
                Started with a deep brand discovery session to understand HIGHER&apos;s values, audience, and aspirations. Defined a warm beige-and-serif visual language that communicates trust and sophistication without feeling corporate.
              </p>
              <p className="text-sm text-[var(--c-muted)] leading-relaxed" style={{ fontFamily: 'var(--f-sans)' }}>
                Built a single-page architecture optimized for conversion — guiding visitors from brand story to services to contact with deliberate scroll pacing. Implemented GSAP-powered scroll animations for premium feel, and integrated a MongoDB-backed contact form with server-side validation and email notifications.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full grid md:grid-cols-[200px_1fr] gap-10" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] pt-1"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              04 / TECH STACK
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="border p-4"
                  style={{ borderColor: 'var(--c-border)' }}
                >
                  <p
                    className="text-sm font-bold text-[var(--c-text)] mb-1"
                    style={{ fontFamily: 'var(--f-mono)' }}
                  >
                    {tech.name}
                  </p>
                  <p
                    className="text-[11px] text-[var(--c-muted)]"
                    style={{ fontFamily: 'var(--f-mono)' }}
                  >
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full grid md:grid-cols-[200px_1fr] gap-10" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] pt-1"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              05 / RESULT
            </p>
            <div className="max-w-2xl space-y-5">
              <p className="text-sm text-[var(--c-muted)] leading-relaxed" style={{ fontFamily: 'var(--f-sans)' }}>
                Delivered a production-ready website from concept to launch. The site loads in under 1 second on Vercel&apos;s edge network and scores 95+ on Lighthouse across all categories. The client received their first inbound inquiry within days of launch.
              </p>
              <blockquote
                className="border-l-2 border-[var(--c-accent)] pl-6 py-2"
              >
                <p className="text-base text-[var(--c-text)] italic mb-2" style={{ fontFamily: 'var(--f-sans)' }}>
                  &ldquo;思ったより全然早かった。しかもかっこいい。&rdquo;
                </p>
                <cite className="text-[11px] tracking-[0.15em] text-[var(--c-muted)] not-italic" style={{ fontFamily: 'var(--f-mono)' }}>
                  — HIGHER LLC, Representative
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full grid md:grid-cols-[200px_1fr] gap-10" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] pt-1"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              06 / SCREENSHOTS
            </p>
            <div className="space-y-4">
              <div
                className="w-full aspect-video bg-[var(--c-surface)] border flex items-center justify-center"
                style={{ borderColor: 'var(--c-border)' }}
              >
                <p
                  className="text-[11px] tracking-[0.2em] text-[var(--c-subtle)]"
                  style={{ fontFamily: 'var(--f-mono)' }}
                >
                  SCREENSHOT — COMING SOON
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-video bg-[var(--c-surface)] border flex items-center justify-center"
                  style={{ borderColor: 'var(--c-border)' }}
                >
                  <p
                    className="text-[11px] text-[var(--c-subtle)]"
                    style={{ fontFamily: 'var(--f-mono)' }}
                  >
                    DETAIL 01
                  </p>
                </div>
                <div
                  className="aspect-video bg-[var(--c-surface)] border flex items-center justify-center"
                  style={{ borderColor: 'var(--c-border)' }}
                >
                  <p
                    className="text-[11px] text-[var(--c-subtle)]"
                    style={{ fontFamily: 'var(--f-mono)' }}
                  >
                    DETAIL 02
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="px-6 md:px-10 py-16 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div className="mx-auto w-full grid md:grid-cols-[200px_1fr] gap-10" style={{ maxWidth: 'var(--container-max)' }}>
            <p
              className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] pt-1"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              07 / LEARNINGS
            </p>
            <div className="space-y-4 max-w-2xl">
              {[
                'Deep brand discovery upfront eliminates design revisions downstream.',
                'GSAP ScrollTrigger with Next.js App Router requires careful client-component scoping.',
                'MongoDB Atlas free tier is sufficient for personal portfolio contact forms.',
                'Vercel Edge Network makes performance optimization largely automatic.',
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="text-[var(--c-accent)] mt-1 shrink-0" style={{ fontFamily: 'var(--f-mono)' }}>→</span>
                  <p className="text-sm text-[var(--c-muted)] leading-relaxed" style={{ fontFamily: 'var(--f-sans)' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next project CTA */}
        <section className="px-6 md:px-10 py-20">
          <div className="mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: 'var(--container-max)' }}>
            <div>
              <p
                className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-4"
                style={{ fontFamily: 'var(--f-mono)' }}
              >
                NEXT
              </p>
              <p className="text-lg text-[var(--c-text)]" style={{ fontFamily: 'var(--f-sans)' }}>
                Want to work together?
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
