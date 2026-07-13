import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Noto_Sans_JP, Shippori_Mincho } from 'next/font/google'
import Loader from '@/components/Loader/Loader'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-shippori',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kosei Idezuka — Web Designer & Developer',
  description: 'Freelance web designer and developer. Next.js + Tailwind CSS + Vercel. Helping businesses in Japan build modern, high-performance web experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansJP.variable} ${shipporiMincho.variable}`}>
      <body className="antialiased bg-[#0A0A0A] text-[#E8E6E0]">
        <Loader />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
