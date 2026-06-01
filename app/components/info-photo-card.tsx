"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function InfoPhotoCard({
  href, title, color, photo,
}: {
  href: string; title: string; color: string; photo: string;
}) {
  return (
    <Link
      href={href}
      className="group relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-soft hover:shadow-soft-xl transition block"
    >
      <Image
        src={photo}
        alt=""
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width:768px) 90vw, 30vw"
      />
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ background: `linear-gradient(to bottom, ${color}33, ${color}aa)` }}
      />
      {/* Le titre est en Bungee, font très large : on tient compte de la largeur
          réelle de la carte (1/3 de la grille) en réduisant l'échelle desktop et
          en ajoutant un padding latéral généreux. `break-words` + `hyphens` en
          filet de sécurité si on injecte un mot très long. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 md:px-10 text-center">
        <p
          className="font-display text-4xl md:text-5xl xl:text-[56px] leading-[0.92] drop-shadow-md break-words hyphens-auto max-w-full"
          lang="fr"
        >
          {title}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-ink shadow-soft font-bold text-xs uppercase tracking-wider group-hover:bg-yellow transition">
          Découvrir
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
