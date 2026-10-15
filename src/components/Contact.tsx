import { getDictionary, getLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Icon, type IconName } from "./Icon";
import { Eyebrow } from "./ui";

export async function Contact() {
  const dict = await getDictionary();
  const t = dict.contact;
  const locale = await getLocale();

  const items: { icon: IconName; label: string; href?: string; box: string; color: string; srLabel?: string }[] = [
    { icon: "phone", label: site.phone, href: site.phoneHref, box: "bg-cyan/10 border-cyan/35", color: "text-cyan", srLabel: t.phoneLabel },
    { icon: "mail", label: site.email, href: `mailto:${site.email}`, box: "bg-electric/12 border-electric/45", color: "text-blue-soft", srLabel: t.emailLabel },
    { icon: "pin", label: site.location, box: "bg-violet/13 border-violet/45", color: "text-violet-soft" },
  ];

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-glow py-20 sm:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-stretch gap-6 px-5 sm:px-6">
        <div className="border-gradient min-w-0 flex-[1_1_380px] rounded-3xl p-px">
          <div className="flex h-full flex-col gap-5 rounded-[23px] bg-panel p-8 sm:p-11">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2
              id="contacto-title"
              className="font-display text-[clamp(30px,3.4vw,40px)] font-extrabold leading-[1.12] tracking-[-0.025em]"
            >
              {t.title}
            </h2>
            <p className="text-base leading-relaxed text-muted">{t.text}</p>
            <ul className="mt-2 flex flex-col gap-3.5">
              {items.map((it) => {
                const inner = (
                  <>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${it.box} ${it.color}`}>
                      <Icon name={it.icon} />
                    </span>
                    {it.srLabel && <span className="sr-only">{it.srLabel}: </span>}
                    <span className="break-all sm:break-normal">{it.label}</span>
                  </>
                );
                return (
                  <li key={it.label}>
                    {it.href ? (
                      <a href={it.href} className="flex min-h-11 items-center gap-3.5 text-base font-semibold hover:text-cyan-soft">
                        {inner}
                      </a>
                    ) : (
                      <span className="flex min-h-11 items-center gap-3.5 text-base font-semibold">{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ContactForm
          t={t}
          locale={locale}
          email={site.email}
          phone={site.phone}
          privacyHref={`/${locale}/privacidad`}
        />
      </div>
    </section>
  );
}
