import Link from "next/link";
import Image from "next/image";
import { Banner } from "../components/banner";
import { PartnersMarquee } from "../components/partners-marquee";
import { SectionHeader } from "../components/section-header";
import { VillageReveal } from "../components/village-reveal";
import { EntreprisesHeroVisual } from "../components/hero-visuals";
import { ArrowRight, Award, Crown, ExternalLink, Leaf, Recycle, Trees, Utensils } from "lucide-react";
import { INSCRIPTION_URL } from "../../lib/utils";

export const metadata = { title: "Entreprises — Genève Urban Trail" };

export default function EntreprisesPage() {
  return (
    <>
      <Banner
        eyebrow="Édition entreprises 2026"
        title={<>Le team-building <span className="text-orange">grandeur nature</span></>}
        subtitle="Relais entreprise, challenge collectif, espace VIP et plogging : 4 façons de fédérer vos équipes autour d'un événement local et engagé."
        accent="green"
        buttons={[
          { label: "Programme 2026", href: "/evenement", color: "orange" },
          { label: "Plaquette PDF", href: "#plaquette", color: "green" },
        ]}
        visual={<EntreprisesHeroVisual />}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Vos formats"
            title={<>Le <span className="text-orange">Relais 16 KM</span>, signature de la GUT entreprises.</>}
            description="Deux runners, un seul dossard partagé. Le format star de la GUT pour les équipes : tactique, fédérateur, festif."
            accent="purple"
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            <CompanyRace
              tags={["Relais", "Entreprises"]}
              title="Relais 16 KM"
              description="Équipes de 2. Passage de relais au cœur du parc des Bastions, classement Entreprises séparé."
              color="#7d7ebc"
              photo="/figma/photo-runners-1.jpg"
              ctaHref={INSCRIPTION_URL}
            />
            <CompanyRace
              tags={["Running", "Éco-responsable"]}
              title="Plogging Challenge"
              description="Courez en ramassant les déchets : un format unique mêlant performance et engagement."
              color="#00a184"
              photo="/figma/photo-info-3.jpg"
              ctaHref={INSCRIPTION_URL}
            />
            <CompanyRace
              tags={["Team-building"]}
              title="Pack Team-Building"
              description="9 KM + soirée privée + espace VIP. La formule complète pour vos équipes."
              color="#ec6436"
              photo="/figma/photo-info-2.jpg"
              ctaHref={INSCRIPTION_URL}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-blue/30">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Challenge Entreprise"
                title={<>Faites jouer <span className="text-orange">vos équipes</span>.</>}
                description="Le Challenge Entreprise classe les sociétés selon le cumul des temps de leurs équipes. À la clé : un trophée et un an de visibilité chez nos partenaires."
                accent="blue"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={INSCRIPTION_URL} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
                  Inscrire mon entreprise <ArrowRight className="h-4 w-4" />
                </Link>
                <a id="plaquette" href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink font-bold uppercase tracking-wider text-xs shadow-soft hover:shadow-soft-lg transition">
                  Plaquette PDF <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 items-stretch">
              {[
                { title: "Espace VIP", body: "Terrasse privative, vestiaire dédié, vue village.", color: "#febf2c", icon: <Crown className="h-5 w-5" /> },
                { title: "Repas dînatoire", body: "Buffet du terroir, vins genevois, dessert signature.", color: "#ec6436", icon: <Utensils className="h-5 w-5" /> },
                { title: "Trophée Entreprise", body: "Classement officiel + visibilité chez nos partenaires.", color: "#00a184", icon: <Award className="h-5 w-5" /> },
                { title: "Plogging Challenge", body: "Bonus pour les déchets ramassés en course.", color: "#7d7ebc", icon: <Recycle className="h-5 w-5" /> },
              ].map((c) => (
                <div key={c.title} className="h-full flex flex-col rounded-3xl bg-white p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition">
                  <div className="inline-grid place-items-center h-12 w-12 rounded-2xl text-white shadow-soft-sm shrink-0" style={{ background: c.color }}>
                    {c.icon}
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Jour J"
            title={<>Une ambiance <span className="text-orange">conviviale</span>.</>}
            description="Animations, repas et engagement éco-responsable : la GUT entreprise, c'est une journée complète, soignée, fédératrice."
          />

          <div className="mt-12">
            <VillageReveal
              items={[
                { title: "Animations", caption: "Ambiance", color: "#ec6436", photo: "/figma/photo-village-1.jpg",
                  body: <>DJ sets, scène ouverte, photographe officiel pour votre équipe. Souvenir garanti.</> },
                { title: "Repas", caption: "Saveurs locales", color: "#00a184", photo: "/figma/photo-village-2.jpg",
                  body: <ul className="space-y-1.5"><li>• Assiette genevoise terroir</li><li>• Salade fraîcheur 100% local</li><li>• Buffet desserts maison</li></ul> },
                { title: "Convivialité", caption: "Esprit d'équipe", color: "#7d7ebc", photo: "/figma/photo-info-2.jpg",
                  body: <>Espace lounge privatif, photographe team-building, animation interactive.</> },
                { title: "Éco-responsable", caption: "Engagement", color: "#81d4da", photo: "/figma/photo-info-3.jpg",
                  body: <>Zéro plastique jetable, ravitaillement vrac, T-shirts en coton bio recyclé.</> },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-orange/15" id="tarifs">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Tarifs entreprises"
            title={<>Des packs <span className="text-orange">clairs</span>, des avantages cumulatifs.</>}
            description="Dégressif sur le nombre d'équipes engagées. Sur-mesure possible au-delà de 10 équipes."
          />

          <div className="mt-12 overflow-hidden rounded-3xl shadow-soft-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-ink text-cream">
                <tr>
                  <th className="text-left px-5 py-4 font-bold uppercase tracking-wider text-xs">Formule</th>
                  <th className="text-left px-5 py-4 font-bold uppercase tracking-wider text-xs">Inclus</th>
                  <th className="text-left px-5 py-4 font-bold uppercase tracking-wider text-xs">Prix / équipe</th>
                  <th className="text-left px-5 py-4 font-bold uppercase tracking-wider text-xs">Dès 5 équipes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {[
                  ["Relais 16 KM", "2 dossards · repas · t-shirts", "CHF 220", "CHF 190"],
                  ["Pack Team-Building", "Relais + VIP + soirée privée", "CHF 480", "CHF 420"],
                  ["Pack Plogging", "2 dossards éco · gants & sacs", "CHF 240", "CHF 210"],
                  ["Pack Premium", "Tout inclus + branding stand", "CHF 980", "Sur devis"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((c, j) => (
                      <td key={j} className={`px-5 py-4 ${j === 0 ? "font-display text-base text-ink" : ""}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={INSCRIPTION_URL} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-bold uppercase tracking-wider text-xs shadow-soft hover:brightness-110 transition">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink font-bold uppercase tracking-wider text-xs shadow-soft">
              Échanger avec notre équipe
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Prix souvenir", body: "Tirage au sort parmi toutes les équipes inscrites — séjour bien-être.", color: "#81d4da", icon: <Trees className="h-6 w-6" /> },
              { title: "Prix podium", body: "Trophée officiel + bons d'achat chez nos partenaires Sport.", color: "#febf2c", icon: <Award className="h-6 w-6" /> },
              { title: "Prix éco", body: "Pour l'équipe qui a ramassé le plus de déchets en Plogging.", color: "#00a184", icon: <Leaf className="h-6 w-6" /> },
            ].map((p) => (
              <article key={p.title} className="rounded-3xl bg-white p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition">
                <div className="inline-grid place-items-center h-14 w-14 rounded-2xl text-white shadow-soft-sm" style={{ background: p.color }}>
                  {p.icon}
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnersMarquee title="Partenaires entreprises" variant="village" />
    </>
  );
}

function CompanyRace({
  tags, title, description, color, photo, ctaHref,
}: { tags: string[]; title: string; description: string; color: string; photo: string; ctaHref: string }) {
  return (
    <article className="rounded-[32px] bg-white shadow-soft hover:shadow-soft-xl hover:-translate-y-1 overflow-hidden transition">
      <div className="relative aspect-[5/3] overflow-hidden">
        <Image src={photo} alt="" fill className="object-cover" sizes="(max-width:1024px) 80vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-green text-white text-[10px] font-bold uppercase tracking-wider shadow-soft-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-display text-3xl md:text-4xl leading-[0.95] drop-shadow-md">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-ink/70 leading-relaxed">{description}</p>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <Link href="/epreuves" className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-cream text-ink hover:bg-ink hover:text-cream font-bold uppercase tracking-wider text-xs transition">
            Infos
          </Link>
          <Link href={ctaHref} className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-white font-bold uppercase tracking-wider text-xs shadow-soft-sm hover:brightness-110 transition" style={{ background: color }}>
            Inscription
          </Link>
        </div>
      </div>
    </article>
  );
}
