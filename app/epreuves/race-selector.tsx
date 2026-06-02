"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Backpack, Clock, MapPin, Sprout, Trophy, Utensils } from "lucide-react";

const REGISTRATION_EMAIL = "inscription@runningeneva.ch";
const TRACE_URL = "#"; // remplacer par les vrais liens Trace-de-Trail par épreuve

type Tier = { label: string; price: string };
type Detail = {
  id: string;
  shortLabel: string;
  longTitle: string;
  audience: string;
  color: string;
  date: string;
  start: string;
  startLocation: string;
  format?: string;
  relayInfo?: { relay1: string; relay2: string; passage: string };
  photo: string;
  traceUrl?: string;
  tiers?: Tier[];
  description: string[];
  highlights: string[];
  podium: string[];
  bibPickup: string[];
};

const SHARED_BIB_PICKUP = [
  "Vendredi 04.09 · 12h00–14h00 et 16h00–18h00",
  "Emil Frey Genève Acacias — route des Acacias 23 (GE)",
  "Samedi 05.09 · 15h00–18h00",
  "GUT-Village, esplanade du Bois-de-La-Bâtie (1213 Petit-Lancy)",
  "Document à présenter : numéro de dossard ou confirmation d'inscription (Runningeneva.ch)",
];

const RACES: Detail[] = [
  {
    id: "1km-parent",
    shortLabel: "1 KM Parents-Enfants",
    longTitle: "1 KM Parents / Enfants",
    audience: "Format Parent-Enfant (4-7 ans)",
    color: "#ec6436",
    date: "Samedi 05 septembre",
    start: "17h00",
    startLocation: "Esplanade du Bois-de-La-Bâtie, qui surplombe Genève au-dessus de la rue des Péniches (1213 Petit-Lancy)",
    photo: "/figma/photo-race-3.jpg",
    traceUrl: TRACE_URL,
    tiers: [
      { label: "200 premiers dossards", price: "CHF 17,00" },
      { label: "200 dossards suivants", price: "CHF 20,00" },
      { label: "400 dossards suivants", price: "CHF 22,00" },
      { label: "500 dossards suivants", price: "CHF 22,00" },
      { label: "500 derniers dossards", price: "CHF 22,00" },
    ],
    description: [
      "Le format 1 km parents-enfant est l'occasion de partager le plaisir de la course à pied avec votre enfant à travers un format différenciant et accessible.",
      "Le parcours se déroule au cœur du bois de la Bâtie, sur une boucle d'1 km ombragée, idéale pour une expérience de course en pleine nature, facilement accessible depuis le centre-ville de Genève.",
      "À l'arrivée, une médaille est remise à tous les participants pour les féliciter.",
    ],
    highlights: [
      "Date : samedi 05 septembre",
      "17h00 : Départ formats Enfants (4-9 ans) et Parent-Enfant (4-7 ans)",
      "Lieu : Esplanade du Bois-de-La-Bâtie, surplombant Genève",
    ],
    podium: [
      "17h20 — Esplanade du Bois-de-La-Bâtie, Village départ du GUT",
      "Récompenses : enfants filles et garçons du 1er au 5e rang, catégories 4-6 ans et 7-9 ans",
      "Les prix podium non retirés le jour J seront définitivement perdus.",
    ],
    bibPickup: SHARED_BIB_PICKUP,
  },
  {
    id: "1km-kid",
    shortLabel: "1 KM Enfants",
    longTitle: "1 KM Enfants",
    audience: "Enfants 4-9 ans",
    color: "#febf2c",
    date: "Samedi 05 septembre",
    start: "17h00",
    startLocation: "Esplanade du Bois-de-La-Bâtie (1213 Petit-Lancy)",
    photo: "/figma/photo-info-3.jpg",
    traceUrl: TRACE_URL,
    tiers: [
      { label: "200 premiers dossards", price: "CHF 17,00" },
      { label: "200 dossards suivants", price: "CHF 20,00" },
      { label: "400 dossards suivants", price: "CHF 22,00" },
      { label: "500 dossards suivants", price: "CHF 22,00" },
      { label: "500 derniers dossards", price: "CHF 22,00" },
    ],
    description: [
      "Le format 1 km enfant est l'occasion de faire découvrir le plaisir de la course à pied à votre enfant à travers un format différenciant et accessible.",
      "Le parcours se déroule au cœur du bois de la Bâtie, sur une boucle d'1 km ombragée, idéale pour une expérience de course en pleine nature, facilement accessible depuis le centre-ville de Genève.",
      "À l'arrivée, une médaille est remise à tous les participants pour les féliciter.",
    ],
    highlights: [
      "Date : samedi 05 septembre",
      "17h00 : Départ Enfants (4-9 ans)",
      "Lieu : Esplanade du Bois-de-La-Bâtie",
    ],
    podium: [
      "17h20 — Esplanade du Bois-de-La-Bâtie",
      "Récompenses : enfants filles et garçons du 1er au 5e rang, catégories 4-6 ans et 7-9 ans",
    ],
    bibPickup: SHARED_BIB_PICKUP,
  },
  {
    id: "3km-plogging",
    shortLabel: "3 KM Plogging",
    longTitle: "3 KM — GUT Plogging Challenge",
    audience: "Course éco-responsable en équipe",
    color: "#00a184",
    date: "Samedi 05 septembre",
    start: "16h00",
    startLocation: "Esplanade du Bois-de-La-Bâtie (1213 Petit-Lancy)",
    format: "Challenge inter-entreprises",
    photo: "/figma/photo-info-3.jpg",
    description: [
      "Prends le départ de l'unique course éco-responsable de ramassage de mégots au cœur de la ville de Genève, au sein du village du Geneva Urban Trail.",
      "Entre collègues, vis une expérience engagée et conviviale en contribuant concrètement à préserver notre ville… et relève le défi du challenge Entreprises en ramassant un maximum de mégots pour monter sur le podium !",
      "Le parcours se déroule au cœur du bois de la Bâtie, sur une boucle de 3 km, facilement accessible depuis le centre-ville de Genève.",
      "Tous les participants recevront : la GUT Médaille (qui décapsule) ainsi que le T-shirt GUT 2026.",
    ],
    highlights: [
      "15h30 : accueil et remise de matériel — Esplanade du Bois-de-La-Bâtie",
      "16h00 : départ",
      "17h20 : prix podium",
      "Dès 17h30 : moment convivial autour d'une collation",
    ],
    podium: [
      "17h20 — Esplanade du Bois-de-La-Bâtie",
      "Récompenses : 3 équipes ayant ramassé la plus grande quantité de mégots",
      "Matériel fourni par la Voirie de Genève (gants, sacs, pinces) à l'intérieur du GUT-Village.",
    ],
    bibPickup: [
      "Remise de matériel & dossards : samedi 05.09 à 15h30",
      "Lieu : esplanade du Bois-de-La-Bâtie",
      "Matériel : gants, sacs poubelle, pinces spéciales — distribués par les équipes de la Voirie de Genève.",
    ],
  },
  {
    id: "4-6km-pmr",
    shortLabel: "4,6 KM PMR",
    longTitle: "4,6 KM — Parcours adapté",
    audience: "Personnes en condition physique délicate / PMR",
    color: "#94d2d8",
    date: "Samedi 05 septembre",
    start: "18h35",
    startLocation: "Place de l'Île, au cœur de Genève",
    photo: "/figma/photo-info-1.jpg",
    tiers: [{ label: "Tarif unique", price: "CHF 27,00" }],
    description: [
      "Un parcours plat de 4,6 km adapté aux personnes en condition physique délicate, depuis la Place de l'Île jusqu'à l'arrivée au Village du GUT.",
    ],
    highlights: [
      "Date : samedi 05 septembre",
      "18h35 : départ Parcours adapté",
      "Lieu de départ : Place de l'Île",
    ],
    podium: ["Pas de classement podium sur ce format."],
    bibPickup: SHARED_BIB_PICKUP,
  },
  {
    id: "6km",
    shortLabel: "6 KM Running & Walking",
    longTitle: "6 KM Running & Walking",
    audience: "Trail-running dès 10 ans / Trail-walking dès 16 ans",
    color: "#81d4da",
    date: "Samedi 05 septembre",
    start: "18h30",
    startLocation: "Bibliothèque de la Cité, Place des Trois-Perdrix 5, 1204 Genève",
    photo: "/figma/photo-race-3.jpg",
    traceUrl: TRACE_URL,
    tiers: [
      { label: "200 premiers dossards", price: "CHF 30,00" },
      { label: "200 dossards suivants", price: "CHF 35,00" },
      { label: "400 dossards suivants", price: "CHF 40,00" },
      { label: "500 dossards suivants", price: "CHF 45,00" },
      { label: "500 derniers dossards", price: "CHF 50,00" },
    ],
    description: [
      "Le format 6 km, disponible en version running et walking, est l'occasion de redécouvrir le patrimoine de Genève et de sa Vieille-Ville à travers des sentiers méconnus, reliant les principaux monuments historiques de la cité.",
      "Le parcours fait le lien entre les lieux emblématiques du centre-ville et permet de (re)découvrir la richesse de son histoire, avant de longer les quais jusqu'au Seujet, de traverser le pont sous-terrain et la passerelle du bois de la Bâtie, pour rejoindre l'arrivée située au cœur du village dynamique du GUT.",
      "Tous les participants recevront : la GUT Médaille (qui décapsule) ainsi que le T-shirt GUT 2026.",
    ],
    highlights: [
      "Date : samedi 05 septembre",
      "18h30 : Trail-running (dès 10 ans) et Trail-walking (dès 16 ans)",
      "Départ : Bibliothèque de la Cité, Place des Trois-Perdrix 5",
    ],
    podium: [
      "Esplanade du Bois-de-La-Bâtie, Village départ du GUT",
      "Récompenses : 5 premiers hommes et 5 premières femmes",
      "Le 6 KM trail-walking sera chronométré mais ne donnera pas droit à un podium.",
    ],
    bibPickup: SHARED_BIB_PICKUP,
  },
  {
    id: "9km",
    shortLabel: "9 KM Running",
    longTitle: "9 KM Trail Running",
    audience: "Dès 16 ans",
    color: "#00a184",
    date: "Samedi 05 septembre",
    start: "18h25",
    startLocation: "Esplanade du Bois-de-La-Bâtie (1213 Petit-Lancy)",
    photo: "/figma/photo-race-2.jpg",
    traceUrl: TRACE_URL,
    tiers: [
      { label: "200 premiers dossards", price: "CHF 35,00" },
      { label: "200 dossards suivants", price: "CHF 40,00" },
      { label: "400 dossards suivants", price: "CHF 45,00" },
      { label: "500 dossards suivants", price: "CHF 50,00" },
      { label: "500 derniers dossards", price: "CHF 55,00" },
    ],
    description: [
      "Le format 9 km propose une boucle reliant le bois de la Bâtie à la Vieille-Ville, à travers des sentiers méconnus et des passages emblématiques, entre patrimoine urbain et paysages naturels le long des rives du Rhône.",
      "Depuis le bois de la Bâtie, en passant par le pont de la Jonction, le parcours traverse les lieux phares du centre-ville et invite à (re)découvrir la richesse historique de Genève, avant de poursuivre le long des quais jusqu'au Seujet. Il emprunte ensuite le pont sous-terrain et la passerelle du bois de la Bâtie pour revenir vers le parc et rejoindre l'arrivée.",
      "Tous les participants recevront : la GUT Médaille ainsi que le T-shirt GUT 2026.",
    ],
    highlights: [
      "Date : samedi 05 septembre",
      "18h25 : départ Trail-running (dès 16 ans)",
      "Lieu : Esplanade du Bois-de-La-Bâtie",
    ],
    podium: [
      "Esplanade du Bois-de-La-Bâtie, Village départ du GUT",
      "Récompenses : 5 premiers hommes et 5 premières femmes",
    ],
    bibPickup: SHARED_BIB_PICKUP,
  },
  {
    id: "16km",
    shortLabel: "16 KM Running",
    longTitle: "16 KM Trail Running",
    audience: "Dès 18 ans",
    color: "#ec6436",
    date: "Samedi 05 septembre",
    start: "18h35",
    startLocation: "Esplanade du Bois-de-La-Bâtie (1213 Petit-Lancy)",
    photo: "/figma/photo-race-1.jpg",
    traceUrl: TRACE_URL,
    tiers: [
      { label: "200 premiers dossards", price: "CHF 40,00" },
      { label: "200 dossards suivants", price: "CHF 45,00" },
      { label: "400 dossards suivants", price: "CHF 50,00" },
      { label: "500 dossards suivants", price: "CHF 55,00" },
      { label: "500 derniers dossards", price: "CHF 65,00" },
    ],
    description: [
      "Le format 16 km propose une boucle entre sentiers urbains et portions trail, offrant une redécouverte complète de Genève, entre nature préservée et patrimoine historique.",
      "Depuis le bois de la Bâtie, le parcours rejoint le pont Butin avant de longer le Rhône par le sentier des falaises de Saint-Jean et le quai de Seujet. Il change ensuite de rythme et de terrain pour prendre de la hauteur à travers les chemins étroits de la Vieille-Ville, reliant les principaux monuments du patrimoine genevois, avant de redescendre vers la passerelle du bois de la Bâtie. L'arrivée se fait au cœur du Village du GUT.",
      "Tous les participants recevront : la GUT Médaille ainsi que le T-shirt GUT 2026.",
    ],
    highlights: [
      "Date : samedi 05 septembre",
      "18h35 : départ Trail-running (dès 18 ans)",
      "Lieu : Esplanade du Bois-de-La-Bâtie",
      "20h15 : barrière horaire rue Bémont (11,5 km)",
      "21h00 : barrière horaire à l'arrivée",
    ],
    podium: [
      "Esplanade du Bois-de-La-Bâtie, Village départ du GUT",
      "Récompenses : 5 premiers hommes et 5 premières femmes",
    ],
    bibPickup: SHARED_BIB_PICKUP,
  },
  {
    id: "16km-relais",
    shortLabel: "16 KM Relais",
    longTitle: "16 KM Relais à 2",
    audience: "Dès 18 ans",
    color: "#7d7ebc",
    date: "Samedi 05 septembre",
    start: "18h35",
    startLocation: "Esplanade du Bois-de-La-Bâtie (1213 Petit-Lancy)",
    relayInfo: { relay1: "10,2 km", relay2: "5,8 km", passage: "Place du Bourg-de-Four, en haut de la Vieille-Ville" },
    photo: "/figma/photo-runners-1.jpg",
    traceUrl: TRACE_URL,
    tiers: [
      { label: "200 premiers dossards", price: "CHF 65,00" },
      { label: "200 dossards suivants", price: "CHF 70,00" },
      { label: "400 dossards suivants", price: "CHF 75,00" },
      { label: "500 dossards suivants", price: "CHF 80,00" },
      { label: "500 derniers dossards", price: "CHF 85,00" },
    ],
    description: [
      "Partagez un moment convivial à travers un format relais de 16 km, tout en (re)découvrant Genève entre nature, patrimoine et passages méconnus.",
      "Depuis le bois de la Bâtie, le parcours rejoint le pont Butin avant de longer le Rhône par le sentier des falaises de Saint-Jean et le quai de Seujet. Il change ensuite de rythme pour rejoindre la Vieille-Ville et ses chemins étroits, avant de redescendre vers la passerelle du bois de la Bâtie jusqu'à l'arrivée au Village du GUT.",
      "Le passage de relais s'effectue à la Place du Bourg-de-Four, où vous pourrez profiter de l'ambiance de la Fanzone du GUT en attendant votre coéquipier.",
      "Tous les participants recevront : la GUT Médaille ainsi que le T-shirt GUT 2026.",
    ],
    highlights: [
      "Date : samedi 05 septembre",
      "18h35 : départ Relais à 2 (dès 18 ans)",
      "Relais 1 : 10,2 km · Relais 2 : 5,8 km",
      "Passage du relais : Place du Bourg-de-Four",
    ],
    podium: [
      "Esplanade du Bois-de-La-Bâtie, Village départ du GUT",
      "Récompenses : meilleures équipes hommes, femmes et mixtes",
    ],
    bibPickup: SHARED_BIB_PICKUP,
  },
  {
    id: "16km-relais-entreprises",
    shortLabel: "16 KM Relais Entreprises",
    longTitle: "16 KM Relais Entreprises",
    audience: "Challenge inter-entreprises (équipes de 2, dès 18 ans)",
    color: "#7d7ebc",
    date: "Samedi 05 septembre",
    start: "18h35",
    startLocation: "Esplanade du Bois-de-La-Bâtie (1213 Petit-Lancy)",
    relayInfo: { relay1: "10,2 km", relay2: "5,8 km", passage: "Place du Bourg-de-Four" },
    format: "Challenge Entreprise",
    photo: "/figma/photo-info-2.jpg",
    traceUrl: TRACE_URL,
    tiers: [
      { label: "200 premiers dossards", price: "CHF 70,00" },
      { label: "200 dossards suivants", price: "CHF 75,00" },
      { label: "400 dossards suivants", price: "CHF 80,00" },
      { label: "500 dossards suivants", price: "CHF 85,00" },
      { label: "500 derniers dossards", price: "CHF 90,00" },
    ],
    description: [
      "Renforcez la cohésion de vos équipes à travers le Challenge inter-entreprises, une expérience sportive et conviviale de 16 km, tout en (re)découvrant Genève entre nature, patrimoine et passages méconnus.",
      "Par équipe de 2, ce relais permet de vivre un parcours trail accessible mais exigeant, idéal pour porter les couleurs de votre entreprise.",
      "Un classement dédié aux entreprises sera établi, avec des récompenses pour les 3 meilleures équipes (hommes, femmes et mixtes). Chaque participant bénéficiera d'une collation à l'espace VIP.",
      "Tous les participants recevront : la GUT Médaille ainsi que le T-shirt GUT 2026.",
    ],
    highlights: [
      "Date : samedi 05 septembre",
      "18h35 : départ Relais Entreprises (dès 18 ans)",
      "Relais 1 : 10,2 km · Relais 2 : 5,8 km",
      "Passage du relais : Place du Bourg-de-Four",
      "Collation espace VIP incluse",
    ],
    podium: [
      "Esplanade du Bois-de-La-Bâtie, Village départ du GUT",
      "Classement dédié aux entreprises : 3 meilleures équipes hommes, femmes, mixtes",
    ],
    bibPickup: SHARED_BIB_PICKUP,
  },
];

