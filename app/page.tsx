import type { CSSProperties } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Stage from '@/components/stage/Stage'
import ProfileSection from '@/components/sections/ProfileSection'
import StorySection from '@/components/sections/StorySection'
import VisionSection from '@/components/sections/VisionSection'
import ContactSection from '@/components/sections/ContactSection'

const delay = (s: number) => ({ '--reveal-delay': `${s}s` }) as CSSProperties

// ヒーローで「誰が・何をしている人か」まで言い切る（PROFILEの「活動」と同じ並び）
const ROLES = ['医療SaaS コンサルティングセールス', 'ギフトショップ 共同経営', '飲食店のMEO・GEO支援', 'スタートアップメディア「STARTUP SAIL」運営']

export default function Home() {
  return (
    <>
      <Stage />
      <Header />
      <main id="top" className="content-layer">
        {/* 写真A：光の柱を背に、身を潜める */}
        <section className="hero relative flex h-svh flex-col justify-end px-6 pb-10 md:px-12 md:pb-14">
          <div className="flex items-end justify-between gap-10">
            <div>
              <h1 className="rise font-display text-statement font-medium text-ink" style={delay(0.2)}>
                Pioneering,
                <br />
                in progress.
              </h1>
              <p className="rise mt-5 font-display text-lead text-ink-2 md:mt-6" style={delay(0.4)}>
                Kosei Idezuka — <span className="font-sans">出塚航世</span>
              </p>
              <ul
                className="rise mt-6 flex max-w-[44rem] flex-wrap gap-x-6 gap-y-1.5 text-[0.8125rem] tracking-[0.04em] text-ink-2"
                style={delay(0.55)}
              >
                {ROLES.map((role) => (
                  <li key={role}>
                    <span className="mr-2 text-ink-3" aria-hidden="true">
                      —
                    </span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rise hidden flex-col items-center gap-4 md:flex" style={delay(0.8)}>
              <span className="font-mono text-label text-ink-3 [writing-mode:vertical-rl]">SCROLL</span>
              <span className="scroll-cue" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ここから写真B：霧の奥へ、背中で進んでいく */}
        <ProfileSection />
        <StorySection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
