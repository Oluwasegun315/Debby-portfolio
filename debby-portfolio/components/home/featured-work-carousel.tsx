"use client";

import Link from "next/link";
import { ArrowRight, Layers, PenTool, Shapes } from "lucide-react";
import { getHomeFeaturedPieces, HOME_FEATURE_COUNT, workCategories } from "@/data/work-categories";
import { WorkPreviewCard } from "@/components/portfolio/work-preview-card";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedWorkCarousel() {
  const featured = getHomeFeaturedPieces(HOME_FEATURE_COUNT);
  const rowA = [...featured, ...featured];
  const rowB = [...featured.slice().reverse(), ...featured.slice().reverse()];

  return (
    <section id="featured-work" className="relative scroll-mt-24 overflow-hidden border-b bg-background">
      {/* Graphic design ornaments */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-8 top-16 text-gold/15">
          <Shapes className="h-28 w-28" />
        </div>
        <div className="absolute -right-6 bottom-20 text-gold/10">
          <PenTool className="h-24 w-24" />
        </div>
        <div className="absolute left-1/2 top-10 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                <Layers className="h-3.5 w-3.5" />
                Featured from every workspace
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                A taste of Debby&apos;s work
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {HOME_FEATURE_COUNT} designs from each workspace slide here first —
                then open My Work to explore the full collection and pick what you
                love.
              </p>
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/my-work">
                Open all work spaces
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {workCategories.map((category) => (
              <Badge key={category.id} variant="outline" className="border-gold/40 text-foreground">
                {category.title} · {HOME_FEATURE_COUNT} featured
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10 space-y-5 pb-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-16" />

        <div className="marquee-track">
          <div className="marquee-row marquee-left">
            {rowA.map((work, index) => (
              <div key={`${work.id}-home-a-${index}`} className="marquee-item">
                <WorkPreviewCard work={work} />
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-track hidden sm:block">
          <div className="marquee-row marquee-right">
            {rowB.map((work, index) => (
              <div key={`${work.id}-home-b-${index}`} className="marquee-item">
                <WorkPreviewCard work={work} />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm text-muted-foreground">
            Like something you see? Open its workspace to view every design in that
            collection.
          </p>
        </div>
      </div>
    </section>
  );
}
