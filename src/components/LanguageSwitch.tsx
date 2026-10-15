"use client";

import { usePathname } from "next/navigation";

/**
 * Selector ES / EN. Solo se muestra cuando hay más de un idioma publicado
 * (se activa en la Fase 4 al agregar "en" en src/lib/site.ts).
 */
export function LanguageSwitch({
  locales,
  current,
  label,
}: {
  locales: readonly string[];
  current: string;
  label: string;
}) {
  const pathname = usePathname() || `/${current}`;
  if (locales.length < 2) return null;

  const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");

  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-line-strong p-[3px]">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <a
            key={locale}
            href={`/${locale}${rest}`}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={`flex min-h-9 items-center rounded-full px-3 text-[13px] font-bold uppercase ${
              active ? "bg-ink text-[#0a1230]" : "text-[#d6def0] hover:text-ink"
            }`}
          >
            {locale}
          </a>
        );
      })}
    </div>
  );
}
