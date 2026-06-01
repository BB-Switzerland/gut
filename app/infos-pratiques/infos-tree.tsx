"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink, Camera, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PHOTOS_URL, RESULTS_URL } from "../../lib/utils";

type SubItem = { id: string; label: string; body: React.ReactNode };
type Category =
  | { id: string; label: string; type: "list"; children: SubItem[] }
  | { id: string; label: string; type: "direct"; body: React.ReactNode };

const CATEGORIES: Category[] = [
  {
    id: "inscription", label: "Inscription", type: "list",
    children: [
      {
        id: "tarifs", label: "Tarif d'inscription",
        body: (
          <>
            <p className="text-ink/75 leading-relaxed">
              Les tarifs varient selon la distance et la période d'inscription. Plus vous vous engagez tôt, plus
              vous économisez. Les enfants bénéficient de tarifs préférentiels.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl shadow-soft">
              <table className="w-full text-sm">
                <thead className="bg-ink text-cream">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider text-xs">Distance</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider text-xs">Early bird</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider text-xs">Standard</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider text-xs">Late</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10 bg-white">
                  {[
                    ["16 KM", "CHF 65", "CHF 75", "CHF 85"],
                    ["16 KM Relais", "CHF 110", "CHF 130", "CHF 150"],
                    ["9 KM", "CHF 45", "CHF 55", "CHF 65"],
                    ["6 KM", "CHF 35", "CHF 45", "CHF 55"],
                    ["3 KM Enfants", "CHF 15", "CHF 18", "CHF 20"],
                    ["1 KM Parents/Enfants", "CHF 10", "CHF 12", "CHF 15"],
                  ].map((row, i) => (
                    <tr key={i}>
                      {row.map((c, j) => (
                        <td key={j} className={`px-4 py-3 ${j === 0 ? "font-semibold" : ""}`}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ),
      },
      {
        id: "groupes", label: "Groupes",
        body: (
          <>
            <p className="text-ink/75 leading-relaxed">
              À partir de 10 dossards, profitez d'un tarif groupe et d'un accompagnement
              dédié. Pour les entreprises, l'inscription se fait via le formulaire Relais 16 KM.
            </p>
            <Link href="/entreprises" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
              Voir l'offre entreprises <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        ),
      },
      {
        id: "benevoles", label: "Bénévoles",
        body: (
          <>
            <p className="text-ink/75 leading-relaxed">
              Plus de 180 bénévoles font vivre la GUT. Repas, t-shirt officiel et invitation à la soirée
              de remerciement après l'événement.
            </p>
            <Link href="https://www.geneveurbantrail.ch/benevoles" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-purple text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
              Formulaire bénévoles <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        ),
      },
      {
        id: "charte", label: "Charte du participant",
        body: (
          <ul className="space-y-3 text-ink/75 leading-relaxed">
            <li>• Respect du règlement officiel et des consignes des bénévoles.</li>
            <li>• Aucun déchet hors des zones de récupération prévues.</li>
            <li>• Solidarité entre coureurs, en particulier sur le 16 KM.</li>
            <li>• Port du dossard apparent en permanence sur la course.</li>
            <li>• Respect de l'environnement et des riverains de la Vieille-Ville.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "entreprises", label: "Entreprises", type: "list",
    children: [
      { id: "challenge", label: "Challenge entreprise",
        body: <p className="text-ink/75 leading-relaxed">Classement collectif des entreprises selon le cumul des temps. À la clé : trophée officiel + visibilité partenaires.</p> },
      { id: "plogging", label: "GUT Plogging challenge",
        body: <p className="text-ink/75 leading-relaxed">Courez en ramassant les déchets : bonus de points et prix éco pour l'équipe la plus engagée.</p> },
    ],
  },
  {
    id: "jour-j", label: "Jour J", type: "list",
    children: [
      { id: "horaires", label: "Horaires de départ", body: <p className="text-ink/75 leading-relaxed">17h00 : 1 KM · 17h30 : 3 KM · 18h00 : 16 KM & Relais · 18h30 : 9 KM · 19h00 : 6 KM.</p> },
      { id: "barrieres", label: "Barrières horaires", body: <p className="text-ink/75 leading-relaxed">16 KM : 20h30 · 9 KM : 20h45 · 6 KM : 21h00. Les coureurs hors temps sont récupérés par le balai.</p> },
      { id: "sacs", label: "Dépôt sacs coureurs", body: <p className="text-ink/75 leading-relaxed">Consigne gratuite et sécurisée sur le village départ, ouverte de 16h00 à 22h30.</p> },
      { id: "ravitaillement", label: "Ravitaillement", body: <p className="text-ink/75 leading-relaxed">Eau, isotonique, fruits secs et frais, agrumes, biscuits salés. Gobelets souples obligatoires.</p> },
      { id: "signaletique", label: "Signalétique parcours", body: <p className="text-ink/75 leading-relaxed">Balisage rétroréfléchissant haute visibilité, bénévoles à chaque intersection clé.</p> },
      { id: "zone", label: "Zone récupération", body: <p className="text-ink/75 leading-relaxed">Étirements guidés, kinés partenaires, jus naturels et médailles à l'arrivée.</p> },
      { id: "repas", label: "Repas", body: <p className="text-ink/75 leading-relaxed">Inclus dans le dossard : assiette genevoise terroir + dessert maison. Options végé.</p> },
    ],
  },
  {
    id: "prix", label: "Prix", type: "list",
    children: [
      { id: "souvenir", label: "Prix souvenir", body: <p className="text-ink/75 leading-relaxed">Tirage au sort parmi tous les inscrits — séjour bien-être en Suisse.</p> },
      { id: "podium", label: "Prix podium", body: <p className="text-ink/75 leading-relaxed">Trophée officiel + bons d'achat chez nos partenaires Sport.</p> },
    ],
  },
  {
    id: "resultats", label: "Résultats", type: "direct",
    body: (
      <>
        <p className="text-ink/75 leading-relaxed">
          Classements complets en temps réel par course, par catégorie d'âge et par entreprise. Comparez vos
          performances aux éditions précédentes.
        </p>
        <Link href={RESULTS_URL} className="inline-flex items-center gap-2 mt-6 px-6 py-3.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
          <Trophy className="h-4 w-4" />
          Consulter les résultats
          <ExternalLink className="h-4 w-4" />
        </Link>
      </>
    ),
  },
  {
    id: "photos", label: "Photos", type: "direct",
    body: (
      <>
        <p className="text-ink/75 leading-relaxed">
          Toutes les photos officielles, classées par dossard. Téléchargement gratuit et illimité — gracieusement
          offert par nos photographes partenaires.
        </p>
        <Link href={PHOTOS_URL} className="inline-flex items-center gap-2 mt-6 px-6 py-3.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
          <Camera className="h-4 w-4" />
          Galerie 2025
          <ExternalLink className="h-4 w-4" />
        </Link>
      </>
    ),
  },
];

export function InfosTree() {
  const [openCat, setOpenCat] = useState<string | null>(CATEGORIES[0].id);
  const [openSub, setOpenSub] = useState<string | null>(
    CATEGORIES[0].type === "list" ? CATEGORIES[0].children[0].id : null
  );

  const activeCat = CATEGORIES.find((c) => c.id === openCat) || null;
  const activeSub =
    activeCat?.type === "list" ? activeCat.children.find((s) => s.id === openSub) || null : null;
  const directBody = activeCat?.type === "direct" ? activeCat.body : null;

  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Left — orange + blue hierarchical menu */}
      <div className="lg:col-span-5 space-y-3">
        {CATEGORIES.map((cat) => {
          const active = openCat === cat.id;
          return (
            <div key={cat.id}>
              <button
                onClick={() => {
                  if (cat.type === "direct") {
                    setOpenCat(cat.id);
                    setOpenSub(null);
                  } else {
                    setOpenCat(active ? null : cat.id);
                    if (!active) setOpenSub(cat.children[0]?.id ?? null);
                  }
                }}
                className={[
                  "w-full text-left px-6 py-4 rounded-full shadow-soft hover:shadow-soft-lg font-display text-base md:text-lg flex items-center justify-between gap-3 transition",
                  active ? "bg-orange text-white" : "bg-orange/90 text-white hover:bg-orange",
                ].join(" ")}
              >
                <span>{cat.label}</span>
                {cat.type === "direct" ? (
                  <ChevronRight className="h-5 w-5" />
                ) : (
                  <ChevronDown className={["h-5 w-5 transition", active ? "rotate-180" : ""].join(" ")} />
                )}
              </button>

              {cat.type === "list" && active && (
                <div className="mt-3 ml-4 md:ml-8 space-y-2">
                  {cat.children.map((sub) => {
                    const isActive = openSub === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setOpenSub(sub.id)}
                        className={[
                          "w-full text-left px-5 py-3 rounded-full shadow-soft-sm font-semibold text-sm md:text-base flex items-center justify-between gap-3 transition",
                          isActive ? "bg-blue text-ink" : "bg-blue/70 text-ink hover:bg-blue",
                        ].join(" ")}
                      >
                        <span>{sub.label}</span>
                        <ChevronRight className={["h-4 w-4 transition", isActive ? "rotate-90" : ""].join(" ")} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right — text panel */}
      <div className="lg:col-span-7 lg:sticky lg:top-28 lg:self-start">
        <article className="rounded-[32px] bg-orange/15 p-7 md:p-10 min-h-[400px] shadow-soft">
          {activeCat && (
            <header className="border-b border-ink/15 pb-5 mb-6">
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-ink/65">
                {activeCat.label}
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-ink leading-[0.95] mt-2">
                {activeSub?.label ?? (activeCat.type === "direct" ? activeCat.label : "Choisissez une sous-rubrique")}
              </h3>
            </header>
          )}

          <div className="text-[15px]">
            {directBody ?? activeSub?.body ?? (
              <p className="text-ink/55">Choisissez une rubrique à gauche pour afficher son contenu ici.</p>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
