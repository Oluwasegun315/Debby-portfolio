import Link from "next/link";
import { site } from "@/data/site";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "/my-work", label: "My Work" },
  { href: "/#packages", label: "Packages" },
  { href: "/#booking-faq", label: "Booking & FAQ" },
  { href: "/#pay-and-contact", label: "Pay Debby" },
  { href: "/faq", label: "Full FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl">
            {site.name}
            <span className="text-gold">.</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">{site.footerLine}</p>
          <p className="mt-4 text-sm text-white/55">{site.availability}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm text-gold hover:underline"
          >
            {site.email}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm text-gold hover:underline"
          >
            Message on WhatsApp
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 hover:text-white" prefetch>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.whatsapp} className="text-white/75 hover:text-white" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-white/75 hover:text-white">
                Gmail
              </a>
            </li>
            <li>
              <a
                href={site.fiverr}
                target="_blank"
                rel="noreferrer"
                className="text-white/75 hover:text-white"
              >
                Fiverr profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="bg-white/10" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/45 sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>{site.profession} · {site.availabilityShort}</p>
      </div>
    </footer>
  );
}
