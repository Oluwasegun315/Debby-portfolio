"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const laneA = [
  "IDOWU DEBORAH AYOKA",
  "Debby Tella",
  "Graphic Designer",
  "Social · Canva · Magazine · Mural",
  "Stained Glass · Presentations",
  "Hire Debby",
];

const laneB = [
  "Design that sells",
  "From scratch & inspiration",
  "Explore the studios",
  "Bank · Opay · PalmPay · Crypto",
  "Replies in 4–5 hours",
  "Nigeria · Worldwide",
];

export function PrestigeTicker() {
  const rowA = [...laneA, ...laneA, ...laneA];
  const rowB = [...laneB, ...laneB, ...laneB];

  return (
    <section className="overflow-hidden border-y border-gold/25 bg-charcoal text-white">
      <div className="prestige-ticker prestige-left py-3">
        <div className="prestige-ticker-row">
          {rowA.map((item, index) => (
            <span key={`a-${index}`} className="prestige-ticker-item">
              {item}
              <span className="mx-4 text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 prestige-ticker prestige-right py-3">
        <div className="prestige-ticker-row">
          {rowB.map((item, index) => (
            <span key={`b-${index}`} className="prestige-ticker-item text-white/75">
              {item}
              <span className="mx-4 text-gold/80">—</span>
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center sm:px-6">
        <Link
          href="/my-work"
          className="inline-flex items-center gap-2 text-sm font-medium text-gold transition hover:text-white"
        >
          Step into every workspace
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
