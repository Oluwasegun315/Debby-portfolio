export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  client: string;
  services: string[];
  tools: string[];
  thumbnail: string;
  images: string[];
  tags: string[];
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  featured: boolean;
  hasCustomImage?: boolean;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "redgold-ketchup-label",
    title: "Redgold — Organic Ketchup Label",
    category: "Label Design",
    year: "2025",
    description:
      "Premium bottle label design for an organic ketchup brand with polished front and back layouts.",
    overview:
      "A packaging label project focused on shelf impact, product clarity and a premium organic feel.",
    client: "Product label project",
    services: ["Label Design", "Packaging Graphics", "Print-Ready Artwork"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: "/portfolio/works/ketchup-bottle-label.webp",
    images: [
      "/portfolio/works/ketchup-bottle-label.webp",
      "/portfolio/works/images-10.jpg",
    ],
    tags: ["Label Design", "Packaging", "Product"],
    challenge: "Create a label that feels premium and natural while remaining clear on a bottle.",
    approach: "Built hierarchy around brand name, product type and origin details with a refined color system.",
    solution: "A complete front/back label direction presented on a realistic bottle mockup.",
    outcome: "A strong packaging presentation ready for client review and print preparation.",
    featured: true,
    hasCustomImage: true,
  },
  {
    id: "2",
    slug: "lemonade-juice-label",
    title: "Lemonade Juice — Label Design",
    category: "Label Design",
    year: "2025",
    description:
      "Fresh juice packaging with bottle mockup, wraparound label layout and product details.",
    overview:
      "Designed for a lemonade juice product that needed a clean, refreshing and commercial look.",
    client: "Product label project",
    services: ["Label Design", "Mockup Presentation"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: "/portfolio/works/images-10.jpg",
    images: ["/portfolio/works/images-10.jpg", "/portfolio/works/ketchup-bottle-label.webp"],
    tags: ["Label Design", "Juice", "Packaging"],
    challenge: "Balance freshness, nutrition information and brand personality in one wrap.",
    approach: "Used bright citrus colors, clear product naming and structured supporting information.",
    solution: "A bottle mockup and flat label layout designed for retail recognition.",
    outcome: "A complete label presentation ready to share with buyers.",
    featured: true,
    hasCustomImage: true,
  },
  {
    id: "3",
    slug: "birthday-party-flyer",
    title: "Birthday Party — Event Flyer",
    category: "Flyer Design",
    year: "2025",
    description:
      "A bold birthday event flyer with strong typography, floral accents and clear event details.",
    overview: "Created for a birthday celebration that needed a premium and energetic visual.",
    client: "Event flyer project",
    services: ["Flyer Design", "Event Graphics"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    thumbnail: "/portfolio/works/birthday-party-event-flyer-template.jpg",
    images: [
      "/portfolio/works/birthday-party-event-flyer-template.jpg",
      "/portfolio/works/club-dj-party-flyer-social-media-post_505751-6153.avif",
    ],
    tags: ["Flyer", "Event", "Party"],
    challenge: "Make the flyer feel premium while keeping date, venue and offer details readable.",
    approach: "Layered portrait, floral accents and clear typographic hierarchy.",
    solution: "A polished event flyer ready for print and digital sharing.",
    outcome: "A strong promotional piece for event marketing.",
    featured: true,
    hasCustomImage: true,
  },
  {
    id: "4",
    slug: "graphics-service-flyer",
    title: "Graphics Design — Service Flyer",
    category: "Marketing Design",
    year: "2025",
    description:
      "Promotional flyer highlighting branding, flyer, social media and label design services.",
    overview: "A marketing flyer designed to communicate design services clearly and attractively.",
    client: "Marketing design project",
    services: ["Flyer Design", "Marketing Graphics"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    thumbnail: "/portfolio/works/images-1.jpg",
    images: ["/portfolio/works/images-1.jpg", "/portfolio/works/images-5.jpg"],
    tags: ["Marketing", "Flyer", "Services"],
    challenge: "Present multiple services without overcrowding the layout.",
    approach: "Used a clear checklist structure and strong visual focus.",
    solution: "A promotional flyer with a direct call to action.",
    outcome: "Useful for introducing design services to potential clients.",
    featured: true,
    hasCustomImage: true,
  },
  {
    id: "5",
    slug: "creative-business-flyer",
    title: "Creative Business Flyer",
    category: "Flyer Design",
    year: "2024",
    description:
      "Modern business flyer with strong contrast, clear sections and a professional finish.",
    overview: "Designed for a business promotion needing a clean and confident visual.",
    client: "Business flyer project",
    services: ["Flyer Design", "Print Design"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: "/portfolio/works/images-5.jpg",
    images: [
      "/portfolio/works/images-5.jpg",
      "/portfolio/works/spectacular-creative-business-flyer-template-1659506710953-cover.webp",
    ],
    tags: ["Flyer", "Business", "Print"],
    challenge: "Keep the flyer informative while staying visually sharp.",
    approach: "Organized content into clear sections with bold headline treatment.",
    solution: "A print-ready business flyer concept with premium contrast.",
    outcome: "A professional marketing piece for business outreach.",
    featured: true,
    hasCustomImage: true,
  },
  {
    id: "6",
    slug: "club-dj-party-flyer",
    title: "Club DJ Party Flyer",
    category: "Social Media Design",
    year: "2024",
    description:
      "High-energy party flyer designed for social posts and event promotion.",
    overview: "A nightlife flyer concept made for fast recognition on social platforms.",
    client: "Event promotion project",
    services: ["Social Media Design", "Flyer Design"],
    tools: ["Adobe Photoshop"],
    thumbnail: "/portfolio/works/club-dj-party-flyer-social-media-post_505751-6153.avif",
    images: [
      "/portfolio/works/club-dj-party-flyer-social-media-post_505751-6153.avif",
      "/portfolio/works/birthday-party-event-flyer-template.jpg",
    ],
    tags: ["Social Media", "Event", "Flyer"],
    challenge: "Create excitement without losing essential event information.",
    approach: "Used bold color, contrast and short supporting copy.",
    solution: "A social-ready party flyer with strong visual pull.",
    outcome: "A promotional design suited for digital event marketing.",
    featured: true,
    hasCustomImage: true,
  },
];

export const categories = [
  "All",
  "Label Design",
  "Flyer Design",
  "Marketing Design",
  "Social Media",
  "Packaging",
  "Illustration",
  "Other",
];

function normalizeCategory(value: string) {
  const map: Record<string, string> = {
    "Label Design": "Label Design",
    "Flyer Design": "Flyer Design",
    "Marketing Design": "Marketing Design",
    "Social Media Design": "Social Media",
    "Social Media": "Social Media",
    Packaging: "Packaging",
    Illustration: "Illustration",
  };
  return map[value] ?? "Other";
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => normalizeCategory(p.category) === category);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: projects[index - 1],
    next: projects[index + 1],
  };
}
