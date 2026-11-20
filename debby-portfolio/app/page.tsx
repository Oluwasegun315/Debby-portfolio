import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import Link from "next/link";
import { Hero } from "@/components/hero/hero";
import { Reveal } from "@/components/motion/reveal";
import { FeaturedWorkCarousel } from "@/components/home/featured-work-carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getFeaturedTestimonials } from "@/lib/reviews";
import { workCategories } from "@/data/work-categories";
import { seo, site } from "@/data/site";

export const dynamic = "force-dynamic";

const TrustStrip = nextDynamic(() =>
  import("@/components/home/trust-strip").then((m) => m.TrustStrip)
);
const BeforeAfterShowcase = nextDynamic(() =>
  import("@/components/home/before-after-showcase").then((m) => m.BeforeAfterShowcase)
);
const DesignPackages = nextDynamic(() =>
  import("@/components/home/design-packages").then((m) => m.DesignPackages)
);
const BookingFaqSection = nextDynamic(() =>
  import("@/components/home/booking-faq-section").then((m) => m.BookingFaqSection)
);
const SignatureCaseStudy = nextDynamic(() =>
  import("@/components/home/signature-case-study").then((m) => m.SignatureCaseStudy)
);
const PayAndContact = nextDynamic(() =>
  import("@/components/home/pay-and-contact").then((m) => m.PayAndContact)
);
const HirePath = nextDynamic(() =>
  import("@/components/home/hire-path").then((m) => m.HirePath)
);
const OrderStrip = nextDynamic(() =>
  import("@/components/home/order-strip").then((m) => m.OrderStrip)
);
const ConversionShowcase = nextDynamic(() =>
  import("@/components/home/conversion-showcase").then((m) => m.ConversionShowcase)
);
const WorkGateway = nextDynamic(() =>
  import("@/components/home/work-gateway").then((m) => m.WorkGateway)
);
const PrestigeTicker = nextDynamic(() =>
  import("@/components/home/prestige-ticker").then((m) => m.PrestigeTicker)
);
const ExploreMagnet = nextDynamic(() =>
  import("@/components/home/explore-magnet").then((m) => m.ExploreMagnet)
);
const FiverrCredibility = nextDynamic(() =>
  import("@/components/home/fiverr-credibility").then((m) => m.FiverrCredibility)
);
const TestimonialsCarousel = nextDynamic(() =>
  import("@/components/testimonials/testimonials-carousel").then(
    (m) => m.TestimonialsCarousel
  )
);

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
};

const process = [
  { step: "01", title: "Discover", text: "We start with your idea, audience and constraints. I ask questions until the brief is clear." },
  { step: "02", title: "Strategy", text: "Then I define the visual direction — tone, references, and the problem the design needs to solve." },
  { step: "03", title: "Design", text: "Concepts are built with intention: type, color, composition and hierarchy working together." },
  { step: "04", title: "Refine", text: "Feedback is folded in carefully so the work gets sharper, not noisier." },
  { step: "05", title: "Deliver", text: "You receive organized files, ready for print, digital or both — with clear usage notes." },
];

export default async function HomePage() {
  const quotes = await getFeaturedTestimonials();
  const totalPieces = workCategories.reduce((sum, c) => sum + c.pieceCount, 0);

  return (
    <div className="relative">
      <Hero />

      <div className="content-lazy">
        <PrestigeTicker />
      </div>

      <FeaturedWorkCarousel />

      <div className="content-lazy">
        <ExploreMagnet />
      </div>

      <div className="content-lazy">
        <TrustStrip />
      </div>

      <div className="content-lazy">
        <FiverrCredibility />
      </div>

      <div className="content-lazy">
        <BeforeAfterShowcase />
      </div>

      <div className="content-lazy">
        <DesignPackages />
      </div>

      <div className="content-lazy">
        <BookingFaqSection />
      </div>

      <div className="content-lazy">
        <SignatureCaseStudy />
      </div>

      <div className="content-lazy">
        <PayAndContact />
      </div>

      <div className="content-lazy">
        <HirePath />
      </div>

      <section className="content-lazy border-b bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">
              Built for buyers who decide fast
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl text-foreground sm:text-5xl">
              See the work. Feel the quality. Hire Debby.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {totalPieces}+ designs ready across {workCategories.length} work
              spaces. Browse My Work, preview a piece, then contact Debby to pay
              by bank transfer or crypto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/my-work" prefetch>
                  Check all my work
                </Link>
              </Button>
              <Button asChild className="bg-gold text-charcoal hover:bg-gold/90">
                <Link href="/#pay-and-contact">Pay & contact</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/start-project" prefetch>
                  Start a project
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="content-lazy">
        <WorkGateway />
      </div>

      <div className="content-lazy">
        <OrderStrip />
      </div>

      <div className="content-lazy">
        <ConversionShowcase />
      </div>

      <section className="content-lazy bg-charcoal text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <Badge variant="gold">About</Badge>
            <h2 className="mt-4 font-serif text-4xl">Debby Tella</h2>
            <p className="mt-2 text-gold">{site.stats.experienceLabel}</p>
            <p className="mt-6 leading-relaxed text-white/70">
              I am a graphic designer with {site.experience.toLowerCase()} of practice —
              including live Fiverr work as yemisi4. I know graphic design deeply: labels,
              packaging, social content, templates, presentations and product visuals that
              help brands look intentional and ready to sell.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              The approach is simple: listen closely, design with intention, refine carefully, and
              stay client-focused without losing the details that make the work feel polished.
            </p>
            <Button asChild className="mt-8" variant="gold">
              <Link href="/about" prefetch>
                More About Debby
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {["Label Design", "Social Media", "Digital Marketing", "Jersey Sublimation", "Product Design", "Magazine"].map((item) => (
                <div key={item} className="border border-white/10 p-5">
                  <p className="font-serif text-xl">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-lazy border-y bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <Reveal>
            <p className="font-serif text-3xl leading-snug sm:text-4xl">
              Good design doesn&apos;t just look beautiful. It communicates, connects and leaves a
              lasting impression.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="content-lazy mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mb-10">
          <h2 className="font-serif text-4xl">Process</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-5">
          {process.map((item) => (
            <div key={item.step} className="border-t border-gold pt-5">
              <p className="text-xs tracking-[0.2em] text-gold">{item.step}</p>
              <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-lazy bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mb-10 flex items-end justify-between">
            <h2 className="font-serif text-4xl">Kind words</h2>
            <Button asChild variant="outline">
              <Link href="/testimonials" prefetch>
                All testimonials
              </Link>
            </Button>
          </Reveal>
          <Reveal>
            <TestimonialsCarousel testimonials={quotes} />
          </Reveal>
          <p className="mt-6 text-xs text-muted-foreground">
            Real Fiverr buyer reviews from Debby&apos;s client projects.
          </p>
        </div>
      </section>

      <section className="content-lazy brand-panel text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-serif text-4xl sm:text-5xl">Ready to hire Debby?</h2>
          <p className="mt-4 text-white/75">
            Go to My Work, preview a design, then pay by bank transfer or crypto.
            Debby replies within 4–5 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
              <Link href="/my-work" prefetch>
                View My Work
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white hover:text-charcoal">
              <Link href="/#pay-and-contact">Pay & contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
