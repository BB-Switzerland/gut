"use client";

import { ReactNode } from "react";

export type ItineraryStop = {
  km: number;
  label: string;
  place: string;
  detail: string;
  color: string;
  icon: ReactNode;
};

/**
 * Itinéraire stylisé en ticket / plan de métro :
 * - une seule rangée
 * - 3 stops ancrés sur une vraie ligne pointillée continue qui passe
 *   physiquement à travers les icônes (z-index propre via ring-4 ring-white)
 * - header type "ITINÉRAIRE · 16 KM"
 * - marqueurs km en bas avec une seconde ligne pointillée
 *
 * Pas une grille de 3 cards identiques. Un objet unique qui se lit comme
 * un boarding pass.
 */
export function ItineraryTicket({ stops }: { stops: ItineraryStop[] }) {
  const totalKm = stops[stops.length - 1]?.km ?? 0;

  return (
    <div className="relative bg-white rounded-3xl shadow-soft p-5 md:p-7">
      {/* Header — un peu comme un billet officiel */}
      <div className="flex items-center justify-between pb-5 border-b border-dashed border-ink/15">
        <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-ink/55">
          Itinéraire · {totalKm} KM
        </p>
        <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-orange">
          05 sept · 18h00
        </p>
      </div>

      {/* Stops */}
      <div className="relative pt-7">
        {/* Ligne pointillée continue qui passe DERRIÈRE les icônes,
            calée à la hauteur de leur centre vertical (h-14 = 56px,
            centre = 28px du haut, + pt-7 = 28px). */}
        <div
          className="absolute inset-x-6 pointer-events-none"
          style={{ top: "calc(1.75rem + 28px)" }}
          aria-hidden
        >
          <svg className="w-full h-1" viewBox="0 0 100 2" preserveAspectRatio="none">
            <line
              x1="2"
              y1="1"
              x2="98"
              y2="1"
              stroke="#ec6436"
              strokeWidth="2.5"
              strokeDasharray="3 8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="relative grid grid-cols-3 gap-2">
          {stops.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center px-1">
              {/* L'icône est sur la ligne — ring-4 ring-white = anneau blanc
                  qui mange la ligne au passage, comme une station de métro. */}
              <div
                className="relative grid place-items-center h-14 w-14 rounded-full text-white shadow-soft ring-4 ring-white"
                style={{ background: s.color }}
              >
                {s.icon}
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.22em] font-bold text-ink/55">
                {s.label}
              </p>
              <p className="font-display text-lg md:text-xl text-ink leading-tight mt-1.5">
                {s.place}
              </p>
              <p className="text-[11px] text-ink/65 mt-1.5 font-semibold tabular-nums">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer KM marks — une seconde ligne pointillée + bornes km */}
      <div className="mt-6 pt-4 border-t border-dashed border-ink/15 flex items-center justify-between">
        {stops.map((s) => (
          <p
            key={s.km}
            className="text-[10px] uppercase tracking-wider font-bold text-ink/55 tabular-nums"
          >
            {s.km} km
          </p>
        ))}
      </div>

      {/* Petites encoches latérales — effet "ticket de train perforé" */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-cream" aria-hidden />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-6 w-6 rounded-full bg-cream" aria-hidden />
    </div>
  );
}
