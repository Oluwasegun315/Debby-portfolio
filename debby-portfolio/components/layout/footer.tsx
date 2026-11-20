import Link from "next/link";
import { site } from "@/data/site";
import { FiverrIcon, WhatsAppIcon } from "@/components/icons/brand-icons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[hsl(240_8%_5%)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <Link href="/" className="inline-block font-serif text-3xl tracking-tight" prefetch>
            Debby
            <span className="text-gold">.</span>
          </Link>
          <p className="mt-1 text-sm text-gold">{site.profession}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/55">
            {site.footerLine}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-sm text-white/80 transition duration-300 hover:border-gold/50 hover:bg-white/[0.04] hover:text-white"
            >
              <span className="text-gold transition group-hover:translate-x-0.5">✉</span>
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-sm text-white/80 transition duration-300 hover:border-gold/50 hover:bg-white/[0.04] hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4 text-gold transition group-hover:scale-110" />
              WhatsApp
            </a>
            <a
              href={site.fiverr}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-sm text-white/80 transition duration-300 hover:border-gold/50 hover:bg-white/[0.04] hover:text-white"
            >
              <FiverrIcon className="h-4 w-4 text-gold transition group-hover:scale-110" />
              Fiverr
            </a>
          </div>
          <p className="text-xs text-white/40">{site.availability}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            {site.profession} · {site.availabilityShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
