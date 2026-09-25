"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workCategories } from "@/data/work-categories";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";

export function SignatureCaseStudy() {
  const category = workCategories[0];
  const images = category?.pieces.slice(0, 3) ?? [];

  if (!category || images.length === 0) return null;

  return (
    <section id="case-study" className="border-b brand-panel py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <Badge className="border-gold/40 bg-white/10 text-gold hover:bg-white/10">
            Signature case study
          </Badge>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            From brief to brand-ready visuals.
          </h2>
          <p className="mt-4 text-white/75">
            A focused look at how Debby turns a simple request into polished
            {` ${category.title.toLowerCase()} `}
            work — clear hierarchy, strong color and files ready to use.
          </p>

          <dl className="mt-8 space-y-4 border-t border-white/15 pt-6 text-sm">
            <div>
              <dt className="text-gold">Challenge</dt>
              <dd className="mt-1 text-white/80">
                The brand needed visuals that felt premium and easy to understand
                at a glance — without looking crowded or generic.
              </dd>
            </div>
            <div>
              <dt className="text-gold">Approach</dt>
              <dd className="mt-1 text-white/80">
                Strong title hierarchy, intentional color, and layouts built for
                real platforms and real buyers.
              </dd>
            </div>
            <div>
              <dt className="text-gold">Result</dt>
              <dd className="mt-1 text-white/80">
                Clean, commercial designs that look ready to post, present or
                sell — and make clients want more from the same workspace.
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-gold text-charcoal hover:bg-gold/90">
              <Link href={`/work/${category.slug}`}>
                Open this workspace
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <HireDebbyButton className="border-white/35 bg-transparent text-white hover:bg-white hover:text-charcoal" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/15 sm:row-span-2">
              <Image
                src={images[0].src}
                alt={images[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            {images.slice(1).map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden border border-white/15"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
