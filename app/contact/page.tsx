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
            <a
              href="mailto:Kosei.idezuka@navislab.jp"
              className="text-meta font-mono text-ink-faint transition-colors duration-300 hover:text-accent"
            >
              Kosei.idezuka@navislab.jp
            </a>
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
