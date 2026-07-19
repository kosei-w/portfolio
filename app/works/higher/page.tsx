import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import StrikeLine from '@/components/StrikeLine'
import Button from '@/components/Button'
import InView from '@/components/motion/InView'

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

const challenges = [
  'No existing web presence — building from zero with no brand guidelines.',
  'The brand needed to convey premium quality and trustworthiness while remaining approachable.',
  'Required both Japanese and global audience considerations in design language.',
  'Contact form with reliable delivery and spam protection.',
]

const learnings = [
  'Deep brand discovery upfront eliminates design revisions downstream.',
  'GSAP ScrollTrigger with Next.js App Router requires careful client-component scoping.',
  'MongoDB Atlas free tier is sufficient for personal portfolio contact forms.',
  'Vercel Edge Network makes performance optimization largely automatic.',
]

const resultStats = [
  { value: '<1s', label: 'LOAD TIME' },
  { value: '95+', label: 'LIGHTHOUSE' },
]

export default function HigherCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-line px-6 pb-s4 pt-40 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <Link
              href="/works"
              className="mb-12 inline-block text-label font-mono text-ink-faint transition-colors duration-300 hover:text-accent"
            >
              ← WORKS
            </Link>

            <p className="mb-6 text-label font-mono text-accent">CASE STUDY</p>

            <h1 className="mb-8 text-display font-display font-light text-ink">HIGHER LLC</h1>

            <StrikeLine className="mb-8 max-w-[26rem]" />

            <div className="flex flex-wrap gap-x-8 gap-y-2 text-meta font-mono text-ink-faint">
              <span>CLIENT — HIGHER LLC</span>
              <span>YEAR — 2026</span>
              <span>ROLE — Design / Development</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="01" label="OVERVIEW" className="pt-1" />
            <p className="max-w-2xl text-body text-ink-muted">
              HIGHER LLC is a company dedicated to helping people realize their full potential. They needed a modern, high-performance website that embodied their brand philosophy — clean, elegant, and aspirational. The project involved a full design and development rebuild from scratch using the latest web technologies.
            </p>
          </div>
        </InView>

        {/* Challenge */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="02" label="CHALLENGE" className="pt-1" />
            <div className="max-w-2xl space-y-4">
              {challenges.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 shrink-0 font-mono text-accent">—</span>
                  <p className="text-body text-ink-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* Approach */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="03" label="APPROACH" className="pt-1" />
            <div className="max-w-2xl space-y-5">
              <p className="text-body text-ink-muted">
                Started with a deep brand discovery session to understand HIGHER&apos;s values, audience, and aspirations. Defined a warm beige-and-serif visual language that communicates trust and sophistication without feeling corporate.
              </p>
              <p className="text-body text-ink-muted">
                Built a single-page architecture optimized for conversion — guiding visitors from brand story to services to contact with deliberate scroll pacing. Implemented GSAP-powered scroll animations for premium feel, and integrated a MongoDB-backed contact form with server-side validation and email notifications.
              </p>
            </div>
          </div>
        </InView>

        {/* Tech Stack */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="04" label="TECH STACK" className="pt-1" />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="border border-line p-4">
                  <p className="mb-1 font-mono text-sm font-bold text-ink">{tech.name}</p>
                  <p className="text-label font-mono text-ink-faint">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* Result */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="05" label="RESULT" className="pt-1" />
            <div className="max-w-2xl space-y-8">
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {resultStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-counter font-display font-light text-accent">{stat.value}</p>
                    <p className="mt-1 text-label font-mono text-ink-faint">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-body text-ink-muted">
                Delivered a production-ready website from concept to launch. The site loads in under 1 second on Vercel&apos;s edge network and scores 95+ on Lighthouse across all categories. The client received their first inbound inquiry within days of launch.
              </p>
              <blockquote className="border-l-2 border-accent py-2 pl-6">
                <p className="mb-2 font-serif text-lead text-ink">
                  &ldquo;思ったより全然早かった。しかもかっこいい。&rdquo;
                </p>
                <cite className="text-label font-mono not-italic text-ink-faint">
                  — HIGHER LLC, Representative
                </cite>
              </blockquote>
            </div>
          </div>
        </InView>

        {/* Screenshots */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="06" label="SCREENSHOTS" className="pt-1" />
            <div className="space-y-4">
              <div className="media-reveal relative aspect-[16/10] w-full overflow-hidden bg-surface">
                <div data-zoom className="absolute inset-0">
                  <Image
                    src="/images/works/higher/hero.png"
                    alt="HIGHER LLC トップページ"
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="media-reveal relative aspect-video w-full overflow-hidden bg-surface">
                  <div data-zoom className="absolute inset-0">
                    <Image
                      src="/images/works/higher/services.png"
                      alt="HIGHER LLC サービス紹介セクション"
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="media-reveal relative aspect-video w-full overflow-hidden bg-surface">
                  <div data-zoom className="absolute inset-0">
                    <Image
                      src="/images/works/higher/contact.png"
                      alt="HIGHER LLC お問い合わせフォーム"
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="media-reveal relative aspect-[390/844] w-40 overflow-hidden bg-surface sm:w-48">
                <div data-zoom className="absolute inset-0">
                  <Image
                    src="/images/works/higher/mobile.png"
                    alt="HIGHER LLC モバイル表示"
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </InView>

        {/* Learnings */}
        <InView as="section" className="rise border-b border-line px-6 py-s4 md:px-10">
          <div className="mx-auto grid w-full max-w-shell gap-10 md:grid-cols-[200px_1fr]">
            <SectionHeading no="07" label="LEARNINGS" className="pt-1" />
            <div className="max-w-2xl space-y-4">
              {learnings.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 shrink-0 font-mono text-accent">→</span>
                  <p className="text-body text-ink-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* Next project CTA */}
        <section className="px-6 py-s5 md:px-10">
          <InView className="rise mx-auto flex w-full max-w-shell flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-label font-mono text-ink-faint">NEXT</p>
              <p className="text-lead text-ink">Want to work together?</p>
            </div>
            <Button href="/contact">GET IN TOUCH</Button>
          </InView>
        </section>
      </main>
      <Footer />
    </>
  )
}
