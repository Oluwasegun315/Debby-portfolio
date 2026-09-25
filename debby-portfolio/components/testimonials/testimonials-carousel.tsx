"use client";

import type { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials.length) return null;

  return (
    <Carousel
      opts={{
        align: "start",
        loop: testimonials.length > 2,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((item) => (
          <CarouselItem key={item.id} className="basis-full md:basis-1/2">
            <TestimonialCard testimonial={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3 border-border bg-background shadow-sm sm:-left-4" />
      <CarouselNext className="-right-3 border-border bg-background shadow-sm sm:-right-4" />
    </Carousel>
  );
}
