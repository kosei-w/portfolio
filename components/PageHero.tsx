type Props = {
  eyebrow: string
  title: string
  desc?: string
}

export default function PageHero({ eyebrow, title, desc }: Props) {
  return (
    <section className="bg-[#0a0f1e] pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(245,158,11,0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#f59e0b] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="text-[#f59e0b] text-xs font-black tracking-[0.25em] uppercase mb-5">
          {eyebrow}
        </p>
        <h1
          className="text-white font-black leading-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          {title}
        </h1>
        {desc && (
          <p className="text-[#9ca3af] text-lg md:text-xl max-w-2xl leading-relaxed">{desc}</p>
        )}
        {/* Bottom accent line */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-[#f59e0b]/40 via-[#f59e0b]/10 to-transparent" />
      </div>
    </section>
  )
}
