import type { Metadata } from "next";
import { getAllTestimonials } from "@/lib/reviews";
import { TestimonialsCarousel } from "@/components/testimonials/testimonials-carousel";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client feedback for Debby Tella from real Fiverr buyer reviews — including new reviews added after each delivered order.",
};

export default async function TestimonialsPage() {
  const reviews = await getAllTestimonials();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl sm:text-6xl">Testimonials</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Real buyer feedback from Debby&apos;s Fiverr work. As new orders are delivered and
        buyers leave reviews, those reviews are added here with the ones already on the site.
      </p>
      <div className="mt-12 px-2 sm:px-10">
        <TestimonialsCarousel testimonials={reviews} />
      </div>
    </div>
  );
}
