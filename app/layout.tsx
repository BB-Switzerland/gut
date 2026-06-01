import type { Metadata } from "next";
import { Open_Sans, Bungee } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { FloatingBar } from "./components/floating-bar";

const body = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const display = Bungee({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "GUT — Genève Urban Trail · 5 septembre 2026",
  description:
    "Genève et sa Vieille-Ville hors des sentiers battus. 6, 9, 16 km running & walking. Samedi 5 septembre 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingBar />
      </body>
    </html>
  );
}
