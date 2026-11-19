import { promises as fs } from "fs";
import path from "path";
import {
  seedTestimonials,
  type Testimonial,
} from "@/data/testimonials";

const LIVE_FILE = path.join(process.cwd(), "data", "reviews-live.json");

function initialsFromName(name: string) {
  const clean = name.trim();
  if (!clean) return "B";
  return clean.charAt(0).toUpperCase();
}

export async function readLiveReviews(): Promise<Testimonial[]> {
  try {
    const raw = await fs.readFile(LIVE_FILE, "utf8");
    const parsed = JSON.parse(raw) as Testimonial[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const live = await readLiveReviews();
  const byId = new Map<string, Testimonial>();
  for (const item of [...seedTestimonials, ...live]) {
    byId.set(item.id, item);
  }
  return Array.from(byId.values()).sort((a, b) => {
    const aNum = Number(a.id.replace(/\D/g, "")) || 0;
    const bNum = Number(b.id.replace(/\D/g, "")) || 0;
    return bNum - aNum;
  });
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const all = await getAllTestimonials();
  return all.filter((item) => item.featured);
}

export type NewReviewInput = {
  name: string;
  quote: string;
  rating?: number;
  location?: string;
  projectType?: string;
  company?: string;
  featured?: boolean;
  source?: string;
  secret?: string;
};

export async function addReview(input: NewReviewInput): Promise<Testimonial> {
  const expected = process.env.REVIEW_SECRET || "debby-reviews";
  if ((input.secret || "") !== expected) {
    throw new Error("UNAUTHORIZED");
  }

  const name = input.name.trim();
  const quote = input.quote.trim();
  if (!name || !quote) {
    throw new Error("INVALID");
  }

  const live = await readLiveReviews();
  const review: Testimonial = {
    id: `live-${Date.now()}`,
    name,
    role: "Fiverr Buyer",
    company: (input.company || "Fiverr Order").trim(),
    location: (input.location || "Fiverr").trim(),
    projectType: (input.projectType || "Design Project").trim(),
    quote,
    rating: Math.min(5, Math.max(1, Number(input.rating) || 5)),
    initials: initialsFromName(name),
    featured: input.featured !== false,
    source: input.source || "Fiverr",
  };

  const next = [review, ...live];
  await fs.writeFile(LIVE_FILE, JSON.stringify(next, null, 2), "utf8");
  return review;
}
