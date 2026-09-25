"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, MessageCircle, Zap } from "lucide-react";
import { site } from "@/data/site";
import { getHeroCollagePieces, workCategories } from "@/data/work-categories";
import { Button } from "@/components/ui/button";
import { FiverrIcon } from "@/components/icons/brand-icons";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import { Reveal } from "@/components/motion/reveal";

const reasons = [
  {
    icon: Zap,
    title: "Ready to hire in minutes",
    text: "Browse a full workspace, preview the exact design, then message Debby on WhatsApp, Gmail or Fiverr.",
  },
  {
    icon: CheckCircle2,
    title: "Real delivered work",
    text: "Social media, Canva templates, PowerPoint, presentation and ebook designs from real collections.",
  },
  {
    icon: MessageCircle,
    title: "Direct designer access",
    text: "Talk straight to Debby. Clear communication, careful revisions, and files ready for your next launch.",
  },
];

export function ConversionShowcase() {
  const reduce = useReducedMotion();
  const collage = getHeroCollagePieces(4);
  const total = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);

  return (
    <section className="relative overflow-hidden border-y">
      <div className="brand-panel absolute inset-0" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-gold">
            Why buyers choose Debby
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            A portfolio built to convert — not just to look pretty.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Open a workspace. See the full set. Preview details and pricing. Then
            hire in one click. Every step is designed so serious buyers can decide
            fast.
          </p>

          <div className="mt-8 space-y-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex gap-4 border-l border-gold/50 pl-4"
              >
                <reason.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-serif text-xl text-white">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
              <Link href="/my-work">Browse work spaces</Link>
            </Button>
            <HireDebbyButton className="h-12 whitespace-nowrap border-white/35 bg-transparent px-6 text-white hover:bg-white hover:text-charcoal" />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="whitespace-nowrap border-white/35 bg-transparent text-white hover:bg-white hover:text-charcoal"
            >
              <a href={site.fiverr} target="_blank" rel="noreferrer">
                <FiverrIcon className="h-4 w-4" />
                Order on Fiverr
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {collage.map((piece, index) => (
                <motion.div
                  key={piece.id}
                  className={`relative overflow-hidden border border-white/15 ${
                    index === 0 || index === 3 ? "aspect-[4/5]" : "aspect-square"
                  }`}
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Image
                    src={piece.src}
                    alt={piece.title}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </motion.div>
              ))}
            </div>
            <div className="absolute -bottom-5 left-1/2 w-[90%] -translate-x-1/2 border border-gold/40 bg-charcoal/95 px-5 py-4 text-center backdrop-blur-md">
              <p className="font-serif text-3xl text-gold">{total}+ designs</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                Across {workCategories.length} work spaces · ready to preview
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
