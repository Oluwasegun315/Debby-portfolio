import type { Metadata } from "next";
import Link from "next/link";
import { WorkSpaces } from "@/components/portfolio/work-spaces";
import { OrderStrip } from "@/components/home/order-strip";
import { Button } from "@/components/ui/button";
import { workCategories } from "@/data/work-categories";
import { site } from "@/data/site";
import { FiverrIcon } from "@/components/icons/brand-icons";

export const metadata: Metadata = {
  title: "My Work",
  description:
    "Browse all Debby Tella work spaces — social media, Canva templates, presentations, ebook covers, magazine design, mural design and stained glass design.",
};

export default function MyWorkPage() {
  const total = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);

  return (
    <div>
      <section className="brand-panel text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">My Work</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">All work spaces</h1>
          <div className="mt-4 h-1 w-24 bg-gold" />
          <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
            Open any workspace to see the full collection. Preview designs, check
            value, then hire Debby on Fiverr, WhatsApp or Gmail.
          </p>
          <p className="mt-4 text-sm text-gold">
            {total}+ designs · {workCategories.length} categories
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-gold text-charcoal hover:bg-gold/90">
              <a href={site.fiverr} target="_blank" rel="noreferrer">
                <FiverrIcon className="h-4 w-4" />
                Order on Fiverr
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/35 bg-transparent text-white hover:bg-white hover:text-charcoal"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <WorkSpaces />
      <OrderStrip />
    </div>
  );
}
