"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Compteur circulaire des dossards restants.
 *
 * Porté à l'identique du module Beaver Builder `cc` :
 * - SVG `rotate(90deg) scaleX(-1)` pour démarrer en haut, sens horaire.
 * - Anneau de fond + anneau de progression avec `stroke-dasharray` /
 *   `stroke-dashoffset` ; transition CSS `1.5s cubic-bezier(0.4, 0, 0.2, 1)`.
 * - `cap` : pourcentage maximum visuel (90% par défaut) — l'anneau n'atteint
 *   jamais 100% tant qu'il reste des dossards.
 * - Format `fr-FR` pour les chiffres.
 * - `endpoint` optionnel : URL JSON `{ remaining, total }` rafraîchie côté
 *   client (cache-bust + `cache: no-store`), comme la version WP.
 */
export function DossardCounter({
  remaining: initialRemaining,
  total: initialTotal,
  size = 150,
  cap = 90,
  labelRemaining = "dossards restants",
  labelMax = "dossards max",
  progressColor = "#ec6436",
  bgColor = "rgba(20,17,15,0.10)",
  endpoint,
  className = "",
}: {
  remaining: number;
  total: number;
  size?: number;
  cap?: number;
  labelRemaining?: string;
  labelMax?: string;
  progressColor?: string;
  bgColor?: string;
  endpoint?: string;
  className?: string;
}) {
  const center = size / 2;
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<SVGCircleElement | null>(null);
  const [remaining, setRemaining] = useState(initialRemaining);
  const [total, setTotal] = useState(initialTotal);
  const [armed, setArmed] = useState(false);

  // Reveal-on-scroll → déclenche l'animation initiale
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setArmed(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Peinture du stroke-dashoffset, avec animation au premier passage
  useEffect(() => {
    const circle = progressRef.current;
    if (!circle) return;
    const pctRaw = total > 0 ? (remaining / total) * 100 : 0;
    const pct = Math.min(pctRaw, cap);
    const offset = circumference - (pct / 100) * circumference;
    circle.setAttribute("stroke-dasharray", String(circumference));
    if (!armed) {
      circle.style.strokeDashoffset = String(circumference);
      return;
    }
    requestAnimationFrame(() => {
      setTimeout(() => {
        circle.style.strokeDashoffset = String(offset);
      }, 50);
    });
  }, [armed, remaining, total, cap, circumference]);

  // Rafraîchissement live optionnel
  useEffect(() => {
    if (!endpoint) return;
    const url = endpoint + (endpoint.includes("?") ? "&" : "?") + "_=" + Date.now();
    let cancelled = false;
    fetch(url, {
      credentials: "same-origin",
      cache: "no-store",
      headers: { Accept: "application/json" },
    })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
      .then((data) => {
        if (cancelled || !data) return;
        const t = parseInt(data.total, 10);
        const r = parseInt(data.remaining, 10);
        if (!isNaN(t) && !isNaN(r) && (t !== total || r !== remaining)) {
          setTotal(t);
          setRemaining(r);
        }
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return (
    <div
      ref={wrapRef}
      className={`cc-wrapper ${className}`}
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div
        className="cc"
        style={{
          width: size,
          height: size,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width={size}
          height={size}
          style={{
            position: "absolute",
            inset: 0,
            transform: "rotate(90deg) scaleX(-1)",
          }}
          aria-hidden
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={8}
            stroke={bgColor}
          />
          <circle
            ref={progressRef}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={8}
            strokeLinecap="round"
            stroke={progressColor}
            style={{
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
              strokeDashoffset: circumference,
            }}
          />
        </svg>

        <div
          className="cc__content"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: progressColor,
            textAlign: "center",
            padding: "0 8px",
          }}
        >
          <div
            className="font-display"
            style={{ fontSize: "2.7rem", fontWeight: 700, lineHeight: 1 }}
          >
            {formatFr(remaining)}
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, marginTop: "0.25rem", lineHeight: 1 }}>
            {labelRemaining}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#000", marginTop: "0.125rem", lineHeight: 1 }}>
            sur <span style={{ fontWeight: 700 }}>{formatFr(total)}</span> {labelMax}
          </div>
        </div>
      </div>
    </div>
  );
}

function formatFr(n: number) {
  try {
    return n.toLocaleString("fr-FR");
  } catch {
    return String(n);
  }
}
