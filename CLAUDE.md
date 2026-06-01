@AGENTS.md

# 🏃‍♂️ Genève Urban Trail (GUT) — Project Documentation

> **Cette doc est pour toi, Claude.** Tu reprends la suite d'un proto Next.js qu'on va porter sur **WordPress + Beaver Builder**. Tout ce dont tu as besoin pour ne pas redemander est ici. Si tu manques d'un détail, demande, ne déduis pas.

## 🧭 Index rapide des fichiers du repo

### Pages
- [app/page.tsx](app/page.tsx) — Home
- [app/evenement/page.tsx](app/evenement/page.tsx) — Événement
- [app/epreuves/page.tsx](app/epreuves/page.tsx) — Épreuves
- [app/epreuves/race-selector.tsx](app/epreuves/race-selector.tsx) — Sélecteur de distances + fiches courses
- [app/infos-pratiques/page.tsx](app/infos-pratiques/page.tsx) — Infos pratiques
- [app/infos-pratiques/infos-tree.tsx](app/infos-pratiques/infos-tree.tsx) — Arbre navigable orange/bleu
- [app/entreprises/page.tsx](app/entreprises/page.tsx) — Entreprises

### Layout & lib
- [app/layout.tsx](app/layout.tsx) — Layout racine (fonts, chrome global)
- [app/globals.css](app/globals.css) — Tokens Tailwind v4 + keyframes
- [lib/utils.ts](lib/utils.ts) — `cn()`, URLs externes, nav
- [lib/hooks.ts](lib/hooks.ts) — `useReveal`, `useCountUp`, `formatNumber`

### Composants partagés ([app/components/](app/components/))
- [site-header.tsx](app/components/site-header.tsx) — Header fixe + nav
- [site-footer.tsx](app/components/site-footer.tsx) — Footer panneau bleu + newsletter
- [floating-bar.tsx](app/components/floating-bar.tsx) — Pill orange scroll-anim
- [banner.tsx](app/components/banner.tsx) — Hero banner réutilisable + `PhotoMosaic`
- [hero-visuals.tsx](app/components/hero-visuals.tsx) — 4 visuals heros secondaires
- [section-header.tsx](app/components/section-header.tsx) — Eyebrow + h2 + desc
- [dossard-counter.tsx](app/components/dossard-counter.tsx) — Compteur circulaire SVG (fetch live)
- [partners-marquee.tsx](app/components/partners-marquee.tsx) — Logo carousel infini
- [reveal.tsx](app/components/reveal.tsx) — `<Reveal>` + `<CountUp>` wrappers
- [races.tsx](app/components/races.tsx) — `RACES` data + `RaceCard` + `RacesSlider` + filtres
- [info-photo-card.tsx](app/components/info-photo-card.tsx) — Carte photo plein avec titre Bungee
- [village-reveal.tsx](app/components/village-reveal.tsx) — 4 cards photo hover reveal
- [program-strip.tsx](app/components/program-strip.tsx) — Slider compact (déprécié)
- [program-timeline-curved.tsx](app/components/program-timeline-curved.tsx) — Layout zigzag 9 cards
- [advantages-slider.tsx](app/components/advantages-slider.tsx) — Slider horizontal cards
- [course-route.tsx](app/components/course-route.tsx) — Lib SVG décoratifs
- [itinerary-ticket.tsx](app/components/itinerary-ticket.tsx) — Ticket itinéraire 3 stops
- [photo-route-map.tsx](app/components/photo-route-map.tsx) — 3 polaroids + courbe dashed

### Assets ([public/figma/](public/figma/))
- Mascotte : [gut-mascot.png](public/figma/gut-mascot.png)
- Logo partenaire principal : [bbs-harsch-logo.png](public/figma/bbs-harsch-logo.png)
- Social : [strava.png](public/figma/strava.png) · [instagram.png](public/figma/instagram.png) · [linkedin.png](public/figma/linkedin.png)
- Photos courses : [photo-race-1.jpg](public/figma/photo-race-1.jpg) · [photo-race-2.jpg](public/figma/photo-race-2.jpg) · [photo-race-3.jpg](public/figma/photo-race-3.jpg) · [photo-runners-1.jpg](public/figma/photo-runners-1.jpg)
- Photos village : [photo-village.jpg](public/figma/photo-village.jpg) · [photo-village-1.jpg](public/figma/photo-village-1.jpg) · [photo-village-2.jpg](public/figma/photo-village-2.jpg)
- Photos infos : [photo-info-1.jpg](public/figma/photo-info-1.jpg) · [photo-info-2.jpg](public/figma/photo-info-2.jpg) · [photo-info-3.jpg](public/figma/photo-info-3.jpg)
- Engagement : [photo-engagement.jpg](public/figma/photo-engagement.jpg)
- Décor : [arrow-orange.png](public/figma/arrow-orange.png) · [ellipse-orange.png](public/figma/ellipse-orange.png) · [ellipse-cream.png](public/figma/ellipse-cream.png)

### Config racine
- [package.json](package.json) · [next.config.ts](next.config.ts) · [tsconfig.json](tsconfig.json) · [postcss.config.mjs](postcss.config.mjs) · [eslint.config.mjs](eslint.config.mjs)
- [AGENTS.md](AGENTS.md) — note Next.js 16

---

## 0. TL;DR pour la session SSH

