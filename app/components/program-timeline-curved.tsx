"use client";

import Image from "next/image";
import { Reveal } from "./reveal";

export type ProgramItem = {
  hour: string;
  type: "Village" | "Course" | "Cérémonie";
  label: string;
  body: string;
  color: string;
  photo: string;
  tags?: string[];
};

export function ProgramTimelineCurved({ items }: { items: ProgramItem[] }) {
  return (
    <div className="relative">
      <div className="relative space-y-10 lg:space-y-20">
        {items.map((p, i) => {
          const isLeft = i % 2 === 0;
          return (
            <Reveal key={p.hour + p.label} delay={i * 40}>
              <article className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                <div
                  className={[
                    "lg:col-span-5",
                    isLeft ? "lg:col-start-1" : "lg:col-start-8",
                    "order-1",
                  ].join(" ")}
                >
                  <div className="relative aspect-[5/4] rounded-[32px] overflow-hidden shadow-soft-lg group">
                    <Image
                      src={p.photo}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 90vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-ink text-[11px] uppercase tracking-wider font-bold shadow-soft-sm">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
                      {p.type}
                    </span>
                    <span
                      className="absolute bottom-4 right-4 inline-flex items-center px-4 py-2 rounded-full text-white text-base font-bold tabular-nums shadow-soft"
                      style={{ background: p.color }}
                    >
                      {p.hour}
                    </span>
                  </div>
                </div>

                <div
                  className={[
                    "lg:col-span-5",
                    isLeft ? "lg:col-start-8" : "lg:col-start-1 lg:row-start-1",
                    "order-2",
                  ].join(" ")}
                >
                  <h3 className="font-display text-3xl md:text-4xl text-ink leading-[0.95]">{p.label}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{p.body}</p>
                  {p.tags && p.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-cream text-ink text-[11px] font-bold uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
