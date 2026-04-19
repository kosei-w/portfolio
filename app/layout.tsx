import type { Metadata } from 'next'
import { JetBrains_Mono, Noto_Sans_JP } from 'next/font/google'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'Kosei Idezuka — Web Designer & Developer',
  description: 'Freelance web designer and developer. Next.js + Tailwind CSS + Vercel. Helping businesses in Japan build modern, high-performance web experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${jetbrainsMono.variable} ${notoSansJP.variable}`}>
      <body className="antialiased bg-[#0A0A0A] text-[#E8E6E0]">
        <CustomCursor />
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
