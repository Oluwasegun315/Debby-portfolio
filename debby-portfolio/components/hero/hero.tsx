"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { getHeroCollagePieces, workCategories } from "@/data/work-categories";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

export function Hero() {
  const reduce = useReducedMotion();
  const samples = getHeroCollagePieces(4);
  const totalPieces = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);
  const whatsappText = encodeURIComponent(
    "Hi Debby, I saw your website and your work samples — I would like to hire you."
  );

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-white supports-[height:100dvh]:min-h-[100dvh]">
      <div className="brand-panel absolute inset-0" />
      <div className="hero-glow absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(196,163,90,0.18),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-[max(5.5rem,env(safe-area-inset-top))] sm:gap-10 sm:px-6 sm:pb-16 lg:min-h-[100dvh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-20 lg:pt-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-sm sm:max-w-md lg:order-2 lg:max-w-none"
        >
          <div className="relative overflow-hidden border border-white/15 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
            <div className="relative aspect-square sm:aspect-[4/5]">
              <Image
                src="/portrait/debby.png"
                alt="Debby Tella — graphic designer"
                fill
                priority
                quality={88}
                className="object-cover object-[center_12%]"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <p className="font-serif text-xl text-white sm:text-2xl">Debby Tella</p>
              <p className="mt-1 text-xs text-gold sm:text-sm">
                Graphic Designer · {site.experience}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 max-w-xl lg:order-1"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Badge className="border-white/25 bg-white/10 text-white hover:bg-white/10">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-gold" />
              {site.availabilityShort}
            </Badge>
            <Badge className="border-gold/40 bg-gold/15 text-gold hover:bg-gold/15">
              {site.responseTimeShort}
            </Badge>
          </div>

          <p className="mt-6 font-serif text-xl tracking-[0.08em] text-gold sm:mt-8 sm:text-3xl">
            Debby Tella
          </p>
          <h1 className="mt-2 font-serif text-[2.35rem] leading-[1.02] sm:text-6xl lg:text-7xl">
            Real work samples. Real craft. Ready to hire.
          </h1>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            I put my designs out front so you can judge the quality yourself — social,
            Canva, presentations, ebook covers, magazine, mural and more. If the look
            fits your brand, hire Debby. Paying for design should feel sure, not risky.
          </p>

          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold/90">
              A sample of my work
            </p>
            <div className="mt-3 flex gap-2 sm:gap-3">
              {samples.map((piece) => (
                <Link
                  key={piece.id}
                  href="/#featured-work"
                  className="group relative h-16 w-16 overflow-hidden border border-white/20 sm:h-20 sm:w-20"
                  aria-label={`Sample: ${piece.title}`}
                >
                  <Image
                    src={piece.src}
                    alt={piece.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="80px"
                  />
                  <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                </Link>
              ))}
              <Link
                href="/my-work"
                className="flex h-16 w-16 flex-col items-center justify-center border border-gold/40 bg-gold/10 text-center text-[10px] leading-tight text-gold transition hover:bg-gold hover:text-charcoal sm:h-20 sm:w-20 sm:text-xs"
              >
                {totalPieces}+
                <span className="mt-0.5 opacity-90">see all</span>
              </Link>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" variant="gold" className="h-12 w-full sm:w-auto">
              <Link href="/#featured-work">Browse work samples</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-[#25D366] text-white hover:bg-[#1ebe57] sm:w-auto"
            >
              <a
                href={`${site.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Debby
              </a>
            </Button>
            <HireDebbyButton className="h-12 w-full justify-center border-white/40 bg-transparent px-8 text-white hover:bg-white hover:text-charcoal sm:w-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
