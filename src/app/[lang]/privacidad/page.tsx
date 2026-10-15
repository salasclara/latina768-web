import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyEs } from "@/content/legal-es";

// Fase 4: elegir el documento según el idioma (privacyEn).
const doc = privacyEs;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/es/privacidad" },
};

export default function PrivacyPage() {
  return <LegalPage doc={doc} />;
}
