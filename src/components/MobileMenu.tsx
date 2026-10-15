"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type Link = { href: string; label: string };

export function MobileMenu({
  links,
  cta,
  openLabel,
  closeLabel,
}: {
  links: Link[];
  cta: Link;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong text-ink"
      >
        <Icon name={open ? "close" : "menu"} size={22} />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-night px-5 pb-6 pt-2 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)]"
        >
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-[17px] font-semibold text-[#d6def0]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={cta.href}
            onClick={() => setOpen(false)}
            className="bg-brand mt-5 flex min-h-[52px] items-center justify-center rounded-xl text-base font-bold text-ink"
          >
            {cta.label}
          </a>
        </div>
      )}
    </div>
  );
}
