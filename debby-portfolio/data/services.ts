export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  slug: string;
};

export const services: Service[] = [
  {
    id: "1",
    slug: "label-design",
    icon: "Package",
    title: "Label Design",
    description:
      "Product labels that look sharp on the shelf and communicate quality at a glance. From juice and beverage labels to premium oil and bottle packaging — designed for print and real product use.",
    deliverables: [
      "Custom product label design",
      "Print-ready artwork",
      "Layout for bottle / packaging application",
      "Typography and hierarchy refinements",
      "Revision rounds based on your feedback",
      "Final files for production",
    ],
    idealFor:
      "Product sellers, juice and beverage brands, oil/sauce makers and anyone who needs a professional label that stands out.",
  },
  {
    id: "2",
    slug: "packaging-design",
    icon: "Layers",
    title: "Packaging Design",
    description:
      "Packaging graphics that support your product story — clear hierarchy, strong color and a finish that feels ready for retail.",
    deliverables: [
      "Packaging label / wrapper design",
      "Front-facing visual concept",
      "Supporting layout details",
      "Print-ready files",
      "Presentation mockup guidance",
    ],
    idealFor:
      "Product-based businesses launching or refreshing packaging for retail, gifting or online sales.",
  },
  {
    id: "3",
    slug: "brand-identity",
    icon: "Palette",
    title: "Brand Identity",
    description:
      "A cohesive visual identity that communicates who you are and what you stand for — from logo foundations to a clear visual direction.",
    deliverables: [
      "Primary logo and variations",
      "Color palette guidance",
      "Typography direction",
      "Simple brand usage notes",
      "Social profile starter kit",
    ],
    idealFor:
      "New businesses launching their brand, or brands looking to refresh and modernize how they show up.",
  },
  {
    id: "4",
    slug: "logo-design",
    icon: "PenTool",
    title: "Logo Design",
    description:
      "A distinctive logo mark created with intention — memorable, scalable and ready for print and digital use.",
    deliverables: [
      "Primary logo",
      "Alternate layouts",
      "Icon / mark version",
      "Monochrome versions",
      "File formats for print and digital",
    ],
    idealFor:
      "Businesses and creators who need a professional logo that works across packaging, social and marketing.",
  },
  {
    id: "5",
    slug: "social-media-design",
    icon: "Share2",
    title: "Social Media Design",
    description:
      "Clean social graphics that keep your brand consistent and your posts looking polished.",
    deliverables: [
      "Feed post designs",
      "Story covers",
      "Campaign graphics",
      "Simple reusable layouts",
    ],
    idealFor:
      "Brands and sellers who want a more professional, consistent look on social platforms.",
  },
  {
    id: "6",
    slug: "marketing-materials",
    icon: "Megaphone",
    title: "Marketing Materials",
    description:
      "Print and digital marketing graphics that present your offer clearly and professionally.",
    deliverables: [
      "Flyers and promotional graphics",
      "Product announcement visuals",
      "Simple promotional layouts",
      "Export-ready files",
    ],
    idealFor:
      "Businesses promoting products, launches or offers who need clean marketing visuals fast.",
  },
  {
    id: "7",
    slug: "poster-design",
    icon: "FileImage",
    title: "Poster & Flyer Design",
    description:
      "Bold posters and flyers designed to capture attention and communicate your message quickly.",
    deliverables: [
      "Custom poster design",
      "Flyer design",
      "Size variations as needed",
      "Print-ready files",
    ],
    idealFor:
      "Events, promotions, launches and campaigns that need a strong visual first impression.",
  },
  {
    id: "8",
    slug: "custom-graphic-design",
    icon: "Sparkles",
    title: "Custom Graphic Design",
    description:
      "Need something outside a standard category? Share the brief — labels, product graphics, upgrades and custom requests are welcome.",
    deliverables: [
      "Scoped to your project",
      "Clear deliverables before work begins",
      "All agreed file formats provided",
    ],
    idealFor:
      "Anyone with a specific design need. If you're unsure, send a message and describe what you need.",
  },
];
