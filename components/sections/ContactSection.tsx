import Contact from '@/components/Contact'
import Phrase from '@/components/Phrase'
import { CONTACT_EMAIL } from '@/lib/site'
import Section from './Section'

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact" lead="一緒に、開拓しませんか。">
      <p className="phrase text-body text-ink-2 md:text-lead">
        <Phrase>事業の相談、取材、ただ話してみたい、も歓迎です。2営業日以内に返信します。</Phrase>
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-6 inline-block break-all font-display text-headline font-medium text-ink underline decoration-line underline-offset-8 transition-colors duration-500 hover:decoration-ink"
      >
        {CONTACT_EMAIL}
      </a>
      <div className="mt-14">
        <Contact />
      </div>
    </Section>
  )
}