- **Client** : Genève Urban Trail, course de trail urbain à Genève (Suisse). Édition **2026 = samedi 5 septembre**.
- **État actuel** : prototype Next.js 16 complet (5 pages, ~20 composants, animations) dans `/Users/charlesremy/gut-mcp/`. Dev server `npm run dev`, build `npm run build`. Tout est en [app/](app/) (App Router).
- **Objectif** : porter intégralement vers **WordPress 6.x + Beaver Builder Pro + Beaver Themer**. Plugin custom `gut-modules/`. La cliente doit pouvoir éditer toutes les pages dans BB sans toucher au code.
- **Stack target décidé** : BB Theme + BB Themer + plugin `gut-modules` (modules custom dans `modules/`), forms via BB Form Builder ou Fluent Forms, cache WP Rocket, images via ShortPixel.
- **3 décisions encore en attente côté client** — voir section 13.

### 📁 Fichiers de référence à consulter directement

| Catégorie | Fichiers |
|---|---|
| **Pages** | [app/page.tsx](app/page.tsx) · [app/evenement/page.tsx](app/evenement/page.tsx) · [app/epreuves/page.tsx](app/epreuves/page.tsx) · [app/infos-pratiques/page.tsx](app/infos-pratiques/page.tsx) · [app/entreprises/page.tsx](app/entreprises/page.tsx) |
| **Layout global** | [app/layout.tsx](app/layout.tsx) · [app/globals.css](app/globals.css) |
| **Lib** | [lib/utils.ts](lib/utils.ts) · [lib/hooks.ts](lib/hooks.ts) |
| **Config** | [package.json](package.json) · [next.config.ts](next.config.ts) · [tsconfig.json](tsconfig.json) · [postcss.config.mjs](postcss.config.mjs) |

---

## 1. Contexte produit

**Genève Urban Trail (GUT)** : course de trail urbain au cœur de Genève, Vieille-Ville et parc des Bastions. Édition 2026 prévue **samedi 5 septembre**, départ à partir de 17h00, fin à 21h30.

**Format** : 7 épreuves de 1 à 16 km, running + walking + relais, ouvertes aux particuliers et aux entreprises. ~3'500 coureurs attendus, ~180 bénévoles.

**Lieux clés** :
- **Place du Bourg-de-Four** (Vieille-Ville) — village départ pour les courses adultes
- **Parc des Bastions** — départ des courses enfants
- **La Treille** — point culminant du parcours
- **Plaine de Plainpalais** — village festif

**Public** : familles genevoises, runners du Léman, entreprises locales (B2B team-building).

**Ton** : convivial, sportif, festif, ancré local Genève, éco-responsable.

---

## 2. Identité de marque

### Couleurs

> Toutes en hex. Les noms `orange`, `green`, etc. sont les classes Tailwind v4 dans le proto Next.js (définis dans [app/globals.css](app/globals.css) via `@theme inline`).

| Token | Hex | Usage |
|---|---|---|
| `orange` | `#ec6436` | **Couleur primaire**, CTA principaux, accents, 16 KM |
| `green` | `#00a184` | Validation, badges "Running", 9 KM, écologie |
| `blue` | `#81d4da` | Couleur fraîche, 6 KM, infos pratiques, fond de section |
| `yellow` | `#febf2c` | Highlight, attention, KM enfants (3 KM) |
| `purple` | `#7d7ebc` | Bénévoles, relais entreprises, podium |
| `cream` | `#f0eeea` | Fond principal du site (paper-like) |
| `ink` | `#14110f` | Texte principal (quasi-noir doux) |
| `paper` | `#ffffff` | Surfaces blanches (cards) |

### Typographies

```css
/* Display — titres, chiffres, big stat */
font-family: 'Bungee', Impact, sans-serif;
font-weight: 400; /* Bungee n'a qu'un poids */
letter-spacing: 0;
line-height: 0.95;
text-transform: uppercase; /* Bungee est conçu uppercase */

/* Body — paragraphes, UI, formulaires */
font-family: 'Open Sans', ui-sans-serif, system-ui, sans-serif;
font-weights: 400, 500, 600, 700, 800;
```

Chargées via Google Fonts (`Bungee` + `Open Sans`).

**Échelle typographique** (Tailwind) :
- Hero h1 : `text-[34px] sm:text-4xl md:text-5xl xl:text-6xl` (max 60px desktop)
- Section h2 : `text-4xl md:text-5xl xl:text-6xl`
- Card h3 : `text-xl` à `text-3xl` selon contexte
- Body : `text-base md:text-lg` (16-18px)
- Eyebrow / labels : `text-[11px]` avec `tracking-[0.22em]` + `uppercase` + `font-bold`

### Mascotte

Personnage **orange** stylisé (mi-oiseau mi-coureur), fichier [public/figma/gut-mascot.png](public/figma/gut-mascot.png) (variante [public/figma/gut-mascot-2.png](public/figma/gut-mascot-2.png)). Apparaît dans le header (à côté du logo), dans le hero, et dans le CTA de fin de page (animation `animate-mascot` — léger rebond rotation `-2°/+2°`).

### Shadows & radius

```css
--shadow-soft-sm: 0 1px 2px rgba(20,17,15,0.04), 0 1px 3px rgba(20,17,15,0.06);
--shadow-soft:    0 4px 12px rgba(20,17,15,0.06), 0 2px 4px rgba(20,17,15,0.04);
--shadow-soft-lg: 0 12px 32px rgba(20,17,15,0.08), 0 4px 8px rgba(20,17,15,0.04);
--shadow-soft-xl: 0 24px 48px rgba(20,17,15,0.10), 0 8px 16px rgba(20,17,15,0.06);

/* Radius */
12, 16, 24, 32, 40 px (= sm, md, lg, xl, 2xl)
pill (full) = 9999px → CTA buttons, filter chips
```

