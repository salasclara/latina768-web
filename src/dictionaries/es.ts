/**
 * Textos del sitio en español (idioma principal).
 * El diccionario en inglés (en.ts) sigue exactamente esta misma estructura.
 */
const es = {
  meta: {
    title: "Latina 768 Services | Consultoría de marketing, IA y automatización",
    description:
      "Consultoría de marketing, inteligencia artificial, automatización comercial y desarrollo web para pequeñas empresas que quieren crecer.",
  },

  nav: {
    label: "Principal",
    solutions: "Soluciones",
    services: "Servicios",
    process: "Cómo trabajamos",
    projects: "Proyectos",
    about: "Nosotros",
    contact: "Contacto",
    cta: "Solicitar asesoría",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    home: "Latina 768 Services, inicio",
    skip: "Saltar al contenido",
  },

  hero: {
    badge: "Consultoría de marketing con inteligencia artificial",
    titleLead: "Impulsamos tu negocio con",
    titleAccent: "estrategia, tecnología e innovación.",
    subtitle:
      "Consultoría de marketing, inteligencia artificial, automatización comercial y desarrollo web para pequeñas empresas que quieren crecer.",
    primaryCta: "Solicitar asesoría",
    secondaryCta: "Conocer nuestros servicios",
    highlights: [
      "Atención en español e inglés",
      "Sin necesidad de un equipo técnico",
      "Empresa de Texas",
    ],
    flow: {
      title: "Un sistema completo para crecer",
      tag: "4 áreas",
      caption: "Así se conectan nuestros servicios",
      steps: [
        {
          title: "Estrategia digital",
          text: "Definimos qué comunicar, a quién y en qué canales.",
        },
        {
          title: "Presencia web",
          text: "Una web clara que explica tu oferta y recibe solicitudes.",
        },
        {
          title: "Seguimiento automatizado",
          text: "Cada prospecto queda registrado y recibe seguimiento.",
        },
        {
          title: "Atención con IA",
          text: "Respuestas ágiles a preguntas frecuentes, también fuera de horario.",
        },
      ],
    },
  },

  solutions: {
    eyebrow: "Soluciones",
    title: "Problemas del día a día que te ayudamos a resolver",
    intro: "Si alguno te suena familiar, hay una forma más simple de hacerlo.",
    items: [
      {
        title: "Consultas sin respuesta",
        problem: "Mensajes que llegan fuera de horario o se pierden entre canales.",
        answer: "Respuestas automáticas a preguntas frecuentes, a cualquier hora.",
      },
      {
        title: "Seguimiento comercial desorganizado",
        problem: "Prospectos repartidos entre chats, libretas y hojas sueltas.",
        answer: "Tus contactos en un solo lugar, con recordatorios.",
      },
      {
        title: "Procesos manuales repetitivos",
        problem: "Copiar datos, confirmar citas y enviar los mismos correos a mano.",
        answer: "Automatizamos lo que se repite.",
      },
      {
        title: "Herramientas desconectadas",
        problem: "Formularios, correo y calendario que no se comunican entre sí.",
        answer: "Las conectamos para que la información fluya sola.",
      },
      {
        title: "Presencia digital insuficiente",
        problem: "Una web que no explica lo que haces ni recibe solicitudes.",
        answer: "Páginas y formularios pensados para captar clientes.",
      },
    ],
  },

  services: {
    eyebrow: "Servicios",
    title: "Cuatro áreas que trabajan juntas",
    intro:
      "La estrategia define el rumbo; la tecnología ayuda a ejecutarlo. Combinamos ambas según lo que tu negocio necesita.",
    cta: "Hablemos de este servicio",
    items: [
      {
        id: "estrategia",
        title: "Estrategias digitales",
        text: "Consultoría y planificación de marketing para fortalecer tu presencia digital, mejorar tu comunicación comercial e identificar oportunidades de crecimiento.",
        benefits: [
          "Un plan claro de qué comunicar y dónde",
          "Mensajes comerciales más consistentes",
          "Oportunidades de crecimiento identificadas",
        ],
      },
      {
        id: "automatizacion",
        title: "Automatización comercial",
        text: "Soluciones para optimizar la captación, la atención y el seguimiento de clientes, con menos tareas repetitivas y más organización.",
        benefits: [
          "Prospectos y clientes organizados",
          "Seguimiento que no depende de la memoria",
          "Menos tiempo en tareas repetitivas",
        ],
      },
      {
        id: "ia",
        title: "Integración de herramientas de IA",
        text: "Incorporamos herramientas de inteligencia artificial para apoyar la atención al cliente, optimizar procesos y mejorar la productividad.",
        benefits: [
          "Atención más ágil, también fuera de horario",
          "Herramientas elegidas para tu caso",
          "Tu equipo se enfoca en lo que requiere criterio humano",
        ],
      },
      {
        id: "web",
        title: "Desarrollo web",
        text: "Diseño y desarrollo de páginas web corporativas, landing pages y soluciones digitales adaptadas a las necesidades comerciales de tu negocio.",
        benefits: [
          "Una web que explica lo que haces",
          "Páginas pensadas para recibir solicitudes",
          "Diseño adaptado a celulares",
        ],
      },
    ],
  },

  process: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso claro, de la primera conversación en adelante",
    steps: [
      {
        title: "Analizamos",
        text: "Analizamos las necesidades y los objetivos de tu negocio.",
      },
      {
        title: "Diseñamos la estrategia",
        text: "Diseñamos una estrategia digital adaptada a tus necesidades.",
      },
      {
        title: "Implementamos",
        text: "Implementamos las herramientas y soluciones acordadas.",
      },
      {
        title: "Evaluamos y mejoramos",
        text: "Evaluamos resultados e identificamos oportunidades de mejora.",
      },
    ],
  },

  audience: {
    eyebrow: "Para quién",
    title: "Pensado para pequeñas empresas y emprendedores",
    text: "Negocios que quieren comunicar mejor, atraer más clientes y organizar su operación, sin tener un departamento de marketing o de tecnología propio.",
    sectors: [
      "Limpieza",
      "Mantenimiento",
      "Belleza y estética",
      "Academias",
      "Servicios profesionales",
    ],
    other: "Y otros sectores",
  },

  projects: {
    eyebrow: "Proyectos",
    title: "Proyectos y demostraciones",
    intro: "Soluciones desarrolladas por nuestro equipo.",
    categories: {
      web: "Desarrollo web",
      apps: "Aplicaciones",
      automation: "Automatización",
      ai: "Inteligencia artificial",
    },
  },

  about: {
    eyebrow: "Nosotros",
    title: "Estrategia y tecnología al servicio de tu negocio.",
    text: "En Latina 768 Services creemos que las pequeñas empresas también deben tener acceso a herramientas digitales innovadoras. Combinamos consultoría de marketing, automatización e inteligencia artificial para ayudar a los negocios a fortalecer su presencia digital, simplificar procesos y aprovechar nuevas oportunidades.",
    missionTitle: "Misión",
    mission:
      "Ayudar a pequeñas empresas y emprendedores a crecer combinando consultoría de marketing con herramientas digitales, automatización e inteligencia artificial.",
    visionTitle: "Visión",
    vision:
      "Ser el aliado estratégico y tecnológico de confianza para pequeñas empresas que quieren crecer sin un departamento de marketing o de tecnología propio.",
    valuesTitle: "Valores",
    values: ["Claridad", "Integridad", "Cercanía", "Innovación práctica", "Compromiso"],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de lo que tu negocio necesita.",
    text: "Cuéntanos cómo trabajas hoy y te diremos qué se puede simplificar.",
    phoneLabel: "Llamar",
    emailLabel: "Escribir un correo",
    location: "Texas, Estados Unidos",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      company: "Empresa",
      companyPlaceholder: "Nombre de tu negocio",
      email: "Correo electrónico",
      emailPlaceholder: "tu@correo.com",
      phone: "Teléfono",
      optional: "(opcional)",
      phonePlaceholder: "(000) 000-0000",
      service: "Servicio de interés",
      servicePlaceholder: "Selecciona una opción",
      serviceOptions: {
        estrategia: "Estrategias digitales",
        automatizacion: "Automatización comercial",
        ia: "Integración de herramientas de IA",
        web: "Desarrollo web",
        otro: "Aún no lo sé",
      },
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos brevemente qué te gustaría mejorar",
      consentPrefix: "Al enviar aceptas nuestra",
      consentLink: "Política de privacidad",
      submit: "Enviar solicitud",
      sending: "Enviando…",
      honeypot: "No completes este campo",
    },
    errors: {
      nameRequired: "Escribe tu nombre.",
      emailRequired: "Escribe tu correo electrónico.",
      emailInvalid: "Revisa el formato del correo.",
      phoneInvalid: "Revisa el número de teléfono.",
      serviceRequired: "Selecciona un servicio.",
      messageRequired: "Cuéntanos brevemente qué necesitas.",
      messageTooLong: "El mensaje es demasiado largo (máximo 2000 caracteres).",
      tooLong: "Este campo es demasiado largo.",
    },
    status: {
      success:
        "Recibimos tu solicitud. Te responderemos al correo que nos indicaste.",
      fixErrors: "Revisa los campos marcados.",
      unavailable:
        "El formulario no está disponible en este momento. Escríbenos a {email} o llámanos al {phone}.",
      failed:
        "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a {email}.",
      tooFast: "Espera unos segundos e inténtalo de nuevo.",
    },
  },

  footer: {
    legal:
      "Latina 768 Services es un nombre comercial (DBA) de Latina Realty Investment LLC · Texas, Estados Unidos.",
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    rights: "Latina 768 Services",
  },

  legal: {
    back: "Volver al inicio",
    updated: "Última actualización",
    draftNotice: "Borrador pendiente de revisión.",
  },
};

export default es;

/** Estructura que debe cumplir cada diccionario. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type Dictionary = Widen<typeof es>;
