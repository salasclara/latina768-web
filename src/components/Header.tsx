import Image from "next/image";
import logo from "@/assets/logo-horizontal.png";
import { getDictionary, getLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";

export async function Header() {
  const t = await getDictionary();
  const locale = await getLocale();
  const home = `/${locale}`;

  const links = [
    { href: `${home}#soluciones`, label: t.nav.solutions },
    { href: `${home}#servicios`, label: t.nav.services },
    { href: `${home}#proceso`, label: t.nav.process },
    ...(site.showProjects ? [{ href: `${home}#proyectos`, label: t.nav.projects }] : []),
    { href: `${home}#nosotros`, label: t.nav.about },
    { href: `${home}#contacto`, label: t.nav.contact },
  ];
  const cta = { href: `${home}#contacto`, label: t.nav.cta };

  return (
    <header className="sticky top-0 z-50 border-b border-[#141e3d] bg-night/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-6">
        <a href={home} aria-label={t.nav.home} className="flex shrink-0 items-center">
          <Image src={logo} alt="Latina 768 Services" priority className="h-10 w-auto sm:h-12" sizes="180px" />
        </a>

        <nav aria-label={t.nav.label} className="hidden items-center gap-7 text-[15px] font-semibold lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[#d6def0] transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch locales={site.locales} current={locale} label={t.nav.language} />
          <a
            href={cta.href}
            className="bg-brand hidden min-h-11 items-center rounded-[10px] px-5 text-[15px] font-bold text-ink sm:inline-flex"
          >
            {cta.label}
          </a>
          <MobileMenu links={links} cta={cta} openLabel={t.nav.openMenu} closeLabel={t.nav.closeMenu} />
        </div>
      </div>
    </header>
  );
}
