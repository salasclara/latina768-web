import {
  MIN_FILL_TIME_MS,
  hasErrors,
  normalizeContact,
  validateContact,
  type ContactInput,
  type ContactResponse,
} from "@/lib/contact";

/**
 * Recibe las solicitudes del formulario de contacto y las entrega.
 *
 * Destino (variables de entorno en Vercel → Settings → Environment Variables):
 *   GHL_WEBHOOK_URL     URL del "Webhook de entrada" de un workflow de GoHighLevel.
 *                       Destino principal: cada solicitud entra al CRM.
 *   RESEND_API_KEY +    Alternativa por correo (solo si no hay GHL_WEBHOOK_URL).
 *   CONTACT_TO_EMAIL
 *
 * Sin ningún destino configurado, el formulario responde "no disponible"
 * y NO finge un envío exitoso.
 */

const SERVICE_LABELS: Record<string, string> = {
  estrategia: "Estrategias digitales",
  automatizacion: "Automatización comercial",
  ia: "Integración de herramientas de IA",
  web: "Desarrollo web",
  otro: "Aún no lo sabe",
};

// Límite básico de envíos por IP (por instancia del servidor).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function json(body: ContactResponse, status: number) {
  return Response.json(body, { status });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmail(data: ContactInput, locale: string) {
  const rows: [string, string][] = [
    ["Nombre", data.name],
    ["Empresa", data.company || "—"],
    ["Correo", data.email],
    ["Teléfono", data.phone || "—"],
    ["Servicio de interés", SERVICE_LABELS[data.service] ?? data.service],
    ["Idioma de la página", locale],
  ];
  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMensaje:\n${data.message}`;
  const html = `
    <h2 style="font-family:sans-serif">Nueva solicitud desde latina768.com</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#555"><strong>${k}</strong></td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
    <p style="font-family:sans-serif;color:#555"><strong>Mensaje</strong></p>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(data.message)}</p>`;
  return { text, html };
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, reason: "invalid" }, 400);
  }

  // Campo trampa: las personas no lo ven; los robots lo completan.
  // Se descarta en silencio para no darle pistas al robot.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const startedAt = Number(raw.startedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || startedAt <= 0 || elapsed < MIN_FILL_TIME_MS || elapsed > 86_400_000) {
    return json({ ok: false, reason: "tooFast" }, 400);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return json({ ok: false, reason: "tooFast" }, 429);
  }

  const data = normalizeContact(raw);
  const errors = validateContact(data);
  if (hasErrors(errors)) {
    return json({ ok: false, reason: "invalid", errors }, 422);
  }

  const locale = typeof raw.locale === "string" ? raw.locale.slice(0, 5) : "es";

  const ghlUrl = process.env.GHL_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (ghlUrl) return deliver(() => sendToGhl(ghlUrl, data, locale), "GHL");
  if (resendKey && to) return deliver(() => sendWithResend(resendKey, to, data, locale), "Resend");

  console.error("[contact] Sin GHL_WEBHOOK_URL ni RESEND_API_KEY: formulario no disponible.");
  return json({ ok: false, reason: "unavailable" }, 503);
}

async function deliver(send: () => Promise<Response>, provider: string) {
  try {
    const res = await send();
    if (!res.ok) {
      console.error(`[contact] ${provider} respondió`, res.status, (await res.text()).slice(0, 500));
      return json({ ok: false, reason: "failed" }, 502);
    }
  } catch (err) {
    console.error(`[contact] Error de red con ${provider}`, err);
    return json({ ok: false, reason: "failed" }, 502);
  }
  return json({ ok: true }, 200);
}

/** Envía la solicitud al Webhook de entrada de un workflow de GoHighLevel. */
function sendToGhl(url: string, data: ContactInput, locale: string) {
  const [firstName, ...rest] = data.name.split(/\s+/);
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: firstName,
      last_name: rest.join(" "),
      full_name: data.name,
      email: data.email,
      phone: data.phone,
      company_name: data.company,
      service: SERVICE_LABELS[data.service] ?? data.service,
      service_id: data.service,
      message: data.message,
      language: locale,
      source: "latina768.com",
      submitted_at: new Date().toISOString(),
    }),
  });
}

/** Alternativa: envía la solicitud por correo con Resend. */
function sendWithResend(apiKey: string, to: string, data: ContactInput, locale: string) {
  const from = process.env.CONTACT_FROM_EMAIL || "Latina 768 Web <onboarding@resend.dev>";
  const { text, html } = buildEmail(data, locale);
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Nueva solicitud: ${data.name}${data.company ? ` (${data.company})` : ""}`,
      text,
      html,
    }),
  });
}
