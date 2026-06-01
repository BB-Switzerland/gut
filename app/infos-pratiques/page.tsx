import { Banner } from "../components/banner";
import { PartnersMarquee } from "../components/partners-marquee";
import { InfosTree } from "./infos-tree";
import { InfosHeroVisual } from "../components/hero-visuals";
import { INSCRIPTION_URL } from "../../lib/utils";

export const metadata = { title: "Infos pratiques — Genève Urban Trail" };

export default function InfosPage() {
  return (
    <>
      <Banner
        eyebrow="Mode d'emploi · Édition 2026"
        title={<>Toutes les <span className="text-orange">infos pratiques</span>.</>}
        subtitle="Inscription, charte, retrait des dossards, ravitaillements, résultats : tout est ici. Sélectionnez une rubrique dans le sommaire pour afficher le détail."
        accent="blue"
        buttons={[
          { label: "Choisissez votre épreuve", href: "/epreuves", color: "orange" },
          { label: "S'inscrire", href: INSCRIPTION_URL, color: "green" },
        ]}
        visual={<InfosHeroVisual />}
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <InfosTree />
        </div>
      </section>

      <PartnersMarquee title="Partenaires" />
    </>
  );
}
