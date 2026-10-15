import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import type { Dictionary } from "@/dictionaries/es";
import { isLocale, type Locale } from "@/lib/site";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("@/dictionaries/es").then((m) => m.default),
  // en: () => import("@/dictionaries/en").then((m) => m.default),  ← Fase 4
};

/** Idioma de la ruta actual (/es, /en). */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** Textos del idioma de la ruta actual. */
export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()]();
}
