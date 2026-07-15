/**
 * 連番カウンター付きセクションラベル — `(01) OVERVIEW` 形式。
 * ケーススタディの連番パターンを全ページ共通規約に昇格したもの。
 */
export default function SectionHeading({
  no,
  label,
  className = '',
}: {
  no: string
  label: string
  className?: string
}) {
  return (
    <p className={`text-label font-mono text-ink-faint ${className}`}>
      <span className="text-accent" aria-hidden="true">({no})</span> {label}
    </p>
  )
}
