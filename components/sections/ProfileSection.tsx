import Phrase from '@/components/Phrase'
import Section from './Section'

const FACTS = [
  { term: '拠点', value: '東京' },
  { term: '本業', value: '医療SaaS コンサルティングセールス（正社員）' },
  { term: '個人の活動', value: 'ギフトショップの共同経営／飲食店のMEO・GEO支援／STARTUP SAIL' },
  { term: '目指すもの', value: '日本に、昼寝の文化をつくる' },
]

export default function ProfileSection() {
  return (
    <Section id="profile" title="Profile" lead="開拓進行形を歩む、すべての人の背中を押す。" stage="walk">
      <div className="phrase space-y-5 text-body text-ink-2 md:text-lead">
        <p>
          <Phrase>
            出塚航世（いでづか・こうせい）。医療DXを進めるSaaS企業でコンサルティングセールスとして働きながら、個人で3つの事業を動かしています。
          </Phrase>
        </p>
        <p>
          <Phrase>いつか、日本に昼寝の文化をつくる。そこへ向かう途中を、そのまま見せるためのサイトです。</Phrase>
        </p>
      </div>

      <dl className="mt-12 border-t border-line">
        {FACTS.map(({ term, value }) => (
          <div key={term} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4 md:grid-cols-[9rem_1fr]">
            <dt className="text-body text-ink-3">{term}</dt>
            <dd className="phrase text-body text-ink">
              <Phrase>{value}</Phrase>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
