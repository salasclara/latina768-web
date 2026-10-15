import { getDictionary, getLocale } from "@/lib/i18n";
import { Icon, type IconName } from "./Icon";
import { Container, Eyebrow, SectionTitle, accents, stepColors } from "./ui";

/* ---------------------------------------------------------------- Soluciones */

export async function Solutions() {
  const t = (await getDictionary()).solutions;
  const numberColors = ["text-cyan", "text-[#3b9bff]", "text-[#6b8bff]", "text-[#8e86ff]", "text-violet-soft"];

  return (
    <section id="soluciones" aria-labelledby="soluciones-title" className="border-t border-[#111b3a] bg-navy py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex max-w-[700px] flex-col gap-3.5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionTitle id="soluciones-title">{t.title}</SectionTitle>
          <p className="text-lg leading-relaxed text-muted">{t.intro}</p>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4">
          {t.items.map((item, i) => (
            <li key={item.title} className="flex flex-col gap-3 rounded-[18px] border border-line bg-card p-6">
              <span className={`font-display text-sm font-extrabold ${numberColors[i % numberColors.length]}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[19px] font-bold leading-tight">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-subtle">{item.problem}</p>
              <p className="mt-auto border-t border-line pt-3.5 text-sm font-semibold leading-normal">{item.answer}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- Servicios */

const serviceIcons: IconName[] = ["sparkles", "flow", "code"];

export async function Services() {
  const t = (await getDictionary()).services;
  const home = `/${await getLocale()}`;

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="bg-night py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <SectionTitle id="servicios-title">{t.title}</SectionTitle>
          </div>
          <p className="max-w-[430px] text-[17px] leading-relaxed text-muted">{t.intro}</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {t.items.map((s, i) => {
            const a = accents[i % accents.length];
            return (
              <article
                key={s.id}
                className="relative flex flex-col gap-4.5 overflow-hidden rounded-[22px] border border-line bg-card p-7 sm:p-8"
              >
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${a.bar}`} />
                <span className={`flex h-[54px] w-[54px] items-center justify-center rounded-[14px] border ${a.soft} ${a.text}`}>
                  <Icon name={serviceIcons[i]} size={26} strokeWidth={1.9} />
                </span>
                <h3 className="font-display text-[21px] font-bold tracking-[-0.015em]">{s.title}</h3>
                <p className="text-base leading-relaxed text-subtle">{s.text}</p>
                <ul className="flex flex-col gap-2.5 text-[15px] font-semibold text-[#e6ebf7]">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <Icon name="check" size={18} strokeWidth={2.4} className={`mt-0.5 shrink-0 ${a.text}`} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${home}#contacto`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[15px] font-bold text-link hover:text-cyan-soft"
                >
                  {t.cta}
                  <Icon name="arrowRight" size={16} />
                  <span className="sr-only">: {s.title}</span>
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- Cómo trabajamos */

export async function Process() {
  const t = (await getDictionary()).process;

  return (
    <section id="proceso" aria-labelledby="proceso-title" className="border-y border-[#111b3a] bg-navy py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex max-w-[660px] flex-col gap-3.5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionTitle id="proceso-title">{t.title}</SectionTitle>
        </div>
        <div>
          <div aria-hidden="true" className="bg-brand-line h-0.5 rounded opacity-80" />
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6">
            {t.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2.5 pt-6">
                <span className={`font-display text-[34px] font-extrabold leading-none ${stepColors[i]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-subtle">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Para quién */

export async function Audience() {
  const t = (await getDictionary()).audience;

  return (
    <section aria-labelledby="audiencia-title" className="bg-night py-20">
      <Container className="flex flex-wrap items-center gap-12">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 id="audiencia-title" className="font-display text-[clamp(28px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em]">
            {t.title}
          </h2>
          <p className="text-[17px] leading-relaxed text-muted">{t.text}</p>
        </div>
        <ul className="flex min-w-0 flex-[1_1_480px] flex-wrap gap-3">
          {t.sectors.map((s) => (
            <li key={s} className="rounded-full border border-[#22305c] bg-card px-5 py-3.5 text-[15px] font-bold">
              {s}
            </li>
          ))}
          <li className="rounded-full border border-cyan/40 bg-cyan/[0.08] px-5 py-3.5 text-[15px] font-bold text-cyan-soft">
            {t.other}
          </li>
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ Nosotros */

export async function About() {
  const t = (await getDictionary()).about;

  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="border-t border-[#111b3a] bg-navy py-20 sm:py-24">
      <Container className="flex flex-wrap items-start gap-14">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4.5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionTitle id="nosotros-title">{t.title}</SectionTitle>
          <p className="text-[17px] leading-[1.65] text-muted">{t.text}</p>
        </div>
        <div className="grid min-w-0 flex-[1_1_520px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          <div className="flex flex-col gap-2.5 rounded-[18px] border border-line bg-card p-6">
            <h3 className="text-[17px] font-extrabold text-cyan">{t.missionTitle}</h3>
            <p className="text-[15px] leading-relaxed text-subtle">{t.mission}</p>
          </div>
          <div className="flex flex-col gap-2.5 rounded-[18px] border border-line bg-card p-6">
            <h3 className="text-[17px] font-extrabold text-blue-soft">{t.visionTitle}</h3>
            <p className="text-[15px] leading-relaxed text-subtle">{t.vision}</p>
          </div>
          <div className="col-span-full flex flex-col gap-3.5 rounded-[18px] border border-line bg-card p-6">
            <h3 className="text-[17px] font-extrabold text-violet-soft">{t.valuesTitle}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {t.values.map((v) => (
                <li key={v} className="rounded-[10px] bg-chip px-4 py-2.5 text-[15px] font-bold">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
