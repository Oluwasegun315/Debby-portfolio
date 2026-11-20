export type WorkPiece = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  priceUsd: number;
  src: string;
};

export type WorkCategory = {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  cover: string;
  pieceCount: number;
  fromPriceUsd: number;
  pieces: WorkPiece[];
};

function buildPieces({
  count,
  prefix,
  folder,
  idPrefix,
  category,
  shortDescription,
  fullDescription,
  deliverables,
  basePrice,
}: {
  count: number;
  prefix: string;
  folder: string;
  idPrefix: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  basePrice: number;
}): WorkPiece[] {
  return Array.from({ length: count }, (_, index) => {
    const num = index + 1;
    const n = String(num).padStart(2, "0");
    return {
      id: `${idPrefix}-${num}`,
      title: `${category} ${num}`,
      category,
      shortDescription,
      fullDescription,
      deliverables,
      priceUsd: basePrice + ((num * 7) % 46),
      src: `/portfolio/${folder}/${prefix}-${n}.jpg`,
    };
  });
}

const socialMediaPieces = buildPieces({
  count: 23,
  prefix: "social-media",
  folder: "social-media-design",
  idPrefix: "smd",
  category: "Social Media Design",
  shortDescription:
    "Custom social media graphic designed for brand visibility and engagement.",
  fullDescription:
    "A polished social media design from Debby’s Social Media Design collection. Built for clear hierarchy, strong brand presence, and scroll-stopping visuals across Instagram, Facebook, and related platforms.",
  deliverables: [
    "High-resolution social media graphic",
    "Platform-ready crop and composition",
    "Typography and brand color treatment",
    "Export-ready file for posting",
  ],
  basePrice: 35,
});

const canvaTemplatePieces = buildPieces({
  count: 25,
  prefix: "canva-template",
  folder: "canva-template-design",
  idPrefix: "ctd",
  category: "Canva Template Design",
  shortDescription:
    "Editable Canva-ready template design for brand content and campaigns.",
  fullDescription:
    "A Canva Template Design piece from Debby’s collection. Created for brands and creators who need polished, reusable layouts that look premium, stay on-brand, and are ready to customize in Canva for posts, promotions, and marketing content.",
  deliverables: [
    "Canva-ready template layout",
    "Clean typography hierarchy",
    "Brand-friendly color system",
    "Reusable structure for future campaigns",
  ],
  basePrice: 40,
});

const powerpointPieces = buildPieces({
  count: 23,
  prefix: "powerpoint",
  folder: "powerpoint",
  idPrefix: "ppt",
  category: "PowerPoint",
  shortDescription:
    "Presentation slide design built for clarity, polish and client impact.",
  fullDescription:
    "A PowerPoint design from Debby’s presentation collection. Focused on clear storytelling, professional structure, and visuals that help pitches, reports and brand presentations feel confident and easy to follow.",
  deliverables: [
    "Slide layout and visual design",
    "Typography and hierarchy system",
    "Presentation-ready composition",
    "Clean export for client delivery",
  ],
  basePrice: 45,
});

const presentationDesignPieces = buildPieces({
  count: 24,
  prefix: "presentation-design",
  folder: "presentation-design",
  idPrefix: "prd",
  category: "Presentation Design",
  shortDescription:
    "Premium presentation design for pitches, decks and brand storytelling.",
  fullDescription:
    "A Presentation Design piece from Debby’s collection. Built for founders, marketers and professionals who need slides that feel clear, polished and persuasive — with strong hierarchy, clean layout and visual storytelling that keeps audiences engaged.",
  deliverables: [
    "Full presentation slide design",
    "Clear visual hierarchy",
    "Brand-aligned layout system",
    "Client-ready presentation export",
  ],
  basePrice: 50,
});

const ebookCoverPieces = buildPieces({
  count: 28,
  prefix: "ebook-cover",
  folder: "ebook-cover-design",
  idPrefix: "ecd",
  category: "Ebook Cover Design",
  shortDescription:
    "Eye-catching ebook cover design that sells the title at first glance.",
  fullDescription:
    "An Ebook Cover Design from Debby’s collection. Created to stop the scroll on Amazon, landing pages and promo posts — with strong title hierarchy, genre-aware composition and a cover that makes readers want to open the book.",
  deliverables: [
    "Front ebook cover design",
    "Title and typography treatment",
    "Marketplace-ready composition",
    "Export-ready cover artwork",
  ],
  basePrice: 42,
});

