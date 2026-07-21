import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShowcaseRow from '@/components/ShowcaseRow'
import InView from '@/components/motion/InView'

export const metadata: Metadata = {
  title: 'Works — Kosei Idezuka',
  description: '営業出身のWebデザイナーが手がけた制作実績。デザインではなく「問い合わせ」を納品するサイトづくり。',
}

export default function WorksPage() {
  return (
    <>
      <Header />
      <main>
        <InView as="section" className="px-6 pb-s4 pt-40 md:px-10">
          <div className="mx-auto w-full max-w-shell">
            <p className="mb-8">
              <span className="reveal-wrap">
                <span className="reveal-line text-label font-mono text-ink-faint">SELECTED WORK</span>
              </span>
            </p>
            <h1 className="text-display font-display font-light text-ink">
              <span className="reveal-wrap">
                <span className="reveal-line">Works</span>
              </span>
            </h1>
          </div>
        </InView>

        <section className="border-t border-line py-s5">
          <ShowcaseRow
            title="HIGHER LLC"
            year="2026"
            role="Design / Development"
            href="/works/higher"
            imageSrc="/images/works/higher/hero.png"
            imageAlt="HIGHER LLC コーポレートサイトのヒーロー画面"
            stats={['公開数日で初の問い合わせ', '表示速度 1秒未満', 'LIGHTHOUSE 95+']}
            priority
          />
        </section>
      </main>
      <Footer />
    </>
  )
}
