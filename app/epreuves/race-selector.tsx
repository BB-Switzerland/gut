"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Backpack, Clock, Footprints, MapPin, Mountain, Sprout, Trophy, Utensils } from "lucide-react";
import { INSCRIPTION_URL } from "../../lib/utils";

type RaceDetails = {
  id: string;
  distance: string;
  shortLabel: string;
  longTitle: string;
  audience: string;
  color: string;
  start: string;
  startLocation: string;
  elevation: string;
  cutoff: string;
  date: string;
  description: string;
  highlights: string[];
  feedStops: string[];
  mandatory: string[];
  bibPickup: string[];
  tags: string[];
  photo: string;
};

const RACES: RaceDetails[] = [
  {
    id: "16km",
    distance: "16 KM",
    shortLabel: "16 KM",
    longTitle: "Le Grand Trail · 16 KM",
    audience: "Adultes — Running",
    color: "#ec6436",
    start: "18h00",
    startLocation: "Place du Bourg-de-Four — Vieille-Ville",
    elevation: "D+ 450 m",
    cutoff: "20h30",
    date: "Samedi 05 septembre 2026",
    description: "Le format vertical et nature de la GUT. Vieille-Ville médiévale, sentiers cachés des Bastions, ascension de la Treille et passage en forêt avant l'arrivée au village départ.",
    highlights: [
      "Départ groupé · 18h00 — Place du Bourg-de-Four",
      "Boucle nature + bitume — 60% chemins de terre",
      "Barrière horaire à 20h30 — arrivée",
    ],
    feedStops: [
      "Ravitaillement 1 — KM 4 · eau, fruits secs, isotonique",
      "Ravitaillement 2 — KM 9 · eau, agrumes, gel énergétique",
      "Ravitaillement 3 — KM 13 · eau, coca, oranges, biscuits salés",
    ],
    mandatory: [
      "Dossard apparent à l'avant",
      "Gobelet souple ou éco-cup (aucun gobelet fourni)",
      "Lampe frontale recommandée (départ tardif)",
    ],
    bibPickup: [
      "Vendredi 04.09 · 14h–20h — Village départ",
      "Samedi 05.09 · 13h–17h — Village départ",
    ],
    tags: ["Running", "Trail"],
    photo: "/figma/photo-race-1.jpg",
  },
  {
    id: "16km-relais",
    distance: "16 KM Relais",
    shortLabel: "16 KM Relais",
    longTitle: "16 KM Relais · à 2",
    audience: "Entreprises & Duos",
    color: "#7d7ebc",
    start: "18h00",
    startLocation: "Place du Bourg-de-Four — Vieille-Ville",
    elevation: "D+ 450 m",
    cutoff: "20h40",
    date: "Samedi 05 septembre 2026",
    description: "Le 16 KM en relais à 2. Le format idéal pour les équipes d'entreprise ou les duos d'amis. Passage de relais sur la zone du parc des Bastions au KM 8.",
    highlights: [
      "Départ commun avec le 16 KM solo",
      "Passage de relais — KM 8 · Parc des Bastions",
      "Classement Entreprises séparé",
    ],
    feedStops: [
      "Ravitaillement KM 4, KM 9 et KM 13 — mêmes points que le 16 KM",
      "Zone relais avec hydratation dédiée",
    ],
    mandatory: [
      "Témoin de relais fourni au départ",
      "Dossard apparent + bracelet équipe",
    ],
    bibPickup: [
      "Retrait équipe — un capitaine désigné par équipe",
      "Vendredi 04.09 · 14h–20h · Samedi 13h–17h",
    ],
    tags: ["Relais", "Entreprises", "Éco-responsable"],
    photo: "/figma/photo-runners-1.jpg",
  },
  {
    id: "9km",
    distance: "9 KM",
    shortLabel: "9 KM",
    longTitle: "L'Urbain · 9 KM",
    audience: "Adultes — Running",
    color: "#00a184",
    start: "18h30",
    startLocation: "Place du Bourg-de-Four — Vieille-Ville",
    elevation: "D+ 220 m",
    cutoff: "20h45",
    date: "Samedi 05 septembre 2026",
    description: "Le format découverte : un parcours rapide mêlant ruelles pavées, parcs et bord du Rhône. Idéal pour qui souhaite goûter au trail urbain.",
    highlights: ["Départ — 18h30", "Format mixte 50% bitume / 50% chemin", "Barrière horaire — 20h45"],
    feedStops: ["Ravitaillement 1 — KM 3 · eau, fruits", "Ravitaillement 2 — KM 7 · eau, isotonique, agrumes"],
    mandatory: ["Dossard apparent", "Gobelet souple ou éco-cup"],
    bibPickup: ["Vendredi 04.09 · 14h–20h · Village départ", "Samedi 05.09 · 13h–18h · Village départ"],
    tags: ["Running", "Découverte"],
    photo: "/figma/photo-race-2.jpg",
  },
  {
    id: "6km",
    distance: "6 KM",
    shortLabel: "6 KM",
    longTitle: "La Découverte · 6 KM",
    audience: "Tous publics — Running & Walking",
    color: "#81d4da",
    start: "19h00",
    startLocation: "Place du Bourg-de-Four — Vieille-Ville",
    elevation: "D+ 120 m",
    cutoff: "21h00",
    date: "Samedi 05 septembre 2026",
    description: "Le format familial. Running ou walking : à votre rythme. Une boucle accessible à tous, qui fait découvrir le cœur historique de Genève.",
    highlights: ["Départ — 19h00", "Walking & running autorisés", "Tous niveaux · à partir de 14 ans"],
    feedStops: ["Ravitaillement KM 4 · eau, fruits, sirop"],
    mandatory: ["Dossard apparent", "Gobelet souple ou éco-cup"],
    bibPickup: ["Vendredi 04.09 · 14h–20h · Village départ", "Samedi 05.09 · 13h–18h30 · Village départ"],
    tags: ["Walking", "Famille"],
    photo: "/figma/photo-race-3.jpg",
  },
  {
    id: "1km-kid",
    distance: "1 KM",
    shortLabel: "1 KM Enfants",
    longTitle: "Mini-Trail Kids · 1 KM",
    audience: "Enfants 6–9 ans",
    color: "#febf2c",
    start: "17h15",
    startLocation: "Parc des Bastions",
    elevation: "—",
    cutoff: "—",
    date: "Samedi 05 septembre 2026",
    description: "Le premier dossard de leur vie. Une boucle ludique dans le parc des Bastions, encadrée par les bénévoles. Médaille + t-shirt souvenir.",
    highlights: ["Départ — 17h15 · Parc des Bastions", "Encadrement scout & bénévoles", "Médaille finisher pour tous"],
    feedStops: ["Goûter à l'arrivée — fruits + sirop"],
    mandatory: ["Autorisation parentale signée", "Dossard apparent"],
    bibPickup: ["Retrait sur place avant 16h45"],
    tags: ["Running", "Enfants"],
    photo: "/figma/photo-race-3.jpg",
  },
  {
    id: "3km-kid",
    distance: "3 KM",
    shortLabel: "3 KM Junior",
    longTitle: "Mini-Trail Junior · 3 KM",
    audience: "Enfants 9–13 ans",
    color: "#febf2c",
    start: "17h30",
    startLocation: "Parc des Bastions",
    elevation: "D+ 60 m",
    cutoff: "18h15",
    date: "Samedi 05 septembre 2026",
    description: "Le premier vrai défi pour les juniors. Un parcours sécurisé dans le parc des Bastions, ponctué d'animations. Médaille pour tous les arrivants.",
    highlights: ["Départ — 17h30 · Parc des Bastions", "Encadrement renforcé par les bénévoles", "Médaille finisher · t-shirt souvenir"],
    feedStops: ["Ravitaillement unique à l'arrivée"],
    mandatory: ["Autorisation parentale signée", "Dossard apparent"],
    bibPickup: ["Retrait possible en même temps que les adultes accompagnants"],
    tags: ["Running", "Enfants"],
    photo: "/figma/photo-race-1.jpg",
  },
  {
    id: "1km-parent",
    distance: "1 KM",
    shortLabel: "1 KM Parents/Enfants",
    longTitle: "Parents / Enfants · 1 KM",
    audience: "Familles 4–8 ans",
    color: "#ec6436",
    start: "17h00",
    startLocation: "Parc des Bastions",
    elevation: "—",
    cutoff: "—",
    date: "Samedi 05 septembre 2026",
    description: "Un kilomètre festif main dans la main avec un parent. Un moment pour partager la passion du trail dès le plus jeune âge.",
    highlights: ["Départ — 17h00 · Parc des Bastions", "Distance courte, parcours ludique", "Médaille pour tous"],
    feedStops: ["Ravitaillement à l'arrivée"],
    mandatory: ["1 enfant + 1 parent par dossard"],
    bibPickup: ["Retrait sur place avant 16h30"],
    tags: ["Walking", "Famille"],
    photo: "/figma/photo-race-3.jpg",
  },
];

