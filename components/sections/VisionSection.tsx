import Phrase from '@/components/Phrase'
import Section from './Section'

// いちばんやりたい2つを先に、その入り口になる場づくりを最後に置く（Koseの指定）
const GOALS = [
  {
    title: '日本発のPayPalマフィアを作る',
    text: '一緒に挑んだ仲間が、それぞれ次の会社をつくる。そんな起業家の輪を、日本から。',
  },
  { title: 'シエスタを国産化する', text: '海外の昼寝の習慣を、日本の働き方に合う形で根づかせる。' },
  { title: 'どこでも眠れる場所をつくる', text: 'その入り口として、商業施設から、20分で回復できる場所を全国へ。' },
]

/** ここで背景に夜明けの光が差す（data-stage="dawn"）。サイトで唯一の色 */
export default function VisionSection() {
  return (
    <Section id="vision" title="Vision" stage="dawn">
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
