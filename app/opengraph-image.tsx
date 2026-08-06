import { ImageResponse } from 'next/og'

export const alt = 'Kosei Idezuka — Web Designer & Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

const BG = '#0A0A0A'
const INK = '#EDEDED'
const INK_FAINT = '#6B6B6B'
const ACCENT = '#E53935'

// サイトの世界観（黒地・細身タイポ・赤の一閃）をSNSカードに転写。
// 既定フォント（Noto Sans）はLatinのみ確実なので英字表記に限定する
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: BG,
          padding: '64px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: INK_FAINT,
            fontSize: 22,
            letterSpacing: 6,
          }}
        >
          <span>WEB DESIGNER &amp; DEVELOPER</span>
          <span style={{ color: ACCENT }}>●</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: INK,
              fontSize: 96,
              fontWeight: 400,
              letterSpacing: 2,
            }}
          >
            Kosei Idezuka
          </div>
          <div
            style={{
              marginTop: 40,
              height: 2,
              width: '100%',
              background: `linear-gradient(90deg, transparent, ${ACCENT} 18%, ${ACCENT} 82%, transparent)`,
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: INK_FAINT,
            fontSize: 22,
            letterSpacing: 6,
          }}
        >
          <span>TOKYO, JP</span>
          <span>AVAILABLE FOR NEW PROJECTS</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
