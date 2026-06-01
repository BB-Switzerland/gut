"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { ReactNode } from "react";
import { Dossard, TopoBackground } from "./course-route";

export type BannerButton = { label: string; href: string; variant?: "primary" | "ghost"; color?: "orange" | "green" | "blue" | "yellow" | "purple" };

const BANNER_PHOTOS = [
  "/figma/photo-race-1.jpg",
  "/figma/photo-race-2.jpg",
  "/figma/photo-race-3.jpg",
];

export function Banner({
  eyebrow = "Samedi 05 septembre 2026",
  title,
  subtitle,
  buttons,
  accent = "orange",
  photos = BANNER_PHOTOS,
  layout = "default",
  visual,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  buttons?: BannerButton[];
  accent?: "orange" | "green" | "blue" | "yellow" | "purple";
  photos?: string[];
  layout?: "default" | "single" | "mosaic";
  /** Slot pour surcharger la colonne droite (visuel spécifique par page) */
  visual?: ReactNode;
}) {
  const ring = {
    orange: "#ec6436",
    green: "#00a184",
    blue: "#81d4da",
    yellow: "#febf2c",
    purple: "#7d7ebc",
  }[accent];

  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28 bg-cream">
      <div className="absolute inset-0 -z-10 text-orange/50">
        <TopoBackground opacity={0.08} />
      </div>
      <div className="absolute -top-32 -right-32 -z-10 w-[420px] h-[420px] rounded-full" style={{ background: `${ring}28` }} />
      <div className="absolute top-1/3 -left-32 -z-10 w-[380px] h-[380px] rounded-full bg-blue/30" />

      <svg className="absolute -z-10 inset-x-0 top-20 w-full h-[420px] pointer-events-none" viewBox="0 0 1400 420" preserveAspectRatio="none" aria-hidden>
        <path
          d="M -20 320 C 180 200, 380 280, 520 220 S 820 80, 1000 180 S 1320 280, 1500 200"
          stroke={ring}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 14"
          className="animate-route"
          style={{ opacity: 0.35 }}
        />
      </svg>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-8 md:pt-10 pb-12 md:pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white text-xs font-bold uppercase tracking-widest text-ink shadow-soft-sm">
            <span className="relative inline-block h-2 w-2 rounded-full" style={{ background: ring, color: ring }}>
              <span className="absolute inset-0 rounded-full pulse-ring" />
            </span>
            {eyebrow}
          </div>

          <h1 className="mt-5 font-display text-[34px] sm:text-4xl md:text-5xl xl:text-6xl text-ink leading-[0.95]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-ink/75 max-w-xl leading-relaxed">{subtitle}</p>
          )}

          {buttons && buttons.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
              {buttons.map((b, i) => {
                const color = b.color ?? (i === 0 ? "orange" : "blue");
                const isPrimary = color === "orange" || color === "green" || color === "purple";
                const bg = { orange: "#ec6436", green: "#00a184", blue: "#81d4da", yellow: "#febf2c", purple: "#7d7ebc" }[color];
                const text = isPrimary ? "text-white" : "text-ink";
                return (
                  <Link
                    key={i}
                    href={b.href}
                    className={`group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold uppercase tracking-wider text-sm md:text-[15px] shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all ${text}`}
                    style={{ background: bg }}
                  >
                    {b.label}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                );
              })}
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm font-semibold text-ink/75">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange" /> Vieille-Ville, Genève
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-green" /> Dès 17h00
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Running
              <span className="h-1.5 w-1.5 rounded-full bg-green ml-2" /> Walking
              <span className="h-1.5 w-1.5 rounded-full bg-purple ml-2" /> Relais
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          {visual ?? <PhotoMosaic photos={photos} />}
        </div>
      </div>
    </section>
  );
}

function PhotoMosaic({ photos }: { photos: string[] }) {
  return (
    <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
      {/* Big photo top right */}
      <div className="absolute top-0 right-0 w-[58%] aspect-[3/4] rounded-[36px] overflow-hidden shadow-soft-xl bg-cream rotate-[2deg] group">
        <Image src={photos[0]} alt="Course GUT" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 60vw, 25vw" />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-orange text-white text-[10px] font-bold uppercase tracking-wider">
          16 KM
        </div>
      </div>
      {/* Big photo bottom left */}
      <div className="absolute bottom-2 left-0 w-[60%] aspect-[4/3] rounded-[36px] overflow-hidden shadow-soft-xl bg-cream rotate-[-3deg] group">
        <Image src={photos[1] ?? photos[0]} alt="Coureurs GUT" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 60vw, 25vw" />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-green text-white text-[10px] font-bold uppercase tracking-wider">
          9 KM
        </div>
      </div>
      {/* Round photo */}
      <div className="absolute top-[30%] right-[-6%] w-[42%] aspect-square rounded-full overflow-hidden shadow-soft-xl bg-cream group">
        <Image src={photos[2] ?? photos[0]} alt="Village départ" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 50vw, 20vw" />
      </div>

      {/* Dossard badge */}
      <div className="absolute -bottom-4 -left-4">
        <Dossard number="2026" rotation={-8} color="#ec6436" size="md" />
      </div>

      {/* Mascot */}
      <div className="absolute top-[2%] left-[42%] inline-block h-16 w-16 animate-mascot z-10">
        <Image src="/figma/gut-mascot.png" alt="GUT mascot" width={64} height={70} className="h-full w-auto" />
      </div>

      <svg className="absolute -z-10 inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 500" aria-hidden>
        <path
          d="M 60 360 C 140 260, 220 320, 340 200"
          stroke="#ec6436"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 12"
          className="animate-route"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
