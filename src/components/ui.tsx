import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-gradient self-start text-[13px] font-extrabold uppercase tracking-[0.18em]">
      {children}
    </span>
  );
}

export function SectionTitle({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`font-display text-[clamp(30px,3.6vw,44px)] font-extrabold leading-[1.12] tracking-[-0.025em] text-ink ${className}`}
    >
      {children}
    </h2>
  );
}

/** Acentos por posición: turquesa → azul → índigo → violeta (el degradado de la marca). */
export const accents = [
  { text: "text-cyan", soft: "bg-cyan/10 border-cyan/35", bar: "from-cyan to-electric" },
  { text: "text-blue-soft", soft: "bg-electric/15 border-electric/45", bar: "from-electric to-indigo" },
  { text: "text-[#8e86ff]", soft: "bg-indigo/15 border-indigo/45", bar: "from-indigo to-violet" },
  { text: "text-violet-soft", soft: "bg-violet/15 border-violet/45", bar: "from-violet to-[#b04de8]" },
] as const;

export const stepColors = ["text-cyan", "text-[#3b8bff]", "text-[#6e7bff]", "text-violet-soft", "text-violet-soft"] as const;
