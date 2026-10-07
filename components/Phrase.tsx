import { Fragment } from 'react'
import { loadDefaultJapaneseParser } from 'budoux'

const parser = loadDefaultJapaneseParser()

/**
 * 和文を文節で区切り、文節の間にだけ改行の候補（<wbr>）を置く。
 * ブラウザ任せだと「事／業」のように語の途中で折れるため。.phrase と組み合わせて使う
 */
export default function Phrase({ children }: { children: string }) {
  const chunks = parser.parse(children)
  return (
    <>
      {chunks.map((chunk, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {chunk}
        </Fragment>
      ))}
    </>
  )
}
