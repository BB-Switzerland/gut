"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { INSCRIPTION_URL } from "../../lib/utils";

/**
 * Pill orange flottant centré, fixé en bas. Au scroll :
 * - apparition : grandit depuis un petit point central jusqu'à sa taille pleine
 * - disparition : se rétracte au centre + descend légèrement
 *
 * Implémentation : `max-width` animé sur l'enveloppe `overflow-hidden`,
 * tandis que le contenu reste positionné en absolu, centré, à sa largeur
 * naturelle — il ne se compresse jamais, on en révèle simplement plus ou
 * moins selon la largeur visible.
 */
export function FloatingBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > 280 && y < h - 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-3 md:bottom-6 z-40 px-3 md:px-6 pointer-events-none"
      role="region"
      aria-label="Partager et s'inscrire"
    >
      <div
        className={[
          "relative mx-auto h-14 md:h-16 rounded-full bg-orange overflow-hidden will-change-[max-width,opacity,transform]",
          "transition-[max-width,opacity,transform,box-shadow]",
          "duration-[600ms]",
          visible
            ? "max-w-[1100px] opacity-100 translate-y-0 pointer-events-auto shadow-soft-xl"
            : "max-w-[40px] opacity-0 translate-y-3 pointer-events-none shadow-none",
        ].join(" ")}
        style={{
          width: "100%",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Contenu à largeur fixe, centré en absolu.
            Il NE doit PAS suivre la largeur animée du pill — sinon la flex
            se recompose à chaque frame (gap, ml-auto, justify-between) et
            les éléments ont l'air de se rapprocher / se casser pendant la
            fermeture. On le pin à `min(1100px, viewport - 24px)` et le pill
            ne fait que le clipper progressivement depuis les bords. */}
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-between gap-4 md:gap-6 px-4 md:px-7"
          style={{ width: "min(1100px, calc(100vw - 24px))" }}
        >
          <div className="flex items-center gap-4 md:gap-7 shrink-0">
            <span className="hidden sm:block text-white font-semibold text-sm md:text-base whitespace-nowrap">
              Partagez l'aventure GUT
            </span>
            {/* Brand marks — toutes en blanc plein, alignées sur la même
                hauteur optique. Les 3 SVG sont calibrés sur viewBox 24×24
                avec le glyphe occupant ~18×18 (mêmes bounds que Strava).
                Chaque lien utilise un conteneur h-5 md:h-6 pour s'assurer
                que l'enveloppe d'alignement est identique. */}
            <div className="flex items-center gap-4 text-white shrink-0">
              <a href="https://strava.com" aria-label="Strava" className="inline-flex items-center h-5 md:h-6 hover:opacity-80 transition">
                <Image src="/figma/strava.png" alt="Strava" width={80} height={26} className="h-full w-auto" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="inline-flex items-center h-5 md:h-6 hover:opacity-80 transition">
                <svg viewBox="0 0 24 24" className="h-full w-auto" fill="currentColor" aria-hidden>
                  <path d="M8 3c-2.76 0-5 2.24-5 5v8c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H8zm0 2h8c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H8c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3zm9 1.4a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="inline-flex items-center h-5 md:h-6 hover:opacity-80 transition">
                <svg viewBox="0 0 24 24" className="h-full w-auto" fill="currentColor" aria-hidden>
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.3 17.4H6V10h2.3v7.4zM7.1 9a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8zm10.3 8.4h-2.3v-3.6c0-.9-.3-1.5-1.1-1.5-.6 0-1 .4-1.2 .9 0 .2-.1.4-.1.6v3.6h-2.3V10h2.3v1c.3-.5 .9-1.1 2.2-1.1 1.6 0 2.6 1 2.6 3.3v4.2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Link
              href={INSCRIPTION_URL}
              className="inline-flex items-center px-5 md:px-7 py-2 md:py-2.5 rounded-full bg-cream text-ink font-bold text-sm md:text-base hover:bg-white transition"
            >
              Inscription
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-5 md:px-7 py-2 md:py-2.5 rounded-full bg-cream text-ink font-bold text-sm md:text-base hover:bg-white transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
