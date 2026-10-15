import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary, getLocale } from "@/lib/i18n";
import { allowIndexing, site } from "@/lib/site";
import "../globals.css";

const manrope = localFont({
  src: "../../fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const montserrat = localFont({
  src: "../../fonts/montserrat-latin-wght-normal.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

export async function generateStaticParams() {
  return site.locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#01030B",
  colorScheme: "dark",
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  const locale = await getLocale();
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.title, template: `%s | ${site.name}` },
    description: t.meta.description,
    applicationName: site.name,
    robots: { index: allowIndexing, follow: allowIndexing },
    alternates: {
      canonical: `/${locale}`,
      languages: { ...Object.fromEntries(site.locales.map((l) => [l, `/${l}`])), "x-default": `/${site.defaultLocale}` },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      url: `/${locale}`,
      locale: locale === "es" ? "es_US" : "en_US",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const t = await getDictionary();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: "+1-469-322-9074",
    areaServed: "US",
    address: { "@type": "PostalAddress", addressRegion: "TX", addressCountry: "US" },
    availableLanguage: ["es", "en"],
  };

  return (
    <html lang={locale} className={`${manrope.variable} ${montserrat.variable}`}>
      <body className="min-h-dvh bg-night">
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-lg bg-ink px-4 py-2 font-bold text-night focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.nav.skip}
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
