"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { workCategories } from "@/data/work-categories";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function ExploreMagnet() {
  const featured = workCategories.slice(0, 4);

  return (
    <section className="border-b bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
            <Compass className="h-3.5 w-3.5" />
            Keep exploring
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl">
            Don&apos;t stop at one look — wander the studios.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Premium buyers explore before they hire. Open a workspace, preview the
            craft, feel the difference, then message IDOWU DEBORAH AYOKA (Debby Tella).
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featured.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05}>
              <Link
                href={`/work/${category.slug}`}
                className="group relative flex min-h-[220px] overflow-hidden border border-border bg-card transition duration-500 hover:border-gold/60"
              >
                <div className="relative w-[42%] min-w-[140px]">
                  <Image
                    src={category.cover}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="200px"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">
                      Studio {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                    Enter this studio
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/my-work">Explore all work spaces</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#pay-and-contact">Ready to hire Debby</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
