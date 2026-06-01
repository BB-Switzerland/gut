"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Mountain, Clock } from "lucide-react";

export type Race = {
  id: string;
  title: string;
  distance: string;
  km: number;
  type: "Running" | "Walking" | "Relais";
  audience: "Adultes" | "Enfants" | "Familles" | "Entreprises";
  color: string;
  elevation: string;
  duration: string;
  start: string;
  tags: string[];
  photo: string;
};

export const RACES: Race[] = [
  { id: "16km", title: "Le Grand Trail", distance: "16 KM", km: 16, type: "Running", audience: "Adultes", color: "#ec6436", elevation: "+450 m", duration: "≈ 1h45", start: "18h00", tags: ["Running"], photo: "/figma/photo-race-1.jpg" },
  { id: "16km-relais", title: "Relais Entreprise", distance: "16 KM RELAIS", km: 16, type: "Relais", audience: "Entreprises", color: "#7d7ebc", elevation: "+450 m", duration: "≈ 1h50", start: "18h00", tags: ["Relais", "Éco-responsable"], photo: "/figma/photo-runners-1.jpg" },
  { id: "9km", title: "L'Urbain", distance: "9 KM", km: 9, type: "Running", audience: "Adultes", color: "#00a184", elevation: "+220 m", duration: "≈ 55 min", start: "18h30", tags: ["Running"], photo: "/figma/photo-race-2.jpg" },
  { id: "6km", title: "La Découverte", distance: "6 KM", km: 6, type: "Walking", audience: "Familles", color: "#81d4da", elevation: "+120 m", duration: "≈ 1h15", start: "19h00", tags: ["Running", "Walking"], photo: "/figma/photo-race-3.jpg" },
  { id: "3km-kid", title: "Mini-Trail Junior", distance: "3 KM", km: 3, type: "Running", audience: "Enfants", color: "#febf2c", elevation: "+60 m", duration: "≈ 25 min", start: "17h30", tags: ["Running", "Enfants"], photo: "/figma/photo-race-1.jpg" },
  { id: "1km-kid", title: "Mini-Trail Kids", distance: "1 KM", km: 1, type: "Running", audience: "Enfants", color: "#febf2c", elevation: "—", duration: "≈ 8 min", start: "17h15", tags: ["Running", "Enfants"], photo: "/figma/photo-race-3.jpg" },
  { id: "1km-parent", title: "Parents / Enfants", distance: "1 KM", km: 1, type: "Walking", audience: "Familles", color: "#ec6436", elevation: "—", duration: "≈ 15 min", start: "17h00", tags: ["Walking", "Famille"], photo: "/figma/photo-race-3.jpg" },
];

const TYPE_OPTIONS = ["Types de courses", "Running", "Walking", "Relais"] as const;
const AUDIENCE_OPTIONS = ["Tous publics", "Adultes", "Enfants", "Familles", "Entreprises"] as const;
const DISTANCE_OPTIONS = ["Toutes distances", "1 KM", "3 KM", "6 KM", "9 KM", "16 KM"] as const;

export function RacesSlider({ showFilters = true }: { showFilters?: boolean }) {
  const [type, setType] = useState<(typeof TYPE_OPTIONS)[number]>("Types de courses");
  const [audience, setAudience] = useState<(typeof AUDIENCE_OPTIONS)[number]>("Tous publics");
  const [distance, setDistance] = useState<(typeof DISTANCE_OPTIONS)[number]>("Toutes distances");
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return RACES.filter((r) => {
      if (type !== "Types de courses" && r.type !== type) return false;
      if (audience !== "Tous publics" && r.audience !== audience) return false;
      if (distance !== "Toutes distances" && !r.distance.startsWith(distance)) return false;
      return true;
    });
  }, [type, audience, distance]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      {showFilters && (
        <div className="mt-8 grid lg:grid-cols-12 gap-3 lg:gap-8 items-center">
          <div className="lg:col-span-8 flex flex-wrap items-center gap-3">
            <FilterPill options={[...TYPE_OPTIONS]} value={type} onChange={(v) => setType(v as typeof type)} />
            <FilterPill options={[...AUDIENCE_OPTIONS]} value={audience} onChange={(v) => setAudience(v as typeof audience)} />
            <FilterPill options={[...DISTANCE_OPTIONS]} value={distance} onChange={(v) => setDistance(v as typeof distance)} />
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-center gap-2">
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
        </div>
      )}

      <div
        ref={trackRef}
        className="mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 -mx-5 px-5 md:-mx-10 md:px-10"
      >
        {filtered.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center shadow-soft min-w-full text-ink/60">
            Aucune épreuve ne correspond à ces critères.
          </div>
        )}
        {filtered.map((race) => (
          <RaceCard key={race.id} race={race} />
        ))}
      </div>
    </div>
  );
}

