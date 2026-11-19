export const site = {
  name: "Debby Tella",
  professionalName: "Debby",
  profession: "Graphic Designer",
  experience: "3+ Years",
  email: "debbytella17@gmail.com",
  phone: "09135101748",
  whatsapp: "https://wa.me/2349135101748",
  fiverr: "https://www.fiverr.com/yemisi4",
  availability: "Available Monday–Friday (not Saturday or Sunday)",
  availabilityShort: "Mon–Fri · Off Sat & Sun",
  bookingNote: "Booking this month — next weekday slots open",
  responseTime: "I reply within 4–5 hours — not up to 24 hours.",
  responseTimeShort: "Reply within 4–5 hours",
  urgencyNote: "Taking selected weekday projects this week",
  revisions: {
    roundsIncluded: 2,
    headline: "2 revision rounds included",
    detail:
      "Standard packages include 2 revision rounds so we can refine the work until it feels right. Extra rounds are available if you need them.",
  },
  workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  offDays: ["Saturday", "Sunday"],
  tagline: "Design that stops the scroll and sells the story.",
  shortBio:
    "Hi, I'm Debby Tella — a graphic designer with 3+ years of experience creating social media designs, Canva templates, PowerPoint and presentation designs, ebook covers and clean visual designs for brands and businesses.",
  footerLine:
    "Graphic designer specializing in social media, Canva templates, presentations, ebook covers and visual design that helps ideas sell.",
  specialization: "Social Media, Canva, Presentations, Ebook Covers, Magazine, Mural, Stained Glass & Graphic Design",
  payments: {
    headline: "Pay the way that works for you",
    note: "PayPal is not accepted. For crypto and other methods, message Debby and she will share the details.",
    nigeriaBank: {
      accountName: "IDOWU DEBORAH AYOKA",
      accountNumber: "9135101748",
      banks: ["Opay", "PalmPay", "Nigeria bank transfer"],
      note: "When paying via a Nigeria bank account / Opay / PalmPay, use these details. The name that will show is IDOWU DEBORAH AYOKA.",
    },
    methods: [
      {
        id: "bank",
        title: "Nigeria bank / Opay / PalmPay",
        detail:
          "Transfer to 9135101748 — IDOWU DEBORAH AYOKA. Works for Opay, PalmPay and Nigeria bank transfers.",
      },
      {
        id: "crypto",
        title: "Crypto",
        detail:
          "BTC, USDT, Ethereum and other major cryptocurrencies. Message Debby for wallet details.",
      },
      {
        id: "other",
        title: "Other payment methods",
        detail:
          "Flexible options available on request — except PayPal. Message Debby and she will share the right details.",
      },
    ],
    excluded: ["PayPal"],
    fiverrNote:
      "You can also pay Debby on Fiverr if that feels more convenient. If you prefer to avoid Fiverr service charges, pay directly using the bank / Opay / PalmPay details below — both options are welcome.",
    commitment:
      "Debby sacrifices her time for every client — so your project gets her best work and meets your expectations.",
  },
  packages: [
    {
      id: "social",
      name: "Social Starter",
      priceFrom: 45,
      idealFor: "Brands that need scroll-stopping posts fast",
      includes: ["3 social media designs", "Platform-ready crops", "2 revision rounds"],
    },
    {
      id: "brand",
      name: "Brand Pack",
      priceFrom: 120,
      idealFor: "Businesses that want a stronger visual presence",
      includes: ["Canva-ready templates", "Social set", "Brand-aligned color treatment", "2 revision rounds"],
      featured: true,
    },
    {
      id: "deck",
      name: "Presentation Deck",
      priceFrom: 150,
      idealFor: "Pitches, reports and client presentations",
      includes: ["Full slide design system", "Clear hierarchy", "Export-ready files", "2 revision rounds"],
    },
  ],
  stats: {
    experience: "3+",
    experienceLabel: "Years of Experience",
    projects: "123+",
    projectsLabel: "Design Pieces",
    projectsNote: "Across social, Canva, presentations and ebook covers.",
    clients: "Repeat",
    clientsLabel: "Buyer Collaborations",
    clientsNote: "Includes ongoing client collaborations.",
  },
  socials: [
    { name: "Fiverr", href: "https://www.fiverr.com/yemisi4", label: "Fiverr Profile" },
    { name: "Email", href: "mailto:debbytella17@gmail.com", label: "Email Debby" },
    { name: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { name: "Behance", href: "https://behance.net", label: "Behance" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/my-work", label: "My Work" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  budgetOptions: [
    "To be discussed",
    "Under $100",
    "$100 – $250",
    "$250 – $500",
    "$500 – $1,000",
    "$1,000+",
  ],
  timelineOptions: ["ASAP", "1–2 Weeks", "2–4 Weeks", "1–2 Months", "Flexible"],
  projectTypes: [
    "Label Design",
    "Packaging",
    "Brand Identity",
    "Logo Design",
    "Social Media",
    "Marketing Design",
    "Poster / Flyer",
    "Other",
  ],
  deliverableOptions: [
    "Product label",
    "Packaging graphics",
    "Logo",
    "Brand guidelines",
    "Social templates",
    "Print collateral",
    "Poster / flyer",
    "Other",
  ],
} as const;

export const seo = {
  title: "Debby Tella — Graphic Designer | Social, Magazine, Mural & More",
  description:
    "Hire Debby Tella, a Nigeria-based graphic designer with 3+ years experience. Social media, Canva templates, presentations, ebook covers, magazine design, mural design and stained glass design. Pay via Opay, PalmPay, bank transfer or crypto. Replies within 4–5 hours on weekdays.",
  keywords: [
    "Debby Tella",
    "graphic designer Nigeria",
    "social media designer",
    "Canva template designer",
    "PowerPoint designer",
    "presentation design",
    "ebook cover design",
    "magazine design",
    "mural design",
    "stained glass design",
    "hire graphic designer",
    "Opay PalmPay designer",
    "Fiverr graphic designer yemisi4",
  ],
  ogImage: "/portrait/debby.jpg",
  locale: "en_NG",
  geo: {
    region: "NG",
    placename: "Nigeria",
  },
};
