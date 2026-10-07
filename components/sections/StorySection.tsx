import Phrase from '@/components/Phrase'
import Section from './Section'

// 年表や大きな数字にせず、文章で読ませる。年号はメモに無いので書かない
export default function StorySection() {
  return (
    <Section id="story" title="Story" lead="落ち続けた就活から、今のパラレルワークまで。">
      <div className="phrase space-y-6 text-body text-ink-2 md:text-lead">
        <p>
          <Phrase>
            20代は苦労したほうがいい。そう思ってベンチャーばかり受けて、就活では落ち続けました。雇ってもらえないなら、自分でやるしかない。その時は学生で、留学した先のマルタ共和国でシエスタの文化にふれ、睡眠の事業で学生起業を考えました。
          </Phrase>
        </p>
        <p>
          <Phrase>
            ヨーロッパにモデルケースとなるプロダクトもありましたが、OEMで作るにも、輸入して卸すにもお金がかかる。まずはお金を貯めようと思い、起業は見送りました。大学4年の8月にもう一度就活をはじめ、11月に内定をもらいました。
          </Phrase>
        </p>
        <p>
          <Phrase>決め手は、最終面接で社長たちに投げた質問でした。</Phrase>
          <span className="text-ink">
            <Phrase>「今までの人生、何点ですか？ 代表になってから、それは変わりましたか？」</Phrase>
          </span>
          <Phrase>
            ほとんどの社長が5〜10点と答えるなか、80〜100点と答えた社長がいました。その人が率いる医療スタートアップに入社し、会社はつい最近上場しました。
          </Phrase>
        </p>
        <p>
          <Phrase>
            人の豊かさも、成長も、理想の上司もある。このままでもいいと思えました。それでも、20代の起業家が次々と話題になり、同じ世代の挑戦と、たくさんの出会いに火をつけられた。今は、公私ともに仲良くなれるようなビジネスパートナーを探し、事業の可能性を開拓しています。
          </Phrase>
        </p>
      </div>
    </Section>
  )
}
