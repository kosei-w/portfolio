import Phrase from '@/components/Phrase'
import Section from './Section'

// 一覧にせず、文章で読ませる。ギフトショップは店名を出さない（Koseの指定）
export default function NowSection() {
  return (
    <Section id="now" title="Now" lead="会社員のまま、4つのことを同時に動かしています。">
      <div className="phrase space-y-6 text-body text-ink-2 md:text-lead">
        <p>
          <Phrase>
            本業は、医療DXを進めるSaaS企業のコンサルティングセールス。商談・提案・関係づくりを担当しています。入社した会社は、のちに上場しました。
          </Phrase>
        </p>
        <p>
          <Phrase>そのかたわら、個人で3つのことを動かしています。</Phrase>
        </p>
        <p>
          <Phrase>
            ひとつは、ギフトショップの共同経営。ふたつめは、飲食店のMEO・GEO支援。Googleマップや、ChatGPTなどのAI検索で、お店が見つかるようにする仕事です。三つめは、スタートアップの動きを追うメディア「STARTUP
            SAIL」の運営です。
          </Phrase>
        </p>
      </div>
    </Section>
  )
}
