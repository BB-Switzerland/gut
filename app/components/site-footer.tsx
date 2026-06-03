"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { INSCRIPTION_URL } from "../../lib/utils";

const REGISTRATION_EMAIL = "inscription@runningeneva.ch";
const INFO_EMAIL = "info@runningeneva.ch";
const VOLUNTEER_URL = "https://www.geneveurbantrail.ch/benevoles";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">

        {/* Top — newsletter + 4 colonnes */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Logo + newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/figma/gut-mascot.png" alt="" width={48} height={54} className="h-12 w-auto" />
              <span className="font-display text-xl leading-none">
                Geneva<br />Urban Trail
              </span>
            </Link>

            <p className="mt-6 text-cream/70 text-sm leading-relaxed max-w-sm">
              Course de trail urbain au cœur de Genève et de sa Vieille-Ville.
              Édition 2026 — samedi 5 septembre.
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider font-bold text-cream/55 mb-3">
                Newsletter
              </p>
              <Newsletter />
            </div>
          </div>

          {/* Nav site */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-wider font-bold text-cream/55 mb-4">
              Le site
            </p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-cream/85 hover:text-orange transition">Accueil</Link></li>
              <li><Link href="/evenement" className="text-cream/85 hover:text-orange transition">Événement</Link></li>
              <li><Link href="/epreuves" className="text-cream/85 hover:text-orange transition">Épreuves</Link></li>
              <li><Link href="/infos-pratiques" className="text-cream/85 hover:text-orange transition">Infos pratiques</Link></li>
              <li><Link href="/entreprises" className="text-cream/85 hover:text-orange transition">Entreprises</Link></li>
            </ul>
          </div>

          {/* Nav course */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-wider font-bold text-cream/55 mb-4">
              La course
            </p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={INSCRIPTION_URL} className="text-cream/85 hover:text-orange transition">Inscription</Link></li>
              <li><Link href="/infos-pratiques" className="text-cream/85 hover:text-orange transition">Tarifs</Link></li>
              <li><Link href="/infos-pratiques" className="text-cream/85 hover:text-orange transition">Résultats</Link></li>
              <li><Link href="/infos-pratiques" className="text-cream/85 hover:text-orange transition">Photos</Link></li>
              <li><Link href={VOLUNTEER_URL} className="text-cream/85 hover:text-orange transition">Bénévoles</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-wider font-bold text-cream/55 mb-4">
              Nous contacter
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-cream/85">
                <MapPin className="h-4 w-4 mt-0.5 text-orange shrink-0" />
                <span>
                  Rue de Lancy 7<br />
                  1227 Carouge, Suisse
                </span>
              </li>
              <li>
                <a href={`mailto:${REGISTRATION_EMAIL}`} className="flex items-start gap-2.5 text-cream/85 hover:text-orange transition">
                  <Mail className="h-4 w-4 mt-0.5 text-orange shrink-0" />
                  <span className="break-all">{REGISTRATION_EMAIL}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${INFO_EMAIL}`} className="flex items-start gap-2.5 text-cream/85 hover:text-orange transition">
                  <Mail className="h-4 w-4 mt-0.5 text-orange shrink-0" />
                  <span className="break-all">{INFO_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-cream/85">
                <Phone className="h-4 w-4 text-orange shrink-0" />
                <span>+41 22 000 00 00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom — copyright + legal + social */}
        <div className="mt-14 md:mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center justify-between gap-5">

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream/55">
            <span>© {new Date().getFullYear()} Geneva Urban Trail</span>
            <Link href="#" className="hover:text-cream transition">Mentions légales</Link>
            <Link href="#" className="hover:text-cream transition">CGV</Link>
            <Link href="#" className="hover:text-cream transition">Confidentialité</Link>
            <Link href="#" className="hover:text-cream transition">Règlement</Link>
          </div>

          <div className="flex items-center gap-3">
            <SocialLink href="https://www.strava.com" label="Strava">
              <Image src="/figma/strava.png" alt="" width={56} height={20} className="h-4 w-auto" />
            </SocialLink>
            <SocialLink href="https://instagram.com" label="Instagram">
              <Image src="/figma/instagram.png" alt="" width={20} height={20} className="h-4 w-4 object-contain" />
            </SocialLink>
            <SocialLink href="https://linkedin.com" label="LinkedIn">
              <Image src="/figma/linkedin.png" alt="" width={20} height={20} className="h-4 w-4 object-contain" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <form
      className="flex flex-col sm:flex-row gap-2 max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setDone(true);
        setEmail("");
      }}
    >
      <input
        type="email"
        required
        placeholder="Votre e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-cream/10 border border-cream/15 rounded-full px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-orange focus:bg-cream/15 transition"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-orange text-white text-sm font-semibold hover:brightness-110 transition"
      >
        {done ? "Merci !" : "S'abonner"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-grid place-items-center h-9 w-9 rounded-full bg-cream/10 hover:bg-orange transition"
    >
      {children}
    </a>
  );
}
