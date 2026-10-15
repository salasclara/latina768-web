import type { Locale } from "@/lib/site";
import { privacyEs, termsEs, type LegalDoc } from "./legal-es";
import { privacyEn, termsEn } from "./legal-en";

const docs: Record<"privacy" | "terms", Record<Locale, LegalDoc>> = {
  privacy: { es: privacyEs, en: privacyEn },
  terms: { es: termsEs, en: termsEn },
};

export function getLegalDoc(kind: "privacy" | "terms", locale: Locale): LegalDoc {
  return docs[kind][locale];
}
