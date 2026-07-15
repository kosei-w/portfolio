import InView from './motion/InView'

/**
 * 赤の一閃 — ローダーstreakと同じ言語のセクションアクセント。
 * ビューポート進入でscaleX(0→1)ストライク（.strike-line / globals.css）。
 */
export default function StrikeLine({ className = '' }: { className?: string }) {
  return <InView as="span" className={`strike-line ${className}`} aria-hidden="true" />
}
