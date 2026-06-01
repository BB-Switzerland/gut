"use client";

import Image from "next/image";
import { ReactNode } from "react";

export type RouteStop = {
  km: number;
  label: string;
  place: string;
  detail: string;
  color: string;
  photo: string;
  icon: ReactNode;
};

/**
 * Trois polaroids photo posés sur une courbe pointillée, type scrapbook /
 * carnet de voyage. Pas un grid de cards alignées, pas un ticket. Chaque
 * polaroid a sa propre rotation + position légèrement décalée verticalement
 * pour casser l'impression de gabarit. Une vraie courbe dashed serpente
 * derrière, comme un trait dessiné sur une carte papier.
 */
export function PhotoRouteMap({ stops }: { stops: RouteStop[] }) {
  const layouts = [
    { rotate: "-rotate-3", translateY: "translate-y-3" },
    { rotate: "rotate-2", translateY: "-translate-y-4" },
    { rotate: "-rotate-2", translateY: "translate-y-2" },
  ];

  return (
    <div className="relative pt-4 pb-2">
      {/* Courbe dashed en fond qui passe sous les photos */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 8 38 C 22 18, 38 50, 50 30 S 72 12, 92 28"
          fill="none"
          stroke="#ec6436"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="3 10"
          opacity="0.45"
          vectorEffect="non-scaling-stroke"
        />
        {/* Points d'ancrage des photos sur la courbe */}
        <circle cx="8" cy="38" r="1.4" fill="#ec6436" vectorEffect="non-scaling-stroke" />
        <circle cx="50" cy="30" r="1.4" fill="#00a184" vectorEffect="non-scaling-stroke" />
        <circle cx="92" cy="28" r="1.4" fill="#febf2c" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="relative grid grid-cols-3 gap-3 md:gap-5">
        {stops.map((s, i) => {
          const layout = layouts[i] ?? layouts[0];
          return (
            <div key={s.label} className={`${layout.translateY}`}>
              <Polaroid stop={s} rotate={layout.rotate} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Polaroid({ stop, rotate }: { stop: RouteStop; rotate: string }) {
  return (
    <div
      className={`relative bg-white p-2 pb-3 shadow-soft-lg ${rotate} hover:rotate-0 hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden">
        <Image src={stop.photo} alt="" fill className="object-cover" sizes="(max-width:1024px) 30vw, 18vw" />
        {/* Sticker sur la photo */}
        <span
          className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-white text-[9px] font-bold uppercase tracking-widest shadow-soft-sm"
          style={{ background: stop.color }}
        >
          <span className="inline-grid place-items-center h-3 w-3">{stop.icon}</span>
          {stop.label}
        </span>
        {/* KM en bas-droite */}
        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-ink/80 text-white text-[10px] font-bold tabular-nums">
          KM {stop.km}
        </span>
      </div>

      {/* Caption */}
      <div className="px-1 pt-2 pb-1 text-center">
        <p className="font-display text-sm md:text-base text-ink leading-tight">{stop.place}</p>
        <p className="text-[10px] text-ink/55 mt-0.5 font-semibold tabular-nums">{stop.detail}</p>
      </div>

      {/* Bandes scotch fictives aux coins haut */}
      <span className="absolute -top-2 left-2 w-6 h-3 bg-yellow/70 rotate-[-8deg] shadow-soft-sm" aria-hidden />
      <span className="absolute -top-2 right-2 w-6 h-3 bg-blue/70 rotate-[8deg] shadow-soft-sm" aria-hidden />
    </div>
  );
}
