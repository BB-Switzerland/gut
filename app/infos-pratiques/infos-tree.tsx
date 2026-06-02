"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink, Camera, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

const REGISTRATION_EMAIL = "inscription@runningeneva.ch";
const VOLUNTEER_URL = "https://www.geneveurbantrail.ch/benevoles";
const PHOTOS_2025_URL = "https://drive.google.com/drive/folders/1NsTzy1jzf3BrDQ7O9dLtiLfs3GqgtSMi";
const PHOTOS_2024_URL = "https://waviewphotos.photodeck.com";

type SubItem = { id: string; label: string; body: React.ReactNode };
type Category =
  | { id: string; label: string; type: "list"; children: SubItem[] }
  | { id: string; label: string; type: "direct"; body: React.ReactNode };

const PRICING_TABLE: Array<{ race: string; prices: [string, string, string, string, string] }> = [
  { race: "16 km solo",                          prices: ["CHF 40", "CHF 45", "CHF 50", "CHF 55", "CHF 65"] },
  { race: "16 km Relais à 2",                    prices: ["CHF 65", "CHF 70", "CHF 75", "CHF 80", "CHF 85"] },
  { race: "16 km Relais Inter-Entreprises",      prices: ["CHF 70", "CHF 75", "CHF 80", "CHF 85", "CHF 90"] },
  { race: "9 km",                                 prices: ["CHF 35", "CHF 40", "CHF 45", "CHF 50", "CHF 55"] },
  { race: "6 km Running & Walking",              prices: ["CHF 30", "CHF 35", "CHF 40", "CHF 45", "CHF 50"] },
  { race: "1 km Parent-enfant",                  prices: ["CHF 17", "CHF 20", "CHF 22", "CHF 22", "CHF 22"] },
  { race: "1 km Enfants",                        prices: ["CHF 17", "CHF 20", "CHF 22", "CHF 22", "CHF 22"] },
  { race: "4,6 km Walking parcours adapté",      prices: ["CHF 27", "CHF 27", "CHF 27", "CHF 27", "CHF 27"] },
];

