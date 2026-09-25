import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <span key={i} className="relative inline-block h-3.5 w-3.5">
            <Star className="absolute inset-0 h-3.5 w-3.5 text-gold/30" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            </span>
          </span>
        );
      })}
      <span className="ml-1 text-xs text-muted-foreground">{rating.toFixed(1).replace(/\.0$/, "")}</span>
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full border-border/80 transition-colors hover:border-gold/35">
      <CardContent className="flex h-full flex-col gap-5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="gold">{testimonial.projectType}</Badge>
            {testimonial.ongoing ? <Badge variant="outline">Ongoing collaboration</Badge> : null}
          </div>
          <RatingStars rating={testimonial.rating} />
        </div>
        <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
          “{testimonial.quote}”
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{testimonial.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.location}
              {testimonial.source ? ` · via ${testimonial.source}` : ""}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
