type Props = {
  eyebrow: string
  title: string
  desc?: string
}

export default function PageHero({ eyebrow, title, desc }: Props) {
  return (
    <section className="bg-[#0a0f1e] pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="text-[#f59e0b] text-sm font-bold tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </p>
        <h1
          className="text-white font-black leading-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          {title}
        </h1>
        {desc && (
          <p className="text-[#9ca3af] text-lg max-w-2xl leading-relaxed">{desc}</p>
        )}
      </div>
    </section>
  )
}
