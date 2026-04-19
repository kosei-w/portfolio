import Link from 'next/link'
import Image from 'next/image'

interface WorkCardProps {
  title: string
  year: string
  href: string
  imageSrc?: string
  comingSoon?: boolean
}

export default function WorkCard({ title, year, href, imageSrc, comingSoon }: WorkCardProps) {
  if (comingSoon) {
    return (
      <div
        className="group relative border overflow-hidden"
        style={{
          borderColor: 'var(--c-border)',
          opacity: 0.4,
        }}
      >
        <div className="aspect-[4/3] bg-[var(--c-surface)] flex items-center justify-center">
          <span
            className="text-[11px] tracking-[0.2em] text-[var(--c-muted)]"
            style={{ fontFamily: 'var(--f-mono)' }}
          >
            COMING SOON
          </span>
        </div>
        <div className="p-5 border-t" style={{ borderColor: 'var(--c-border)' }}>
          <p
            className="text-[11px] tracking-[0.15em] text-[var(--c-subtle)] mb-1"
            style={{ fontFamily: 'var(--f-mono)' }}
          >
            —
          </p>
          <h3 className="text-sm text-[var(--c-muted)]">Next project</h3>
        </div>
      </div>
    )
  }

  return (
    <Link
      href={href}
      className="group relative border overflow-hidden block transition-all duration-300 hover:border-[var(--c-accent)]/30"
      style={{ borderColor: 'var(--c-border)' }}
    >
      <div className="aspect-[4/3] bg-[var(--c-surface)] overflow-hidden relative">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-[11px] tracking-[0.2em] text-[var(--c-muted)]"
              style={{ fontFamily: 'var(--f-mono)' }}
            >
              {title}
            </span>
          </div>
        )}
      </div>
      <div
        className="p-5 border-t flex items-center justify-between transition-colors duration-300 group-hover:bg-[var(--c-surface)]"
        style={{ borderColor: 'var(--c-border)' }}
      >
        <div>
          <p
            className="text-[11px] tracking-[0.15em] text-[var(--c-muted)] mb-1"
            style={{ fontFamily: 'var(--f-mono)' }}
          >
            {year}
          </p>
          <h3 className="text-sm text-[var(--c-text)] font-medium">{title}</h3>
        </div>
        <span
          className="text-[var(--c-accent)] text-xs transition-transform duration-300 group-hover:translate-x-1"
          style={{ fontFamily: 'var(--f-mono)' }}
        >
          →
        </span>
      </div>
    </Link>
  )
}
