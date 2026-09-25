"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { formatUsd, workCategories } from "@/data/work-categories";

export function WorkSpaces() {
  return (
    <section className="scroll-mt-24 border-b bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">My Work</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Work spaces</h2>
          <div className="mt-4 h-1 w-20 bg-gold" />
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Each workspace holds a full collection. Open any category to preview
            every design inside — then hire Debby when something clicks.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workCategories.map((category) => (
            <Reveal key={category.id}>
              <Link
                href={`/work/${category.slug}`}
                className="group relative block overflow-hidden border border-border/80 bg-secondary/40 transition duration-500 hover:-translate-y-1 hover:border-gold/60"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={category.cover}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">
                      {category.eyebrow}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/80">
                      {category.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <Badge className="bg-gold text-charcoal hover:bg-gold">
                        {category.pieceCount} designs
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-white/40 text-white"
                      >
                        From {formatUsd(category.fromPriceUsd)}
                      </Badge>
                      <span className="ml-auto inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-gold">
                        Open
                        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
