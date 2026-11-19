import type { Metadata } from "next";
import { getAllTestimonials } from "@/lib/reviews";
import { workCategories } from "@/data/work-categories";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AddReviewForm } from "@/components/dashboard/add-review-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Add Fiverr buyer reviews and view studio overview.",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  const reviews = await getAllTestimonials();
  const totalPieces = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);

  const stats = [
    { label: "Work spaces", value: workCategories.length },
    { label: "Design pieces", value: totalPieces },
    { label: "Buyer reviews", value: reviews.length },
    { label: "Services", value: services.length },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Alert>
        <AlertTitle>Debby studio dashboard</AlertTitle>
        <AlertDescription>
          Use this page to add new Fiverr buyer reviews after Debby delivers an order.
          Reviews appear on the homepage and testimonials page with the ones already there.
          This is a simple local admin — keep the passcode private.
        </AlertDescription>
      </Alert>

      <h1 className="mt-8 font-serif text-4xl">Studio overview</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Live counts from Debby&apos;s portfolio and review files.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-serif text-4xl">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <AddReviewForm />
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Latest reviews on the site</h2>
        <ul className="mt-4 space-y-3">
          {reviews.slice(0, 8).map((item) => (
            <li key={item.id} className="border border-border bg-card p-4 text-sm">
              <p className="font-medium">
                {item.name} · {item.projectType} · {item.rating}★
              </p>
              <p className="mt-1 text-muted-foreground">“{item.quote}”</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          Seed projects still load from local data ({projects.length} older portfolio entries).
        </p>
      </section>
    </div>
  );
}