> Pas de bordures épaisses (pas de neubrutalism). Pas de glassmorphism. Style **flat + ombres douces + photos vraies**.

---

## 3. Architecture des pages

Le site a **5 pages** + chrome global (header, footer, floating bar).

### 3.1 Home (`/`)

📄 Source : [app/page.tsx](app/page.tsx)

1. **Hero Banner** (orange accent) : eyebrow date + h1 "Genève hors des sentiers battus" + subtitle + 2 CTAs (Résultats 2025, Photos 2025) + photo mosaic à droite (3 photos rotation)
2. **Stats strip** (`FinishStripe` 6px sticker bandeau coloré multi-couleurs en haut) :
   - **Compteur dossards circulaire** (260px) à gauche
   - 3 chiffres animés (CountUp) à droite : Coureurs attendus / Bénévoles / Épreuves
3. **Épreuves** : section header + 3 `FilterPill` (Type / Public / Distance) + carrousel horizontal `RaceCard` × 7
4. **PartnersMarquee** "Partenaires course"
5. **Carte parcours** (`bg-blue/25`) : titre + 3 `Marker` (Départ Bourg-de-Four / Mi-course Treille / Arrivée Bastions) + **CourseMap SVG** (3 tracés colorés + 4 dots)
6. **Infos pratiques** : 3 × `InfoPhotoCard` (Coureurs / Entreprise / Bénévoles)
7. **Village départ** (photo full-width, 460-560px haut) avec overlay sombre + CTA "Découvrez le programme 2026"
8. **VillageReveal** 4 cards (Animations / Repas / DJ / Stands) avec hover reveal
9. **PartnersMarquee** "Partenaires village" (variant blue/40)
10. **CTA "Je réserve mon dossard"** (`bg-ink` rounded-[40px], 2 dashed routes animées en fond, mascotte en bas-droite)

### 3.2 Événement (`/evenement`)

📄 Source : [app/evenement/page.tsx](app/evenement/page.tsx)

1. **Hero Banner** (green accent) : titre "Un événement team-building hors des sentiers battus" + 2 CTAs + **`EvenementHeroVisual`** (photo affiche programme empilée + sticker rond 2026)
2. **Programme 2026** (avec `TopoBackground` orange 0.06) : section header + **`ProgramTimelineCurved`** = layout zigzag 9 cards alternées (photo gauche/droite + chip type + pill heure)
3. **Village départ** photo banner avec 2 sub-CTAs (Animations / Repas)
4. **VillageReveal** 4 cards
5. **AdvantagesSlider** 8 cards (Ravitaillements / Signalétique / Zone récupération / Ambiance / Éco / Photos / Dépôt sac / Charte)
6. **Nos engagements** 4 cards (Valorisation / Économie / Bien-être / Éco-responsable) avec photo + accent
7. **PartnersMarquee** "Partenaires événement"

### 3.3 Épreuves (`/epreuves`)

📄 Source : [app/epreuves/page.tsx](app/epreuves/page.tsx) · [app/epreuves/race-selector.tsx](app/epreuves/race-selector.tsx)

1. **Hero Banner** (orange accent) : titre "Choisissez votre épreuve" + 2 CTAs + **`EpreuvesHeroVisual`** (grille 3×3 cases couleurs avec KM + 1 case noire "Toutes les épreuves")
2. **`RaceSelector`** : 7 boutons distance en pills colorées → onclick affiche la fiche course complète (photo hero, description, stats, points clés, ravitaillements, matériel, retrait dossards)
3. **PartnersMarquee**

### 3.4 Infos pratiques (`/infos-pratiques`)

📄 Source : [app/infos-pratiques/page.tsx](app/infos-pratiques/page.tsx) · [app/infos-pratiques/infos-tree.tsx](app/infos-pratiques/infos-tree.tsx)

1. **Hero Banner** (blue accent) : titre "Toutes les infos pratiques" + 2 CTAs + **`InfosHeroVisual`** (polaroid -4° + index navigable 5 rubriques)
2. **`InfosTree`** : menu hiérarchique orange→bleu→panel texte droite. Catégories : Inscription / Entreprises / Jour J / Prix / Résultats (direct) / Photos (direct)
3. **PartnersMarquee**

### 3.5 Entreprises (`/entreprises`)

📄 Source : [app/entreprises/page.tsx](app/entreprises/page.tsx)

1. **Hero Banner** (green accent) : titre "Le team-building grandeur nature" + 2 CTAs + **`EntreprisesHeroVisual`** (photo bandeau team + phrase éditoriale avec chiffres `58 / 312 / 100%` intégrés en couleur + ligne Plogging Challenge)
2. **Vos formats** : 3 `CompanyRace` (Relais 16 KM / Plogging Challenge / Pack Team-Building)
3. **Challenge Entreprise** (`bg-blue/30`) : header + 2 CTAs + 4 features (Espace VIP / Repas / Trophée / Plogging)
4. **Jour J VillageReveal** 4 cards (Animations / Repas / Convivialité / Éco)
5. **Tarifs** (`bg-orange/15`) : table 4 packs (Relais / Team-Building / Plogging / Premium)
6. **Prix** 3 cards (Souvenir / Podium / Éco)
7. **PartnersMarquee** "Partenaires entreprises" (variant village)

### 3.6 Chrome global

