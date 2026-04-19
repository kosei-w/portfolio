import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact — Kosei Idezuka',
  description: 'Get in touch to discuss your web project.',
}

export default function ContactPage() {
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
              CONTACT
            </p>
            <h1
              className="font-bold text-[var(--c-text)] leading-none mb-6"
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              }}
            >
              Let&apos;s work together.
            </h1>
            <a
              href="mailto:Kosei.idezuka@navislab.jp"
              className="text-sm text-[var(--c-muted)] hover:text-[var(--c-accent)] transition-colors duration-300"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              Kosei.idezuka@navislab.jp
            </a>
          </div>
        </section>

        {/* Form */}
        <section className="px-6 md:px-10 py-16">
          <div className="mx-auto w-full" style={{ maxWidth: '640px' }}>
            <Contact />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