function FilterPill({
  options, value, onChange,
}: {
  options: string[]; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="relative bg-white rounded-full shadow-soft-sm hover:shadow-soft transition">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-transparent pl-5 pr-11 py-3 text-[13px] font-semibold uppercase tracking-wider text-ink focus:outline-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 h-4 w-4 pointer-events-none text-ink/50" />
    </div>
  );
}

export function RaceCard({ race }: { race: Race }) {
  return (
    <article
      data-card
      className="group snap-start shrink-0 w-[320px] md:w-[380px] rounded-[32px] bg-white shadow-soft hover:shadow-soft-xl hover:-translate-y-1.5 overflow-hidden transition-all"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={race.photo}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 80vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

        {/* Animated route overlay on hover */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 400 320" aria-hidden>
          <path
            d="M 40 280 C 100 200, 160 120, 240 140 S 340 80, 370 40"
            stroke="white"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="2 14"
            className="animate-route"
          />
          <circle cx="40" cy="280" r="8" fill="white" />
          <circle cx="370" cy="40" r="8" fill={race.color} stroke="white" strokeWidth="3" />
        </svg>


        <div className="absolute top-4 left-4 right-4 flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {race.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-2.5 py-1 rounded-full bg-green text-white text-[10px] font-bold uppercase tracking-wider shadow-soft-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-ink text-[10px] font-bold uppercase tracking-wider shadow-soft-sm">
            <Clock className="h-3 w-3" /> {race.start}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
          <div>
            <p className="font-display text-3xl md:text-4xl leading-none drop-shadow-md">{race.distance}</p>
            <p className="mt-1.5 text-[11px] uppercase tracking-wider font-bold opacity-90">{race.audience}</p>
          </div>
          <div className="text-right font-semibold text-xs space-y-0.5">
            <p className="inline-flex items-center gap-1"><Mountain className="h-3 w-3" /> D+ {race.elevation}</p>
            <p className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {race.duration}</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-display text-lg md:text-xl text-ink leading-tight">{race.title}</h3>
        <p className="mt-2 text-sm text-ink/65 leading-relaxed">
          {describe(race.id)}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <Link
            href={`/epreuves?race=${race.id}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-cream text-ink hover:bg-ink hover:text-cream font-bold uppercase tracking-wider text-xs transition"
          >
            Infos
          </Link>
          <Link
            href={`https://www.geneveurbantrail.ch/inscription?race=${race.id}`}
            className="group/btn inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-white font-bold uppercase tracking-wider text-xs shadow-soft-sm hover:shadow-soft transition"
            style={{ background: race.color }}
          >
            Inscription
            <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function describe(id: string) {
  const map: Record<string, string> = {
    "16km": "Ascension de la Treille, sentiers cachés des Bastions, vues panoramiques sur le Léman.",
    "16km-relais": "Le 16 KM en relais à 2 — passage au cœur des Bastions, classement entreprises dédié.",
    "9km": "Ruelles pavées du Bourg-de-Four, bord du Rhône, traversée nocturne de la Vieille-Ville.",
    "6km": "Cathédrale Saint-Pierre, promenade des Bastions, accessible à toutes et tous.",
    "3km-kid": "Parcours sécurisé dans le parc des Bastions, ravitaillement gourmand à l'arrivée.",
    "1km-kid": "Premier vrai dossard solo pour les 6-9 ans, encadrement bénévoles renforcé.",
    "1km-parent": "Un kilomètre festif main dans la main avec un parent. Dossard et médaille pour tous.",
  };
  return map[id] ?? "Parcours nature & bitume au cœur de la Vieille-Ville et des sentiers cachés de Genève.";
}
