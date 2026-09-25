import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Internal dashboard foundation for future CMS and inquiry management.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  const stats = [
    { label: "Projects in data", value: projects.length },
    { label: "Services", value: services.length },
    { label: "Testimonials", value: testimonials.length },
    { label: "Inquiries", value: "—" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Alert>
        <AlertTitle>Dashboard foundation</AlertTitle>
        <AlertDescription>
          This page is a UI shell for a future admin area. Authentication is not connected. Do not
          treat this as a secure admin. Wire Supabase Auth before adding create, edit or delete
          actions.
        </AlertDescription>
      </Alert>

      <h1 className="mt-8 font-serif text-4xl">Studio overview</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Counts below come from local data files, not a live database.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-serif text-4xl">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Recent activity</h2>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li>Local portfolio data loaded from <code>data/projects.ts</code>.</li>
          <li>Inquiry submissions currently use a mock API route at <code>/api/inquiries</code>.</li>
          <li>Connect Supabase when you are ready to store inquiries and manage content.</li>
        </ul>
      </section>
    </div>
  );
}
