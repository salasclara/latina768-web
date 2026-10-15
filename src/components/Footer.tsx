import Image from "next/image";
import logo from "@/assets/logo-horizontal.png";
import { getDictionary, getLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function Footer() {
  const t = (await getDictionary()).footer;
  const locale = await getLocale();
  const year = 2026;

  return (
    <footer className="border-t border-[#141e3d] bg-night">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-7 px-5 py-11 sm:px-6">
        <div className="flex flex-wrap items-center gap-6">
          <Image src={logo} alt="Latina 768 Services" className="h-12 w-auto" sizes="180px" />
          <p className="max-w-[440px] text-[13px] leading-relaxed text-faint">{t.legal}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
          <a href={`/${locale}/privacidad`} className="text-muted hover:text-ink">{t.privacy}</a>
          <a href={`/${locale}/terminos`} className="text-muted hover:text-ink">{t.terms}</a>
          <a href={`mailto:${site.email}`} className="text-muted hover:text-ink">{site.email}</a>
          <span className="text-faint">© {year} {t.rights}</span>
        </div>
      </div>
    </footer>
  );
}
