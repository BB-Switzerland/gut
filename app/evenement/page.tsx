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
        title={<>Genève et sa <span className="text-orange">Vieille-Ville</span><br /> hors des sentiers battus !</>}
        subtitle="Le programme complet de l'édition 2026 : retrait des dossards le vendredi, neuf épreuves le samedi, animations et restauration au GUT-Village."
        accent="green"
        buttons={[
          { label: "Découvrir les épreuves", href: "/epreuves", color: "orange" },
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

      {/* FANZONE — nouveauté 2026 */}
      <section className="py-16 md:py-20 bg-yellow/20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow text-ink text-[10px] uppercase tracking-[0.22em] font-bold shadow-soft-sm">
                  Nouveauté 2026
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink leading-[0.95]">
                  Fanzone du GUT : <span className="text-orange">viens donner de la voix !</span>
                </h2>
                <p className="mt-5 text-ink/75 text-base md:text-lg leading-relaxed">
                  Animations déjantées et lots à gagner au programme. Rendez-vous Place du Bourg-de-Four,
                  au passage des relayeurs.
                </p>
                <p className="mt-3 text-ink/60 text-sm font-semibold">
                  📍 Place du Bourg-de-Four · horaire à confirmer
                </p>
              </div>
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-soft-lg">
                <Image src="/figma/photo-runners-1.jpg" alt="" fill className="object-cover" sizes="(max-width:1024px) 90vw, 40vw" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animations — 4 keywords */}
      <section id="animations" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionHeader
              eyebrow="Village départ — Animations"
              title={<>Le cœur battant <span className="text-orange">de la GUT</span>.</>}
              description="Ouvert de 16h00 à 21h30 sur l'esplanade du Bois-de-La-Bâtie. Espace lounge, DJs sets Latino & All Style, le tout en plein air."
            />
          </Reveal>

          <div className="mt-12">
            <VillageReveal
              items={[
                { title: "Espace lounge", caption: "Ambiance", color: "#ec6436", photo: "/figma/photo-village-1.jpg",
                  body: <>Zone détente plein air, transats et coin tranquille pour récupérer.</> },
                { title: "DJs", caption: "On the decks", color: "#7d7ebc", photo: "/figma/photo-village-2.jpg",
                  body: <>Latino & All Style en plein air jusqu'à 21h30.</> },
                { title: "Stands partenaires", caption: "Découverte", color: "#00a184", photo: "/figma/photo-village-1.jpg",
                  body: <>Équipementiers, marques locales, associations engagées.</> },
                { title: "Photobooth", caption: "Souvenir", color: "#febf2c", photo: "/figma/photo-village-2.jpg",
                  body: <>Repartez avec votre photo finisher imprimée.</> },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Repas — 2 reveal */}
      <section id="repas" className="py-16 md:py-20 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-6 items-end mb-10">
            <div className="lg:col-span-8">
              <Reveal>
                <SectionHeader
                  eyebrow="Village départ — Repas"
                  title={<>Saveurs <span className="text-orange">100% genevoises</span>.</>}
                  description="Produits du terroir issus du canton, partenaire producteur Jussy. Survolez pour voir le menu."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="mailto:inscription@runningeneva.ch" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs md:text-sm shadow-soft hover:shadow-soft-lg transition">
                Je réserve
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <VillageReveal
            items={[
              { title: "Assiette Genevoise", caption: "Plat signature", color: "#ec6436", photo: "/figma/photo-village-2.jpg",
                body: (
                  <div className="space-y-2 text-sm">
                    <p>½ saucisse de veau grillée Origine Suisse</p>
                    <p>¼ de poulet rôti IPS</p>
                    <p>150 g pommes de terre rissolées (GRTA) — Jussy</p>
                    <p className="pt-2 font-bold">CHF 19.50 participants · CHF 23.– accompagnants</p>
                  </div>
                ) },
              { title: "Salade fraîcheur", caption: "Option légère", color: "#00a184", photo: "/figma/photo-village-1.jpg",
                body: (
                  <div className="space-y-2 text-sm">
                    <p>Roquette, salade, fromage italien, tomates</p>
                    <p className="pt-2 font-bold">CHF 12.– participants · CHF 15.– accompagnants</p>
                  </div>
                ) },
            ]}
          />
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
              { title: "Valorisation du canton de Genève par le sport", body: "Re-découvrir Genève, de son patrimoine à sa nature préservée.", color: "#ec6436", photo: "/figma/photo-engagement.jpg" },
              { title: "Au cœur de l'économie locale", body: "Contribuer au dynamisme du tissu économique local avec notre réseau de partenaires.", color: "#febf2c", photo: "/figma/photo-info-2.jpg" },
              { title: "Vecteur de bien-être et de cohésion sociale", body: "Encourager à se mettre en mouvement pour allier santé, bien-être et cohésion sociale.", color: "#81d4da", photo: "/figma/photo-runners-1.jpg" },
              { title: "Promoteur d'activités responsables", body: "S'engager en matière d'éco-responsabilité pour réduire notre impact environnemental.", color: "#00a184", photo: "/figma/photo-info-3.jpg" },
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
  { hour: "VEN 12h–18h", type: "Village", label: "Retrait des dossards", body: "Chez notre partenaire Emil Frey Genève Acacias — route des Acacias 23 (GE). Créneaux 12h–14h puis 16h–18h.", color: "#febf2c", photo: "/figma/photo-village-1.jpg", tags: ["Dossards", "Vendredi"] },
  { hour: "15h00", type: "Village", label: "Ouverture GUT-Village", body: "Esplanade du Bois-de-La-Bâtie, qui surplombe Genève au-dessus de la rue des Péniches (1213 Petit-Lancy). Retrait des dossards jusqu'à 18h00.", color: "#febf2c", photo: "/figma/photo-village.jpg", tags: ["Village", "Dossards"] },
  { hour: "16h00", type: "Course", label: "Départ 3 KM GUT Plogging Challenge", body: "Course éco-responsable de ramassage de mégots. Format Challenge Entreprise. Départ Bois-de-La-Bâtie.", color: "#00a184", photo: "/figma/photo-info-3.jpg", tags: ["Éco-responsable", "Entreprises"] },
  { hour: "17h00", type: "Course", label: "Départ 1 KM Enfants & Parents-Enfants", body: "Enfants 4-9 ans + Parent-Enfant 4-7 ans. Boucle ombragée au Bois-de-La-Bâtie. Médaille pour tous.", color: "#ec6436", photo: "/figma/photo-race-3.jpg", tags: ["Famille", "Enfants"] },
  { hour: "17h20", type: "Cérémonie", label: "Remise prix GUT Plogging Challenge + 1 KM", body: "Podium des 3 équipes ayant ramassé le plus de mégots + podiums 1 KM par catégories d'âge.", color: "#7d7ebc", photo: "/figma/photo-runners-1.jpg", tags: ["Podium"] },
  { hour: "18h25", type: "Course", label: "Départ 9 KM Trail Running", body: "Dès 16 ans. Boucle Bois-de-La-Bâtie ↔ Vieille-Ville, le long du Rhône.", color: "#00a184", photo: "/figma/photo-race-2.jpg", tags: ["Running"] },
  { hour: "18h30", type: "Course", label: "Départ 6 KM Running & Walking", body: "Trail-running dès 10 ans, Trail-walking dès 16 ans. Départ Bibliothèque de la Cité, Place des Trois-Perdrix.", color: "#81d4da", photo: "/figma/photo-race-3.jpg", tags: ["Running", "Walking"] },
  { hour: "18h35", type: "Course", label: "Départ 16 KM Trail Running + 4,6 KM PMR + 16 KM Relais", body: "16 KM dès 18 ans (Bois-de-La-Bâtie). 4,6 KM Parcours adapté PMR depuis la Place de l'Île. 16 KM Relais à 2 (passage Place du Bourg-de-Four), format Challenge Entreprise.", color: "#ec6436", photo: "/figma/photo-race-1.jpg", tags: ["Running", "Trail", "Relais", "PMR"] },
  { hour: "20h15", type: "Course", label: "Barrière horaire — rue Bémont", body: "2ᵉ passage rue Bémont, au pied de la Vieille-Ville, à 11,5 km.", color: "#febf2c", photo: "/figma/photo-engagement.jpg", tags: ["Barrière"] },
  { hour: "21h00", type: "Course", label: "Barrière horaire — Bois-de-La-Bâtie", body: "Arrivée finale au Village départ.", color: "#febf2c", photo: "/figma/photo-engagement.jpg", tags: ["Arrivée"] },
  { hour: "21h30", type: "Village", label: "Fin du Village & DJ set", body: "Latino & All Style. Fermeture en beauté du GUT-Village.", color: "#ec6436", photo: "/figma/photo-village-2.jpg", tags: ["DJ", "Festif"] },
];
