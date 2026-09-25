import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/experience";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Debby Tella, a graphic designer with 3+ years of experience in visual identity, branding and marketing design.",
};

export default function AboutPage() {
  const designSkills = skills.filter((s) => s.category === "Software");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">About</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl sm:text-6xl">
          Debby Tella — graphic designer.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I believe design is more than making things look good. It is about understanding an idea,
          finding the right visual language and turning that idea into something people can see,
          understand and remember.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I am Debby, a graphic designer with {site.experience.toLowerCase()} helping brands,
            businesses and product sellers communicate with more clarity. A core part of my work is
            product label design — juice labels, oil packaging, bottle graphics and related visual
            design.
          </p>
          <p>
            My process is calm and structured. I start with the brief, not the decoration. I look for
            what the label or design needs to do — attract, explain, distinguish, sell — and then
            build a visual that supports that purpose.
          </p>
          <p>
            Clients often come back for upgrades and new product labels. Clear communication,
            careful revisions and reliable delivery are as important as the design itself.
          </p>
        </div>
        <div
          className="relative min-h-[360px] bg-charcoal p-8 text-white"
          role="img"
          aria-label="Portrait placeholder for Debby Tella. Replace public/images/debby-portrait.jpg later."
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Portrait placeholder</p>
          <p className="mt-24 font-serif text-4xl">DT</p>
          <p className="mt-4 text-sm text-white/60">
            Replace this block with <code>/public/images/debby-portrait.jpg</code>
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: site.stats.experience, label: site.stats.experienceLabel },
          { value: site.stats.projects, label: site.stats.projectsLabel, note: site.stats.projectsNote },
          { value: site.stats.clients, label: site.stats.clientsLabel, note: site.stats.clientsNote },
          { value: "Visual", label: site.specialization },
        ].map((stat) => (
          <div key={stat.label} className="border border-border p-5">
            <p className="font-serif text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm">{stat.label}</p>
            {"note" in stat && stat.note ? (
              <p className="mt-2 text-xs text-muted-foreground">{stat.note}</p>
            ) : null}
          </div>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="font-serif text-3xl">Values</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Clarity", "Design should make the message easier, not louder."],
            ["Craft", "Typography, color and composition deserve patience."],
            ["Partnership", "The best work happens when the client is part of the process."],
          ].map(([title, text]) => (
            <div key={title} className="border border-border p-5">
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-serif text-3xl">Tools</h2>
        <div className="mt-6 space-y-4">
          {designSkills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span>{skill.name}</span>
                <Badge variant="outline">{skill.category}</Badge>
              </div>
              <Progress value={skill.level} />
            </div>
          ))}
        </div>
      </section>

      <Button asChild className="mt-12">
        <Link href="/start-project">Start a Project</Link>
      </Button>
    </div>
  );
}
