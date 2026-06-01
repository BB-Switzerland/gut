import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const INSCRIPTION_URL = "https://www.geneveurbantrail.ch/inscription";
export const PHOTOS_URL = "https://photos.geneveurbantrail.ch";
export const RESULTS_URL = "https://results.geneveurbantrail.ch";
export const VOLUNTEER_URL = "https://www.geneveurbantrail.ch/benevoles";

export const NAV = [
  { href: "/evenement", label: "Événement" },
  { href: "/epreuves", label: "Épreuves" },
  { href: "/infos-pratiques", label: "Infos pratiques" },
  { href: "/entreprises", label: "Entreprises" },
] as const;
