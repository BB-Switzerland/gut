"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-fade-up reveal hook — adds opacity/translate when element enters viewport
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.15
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/**
 * Number count-up animation when element enters viewport
 */
export function useCountUp(target: number, durationMs: number = 1400) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let frame: number | null = null;
    const start = performance.now();
    const animate = (t: number) => {
      const progress = Math.min((t - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => { if (frame) cancelAnimationFrame(frame); };
  }, [visible, target, durationMs]);

  return { ref, value };
}

/**
 * Format a number as "1'248" (Swiss style)
 */
export function formatNumber(n: number) {
  return new Intl.NumberFormat("fr-CH").format(n).replace(/ | /g, "'");
}