const magazineDesignPieces = buildPieces({
  count: 24,
  prefix: "magazine-design",
  folder: "magazine-design",
  idPrefix: "mgz",
  category: "Magazine Design",
  shortDescription:
    "Editorial magazine layout design with strong hierarchy and polished spreads.",
  fullDescription:
    "A Magazine Design piece from Debby’s collection. Built for editorial storytelling — clean spreads, intentional typography, and layouts that feel premium in print or digital magazine formats.",
  deliverables: [
    "Magazine page / spread design",
    "Editorial typography treatment",
    "Print and digital-ready composition",
    "Export-ready artwork",
  ],
  basePrice: 55,
});

const muralDesignPieces = buildPieces({
  count: 36,
  prefix: "mural-design",
  folder: "mural-design",
  idPrefix: "mrl",
  category: "Mural Design",
  shortDescription:
    "Bold mural concept design made for walls, spaces and brand environments.",
  fullDescription:
    "A Mural Design from Debby’s collection. Created for spaces that need presence — strong composition, memorable visuals, and concepts ready to guide real-world wall or large-format production.",
  deliverables: [
    "Mural concept artwork",
    "Large-format composition",
    "Brand / space-ready visual direction",
    "Export-ready design file",
  ],
  basePrice: 80,
});

const stainedGlassPieces = buildPieces({
  count: 37,
  prefix: "stained-glass",
  folder: "stained-glass-design",
  idPrefix: "stg",
  category: "Stained Glass Design",
  shortDescription:
    "Decorative stained glass style design with color, pattern and craft detail.",
  fullDescription:
    "A Stained Glass Design from Debby’s collection. Rich color, patterned craft, and decorative composition for windows, brand art, product packaging accents, or inspired visual storytelling.",
  deliverables: [
    "Stained-glass inspired artwork",
    "Color and pattern treatment",
    "Decorative composition ready for use",
    "High-resolution export",
  ],
  basePrice: 48,
});

const digitalMarketingPieces = buildPieces({
  count: 24,
  prefix: "digital-marketing",
  folder: "digital-marketing",
  idPrefix: "dmkt",
  category: "Digital Marketing",
  shortDescription:
    "Digital marketing creative built to promote offers, brands and campaigns.",
  fullDescription:
    "A Digital Marketing design from Debby’s collection. Created for ads, promos and campaign visuals that feel clear, persuasive and ready to perform across digital channels.",
  deliverables: [
    "Campaign-ready marketing graphic",
    "Clear offer hierarchy",
    "Platform-friendly composition",
    "Export-ready marketing artwork",
  ],
  basePrice: 45,
});

const jerseySublimationPieces = buildPieces({
  count: 42,
  prefix: "jersey-sublimation",
  folder: "jersey-sublimation",
  idPrefix: "jrs",
  category: "Jersey Sublimation",
  shortDescription:
    "Bold jersey sublimation design for teams, sportswear and custom kits.",
  fullDescription:
    "A Jersey Sublimation design from Debby’s collection. Built for sports kits and custom apparel — strong patterns, readable numbers/names, and print-ready visual direction.",
  deliverables: [
    "Jersey sublimation artwork",
    "Team / kit visual layout",
    "Print-oriented composition",
    "High-resolution design file",
  ],
  basePrice: 70,
});

const productDesignPieces = buildPieces({
  count: 24,
  prefix: "product-design",
  folder: "product-design",
  idPrefix: "prdsgn",
  category: "Product Design",
  shortDescription:
    "Product-focused visual design that helps items look ready to sell.",
  fullDescription:
    "A Product Design piece from Debby’s collection. Created to present products with clarity and premium polish — ideal for packaging support, product visuals and sales-ready presentation.",
  deliverables: [
    "Product visual design",
    "Clean commercial composition",
    "Brand-aligned treatment",
    "Export-ready artwork",
  ],
  basePrice: 55,
});

