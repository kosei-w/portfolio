type JsonLdProps = {
  data: Record<string, unknown>
}

// 構造化データ（schema.org）をNext公式推奨のネイティブscriptタグで出力する。
// `<` のエスケープはXSS防止（next/dist/docs/01-app/02-guides/json-ld.md 準拠）
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
