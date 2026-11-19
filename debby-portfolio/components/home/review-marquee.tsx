"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { seedTestimonials } from "@/data/testimonials";

export function ReviewMarquee() {
  const [reviews, setReviews] = useState<Testimonial[]>(seedTestimonials);

  useEffect(() => {
    let active = true;
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (active && data?.ok && Array.isArray(data.reviews) && data.reviews.length) {
          setReviews(data.reviews);
        }
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, []);

  const items = [...reviews, ...reviews];

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
