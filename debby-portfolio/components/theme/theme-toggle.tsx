"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, ready, toggleTheme } = useTheme();
  const [peek, setPeek] = useState(false);
  const isDark = theme === "dark";
  const nextLabel = isDark ? "Ivory studio" : "Midnight atelier";

  return (
    <div
      className="relative"
      onMouseEnter={() => setPeek(true)}
      onMouseLeave={() => setPeek(false)}
    >
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Switch to Ivory studio" : "Switch to Midnight atelier"}
        disabled={!ready}
        onClick={toggleTheme}
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition duration-300",
          "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isDark
            ? "border-gold/40 bg-secondary text-gold hover:border-gold"
            : "border-border bg-card text-foreground hover:border-gold/50",
          !ready && "cursor-wait opacity-60"
        )}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </button>

      {/* Hover preview only — not selectable; press the button to change */}
      <div
        aria-hidden={!peek}
        className={cn(
          "pointer-events-none absolute right-0 top-[calc(100%+0.6rem)] z-[70] w-[13.5rem] rounded-xl border border-border bg-card/95 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-200",
          peek ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
        )}
      >
        <p className="px-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Press to switch
        </p>
        <div className="mt-2 flex items-center gap-2.5 rounded-lg bg-secondary/80 p-2">
          <span
            className={cn(
              "h-9 w-9 shrink-0 rounded-md bg-gradient-to-br ring-1 ring-black/10",
              isDark
                ? "from-[#f4efe6] via-[#ebe4d8] to-[#1c1a17]"
                : "from-[#0c0c0e] via-[#1a1814] to-[#c9a85c]"
            )}
          />
          <span className="min-w-0">
            <span className="block text-sm font-medium text-foreground">{nextLabel}</span>
            <span className="block text-xs text-muted-foreground">
              {isDark ? "Bright gallery feel" : "Deep ink · champagne gold"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
