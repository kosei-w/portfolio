import Phrase from '@/components/Phrase'
import Section from './Section'

const GOALS = [
  { title: 'どこでも眠れる場所を', text: '商業施設から、20分で回復できる場所を全国へ。' },
  { title: 'シエスタを、日本の文化に', text: '海外の昼休みの習慣を、日本の働き方に合う形で根づかせる。' },
  { title: '国産のPayPal Mafia', text: '一緒に挑んだ仲間が、それぞれ次の会社をつくる。そんな起業家の輪を、日本から。' },
]

/** ここで背景に夜明けの光が差す（data-stage="dawn"）。サイトで唯一の色 */
export default function VisionSection() {
  return (
    <Section id="vision" title="Vision" lead="日本に、昼寝の文化を。" stage="dawn">
      <ul className="border-t border-line">
        {GOALS.map((g) => (
          <li key={g.title} className="border-b border-line py-6">
            <h3 className="phrase text-headline font-medium text-ink">
              <Phrase>{g.title}</Phrase>
            </h3>
            <p className="phrase mt-2 text-body text-ink-2">
              <Phrase>{g.text}</Phrase>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
