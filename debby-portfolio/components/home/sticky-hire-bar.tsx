"use client";

import Link from "next/link";
import { Clock3, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

export function StickyHireBar() {
  const whatsappText = encodeURIComponent(
    "Hi Debby, I checked your website and I would like to hire you for a design project."
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">
            Ready to hire Debby?
          </p>
          <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 text-gold">
              <Clock3 className="h-3.5 w-3.5" />
              {site.responseTimeShort}
            </span>
            <span>{site.availabilityShort}</span>
            <span>Bank · Opay · PalmPay · Crypto · No PayPal</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" className="bg-gold text-charcoal hover:bg-gold/90">
            <a href={`${site.whatsapp}?text=${whatsappText}`} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </Button>
          <HireDebbyButton className="h-9 px-3 text-sm" />
          <Button asChild size="sm" variant="outline">
            <Link href="/#pay-and-contact">
              <MessageCircle className="h-3.5 w-3.5" />
              Pay / Contact
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