- **`SiteHeader`** [app/components/site-header.tsx](app/components/site-header.tsx) : fixed top, h-16 md:h-20, transparent → cream + shadow au scroll. Logo mascotte + "GUT / Geneva Urban Trail" + nav 4 liens + Contact + "S'inscrire" orange
- **`SiteFooter`** [app/components/site-footer.tsx](app/components/site-footer.tsx) : panneau bleu/70 newsletter à gauche + 2 cols nav + carte ink (adresse + contacts) à droite + strip légal crème
- **`FloatingBar`** [app/components/floating-bar.tsx](app/components/floating-bar.tsx) : pill orange centré max-w-1100, fixed bottom-6, anim max-width 40→1100 au scroll, contient social icons (Strava/Insta/LinkedIn SVG inline blanc) + Inscription + Contact

---

## 4. Inventaire des composants (Next.js)

Tous dans [app/components/](app/components/). Chacun est un point de départ pour un module Beaver Builder équivalent.

| Fichier | Rôle | À porter en module BB ? |
|---|---|---|
| [site-header.tsx](app/components/site-header.tsx) | Header fixe | **Themer Header** |
| [site-footer.tsx](app/components/site-footer.tsx) | Footer | **Themer Footer** |
| [floating-bar.tsx](app/components/floating-bar.tsx) | Pill orange flottant scroll | **Plugin global** (inject `wp_footer`) |
| [banner.tsx](app/components/banner.tsx) | Hero banner réutilisable + `PhotoMosaic` par défaut + slot `visual` | **`gut-banner-hero`** + 4 aliases |
| [hero-visuals.tsx](app/components/hero-visuals.tsx) | 4 visuals pour les heros secondaires (Evenement / Epreuves / Infos / Entreprises) | **Settings pré-configurés** dans les aliases |
| [dossard-counter.tsx](app/components/dossard-counter.tsx) | Compteur circulaire SVG, fetch live | **`gut-dossard-counter`** (PHP de départ existe) |
| [partners-marquee.tsx](app/components/partners-marquee.tsx) | Logo carousel infini | **`gut-partners-marquee`** (repeater logos) |
| [section-header.tsx](app/components/section-header.tsx) | Eyebrow + h2 + description | sous-composant interne aux modules |
| [reveal.tsx](app/components/reveal.tsx) | `<Reveal>` wrapper + `<CountUp>` animated number | Helper JS global du plugin |
| [races.tsx](app/components/races.tsx) | `RacesSlider` + `RaceCard` + filtres | **`gut-races-slider`** container + **`gut-race-card`** child |
| [info-photo-card.tsx](app/components/info-photo-card.tsx) | Carte photo plein avec titre Bungee overlay | **`gut-info-photo-card`** |
| [village-reveal.tsx](app/components/village-reveal.tsx) | 4 cards photo avec hover reveal | **`gut-village-reveal`** container + child |
| [program-strip.tsx](app/components/program-strip.tsx) | Slider compact programme (déprécié, remplacé par timeline curved) | — |
| [program-timeline-curved.tsx](app/components/program-timeline-curved.tsx) | Layout zigzag 9 cards | **`gut-program-timeline`** container |
| [advantages-slider.tsx](app/components/advantages-slider.tsx) | Slider horizontal cards avec icône colorée | **`gut-advantages-slider`** container |
| [course-route.tsx](app/components/course-route.tsx) | Lib SVG décoratifs : `RouteTrail` / `Dossard` / `KmMarker` / `TopoBackground` / `FinishStripe` / `StatBlock` | SVG inline dans `frontend.php` des modules concernés |
| [itinerary-ticket.tsx](app/components/itinerary-ticket.tsx) | Ticket itinéraire 3 stops (peu utilisé) | — |
| [photo-route-map.tsx](app/components/photo-route-map.tsx) | 3 polaroids photo avec courbe dashed (peu utilisé) | — |

---

## 5. Inventaire des assets

Tous dans [public/figma/](public/figma/) (sourcés du Figma original, optimisés via `sips` 1600px max).

### Logos & icônes

| Fichier | Usage |
|---|---|
| [gut-mascot.png](public/figma/gut-mascot.png) (33 KB) | Mascotte orange — header, banner, CTA, animations |
| [gut-mascot-2.png](public/figma/gut-mascot-2.png) (33 KB) | Variante (réserve) |
| [bbs-harsch-logo.png](public/figma/bbs-harsch-logo.png) (63 KB) | Logo agence BBS x Harsch (mentionné footer) |
| [strava.png](public/figma/strava.png) (25 KB) | Logo Strava (footer + floating bar) |
| [instagram.png](public/figma/instagram.png) (12 KB) | Icon Instagram (PNG, remplacé par SVG inline dans floating bar) |
| [linkedin.png](public/figma/linkedin.png) (9 KB) | Icon LinkedIn (idem) |
| [arrow-orange.png](public/figma/arrow-orange.png) (2.5 KB) | Flèche orange (utilisée dans le module dossard PHP original) |
| [ellipse-orange.png](public/figma/ellipse-orange.png) / [ellipse-cream.png](public/figma/ellipse-cream.png) | Ellipses décoratives |

### Photos

| Fichier | Sujet | Usage typique |
|---|---|---|
| [photo-race-1.jpg](public/figma/photo-race-1.jpg) | Coureurs en course | RaceCard 16 KM, programme |
| [photo-race-2.jpg](public/figma/photo-race-2.jpg) | Coureurs ville | RaceCard 9 KM |
| [photo-race-3.jpg](public/figma/photo-race-3.jpg) | Coureurs / arrivée | RaceCard 6 KM |
| [photo-runners-1.jpg](public/figma/photo-runners-1.jpg) | Groupe runners | Relais entreprise |
| [photo-village-1.jpg](public/figma/photo-village-1.jpg) | Village départ (ambiance) | VillageReveal Animations |
| [photo-village-2.jpg](public/figma/photo-village-2.jpg) | Village départ (food/stands) | VillageReveal Repas |
| [photo-village.jpg](public/figma/photo-village.jpg) | Village départ pleine largeur | Banner village départ |
| [photo-info-1.jpg](public/figma/photo-info-1.jpg) | Coureurs en groupe | InfoPhotoCard Coureurs |
| [photo-info-2.jpg](public/figma/photo-info-2.jpg) | Team entreprises | InfoPhotoCard Entreprise |
| [photo-info-3.jpg](public/figma/photo-info-3.jpg) | Bénévoles | InfoPhotoCard Bénévoles |
| [photo-engagement.jpg](public/figma/photo-engagement.jpg) | Photo "engagements" (à remplacer par carte de Genève) | CourseMap fond |

