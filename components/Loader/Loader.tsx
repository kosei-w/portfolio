"use client";
import { useEffect, useRef } from "react";
import "./loader.css";

export default function Loader() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = rootRef.current;
    if (!loader) return;

    const stage1 = loader.querySelector(".stage-1") as HTMLElement;
    const stage2 = loader.querySelector(".stage-2") as HTMLElement;
    const countEl = loader.querySelector(".count") as HTMLElement;

    const hasSeen = sessionStorage.getItem("loader_seen");
    const forceReload = new URLSearchParams(location.search).has("reload");

    if (hasSeen && !forceReload) {
      loader.classList.add("gone");
      document.body.classList.remove("is-loading");
      return;
    }

    document.body.classList.add("is-loading");
    stage1.classList.add("active");

    const total = 1800;
    const start = performance.now() + 400;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - start) / total));
      const eased = 1 - Math.pow(1 - t, 3);
      const n = Math.floor(eased * 100);
      countEl.textContent = String(n).padStart(3, "0");
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          stage1.classList.remove("active");
          setTimeout(() => {
            stage2.classList.add("active");
            setTimeout(() => {
              loader.classList.add("sweep");
              setTimeout(() => {
                loader.classList.add("split");
                document.body.classList.remove("is-loading");
                sessionStorage.setItem("loader_seen", "1");
                setTimeout(() => loader.classList.add("gone"), 1500);
              }, 1300);
            }, 3200);
          }, 600);
        }, 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div id="loader" ref={rootRef} aria-hidden="true">
      <div className="loader-bg" />
      <div className="loader-flash" />
      <div className="loader-streak" />
      <div className="loader-seam" />
      <div className="loader-top" />
      <div className="loader-bottom" />

      <div className="loader-stage stage-1">
        <div className="loader-brand">
          <div className="brand-line-1">
            <span>KOSEI</span> <span>IDEZUKA</span>
          </div>
          <div className="brand-line-2">PORTFOLIO &nbsp;/&nbsp; EST. 2026</div>
        </div>
        <div className="loader-counter">
          <span className="count">000</span>
          <span className="pct">%</span>
        </div>
      </div>

      <div className="loader-stage stage-2">
        <div className="vision-eyebrow">VISION — 2026</div>
        <h2 className="vision-en">
          <span className="reveal-line"><span className="reveal-word">For</span></span>
          <span className="reveal-line"><span className="reveal-word"><em>everyone</em> walking</span></span>
          <span className="reveal-line"><span className="reveal-word">the path of</span></span>
          <span className="reveal-line"><span className="reveal-word">their own <em>becoming.</em></span></span>
        </h2>
        <div className="vision-jp">"開拓進行形"を歩む<br />全ての人の背中を押す。</div>
      </div>
    </div>
  );
}
