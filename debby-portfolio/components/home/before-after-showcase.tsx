"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb, PencilLine, Sparkles } from "lucide-react";
import { workCategories } from "@/data/work-categories";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type WeakKind = "scratch" | "inspiration" | "deck";

const pairs: {
  mode: "From scratch" | "From inspiration";
  modeHint: string;
  title: string;
  afterTitle: string;
  after: (typeof workCategories)[number]["pieces"][number] | undefined;
  beforeLabel: string;
  afterLabel: string;
  kind: WeakKind;
  ModeIcon: typeof PencilLine;
}[] = [
  {
    mode: "From scratch",
    modeHint: "Blank brief → finished design",
    title: "BEFORE — Weak / ignored",
    afterTitle: "AFTER — Debby’s design",
    after: workCategories[0]?.pieces[1],
    beforeLabel: "Cluttered · cheap look · no brand voice",
    afterLabel: "Built from scratch — clear, bold, ready to post",
    kind: "scratch",
    ModeIcon: PencilLine,
  },
  {
    mode: "From inspiration",
    modeHint: "Rough idea / reference → premium result",
    title: "BEFORE — Rough inspiration",
    afterTitle: "AFTER — Debby’s redesign",
    after: workCategories[1]?.pieces[2],
    beforeLabel: "Generic mood · no system · unfinished feel",
    afterLabel: "Inspired, then elevated into a pro visual",
    kind: "inspiration",
    ModeIcon: Lightbulb,
  },
  {
    mode: "From scratch",
    modeHint: "Messy draft → client-ready deck",
    title: "BEFORE — Weak slide",
    afterTitle: "AFTER — Debby’s presentation",
    after: workCategories[3]?.pieces[0] ?? workCategories[2]?.pieces[0],
    beforeLabel: "Wall of text · no hierarchy · hard to follow",
    afterLabel: "Designed to sell the story clearly",
    kind: "deck",
    ModeIcon: PencilLine,
  },
];

