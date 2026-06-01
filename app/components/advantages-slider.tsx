"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Advantage = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

export function AdvantagesSlider({ items }: { items: Advantage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mt-8 flex items-center justify-end gap-2">
        <button
          onClick={() => scroll(-1)}
          className="h-11 w-11 grid place-items-center rounded-full bg-white shadow-soft hover:bg-orange hover:text-white transition"
          aria-label="Précédent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="h-11 w-11 grid place-items-center rounded-full bg-white shadow-soft hover:bg-orange hover:text-white transition"
          aria-label="Suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="mt-6 flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 -mx-5 px-5 md:-mx-10 md:px-10"
      >
        {items.map((item) => (
          <article
            key={item.title}
            data-card
            className="snap-start shrink-0 w-[280px] md:w-[320px] rounded-3xl bg-white p-6 md:p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition"
          >
            <div
              className="inline-grid place-items-center h-14 w-14 rounded-2xl text-white shadow-soft-sm"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>
            <h3 className="mt-5 font-display text-xl text-ink leading-tight">{item.title}</h3>
            <p className="mt-2 text-sm text-ink/65 leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
