import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP, Shippori_Mincho, Playfair_Display } from 'next/font/google'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'], 
  weight: ['300','400','500','700'],
  variable: '--font-noto-sans-jp' 
})                                                               

const inter = Inter({        
  subsets: ['latin'], 
  weight: ['300','400','500','600'],
  variable: '--font-inter' 
})                                                                      

const shipporiMincho = Shippori_Mincho({ 
  subsets: ['latin'], 
  weight: ['400','500','700'],
  variable: '--font-shippori' 
})                                                                   

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400','700'], 
  style: ['normal','italic'], 
  variable: '--font-playfair' 
})                                              

export const metadata: Metadata = {
  title: 'Kosei Idezuka — Freelance Portfolio',
  description: '可能性を開拓する全ての人に捧ぐHP。Sales / Buyer / Event Planner',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable} ${shipporiMincho.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
