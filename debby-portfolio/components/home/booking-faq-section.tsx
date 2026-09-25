"use client";

import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  RefreshCw,
  XCircle,
} from "lucide-react";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

const week = [
  { day: "Mon", open: true },
  { day: "Tue", open: true },
  { day: "Wed", open: true },
  { day: "Thu", open: true },
  { day: "Fri", open: true },
  { day: "Sat", open: false },
  { day: "Sun", open: false },
];

const homeFaqs = faqs.filter((item) =>
  ["pricing", "payment", "timeline", "revisions", "need-from-client", "availability"].includes(
    item.id
  )
);

export function BookingFaqSection() {
  const whatsappText = encodeURIComponent(
    "Hi Debby, I want to book a weekday slot for a design project."
  );

  return (
    <section id="booking-faq" className="scroll-mt-24 border-b bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Booking · Revisions · FAQ
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl">
            Clear rules. Easy to start.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Know when Debby is available, how revisions work, and the answers buyers ask most
            before they hire.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="h-full border border-gold/35 bg-secondary/40 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-gold text-charcoal hover:bg-gold">
                  <CalendarDays className="mr-1 h-3.5 w-3.5" />
                  {site.bookingNote}
                </Badge>
                <Badge variant="outline">{site.availabilityShort}</Badge>
              </div>

              <h3 className="mt-5 font-serif text-3xl">Availability this month</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Debby is available every weekday. Saturday and Sunday are off for new project work.
              </p>

              <div className="mt-6 grid grid-cols-7 gap-2">
                {week.map((item) => (
                  <div
                    key={item.day}
                    className={`border px-1 py-3 text-center ${
                      item.open
                        ? "border-gold/50 bg-gold/10 text-foreground"
                        : "border-border bg-muted/40 text-muted-foreground"
                    }`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide">{item.day}</p>
                    <p className="mt-2 flex justify-center">
                      {item.open ? (
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                      ) : (
                        <XCircle className="h-4 w-4 text-destructive/70" />
                      )}
                    </p>
                    <p className="mt-1 text-[10px]">{item.open ? "Open" : "Off"}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <span className="inline-flex items-center gap-1.5 text-foreground">
                  <Clock3 className="h-4 w-4 text-gold" />
                  {site.responseTimeShort}
                </span>
                <span className="text-muted-foreground">· Weekdays only</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-gold text-charcoal hover:bg-gold/90">
                  <a
                    href={`${site.whatsapp}?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Book a weekday slot
                  </a>
                </Button>
                <HireDebbyButton />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="h-full border border-border bg-card p-6 sm:p-8">
              <Badge variant="outline">
                <RefreshCw className="mr-1 h-3.5 w-3.5" />
                Revision policy
              </Badge>
              <h3 className="mt-4 font-serif text-3xl">{site.revisions.headline}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {site.revisions.detail}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <strong>{site.revisions.roundsIncluded} rounds</strong> included on standard
                    packages
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>Extra rounds available if you need more polish</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>Revisions refine the agreed direction — not a brand-new concept</span>
                </li>
              </ul>

              <div className="mt-8 border border-border bg-secondary/50 p-4">
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  To start faster, send your brief, brand assets, deadline, and any inspiration on
                  WhatsApp or Gmail.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gold">Simple FAQ</p>
                <h3 className="mt-2 font-serif text-3xl">Pricing, payment, timelines & more</h3>
              </div>
              <Button asChild variant="outline">
                <Link href="/faq">View all FAQ</Link>
              </Button>
            </div>

            <Accordion type="single" collapsible className="border border-border px-4 sm:px-6">
              {homeFaqs.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
