import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * En las URL de prueba de Vercel (preview) se bloquea la indexación para que
 * Google no indexe versiones temporales. Solo producción permite indexar.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
