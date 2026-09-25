"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectVisual } from "@/components/media/project-visual";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProjectVisual project={project} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <CardContent className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="gold">{project.category}</Badge>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <h3 className="font-serif text-xl leading-snug">{project.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-1">
          <Button asChild size="sm">
            <Link href={`/portfolio/${project.slug}`}>
              View Case Study <ArrowUpRight />
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>
                  {project.category} · {project.year}
                </DialogDescription>
              </DialogHeader>
              <ProjectVisual project={project} className="h-56 w-full" />
              <p className="text-sm leading-relaxed text-muted-foreground">{project.overview}</p>
              <Button asChild>
                <Link href={`/portfolio/${project.slug}`}>Open full case study</Link>
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
