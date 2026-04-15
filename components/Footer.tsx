export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="text-xl font-black text-white">
          Kosei<span className="text-[#f59e0b]">.</span>
        </a>
        <p className="text-[#6b7280] text-sm">
          © 2026 Kosei. HP制作 — Next.js + Vercel
        </p>
        <a
          href="#contact"
          className="text-[#f59e0b] text-sm font-bold hover:underline"
        >
          無料相談はこちら →
        </a>
      </div>
    </footer>
  )
}
