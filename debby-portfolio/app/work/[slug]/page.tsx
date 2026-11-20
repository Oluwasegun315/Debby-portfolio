import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatUsd, getWorkCategory, workCategories } from "@/data/work-categories";
import { site } from "@/data/site";
import { WorkPreviewCard } from "@/components/portfolio/work-preview-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getWorkCategory(slug);
  if (!category) return { title: "Work" };
  return {
    title: `${category.title} by IDOWU DEBORAH AYOKA (Debby Tella)`,
    description: `${category.description} Designed by IDOWU DEBORAH AYOKA — Debby Tella, professional graphic designer.`,
  };
}

export default async function WorkCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getWorkCategory(slug);
  if (!category) notFound();

  const rowA = [...category.pieces, ...category.pieces];
  const rowB = [
    ...category.pieces.slice().reverse(),
    ...category.pieces.slice().reverse(),
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">
            {category.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl">{category.title}</h1>
          <div className="mt-4 h-1 w-24 bg-gold" />
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {category.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge className="bg-primary text-primary-foreground hover:bg-primary">
              {category.pieceCount} designs
            </Badge>
            <Badge variant="outline">From {formatUsd(category.fromPriceUsd)}</Badge>
            <Badge variant="outline">By IDOWU DEBORAH AYOKA</Badge>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="whitespace-nowrap bg-gold text-charcoal hover:bg-gold/90"
            >
              <a
                href={`${site.whatsapp}?text=${encodeURIComponent(
                  `Hi Debby (IDOWU DEBORAH AYOKA), I love your ${category.title} work and want to hire you.`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Debby
              </a>
            </Button>
            <HireDebbyButton className="whitespace-nowrap" />
            <Button asChild variant="outline" className="whitespace-nowrap">
              <Link href="/my-work">Back to My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y bg-background py-10">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-gold">
          Sliding gallery · left and right · click any design to preview
        </p>
        <div className="relative space-y-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-16" />

          <div className="marquee-track">
            <div className="marquee-row marquee-left">
              {rowA.map((work, index) => (
                <div key={`${work.id}-a-${index}`} className="marquee-item">
                  <WorkPreviewCard work={work} />
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-track">
            <div className="marquee-row marquee-right">
              {rowB.map((work, index) => (
                <div key={`${work.id}-b-${index}`} className="marquee-item">
                  <WorkPreviewCard work={work} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl">All {category.title} pieces</h2>
        <p className="mt-2 text-muted-foreground">
          Full grid view — click any piece to read details and hire Debby.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {category.pieces.map((work) => (
            <WorkPreviewCard key={work.id} work={work} fullWidth />
          ))}
        </div>
      </section>
    </div>
  );
}