/** Fiverr-proven label, packaging & flyer work from /portfolio/works */
const labelDesignNamed: Record<string, { title: string; category: string }> = {
  "ketchup-bottle-label.webp": {
    title: "Redgold Organic Ketchup Label",
    category: "Label Design",
  },
  "images-10.jpg": {
    title: "Lemonade Juice Packaging Label",
    category: "Label Design",
  },
  "birthday-party-event-flyer-template.jpg": {
    title: "Birthday Party Event Flyer",
    category: "Flyer Design",
  },
  "images-1.jpg": {
    title: "Graphics Design Service Flyer",
    category: "Marketing Design",
  },
  "images-5.jpg": {
    title: "Creative Business Flyer",
    category: "Flyer Design",
  },
  "club-dj-party-flyer-social-media-post_505751-6153.avif": {
    title: "Club DJ Party Flyer",
    category: "Social Media Design",
  },
  "spectacular-creative-business-flyer-template-1659506710953-cover.webp": {
    title: "Spectacular Business Flyer Cover",
    category: "Flyer Design",
  },
  "images-30.jpg": {
    title: "Jungle Animal Wall Mural",
    category: "Illustration",
  },
  "images-20.jpg": {
    title: "Cultural Character Illustration",
    category: "Illustration",
  },
  "abstract-business-flyer-with-photo_23-2148341823.avif": {
    title: "Abstract Business Flyer",
    category: "Marketing Design",
  },
};

const labelDesignFiles = [
  "ketchup-bottle-label.webp",
  "images-10.jpg",
  "images.jpg",
  "images-2.jpg",
  "images-3.jpg",
  "images-4.jpg",
  "images-6.jpg",
  "images-7.jpg",
  "images-8.jpg",
  "images-9.jpg",
  "images-11.jpg",
  "images-12.jpg",
  "images-13.jpg",
  "images-14.jpg",
  "images-15.jpg",
  "images-16.jpg",
  "images-17.jpg",
  "images-18.jpg",
  "images-19.jpg",
  "images-21.jpg",
  "images-22.jpg",
  "images-23.jpg",
  "images-25.jpg",
  "images-26.jpg",
  "images-27.jpg",
  "images-28.jpg",
  "images-29.jpg",
  "images-31.jpg",
  "images-32.jpg",
  "images-33.jpg",
  "images-34.jpg",
  "images-35.jpg",
  "images-36.jpg",
  "images-37.jpg",
  "images-38.jpg",
  "images-39.jpg",
  "images-40.jpg",
  "images-41.jpg",
  "images-42.jpg",
  "images-43.jpg",
  "images-44.jpg",
  "images-45.jpg",
  "images-46.jpg",
  "images-47.jpg",
  "images-48.jpg",
  "images-49.jpg",
  "images-50.jpg",
  "images-51.jpg",
  "images-52.jpg",
  "images-53.jpg",
  "images-54.jpg",
  "images-55.jpg",
  "images-56.jpg",
  "images-57.jpg",
  "images-58.jpg",
  "images-59.jpg",
  "images-60.jpg",
  "images-61.jpg",
  "images-62.jpg",
  "images-63.jpg",
  "images-64.jpg",
  "images-65.jpg",
  "birthday-party-event-flyer-template.jpg",
  "images-1.jpg",
  "images-5.jpg",
  "club-dj-party-flyer-social-media-post_505751-6153.avif",
  "spectacular-creative-business-flyer-template-1659506710953-cover.webp",
  "images-30.jpg",
  "images-20.jpg",
  "abstract-business-flyer-with-photo_23-2148341823.avif",
];

const labelDesignPieces: WorkPiece[] = labelDesignFiles.map((file, index) => {
  const num = index + 1;
  const named = labelDesignNamed[file];
  const category = named?.category ?? "Label Design";
  return {
    id: `lbl-${num}`,
    title: named?.title ?? `Label & Packaging Design ${num}`,
    category,
    shortDescription:
      "Fiverr-ready label, packaging or marketing design from Debby’s delivered work style.",
    fullDescription:
      "A design from Debby’s Label & Packaging collection — the same craft buyers see on her Fiverr profile (yemisi4). Built for product sellers who need shelf-ready labels, bottle packaging, flyers and commercial visuals that look professional, not random.",
    deliverables: [
      "Custom label / packaging / marketing artwork",
      "Print-ready composition",
      "Brand-aligned typography and color",
      "Mockup-ready presentation",
    ],
    priceUsd: 45 + ((num * 7) % 56),
    src: `/portfolio/works/${file}`,
  };
});

