export type WorkItem = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  priceUsd: number;
  src: string;
};

/**
 * Curated showcase only — not every uploaded file.
 * Files live in /public/portfolio/works
 */
export const works: WorkItem[] = [
  {
    id: "1",
    title: "Redgold Organic Ketchup Label",
    category: "Label Design",
    shortDescription: "Premium bottle label with front and back layout.",
    fullDescription:
      "A complete product label design for Redgold Organic Ketchup. The work includes a polished front label with brand identity, product name and origin details, plus a back label with product story, organic highlights and barcode placement. Designed to look premium on shelf while staying clear and commercial.",
    deliverables: [
      "Front label design",
      "Back label design",
      "Bottle mockup presentation",
      "Print-ready artwork direction",
    ],
    priceUsd: 85,
    src: "/portfolio/works/ketchup-bottle-label.webp",
  },
  {
    id: "2",
    title: "Lemonade Juice Packaging Label",
    category: "Label Design",
    shortDescription: "Fresh juice label with bottle mockup and product details.",
    fullDescription:
      "A lemonade juice packaging project featuring a wraparound label layout, nutrition information, ingredients list and a realistic bottle mockup. The design uses bright citrus colors to communicate freshness, natural quality and quick shelf recognition for beverage buyers.",
    deliverables: [
      "Full wraparound label",
      "Nutrition and ingredients layout",
      "Bottle mockup",
      "Retail-ready visual presentation",
    ],
    priceUsd: 75,
    src: "/portfolio/works/images-10.jpg",
  },
  {
    id: "3",
    title: "Birthday Party Event Flyer",
    category: "Flyer Design",
    shortDescription: "Bold birthday flyer with date, DJ and entry details.",
    fullDescription:
      "An event flyer created for a birthday celebration. The design combines a strong portrait focus, floral accents and clear hierarchy for the event name, date, DJ, entry fee and venue details. Built to work for both print promotion and digital sharing.",
    deliverables: [
      "Full event flyer design",
      "Typography and layout system",
      "Print and digital export ready files",
    ],
    priceUsd: 55,
    src: "/portfolio/works/birthday-party-event-flyer-template.jpg",
  },
  {
    id: "4",
    title: "Graphics Design Service Flyer",
    category: "Marketing Design",
    shortDescription: "Service flyer for branding, flyers, social and labels.",
    fullDescription:
      "A promotional flyer designed to present graphic design services clearly. It highlights branding, flyer design, social media design, business cards, label design and printing support — with a direct call to action for project discussions.",
    deliverables: [
      "Marketing flyer layout",
      "Service list presentation",
      "Call-to-action design",
    ],
    priceUsd: 50,
    src: "/portfolio/works/images-1.jpg",
  },
  {
    id: "5",
    title: "Creative Business Flyer",
    category: "Flyer Design",
    shortDescription: "Modern navy-and-gold business promotional flyer.",
    fullDescription:
      "A professional business flyer with strong contrast, structured service sections and a confident headline treatment. Designed for commercial communication where clarity and a premium first impression matter.",
    deliverables: [
      "Business flyer design",
      "Sectioned service layout",
      "Print-ready composition",
    ],
    priceUsd: 60,
    src: "/portfolio/works/images-5.jpg",
  },
  {
    id: "6",
    title: "Club DJ Party Flyer",
    category: "Social Media Design",
    shortDescription: "High-energy party flyer for social promotion.",
    fullDescription:
      "A nightlife and DJ party flyer designed for fast recognition on social platforms. Bold color, contrast and short supporting copy make the event feel exciting while keeping key details visible.",
    deliverables: [
      "Social event flyer",
      "Digital post-ready layout",
      "High-impact visual treatment",
    ],
    priceUsd: 45,
    src: "/portfolio/works/club-dj-party-flyer-social-media-post_505751-6153.avif",
  },
  {
    id: "7",
    title: "Spectacular Business Flyer Cover",
    category: "Flyer Design",
    shortDescription: "Creative business flyer cover with premium structure.",
    fullDescription:
      "A creative business flyer cover concept made for brand communication and promotional campaigns. The layout focuses on visual strength, hierarchy and a polished finish suitable for professional outreach.",
    deliverables: [
      "Flyer cover design",
      "Brand-forward composition",
      "Export-ready visual",
    ],
    priceUsd: 65,
    src: "/portfolio/works/spectacular-creative-business-flyer-template-1659506710953-cover.webp",
  },
  {
    id: "8",
    title: "Jungle Animal Wall Mural",
    category: "Illustration",
    shortDescription: "Playful jungle mural prepared for interior walls.",
    fullDescription:
      "A colorful jungle mural illustration featuring animals and tropical foliage, presented in an interior room mockup. Ideal for children's spaces, themed rooms or decorative wall applications that need warmth and personality.",
    deliverables: [
      "Full mural illustration",
      "Interior mockup presentation",
      "Decorative artwork direction",
    ],
    priceUsd: 120,
    src: "/portfolio/works/images-30.jpg",
  },
  {
    id: "9",
    title: "Cultural Character Illustration",
    category: "Illustration",
    shortDescription: "Detailed ornamental character illustration.",
    fullDescription:
      "A detailed character illustration with rich ornamentation, gold accents and bold color storytelling. Created as a premium visual piece for expressive brand or decorative use.",
    deliverables: [
      "Character illustration",
      "Ornament and color detailing",
      "High-resolution presentation",
    ],
    priceUsd: 95,
    src: "/portfolio/works/images-20.jpg",
  },
  {
    id: "10",
    title: "Abstract Business Flyer",
    category: "Marketing Design",
    shortDescription: "Clean business flyer with photo integration.",
    fullDescription:
      "A clean business flyer concept with photo integration and professional structure. Designed to communicate credibility and invite action from potential clients.",
    deliverables: [
      "Business flyer design",
      "Photo-integrated layout",
      "Marketing-ready export",
    ],
    priceUsd: 55,
    src: "/portfolio/works/abstract-business-flyer-with-photo_23-2148341823.avif",
  },
];

export function getShowcaseWorks() {
  return works;
}

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
