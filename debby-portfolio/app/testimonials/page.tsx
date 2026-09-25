import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import { TestimonialsCarousel } from "@/components/testimonials/testimonials-carousel";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client feedback for Debby Tella from real buyer reviews.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl sm:text-6xl">Testimonials</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Real buyer feedback from Debby&apos;s Fiverr label design work. These quotes come from
        completed projects and ongoing collaborations.
      </p>
      <div className="mt-12 px-2 sm:px-10">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </div>
  );
}