export function RaceSelector() {
  const [activeId, setActiveId] = useState<string>(RACES[0].id);
  const active = RACES.find((r) => r.id === activeId)!;

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.22em] text-ink/60 font-bold">Sélectionnez une épreuve</p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl xl:text-5xl text-ink leading-[0.95]">
          Cliquez sur l'épreuve de votre choix pour avoir plus d'informations
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
                "inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 rounded-full font-display text-sm md:text-base transition shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5",
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
        {/* Bloc infos orange */}
        <header className="grid lg:grid-cols-12 gap-0">
          <div className="lg:col-span-6 relative aspect-[5/4] lg:aspect-auto overflow-hidden">
            <Image src={active.photo} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 600px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            <p className="absolute top-6 left-6 right-6 font-display text-3xl md:text-5xl text-white leading-[0.95] drop-shadow-md">
              {active.longTitle}
            </p>
            <p className="absolute bottom-6 left-6 right-6 text-white/95 font-semibold text-sm">{active.audience}</p>
          </div>

          <div className="lg:col-span-6 p-6 md:p-10 text-white" style={{ background: active.color }}>
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold opacity-90 mb-4">Infos pratiques</p>
            <dl className="space-y-3 text-sm">
              <Row label="Date" value={active.date} />
              <Row label="Heure" value={active.start} />
              <Row label="Lieu de départ" value={active.startLocation} />
              {active.format && <Row label="Format" value={active.format} />}
              {active.relayInfo && (
                <>
                  <Row label="Relais 1" value={active.relayInfo.relay1} />
                  <Row label="Relais 2" value={active.relayInfo.relay2} />
                  <Row label="Passage de relais" value={active.relayInfo.passage} />
                </>
              )}
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {active.traceUrl && (
                <Link href={active.traceUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-ink shadow-soft font-bold uppercase tracking-wider text-xs hover:bg-cream transition">
                  Découvrez le parcours <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <Link href="/infos-pratiques" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink/20 text-white border-2 border-white/20 font-bold uppercase tracking-wider text-xs hover:bg-ink/30 transition">
                Infos pratiques
              </Link>
              {!active.traceUrl && (
                <Link href={`mailto:${REGISTRATION_EMAIL}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-ink shadow-soft font-bold uppercase tracking-wider text-xs hover:bg-cream transition">
                  Inscription <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Tarifs paliers */}
        {active.tiers && (
          <div className="p-6 md:p-10 border-t border-ink/10 bg-cream/40">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-ink/60 mb-5">
              Tarifs <span className="opacity-60">(par paliers selon les dossards attribués)</span>
            </p>
            <div className="overflow-hidden rounded-2xl shadow-soft bg-white">
              <table className="w-full text-sm">
                <thead className="bg-ink text-cream">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider text-xs">Palier</th>
                    <th className="text-right px-4 py-3 font-bold uppercase tracking-wider text-xs">Prix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {active.tiers.map((t) => (
                    <tr key={t.label}>
                      <td className="px-4 py-3 font-semibold">{t.label}</td>
                      <td className="px-4 py-3 text-right font-display text-base" style={{ color: active.color }}>{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Descriptif + 3 blocks */}
        <div className="p-6 md:p-10 grid lg:grid-cols-3 gap-8 border-t border-ink/10">
          <div className="lg:col-span-3">
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-[0.95]">Descriptif</h3>
            <div className="mt-4 space-y-3 text-ink/80 leading-relaxed">
              {active.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <BlockList color={active.color} icon={<Sprout className="h-5 w-5" />} title="Points clés" items={active.highlights} />
          <BlockList color={active.color} icon={<Trophy className="h-5 w-5" />} title="Prix podium" items={active.podium} />
          <BlockList color={active.color} icon={<Backpack className="h-5 w-5" />} title="Retrait des dossards" items={active.bibPickup} />
        </div>
      </article>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.22em] font-bold opacity-80">{label}</dt>
      <dd className="font-display text-base md:text-lg leading-tight mt-0.5">{value}</dd>
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
