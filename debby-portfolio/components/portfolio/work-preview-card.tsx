"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { formatUsd, type WorkPiece } from "@/data/work-categories";
import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import { FiverrIcon } from "@/components/icons/brand-icons";
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`group relative overflow-hidden border border-border/70 bg-card text-left transition duration-300 hover:-translate-y-1 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${fullWidth ? "w-full" : ""} ${className ?? ""}`}
          aria-label={`Preview ${work.title}`}
        >
          <div className={`relative aspect-[3/4] ${fullWidth ? "w-full" : "w-[220px] sm:w-[260px]"}`}>
            <Image
              src={work.src}
              alt={work.title}
              fill
              loading="lazy"
              quality={70}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              sizes={fullWidth ? "(max-width: 768px) 100vw, 25vw" : "260px"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/25 to-transparent" />
            <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
              <Badge className="bg-gold text-charcoal hover:bg-gold">
                {work.category}
              </Badge>
              <span className="rounded-sm bg-white px-2.5 py-1 text-xs font-semibold text-charcoal">
                {formatUsd(work.priceUsd)}
              </span>
            </div>
            <div className="absolute inset-x-3 bottom-3 text-white">
              <p className="font-serif text-xl leading-snug">{work.title}</p>
              <p className="mt-1 line-clamp-2 text-sm text-white/75">
                {work.shortDescription}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-gold">
                <Eye className="h-3.5 w-3.5" />
                Preview full details
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
              alt={`${work.title} full preview`}
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
                  <Badge variant="outline">Worth {formatUsd(work.priceUsd)}</Badge>
                </div>
                <DialogTitle className="font-serif text-3xl leading-tight">
                  {work.title}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  Read the full project details, then message Debby on WhatsApp
                  or Gmail.
                </DialogDescription>
              </DialogHeader>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Project value
                </p>
                <p className="mt-1 font-serif text-4xl text-gold">
                  {formatUsd(work.priceUsd)}
                </p>
              </div>

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
                  className="w-full whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={site.fiverr} target="_blank" rel="noreferrer">
                    <FiverrIcon className="h-4 w-4 shrink-0" />
                    View on Fiverr
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
