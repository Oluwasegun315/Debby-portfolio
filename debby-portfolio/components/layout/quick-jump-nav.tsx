"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const jumps = [
  { href: "/#featured-work", label: "Work" },
  { href: "/#before-after", label: "Before/After" },
  { href: "/#packages", label: "Packages" },
  { href: "/#booking-faq", label: "Booking" },
  { href: "/#pay-and-contact", label: "Pay" },
  { href: "/my-work", label: "All work" },
];

export function QuickJumpNav() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const show = pathname === "/";

  useEffect(() => {
    if (!show) return;

    const ids = ["featured-work", "before-after", "packages", "booking-faq", "pay-and-contact"];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`/#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.55] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [show]);

  if (!show) return null;

  return (
    <div className="sticky top-16 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2.5 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <p className="mr-1 hidden shrink-0 self-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
          Jump
        </p>
        {jumps.map((item) => {
          const isActive =
            active === item.href ||
            (item.href === "/my-work" && pathname === "/my-work");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-sm border px-3 py-1.5 text-xs font-medium transition",
                isActive
                  ? "border-gold bg-gold text-charcoal"
                  : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
