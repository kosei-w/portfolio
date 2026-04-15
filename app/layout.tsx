import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'Kosei | HP制作 — 最短10日納品',
  description:
    '中小企業・個人事業主向けのHP制作。制作会社の1/6の納期・明瞭な料金体系。医療DX出身のコンサルタントが、集客につながるサイトを作ります。',
  keywords: 'HP制作, ホームページ制作, Web制作, フリーランス, Next.js, 中小企業',
  openGraph: {
    title: 'Kosei | HP制作 — 最短10日納品',
    description: '中小企業・個人事業主向けのHP制作。制作会社の1/6の納期で、集客につながるサイトを作ります。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
