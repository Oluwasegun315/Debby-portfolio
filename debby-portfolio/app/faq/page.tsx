import type { Metadata } from "next";
import { faqs } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pricing, payment, timelines, revisions, availability and what Debby needs from clients.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl sm:text-6xl">FAQ</h1>
      <p className="mt-4 text-muted-foreground">
        Pricing, payment, timelines, revisions, weekday availability, and what to send before
        Debby starts your project.
      </p>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
