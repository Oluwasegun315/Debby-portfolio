"use client";

import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectsCarouselProps = {
  projects: Project[];
  /** Optional class on the outer carousel wrapper */
  className?: string;
};

/**
 * Side-by-side project carousel.
 * Add more projects in `data/projects.ts` and they appear here automatically.
 */
export function ProjectsCarousel({ projects, className }: ProjectsCarouselProps) {
  if (!projects.length) return null;

  return (
    <Carousel
      opts={{
        align: "start",
        loop: projects.length > 3,
      }}
      className={className ?? "w-full"}
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem
            key={project.id}
            className="basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3 border-border bg-background shadow-sm sm:-left-4" />
      <CarouselNext className="-right-3 border-border bg-background shadow-sm sm:-right-4" />
    </Carousel>
  );
}
