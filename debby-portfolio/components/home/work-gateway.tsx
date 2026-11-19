"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { workCategories } from "@/data/work-categories";

export function WorkGateway() {
  const total = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);
  const previews = workCategories.slice(0, 4).map((c) => c.cover);

  return (
    <section className="border-b bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
            <LayoutGrid className="h-3.5 w-3.5" />
            Portfolio
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
            Check all my work
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Every design lives in My Work — Social Media, Canva, Magazine, Mural, Stained Glass,
            PowerPoint, Presentation Design and Ebook Cover Design. Open the hub,
            pick a workspace, then preview and order.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">
            {total}+ pieces · {workCategories.length} work spaces
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/my-work">
              Go to My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-2 gap-3">
            {previews.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden border border-border/70 ${
                  index % 2 === 0 ? "aspect-[4/5]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 240px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
