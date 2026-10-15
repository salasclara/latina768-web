# Latina 768 Services — sitio web corporativo

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4. Pensado para publicarse en Vercel.

## Trabajar en local

```bash
npm install
npm run dev        # http://localhost:3000 → redirige a /es
npm run build      # compilación de producción
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Teléfono, correo, dominio, idiomas publicados, mostrar/ocultar Proyectos | `src/lib/site.ts` |
| Todos los textos del sitio (español) | `src/dictionaries/es.ts` |
| Textos legales (borradores) | `src/content/legal-es.ts` |
| Proyectos y demostraciones | `src/lib/projects.ts` |
| Colores y degradados de la marca | `src/app/globals.css` (`@theme`) |
| Logotipo | `src/assets/logo-horizontal.png` · íconos en `src/app/icon.png` y `apple-icon.png` |

## Formulario de contacto

`POST /api/contact` valida los datos en el servidor, descarta robots (campo trampa,
tiempo mínimo de llenado y límite por IP) y envía la solicitud por correo con
[Resend](https://resend.com). Variables necesarias en Vercel (ver `.env.example`):

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (p. ej. contacto@latina768.com)
- `CONTACT_FROM_EMAIL` (opcional)

Sin estas variables el formulario muestra un mensaje honesto de "no disponible"
con el teléfono y el correo. Nunca simula un envío exitoso.

## Idiomas

Rutas `/es/…` (y `/en/…` desde la Fase 4). Para activar inglés:
1. Crear `src/dictionaries/en.ts` con la misma estructura que `es.ts`.
2. Registrarlo en `src/lib/i18n.ts`.
3. Agregar `"en"` a `locales` en `src/lib/site.ts` (aparece el selector ES / EN).
4. Agregar las versiones en inglés de los textos legales.

## SEO

Metadatos y Open Graph por idioma, `sitemap.xml`, `robots.txt` y datos
estructurados (schema.org). En las URL de prueba de Vercel `robots.txt`
bloquea la indexación; solo producción se indexa.

## Infraestructura — reglas

No modificar nameservers, registros MX/SPF/DKIM/DMARC de Hostinger, ni el
subdominio `seguros.latina768.com` (GoHighLevel). El dominio principal se conecta
solo con autorización expresa, después de revisar los registros DNS actuales.
