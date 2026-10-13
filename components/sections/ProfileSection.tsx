import Phrase from '@/components/Phrase'
import Section from './Section'

// 会社員の仕事と個人の事業は分けず、4つの活動として並べる（Koseの指定）
const FACTS: { term: string; value: string | string[] }[] = [
  { term: '拠点', value: '東京を中心に活動' },
  {
    term: '活動',
    value: [
      '医療SaaSのコンサルティングセールス',
      'ギフトショップの共同経営',
      '飲食店のMEO・GEO支援',
      'スタートアップメディア「STARTUP SAIL」の運営',
    ],
  },
]

export default function ProfileSection() {
  return (
    <Section id="profile" title="Profile" lead="開拓進行形を歩む、すべての人の背中を押す。" leadInverse stage="walk">
      <div className="phrase space-y-5 text-body text-ink-2 md:text-lead">
        <p>
          <Phrase>出塚航世（いでづか こうせい）。4つの仕事を並行して動かしている、パラレルワーカーです。</Phrase>
        </p>
        <p>
          <Phrase>
            VUCAと呼ばれる、先の読めない時代。正しい生き方を、僕自身もいまなお模索しています。だからこそ、僕の活動を通じて、開拓進行形を歩むすべての人の背中を押せたらと思っています。
          </Phrase>
        </p>
        <p>
          <Phrase>
            いちばんやりたいのは、日本発のPayPalマフィアを作ることと、シエスタを日本の文化にすること。そこへ向かう途中を、そのまま見せるためのサイトです。
          </Phrase>
        </p>
      </div>

      <dl className="mt-12 border-t border-line">
        {FACTS.map(({ term, value }) => (
          <div key={term} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-line py-4 md:grid-cols-[7rem_1fr]">
            <dt className="text-body text-ink-3">{term}</dt>
            <dd className="phrase text-body text-ink">
              {Array.isArray(value) ? (
                <ul className="space-y-1">
                  {value.map((v) => (
                    <li key={v}>
                      <Phrase>{v}</Phrase>
                    </li>
                  ))}
                </ul>
              ) : (
                <Phrase>{value}</Phrase>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
