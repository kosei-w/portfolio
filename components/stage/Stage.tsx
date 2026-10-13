'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
/** 等速だと機械的に見えるので、転換は入りと抜けをゆるめる */
const smooth = (v: number) => v * v * (3 - 2 * v)

// 写真の読み込みが遅くても、見出しはこれ以上待たせない
const READY_FALLBACK_MS = 2500
const markReady = () => document.documentElement.classList.add('is-ready')

/** ページ上の目印（data-stage属性）。章のセクション側に置く */
const MARK = {
  /** シーンB（背中で奥へ進む）の区間が始まる章 */
  walk: '[data-stage="walk"]',
  /** 写真C（頂上の仲間たち）に切り替わり、夜明けの光が差しはじめる章 */
  dawn: '[data-stage="dawn"]',
} as const

/**
 * 画面に固定した背景。写真2枚と霧を重ね、スクロール量をCSS変数に変換するだけ。
 *   --t    シーンA→Bの転換（0〜1）
 *   --walk シーンBの中をどれだけ奥へ進んだか（0〜1）
 *   --dawn 写真Cへの転換と夜明けの光（0〜1）
 * 実際の動き（transform / opacity）は globals.css の .stage 配下が担う。スクロールでReactの再描画は起こさない。
 */
export default function Stage() {
  const ref = useRef<HTMLDivElement>(null)
  // 写真Bは画面に固定した背景の中にあり、loading="lazy" では後回しにならない。
  // 最初の表示（写真A）の帯域を奪わないよう、Aが出てから読み込みを始める
  const [shouldLoadWalk, setShouldLoadWalk] = useState(false)
  // 写真C（Visionの場面）も同じ理由で、Bが出てから読み込む
  const [shouldLoadSummit, setShouldLoadSummit] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0

    const update = () => {
      raf = 0
      const vh = window.innerHeight
      const y = window.scrollY
      const top = (selector: string) => {
        const node = document.querySelector<HTMLElement>(selector)
        return node ? node.getBoundingClientRect().top + y : Number.POSITIVE_INFINITY
      }
      const walkTop = top(MARK.walk)
      const dawnTop = top(MARK.dawn)

      // 転換はヒーローが画面の上半分を抜けるあいだに終える
      const t = smooth(clamp01((y - vh * 0.2) / (Math.min(walkTop, vh) - vh * 0.2)))
      const walk = clamp01((y - walkTop + vh) / (dawnTop - walkTop))
      const dawn = clamp01((y - dawnTop + vh * 0.9) / (vh * 0.8))

      el.style.setProperty('--t', t.toFixed(4))
      el.style.setProperty('--walk', walk.toFixed(4))
      el.style.setProperty('--dawn', dawn.toFixed(4))
    }

    const request = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [])

  // ヒーローの写真が出たら見出しも立ち上げる（.is-ready → globals.css の .hero .rise）
  useEffect(() => {
    // 写真の読み込みが遅い・失敗したときも、見出しと後続の写真は待たせすぎない
    const fallback = setTimeout(() => {
      markReady()
      setShouldLoadWalk(true)
      setShouldLoadSummit(true)
    }, READY_FALLBACK_MS)
    return () => clearTimeout(fallback)
  }, [])

  const markLoaded = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const scene = e.currentTarget.closest('.scene')
    scene?.setAttribute('data-loaded', '')
    if (scene?.classList.contains('scene-a')) {
      markReady()
      setShouldLoadWalk(true)
    }
    if (scene?.classList.contains('scene-b')) setShouldLoadSummit(true)
  }

  return (
    <div ref={ref} className="stage" aria-hidden="true">
      {/* A — 光の柱を背に、身を潜める */}
      <div className="scene scene-a">
        <div className="scene-move">
          <Image
            src="/images/scene-pillars.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scene-img"
            onLoad={markLoaded}
          />
        </div>
      </div>

      {/* B — 霧の奥の惑星へ、背中で進んでいく */}
      <div className="scene scene-b">
        <div className="scene-move">
          {shouldLoadWalk && (
            <Image
              src="/images/scene-walk.jpg"
              alt=""
              fill
              sizes="100vw"
              className="scene-img"
              onLoad={markLoaded}
            />
          )}
        </div>
      </div>

      {/* C — 満天の星と天の川の下、雲海の頂で仲間がそれぞれの持ち場につく（Visionから） */}
      <div className="scene scene-c">
        <div className="scene-move">
          {shouldLoadSummit && (
            <Image
              src="/images/scene-summit.jpg"
              alt=""
              fill
              sizes="100vw"
              className="scene-img"
              onLoad={markLoaded}
            />
          )}
        </div>
        <div className="dawn" />
      </div>

      <div className="stage-dim" />
      <div className="fog fog-far" />
      <div className="fog fog-near" />
      <div className="stage-shade" />
    </div>
  )
}
