import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/privacidad", "/terminos"];
  return site.locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      changeFrequency: path ? ("yearly" as const) : ("monthly" as const),
      priority: path ? 0.3 : 1,
      alternates: {
        languages: Object.fromEntries(site.locales.map((l) => [l, `${site.url}/${l}${path}`])),
      },
    })),
  );
}