function toCategory(
  slug: string,
  title: string,
  description: string,
  pieces: WorkPiece[]
): WorkCategory {
  return {
    id: slug,
    slug,
    title,
    eyebrow: "Work space",
    description,
    cover: pieces[0]?.src ?? "",
    pieceCount: pieces.length,
    fromPriceUsd: Math.min(...pieces.map((p) => p.priceUsd)),
    pieces,
  };
}

export const workCategories: WorkCategory[] = [
  toCategory(
    "label-design",
    "Label Design",
    "Debby’s Fiverr specialty — product labels, bottle packaging and commercial visuals buyers can verify on her live Fiverr profile (yemisi4). Open this workspace to preview the full label & packaging set.",
    labelDesignPieces
  ),
  toCategory(
    "social-media-design",
    "Social Media Design",
    "A full collection of social media designs built for brands that want clean, bold, scroll-ready posts. Open this workspace to preview every piece in this category.",
    socialMediaPieces
  ),
  toCategory(
    "canva-template-design",
    "Canva Template Design",
    "Reusable Canva template designs for content that stays polished and on-brand. Open this workspace to preview the full Canva Template Design set.",
    canvaTemplatePieces
  ),
  toCategory(
    "powerpoint",
    "PowerPoint",
    "Presentation designs that make pitches and brand stories feel clear, confident and professional. Open this workspace to preview every PowerPoint piece.",
    powerpointPieces
  ),
  toCategory(
    "presentation-design",
    "Presentation Design",
    "A complete Presentation Design workspace — open it to preview every deck visual Debby has built for pitches, talks and brand storytelling.",
    presentationDesignPieces
  ),
  toCategory(
    "ebook-cover-design",
    "Ebook Cover Design",
    "A full Ebook Cover Design collection made to sell books at first glance. Open this workspace to preview every cover in the set.",
    ebookCoverPieces
  ),
  toCategory(
    "magazine-design",
    "Magazine Design",
    "Editorial magazine designs with polished spreads and clear storytelling. Open this workspace to preview every magazine piece.",
    magazineDesignPieces
  ),
  toCategory(
    "mural-design",
    "Mural Design",
    "Bold mural concepts for walls, spaces and brand environments. Open this workspace to preview the full mural set.",
    muralDesignPieces
  ),
  toCategory(
    "stained-glass-design",
    "Stained Glass Design",
    "Decorative stained glass inspired designs rich with color and craft. Open this workspace to preview every piece in the collection.",
    stainedGlassPieces
  ),
  toCategory(
    "digital-marketing",
    "Digital Marketing",
    "Campaign-ready digital marketing creatives for ads, offers and brand promotion. Open this workspace to preview the full set.",
    digitalMarketingPieces
  ),
  toCategory(
    "jersey-sublimation",
    "Jersey Sublimation",
    "Custom jersey sublimation designs for teams and sportswear. Open this workspace to preview every kit visual.",
    jerseySublimationPieces
  ),
  toCategory(
    "product-design",
    "Product Design",
    "Product-focused visuals that help items look polished and ready to sell. Open this workspace to preview every piece.",
    productDesignPieces
  ),
];

export function getWorkCategory(slug: string) {
  return workCategories.find((category) => category.slug === slug);
}

export function getAllWorkPieces() {
  return workCategories.flatMap((category) => category.pieces);
}

/** How many pieces from each new workspace appear on the homepage teaser */
export const HOME_FEATURE_COUNT = 3;

export type HomeFeaturedPiece = WorkPiece & {
  workspaceSlug: string;
  workspaceTitle: string;
};

/**
 * Pull the first N designs from every workspace for the homepage carousel.
 * When a new zip/workspace is added, its first 5 pieces automatically show here
 * so buyers feel pulled into the full workspace.
 */
export function getHomeFeaturedPieces(
  perCategory = HOME_FEATURE_COUNT
): HomeFeaturedPiece[] {
  return workCategories.flatMap((category) =>
    category.pieces.slice(0, perCategory).map((piece) => ({
      ...piece,
      workspaceSlug: category.slug,
      workspaceTitle: category.title,
    }))
  );
}

/** Mix covers from each workspace for decorative collages */
export function getHeroCollagePieces(limit = 8) {
  const covers = workCategories.map((c) => c.pieces[0]).filter(Boolean);
  const extras = workCategories.flatMap((c) => c.pieces.slice(1, 3));
  return [...covers, ...extras].slice(0, limit);
}

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
