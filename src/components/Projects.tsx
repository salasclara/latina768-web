import Image from "next/image";
import { getDictionary, getLocale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { Container, Eyebrow, SectionTitle } from "./ui";

const kindStyles = {
  client: "bg-cyan/10 text-cyan-soft",
  own: "bg-violet/15 text-violet-soft",
  lab: "bg-chip text-muted",
} as const;

/** Se muestra solo si site.showProjects es true y hay proyectos cargados. */
export async function Projects() {
  if (!site.showProjects || projects.length === 0) return null;
  const t = (await getDictionary()).projects;
  const locale = await getLocale();

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="bg-night py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex max-w-[660px] flex-col gap-3.5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionTitle id="proyectos-title">{t.title}</SectionTitle>
          <p className="text-lg leading-relaxed text-muted">{t.intro}</p>
        </div>
        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.id} className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-card">
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={720}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-video w-full border-b border-line object-cover object-top"
                />
              )}
              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  <span className={`rounded-full px-2.5 py-1 ${kindStyles[p.kind]}`}>{t.kinds[p.kind]}</span>
                  {p.categories.map((c) => (
                    <span key={c} className="rounded-full bg-chip px-2.5 py-1 text-muted">
                      {t.categories[c]}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="text-sm text-muted">{p.subtitle[locale]}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-soft">{t.challengeLabel}</p>
                  <p className="text-[15px] leading-relaxed text-subtle">{p.challenge[locale]}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-soft">{t.workLabel}</p>
                  <ul className="flex flex-col gap-2">
                    {p.work[locale].map((w) => (
                      <li key={w} className="flex gap-2.5 text-[15px] leading-relaxed text-subtle">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="mt-auto inline-flex items-center gap-2 self-start pt-2 text-sm font-bold text-cyan-soft hover:text-ink"
                  >
                    {t.visit}
                    <Icon name="arrowRight" className="size-4" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
