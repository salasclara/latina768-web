import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsEs } from "@/content/legal-es";

// Fase 4: elegir el documento según el idioma (termsEn).
const doc = termsEs;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/es/terminos" },
};

export default function TermsPage() {
  return <LegalPage doc={doc} />;
}
