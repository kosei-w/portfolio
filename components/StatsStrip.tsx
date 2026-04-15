const items = [
  { value: '最短10日', label: '納期' },
  { value: '1/6', label: '制作会社比' },
  { value: '¥128,000〜', label: 'スターター' },
  { value: '30分', label: '初回相談（無料）' },
]

export default function StatsStrip() {
  return (
    <div className="bg-[#f59e0b] py-5 px-6 overflow-x-auto">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 min-w-max md:min-w-0">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-[#0a0f1e] font-black text-xl md:text-2xl leading-none">{item.value}</p>
              <p className="text-[#78350f] text-xs mt-1 font-medium">{item.label}</p>
            </div>
            {i < items.length - 1 && (
              <div className="w-px h-8 bg-[#0a0f1e]/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
