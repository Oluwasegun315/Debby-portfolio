"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, MessageCircle, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { getHeroCollagePieces, workCategories } from "@/data/work-categories";
import { site } from "@/data/site";
import { FiverrIcon } from "@/components/icons/brand-icons";

const steps = [
  {
    icon: Eye,
    title: "Browse My Work",
    text: "Open the work hub and pick a category that matches your project.",
  },
  {
    icon: ShoppingBag,
    title: "Preview a design",
    text: "See the full visual, value and deliverables before you decide.",
  },
  {
    icon: MessageCircle,
    title: "Order Debby",
    text: "Hire on Fiverr, WhatsApp or Gmail — direct and simple.",
  },
];

export function HirePath() {
  const total = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);
  const previews = getHeroCollagePieces(3);

  return (
    <section className="relative overflow-hidden border-b brand-panel text-white">
      <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-gold">
            From browse to hire
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl sm:text-5xl">
            A clear path for buyers who are ready to order.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            No guessing. {total}+ real designs across {workCategories.length}{" "}
            work spaces — so clients can see Debby&apos;s quality and hire with
            confidence.
          </p>

          <div className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 border-l border-gold/50 pl-4">
                <step.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-gold/80">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
              <Link href="/my-work">
                Go to My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white hover:text-charcoal"
            >
              <a href={site.fiverr} target="_blank" rel="noreferrer">
                <FiverrIcon className="h-4 w-4" />
                Order on Fiverr
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-3">
            {previews.map((piece, index) => (
              <div
                key={piece.id}
                className={`relative overflow-hidden border border-white/15 ${
                  index === 1 ? "aspect-[16/9]" : "aspect-[21/9]"
                }`}
              >
                <Image
                  src={piece.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
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
