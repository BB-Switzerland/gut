"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Sparkles, Trophy, ChevronRight, HandHeart, FileText, Recycle } from "lucide-react";

/**
 * Visuels de droite spécifiques à chaque hero. Chacun a une identité propre
 * pour que les pages ne se ressemblent plus :
 * - EvenementHeroVisual : un poster festival empilé avec timeline + photo
 * - EpreuvesHeroVisual : grille de distances comme un "menu de courses"
 * - InfosHeroVisual : index navigable avec photo polaroid
 * - EntreprisesHeroVisual : tableau de bord avec stats et photo équipe
 */

/* ---------- /evenement — affiche programme empilée ---------- */
export function EvenementHeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5]">
      {/* Photo principale */}
      <div className="absolute inset-0 rounded-[36px] overflow-hidden shadow-soft-xl">
        <Image src="/figma/photo-village-1.jpg" alt="" fill className="object-cover" sizes="(max-width:1024px) 80vw, 40vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        {/* Affiche programme par-dessus */}
        <div className="absolute inset-x-6 bottom-6 text-cream">
          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-yellow mb-2">Affiche · Édition 2026</p>
          <p className="font-display text-2xl md:text-3xl leading-[0.9] mb-4">GUT Festival</p>
          <ul className="space-y-1.5 text-sm font-semibold">
            {[
              { hour: "16h00", label: "Ouverture village", color: "#febf2c" },
              { hour: "17h00", label: "Mini-trails enfants", color: "#81d4da" },
              { hour: "18h00", label: "16 KM · Grand Trail", color: "#ec6436" },
              { hour: "19h00", label: "6 KM · Découverte", color: "#00a184" },
              { hour: "21h30", label: "DJ set final", color: "#7d7ebc" },
            ].map((it) => (
              <li key={it.hour} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: it.color }} />
                <span className="tabular-nums opacity-80 w-12">{it.hour}</span>
                <span className="opacity-95">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sticker rond */}
      <div className="absolute -top-4 -right-4 grid place-items-center h-28 w-28 rounded-full bg-orange text-white shadow-soft-xl rotate-[8deg]">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-widest opacity-90">5 sept</p>
          <p className="font-display text-2xl leading-none mt-1">2026</p>
          <p className="text-[9px] uppercase tracking-widest opacity-90 mt-1">Genève</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- /epreuves — menu de distances ---------- */
const EPREUVES_GRID = [
  { km: "16", title: "Grand Trail", color: "#ec6436", textColor: "text-white", href: "#16km" },
  { km: "9", title: "L'Urbain", color: "#00a184", textColor: "text-white", href: "#9km" },
  { km: "6", title: "Découverte", color: "#81d4da", textColor: "text-ink", href: "#6km" },
  { km: "3", title: "Mini Junior", color: "#febf2c", textColor: "text-ink", href: "#3km" },
  { km: "1", title: "Mini Kids", color: "#7d7ebc", textColor: "text-white", href: "#1km" },
];

