/**
 * Textos del sitio en español (idioma principal).
 * El diccionario en inglés (Fase 4) debe seguir exactamente esta misma estructura.
 */
const es = {
  meta: {
    title: "Latina 768 Services | IA y automatización para pequeñas empresas",
    description:
      "Inteligencia artificial, automatización y soluciones digitales diseñadas para pequeñas empresas. Menos tareas manuales, más tiempo para hacer crecer tu negocio.",
  },

  nav: {
    label: "Principal",
    solutions: "Soluciones",
    services: "Servicios",
    process: "Cómo trabajamos",
    projects: "Proyectos",
    about: "Nosotros",
    contact: "Contacto",
    cta: "Solicitar una consulta",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    home: "Latina 768 Services, inicio",
    skip: "Saltar al contenido",
  },

  hero: {
    badge: "IA y automatización para pequeñas empresas",
    titleLead: "Menos tareas manuales.",
    titleAccent: "Más tiempo para hacer crecer tu negocio.",
    subtitle:
      "Inteligencia artificial, automatización y soluciones digitales diseñadas para pequeñas empresas.",
    primaryCta: "Solicitar una consulta",
    secondaryCta: "Explorar soluciones",
    highlights: [
      "Atención en español e inglés",
      "Sin necesidad de un equipo técnico",
      "Empresa de Texas",
    ],
    flow: {
      title: "Una consulta nueva, de principio a fin",
      tag: "Automático",
      caption: "Ejemplo ilustrativo de una automatización",
      steps: [
        { title: "Llega una consulta", text: "Desde tu web o WhatsApp · 9:42 p. m." },
        {
          title: "Respuesta inmediata",
          text: "El asistente responde preguntas frecuentes y pide los datos clave.",
        },
        {
          title: "Contacto organizado",
          text: "Se guarda con su nombre, teléfono y el servicio que necesita.",
        },
        {
          title: "Tu equipo recibe el aviso",
          text: "A la mañana siguiente, todo listo para dar seguimiento.",
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
    title: "Tres áreas, una solución completa",
    intro:
      "La tecnología apoya a tu equipo; no lo reemplaza. Te ayudamos a decidir qué automatizar y qué mantener en manos de personas.",
    cta: "Hablemos de este servicio",
    items: [
      {
        id: "ia",
        title: "Inteligencia artificial para negocios",
        text: "Asistentes que responden preguntas frecuentes, orientan a tus clientes y apoyan a tu equipo en tareas del día a día.",
        benefits: [
          "Atención más rápida, también fuera de horario",
          "Respuestas consistentes en español e inglés",
          "Tu equipo se enfoca en lo que requiere criterio humano",
        ],
      },
      {
        id: "automatizacion",
        title: "Automatización de procesos",
        text: "Conectamos formularios, organizamos prospectos y creamos avisos para que el seguimiento no dependa de la memoria.",
        benefits: [
          "Menos tiempo en tareas repetitivas",
          "Contactos y solicitudes siempre organizados",
          "Continuidad aunque cambie el día o el equipo",
        ],
      },
      {
        id: "web",
        title: "Desarrollo web y soluciones digitales",
        text: "Páginas web, landing pages, formularios y herramientas digitales conectadas a tus procesos, no solo una vitrina.",
        benefits: [
          "Una web que explica y recibe solicitudes",
          "Formularios conectados a tu seguimiento",
          "Herramientas adaptadas a tu forma de trabajar",
        ],
      },
    ],
  },

  process: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso claro, de la primera conversación en adelante",
    steps: [
      {
        title: "Escuchamos",
        text: "Conocemos tu negocio, cómo trabajas hoy y qué te quita más tiempo.",
      },
      {
        title: "Identificamos oportunidades",
        text: "Señalamos qué conviene automatizar primero y qué no hace falta tocar.",
      },
      {
        title: "Diseñamos e implementamos",
        text: "Construimos la solución con las herramientas adecuadas para tu caso.",
      },
      {
        title: "Acompañamos",
        text: "Te apoyamos en su uso y su evolución, según el servicio contratado.",
      },
    ],
  },

  audience: {
    eyebrow: "Para quién",
    title: "Pensado para negocios de servicios",
    text: "Si recibes consultas, preparas cotizaciones o agendas citas, seguramente hay tareas que pueden funcionar solas.",
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
    title: "Tecnología moderna, al alcance de las pequeñas empresas",
    text: "Latina 768 Services es una empresa de Texas que ayuda a pequeñas empresas a usar inteligencia artificial y automatización de forma práctica. Explicamos en palabras simples, trabajamos contigo en español o en inglés y construimos soluciones a la medida de tu negocio.",
    missionTitle: "Misión",
    mission:
      "Facilitar que las pequeñas empresas usen inteligencia artificial y automatización de forma práctica, segura y a su medida.",
    visionTitle: "Visión",
    vision:
      "Ser el socio tecnológico de confianza para pequeñas empresas que quieren crecer sin un departamento de tecnología.",
    valuesTitle: "Valores",
    values: ["Claridad", "Integridad", "Cercanía", "Innovación práctica", "Compromiso"],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de lo que tu negocio necesita.",
    text: "Cuéntanos cómo trabajas hoy y te diremos qué se puede simplificar.",
    phoneLabel: "Llamar",
    emailLabel: "Escribir un correo",
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
        ia: "Inteligencia artificial para negocios",
        automatizacion: "Automatización de procesos",
        web: "Desarrollo web y soluciones digitales",
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
