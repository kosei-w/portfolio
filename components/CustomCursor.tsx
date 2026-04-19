'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef     = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot     = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    // Touch devices: keep hidden
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 1024) {
      dot.style.display     = 'none';
      outline.style.display = 'none';
      return;
    }

    let visible = false;

    const onMove = (e: MouseEvent) => {
      // Show on first move
      if (!visible) {
        dot.style.opacity     = '1';
        outline.style.opacity = '1';
        visible = true;
      }
      dot.style.left     = `${e.clientX}px`;
      dot.style.top      = `${e.clientY}px`;
      outline.style.left = `${e.clientX}px`;
      outline.style.top  = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', onMove);

    const addHover    = () => outline.classList.add('hover');
    const removeHover = () => outline.classList.remove('hover');

    // Delegate hover to document so dynamically added elements are also covered
    const onEnter = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) addHover();
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) removeHover();
    };
    document.addEventListener('mouseover',  onEnter);
    document.addEventListener('mouseout',   onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover',  onEnter);
      document.removeEventListener('mouseout',   onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0, transition: 'opacity 0.3s' }}
      />
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{ opacity: 0, transition: 'opacity 0.3s, width 0.2s, height 0.2s, background-color 0.2s' }}
      />
    </>
  );
}
