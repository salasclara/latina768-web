import { getDictionary, getLocale } from "@/lib/i18n";
import { Icon, type IconName } from "./Icon";

const flowStyles: { icon: IconName; box: string; color: string; line: string }[] = [
  { icon: "target", box: "bg-cyan/10 border border-cyan/35", color: "text-cyan", line: "from-cyan to-electric" },
  { icon: "code", box: "bg-electric/15 border border-electric/45", color: "text-blue-soft", line: "from-electric to-indigo" },
  { icon: "flow", box: "bg-indigo/15 border border-indigo/45", color: "text-[#8e86ff]", line: "from-indigo to-violet" },
  { icon: "sparkles", box: "bg-brand", color: "text-ink", line: "" },
];

export async function Hero() {
  const t = await getDictionary();
  const home = `/${await getLocale()}`;
  const h = t.hero;

  return (
    <section id="inicio" aria-labelledby="hero-title" className="bg-glow">
      <div className="bg-grid">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-5 pb-24 pt-16 sm:px-6 sm:pt-24">
          <div className="flex min-w-0 flex-[1_1_500px] flex-col gap-7">
            <span className="inline-flex items-center gap-2.5 self-start rounded-full border border-cyan/35 bg-cyan/[0.08] px-3.5 py-2 text-[13px] font-bold tracking-[0.03em] text-cyan-soft">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_#19d4f0]" />
              {h.badge}
            </span>

            <h1
              id="hero-title"
              className="font-display text-[clamp(38px,5.2vw,64px)] font-extrabold leading-[1.06] tracking-[-0.03em]"
            >
              {h.titleLead} <span className="text-gradient">{h.titleAccent}</span>
            </h1>

            <p className="max-w-[560px] text-lg leading-relaxed text-muted sm:text-xl">{h.subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`${home}#contacto`}
                className="bg-brand inline-flex min-h-[54px] items-center rounded-xl px-7 text-base font-bold text-ink shadow-[0_10px_30px_-10px_rgba(47,107,255,0.7)] transition hover:brightness-110"
              >
                {h.primaryCta}
              </a>
              <a
                href={`${home}#servicios`}
                className="inline-flex min-h-[54px] items-center rounded-xl border-[1.5px] border-[#3a4c80] px-7 text-base font-bold text-ink transition hover:border-cyan"
              >
                {h.secondaryCta}
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-muted">
              {h.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Icon name="check" size={18} strokeWidth={2.2} className="text-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <figure className="m-0 flex min-w-0 flex-[1_1_420px] flex-col gap-3.5">
            <div className="border-gradient rounded-[22px] p-px shadow-[0_30px_80px_-30px_rgba(47,107,255,0.55)]">
              <div className="rounded-[21px] bg-panel p-6 sm:p-7">
                <div className="mb-5 flex items-center justify-between gap-3 border-b border-line pb-4">
                  <span className="text-sm font-bold">{h.flow.title}</span>
                  <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-xs font-bold text-cyan-soft">
                    {h.flow.tag}
                  </span>
                </div>
                <ol>
                  {h.flow.steps.map((step, i) => {
                    const s = flowStyles[i];
                    const last = i === h.flow.steps.length - 1;
                    return (
                      <li key={step.title} className="flex gap-3.5">
                        <div className="flex flex-col items-center">
                          <span className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl ${s.box} ${s.color}`}>
                            <Icon name={s.icon} />
                          </span>
                          {!last && (
                            <span aria-hidden="true" className={`min-h-[22px] w-0.5 flex-1 bg-gradient-to-b opacity-50 ${s.line}`} />
                          )}
                        </div>
                        <div className={last ? "" : "pb-5"}>
                          <p className="text-[15px] font-bold">{step.title}</p>
                          <p className="mt-0.5 text-[13px] text-[#95a3c4]">{step.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <figcaption className="text-center text-xs text-[#7f8db0]">{h.flow.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