> ⚠️ Ces photos sont **du prototype**. La cliente devra fournir ses **propres photos officielles** lors de la prod WordPress.

---

## 6. Animations & interactions

### Patterns récurrents

> Hooks dans [lib/hooks.ts](lib/hooks.ts), composants wrappers dans [app/components/reveal.tsx](app/components/reveal.tsx), keyframes CSS dans [app/globals.css](app/globals.css).

| Effet | Implémentation | Où |
|---|---|---|
| **Reveal scroll** | `useReveal` (IntersectionObserver, threshold 0.15) → opacity 0→1 + translateY 28px→0 sur 700ms `cubic-bezier(0.22, 1, 0.36, 1)` | Toutes les sections, headers |
| **CountUp animé** | `useCountUp` (rAF, ease-out cubique, 1400ms) | Stats home |
| **Hover scale photo** | `transition-transform duration-700 group-hover:scale-110` | Toutes les cards avec photo |
| **Hover lift card** | `hover:-translate-y-1 hover:shadow-soft-lg transition` | Race cards, info cards |
| **Marquee infini** | `@keyframes marquee` → `transform: translateX(-50%)` sur 40s linear infinite. Pause on hover. | PartnersMarquee |
| **Mascot bounce** | `@keyframes mascot-bounce` → translateY ±10px + rotate ±2° sur 5s | Mascotte CTA bottom |
| **Pulse ring** | `::after` border qui s'agrandit (scale 0.9→1.8) + opacity 0.6→0 sur 1.8s | Indicateur "en direct" du compteur dossards |
| **Banner drift** | `@keyframes banner-drift` → translate3d + scale léger sur 18s | Cercles couleur derrière hero |
| **FloatingBar grow** | `max-width 40px → 1100px` sur 700ms `cubic-bezier(0.22, 1, 0.36, 1)` | Apparition au scroll |
| **Dashed route flow** | `stroke-dasharray: 2 14` + `animation: route-flow 1.6s linear infinite` (offset défile) | SVG décoratifs banner / CTA |

### Hover routes (race cards)

Sur hover d'une `RaceCard`, un SVG overlay apparaît (`opacity-0 group-hover:opacity-100 transition-opacity duration-500`) avec un tracé dashed blanc qui dessine une route imaginaire entre deux points (départ → arrivée).

---

## 7. Données structurées (à exposer en CPT WordPress)

### Races (7 épreuves)

Source : [app/components/races.tsx](app/components/races.tsx) (objet `RACES`).

```js
{ id: "16km",        title: "Le Grand Trail",     distance: "16 KM",       km: 16, type: "Running", audience: "Adultes",     color: "#ec6436", elevation: "+450 m", duration: "≈ 1h45",   start: "18h00", tags: ["Running"], photo: "photo-race-1.jpg" }
{ id: "16km-relais", title: "Relais Entreprise",  distance: "16 KM RELAIS",km: 16, type: "Relais",  audience: "Entreprises", color: "#7d7ebc", elevation: "+450 m", duration: "≈ 1h50",   start: "18h00", tags: ["Relais", "Éco-responsable"], photo: "photo-runners-1.jpg" }
{ id: "9km",         title: "L'Urbain",           distance: "9 KM",        km: 9,  type: "Running", audience: "Adultes",     color: "#00a184", elevation: "+220 m", duration: "≈ 55 min", start: "18h30", tags: ["Running"], photo: "photo-race-2.jpg" }
{ id: "6km",         title: "La Découverte",      distance: "6 KM",        km: 6,  type: "Walking", audience: "Familles",    color: "#81d4da", elevation: "+120 m", duration: "≈ 1h15",   start: "19h00", tags: ["Running", "Walking"], photo: "photo-race-3.jpg" }
{ id: "3km-kid",     title: "Mini-Trail Junior",  distance: "3 KM",        km: 3,  type: "Running", audience: "Enfants",     color: "#febf2c", elevation: "+60 m",  duration: "≈ 25 min", start: "17h30", tags: ["Running", "Enfants"], photo: "photo-race-1.jpg" }
{ id: "1km-kid",     title: "Mini-Trail Kids",    distance: "1 KM",        km: 1,  type: "Running", audience: "Enfants",     color: "#febf2c", elevation: "—",      duration: "≈ 8 min",  start: "17h15", tags: ["Running", "Enfants"], photo: "photo-race-3.jpg" }
{ id: "1km-parent",  title: "Parents / Enfants",  distance: "1 KM",        km: 1,  type: "Walking", audience: "Familles",    color: "#ec6436", elevation: "—",      duration: "≈ 15 min", start: "17h00", tags: ["Walking", "Famille"], photo: "photo-race-3.jpg" }
```

**Fiche course détaillée** (cf. [app/epreuves/race-selector.tsx](app/epreuves/race-selector.tsx)) : ajouter `startLocation`, `cutoff`, `date`, `description` (paragraphe), `highlights[]`, `feedStops[]`, `mandatory[]`, `bibPickup[]`.

