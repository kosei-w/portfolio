import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import InView from '@/components/motion/InView'

export const metadata: Metadata = {
  title: 'Contact — Kosei Idezuka',
  description: 'Get in touch to discuss your web project.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page header */}
        <InView as="section" className="border-b border-line px-6 pb-s4 pt-40 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <p className="mb-8">
              <span className="reveal-wrap">
                <span className="reveal-line text-label font-mono text-ink-faint">CONTACT</span>
              </span>
            </p>
            <h1 className="mb-6 text-display font-display font-light text-ink">
              <span className="reveal-wrap">
                <span className="reveal-line">Let&apos;s work together.</span>
              </span>
            </h1>
            <p className="mb-6 max-w-md text-body text-ink-muted">
              相談だけでも歓迎です。&ldquo;何から始めればいいか分からない&rdquo;の段階からどうぞ。
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-meta font-mono text-ink-faint">
              <a
                href="mailto:Kosei.idezuka@navislab.jp"
                className="transition-colors duration-300 hover:text-accent"
              >
                Kosei.idezuka@navislab.jp
              </a>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
                REPLY WITHIN 1 BUSINESS DAY
              </span>
            </div>
          </div>
        </InView>

        {/* Form */}
        <section className="px-6 py-s4 md:px-10">
          <div className="mx-auto w-full max-w-[40rem]">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
