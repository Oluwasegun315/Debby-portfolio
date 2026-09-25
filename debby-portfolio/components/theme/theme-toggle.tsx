"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, ready, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light ivory theme" : "Switch to dark gold theme"}
      disabled={!ready}
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-9 w-[3.25rem] shrink-0 items-center rounded-full border transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isDark ? "border-gold/40 bg-secondary" : "border-border bg-muted",
        !ready && "cursor-wait opacity-60"
      )}
    >
      <span
        className={cn(
          "absolute left-1 flex h-7 w-7 items-center justify-center rounded-full shadow-sm transition-transform duration-200",
          isDark
            ? "translate-x-[1.35rem] bg-gold text-charcoal"
            : "translate-x-0 bg-background text-foreground"
        )}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
