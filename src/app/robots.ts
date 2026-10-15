import type { MetadataRoute } from "next";
import { allowIndexing, site } from "@/lib/site";

/** Bloquea la indexación hasta que ALLOW_INDEXING=true (ver src/lib/site.ts). */
export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
