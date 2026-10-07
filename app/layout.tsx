import type { Metadata } from 'next'
import { Geist, Geist_Mono, Zen_Kaku_Gothic_New } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import SmoothScroll from '@/components/motion/SmoothScroll'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site'
import './globals.css'

// 英字見出し。硬質で細部が締まったサンセリフ
const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-geist',
  display: 'swap',
})

// ラベルと数字。等幅で桁をそろえる
const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
})

// 和文。見出しも500まで（太すぎる和文は写真の繊細さとぶつかる）
const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-zen-kaku',
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
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

// サイトに掲載している事実だけをミラーする（新情報をここに足さない）
const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Kosei Idezuka',
      alternateName: '出塚航世',
      email: 'Kosei.idezuka@navislab.jp',
      url: SITE_URL,
      address: { '@type': 'PostalAddress', addressLocality: 'Tokyo', addressCountry: 'JP' },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'ja',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: bodyのインラインスクリプトがhydration前にjsクラスを足すため
    <html
      lang="ja"
      className={`${geist.variable} ${geistMono.variable} ${zenKaku.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        {/* revealの初期非表示ゲート。JS無効環境ではコンテンツを隠さない */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }} />
        <JsonLd data={siteJsonLd} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
