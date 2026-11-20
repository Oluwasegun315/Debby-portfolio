"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const whatsappText = encodeURIComponent(
    "Hi Debby, I found your website and I want to hire you."
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-3 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" prefetch>
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-md bg-charcoal font-serif text-lg leading-none text-gold"
          >
            D
          </span>
          <span className="font-serif text-xl tracking-tight text-foreground">
            Debby
            <span className="ml-0.5 text-gold">.</span>
          </span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {site.nav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    prefetch
                    className={cn(
                      "px-3 py-2 text-sm transition-colors hover:text-gold",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" variant="gold" className="hidden sm:inline-flex">
            <a
              href={`${site.whatsapp}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
            <Link href="/#pay-and-contact" prefetch>
              Pay / Hire
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 pt-12">
              <nav className="flex flex-col gap-1">
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-2 py-3 text-lg",
                      pathname === item.href
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/#pay-and-contact"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-lg text-gold"
                >
                  Pay Debby
                </Link>
                <Link
                  href="/#booking-faq"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-lg text-muted-foreground"
                >
                  Booking & FAQ
                </Link>
              </nav>
              <div className="flex items-center justify-between rounded-md border px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Button asChild className="bg-gold text-charcoal hover:bg-gold/90">
                <a
                  href={`${site.whatsapp}?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Debby
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/my-work" onClick={() => setOpen(false)}>
                  Browse My Work
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