const CATEGORIES: Category[] = [
  {
    id: "inscription", label: "Inscription", type: "list",
    children: [
      {
        id: "tarifs", label: "Tarifs d'inscription",
        body: (
          <>
            <p className="text-ink/80 leading-relaxed">
              Tarification par paliers selon les dossards attribués. Plus vous vous inscrivez tôt, plus c'est avantageux.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl shadow-soft">
              <table className="w-full text-xs md:text-sm">
                <thead className="bg-ink text-cream">
                  <tr>
                    <th className="text-left px-3 py-3 font-bold uppercase tracking-wider text-[10px]">Épreuve</th>
                    <th className="text-right px-3 py-3 font-bold uppercase tracking-wider text-[10px]">200 prem.</th>
                    <th className="text-right px-3 py-3 font-bold uppercase tracking-wider text-[10px]">200 suiv.</th>
                    <th className="text-right px-3 py-3 font-bold uppercase tracking-wider text-[10px]">400 suiv.</th>
                    <th className="text-right px-3 py-3 font-bold uppercase tracking-wider text-[10px]">500 suiv.</th>
                    <th className="text-right px-3 py-3 font-bold uppercase tracking-wider text-[10px]">500 derniers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10 bg-white">
                  {PRICING_TABLE.map((row) => (
                    <tr key={row.race}>
                      <td className="px-3 py-3 font-semibold whitespace-nowrap">{row.race}</td>
                      {row.prices.map((p, i) => (
                        <td key={i} className="px-3 py-3 text-right font-medium tabular-nums">{p}</td>
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
            <p className="text-ink/80 leading-relaxed">
              Inscriptions de groupes (plus de 8 personnes) :
            </p>
            <ul className="mt-4 space-y-2 text-ink/75">
              <li>• Assurez-vous que tous vos participants aient créé un compte coureur/marcheur sur le site Runningeneva.ch</li>
              <li>• Demandez votre fichier d'inscription rapide à <a href={`mailto:${REGISTRATION_EMAIL}`} className="text-orange font-semibold">{REGISTRATION_EMAIL}</a></li>
              <li>• Une question particulière : adressez-la à <a href={`mailto:${REGISTRATION_EMAIL}`} className="text-orange font-semibold">{REGISTRATION_EMAIL}</a></li>
            </ul>
          </>
        ),
      },
      {
        id: "benevoles", label: "Bénévoles",
        body: (
          <>
            <p className="text-ink/80 leading-relaxed">
              Tu souhaites faire partie de l'équipe des bénévoles du Geneva Urban Trail 2026 et bénéficier
              gratuitement de l'after race festive ?
            </p>
            <p className="mt-3 text-ink/75">
              Remplis le formulaire d'inscription et nous reprendrons contact avec toi dans les meilleurs délais.
            </p>
            <Link href={VOLUNTEER_URL} className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-purple text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
              Je m'inscris ici <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        ),
      },
      {
        id: "charte", label: "Charte du participant",
        body: (
          <div className="space-y-4 text-ink/80 leading-relaxed text-sm">
            <p className="font-bold text-ink">Charte du participant du Geneva Urban Trail 2025</p>
            <p>
              Tout participant aux courses Geneva Urban Trail s'engage de facto à la confirmation de son
              inscription à respecter les règles de circulation routières en vigueur (la LCR) sur les parcours.
            </p>
            <p>
              Le participant s'engage à courir sur les trottoirs, traverser les routes sur les passages piétons
              ou sur les endroits indiqués par les commissaires de course ou par la signalétique de la course
              (signalétique de couleur jaune).
            </p>
            <p>
              Dans le même temps, le participant s'engage à respecter son environnement de parcours. Il ne
              jettera aucun déchet durant sa course sur les parcours. Il attendra son arrivée sur le village
              course pour bénéficier des poubelles de tri mises à sa disposition.
            </p>
            <p>
              Le comité vous remercie de respecter la charte du participant au Geneva Urban Trail et vous
              souhaite une excellente course.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: "entreprises", label: "Entreprises", type: "list",
    children: [
      {
        id: "challenge", label: "Challenge Entreprises",
        body: (
          <>
            <p className="font-bold text-ink mb-3">Challenge Entreprise — 16 km Relais à 2</p>
            <p className="text-ink/80 leading-relaxed">
              Fédérez vos équipes autour d'un défi sportif et convivial ! Le Challenge Entreprise du relais 16 km
              est l'occasion idéale de partager un moment unique entre collègues, de renforcer la cohésion et de
              représenter fièrement les couleurs de votre société.
            </p>
            <p className="mt-3 text-ink/80">Par équipe de 2, relevez le défi sur un parcours trail accessible à tous :</p>
            <ul className="mt-3 space-y-1.5 text-ink/75">
              <li>→ Relais 1 : 10,2 km</li>
              <li>→ Relais 2 : 5,8 km</li>
            </ul>
            <p className="mt-3 text-ink/80">
              Un classement dédié aux entreprises sera mis en place, avec des récompenses pour les 3 équipes
              les plus performantes. Chaque participant se verra offrir une collation à l'espace VIP.
            </p>
          </>
        ),
      },
      {
        id: "plogging", label: "GUT Plogging Challenge",
        body: (
          <>
            <p className="text-ink/80 leading-relaxed">
              Prends le départ de l'unique course éco-responsable de ramassage de mégots autour du village du
              Geneva Urban Trail. Entre collègues, vis une expérience engagée et conviviale en contribuant
              concrètement à préserver notre ville… et relève le défi de ramasser un maximum de mégots !
            </p>
            <p className="mt-3 text-ink/80 font-semibold">Atouts team-building :</p>
            <ul className="mt-2 space-y-1.5 text-ink/75 text-sm">
              <li>• Acte engagé pour l'environnement</li>
              <li>• Networking & collation au village départ du GUT</li>
              <li>• Format éco-responsable</li>
              <li>• Remise de prix podium pour les 3 équipes ayant ramassé la plus grande quantité de mégots</li>
            </ul>
            <p className="mt-4 text-ink/80 font-semibold">Programme :</p>
            <ul className="mt-2 space-y-1.5 text-ink/75 text-sm">
              <li>15h30 : accueil & distribution du matériel (Bois-de-La-Bâtie)</li>
              <li>16h00 : place au challenge !</li>
              <li>17h20 : remise de prix podium</li>
              <li>Dès 17h30 : moment convivial autour d'une collation</li>
            </ul>
            <Link href={`mailto:${REGISTRATION_EMAIL}`} className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-green text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
              Inscription <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        ),
      },
    ],
  },
  {
    id: "jour-j", label: "Jour J", type: "list",
    children: [
      {
        id: "horaires", label: "Horaires de départ",
        body: (
          <ul className="space-y-3 text-sm text-ink/80">
            <li><b>16h00</b> — 3 KM GUT Plogging Challenge (Bois-de-La-Bâtie)</li>
            <li><b>17h00</b> — 1 KM Enfants (4-9 ans) et Parent-Enfant (4-7 ans) — Bois-de-La-Bâtie</li>
            <li><b>18h25</b> — 9 KM Trail-running (dès 16 ans) — Bois-de-La-Bâtie</li>
            <li><b>18h30</b> — 6 KM Trail-running (dès 10 ans) et Trail-walking (dès 16 ans) — Bibliothèque de la Cité, Place des Trois-Perdrix 5</li>
            <li><b>18h35</b> — 16 KM Trail-running (dès 18 ans) — Bois-de-La-Bâtie</li>
            <li><b>18h35</b> — 4,6 KM Parcours adapté (PMR) — Place de l'Île</li>
            <li><b>18h35</b> — 16 KM Relais à 2 (dès 18 ans) — Bois-de-La-Bâtie, passage Place du Bourg-de-Four</li>
          </ul>
        ),
      },
      {
        id: "barrieres", label: "Barrières horaires",
        body: (
          <ul className="space-y-3 text-sm text-ink/80">
            <li><b>20h15</b> — 2ᵉ passage rue Bémont, au pied de la Vieille-Ville, à 11,5 km</li>
            <li><b>21h00</b> — Bois-de-La-Bâtie, à l'arrivée</li>
          </ul>
        ),
      },
      {
        id: "depot-sac", label: "Dépôt sac coureur",
        body: (
          <>
            <p className="text-ink/80 leading-relaxed">
              Sur l'aire de départ, sur l'esplanade du Bois-de-La-Bâtie.
            </p>
            <p className="mt-3 text-ink/70 text-sm italic">
              Merci de ne pas laisser d'objets de valeur. Même si le dépôt sac sera géré par des bénévoles,
              l'organisation ne sera nullement tenue responsable de tout vol ou détérioration de vos effets personnels.
            </p>
          </>
        ),
      },
      {
        id: "ravitaillement", label: "Ravitaillement",
        body: (
          <ul className="space-y-3 text-ink/80">
            <li>→ Ravitaillement Décathlon dans les Rues Basses</li>
            <li>→ Ravitaillement à l'arrivée au cœur du village de la course, Bois-de-La-Bâtie</li>
            <li className="text-sm italic text-ink/65">
              On te conseille de te munir d'1 litre d'eau et d'une barre énergétique ou tout autre encas
              nécessaire à ton ravitaillement en course.
            </li>
          </ul>
        ),
      },
      {
        id: "signaletique", label: "Signalétique parcours",
        body: (
          <p className="text-ink/80 leading-relaxed">
            Les parcours seront balisés avec des flèches jaunes et des commissaires de course orienteront
            les participants à chaque intersection clé.
          </p>
        ),
      },
      {
        id: "zone-recup", label: "Zone de récupération",
        body: (
          <div className="space-y-5 text-sm text-ink/80">
            <div>
              <p className="font-bold text-ink mb-1">16 KM</p>
              <p>1ʳᵉ zone après 7,8 km : commissaires de course à la Place de l'Île, chronométrage temporairement arrêté.</p>
              <p>6 minutes maximum pour rejoindre le pied de la rue Bémont (Vieille-Ville) en marchant.</p>
              <p>2ᵉ zone après 11 km : même principe au retour de la Vieille-Ville.</p>
            </div>
            <div>
              <p className="font-bold text-ink mb-1">16 KM Relais</p>
              <p>1ʳᵉ zone après 7,8 km. Continuer jusqu'à la Place du Bourg-de-Four (1,6 km). Passer le relais.</p>
              <p>2ᵉ zone pour le 2ᵉ relayeur après 1,3 km de course. Continuer jusqu'à l'arrivée Bois-de-la-Bâtie (4,8 km).</p>
            </div>
            <div>
              <p className="font-bold text-ink mb-1">9 KM</p>
              <p>1ʳᵉ zone après 2,7 km (Place de l'Île). 2ᵉ zone après 5,7 km (rue Bémont).</p>
            </div>
            <div>
              <p className="font-bold text-ink mb-1">6 KM</p>
              <p>Une seule zone après 2,5 km (rue Bémont au retour de la Vieille-Ville).</p>
            </div>
            <p className="italic text-ink/65">Le coureur a en tout temps l'obligation de respecter la circulation routière (LCR).</p>
          </div>
        ),
      },
      {
        id: "repas", label: "Repas",
        body: (
          <>
            <p className="text-ink/80 leading-relaxed">
              Repas dès 18h00, sur réservation uniquement. Tarif spécial pour les participants.
            </p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="font-bold text-ink">Assiette Genevoise</p>
                <ul className="mt-2 space-y-1 text-sm text-ink/75">
                  <li>½ saucisse de veau grillée Origine Suisse</li>
                  <li>¼ de poulet rôti IPS</li>
                  <li>150 g pommes de terre rissolées (GRTA) — producteur de Jussy</li>
                </ul>
                <p className="mt-2 text-sm font-bold text-ink">CHF 19.50 participants · CHF 23.– accompagnants</p>
              </div>
              <div>
                <p className="font-bold text-ink">Salade fraîcheur</p>
                <p className="mt-2 text-sm text-ink/75">Roquette, salade, fromage italien, tomates</p>
                <p className="mt-2 text-sm font-bold text-ink">CHF 12.– participants · CHF 15.– accompagnants</p>
              </div>
            </div>
            <Link href={`mailto:${REGISTRATION_EMAIL}`} className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
              Je réserve <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        ),
      },
    ],
  },
  {
    id: "prix", label: "Prix", type: "list",
    children: [
      {
        id: "prix-souvenir", label: "Prix souvenir",
        body: (
          <>
            <p className="text-ink/80 leading-relaxed">
              Pour tous les participants aux courses 16, 9 et 6 km et Courses Enfants :
            </p>
            <ul className="mt-4 space-y-2 text-ink/75">
              <li>→ La GUT Médaille, qui décapsule !!</li>
              <li>→ Un T-shirt GUT-Fashion</li>
            </ul>
          </>
        ),
      },
      {
        id: "prix-podium", label: "Prix podium",
        body: (
          <div className="space-y-4 text-ink/80">
            <div>
              <p className="font-bold text-ink">Adultes (du 1er au 5e — hommes / femmes)</p>
              <ul className="mt-2 space-y-1 text-sm text-ink/75">
                <li>• 16 KM, 9 KM et 6 KM trail-running</li>
                <li className="italic text-ink/60">Le 6 KM trail-walking sera chronométré mais ne donnera pas droit à un podium.</li>
                <li>• 16 km Relais : 1ᵉʳ hommes / femmes / mixtes</li>
                <li>• 16 km Relais ENTREPRISE : 1ᵉʳ hommes / femmes / mixtes</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-ink">Enfants (du 1er au 5e — garçons / filles)</p>
              <p className="mt-2 text-sm text-ink/75">
                Le 1 KM Enfant par catégorie : 4-6 ans / 7-9 ans
              </p>
            </div>
            <p className="text-sm italic text-ink/65">Les prix podium non retirés le jour de l'événement seront définitivement perdus.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: "resultats", label: "Résultats", type: "direct",
    body: (
      <>
        <p className="text-ink/80 leading-relaxed">
          Retrouvez les classements des éditions précédentes.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["2025", "2024", "2023", "2022", "2021"].map((year) => (
            <Link key={year} href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
              <Trophy className="h-3.5 w-3.5" />
              Résultats {year}
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "photos", label: "Photos", type: "direct",
    body: (
      <>
        <p className="text-ink/80 leading-relaxed">
          Galeries photo officielles des éditions précédentes.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={PHOTOS_2025_URL} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
            <Camera className="h-3.5 w-3.5" />
            Photos 2025
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <Link href={PHOTOS_2024_URL} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue text-ink font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
            <Camera className="h-3.5 w-3.5" />
            Photos 2024
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
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
