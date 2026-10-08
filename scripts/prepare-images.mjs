// 背景素材の書き出し。元写真（assets-src/、git管理外）→ public/images/
//   node scripts/prepare-images.mjs
//
// 1. 写真2枚をモノクロに焼き込む（サイトの色は霧のグレー1系統。夜明けの色はCSSで重ねる）
// 2. 横に継ぎ目なくループする霧のテクスチャを、シード固定の乱数で生成する
// 3. SNSカード（app/opengraph-image.jpg）を写真Aと見出しから書き出す
//    文字はこのMacのシステムフォントで焼き込む（ビルド時にWebフォントを取りに行かないため）
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const OUT = 'public/images'

const PHOTOS = [
  // Unsplash License / Alex Shuper — https://unsplash.com/photos/JA14fUcNKFE
  { src: 'assets-src/unsplash-JA14fUcNKFE-pillars.jpg', out: 'scene-pillars.jpg' },
  // 画像生成AIで作ったオリジナル（霧の奥の惑星へ歩く背中）。元が1086pxと小さいので2倍に拡大する
  { src: 'assets-src/ai-walk.png', out: 'scene-walk.jpg', upscale: true },
]

const CONTRAST = 1.12
const PHOTO_WIDTH = 2400
const PHOTO_QUALITY = 84

async function bakeMonochrome({ src, out, upscale = false }) {
  await sharp(src)
    .resize({ width: PHOTO_WIDTH, withoutEnlargement: !upscale, kernel: 'lanczos3' })
    .grayscale()
    .linear(CONTRAST, -(CONTRAST - 1) * 128)
    .toColourspace('b-w')
    .jpeg({ quality: PHOTO_QUALITY, mozjpeg: true })
    .toFile(`${OUT}/${out}`)
}

/** mulberry32。Math.randomを使わず、何度書き出しても同じ霧になる */
function createRandom(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// 霧はやわらかいので低解像度で十分（CSSで拡大して使う）
const FOG_W = 1024
const FOG_H = 256

/**
 * なめらかなノイズ1層。低解像度の乱数を横に3枚並べて拡大し、真ん中だけ切り出す
 * → 左右の端が隣の繰り返しとつながるので、横にループさせても継ぎ目が出ない
 */
async function noiseOctave(cellsX, cellsY, rand) {
  const cells = Buffer.alloc(cellsX * cellsY)
  for (let i = 0; i < cells.length; i++) cells[i] = Math.floor(rand() * 256)
  const tiled = Buffer.alloc(cellsX * 3 * cellsY)
  for (let y = 0; y < cellsY; y++) {
    for (let x = 0; x < cellsX * 3; x++) tiled[y * cellsX * 3 + x] = cells[y * cellsX + (x % cellsX)]
  }
  return sharp(tiled, { raw: { width: cellsX * 3, height: cellsY, channels: 1 } })
    .resize(FOG_W * 3, FOG_H, { kernel: 'cubic' })
    .extract({ left: FOG_W, top: 0, width: FOG_W, height: FOG_H })
    .raw()
    .toBuffer()
}

async function writeFog() {
  const rand = createRandom(20261006)
  const octaves = [
    { buf: await noiseOctave(6, 3, rand), weight: 0.55 },
    { buf: await noiseOctave(14, 5, rand), weight: 0.3 },
    { buf: await noiseOctave(32, 9, rand), weight: 0.15 },
  ]
  // 白一色＋濃淡はアルファだけ。上下の端は透明に落として、帯状の霧にする
  const rgba = Buffer.alloc(FOG_W * FOG_H * 4)
  for (let y = 0; y < FOG_H; y++) {
    const v = y / (FOG_H - 1)
    const band = Math.sin(Math.PI * v) ** 1.6
    for (let x = 0; x < FOG_W; x++) {
      const i = y * FOG_W + x
      const n = octaves.reduce((sum, o) => sum + (o.buf[i] / 255) * o.weight, 0)
      const density = Math.max(0, (n - 0.38) / 0.62) ** 1.4
      // ディザ（±1.5）で8bitの縞（バンディング）を消す
      const dither = (rand() - 0.5) * 3
      rgba[i * 4] = rgba[i * 4 + 1] = rgba[i * 4 + 2] = 255
      rgba[i * 4 + 3] = Math.max(0, Math.min(255, Math.round(255 * density * band + dither)))
    }
  }
  await sharp(rgba, { raw: { width: FOG_W, height: FOG_H, channels: 4 } })
    .blur(2)
    .webp({ lossless: true })
    .toFile(`${OUT}/fog.webp`)
}

const OG_W = 1200
const OG_H = 630

async function writeOgImage() {
  // 宇宙飛行士の全身（写真の高さの約25〜75%）がカードに収まるよう、縦長の写真を右側に置く
  const PHOTO_H = 1000
  const PHOTO_TOP = 190
  const resized = await sharp(PHOTOS[0].src)
    .resize({ height: PHOTO_H })
    .grayscale()
    .linear(CONTRAST, -(CONTRAST - 1) * 128)
    .toBuffer()
  const { width: photoW } = await sharp(resized).metadata()
  const crop = await sharp(resized).extract({ left: 0, top: PHOTO_TOP, width: photoW, height: OG_H }).toBuffer()
  const photo = await sharp({ create: { width: OG_W, height: OG_H, channels: 3, background: '#0c0d0f' } })
    .composite([{ input: crop, left: OG_W - photoW, top: 0 }])
    .png()
    .toBuffer()
  const overlay = Buffer.from(`
    <svg width="${OG_W}" height="${OG_H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="l" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0.42" stop-color="#0c0d0f" stop-opacity="1"/>
          <stop offset="0.72" stop-color="#0c0d0f" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="b" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0.45" stop-color="#0c0d0f" stop-opacity="0"/>
          <stop offset="1" stop-color="#0c0d0f" stop-opacity="0.8"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#l)"/>
      <rect width="100%" height="100%" fill="url(#b)"/>
      <g fill="#ffffff" fill-opacity="0.9" font-family="Helvetica Neue" font-weight="500" font-size="92" letter-spacing="-3.5">
        <text x="72" y="330">Pioneering,</text>
        <text x="72" y="422">in progress.</text>
      </g>
      <text x="74" y="480" fill="#ffffff" fill-opacity="0.72" font-family="Helvetica Neue, Hiragino Sans" font-size="26">Kosei Idezuka — 出塚航世</text>
    </svg>`)
  await sharp(photo).composite([{ input: overlay }]).jpeg({ quality: 86, mozjpeg: true }).toFile('app/opengraph-image.jpg')
}

await mkdir(OUT, { recursive: true })
await Promise.all([...PHOTOS.map(bakeMonochrome), writeFog(), writeOgImage()])
console.log('done →', OUT)
