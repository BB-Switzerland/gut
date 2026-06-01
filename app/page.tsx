import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flag, Mountain, Trophy } from "lucide-react";
import { Banner } from "./components/banner";
import { PartnersMarquee } from "./components/partners-marquee";
import { SectionHeader } from "./components/section-header";
import { RacesSlider } from "./components/races";
import { VillageReveal } from "./components/village-reveal";
import { InfoPhotoCard } from "./components/info-photo-card";
import { Reveal, CountUp } from "./components/reveal";
import { FinishStripe, TopoBackground } from "./components/course-route";
import { DossardCounter } from "./components/dossard-counter";
import { PhotoRouteMap } from "./components/photo-route-map";
import { INSCRIPTION_URL, PHOTOS_URL, RESULTS_URL, VOLUNTEER_URL } from "../lib/utils";

export default function Home() {
  return (
    <>
      <Banner
        eyebrow="Samedi 05 septembre 2026"
        title={
          <>
            Genève <span className="text-orange">hors</span>
            <br /> des sentiers <br/> battus
          </>
        }
        subtitle="Découvre la face cachée de Genève et de sa Vieille-Ville en t'aventurant sur des sentiers natures et bitumes insoupçonnés. Running & walking — 6, 9, 16 km."
        buttons={[
          { label: "Résultats 2025", href: RESULTS_URL, color: "orange" },
          { label: "Photos 2025", href: PHOTOS_URL, color: "blue" },
        ]}
      />

      {/* Stats — compteur dossards + chiffres course */}
      <section className="relative pt-4 pb-12">
        <FinishStripe height={6} />
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 mt-10">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 flex flex-col items-center">
                <DossardCounter
                  remaining={1248}
                  total={3500}
                  size={260}
                  cap={90}
                  progressColor="#ec6436"
                  bgColor="rgba(20,17,15,0.10)"
                />
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-bold text-ink/65">
                  <span className="relative inline-block h-2 w-2 rounded-full bg-orange" style={{ color: "#ec6436" }}>
                    <span className="absolute inset-0 rounded-full pulse-ring" />
                  </span>
                  Mis à jour en direct
                </span>
              </div>

              <div className="lg:col-span-7 grid grid-cols-3 gap-6 md:gap-10">
                <Stat color="#00a184" value={3500} label="Coureurs attendus" />
                <Stat color="#7d7ebc" value={180} label="Bénévoles" />
                <Stat color="#febf2c" value={7} label="Épreuves" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ÉPREUVES — remontées juste après les stats */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <SectionHeader
                  eyebrow="Épreuves 2026"
                  title={<>Choisis ta <span className="text-orange">distance</span>.</>}
                  description="Sept formats — du 1 KM Parents/Enfants au 16 KM Trail. Filtrez par type, public ou distance et trouvez votre épreuve."
                  accent="orange"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/epreuves"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream hover:bg-orange transition font-bold uppercase tracking-wider text-xs md:text-sm w-fit"
              >
                Toutes les épreuves
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <RacesSlider />
        </div>
      </section>

      <PartnersMarquee title="Partenaires course" />

      {/* CARTE PARCOURS */}
      <section className="py-16 md:py-20 bg-blue/25 relative overflow-hidden">
        <TopoBackground className="text-ink" opacity={0.08} />
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 relative">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <SectionHeader
                  eyebrow="Carte du parcours"
                  title={<>De la Vieille-Ville <span className="text-orange">aux Bastions</span>.</>}
                  description="Notre tracé secret traverse les ruelles pavées du Bourg-de-Four, longe la Treille puis s'enfonce dans les sentiers boisés du parc des Bastions avant de revenir au cœur historique."
                  accent="blue"
                />
                <PhotoRouteMap
                  stops={[
                    { km: 0, label: "Départ", place: "Bourg-de-Four", detail: "17h00", color: "#ec6436", photo: "/figma/photo-race-2.jpg", icon: <Flag className="h-3 w-3" /> },
                    { km: 8, label: "Mi-course", place: "Treille", detail: "D+ 220 m", color: "#00a184", photo: "/figma/photo-race-1.jpg", icon: <Mountain className="h-3 w-3" /> },
                    { km: 16, label: "Arrivée", place: "Bastions", detail: "21h30", color: "#febf2c", photo: "/figma/photo-race-3.jpg", icon: <Trophy className="h-3 w-3" /> },
                  ]}
                />
                <Link href="/epreuves" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-ink text-cream hover:bg-orange transition font-bold uppercase tracking-wider text-xs md:text-sm">
                  Détail des parcours
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <CourseMap />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INFOS PRATIQUES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionHeader
              eyebrow="Infos pratiques"
              title={<>Tout ce qu'il faut savoir, <span className="text-orange">au bon endroit.</span></>}
              description="Coureurs, entreprises ou bénévoles : on a tout préparé pour que vous viviez l'édition 2026 dans les meilleures conditions."
              accent="green"
            />
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            <Reveal delay={0}><InfoPhotoCard href="/infos-pratiques" title="Coureurs" color="#ec6436" photo="/figma/photo-info-1.jpg" /></Reveal>
            <Reveal delay={80}><InfoPhotoCard href="/entreprises" title="Entreprise" color="#00a184" photo="/figma/photo-info-2.jpg" /></Reveal>
            <Reveal delay={160}><InfoPhotoCard href={VOLUNTEER_URL} title="Bénévoles" color="#7d7ebc" photo="/figma/photo-info-3.jpg" /></Reveal>
          </div>
        </div>
      </section>

      {/* VILLAGE DEPART */}
      <section className="relative overflow-hidden">
        <FinishStripe height={6} />
        <div className="relative h-[460px] md:h-[560px]">
          <Image src="/figma/photo-village.jpg" alt="" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/20" />
          <div className="absolute inset-0 mx-auto max-w-[1400px] px-5 md:px-10 flex items-center">
            <div className="text-cream max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] font-bold mb-3 text-yellow">Village départ</p>
              <h2 className="font-display text-5xl md:text-7xl xl:text-8xl leading-[0.95] drop-shadow-md">
                Village<br />départ
              </h2>
              <p className="mt-6 text-base md:text-lg max-w-xl text-cream/90">
                Coureur ou accompagnant : venez profiter. Ouvert de 16h00 à 21h30. Espace lounge & DJs 80's, Latino &
                All Style, le tout en plein air sur la Plaine de Plainpalais.
              </p>
              <Link
                href="/evenement"
                className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs md:text-sm shadow-soft-lg hover:brightness-110 hover:-translate-y-0.5 transition"
              >
                Découvrez le programme 2026
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <FinishStripe height={6} />
      </section>

      {/* Animations / Repas reveal */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <VillageReveal
            items={[
              { title: "Animations", caption: "Ambiance", color: "#ec6436", photo: "/figma/photo-village-1.jpg",
                body: <>DJs 80's, Latino & All Style. Animations enfants, scène ouverte et show musical jusqu'à 21h30.</> },
              { title: "Repas", caption: "Saveurs locales", color: "#00a184", photo: "/figma/photo-village-2.jpg",
                body: <ul className="space-y-1.5"><li>• Assiette genevoise — terroir</li><li>• Salade fraîcheur</li><li>• Burger 100% suisse</li></ul> },
              { title: "DJ", caption: "On the decks", color: "#7d7ebc", photo: "/figma/photo-village-1.jpg",
                body: <>Trois sets — 80's revival, Latino party, All Style finale jusqu'au coucher du soleil.</> },
              { title: "Stands", caption: "Partenaires", color: "#febf2c", photo: "/figma/photo-village-2.jpg",
                body: <>Plus de 25 stands : équipementiers, marques locales, alimentation saine et associations partenaires.</> },
            ]}
          />
        </div>
      </section>

      <PartnersMarquee title="Partenaires village" variant="village" />

      {/* Reserve CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[40px] bg-ink text-cream p-10 md:p-16 shadow-soft-xl">
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-0" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden>
                <path d="M -20 350 C 200 200, 400 280, 620 180 S 1000 60, 1220 140" stroke="#ec6436" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="2 14" className="animate-route" opacity="0.35" />
                <path d="M -20 250 C 200 150, 400 320, 620 280 S 1000 200, 1220 280" stroke="#00a184" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="2 14" className="animate-route" opacity="0.25" style={{ animationDelay: "-0.8s" }} />
              </svg>
              <div className="relative grid md:grid-cols-12 items-center gap-8">
                <div className="md:col-span-8">
                  <p className="text-xs uppercase tracking-[0.22em] font-bold text-orange">Édition 2026 · J-99</p>
                  <h3 className="font-display text-4xl md:text-6xl xl:text-7xl mt-4 leading-[0.95]">
                    Je réserve <br />
                    <span className="text-orange">mon dossard</span>.
                  </h3>
                  <p className="mt-5 text-cream/75 max-w-xl text-base md:text-lg">
                    Genève vous attend pour une édition au plus près de ses sentiers cachés. Places limitées.
                  </p>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <Link
                    href={INSCRIPTION_URL}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange text-white text-base font-bold uppercase tracking-wider shadow-soft-lg hover:brightness-110 hover:-translate-y-0.5 transition"
                  >
                    Je réserve
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <p className="mt-4 text-xs text-cream/45 uppercase tracking-wider">Paiement sécurisé · TWINT · Carte</p>
                </div>
              </div>
              <Image
                src="/figma/gut-mascot.png"
                alt=""
                width={140}
                height={155}
                className="hidden md:block absolute -bottom-4 right-10 h-28 w-auto rotate-[14deg] opacity-90 animate-mascot"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <CountUp target={value} className="font-display text-4xl md:text-5xl xl:text-6xl leading-none" />
      <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-ink/65">{label}</p>
      <div className="h-1 w-12 rounded-full" style={{ background: color }} />
    </div>
  );
}


function CourseMap() {
  return (
    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-soft-xl bg-cream">
      <Image src="/figma/photo-engagement.jpg" alt="Carte du parcours" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 55vw" />
      <div className="absolute inset-0 bg-blue/40 mix-blend-multiply" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 450" aria-hidden>
        <defs>
          <pattern id="map-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-dots)" />

        <path d="M 60 380 C 140 280, 220 340, 280 240 S 360 120, 540 80" stroke="#ec6436" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 60 380 C 130 320, 200 320, 280 240 S 380 200, 460 200" stroke="#00a184" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 60 380 C 120 360, 180 340, 240 320 S 320 260, 380 280" stroke="#81d4da" strokeWidth="6" fill="none" strokeLinecap="round" />

        <g>
          <circle cx="60" cy="380" r="14" fill="#fff" stroke="#000" strokeWidth="3" />
          <circle cx="60" cy="380" r="6" fill="#ec6436" />
        </g>
        <g>
          <circle cx="540" cy="80" r="14" fill="#ec6436" stroke="#fff" strokeWidth="3" />
        </g>
        <g>
          <circle cx="460" cy="200" r="11" fill="#00a184" stroke="#fff" strokeWidth="3" />
        </g>
        <g>
          <circle cx="380" cy="280" r="11" fill="#81d4da" stroke="#fff" strokeWidth="3" />
        </g>
      </svg>

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 bg-white/95 rounded-2xl px-4 py-2.5 shadow-soft text-xs">
        <span className="inline-flex items-center gap-1.5 font-bold"><span className="h-2 w-2 rounded-full bg-orange" />16 KM</span>
        <span className="inline-flex items-center gap-1.5 font-bold"><span className="h-2 w-2 rounded-full bg-green" />9 KM</span>
        <span className="inline-flex items-center gap-1.5 font-bold"><span className="h-2 w-2 rounded-full bg-blue" />6 KM</span>
        <span className="ml-auto text-ink/55 uppercase tracking-wider text-[10px]">Vieille-Ville · Bastions · Treille</span>
      </div>
    </div>
  );
}