export function EpreuvesHeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {EPREUVES_GRID.map((r, i) => (
          <Link
            key={r.km}
            href={r.href}
            className={[
              "group relative rounded-[28px] p-5 md:p-6 shadow-soft hover:shadow-soft-xl hover:-translate-y-1 transition-all overflow-hidden",
              r.textColor,
              i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square",
            ].join(" ")}
            style={{ background: r.color }}
          >
            {/* Cercles topo concentriques — type carte d'altitude, émanent d'un coin */}
            <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              {[18, 30, 44, 60, 78, 98].map((r) => (
                <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.4" />
              ))}
            </svg>
            <div className="relative flex flex-col justify-between h-full">
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold opacity-80">{r.title}</p>
              <div>
                <p className={`font-display ${i === 0 ? "text-7xl" : "text-3xl md:text-4xl"} leading-none`}>{r.km}</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mt-1">KM</p>
              </div>
              <span className="absolute top-2 right-2 inline-grid place-items-center h-8 w-8 rounded-full bg-white/15 group-hover:bg-white/25 transition">
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
        {/* Carte CTA finale */}
        <Link href="#tous" className="relative rounded-[28px] p-5 md:p-6 shadow-soft hover:shadow-soft-xl hover:-translate-y-1 transition-all bg-ink text-cream aspect-square flex flex-col justify-between">
          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-orange">Voir</p>
          <div>
            <p className="font-display text-2xl leading-[0.95]">Toutes<br />les épreuves</p>
            <ArrowRight className="h-5 w-5 mt-2" />
          </div>
        </Link>
      </div>
    </div>
  );
}

/* ---------- /infos-pratiques — polaroid + index ---------- */
const INFOS_INDEX = [
  { label: "Inscription", anchor: "#inscription", color: "#ec6436", icon: <FileText className="h-4 w-4" /> },
  { label: "Charte du participant", anchor: "#charte", color: "#00a184", icon: <HandHeart className="h-4 w-4" /> },
  { label: "Jour J", anchor: "#jour-j", color: "#febf2c", icon: <Clock className="h-4 w-4" /> },
  { label: "Résultats", anchor: "#resultats", color: "#7d7ebc", icon: <Trophy className="h-4 w-4" /> },
  { label: "Photos", anchor: "#photos", color: "#81d4da", icon: <Sparkles className="h-4 w-4" /> },
];

export function InfosHeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      <div className="grid grid-cols-5 gap-5 items-center">
        {/* Polaroid à gauche */}
        <div className="col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft-xl bg-cream rotate-[-4deg]">
          <Image src="/figma/photo-info-1.jpg" alt="" fill className="object-cover" sizes="(max-width:1024px) 30vw, 16vw" />
          <div className="absolute inset-x-2 bottom-2 px-3 py-2 rounded-lg bg-white/95 text-ink text-[10px] font-bold uppercase tracking-widest text-center">
            Mode d'emploi
          </div>
        </div>

        {/* Index à droite */}
        <nav className="col-span-3 bg-white rounded-[28px] shadow-soft p-3 space-y-1.5">
          <p className="px-3 pt-1 pb-2 text-[10px] uppercase tracking-[0.22em] font-bold text-ink/55">Sommaire</p>
          {INFOS_INDEX.map((it) => (
            <Link
              key={it.label}
              href={it.anchor}
              className="group flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-cream transition"
            >
              <span className="inline-grid place-items-center h-8 w-8 rounded-full text-white shrink-0" style={{ background: it.color }}>
                {it.icon}
              </span>
              <span className="flex-1 font-bold text-sm text-ink truncate">{it.label}</span>
              <ChevronRight className="h-4 w-4 text-ink/40 group-hover:translate-x-0.5 group-hover:text-ink transition" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Tag flottant */}
      <div className="absolute -top-3 right-4 px-4 py-2 rounded-full bg-yellow text-ink shadow-soft-lg rotate-[6deg] flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <span className="font-bold text-xs uppercase tracking-wider">Édition 2026</span>
      </div>
    </div>
  );
}

/* ---------- /entreprises — éditorial avec chiffres intégrés ---------- */
export function EntreprisesHeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none space-y-5">
      {/* Photo principale team */}
      <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden shadow-soft-xl">
        <Image src="/figma/photo-info-2.jpg" alt="" fill className="object-cover" sizes="(max-width:1024px) 80vw, 40vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
        <div className="absolute inset-x-5 bottom-4 text-cream">
          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-yellow">Édition 2025 · Reportage</p>
          <p className="font-display text-2xl md:text-3xl leading-[0.95] mt-1.5">
            « On finit le 16 KM ensemble — pas pour le chrono. »
          </p>
          <p className="text-xs text-cream/75 mt-2 italic">Équipe Lombard Odier · 5e place Relais</p>
        </div>
      </div>

      {/* Pas un grid de stats — une phrase éditoriale avec chiffres
          intégrés en Bungee couleur, comme un sous-titre de presse */}
      <div className="px-1">
        <p className="font-display text-2xl md:text-3xl leading-[1.05] text-ink">
          En 2025,{" "}
          <span className="text-orange">58</span>
          <span className="text-orange text-xl md:text-2xl"> entreprises</span>
          {" "}ont engagé{" "}
          <span className="text-green">312</span>
          <span className="text-green text-xl md:text-2xl"> équipes</span>
          {" "}au cœur de Genève —{" "}
          <span className="text-purple">100% local</span>.
        </p>
      </div>

      {/* Footer simple, gardé : éco-label */}
      <div className="flex items-center gap-3 px-1">
        <Recycle className="h-5 w-5 text-green shrink-0" />
        <p className="text-xs text-ink/70 leading-tight">
          <span className="font-bold text-ink">Plogging Challenge</span> · bonus pour les équipes qui ramassent
          le plus de déchets sur le parcours.
        </p>
      </div>
    </div>
  );
}
