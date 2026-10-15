import { NextResponse, type NextRequest } from "next/server";
import { site } from "@/lib/site";

/**
 * Envía las visitas sin idioma en la URL (p. ej. latina768.com/) a /es.
 * En la Fase 4 se puede elegir el idioma según el navegador del visitante.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = site.locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${site.defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Excluye la API, archivos internos de Next.js y archivos con extensión (imágenes, sitemap, robots…)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