→ Recommandation : **CPT `gut_race`** avec ACF group "Race details" pour ces champs.

### Programme (9 moments)

Source : [app/evenement/page.tsx](app/evenement/page.tsx) (array `PROGRAM`), rendu par [app/components/program-timeline-curved.tsx](app/components/program-timeline-curved.tsx).

```
16:00  Village     Ouverture village départ          #febf2c  photo-village-1.jpg
17:00  Course      1 KM Parents / Enfants            #ec6436  photo-race-3.jpg
17:15  Course      1 KM Mini-Trail Kids              #febf2c  photo-info-3.jpg
17:30  Course      3 KM Mini-Trail Junior            #febf2c  photo-race-1.jpg
18:00  Course      16 KM — Grand Trail & Relais      #ec6436  photo-race-1.jpg
18:30  Course      9 KM — L'Urbain                   #00a184  photo-race-2.jpg
19:00  Course      6 KM — La Découverte              #81d4da  photo-race-3.jpg
20:00  Cérémonie   Cérémonie podium                  #7d7ebc  photo-runners-1.jpg
21:30  Village     DJ set & bouquet final            #ec6436  photo-village-2.jpg
```

Champ `type` : enum `Village | Course | Cérémonie`. Champ `tags` : array de strings.

→ Recommandation : **CPT `gut_program_item`** OU **enfants d'un container module** `gut-program-timeline`.

### Partenaires (à modéliser)

Pour l'instant hardcodés dans [app/components/partners-marquee.tsx](app/components/partners-marquee.tsx) (`PARTNERS` array). À porter en :
- **CPT `gut_partner`** avec ACF : nom, logo, URL, catégorie (`course | village | entreprises`)
- Le module `gut-partners-marquee` filtre par catégorie via setting

---

## 8. URLs externes & intégrations

Toutes centralisées dans [lib/utils.ts](lib/utils.ts) :

```ts
INSCRIPTION_URL = "https://www.geneveurbantrail.ch/inscription"
PHOTOS_URL      = "https://photos.geneveurbantrail.ch"
RESULTS_URL     = "https://results.geneveurbantrail.ch"
VOLUNTEER_URL   = "https://www.geneveurbantrail.ch/benevoles"
```

→ À exposer en **Customizer settings** dans le thème WP pour édition par la cliente.

### Endpoint REST attendu pour le compteur dossards

```
GET /wp-json/gut/v1/dossards
Response: { "remaining": 1248, "total": 3500 }
```

Source à brancher (cf. décisions section 13) : registration externe Njuko / WooCommerce + Event Tickets / manual override admin.

---

## 9. Conventions du proto Next.js

