import Link from "next/link";
import Image from "next/image";
import { Banner } from "../components/banner";
import { PartnersMarquee } from "../components/partners-marquee";
import { SectionHeader } from "../components/section-header";
import { EntreprisesHeroVisual } from "../components/hero-visuals";
import { ArrowRight, Crown, Recycle, Trophy, Users } from "lucide-react";
import { INSCRIPTION_URL } from "../../lib/utils";

const REGISTRATION_EMAIL = "inscription@runningeneva.ch";

export const metadata = { title: "Entreprises — Genève Urban Trail" };

export default function EntreprisesPage() {
  return (
    <>
      <Banner
        eyebrow="Samedi 05 septembre 2026"
        title={<>Genève et sa <span className="text-orange">Vieille-Ville</span><br /> hors des sentiers battus !</>}
        subtitle="Deux formats taillés pour vos équipes : le Relais 16 KM Entreprises et le GUT Plogging Challenge."
        accent="green"
        buttons={[
          { label: "Programme 2026", href: "/evenement", color: "orange" },
        ]}
        visual={<EntreprisesHeroVisual />}
      />

      {/* SECTION 16 KM Relais Entreprises */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-soft-lg">
              <Image src="/figma/photo-runners-1.jpg" alt="" fill className="object-cover" sizes="(max-width:1024px) 90vw, 45vw" />
            </div>

            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-purple mb-3">Format signature</p>
              <h2 className="font-display text-3xl md:text-5xl text-ink leading-[0.95]">
                16 KM <span className="text-orange">Relais Entreprises</span>
              </h2>

              <div className="mt-6 space-y-4 text-ink/80 leading-relaxed">
                <p>
                  Renforcez la cohésion de vos équipes à travers le Challenge inter-entreprises, une expérience
                  sportive et conviviale de 16 km, tout en (re)découvrant Genève entre nature, patrimoine et
                  passages méconnus.
                </p>
                <p>
                  Par équipe de 2, ce relais permet de vivre un parcours trail accessible mais exigeant, idéal
                  pour porter les couleurs de votre entreprise.
                </p>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-cream p-5">
                  <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-yellow text-ink mb-3">
                    <Crown className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base text-ink">Espace VIP</h3>
                  <p className="mt-1 text-xs text-ink/70 leading-relaxed">Chaque participant bénéficiera d'une collation à l'espace VIP.</p>
                </div>
                <div className="rounded-2xl bg-cream p-5">
                  <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-purple text-white mb-3">
                    <Trophy className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base text-ink">Challenge entreprises</h3>
                  <p className="mt-1 text-xs text-ink/70 leading-relaxed">Classement dédié : récompenses pour les 3 meilleures équipes (hommes, femmes, mixtes).</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href={`mailto:${REGISTRATION_EMAIL}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
                  Inscrire mon équipe <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/epreuves" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink shadow-soft font-bold uppercase tracking-wider text-xs">
                  Détail de l'épreuve
                </Link>
              </div>
            </div>
          </div>

          {/* SLIDER 16 KM — 4 keywords */}
          <KeywordSlider
            title="Pourquoi le 16 KM Relais ?"
            items={[
              { label: "Teambuilding", color: "#ec6436" },
              { label: "Challenge sportif", color: "#00a184" },
              { label: "Animations Village Départ", color: "#febf2c" },
              { label: "Networking Espace VIP", color: "#7d7ebc" },
            ]}
          />
        </div>
      </section>

      {/* SECTION GUT Plogging Challenge */}
      <section className="py-20 md:py-28 bg-green/15">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-green mb-3">Course éco-responsable</p>
              <h2 className="font-display text-3xl md:text-5xl text-ink leading-[0.95]">
                GUT <span className="text-green">Plogging Challenge</span>
              </h2>

              <div className="mt-6 space-y-4 text-ink/80 leading-relaxed">
                <p>
                  Prends le départ de l'unique course éco-responsable de ramassage de mégots au cœur de la ville
                  de Genève, au sein du village du Geneva Urban Trail.
                </p>
                <p>
                  Entre collègues, vis une expérience engagée et conviviale en contribuant concrètement à
                  préserver notre ville… et relève le défi du challenge Entreprises en ramassant un maximum de
                  mégots pour monter sur le podium !
                </p>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5 shadow-soft-sm">
                  <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-yellow text-ink mb-3">
                    <Users className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base text-ink">Espace VIP</h3>
                  <p className="mt-1 text-xs text-ink/70 leading-relaxed">
                    À partir de 17h30 : moment d'échange et de networking inter-entreprises autour d'une collation.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-soft-sm">
                  <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-green text-white mb-3">
                    <Recycle className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base text-ink">Challenge inter-entreprises</h3>
                  <p className="mt-1 text-xs text-ink/70 leading-relaxed">
                    Remise de prix podium pour les 3 équipes ayant ramassé la plus grande quantité de mégots.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href={`mailto:${REGISTRATION_EMAIL}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-green text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
                  Inscrire mes collaborateurs <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/epreuves" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink shadow-soft font-bold uppercase tracking-wider text-xs">
                  Plus d'informations
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-soft-lg">
              <Image src="/figma/photo-info-3.jpg" alt="" fill className="object-cover" sizes="(max-width:1024px) 90vw, 45vw" />
            </div>
          </div>

          {/* SLIDER GUT PLOGGING — 4 keywords */}
          <KeywordSlider
            title="Pourquoi le Plogging Challenge ?"
            items={[
              { label: "Geste éco-responsable", color: "#00a184" },
              { label: "Engagement citoyen", color: "#ec6436" },
              { label: "Préservation du territoire", color: "#81d4da" },
              { label: "Networking Espace VIP", color: "#7d7ebc" },
            ]}
          />
        </div>
      </section>

      <PartnersMarquee title="Partenaires entreprises" variant="village" />
    </>
  );
}

function KeywordSlider({ title, items }: { title: string; items: { label: string; color: string }[] }) {
  return (
    <div className="mt-14">
      <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-ink/60 mb-5">{title}</p>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-5 px-5 md:-mx-10 md:px-10">
        {items.map((it) => (
          <div
            key={it.label}
            className="snap-start shrink-0 w-[240px] md:w-[280px] aspect-[5/4] rounded-[28px] p-6 flex items-end shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition text-white"
            style={{ background: it.color }}
          >
            <p className="font-display text-2xl md:text-3xl leading-[0.95]">{it.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
