"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

export function StickyHireBar() {
  const [visible, setVisible] = useState(false);
  const whatsappText = encodeURIComponent(
    "Hi Debby, I checked your website and I would like to hire you for a design project."
  );

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 420;
      setVisible(y > 520 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)] transition duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="mx-auto mb-3 max-w-3xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-[hsl(240_6%_8%/0.92)] px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <p className="hidden truncate pl-2 text-sm text-white/85 sm:block">
            Ready when you are — Debby replies in 4–5 hours.
          </p>
          <p className="truncate pl-2 text-sm text-white/85 sm:hidden">Hire Debby</p>
          <div className="flex shrink-0 gap-2">
            <Button
              asChild
              size="sm"
              variant="gold"
              className="h-9 rounded-full px-4"
            >
              <a href={`${site.whatsapp}?text=${whatsappText}`} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-9 rounded-full border-white/25 bg-transparent px-4 text-white hover:border-gold/50 hover:bg-white hover:text-charcoal"
            >
              <Link href="/#pay-and-contact">Pay</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
