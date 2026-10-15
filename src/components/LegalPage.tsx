import type { LegalDoc } from "@/content/legal-es";
import { getDictionary, getLocale } from "@/lib/i18n";
import { Container } from "./ui";

export async function LegalPage({ doc }: { doc: LegalDoc }) {
  const t = (await getDictionary()).legal;
  const locale = await getLocale();

  return (
    <section className="bg-glow py-16 sm:py-20">
      <Container className="max-w-[820px]">
        <a href={`/${locale}`} className="text-sm font-bold text-link hover:text-cyan-soft">
          ← {t.back}
        </a>
        <h1 className="font-display mt-6 text-[clamp(32px,4vw,46px)] font-extrabold leading-tight tracking-[-0.025em]">
          {doc.title}
        </h1>
        <p className="mt-3 text-sm text-faint">
          {t.updated}: {doc.updated}
        </p>
        <div className="mt-10 flex flex-col gap-9">
          {doc.sections.map((s) => (
            <section key={s.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className="text-base leading-[1.7] text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
