import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectVisual } from "@/components/media/project-visual";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Debby Tella`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/portfolio">Portfolio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="gold">{project.category}</Badge>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <h1 className="mt-4 font-serif text-4xl sm:text-6xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.overview}</p>
      </header>

      <div className="mt-10">
        <ProjectVisual project={project} className="h-[420px] w-full" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Client</p>
            <p className="mt-2">{project.client}</p>
            <p className="mt-2 text-xs text-muted-foreground">Placeholder client name — replace in data.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Services</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.services.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Tools</p>
            <p className="mt-2 text-sm">{project.tools.join(", ")}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="challenge" className="mt-12">
        <TabsList>
          <TabsTrigger value="challenge">Challenge</TabsTrigger>
          <TabsTrigger value="approach">Approach</TabsTrigger>
          <TabsTrigger value="solution">Solution</TabsTrigger>
        </TabsList>
        <TabsContent value="challenge">{project.challenge}</TabsContent>
        <TabsContent value="approach">{project.approach}</TabsContent>
        <TabsContent value="solution">{project.solution}</TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">Gallery</h2>
        <Carousel className="mt-6">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={image}>
                <ProjectVisual
                  project={project}
                  src={image}
                  className="h-80 w-full"
                  label={`${project.title} gallery ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="mt-12 border border-border p-6">
        <h2 className="font-serif text-3xl">Outcome</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.outcome}</p>
      </section>

      <nav className="mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:justify-between">
        {previous ? (
          <Button asChild variant="outline">
            <Link href={`/portfolio/${previous.slug}`}>Previous: {previous.title}</Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button asChild>
            <Link href={`/portfolio/${next.slug}`}>Next: {next.title}</Link>
          </Button>
        ) : null}
      </nav>
    </article>
  );
}
