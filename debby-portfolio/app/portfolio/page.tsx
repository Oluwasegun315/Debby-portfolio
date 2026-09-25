import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected graphic design work by Debby Tella — labels, flyers, packaging, marketing graphics and more.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">Portfolio</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Project case studies</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Detailed write-ups of selected projects. For the sliding design gallery with prices and
        full previews, visit <a className="text-gold underline" href="/my-work">My Work</a> on
        the home page.
      </p>
      <div className="mt-10">
        <PortfolioGallery />
      </div>
    </div>
  );
}
