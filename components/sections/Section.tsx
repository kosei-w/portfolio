import type { CSSProperties, ReactNode } from 'react'
import InView from '@/components/motion/InView'
import Phrase from '@/components/Phrase'
import { SECTIONS, type SectionId } from '@/lib/sections'

type Props = {
  id: SectionId
  /** 英字のセクション名（Geist） */
  title: string
  /** 和文のリード。セクションの言いたいことを1文で */
  lead?: string
  /** Stage.tsx の目印。walk＝写真Bの区間の始まり、dawn＝夜明けの光 */
  stage?: 'walk' | 'dawn'
  children: ReactNode
}

const delay = (s: number) => ({ '--reveal-delay': `${s}s` }) as CSSProperties

/**
 * セクションの共通の骨格。番号と細い線 → 英字の見出し → 和文のリード → 中身、を左の1列に積む。
 * 右側は空けて、背景の宇宙飛行士が文字に隠れないようにする
 */
export default function Section({ id, title, lead, stage, children }: Props) {
  const no = String(SECTIONS.findIndex((s) => s.id === id) + 1).padStart(2, '0')

  return (
    <InView as="section" id={id} data-stage={stage} className="px-6 py-[14vh] md:px-12">
      <div className="max-w-[36rem]">
        <header className="border-t border-line pt-5">
          <p className="rise font-mono text-label text-ink-3">{no}</p>
          <h2 className="rise mt-8 font-display text-title font-medium text-ink" style={delay(0.05)}>
            {title}
          </h2>
          {lead && (
            <p className="rise phrase mt-5 text-headline font-medium text-ink" style={delay(0.12)}>
              <Phrase>{lead}</Phrase>
            </p>
          )}
        </header>
        <div className="rise mt-12" style={delay(0.2)}>
          {children}
        </div>
      </div>
    </InView>
  )
}
