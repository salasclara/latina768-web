"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/dictionaries/es";
import {
  LIMITS,
  SERVICE_IDS,
  hasErrors,
  normalizeContact,
  validateContact,
  type ContactErrors,
  type ContactInput,
  type ContactResponse,
} from "@/lib/contact";
import { Icon } from "./Icon";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const fieldClass =
  "min-h-12 w-full rounded-[10px] border bg-panel px-3.5 text-[15px] text-ink transition-colors focus:border-cyan focus:outline-none";

export function ContactForm({
  t,
  locale,
  email,
  phone,
  privacyHref,
}: {
  t: Dictionary["contact"];
  locale: string;
  email: string;
  phone: string;
  privacyHref: string;
}) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef<number>(0);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const fill = (template: string) => template.replace("{email}", email).replace("{phone}", phone);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const data: ContactInput = normalizeContact(raw);
    const found = validateContact(data);
    setErrors(found);

    if (hasErrors(found)) {
      setStatus({ kind: "error", message: t.status.fixErrors });
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: raw.website ?? "", startedAt: startedAt.current, locale }),
      });
      const body = (await res.json().catch(() => null)) as ContactResponse | null;

      if (res.ok && body?.ok) {
        setStatus({ kind: "success" });
        form.reset();
      } else if (body && !body.ok && body.reason === "invalid" && body.errors) {
        setErrors(body.errors);
        setStatus({ kind: "error", message: t.status.fixErrors });
      } else if (body && !body.ok && body.reason === "tooFast") {
        setStatus({ kind: "error", message: t.status.tooFast });
      } else if (body && !body.ok && body.reason === "unavailable") {
        setStatus({ kind: "error", message: fill(t.status.unavailable) });
      } else {
        setStatus({ kind: "error", message: fill(t.status.failed) });
      }
    } catch {
      setStatus({ kind: "error", message: fill(t.status.failed) });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const err = (field: keyof ContactInput) =>
    errors[field] ? (
      <p id={`${field}-error`} className="flex items-center gap-1.5 text-[13px] font-semibold text-[#ff9b9b]">
        <Icon name="alert" size={14} />
        {t.errors[errors[field]!]}
      </p>
    ) : null;

  const a11y = (field: keyof ContactInput) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  const border = (field: keyof ContactInput) => (errors[field] ? "border-[#ff7a7a]" : "border-line-strong");
  const f = t.form;
  const sending = status.kind === "sending";

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="grid min-w-0 flex-[1_1_520px] grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-4.5 rounded-3xl border border-line bg-card p-6 sm:p-10"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-name" className="text-sm font-bold">{f.name}</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required maxLength={LIMITS.name}
          placeholder={f.namePlaceholder} className={`${fieldClass} ${border("name")}`} {...a11y("name")} />
        {err("name")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-company" className="text-sm font-bold">{f.company}</label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" maxLength={LIMITS.company}
          placeholder={f.companyPlaceholder} className={`${fieldClass} ${border("company")}`} {...a11y("company")} />
        {err("company")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-email" className="text-sm font-bold">{f.email}</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={LIMITS.email}
          placeholder={f.emailPlaceholder} className={`${fieldClass} ${border("email")}`} {...a11y("email")} />
        {err("email")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-phone" className="text-sm font-bold">
          {f.phone} <span className="font-medium text-[#95a3c4]">{f.optional}</span>
        </label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" maxLength={LIMITS.phone}
          placeholder={f.phonePlaceholder} className={`${fieldClass} ${border("phone")}`} {...a11y("phone")} />
        {err("phone")}
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <label htmlFor="cf-service" className="text-sm font-bold">{f.service}</label>
        <select id="cf-service" name="service" required defaultValue=""
          className={`${fieldClass} ${border("service")}`} {...a11y("service")}>
          <option value="" disabled>{f.servicePlaceholder}</option>
          {SERVICE_IDS.map((id) => (
            <option key={id} value={id}>{f.serviceOptions[id]}</option>
          ))}
        </select>
        {err("service")}
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <label htmlFor="cf-message" className="text-sm font-bold">{f.message}</label>
        <textarea id="cf-message" name="message" rows={4} required maxLength={LIMITS.message}
          placeholder={f.messagePlaceholder}
          className={`${fieldClass} resize-y py-3 ${border("message")}`} {...a11y("message")} />
        {err("message")}
      </div>

      {/* Campo trampa contra robots: oculto para personas y lectores de pantalla */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-website">{f.honeypot}</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="col-span-full flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[340px] text-[13px] leading-normal text-[#95a3c4]">
          {f.consentPrefix}{" "}
          <a href={privacyHref} className="font-semibold text-link underline-offset-2 hover:underline">
            {f.consentLink}
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={sending}
          className="bg-brand min-h-[52px] rounded-xl px-7 text-base font-bold text-ink transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? f.sending : f.submit}
        </button>
      </div>

      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="col-span-full empty:hidden focus:outline-none">
        {status.kind === "success" && (
          <p className="flex items-start gap-2.5 rounded-xl border border-cyan/40 bg-cyan/10 px-4 py-3 text-[15px] font-semibold text-cyan-soft">
            <Icon name="check" size={18} className="mt-0.5 shrink-0" />
            {t.status.success}
          </p>
        )}
        {status.kind === "error" && (
          <p className="flex items-start gap-2.5 rounded-xl border border-[#ff7a7a]/50 bg-[#ff7a7a]/10 px-4 py-3 text-[15px] font-semibold text-[#ffb3b3]">
            <Icon name="alert" size={18} className="mt-0.5 shrink-0" />
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
