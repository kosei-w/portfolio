import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — Kosei Idezuka',
  description: '営業出身のフリーランスWebデザイナー。ヒアリング力とAI活用の制作フローで、問い合わせにつながるサイトをつくります。',
}

const techStack = [
  'Next.js', 'React', 'Tailwind CSS', 'Vercel', 'MongoDB', 'GitHub',
  'TypeScript', 'Node.js',
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
                  本業はB2Bのコンサルティングセールス。企業の課題を聞き出して提案する仕事を毎日しています。だからWeb制作でも、最初に聞くのは&ldquo;どんなサイトにしたいか&rdquo;ではなく&ldquo;誰から問い合わせが欲しいか&rdquo;。デザインはそのための手段だと考えています。
                </p>
                <p className="text-sm text-[var(--c-muted)] leading-relaxed" style={{ fontFamily: 'var(--f-sans)' }}>
                  制作はNext.js + Tailwind CSS + Vercel。AIを全面活用した制作フローで、ヒアリングから公開まで最短7日。公開して終わりではなく、サイトを&ldquo;営業資産&rdquo;として育てるところまで伴走します。
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
                    title: '営業出身のヒアリング',
                    desc: '商談・提案が本業。要件定義はヒアリングそのものなので、公開後に"なんか違う"が起きる前に潰します。制作期間中の修正は回数無制限。',
                  },
                  {
                    title: 'AI-Nativeなスピード',
                    desc: 'AIを軸にした制作フローで最短7日納品。初案件のクライアントからは"思ったより全然早かった。しかもかっこいい"の声をいただきました。',
                  },
                  {
                    title: 'AI検索時代の集客設計',
                    desc: 'Google検索（SEO）に加えて、ChatGPTなどのAI検索に引用される構造設計（AIAO）まで対応。検索の入り口が変わる時代を先回りします。',
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
