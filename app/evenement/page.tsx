import Link from "next/link";
import Image from "next/image";
import { Banner } from "../components/banner";
import { SectionHeader } from "../components/section-header";
import { PartnersMarquee } from "../components/partners-marquee";
import { VillageReveal } from "../components/village-reveal";
import { AdvantagesSlider } from "../components/advantages-slider";
import { Reveal } from "../components/reveal";
import { TopoBackground, FinishStripe } from "../components/course-route";
import { ProgramTimelineCurved, type ProgramItem } from "../components/program-timeline-curved";
import { EvenementHeroVisual } from "../components/hero-visuals";
import { ArrowRight, Music2, Utensils, Recycle, HandHeart, Camera, ClipboardList, Backpack, MapPin } from "lucide-react";
import { INSCRIPTION_URL } from "../../lib/utils";

export const metadata = { title: "Événement — Genève Urban Trail" };

export default function EvenementPage() {
  return (
    <>
      <Banner
        eyebrow="Samedi 05 septembre 2026"
        title={<>Un événement <span className="text-orange">team-building</span><br /> hors des sentiers battus</>}
        subtitle="Plus qu'une course : une expérience humaine, sportive et festive, au cœur de Genève. Le programme 2026 vous attend."
        accent="green"
        buttons={[
          { label: "Programme 2026", href: INSCRIPTION_URL, color: "orange" },
          { label: "Inscription", href: INSCRIPTION_URL, color: "green" },
        ]}
        visual={<EvenementHeroVisual />}
      />

      {/* Programme — timeline avec photos */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <TopoBackground className="text-orange" opacity={0.06} />
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 relative">
          <Reveal>
            <SectionHeader
              eyebrow="Programme 2026"
              title={<>De 16h à minuit, <span className="text-orange">sans temps mort</span>.</>}
              description="9 moments-clés, du retrait des dossards au DJ final. La GUT n'est pas qu'une course : c'est une journée complète, ouverte à toutes et tous."
            />
          </Reveal>

          <div className="mt-14">
            <ProgramTimelineCurved items={PROGRAM} />
          </div>
        </div>
      </section>

      {/* Village départ banner */}
      <section className="relative overflow-hidden">
        <FinishStripe height={6} />
        <div className="relative h-[460px] md:h-[540px]">
          <Image src="/figma/photo-village.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/15" />
          <div className="absolute inset-0 mx-auto max-w-[1400px] px-5 md:px-10 flex items-center">
            <div className="text-cream max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] font-bold mb-3 text-yellow">Infos fanzone</p>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] drop-shadow-md">
                Village départ
              </h2>
              <p className="mt-6 text-base md:text-lg max-w-xl text-cream/90">
                Coureur ou accompagnant, vous venez profiter. Ouvert de 16h00 à 21h30. Espace lounge & DJs 80's,
                Latino & All Style, le tout en plein air sur la Plaine de Plainpalais.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#animations" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-white shadow-soft-lg font-bold uppercase tracking-wider text-xs md:text-sm">
                  Animations <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#repas" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink shadow-soft font-bold uppercase tracking-wider text-xs md:text-sm">
                  Repas <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FinishStripe height={6} />
      </section>

      <section id="animations" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionHeader
              eyebrow="Au programme"
              title={<>Le cœur battant <span className="text-orange">de la GUT</span>.</>}
              description="Ouvert de 16h00 à 21h30. Espace lounge, DJ 80's, Latino & All Style, le tout en plein air, au cœur de la Vieille-Ville."
            />
          </Reveal>

          <div className="mt-12">
            <VillageReveal
              items={[
                { title: "Animations", caption: "Ambiance", color: "#ec6436", photo: "/figma/photo-village-1.jpg",
                  body: <>DJs 80's, Latino & All Style. Animations enfants, scène ouverte et performances live.</> },
                { title: "Repas", caption: "Saveurs locales", color: "#00a184", photo: "/figma/photo-village-2.jpg",
                  body: <ul className="space-y-1.5"><li>• Assiette genevoise — terroir</li><li>• Salade fraîcheur</li><li>• Bowl bio végétarien</li></ul> },
                { title: "DJ", caption: "On the decks", color: "#7d7ebc", photo: "/figma/photo-village-1.jpg",
                  body: <>Trois sets — 80's revival, Latino party, All Style finale jusqu'au coucher du soleil.</> },
                { title: "Stands", caption: "Partenaires", color: "#febf2c", photo: "/figma/photo-village-2.jpg",
                  body: <>Plus de 25 stands : équipementiers, marques locales, alimentation saine et associations.</> },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-blue/25 relative overflow-hidden">
        <TopoBackground className="text-ink" opacity={0.06} />
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 relative">
          <Reveal>
            <SectionHeader
              eyebrow="Pourquoi venir"
              title={<>Tout ce que la GUT <span className="text-orange">vous offre</span>.</>}
              description="Au-delà du dossard, une expérience complète et soignée — du retrait jusqu'à la photo finish."
              accent="blue"
            />
          </Reveal>

          <AdvantagesSlider
            items={[
              { title: "Ravitaillements", description: "Trois points par parcours, produits locaux et hydratation premium.", color: "#ec6436", icon: <Utensils className="h-6 w-6" /> },
              { title: "Signalétique parcours", description: "Balisage rétroréfléchissant, bénévoles à chaque intersection clé.", color: "#81d4da", icon: <MapPin className="h-6 w-6" /> },
              { title: "Zone récupération", description: "Étirements guidés, kinés partenaires, jus naturels à l'arrivée.", color: "#00a184", icon: <HandHeart className="h-6 w-6" /> },
              { title: "Ambiance conviviale", description: "DJ, stands, terrasse panoramique : on reste après la ligne.", color: "#7d7ebc", icon: <Music2 className="h-6 w-6" /> },
              { title: "Engagement éco-responsable", description: "Sans gobelets jetables, ravitaillements vrac, T-shirts recyclés.", color: "#00a184", icon: <Recycle className="h-6 w-6" /> },
              { title: "Photos officielles", description: "Photographe partenaire sur les 3 parcours — téléchargement gratuit.", color: "#febf2c", icon: <Camera className="h-6 w-6" /> },
              { title: "Dépôt sac coureurs", description: "Consigne gratuite et sécurisée sur le village départ.", color: "#7d7ebc", icon: <Backpack className="h-6 w-6" /> },
              { title: "Charte du participant", description: "Un cadre clair pour une expérience respectueuse et fair-play.", color: "#ec6436", icon: <ClipboardList className="h-6 w-6" /> },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionHeader
              eyebrow="Nos engagements"
              title={<>Une course <span className="text-orange">qui a du sens</span>.</>}
              description="La GUT est portée par une mission : faire rayonner Genève, fédérer ses habitants et défendre une vision sportive éco-responsable."
              accent="green"
            />
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-stretch">
            {[
              { title: "Valorisation du canton", body: "Mettre Genève et sa Vieille-Ville à l'honneur par le sport.", color: "#ec6436", photo: "/figma/photo-engagement.jpg" },
              { title: "Économie locale", body: "Nos prestataires, nos partenaires, nos repas : 90% Made in Genève.", color: "#febf2c", photo: "/figma/photo-info-2.jpg" },
              { title: "Bien-être & cohésion", body: "Vecteur de santé et de lien social pour 3'500 participants.", color: "#81d4da", photo: "/figma/photo-runners-1.jpg" },
              { title: "Éco-responsable", body: "Plogging, ravitaillements vrac, mobilité douce : nos basiques.", color: "#00a184", photo: "/figma/photo-info-3.jpg" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 60} className="h-full">
                <article className="h-full flex flex-col rounded-3xl bg-white shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                    <Image src={c.photo} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width:1024px) 50vw, 25vw" />
                    <div className="absolute inset-0" style={{ background: `${c.color}55` }} />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="h-3 w-12 rounded-full mb-4 shrink-0" style={{ background: c.color }} />
                    <h3 className="font-display text-xl text-ink leading-tight min-h-[3rem]">{c.title}</h3>
                    <p className="mt-3 text-sm text-ink/70 leading-relaxed">{c.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PartnersMarquee title="Partenaires événement" />
    </>
  );
}

const PROGRAM: ProgramItem[] = [
  { hour: "16:00", type: "Village", label: "Ouverture village départ", body: "Retrait des dossards, boutique officielle, espace lounge. La place du Bourg-de-Four s'installe.", color: "#febf2c", photo: "/figma/photo-village-1.jpg", tags: ["Boutique", "Dossards"] },
  { hour: "17:00", type: "Course", label: "1 KM Parents / Enfants", body: "Une boucle festive main dans la main avec un parent, dans le parc des Bastions.", color: "#ec6436", photo: "/figma/photo-race-3.jpg", tags: ["Famille", "Walking"] },
  { hour: "17:15", type: "Course", label: "1 KM Mini-Trail Kids", body: "Premier vrai dossard solo pour les 6-9 ans, encadrement renforcé.", color: "#febf2c", photo: "/figma/photo-info-3.jpg", tags: ["Enfants", "Running"] },
  { hour: "17:30", type: "Course", label: "3 KM Mini-Trail Junior", body: "Premier vrai défi nature pour les 9-13 ans. Médaille pour tous.", color: "#febf2c", photo: "/figma/photo-race-1.jpg", tags: ["Enfants", "Running"] },
  { hour: "18:00", type: "Course", label: "16 KM — Grand Trail & Relais", body: "Le grand format. Vieille-Ville, Treille, sentiers cachés des Bastions.", color: "#ec6436", photo: "/figma/photo-race-1.jpg", tags: ["Running", "Trail", "Relais"] },
  { hour: "18:30", type: "Course", label: "9 KM — L'Urbain", body: "Format découverte. Rythme soutenu, ruelles pavées, parcs et bord du Rhône.", color: "#00a184", photo: "/figma/photo-race-2.jpg", tags: ["Running"] },
  { hour: "19:00", type: "Course", label: "6 KM — La Découverte", body: "Walking & running. À votre rythme, en famille ou entre collègues.", color: "#81d4da", photo: "/figma/photo-race-3.jpg", tags: ["Walking", "Running"] },
  { hour: "20:00", type: "Cérémonie", label: "Cérémonie podium", body: "Trois podiums — Solo, Relais, Entreprises. Trophée éco-responsable.", color: "#7d7ebc", photo: "/figma/photo-runners-1.jpg", tags: ["Trophée"] },
  { hour: "21:30", type: "Village", label: "DJ set & bouquet final", body: "80's, Latino & All Style. Le coucher de soleil sur la Treille en fond.", color: "#ec6436", photo: "/figma/photo-village-2.jpg", tags: ["DJ", "Festif"] },
];
