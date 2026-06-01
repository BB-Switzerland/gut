"use client";

import Image from "next/image";
import { ReactNode } from "react";

export type VillageItem = {
  title: string;
  caption: string;
  body: ReactNode;
  color: string;
  textColor?: "ink" | "cream";
  photo?: string;
};

export function VillageReveal({ items }: { items: VillageItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {items.map((item) => (
        <article
          key={item.title}
          className="group relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-soft hover:shadow-soft-xl transition"
          style={{ background: item.color }}
        >
          {item.photo && (
            <Image
              src={item.photo}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 80vw, 25vw"
            />
          )}
          <div
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
            style={{ background: `linear-gradient(to bottom, ${item.color}55, ${item.color}cc 70%)` }}
          />

          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-xs uppercase tracking-[0.22em] font-bold drop-shadow-sm">
              {item.caption}
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-[0.95] mt-2 drop-shadow-md">
              {item.title}
            </h3>
          </div>

          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-ink/75 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs uppercase tracking-[0.22em] font-bold opacity-80">{item.caption}</p>
            <h3 className="font-display text-2xl mt-1">{item.title}</h3>
            <div className="mt-3 text-sm text-cream/90 leading-relaxed">{item.body}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
