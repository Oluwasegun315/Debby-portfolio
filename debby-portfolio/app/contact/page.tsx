import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock3, CircleCheck } from "lucide-react";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { ContactForm } from "@/components/forms/contact-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with graphic designer Debby Tella about your next visual project.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge variant="gold">{site.availability}</Badge>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Let&apos;s Create Something Great Together.</h1>
          <p className="mt-4 text-muted-foreground">
            Tell me a little about your project, your goals and what you have in mind.
          </p>
          <div className="mt-8 space-y-4">
            <Card>
              <CardContent className="flex items-start gap-3 p-5">
                <Mail className="mt-0.5 h-4 w-4 text-gold" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a className="text-sm text-gold hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start gap-3 p-5">
                <Clock3 className="mt-0.5 h-4 w-4 text-gold" />
                <p className="text-sm">{site.responseTime}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <p className="text-sm font-medium">Inquiry process</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CircleCheck className="h-4 w-4 text-gold" /> Send a brief
                  </li>
                  <li className="flex gap-2">
                    <CircleCheck className="h-4 w-4 text-gold" /> I review fit and scope
                  </li>
                  <li className="flex gap-2">
                    <CircleCheck className="h-4 w-4 text-gold" /> We discuss timeline and next steps
                  </li>
                </ul>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-3 text-sm">
              {site.socials.map((social) => (
                <a key={social.name} href={social.href} className="text-muted-foreground hover:text-foreground">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>

      <section className="mt-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-3xl">FAQ</h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/faq">View all</Link>
          </Button>
        </div>
        <Accordion type="single" collapsible>
          {faqs.slice(0, 4).map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
