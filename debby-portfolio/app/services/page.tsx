import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/service-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Graphic design services by Debby Tella including brand identity, logo design, social media, packaging and custom work.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl sm:text-6xl">Services</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Every project is scoped around your goals. Pricing is quoted individually so the work stays
        honest and the deliverables stay clear.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <section className="mt-16 border border-border bg-secondary/40 p-8 text-center">
        <h2 className="font-serif text-3xl">Request a Custom Quote</h2>
        <p className="mt-3 text-muted-foreground">
          Share your brief and I will come back with a clear scope — not a generic price list.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/start-project">Discuss Your Project</Link>
        </Button>
      </section>
    </div>
  );
}
