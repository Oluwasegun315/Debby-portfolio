import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { QuickJumpNav } from "@/components/layout/quick-jump-nav";
import { StickyHireBar } from "@/components/home/sticky-hire-bar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Navbar />
        <QuickJumpNav />
        <main id="main-content" className="flex-1 pb-24">
          {children}
        </main>
        <Footer />
        <StickyHireBar />
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}
