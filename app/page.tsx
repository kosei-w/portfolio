import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import WorksSection from '@/components/WorksSection'
import VisionSection from '@/components/VisionSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kosei Idezuka — Freelance Portfolio',
  description: '可能性を開拓する全ての人に捧ぐHP。Sales / Buyer / Event Planner',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WorksSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
