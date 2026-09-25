import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const palettes: Record<string, [string, string, string]> = {
  Branding: ["#1c1917", "#c4a574", "#f4efe6"],
  "Logo Design": ["#111827", "#2563eb", "#e5e7eb"],
  "Social Media": ["#2a1f16", "#d4a017", "#f7f1e8"],
  "Social Media Design": ["#2a1f16", "#d4a017", "#f7f1e8"],
  "Poster Design": ["#2b1240", "#f97316", "#f5efe6"],
  "Flyer Design": ["#1a1020", "#e11d48", "#fdf2f8"],
  Packaging: ["#1f2a1d", "#5c7a4a", "#efe8d8"],
  "Label Design": ["#1a1208", "#d97706", "#fef3c7"],
  "Marketing Design": ["#0f172a", "#c9a227", "#f8f5ee"],
  Marketing: ["#0f172a", "#c9a227", "#f8f5ee"],
  Editorial: ["#1a1512", "#8b5e3c", "#f3ece3"],
  Illustration: ["#111827", "#0d9488", "#ecfdf5"],
};

export function ProjectVisual({
  project,
  src,
  className,
  label,
}: {
  project?: Pick<Project, "title" | "category" | "year" | "hasCustomImage" | "thumbnail">;
  src?: string;
  className?: string;
  label?: string;
}) {
  const title = project?.title ?? label ?? "Project";
  const category = project?.category ?? "Graphic Design";
  const year = project?.year ?? "";
  const colors = palettes[category] ?? ["#171717", "#b0894f", "#f3efe8"];
  const useImage = Boolean(project?.hasCustomImage && (src || project.thumbnail));

  if (useImage) {
    return (
      <div className={cn("relative overflow-hidden bg-secondary", className)}>
        <Image
          src={src || project!.thumbnail}
          alt={`${title} — ${category} project visual`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ background: colors[0] }}
      role="img"
      aria-label={`${title} visual preview for ${category}`}
    >
      <div
        className="absolute -right-8 -top-10 h-44 w-44 rotate-12 opacity-80"
        style={{ background: colors[1] }}
      />
      <div
        className="absolute bottom-6 left-6 h-24 w-24 rounded-full opacity-30"
        style={{ background: colors[2] }}
      />
      <div className="absolute inset-x-6 bottom-6 text-white">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">{category}</p>
        <p className="mt-1 font-serif text-2xl leading-tight">{title.split("—")[0].trim()}</p>
        {year ? <p className="mt-2 text-xs text-white/55">{year}</p> : null}
      </div>
    </div>
  );
}
