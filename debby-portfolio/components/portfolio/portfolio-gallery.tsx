"use client";

import { useMemo, useState } from "react";
import { categories, projects } from "@/data/projects";
import { ProjectsCarousel } from "@/components/portfolio/projects-carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PortfolioGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    const list = projects.filter((project) => {
      const matchesCategory =
        category === "All" ||
        project.category.toLowerCase().includes(category.toLowerCase()) ||
        (category === "Logo" && project.category.includes("Logo")) ||
        (category === "Poster" && project.category.includes("Poster"));
      const haystack = `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase();
      return matchesCategory && haystack.includes(query.toLowerCase());
    });
    return list.sort((a, b) =>
      sort === "oldest" ? a.year.localeCompare(b.year) : b.year.localeCompare(a.year)
    );
  }, [query, category, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <Button
              key={item}
              size="sm"
              variant={category === item ? "default" : "outline"}
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects"
            aria-label="Search projects"
            className="sm:w-56"
          />
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="sm:w-40" aria-label="Sort projects">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <p className="py-4 text-sm text-muted-foreground">{filtered.length} projects</p>
      <ProjectsCarousel projects={filtered} className="px-2 sm:px-10" />
    </div>
  );
}