export function RaceSelector() {
  const [activeId, setActiveId] = useState<string>(RACES[0].id);
  const active = RACES.find((r) => r.id === activeId)!;

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.22em] text-ink/60 font-bold">Sélectionnez une distance</p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl xl:text-5xl text-ink leading-[0.95]">
          Cliquez sur l'épreuve de votre choix
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {RACES.map((r) => {
          const isActive = r.id === activeId;
          return (
            <button
              key={r.id}
              onClick={() => setActiveId(r.id)}
              className={[
                "inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 rounded-full font-display text-base md:text-lg transition shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5",
                isActive ? "text-white" : "bg-white text-ink",
              ].join(" ")}
              style={isActive ? { background: r.color } : undefined}
            >
              {r.shortLabel}
            </button>
          );
        })}
      </div>

      <article className="rounded-[40px] bg-white shadow-soft-xl overflow-hidden">
        <header className="relative">
          <div className="relative h-72 md:h-[480px] overflow-hidden">
            <Image src={active.photo} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 1100px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {active.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white text-ink text-[10px] uppercase tracking-[0.18em] font-bold">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.22em] font-bold opacity-90">{active.audience}</p>
              <h3 className="font-display text-4xl md:text-6xl xl:text-7xl leading-[0.95] mt-2 drop-shadow-md">
                {active.longTitle}
              </h3>
            </div>
          </div>

          <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 items-end">
            <p className="text-base md:text-lg text-ink/80 leading-relaxed">{active.description}</p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <StatLine label="Date" value={active.date} color={active.color} />
              <StatLine label="Heure" value={active.start} color={active.color} />
              <StatLine label="Départ / Arrivée" value={active.startLocation} color={active.color} />
              <StatLine label="Dénivelé" value={active.elevation} color={active.color} />
              <StatLine label="Barrière" value={active.cutoff} color={active.color} />
              <StatLine label="Distance" value={active.distance} color={active.color} />
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10 grid lg:grid-cols-3 gap-8 border-t border-ink/10 bg-cream/40">
          <BlockList color={active.color} icon={<Sprout className="h-5 w-5" />} title="Points clés" items={active.highlights} />
          <BlockList color={active.color} icon={<Utensils className="h-5 w-5" />} title="Ravitaillements" items={active.feedStops} />
          <BlockList color={active.color} icon={<Backpack className="h-5 w-5" />} title="Matériel obligatoire" items={active.mandatory} />
          <BlockList color={active.color} icon={<Clock className="h-5 w-5" />} title="Retrait des dossards" items={active.bibPickup} />
          <div className="lg:col-span-2 rounded-3xl p-6 bg-yellow/60 shadow-soft-sm">
            <p className="text-xs uppercase tracking-[0.22em] font-bold text-ink">Charte du participant</p>
            <p className="mt-3 text-sm text-ink/80 leading-relaxed">
              Respect des autres coureurs, des bénévoles et de l'environnement. Aucun déchet jeté hors des zones
              prévues. Aide aux coureurs en difficulté. La GUT, c'est avant tout un esprit collectif.
            </p>
            <Link href="/infos-pratiques" className="inline-flex items-center gap-2 mt-4 font-bold uppercase text-sm tracking-wider text-ink hover:text-orange">
              Lire la charte complète
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="p-6 md:p-10 border-t border-ink/10 flex flex-wrap items-center gap-3">
          <Link
            href={`${INSCRIPTION_URL}?race=${active.id}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-sm shadow-soft hover:shadow-soft-lg hover:brightness-110 transition"
          >
            M'inscrire à cette épreuve
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/infos-pratiques"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream text-ink font-bold uppercase tracking-wider text-sm hover:bg-blue transition"
          >
            Infos pratiques
          </Link>
        </div>
      </article>
    </div>
  );
}

function StatLine({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-soft-sm">
      <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-ink/55">{label}</div>
      <p className="mt-1 font-display text-base leading-tight text-ink">{value}</p>
    </div>
  );
}

function BlockList({ icon, title, items, color }: { icon: React.ReactNode; title: string; items: string[]; color: string }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="inline-grid place-items-center h-10 w-10 rounded-2xl text-white shadow-soft-sm" style={{ background: color }}>
          {icon}
        </span>
        <h4 className="font-display text-lg md:text-xl text-ink">{title}</h4>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-ink/75">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
