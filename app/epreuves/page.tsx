import { Banner } from "../components/banner";
import { PartnersMarquee } from "../components/partners-marquee";
import { RaceSelector } from "./race-selector";
import { EpreuvesHeroVisual } from "../components/hero-visuals";
import { INSCRIPTION_URL } from "../../lib/utils";

export const metadata = { title: "Épreuves — Genève Urban Trail" };

export default function EpreuvesPage() {
  return (
    <>
      <Banner
        eyebrow="Sept formats — Édition 2026"
        title={<>Choisissez <span className="text-orange">votre épreuve</span>.</>}
        subtitle="Du 1 KM Parents/Enfants au 16 KM Trail. Cliquez sur une distance pour découvrir la fiche course complète : parcours, dénivelé, ravitaillements, matériel obligatoire."
        accent="orange"
        buttons={[
          { label: "Inscription", href: INSCRIPTION_URL, color: "orange" },
          { label: "Voir le programme", href: "/evenement", color: "blue" },
        ]}
        visual={<EpreuvesHeroVisual />}
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <RaceSelector />
        </div>
      </section>

      <PartnersMarquee title="Partenaires course" />
    </>
  );
}
