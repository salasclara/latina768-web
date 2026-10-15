import type { Locale } from "./site";

/**
 * Casos para la sección "Proyectos".
 *
 * La sección está oculta (site.showProjects = false) hasta aprobar su contenido.
 * Reglas: solo proyectos reales, con autorización del cliente para publicarlos,
 * sin resultados ni cifras que no se puedan comprobar, y sin presentar proyectos
 * propios como trabajos para clientes externos.
 */
export type ProjectCategory = "web" | "apps" | "automation" | "ai";
export type ProjectKind = "client" | "own" | "lab";

type Localized = Record<Locale, string>;

export type Project = {
  id: string;
  title: string;
  /** Tipo de negocio o subtítulo. */
  subtitle: Localized;
  kind: ProjectKind;
  categories: ProjectCategory[];
  challenge: Localized;
  /** Lo que hicimos: 3–4 puntos breves. */
  work: Record<Locale, string[]>;
  image?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    id: "rocimar",
    title: "Rocimar Morales",
    subtitle: {
      es: "Periodista y locutora · Cabimas, Venezuela",
      en: "Journalist and radio host · Cabimas, Venezuela",
    },
    kind: "client",
    categories: ["web", "apps", "ai"],
    challenge: {
      es: "Necesitaba un espacio propio para su trayectoria y sus noticias, y una forma ágil de preparar contenido cada día.",
      en: "She needed her own home for her career and news, and a faster way to prepare content every day.",
    },
    work: {
      es: [
        "Web de marca personal con trayectoria, servicios y patrocinantes",
        "Sección de Noticias y «Cabimas y su Gente» conectadas a una base de datos",
        "App móvil que prepara borradores de noticias con IA, siempre con revisión de la periodista",
        "Optimización para Google: sitemap, Search Console y páginas indexadas",
      ],
      en: [
        "Personal brand website with career, services and sponsors",
        "News and “Cabimas y su Gente” sections powered by a database",
        "Mobile app that drafts news with AI, always reviewed by the journalist",
        "Google optimization: sitemap, Search Console and indexed pages",
      ],
    },
    image: "/proyectos/rocimar.jpg",
    href: "https://rocimarmorales.com",
  },
  {
    id: "pasarela",
    title: "Pasarela Studio Internacional",
    subtitle: {
      es: "Escuela de modelaje y desarrollo personal · Carrollton, Texas",
      en: "Modeling and personal development school · Carrollton, Texas",
    },
    kind: "client",
    categories: ["web", "automation", "ai"],
    challenge: {
      es: "Una escuela con 37 años de trayectoria necesitaba centralizar sus programas, castings e inscripciones en un solo lugar.",
      en: "A school with 37 years of history needed to bring its programs, castings and enrollments into one place.",
    },
    work: {
      es: [
        "Web con programas, castings abiertos y llamados a inscripción",
        "Formularios conectados al CRM para dar seguimiento a cada interesada",
        "Sección editorial de la Revista Pasarela con contenido de moda y belleza",
        "Herramienta con IA para curar y resumir contenido del sector",
      ],
      en: [
        "Website with programs, open castings and enrollment calls to action",
        "Forms connected to the CRM to follow up with every lead",
        "Editorial section for Revista Pasarela with fashion and beauty content",
        "AI tool to curate and summarize industry content",
      ],
    },
    image: "/proyectos/pasarela.jpg",
    href: "https://pasarelastudiointer.com",
  },
  {
    id: "latina768",
    title: "Latina 768 Services",
    subtitle: {
      es: "Nuestra propia web, construida con el mismo método",
      en: "Our own website, built with the same method",
    },
    kind: "own",
    categories: ["web", "automation"],
    challenge: {
      es: "Queríamos una web que no solo informara, sino que convirtiera cada solicitud en una oportunidad organizada.",
      en: "We wanted a website that doesn’t just inform, but turns every request into an organized opportunity.",
    },
    work: {
      es: [
        "Web bilingüe (español e inglés) optimizada para móvil y Google",
        "Formulario protegido contra spam y conectado al CRM",
        "Automatización: contacto, oportunidad y aviso al equipo en segundos",
      ],
      en: [
        "Bilingual website (Spanish and English) optimized for mobile and Google",
        "Spam-protected form connected to the CRM",
        "Automation: contact, opportunity and team alert within seconds",
      ],
    },
    image: "/proyectos/latina768.jpg",
  },
  {
    id: "lab-facebook",
    title: "Marcas de contenido con publicación automática",
    subtitle: {
      es: "Laboratorio · Amar Es, Maravillas del Reino y Fancy by Roxette",
      en: "Lab · Amar Es, Maravillas del Reino and Fancy by Roxette",
    },
    kind: "lab",
    categories: ["automation", "ai"],
    challenge: {
      es: "Probar cómo mantener marcas y comunidades activas en redes sociales con muy poca intervención manual.",
      en: "Testing how to keep brands and communities active on social media with very little manual work.",
    },
    work: {
      es: [
        "Identidad visual y línea editorial para cada marca",
        "Contenido preparado con apoyo de IA",
        "Publicación automática programada",
      ],
      en: [
        "Visual identity and editorial line for each brand",
        "Content prepared with AI support",
        "Automatic scheduled publishing",
      ],
    },
    image: "/proyectos/lab-facebook.jpg",
  },
];
