import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Container, Eyebrow, SectionTitle } from "./ui";

/** Se muestra solo si site.showProjects es true y hay proyectos cargados. */
export async function Projects() {
  if (!site.showProjects || projects.length === 0) return null;
  const t = (await getDictionary()).projects;

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="bg-night py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex max-w-[660px] flex-col gap-3.5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionTitle id="proyectos-title">{t.title}</SectionTitle>
          <p className="text-lg leading-relaxed text-muted">{t.intro}</p>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
          {projects.map((p) => (
            <li key={p.title} className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-card">
              {p.image && (
                <Image src={p.image} alt="" width={640} height={360} className="aspect-video w-full object-cover" />
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-cyan-soft">{t.categories[p.category]}</span>
                  <span className="rounded-full bg-chip px-2.5 py-1 text-muted">{p.kind}</span>
                </div>
                <h3 className="font-display text-xl font-bold">
                  {p.href ? (
                    <a href={p.href} className="hover:text-cyan-soft">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="text-[15px] leading-relaxed text-subtle">{p.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
