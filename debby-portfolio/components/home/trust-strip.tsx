"use client";

import Link from "next/link";
import { Clock3, ShieldCheck, Star } from "lucide-react";
import { site } from "@/data/site";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function TrustStrip() {
  const quotes = getFeaturedTestimonials().slice(0, 3);

  return (
    <section className="border-b bg-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid gap-6 border border-border bg-secondary/40 p-6 sm:grid-cols-3 sm:p-8">
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold">
                <ShieldCheck className="h-4 w-4" />
                Buyer trust
              </p>
              <p className="mt-3 font-serif text-3xl">{site.stats.projects}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {site.stats.projectsLabel}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold">
                <Clock3 className="h-4 w-4" />
                Fast replies
              </p>
              <p className="mt-3 font-serif text-3xl">4–5 hrs</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Not up to 24 hours — Debby replies quickly.
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold">
                <Star className="h-4 w-4" />
                Real reviews
              </p>
              <p className="mt-3 font-serif text-3xl">5.0 style praise</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Buyers come back for upgrades and new projects.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {quotes.map((quote) => (
            <Reveal key={quote.id}>
              <blockquote className="h-full border border-border bg-card p-5">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: quote.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  “{quote.quote}”
                </p>
                <footer className="mt-4 text-xs text-muted-foreground">
                  {quote.name} · {quote.projectType}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/testimonials">Read all testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
