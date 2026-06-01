"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, INSCRIPTION_URL } from "../../lib/utils";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-cream shadow-soft" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="GUT — Genève Urban Trail">
          <Image
            src="/figma/gut-mascot.png"
            alt=""
            width={44}
            height={48}
            className="h-10 md:h-11 w-auto group-hover:animate-mascot"
            priority
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[16px] md:text-[18px] text-ink">GUT</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-ink/60 mt-1 font-semibold">Geneva Urban Trail</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative px-4 py-2 rounded-full text-[13px] font-semibold transition uppercase tracking-wider",
                  active ? "bg-ink text-cream" : "text-ink hover:text-orange",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#contact"
            className="text-[13px] font-semibold px-4 py-2 rounded-full text-ink hover:text-orange transition uppercase tracking-wider"
          >
            Contact
          </Link>
          <Link
            href={INSCRIPTION_URL}
            className="text-[13px] font-bold px-5 py-2.5 rounded-full bg-orange text-white shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition uppercase tracking-wider"
          >
            S'inscrire
          </Link>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden inline-grid place-items-center h-10 w-10 rounded-full bg-cream shadow-soft-sm"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height] duration-300 bg-cream",
          open ? "max-h-[600px] shadow-soft-lg" : "max-h-0",
        ].join(" ")}
      >
        <nav className="px-5 py-4 grid gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-3.5 rounded-2xl text-ink font-semibold uppercase tracking-wider text-sm hover:bg-orange/10"
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <Link href="#contact" className="text-center px-4 py-3 rounded-full bg-cream text-ink font-semibold shadow-soft-sm uppercase tracking-wider text-sm">
              Contact
            </Link>
            <Link
              href={INSCRIPTION_URL}
              className="text-center px-4 py-3 rounded-full bg-orange text-white font-bold shadow-soft uppercase tracking-wider text-sm"
            >
              S'inscrire
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
