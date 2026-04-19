interface SectionTitleProps {
  label: string
  title: string
  className?: string
}

export default function SectionTitle({ label, title, className = '' }: SectionTitleProps) {
  return (
    <div className={className}>
      <p
        className="text-[11px] tracking-[0.3em] text-[var(--c-muted)] mb-4"
        style={{ fontFamily: 'var(--f-mono)' }}
      >
        {label}
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-[var(--c-text)] leading-tight"
        style={{ fontFamily: 'var(--f-mono)' }}
      >
        {title}
      </h2>
    </div>
  )
}
