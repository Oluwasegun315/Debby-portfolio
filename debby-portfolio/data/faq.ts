export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "pricing",
    question: "How does pricing work?",
    answer:
      "Packages start from clear “from” prices on the homepage (Social Starter, Brand Pack, Presentation Deck). Custom projects are quoted after Debby sees your brief. You only pay once the scope is agreed.",
  },
  {
    id: "payment",
    question: "How can I pay Debby?",
    answer:
      "You can pay by bank transfer, Opay, or PalmPay using the account details on the site (9135101748 — IDOWU DEBORAH AYOKA). Crypto (BTC, USDT, Ethereum) and other methods are available after you message Debby. PayPal is not accepted. Fiverr is optional if you prefer that checkout.",
  },
  {
    id: "timeline",
    question: "How long does a project take?",
    answer:
      "Most social sets take about 2–4 working days. Templates and decks depend on length and complexity. Debby confirms a realistic timeline before work starts so you know what to expect.",
  },
  {
    id: "revisions",
    question: "How many revision rounds are included?",
    answer:
      "Standard packages include 2 revision rounds. Extra rounds can be added if you need more polish. Revisions are for refining the agreed direction — not starting a brand-new concept from zero unless scoped separately.",
  },
  {
    id: "need-from-client",
    question: "What does Debby need from me to start?",
    answer:
      "Share: what you need (social posts, Canva templates, slides, ebook cover, etc.), your brand name/colors/logo if you have them, who the design is for, deadline, and any inspiration or examples you like. A short WhatsApp or Gmail message is enough to begin.",
  },
  {
    id: "availability",
    question: "When is Debby available?",
    answer:
      "Debby is available Monday to Friday — every weekday. She does not take new project work on Saturday and Sunday. She still replies within 4–5 hours on working days.",
  },
  {
    id: "booking",
    question: "Can I book a slot this month?",
    answer:
      "Yes. Debby is booking projects this month. Next available slots are on weekdays (Monday–Friday). Message early to reserve your place.",
  },
  {
    id: "scratch-inspiration",
    question: "Can Debby design from scratch and from inspiration?",
    answer:
      "Yes. She can build a design from a blank brief, or take your rough idea / reference and turn it into a premium finished piece.",
  },
  {
    id: "start",
    question: "How do I start a project?",
    answer:
      "Message Debby on WhatsApp or Gmail (debbytella17@gmail.com). Say what you need and how you want to pay. She replies within 4–5 hours on weekdays.",
  },
];
