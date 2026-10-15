/**
 * Proyectos y demostraciones para la sección "Proyectos".
 *
 * La sección está oculta (site.showProjects = false) hasta aprobar su contenido.
 * Reglas: solo proyectos reales, con autorización para publicarlos, y sin
 * presentar proyectos propios como trabajos para clientes externos.
 *
 * Ejemplo de entrada:
 * {
 *   title: "Nombre del proyecto",
 *   description: "Qué resuelve, en una o dos frases.",
 *   category: "automation",          // web | apps | automation | ai
 *   kind: "Proyecto propio",         // o "Demostración", o "Cliente" (solo con autorización)
 *   image: "/proyectos/nombre.jpg",  // opcional, en /public/proyectos
 *   href: "https://…",               // opcional
 * }
 */
export type ProjectCategory = "web" | "apps" | "automation" | "ai";

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  kind: string;
  image?: string;
  href?: string;
};

export const projects: Project[] = [];
