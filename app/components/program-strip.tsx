"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export type ProgramItem = {
  hour: string;
  type: "Village" | "Course" | "Cérémonie";
  label: string;
  body: string;
  color: string;
  photo: string;
};

/**
 * Programme compact — slider horizontal de mini-cartes "moment".
 * Chaque carte : photo + pill heure intégrée + type + label.
 */
export function ProgramStrip({ items, ctaHref = "/evenement" }: { items: ProgramItem[]; ctaHref?: string }) {
  const [filter, setFilter] = useState<"Tous" | ProgramItem["type"]>("Tous");
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => items.filter((i) => filter === "Tous" || i.type === filter),
    [filter, items]
  );

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : 260;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        {(["Tous", "Village", "Course", "Cérémonie"] as const).map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={[
                "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition",
                active ? "bg-ink text-cream shadow-soft" : "bg-white text-ink shadow-soft-sm hover:shadow-soft",
              ].join(" ")}
            >
              {f}
            </button>
          );
        })}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            className="h-10 w-10 grid place-items-center rounded-full bg-white shadow-soft hover:bg-orange hover:text-white transition"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="h-10 w-10 grid place-items-center rounded-full bg-white shadow-soft hover:bg-orange hover:text-white transition"
            aria-label="Suivant"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-5 px-5 md:-mx-10 md:px-10"
      >
        {filtered.map((p) => (
          <article
            key={p.hour + p.label}
            data-card
            className="group snap-start shrink-0 w-[220px] md:w-[250px] rounded-3xl bg-white shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all overflow-hidden"
          >
            {/* Photo with hour pill overlaid */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.photo}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="250px"
              />
              {/* Subtle bottom gradient for legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />

              {/* Type chip top-left */}
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-ink text-[10px] uppercase tracking-wider font-bold">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
                {p.type}
              </span>

              {/* Hour pill bottom-right — Open Sans bold, not Bungee */}
              <span
                className="absolute bottom-3 right-3 inline-flex items-center px-3 py-1.5 rounded-full text-white text-sm font-bold tabular-nums shadow-soft-sm"
                style={{ background: p.color }}
              >
                {p.hour}
              </span>
            </div>

            {/* Label + body */}
            <div className="p-4">
              <h3 className="font-display text-base md:text-lg text-ink leading-tight">{p.label}</h3>
              <p className="mt-1.5 text-xs md:text-[13px] text-ink/65 leading-relaxed line-clamp-2">{p.body}</p>
            </div>
          </article>
        ))}

        {/* End CTA card */}
        <Link
          href={ctaHref}
          data-card
          className="group/end snap-start shrink-0 w-[180px] md:w-[200px] rounded-3xl bg-ink text-cream shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all overflow-hidden grid place-items-center text-center p-6 relative"
        >
          <div>
            <span className="block text-[10px] uppercase tracking-[0.22em] font-bold text-orange">Tout voir</span>
            <span className="block font-display text-xl md:text-2xl mt-2 leading-[0.95]">
              Programme<br />complet
            </span>
            <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold uppercase tracking-wider">
              Découvrir
              <ArrowRight className="h-4 w-4 group-hover/end:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