- **Tailwind v4** (`@import "tailwindcss"`) avec tokens custom dans [app/globals.css](app/globals.css) via `@theme inline`
- **App Router** Next.js 16, RSC par défaut, `"use client"` quand interactivité nécessaire
- **Pas de glassmorphism** (backdrop-blur banni)
- **Pas de neubrutalism** (bordures 2px noires + ombres dures bannies)
- **Pas d'emojis** dans le code
- **Pas de commentaires inutiles** dans le code (la doc est ici, pas dans les fichiers)
- **Photos** toujours via `next/image`, jamais `<img>` brut
- **Icônes** : `lucide-react` (sauf brand : Instagram/LinkedIn/Strava qui n'existent plus en lucide → SVG inline dans [app/components/floating-bar.tsx](app/components/floating-bar.tsx))
- **Fonts** : Open Sans + Bungee via `next/font/google` (cf. [app/layout.tsx](app/layout.tsx))

---

## 10. 🚀 Roadmap WordPress + Beaver Builder

### Stack target

| Couche | Choix |
|---|---|
| WordPress | 6.x dernière stable, PHP 8.2+ |
| Hébergement | Kinsta / WP Engine / o2switch |
| Thème | **Beaver Builder Theme** + **Beaver Themer** (header, footer, archives gérés dans BB) |
| Builder | **Beaver Builder Pro** (license active requise) |
| Plugin custom | `gut-modules/` (à développer dans ce repo, sous-dossier) |
| Forms | BB Form Builder OU Fluent Forms (newsletter + contact + bénévoles) |
| ACF | **ACF Pro** pour les CPT (races, programme, partenaires) |
| Cache | WP Rocket |
| Images | ShortPixel ou Imagify, WebP/AVIF auto |
| SEO | RankMath ou Yoast |
| Multilang (optionnel) | Polylang si EN/DE requis |

### Plan en 5 phases

#### Phase 1 — Scaffold (Semaine 1)

- [ ] Install WP propre + BB Theme + BB Pro + BB Themer + ACF Pro
- [ ] Configurer `style.css` / Customizer du thème enfant `gut-theme-child/` : couleurs brand + Google Fonts (Open Sans + Bungee)
- [ ] Créer plugin `gut-modules/` (squelette + loader)
- [ ] Setup env dev local (Local by Flywheel ou DDEV)
- [ ] Setup repo Git avec sous-dossiers `theme-child/` et `gut-modules/`

#### Phase 2 — Chrome global (Semaine 1-2)

- [ ] **Themer Header** : layout BB header → logo mascotte + nav 4 + CTA orange "Je m'inscris !"
- [ ] **Themer Footer** : layout BB footer → panneau bleu newsletter + nav + carte ink contacts + strip légal
- [ ] **`FloatingBar`** : injectée via `wp_footer` action dans le plugin `gut-modules`
- [ ] Customizer Section "GUT URLs" : 4 URLs externes (inscription, photos, results, bénévoles)

#### Phase 3 — Modules (Semaines 2-4)

À développer dans `gut-modules/modules/` (chacun avec `frontend.php`, `frontend.css.php`, `frontend.js`, settings).

Ordre de priorité :

| # | Module | Type | Complexité | Notes |
|---|---|---|---|---|
| 1 | `gut-dossard-counter` | Standard | ★☆☆ | PHP de départ déjà fourni par la cliente. Settings : `size`, `cap_percentage`, `bg_color`, `progress_color`, `label_remaining`, `label_max`. JS : fetch `/wp-json/gut/v1/dossards`. |
| 2 | `gut-banner-hero` | Standard + 4 aliases | ★★☆ | Settings : `eyebrow`, `title_html`, `subtitle`, `buttons[]` (repeater), `accent_color`, `visual_variant` (default/event/races/infos/companies). |
| 3 | `gut-partners-marquee` | Standard + repeater | ★☆☆ | Repeater de partenaires (logo + url) OU pull depuis CPT `gut_partner` filtré par catégorie. |
| 4 | `gut-info-photo-card` | Standard | ★☆☆ | Settings : `photo`, `title`, `accent_color`, `url`. |
| 5 | `gut-race-card` | Standard | ★☆☆ | Settings : tous les champs de la fiche `Race`. OU mode "from CPT" : choisit un post `gut_race`. |
| 6 | `gut-races-slider` | **Container** | ★★★ | Accepts : `gut-race-card`. Filtres rendus en JS côté client (data-type / data-audience / data-distance). |
| 7 | `gut-village-reveal` | **Container** | ★★☆ | Accepts : `gut-reveal-card`. Hover overlay reveal. |
| 8 | `gut-program-timeline` | **Container** | ★★★ | Accepts : `gut-program-moment`. Layout zigzag (CSS grid alternate). Ligne SVG draw-on-scroll OPTIONNELLE (déjà retirée du proto, à valider). |
| 9 | `gut-itinerary-ticket` | Standard + 3 stops | ★☆☆ | |
| 10 | `gut-course-map` | Standard | ★★☆ | SVG inline configurable (legends, couleurs) ou image overlay. |
| 11 | `gut-advantages-slider` | Container | ★★☆ | Accepts : `gut-advantage-card`. |
| 12 | `gut-infos-tree` | Standard avec repeater nested | ★★★ | Pour `/infos-pratiques`. Repeater de catégories, chacune avec sous-repeater de rubriques + texte/html. |
| 13 | `gut-race-selector` | Standard | ★★★ | Pour `/epreuves`. Tabs distance → fiche course (pull depuis CPT `gut_race`). |

**Conventions modules** :
- Tous préfixés `gut-`
- `partial_refresh = true` quand possible (sinon full refresh assumé)
- JS toujours scopé via `.fl-node-<?php echo $id; ?>` (pour compat partial refresh)
- CSS dynamique dans `frontend.css.php` avec sélecteur `.fl-node-<?php echo $id; ?>`
- Settings : tous responsives quand pertinent (`'responsive' => true`)
- Tous les strings via `__('...', 'gut-modules')` pour i18n

#### Phase 4 — Pages (Semaine 4-5)

- [ ] Construire les 5 pages dans l'éditeur BB en assemblant les modules
- [ ] Créer le CPT `gut_race` + ACF group + 7 entries
- [ ] Créer le CPT `gut_partner` + entries
- [ ] Créer le CPT `gut_program_item` OU saisir directement dans le module timeline

#### Phase 5 — Polish + Go-live (Semaine 5)

- [ ] Forms : newsletter (Brevo/Mailpoet), contact, bénévoles
- [ ] Intégration source compteur dossards (endpoint REST `/wp-json/gut/v1/dossards`)
- [ ] Perfs : WP Rocket, image compression, lazy load, preconnect Google Fonts
- [ ] SEO : Open Graph par page, sitemap, robots.txt
- [ ] Analytics : Plausible ou GA4
- [ ] Tests cross-device + Lighthouse > 90
- [ ] Go-live : DNS swap, redirections legacy

---

## 11. Structure cible du repo

```
gut-mcp/                                  ← repo actuel
├── app/                                  ← proto Next.js (référence visuelle)
├── public/figma/                         ← assets (photos, logos)
├── CLAUDE.md                             ← ce fichier
├── AGENTS.md                             ← note Next.js 16
│
├── wordpress/                            ← NOUVEAU
│   ├── theme-child/                      ← Thème enfant BB Theme
│   │   ├── style.css
│   │   ├── functions.php                 ← Enqueue fonts + couleurs brand
│   │   └── fl-builder/                   ← Overrides modules (au besoin)
│   │
│   └── gut-modules/                      ← Plugin custom
│       ├── gut-modules.php               ← Loader plugin
│       ├── languages/
│       │   ├── gut-modules-fr_FR.po
│       │   └── gut-modules-fr_FR.mo
│       └── modules/
│           ├── gut-dossard-counter/
│           │   ├── gut-dossard-counter.php
│           │   ├── includes/
│           │   │   ├── frontend.php
│           │   │   └── frontend.css.php
│           │   ├── js/frontend.js
│           │   └── icon.svg
│           ├── gut-banner-hero/
│           ├── gut-partners-marquee/
│           └── ... (autres modules)
```

---

## 12. Squelette plugin `gut-modules`

```php
<?php
/**
 * Plugin Name: GUT Modules
 * Description: Modules Beaver Builder custom pour Genève Urban Trail.
 * Version:     1.0.0
 * Author:      [Charles Remy / agence]
 * Text Domain: gut-modules
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'GUT_MODULES_DIR', plugin_dir_path( __FILE__ ) );
define( 'GUT_MODULES_URL', plugins_url( '/', __FILE__ ) );
define( 'GUT_MODULES_VERSION', '1.0.0' );

// i18n
add_action( 'plugins_loaded', function() {
    load_plugin_textdomain( 'gut-modules', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
} );

// Enregistrement des modules BB
add_action( 'init', function() {
    if ( ! class_exists( 'FLBuilder' ) ) return;
    require_once GUT_MODULES_DIR . 'modules/gut-dossard-counter/gut-dossard-counter.php';
    require_once GUT_MODULES_DIR . 'modules/gut-banner-hero/gut-banner-hero.php';
    // ...etc
} );

// Endpoint REST compteur dossards
add_action( 'rest_api_init', function() {
    register_rest_route( 'gut/v1', '/dossards', array(
        'methods'             => 'GET',
        'permission_callback' => '__return_true',
        'callback'            => function() {
            $total     = (int) get_option( 'gut_dossards_total', 3500 );
            $remaining = (int) get_option( 'gut_dossards_remaining', 1248 );
            return rest_ensure_response( compact( 'total', 'remaining' ) );
        },
    ) );
} );

// Floating bar injectée globalement
add_action( 'wp_footer', function() {
    if ( is_admin() ) return;
    include GUT_MODULES_DIR . 'templates/floating-bar.php';
} );
```

---

## 13. ❓ Décisions à caler avec la cliente

1. **Source du compteur dossards** : registration externe (Njuko / Sportstats), WooCommerce + Event Tickets, ou option admin manuelle ?
2. **CPT Race** : base réutilisable (recommandé) ou duplication directe dans chaque module ?
3. **Multilingue** : FR uniquement édition 2026, ou prévoir EN dès maintenant pour public international ?
4. **Hébergement** : choisi ou à proposer ?
5. **License Beaver Builder Pro** : déjà active sur le compte client ou à acheter ?
6. **Forms** : préférence Mailpoet / Brevo / Mailchimp pour la newsletter ?
7. **Domain & SSL** : déjà en place ou à provisionner ?

---

## 14. Liens utiles

- **Doc Beaver Builder Developer** : https://docs.wpbeaverbuilder.com/beaver-builder/developer/
- **Doc BB Custom Modules** : https://docs.wpbeaverbuilder.com/beaver-builder/developer/custom-modules/
- **Doc BB Advanced** : https://docs.wpbeaverbuilder.com/beaver-builder/advanced/
- **Doc BB Container Modules** : https://docs.wpbeaverbuilder.com/beaver-builder/developer/category/container-modules/
- **Doc BB Hooks Reference** : https://docs.wpbeaverbuilder.com/beaver-builder/developer/hooks/
- **Doc ACF Pro** : https://www.advancedcustomfields.com/resources/
- **Bungee Font** : https://fonts.google.com/specimen/Bungee
- **Open Sans** : https://fonts.google.com/specimen/Open+Sans

---

## 15. 📝 Notes pour Claude Code (toi)

- **Tu n'es pas obligé de garder le proto Next.js**. Une fois que la migration WP est lancée, le dossier `app/` reste juste comme référence visuelle. Ne le modifie pas sauf demande explicite.
- **Tu ne touches PAS à `node_modules/`, `package.json`, ou `.next/`** pendant la migration WP.
- **Tous tes ajouts WP vont dans `wordpress/theme-child/` et `wordpress/gut-modules/`**.
- **Si tu dois écrire du PHP**, utilise PHP 8.2+ syntaxe (named args, enums, readonly, nullable types).
- **Pour les SVG**, copie-les depuis `app/components/course-route.tsx` quand tu en as besoin.
- **Pour les couleurs et tokens**, réfère-toi à la section 2 de ce doc — ne pas réinventer.
- **Pour le compteur dossards spécifiquement**, la cliente a déjà fourni un module Beaver Builder PHP au début du projet (CSS + HTML + JS séparés) → on le repackage propre dans `gut-modules/modules/gut-dossard-counter/`.
- **Tu n'es PAS un agent autonome WordPress** : tu n'as pas de WP install local accessible. Ton boulot est d'écrire le code PHP/JS/CSS des modules dans les fichiers. La cliente / l'équipe installera et testera côté serveur.
- **Quand tu écris un module BB**, suis strictement la convention :
  - Nom dossier = `gut-<slug>/`
  - Fichier main = `gut-<slug>.php` avec classe `GUT_<Slug>` qui étend `FLBuilderModule`
  - `frontend.php` requis dans `includes/`
  - `frontend.css.php` dans `includes/` si CSS dynamique
  - `js/frontend.js` si JS statique (enqueue via `$this->add_js`)
  - Tous les strings dans `__('...', 'gut-modules')`
  - JS scopé via `.fl-node-<?php echo $id; ?>` impérativement
  - Sanitize toutes les valeurs user (`absint`, `sanitize_text_field`, `wp_kses_post`, etc.)
- **Quand tu ajoutes un module**, ajoute aussi son `require_once` dans `gut-modules.php`.
- **Cache** : après chaque modif, rappelle au dev de vider le cache BB (`Tools > Clear cache`).
- **Conventional Commits** : utilise `feat:`, `fix:`, `chore:`, `docs:` etc. dans les messages git.

---

**Dernière mise à jour** : prototype Next.js complet livré, prêt à attaquer Phase 1 du portage WordPress.

— Bonne route 🏃‍♂️
