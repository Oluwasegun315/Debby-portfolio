"use client";

import { ExternalLink } from "lucide-react";
import { getShowcaseWorks } from "@/data/works";
import { site } from "@/data/site";
import { WorkPreviewCard } from "@/components/portfolio/work-preview-card";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { FiverrIcon } from "@/components/icons/brand-icons";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";

export function WorkShowcase() {
  const selected = getShowcaseWorks();
  const loop = [...selected, ...selected];

  return (
    <section id="my-work" className="overflow-hidden border-y bg-background">
      <div className="border-b bg-charcoal text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
              <FiverrIcon className="h-4 w-4" />
              Hire Debby on Fiverr
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Open Debby&apos;s Fiverr profile to see live gigs, delivered work and buyer reviews —
              then order directly from there.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="gold">
              <a href={site.fiverr} target="_blank" rel="noreferrer">
                <FiverrIcon className="h-4 w-4" />
                Open Fiverr Profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <HireDebbyButton className="h-12 border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-charcoal" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Portfolio gallery</p>
          <h2 className="mt-4 font-serif text-4xl leading-none sm:text-6xl">My Work</h2>
          <div className="mt-5 h-px w-24 bg-gold" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Scroll through selected designs Debby has created. The gallery keeps moving like a
            fashion runway — click any piece you like to open the full preview, price and contact
            options.
          </p>
        </Reveal>
      </div>

      <div className="relative pb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-16" />

        <div className="marquee-track group">
<div className="marquee-row marquee-left">
          {loop.map((work, index) => (
            <div key={`${work.id}-${index}`} className="marquee-item">
              <WorkPreviewCard work={work} />
            </div>
          ))}
        </div>
        </div>
        <p className="mt-5 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Keeps sliding · Click any design to pause and preview
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6">
        <Reveal>
          <div className="border border-border bg-secondary/40 p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl">Like what you see?</h3>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Message Debby on WhatsApp or Gmail, or open her Fiverr profile to order a design
                package.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 sm:mt-0">
              <Button asChild size="lg" variant="gold">
                <a href={site.fiverr} target="_blank" rel="noreferrer">
                  <FiverrIcon className="h-4 w-4" />
                  Open Fiverr profile
                </a>
              </Button>
              <HireDebbyButton />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
