import Link from "next/link";
import {
  Palette,
  PenTool,
  Share2,
  Megaphone,
  FileImage,
  Presentation,
  Package,
  Sparkles,
  BookOpen,
  Layers,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const icons: Record<string, LucideIcon> = {
  Palette,
  PenTool,
  Share2,
  Megaphone,
  FileImage,
  Presentation,
  Package,
  Sparkles,
  BookOpen,
  Layers,
};

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  const Icon = icons[service.icon] ?? Sparkles;

  return (
    <Card className="flex h-full flex-col border-border/80 transition-colors hover:border-gold/40">
      <CardHeader>
        <div className="mb-3 flex h-10 w-10 items-center justify-center border border-border">
          <Icon className="h-5 w-5 text-gold" aria-hidden />
        </div>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        {!compact ? (
          <>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Deliverables</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm">
              <span className="font-medium">Ideal for: </span>
              <span className="text-muted-foreground">{service.idealFor}</span>
            </p>
          </>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link href="/start-project">Discuss this service</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
