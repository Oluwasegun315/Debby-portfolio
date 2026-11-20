"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

const options = [
  {
    id: "light" as const,
    label: "Ivory studio",
    hint: "Bright · clean · gallery feel",
    swatch: "from-[#f4efe6] via-[#ebe4d8] to-[#1c1a17]",
  },
  {
    id: "dark" as const,
    label: "Midnight atelier",
    hint: "Deep ink · champagne gold",
    swatch: "from-[#0c0c0e] via-[#1a1814] to-[#c9a85c]",
  },
];

export function ThemeToggle() {
  const { theme, ready, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Choose site theme"
        disabled={!ready}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isDark
            ? "border-gold/35 bg-secondary text-gold"
            : "border-border bg-card text-foreground",
          !ready && "cursor-wait opacity-60"
        )}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </button>

      <div
        role="menu"
        className={cn(
          "absolute right-0 top-[calc(100%+0.55rem)] z-[70] w-56 origin-top-right rounded-xl border border-border bg-card p-2 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <p className="px-2 pb-2 pt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Theme · hover & choose
        </p>
        {options.map((option) => {
          const active = theme === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="menuitemradio"
              aria-checked={active}
              onClick={() => {
                setTheme(option.id);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition",
                active ? "bg-secondary" : "hover:bg-secondary/70"
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "h-9 w-9 shrink-0 rounded-md bg-gradient-to-br ring-1 ring-black/10",
                  option.swatch
                )}
              />
              <span className="min-w-0">
                <span className="block text-sm font-medium text-foreground">
                  {option.label}
                </span>
                <span className="block text-xs text-muted-foreground">{option.hint}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
