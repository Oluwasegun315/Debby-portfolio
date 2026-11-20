import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/experience";
import { Reveal } from "@/components/motion/reveal";
import { FiverrIcon } from "@/components/icons/brand-icons";

export const metadata: Metadata = {
  title: "About Debby Tella",
  description:
    "About Debby Tella — professional graphic designer with 3+ years experience in social media, Canva, presentations, magazine, mural, digital marketing, jersey and product design. Active on Fiverr.",
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
          Design is more than looking good. It is understanding an idea, finding the
          right visual language, and turning that idea into something people remember.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I am Debby Tella — a graphic designer with {site.experience.toLowerCase()}{" "}
            helping brands, businesses and product sellers communicate with clarity.
          </p>
          <p>
            My work spans social media, digital marketing, Canva templates, presentations,
            ebook covers, magazine layouts, mural concepts, stained glass inspired art,
            jersey sublimation and product design. Buyers come for polish, stay for
            patience, and return for upgrades.
          </p>
          <p>
            I also have an active Fiverr presence — so clients can see I am not a random
            portfolio. I am a working designer with real delivery experience.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline">Available worldwide</Badge>
            <Badge variant="outline">{site.responseTimeShort}</Badge>
            <Badge variant="outline">{site.experience} experience</Badge>
            <Badge variant="outline">Active on Fiverr</Badge>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden border border-border bg-charcoal">
          <Image
            src="/portrait/debby.jpg"
            alt="Debby Tella — graphic designer"
            fill
            className="object-cover object-[center_18%]"
            sizes="(max-width: 1024px) 100vw, 420px"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
            <p className="font-serif text-2xl">Debby Tella</p>
            <p className="text-sm text-gold">Graphic Designer · {site.experience}</p>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">Tools & craft</h2>
        <div className="mt-6 space-y-4">
          {designSkills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span>{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild className="bg-gold text-charcoal hover:bg-gold/90">
          <Link href="/my-work">Explore My Work</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={site.fiverr} target="_blank" rel="noreferrer">
            <FiverrIcon className="h-4 w-4" />
            Fiverr profile
          </a>
        </Button>
        <Button asChild variant="outline">
          <Link href="/#pay-and-contact">Hire Debby</Link>
        </Button>
      </div>
    </div>
  );
}
