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
| Teléfono, correo, dominio, idiomas, mostrar/ocultar Proyectos | `src/lib/site.ts` |
| Textos del sitio | `src/dictionaries/es.ts` · `src/dictionaries/en.ts` |
| Textos legales (borradores) | `src/content/legal-es.ts` · `legal-en.ts` |
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

Rutas `/es/…` (principal) y `/en/…`, con selector ES / EN en el encabezado.
Textos en `src/dictionaries/es.ts` y `en.ts` (misma estructura; TypeScript avisa si
falta una clave). Legales en `src/content/legal-es.ts` y `legal-en.ts`.

## SEO

Metadatos y Open Graph por idioma, `sitemap.xml`, `robots.txt` y datos
estructurados (schema.org). En las URL de prueba de Vercel `robots.txt`
bloquea la indexación; solo producción se indexa.

## Infraestructura — reglas

No modificar nameservers, registros MX/SPF/DKIM/DMARC de Hostinger, ni el
subdominio `seguros.latina768.com` (GoHighLevel). El dominio principal se conecta
solo con autorización expresa, después de revisar los registros DNS actuales.