function WeakBeforeMock({ kind, label }: { kind: WeakKind; label: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden border-2 border-red-500/70 bg-[#f3efe6] text-[#1a1a1a]">
      <div className="absolute left-3 top-3 z-10">
        <span className="inline-flex items-center bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Before · Weak
        </span>
      </div>

      {kind === "scratch" ? (
        <div className="flex h-full flex-col p-4 pt-12">
          <p
            className="text-center text-[11px] font-bold uppercase text-[#00a0ff]"
            style={{ letterSpacing: "0.35em" }}
          >
            ~~ your brand ~~
          </p>
          <p
            className="mt-4 -rotate-2 text-center text-4xl font-black leading-none text-[#ff1f1f]"
            style={{ fontFamily: "Comic Sans MS, Chalkboard SE, cursive", textShadow: "2px 2px 0 #ffd400" }}
          >
            SALE!!!!
          </p>
          <p
            className="mt-3 rotate-1 text-center text-sm font-bold leading-tight text-[#1a1a1a]"
            style={{ fontFamily: "Comic Sans MS, Chalkboard SE, cursive" }}
          >
            buy now cheap products WOW click here amazing deal!!!
          </p>
          <div className="mt-4 grid flex-1 grid-cols-2 gap-2">
            <div className="flex items-center justify-center bg-[#ff6b6b] text-[10px] font-bold text-white">
              photo?
            </div>
            <div className="flex items-center justify-center bg-[#4dabf7] text-[10px] font-bold text-white">
              logo here
            </div>
            <div className="col-span-2 flex items-center justify-center bg-[#fcc419] text-[10px] font-bold text-[#333]">
              random box · no spacing
            </div>
          </div>
          <div className="mt-3 -rotate-1 bg-[#1a73e8] py-3 text-center text-xs font-black uppercase text-white underline">
            CLICK HERE NOW!!!
          </div>
          <p className="mt-2 text-center text-[10px] text-[#888]">
            www.example-cheap-site.com
          </p>
        </div>
      ) : null}

      {kind === "inspiration" ? (
        <div className="flex h-full flex-col gap-2 p-3 pt-12">
          <div className="flex items-center justify-between border-b-2 border-dashed border-[#999] pb-2">
            <span
              className="text-sm font-bold text-[#555]"
              style={{ fontFamily: "Comic Sans MS, Chalkboard SE, cursive" }}
            >
              untitled inspo 3
            </span>
            <span className="bg-[#ffd166] px-2 py-0.5 text-[10px] font-black">NEW???</span>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2">
            <div className="space-y-2 border-2 border-[#bbb] bg-white p-2">
              <p className="text-[10px] font-bold text-[#999]">Title goes here maybe</p>
              <div className="h-16 bg-[repeating-linear-gradient(45deg,#ddd,#ddd_6px,#eee_6px,#eee_12px)]" />
              <p className="text-[9px] leading-tight text-[#777]">
                too much text packed in a tiny space with no breathing room at all
              </p>
            </div>
            <div className="space-y-2 border-2 border-[#f08c00] bg-[#fff8e8] p-2">
              <p className="text-[10px] font-bold text-[#f08c00]">Reference cutout</p>
              <div className="aspect-square border border-dashed border-[#ccc] bg-[#efe8da] p-2 text-center text-[9px] text-[#999]">
                screenshot from Pinterest / WhatsApp
              </div>
              <p className="text-[9px] text-[#888]">make it like this but nicer</p>
            </div>
            <div className="col-span-2 flex flex-1 flex-col justify-between border-2 border-[#aaa] bg-white p-2">
              <p className="text-[10px] leading-snug text-[#555]">
                colors clash · fonts mix · logo floating · no grid · unfinished Canva draft
              </p>
              <div className="mt-2 bg-[#777] py-2 text-center text-[10px] font-bold text-white">
                Button? maybe
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {kind === "deck" ? (
        <div className="flex h-full flex-col bg-[#ececec] p-3 pt-12">
          <div className="flex-1 border-2 border-[#bbb] bg-white p-3">
            <p className="text-[10px] text-[#999]">Slide 1 / 24 · Draft FINAL v7</p>
            <p className="mt-2 text-base font-black leading-tight text-[#111]">
              Company Overview And Also Mission Vision Values Plus Goals Plus More Text That Nobody Can Read
            </p>
            <ul className="mt-3 space-y-1 text-[10px] leading-snug text-[#333]">
              <li>• We provide services to clients in many areas of business and more things</li>
              <li>• Our team is passionate and dedicated and professional and creative always</li>
              <li>• Please see next slides for more information and details and charts and notes</li>
              <li>• Contact us for pricing packages timelines deliverables revisions feedback loops</li>
              <li>• Also synergy leverage paradigm shift stakeholder alignment KPI dashboard</li>
            </ul>
            <div className="mt-4 grid grid-cols-3 gap-1">
              <div className="flex h-12 items-center justify-center bg-[#d0d0d0] text-[8px]">chart?</div>
              <div className="flex h-12 items-center justify-center bg-[#bcbcbc] text-[8px]">photo</div>
              <div className="flex h-12 items-center justify-center bg-[#e0e0e0] text-[8px]">logo</div>
            </div>
          </div>
          <div className="mt-2 flex justify-between text-[9px] text-[#888]">
            <span>Arial Black · 11pt · cramped</span>
            <span>Page 01</span>
          </div>
        </div>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 bg-red-700/95 p-3 text-white">
        <p className="text-xs font-bold uppercase tracking-wide">Why this fails</p>
        <p className="mt-1 text-sm text-white/95">{label}</p>
      </div>
    </div>
  );
}

export function BeforeAfterShowcase() {
  return (
    <section id="before-after" className="border-b bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Before → After
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl">
            Weak ideas become scroll-stopping work.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Debby designs <span className="font-semibold text-foreground">from scratch</span> and
            also redesigns <span className="font-semibold text-foreground">from your inspiration</span> —
            so buyers clearly see the upgrade.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge className="bg-gold text-charcoal hover:bg-gold">
              <PencilLine className="mr-1 h-3.5 w-3.5" />
              Design from scratch
            </Badge>
            <Badge variant="outline">
              <Lightbulb className="mr-1 h-3.5 w-3.5" />
              Design from inspiration
            </Badge>
            <Badge variant="outline">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Bold Before / After proof
            </Badge>
          </div>
        </Reveal>

        <div className="mt-14 space-y-16">
          {pairs.map((pair) => {
            if (!pair.after) return null;
            const ModeIcon = pair.ModeIcon;
            return (
              <Reveal key={`${pair.mode}-${pair.title}`}>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 border border-gold/50 bg-gold/10 px-3 py-1.5 text-sm font-semibold text-gold">
                    <ModeIcon className="h-4 w-4" />
                    {pair.mode}
                  </span>
                  <p className="text-sm text-muted-foreground">{pair.modeHint}</p>
                </div>

                <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
                  <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-red-600">
                      {pair.title}
                    </p>
                    <WeakBeforeMock kind={pair.kind} label={pair.beforeLabel} />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-charcoal shadow-lg">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                    <span className="hidden text-xs font-semibold uppercase tracking-wider text-gold md:block">
                      Upgrade
                    </span>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-gold">
                      {pair.afterTitle}
                    </p>
                    <div className="relative aspect-[3/4] overflow-hidden border-2 border-gold">
                      <Image
                        src={pair.after.src}
                        alt={pair.afterTitle}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                      <div className="absolute left-3 top-3">
                        <span className="inline-flex bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
                          After · Debby
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-charcoal/90 p-4 text-white">
                        <p className="font-serif text-xl">{pair.after.title}</p>
                        <p className="mt-1 text-sm text-gold">{pair.afterLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-14 border border-gold/30 bg-secondary/50 p-6 text-center sm:p-8">
            <p className="font-serif text-2xl sm:text-3xl">
              Bring a blank brief — or a rough idea. Debby turns both into work that sells.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/my-work">
                  Explore full work spaces
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#pay-and-contact">Hire Debby</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
