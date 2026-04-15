import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://portfolio-dw2plqfkk-kosei-ws-projects.vercel.app/sitemap.xml',
  }
}
