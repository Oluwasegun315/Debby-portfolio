"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { site } from "@/data/site";
import { workCategories } from "@/data/work-categories";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import { Reveal } from "@/components/motion/reveal";

export function OrderStrip() {
  const total = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);
  const whatsappText = encodeURIComponent(
    "Hi Debby, I like your work and want to hire you. Please share payment options."
  );

  return (
    <section className="relative overflow-hidden border-y brand-panel text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--gold)/0.22),transparent_40%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
            <ShoppingBag className="h-3.5 w-3.5" />
            Ready to hire
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
            Like what you see? Message Debby and pay your way.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
            {total}+ designs across {workCategories.length} work spaces. Pay by
            bank transfer, crypto or another method — no PayPal. Replies within
            4–5 hours.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-gold text-charcoal hover:bg-gold/90"
            >
              <a
                href={`${site.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Debby
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <HireDebbyButton className="h-12 whitespace-nowrap border-white/35 bg-transparent px-6 text-white hover:bg-white hover:text-charcoal" />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/35 bg-transparent text-white hover:bg-white hover:text-charcoal"
            >
              <Link href="/#pay-and-contact">Pay & contact</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
