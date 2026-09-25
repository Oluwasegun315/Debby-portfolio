import type { Metadata } from "next";
import { milestones, skills } from "@/data/experience";
import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const metadata: Metadata = {
  title: "Experience",
  description: "The design journey, skills and professional growth of graphic designer Debby Tella.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">{site.experience}</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Experience</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A short timeline of how the practice has grown — from fundamentals to a structured freelance
        studio workflow.
      </p>

      <ol className="relative mt-16 space-y-10 border-l border-gold/40 pl-8">
        {milestones.map((item) => (
          <li key={item.id} className="relative">
            <span className="absolute -left-[39px] top-1 h-3 w-3 rounded-full bg-gold" />
            <Badge variant="outline">{item.year}</Badge>
            <h2 className="mt-3 font-serif text-3xl">{item.title}</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">{item.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <section className="mt-20">
        <h2 className="font-serif text-3xl">Skills</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span>{skill.name}</span>
                <span className="text-muted-foreground">{skill.category}</span>
              </div>
              <Progress value={skill.level} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
