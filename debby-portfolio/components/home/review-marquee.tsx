"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function ReviewMarquee() {
  const items = [...testimonials, ...testimonials];

  return (
    <div className="review-marquee-track border-y border-border/80 bg-secondary/40 py-4">
      <div className="review-marquee-row">
        {items.map((quote, index) => (
          <article
            key={`${quote.id}-${index}`}
            className="review-marquee-item max-w-[280px] border border-border bg-background px-4 py-3 shadow-sm"
          >
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: Math.round(quote.rating) }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <p className="mt-2 line-clamp-2 text-sm leading-snug text-foreground">
              “{quote.quote}”
            </p>
            <p className="mt-2 text-[11px] text-muted-foreground">
              {quote.name} · {quote.projectType}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
