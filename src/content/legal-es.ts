/**
 * BORRADORES de los textos legales, preparados para revisión.
 * No constituyen asesoría legal. Revísalos antes de publicar el sitio.
 * Los textos entre [corchetes] deben completarse.
 */

export type LegalDoc = {
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const privacyEs: LegalDoc = {
  title: "Política de privacidad",
  description: "Cómo Latina 768 Services recopila, usa y protege la información que nos compartes.",
  updated: "[fecha de publicación]",
  sections: [
    {
      heading: "Quiénes somos",
      paragraphs: [
        "Latina 768 Services es un nombre comercial (DBA) de Latina Realty Investment LLC, empresa constituida en Texas, Estados Unidos. En esta política, “nosotros” se refiere a Latina 768 Services.",
      ],
    },
    {
      heading: "Información que recopilamos",
      paragraphs: [
        "Cuando completas el formulario de contacto, recopilamos tu nombre, el nombre de tu empresa, tu correo electrónico, tu teléfono (si decides compartirlo), el servicio que te interesa y el mensaje que nos escribes.",
        "Como cualquier sitio web, nuestro proveedor de alojamiento puede registrar datos técnicos básicos, como la dirección IP, el tipo de navegador y la fecha de la visita, con fines de seguridad y funcionamiento.",
      ],
    },
    {
      heading: "Para qué usamos tu información",
      paragraphs: [
        "Usamos la información del formulario únicamente para responder tu solicitud, preparar una propuesta si la pides y dar seguimiento a la conversación.",
        "No vendemos ni alquilamos tu información personal a terceros.",
      ],
    },
    {
      heading: "Proveedores que nos ayudan",
      paragraphs: [
        "Para operar el sitio usamos proveedores de confianza, como el servicio de alojamiento web y el servicio que nos entrega por correo los mensajes del formulario. Estos proveedores solo procesan la información necesaria para prestar su servicio.",
      ],
    },
    {
      heading: "Cuánto tiempo conservamos la información",
      paragraphs: [
        "Conservamos los datos de contacto mientras sean necesarios para atender tu solicitud y mantener la relación comercial, o mientras lo exija la ley.",
      ],
    },
    {
      heading: "Tus opciones",
      paragraphs: [
        "Puedes pedirnos en cualquier momento que actualicemos o eliminemos la información que nos compartiste escribiéndonos a contacto@latina768.com.",
      ],
    },
    {
      heading: "Seguridad",
      paragraphs: [
        "Aplicamos medidas razonables para proteger tu información. Ningún sistema en internet es completamente seguro, por lo que te pedimos no enviar por el formulario datos sensibles como contraseñas o números de tarjetas.",
      ],
    },
    {
      heading: "Cambios a esta política",
      paragraphs: [
        "Podemos actualizar esta política. Publicaremos la versión vigente en esta página con su fecha de actualización.",
      ],
    },
    {
      heading: "Contacto",
      paragraphs: ["Si tienes preguntas sobre esta política, escríbenos a contacto@latina768.com o llámanos al (469) 322-9074."],
    },
  ],
};

export const termsEs: LegalDoc = {
  title: "Términos de uso",
  description: "Condiciones para usar el sitio web de Latina 768 Services.",
  updated: "[fecha de publicación]",
  sections: [
    {
      heading: "Aceptación",
      paragraphs: [
        "Al usar latina768.com aceptas estos términos. Si no estás de acuerdo con ellos, te pedimos no usar el sitio.",
      ],
    },
    {
      heading: "Sobre el contenido del sitio",
      paragraphs: [
        "La información de este sitio describe de forma general los servicios de Latina 768 Services. No constituye una oferta vinculante ni garantiza resultados específicos. Los alcances, plazos y precios de cada servicio se acuerdan por escrito con cada cliente.",
        "Los ejemplos de automatizaciones que aparecen en el sitio son ilustrativos.",
      ],
    },
    {
      heading: "Uso permitido",
      paragraphs: [
        "Te comprometes a usar el sitio y el formulario de contacto de forma lícita, sin enviar información falsa, contenido dañino ni mensajes automatizados no solicitados.",
      ],
    },
    {
      heading: "Propiedad intelectual",
      paragraphs: [
        "El nombre Latina 768 Services, el logotipo, los textos y los diseños de este sitio pertenecen a Latina Realty Investment LLC y no pueden usarse sin autorización previa por escrito.",
      ],
    },
    {
      heading: "Enlaces a otros sitios",
      paragraphs: [
        "El sitio puede incluir enlaces a sitios de terceros. No somos responsables de su contenido ni de sus prácticas de privacidad.",
      ],
    },
    {
      heading: "Limitación de responsabilidad",
      paragraphs: [
        "El sitio se ofrece “tal cual”. En la medida permitida por la ley, Latina 768 Services no será responsable por daños derivados del uso o de la imposibilidad de usar el sitio.",
      ],
    },
    {
      heading: "Ley aplicable",
      paragraphs: ["Estos términos se rigen por las leyes del estado de Texas, Estados Unidos."],
    },
    {
      heading: "Contacto",
      paragraphs: ["Para cualquier consulta sobre estos términos, escríbenos a contacto@latina768.com."],
    },
  ],
};
