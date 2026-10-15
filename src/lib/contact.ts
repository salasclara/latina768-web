/**
 * Validación del formulario de contacto.
 * Se usa igual en el navegador (para avisar al momento) y en el servidor
 * (que es la validación que realmente cuenta).
 */

export const SERVICE_IDS = ["ia", "automatizacion", "web", "otro"] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export type ContactInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export type ContactErrorCode =
  | "nameRequired"
  | "emailRequired"
  | "emailInvalid"
  | "phoneInvalid"
  | "serviceRequired"
  | "messageRequired"
  | "messageTooLong"
  | "tooLong";

export type ContactErrors = Partial<Record<keyof ContactInput, ContactErrorCode>>;

export const LIMITS = {
  name: 100,
  company: 120,
  email: 160,
  phone: 30,
  message: 2000,
} as const;

/** Tiempo mínimo (ms) entre que se muestra el formulario y se envía: frena robots. */
export const MIN_FILL_TIME_MS = 3000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,30}$/;

export function normalizeContact(raw: Record<string, unknown>): ContactInput {
  const s = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  return {
    name: s(raw.name),
    company: s(raw.company),
    email: s(raw.email).toLowerCase(),
    phone: s(raw.phone),
    service: s(raw.service),
    message: s(raw.message),
  };
}

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  if (!input.name) errors.name = "nameRequired";
  else if (input.name.length > LIMITS.name) errors.name = "tooLong";

  if (input.company.length > LIMITS.company) errors.company = "tooLong";

  if (!input.email) errors.email = "emailRequired";
  else if (input.email.length > LIMITS.email || !EMAIL_RE.test(input.email))
    errors.email = "emailInvalid";

  if (input.phone && !PHONE_RE.test(input.phone)) errors.phone = "phoneInvalid";

  if (!(SERVICE_IDS as readonly string[]).includes(input.service))
    errors.service = "serviceRequired";

  if (!input.message) errors.message = "messageRequired";
  else if (input.message.length > LIMITS.message) errors.message = "messageTooLong";

  return errors;
}

export function hasErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0;
}

/** Respuesta del servidor al formulario. */
export type ContactResponse =
  | { ok: true }
  | {
      ok: false;
      reason: "invalid" | "unavailable" | "failed" | "tooFast";
      errors?: ContactErrors;
    };
