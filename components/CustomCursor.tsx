'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPointerFine, setIsPointerFine] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check if the device uses a fine pointer (like a mouse) vs coarse (touch)
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsPointerFine(mediaQuery.matches)

    const updateMedia = (e: MediaQueryListEvent) => setIsPointerFine(e.matches)
    mediaQuery.addEventListener('change', updateMedia)

    return () => mediaQuery.removeEventListener('change', updateMedia)
  }, [])

  useEffect(() => {
    if (!isPointerFine) return

    let rafId: number
    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true)
      // Using requestAnimationFrame for smooth cursor following
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    const checkHover = () => {
      const hoveredElements = document.querySelectorAll(':hover')
      let hoveringInteractable = false
      hoveredElements.forEach((el) => {
        const tag = el.tagName.toLowerCase()
        if (tag === 'a' || tag === 'button' || el.classList.contains('hover') || el.closest('a') || el.closest('button')) {
          hoveringInteractable = true
        }
      })
      setIsHovering(hoveringInteractable)
    }

    const onMouseOver = () => {
      checkHover()
    }
    
    const onMouseOut = () => {
      checkHover()
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    window.addEventListener('mouseout', onMouseOut, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [isPointerFine, pathname])

  if (!isPointerFine) return null

  return (
    <>
      {/* Outer Ring */}
      <div 
        className="fixed top-0 left-0 pointer-events-none rounded-full border border-[var(--c-accent)] z-[var(--z-cursor)]"
        style={{
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
          backgroundColor: isHovering ? 'rgba(184,146,106,0.1)' : 'transparent',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.3s var(--ease-out-expo), height 0.3s var(--ease-out-expo), background-color 0.3s var(--ease-out-expo), opacity 0.3s var(--ease-out-expo), transform 0.1s ease-out'
        }}
      />
      {/* Inner Dot */}
      <div 
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-[var(--c-accent)] z-[var(--z-cursor)]"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%)) scale(${isHovering ? 0 : 1})`,
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.3s var(--ease-out-expo), opacity 0.3s var(--ease-out-expo)'
        }}
      />
    </>
  )
}
