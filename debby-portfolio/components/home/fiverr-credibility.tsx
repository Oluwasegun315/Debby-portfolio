"use client";

import { Award, BadgeCheck, Briefcase, Star } from "lucide-react";
import { site } from "@/data/site";
import { workCategories } from "@/data/work-categories";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiverrIcon } from "@/components/icons/brand-icons";

export function FiverrCredibility() {
  const total = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);

  return (
    <section id="fiverr-proof" className="border-b bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Real designer · Real proof
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl">
            Not a random portfolio — Debby has presence.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Debby Tella is an experienced graphic designer with {site.experience.toLowerCase()}{" "}
            of craft. Her live Fiverr profile (<strong className="text-foreground">yemisi4</strong>)
            proves she is not a random portfolio — real orders, real buyers, real delivery. The
            workspaces on this site show the designs she can do.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Briefcase,
              title: `${site.experience}`,
              text: "Hands-on graphic design experience delivering client-ready visuals.",
            },
            {
              icon: Award,
              title: `${total}+ designs`,
              text: `Across ${workCategories.length} work spaces — proof of range, not one style only.`,
            },
            {
              icon: BadgeCheck,
              title: "Fiverr · yemisi4",
              text: "A live Fiverr personality buyers can check — real orders, real delivery.",
            },
            {
              icon: Star,
              title: "4.9★ rating",
              text: "Verified Fiverr buyers praise turnaround, detail and work they come back for.",
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="h-full border border-border bg-background p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold/15 text-gold">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col gap-5 border border-gold/30 bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <Badge className="bg-gold text-charcoal hover:bg-gold">Verified presence</Badge>
              <p className="mt-3 max-w-xl font-serif text-2xl sm:text-3xl">
                See Debby&apos;s Fiverr profile — then hire from this site your way.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fiverr shows she is an active designer. This website shows the full depth of
                her work and makes direct hiring easy.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:min-w-[220px]">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={site.fiverr} target="_blank" rel="noreferrer">
                  <FiverrIcon className="h-4 w-4" />
                  Open Fiverr · yemisi4
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/my-work">Browse full work spaces</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
