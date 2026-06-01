"use client";

import { Fragment } from "react";

const PARTNERS = [
  "Ville de Genève",
  "Canton de Genève",
  "Swiss Olympic",
  "On Running",
  "Migros",
  "TPG",
  "Coop",
  "Asics",
  "Garmin",
  "Salomon",
  "BBS",
  "Harsch",
];

export function PartnersMarquee({
  title = "Partenaires course",
  variant = "default",
}: {
  title?: string;
  variant?: "default" | "village" | "ink";
}) {
  const bg = variant === "village" ? "bg-blue/40" : variant === "ink" ? "bg-ink text-cream" : "bg-cream";

  return (
    <section className={`relative py-14 md:py-16 overflow-hidden ${bg}`}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 mb-7 flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-[0.22em] font-bold text-ink/65">{title}</h2>
        <span className="hidden md:inline text-xs uppercase tracking-[0.18em] text-ink/45 font-semibold">Ils rendent l'aventure possible</span>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-6 w-max">
          {[...Array(2)].map((_, n) => (
            <Fragment key={n}>
              {PARTNERS.map((p) => (
                <div
                  key={`${n}-${p}`}
                  className="shrink-0 h-18 px-7 py-5 grid place-items-center rounded-2xl bg-white shadow-soft-sm"
                >
                  <span className="font-display text-base text-ink/75">{p}</span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
