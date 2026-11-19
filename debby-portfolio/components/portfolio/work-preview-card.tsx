"use client";

import Image from "next/image";
import { Eye, Sparkles } from "lucide-react";
import type { WorkPiece } from "@/data/work-categories";
import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function WorkPreviewCard({
  work,
  className,
  fullWidth,
}: {
  work: WorkPiece;
  className?: string;
  fullWidth?: boolean;
}) {
  const whatsappText = encodeURIComponent(
    `Hi Debby (IDOWU DEBORAH AYOKA), I love this design "${work.title}" and I want to hire you.`
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`group relative overflow-hidden border border-border/70 bg-card text-left transition duration-500 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_24px_60px_rgba(28,28,30,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${fullWidth ? "w-full" : ""} ${className ?? ""}`}
          aria-label={`Preview ${work.title}`}
        >
          <div className={`relative aspect-[3/4] ${fullWidth ? "w-full" : "w-[220px] sm:w-[260px]"}`}>
            <Image
              src={work.src}
              alt={`${work.title} by IDOWU DEBORAH AYOKA (Debby Tella)`}
              fill
              loading="lazy"
              quality={72}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              sizes={fullWidth ? "(max-width: 768px) 100vw, 25vw" : "260px"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />
            <div className="absolute left-3 top-3">
              <Badge className="bg-gold text-charcoal hover:bg-gold">{work.category}</Badge>
            </div>
            <div className="absolute right-3 top-3 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1 rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal">
                <Sparkles className="h-3 w-3 text-gold" />
                Peek inside
              </span>
            </div>
            <div className="absolute inset-x-3 bottom-3 text-white">
              <p className="font-serif text-xl leading-snug">{work.title}</p>
              <p className="mt-1 line-clamp-2 text-sm text-white/75">
                {work.shortDescription}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-gold">
                <Eye className="h-3.5 w-3.5" />
                Open full preview
              </span>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] max-w-5xl overflow-hidden p-0">
        <div className="grid max-h-[92vh] md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[280px] bg-secondary md:min-h-full">
            <Image
              src={work.src}
              alt={`${work.title} full preview by Debby Tella`}
              fill
              className="object-contain p-3"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>

          <ScrollArea className="max-h-[92vh]">
            <div className="space-y-5 p-6 sm:p-8">
              <DialogHeader className="space-y-3 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-gold text-charcoal hover:bg-gold">
                    {work.category}
                  </Badge>
                  <Badge variant="outline">By IDOWU DEBORAH AYOKA</Badge>
                </div>
                <DialogTitle className="font-serif text-3xl leading-tight">
                  {work.title}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  Designed by Debby Tella. Preview the details, then message her on
                  WhatsApp or Gmail to hire.
                </DialogDescription>
              </DialogHeader>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Full description
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {work.fullDescription}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Deliverables
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
                  {work.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col gap-3 border-t border-border pt-5">
                <Button
                  asChild
                  className="w-full whitespace-nowrap bg-gold text-charcoal hover:bg-gold/90"
                >
                  <a
                    href={`${site.whatsapp}?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    Hire Debby for this look
                  </a>
                </Button>
                <HireDebbyButton
                  projectTitle={work.title}
                  fullWidth
                  className="w-full justify-center whitespace-nowrap"
                />
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
