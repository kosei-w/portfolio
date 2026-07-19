import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Noto_Sans_JP, Shippori_Mincho } from 'next/font/google'
import Loader from '@/components/Loader/Loader'
import CustomCursor from '@/components/CustomCursor'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site'
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
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Kosei Idezuka',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: bodyのインラインスクリプトがhydration前にjsクラスを足すため
    <html lang="ja" className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansJP.variable} ${shipporiMincho.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-bg text-ink">
        {/* revealの初期非表示ゲート。JS無効環境ではコンテンツを隠さない */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }} />
        <Loader />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
