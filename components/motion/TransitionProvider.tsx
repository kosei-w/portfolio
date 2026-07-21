'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Stage = 'idle' | 'covering' | 'covered' | 'revealing'
type NavigateFn = (href: string) => void

const TransitionContext = createContext<NavigateFn | null>(null)

export function usePageTransition() {
  return useContext(TransitionContext)
}

const COVER_MS = 500 // 一閃0.3s→パネル閉0.32s(遅delay0.14s)
const REVEAL_MS = 700 // パネル開0.6s+残光フェード
const FAILSAFE_MS = 4000 // 遷移先が来ないときの強制開帳

/**
 * 抜刀ページトランジション。赤の一閃→黒パネルが閉じる→遷移→パネル分割で開く
 * （ローダーの sweep/split と同じ視覚言語）。初回ロードはローダー担当、
 * popstate・修飾キー・外部リンク・reduced-motion では発火しない。
 */
export default function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [stage, setStage] = useState<Stage>('idle')
  const [prevPathname, setPrevPathname] = useState(pathname)

  // 遷移先が描画されたら開帳（popstate等、覆っていないときは何もしない）
  // — レンダー中の状態調整パターン（react-hooks/set-state-in-effect回避）
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    if (stage === 'covering' || stage === 'covered') {
      setStage('revealing')
    }
  }

  const navigate = (href: string) => {
    if (stage !== 'idle' || href === pathname) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      router.push(href)
      return
    }
    setStage('covering')
    window.setTimeout(() => {
      setStage('covered')
      router.push(href)
    }, COVER_MS)
  }

  useEffect(() => {
    if (stage === 'revealing') {
      const t = window.setTimeout(() => setStage('idle'), REVEAL_MS)
      return () => window.clearTimeout(t)
    }
    if (stage === 'covered') {
      const t = window.setTimeout(() => setStage('revealing'), FAILSAFE_MS)
      return () => window.clearTimeout(t)
    }
  }, [stage])

  return (
    <TransitionContext.Provider value={navigate}>
      {children}
      <div className={`page-transition stage-${stage}`} aria-hidden="true">
        <div className="pt-panel pt-top" />
        <div className="pt-panel pt-bottom" />
        <div className="pt-strike" />
      </div>
    </TransitionContext.Provider>
  )
}
