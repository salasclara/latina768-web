/**
 * Datos de la empresa y ajustes globales del sitio.
 * Cambia aquí teléfono, correo o dominio y se actualiza en toda la web.
 */
export const site = {
  name: "Latina 768 Services",
  legalName: "Latina Realty Investment LLC",
  url: "https://latina768.com",
  phone: "(469) 322-9074",
  phoneHref: "tel:+14693229074",
  email: "contacto@latina768.com",
  location: "Texas, Estados Unidos",

  /**
   * Idiomas publicados. El inglés se activa en la Fase 4,
   * cuando exista su diccionario (src/dictionaries/en.ts).
   */
  locales: ["es"] as const,
  defaultLocale: "es" as const,

  /**
   * La sección Proyectos permanece oculta hasta que se apruebe su contenido.
   * Para mostrarla: cambia a true y completa src/lib/projects.ts.
   */
  showProjects: false,
} as const;

export type Locale = (typeof site.locales)[number];

export function isLocale(value: string): value is Locale {
  return (site.locales as readonly string[]).includes(value);
}
