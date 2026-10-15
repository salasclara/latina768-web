import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegalDoc } from "@/content/legal";
import { getLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const doc = getLegalDoc("privacy", locale);
  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: `/${locale}/privacidad`,
      languages: Object.fromEntries(site.locales.map((l) => [l, `/${l}/privacidad`])),
    },
  };
}

export default async function PrivacyPage() {
  return <LegalPage doc={getLegalDoc("privacy", await getLocale())} />;
}
