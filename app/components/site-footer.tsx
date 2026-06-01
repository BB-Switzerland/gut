"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { INSCRIPTION_URL } from "../../lib/utils";

export function SiteFooter() {
  return (
    <footer id="contact" className="relative mt-10">
      {/* Blue panel — newsletter & nav */}
      <div className="bg-blue/70">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] font-bold text-ink/60 mb-3">Suis nos aventures sur</p>
            <div className="flex items-center gap-3">
              <Social href="https://strava.com" label="Strava">
                <Image src="/figma/strava.png" alt="" width={120} height={40} className="h-6 w-auto" />
              </Social>
              <Social href="https://instagram.com" label="Instagram">
                <Image src="/figma/instagram.png" alt="" width={26} height={26} className="h-6 w-6 object-contain" />
              </Social>
              <Social href="https://linkedin.com" label="LinkedIn">
                <Image src="/figma/linkedin.png" alt="" width={26} height={26} className="h-6 w-6 object-contain" />
              </Social>
            </div>

            <h3 className="mt-10 font-display text-4xl md:text-5xl xl:text-6xl text-ink leading-[0.95]">
              Inscris-toi à la <br/> newsletter
            </h3>
            <p className="mt-4 text-ink/75 max-w-md">
              Ouvertures de dossards, programme du jour J, coulisses de l'édition 2026.
            </p>

            <Newsletter />
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-ink/60 mb-3">Navigation</p>
              <ul className="space-y-2.5 text-ink">
                <li><Link href="/" className="font-semibold hover:text-orange">Accueil</Link></li>
                <li><Link href="/evenement" className="font-semibold hover:text-orange">Événement</Link></li>
                <li><Link href="/epreuves" className="font-semibold hover:text-orange">Épreuves</Link></li>
                <li><Link href="/infos-pratiques" className="font-semibold hover:text-orange">Infos pratiques</Link></li>
                <li><Link href="/entreprises" className="font-semibold hover:text-orange">Entreprises</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-ink/60 mb-3">Course</p>
              <ul className="space-y-2.5 text-ink">
                <li><Link href={INSCRIPTION_URL} className="font-semibold hover:text-orange">Inscription</Link></li>
                <li><Link href="/infos-pratiques" className="font-semibold hover:text-orange">Dossards</Link></li>
                <li><Link href="/infos-pratiques" className="font-semibold hover:text-orange">Résultats</Link></li>
                <li><Link href="/infos-pratiques" className="font-semibold hover:text-orange">Photos</Link></li>
                <li><Link href="https://www.geneveurbantrail.ch/benevoles" className="font-semibold hover:text-orange">Bénévoles</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-ink text-cream rounded-3xl p-7 shadow-soft-lg">
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-cream/50 mb-4">Adresse</p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-orange shrink-0" />
                  <span>
                    Rue de Lancy 7<br />
                    1227 Carouge<br />
                    Suisse
                  </span>
                </li>
                <li className="border-t border-cream/10 pt-4">
                  <p className="text-xs uppercase tracking-[0.22em] font-bold text-cream/50 mb-2">Inscription</p>
                  <a href="mailto:inscription@geneveurbantrail.ch" className="inline-flex items-center gap-2 font-semibold hover:text-orange">
                    <Mail className="h-4 w-4" />
                    inscription@geneveurbantrail.ch
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.22em] font-bold text-cream/50 mb-2">Information</p>
                  <a href="mailto:info@geneveurbantrail.ch" className="inline-flex items-center gap-2 font-semibold hover:text-orange">
                    <Mail className="h-4 w-4" />
                    info@geneveurbantrail.ch
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange" />
                  <span>+41 22 000 00 00</span>
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>

      {/* Legal strip */}
      <div className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink/65">
          <p>
            Genève Urban Trail © {new Date().getFullYear()} · Accompagné par l'agence <span className="font-bold">BB®</span> Switzerland
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="#" className="hover:text-orange">Règlement</Link>
            <span className="opacity-30">·</span>
            <Link href="#" className="hover:text-orange">CGV</Link>
            <span className="opacity-30">·</span>
            <Link href="#" className="hover:text-orange">Mentions légales</Link>
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
      className="mt-8 space-y-3 max-w-lg"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setDone(true);
        setEmail("");
      }}
    >
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          className="bg-cream/90 rounded-full px-5 py-3 text-sm placeholder:text-ink/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange/60 transition"
          placeholder="Votre nom"
          required
        />
        <input
          className="bg-cream/90 rounded-full px-5 py-3 text-sm placeholder:text-ink/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange/60 transition"
          placeholder="Votre prénom"
          required
        />
      </div>
      <input
        type="email"
        required
        placeholder="Votre e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-cream/90 rounded-full px-5 py-3 text-sm placeholder:text-ink/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange/60 transition"
      />
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-ink text-cream text-sm font-semibold uppercase tracking-wider hover:bg-orange transition"
      >
        {done ? "Merci !" : "Je m'abonne"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="mt-5 rounded-3xl bg-cream p-5 shadow-soft space-y-3"
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
    >
      <p className="text-xs uppercase tracking-[0.22em] font-bold text-ink/60">Une question ?</p>
      <textarea
        rows={3}
        className="w-full bg-white rounded-2xl px-4 py-3 text-sm placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-orange/60"
        placeholder="Votre message"
        required
      />
      <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-orange text-white text-sm font-semibold uppercase tracking-wider hover:brightness-110 transition">
        {sent ? "Message envoyé !" : "Envoyer"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      aria-label={label}
      href={href}
      className="inline-grid place-items-center px-3 h-11 rounded-full bg-cream/90 hover:bg-white shadow-soft-sm hover:shadow-soft transition"
    >
      {children}
    </a>
  );
}
