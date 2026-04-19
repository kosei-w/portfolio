import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkCard from '@/components/WorkCard'

export const metadata: Metadata = {
  title: 'Works — Kosei Idezuka',
  description: 'Selected web design and development projects by Kosei Idezuka.',
}

const works = [
  {
    id: 'higher',
    title: 'HIGHER LLC',
    year: '2026',
    href: '/works/higher',
    imageSrc: undefined,
  },
]

export default function WorksPage() {
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
              WORKS
            </p>
            <h1
              className="font-bold text-[var(--c-text)] leading-none"
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              }}
            >
              Selected Work
            </h1>
          </div>
        </section>

        {/* Works grid */}
        <section className="px-6 md:px-10 py-16">
          <div className="mx-auto w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {works.map((work) => (
                <WorkCard
                  key={work.id}
                  title={work.title}
                  year={work.year}
                  href={work.href}
                  imageSrc={work.imageSrc}
                />
              ))}
              <WorkCard
                title="Coming Soon"
                year="—"
                href="/works"
                comingSoon
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
