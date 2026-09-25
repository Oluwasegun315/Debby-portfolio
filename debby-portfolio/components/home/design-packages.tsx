"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { formatUsd } from "@/data/work-categories";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";

export function DesignPackages() {
  return (
    <section id="packages" className="border-b bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Packages</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Clear packages. Easy to start.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Pick a starting point. Custom projects are welcome too — Debby replies
            within 4–5 hours.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {site.packages.map((pack) => (
            <Reveal key={pack.id}>
              <div
                className={`flex h-full flex-col border bg-background p-6 ${
                  "featured" in pack && pack.featured
                    ? "border-gold shadow-[0_20px_50px_rgba(28,28,30,0.08)]"
                    : "border-border"
                }`}
              >
                {"featured" in pack && pack.featured ? (
                  <Badge className="mb-4 w-fit bg-gold text-charcoal hover:bg-gold">
                    <Sparkles className="mr-1 h-3.5 w-3.5" />
                    Most chosen
                  </Badge>
                ) : (
                  <div className="mb-4 h-6" />
                )}
                <h3 className="font-serif text-3xl">{pack.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pack.idealFor}</p>
                <p className="mt-6 font-serif text-4xl text-gold">
                  From {formatUsd(pack.priceFrom)}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-2">
                  <HireDebbyButton
                    projectTitle={pack.name}
                    fullWidth
                    className="justify-center"
                  />
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/#pay-and-contact">See payment options</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
