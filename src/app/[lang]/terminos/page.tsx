import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegalDoc } from "@/content/legal";
import { getLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const doc = getLegalDoc("terms", locale);
  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: `/${locale}/terminos`,
      languages: Object.fromEntries(site.locales.map((l) => [l, `/${l}/terminos`])),
    },
  };
}

export default async function TermsPage() {
  return <LegalPage doc={getLegalDoc("terms", await getLocale())} />;
}
