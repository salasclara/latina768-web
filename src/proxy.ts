import { NextResponse, type NextRequest } from "next/server";
import { site } from "@/lib/site";

/**
 * Envía las visitas sin idioma en la URL (p. ej. latina768.com/) a /es.
 * El español es el idioma principal; el visitante cambia a inglés con el selector ES / EN.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = site.locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${site.defaultLocale}${pathname === "/" ? "" : pathname}`;
  // 308 = permanente: Google entiende que /es es la página principal definitiva.
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Excluye la API, archivos internos de Next.js y archivos con extensión (imágenes, sitemap, robots…)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
