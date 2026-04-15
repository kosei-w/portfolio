import type { Metadata } from 'next'
import { Syne, Noto_Sans_JP } from 'next/font/google'
import Loader from '@/components/Loader'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kosei Wakabayashi — HP制作',
  description:
    '中小企業・個人事業主向けのHP制作。最短10日納品・明瞭な料金体系。医療DX出身のコンサルタントが、集客につながるサイトを一気通貫で担います。',
  keywords: 'HP制作, ホームページ制作, Web制作, フリーランス, 中小企業',
  openGraph: {
    title: 'Kosei Wakabayashi — HP制作',
    description: '中小企業・個人事業主向けのHP制作。最短10日納品で、集客につながるサイトを作ります。',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${syne.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">
        <Loader />
        {children}
      </body>
    </html>
  )
}
