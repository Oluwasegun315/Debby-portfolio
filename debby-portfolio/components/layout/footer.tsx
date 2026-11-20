import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import { workCategories } from "@/data/work-categories";
import { Button } from "@/components/ui/button";
import { FiverrIcon, WhatsAppIcon } from "@/components/icons/brand-icons";

const exploreLinks = [
  { href: "/my-work", label: "All work spaces" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Debby" },
  { href: "/testimonials", label: "Client reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const studios = workCategories.slice(0, 6);
  const whatsappText = encodeURIComponent(
    "Hi Debby, I checked your website and I would like to hire you for a design project."
  );

  return (
    <footer className="mt-auto border-t border-white/10 bg-[hsl(240_6%_6%)] text-white">
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(196,163,90,0.16),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Hire with confidence</p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              Design that looks intentional — and sells the story.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65">
              {site.experience} experience · {site.stats.projects} design pieces ·{" "}
              {site.responseTimeShort}. Pay by bank transfer, Opay, PalmPay or crypto.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild className="bg-gold text-charcoal hover:bg-gold/90">
              <a href={`${site.whatsapp}?text=${whatsappText}`} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Debby
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white hover:text-[hsl(240_6%_6%)]"
            >
              <Link href="/#pay-and-contact">Pay & contact</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white hover:text-[hsl(240_6%_6%)]"
            >
              <a href={site.fiverr} target="_blank" rel="noreferrer">
                <FiverrIcon className="h-4 w-4" />
                Fiverr
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-serif text-3xl tracking-tight">
            Debby
            <span className="text-gold">.</span>
          </p>
          <p className="mt-1 text-sm text-gold">{site.profession}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{site.footerLine}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-gold"
          >
            <Mail className="h-4 w-4 text-gold" />
            {site.email}
          </a>
          <p className="mt-3 text-xs text-white/45">{site.availability}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 transition hover:text-white"
                  prefetch
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Studios</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {studios.map((studio) => (
              <li key={studio.slug}>
                <Link
                  href={`/work/${studio.slug}`}
                  className="group inline-flex items-center gap-1 text-white/70 transition hover:text-white"
                  prefetch
                >
                  {studio.title}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/my-work" className="text-gold hover:underline" prefetch>
                View all {workCategories.length} work spaces
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Work with Debby</p>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>Clear briefs → polished delivery</li>
            <li>{site.revisions.roundsIncluded} revision rounds included</li>
            <li>Bank · Opay · PalmPay · Crypto</li>
            <li>No PayPal</li>
          </ul>
          <Button
            asChild
            className="mt-6 w-full bg-white text-[hsl(240_6%_6%)] hover:bg-white/90 sm:w-auto"
          >
            <Link href="/start-project">Start a project</Link>
          </Button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            {site.profession} · {site.availabilityShort} · {site.stats.clients} Fiverr rating
          </p>
        </div>
      </div>
    </footer>
  );
}
