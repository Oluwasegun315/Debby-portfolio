"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Toast = { id: number; title: string; description?: string; variant?: "default" | "success" | "error" };

let pushToast: ((toast: Omit<Toast, "id">) => void) | null = null;

export function toast(toastData: Omit<Toast, "id">) {
  pushToast?.(toastData);
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    pushToast = (item) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { ...item, id }]);
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4200);
    };
    return () => {
      pushToast = null;
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[80] flex w-[min(90vw,360px)] flex-col gap-2">
      {toasts.map((item) => (
        <div
          key={item.id}
          role="status"
          className={cn(
            "pointer-events-auto border bg-background px-4 py-3 shadow-lg",
            item.variant === "error" && "border-destructive/40",
            item.variant === "success" && "border-gold/40"
          )}
        >
          <p className="text-sm font-medium">{item.title}</p>
          {item.description ? (
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
