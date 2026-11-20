export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
  initials: string;
  featured: boolean;
  ongoing?: boolean;
  source?: string;
};

/** Seed reviews already on the site. New Fiverr reviews are appended in reviews-live.json */
export const seedTestimonials: Testimonial[] = [
  {
    id: "0",
    name: "promansale",
    role: "Fiverr Buyer",
    company: "Product Label Design",
    location: "United Kingdom",
    projectType: "Label Design",
    quote:
      "Thank you Debby, for the quick turn around, and attention to details sample provided. Will definitely use you again for my other product label design.",
    rating: 5,
    initials: "P",
    featured: true,
    source: "Fiverr",
  },
  {
    id: "1",
    name: "swindlesea",
    role: "Fiverr Buyer",
    company: "Label Design Project",
    location: "United States",
    projectType: "Label Design",
    quote: "Thank you for the good work, the upgrade is just what I needed.",
    rating: 5,
    initials: "S",
    featured: true,
    ongoing: true,
    source: "Fiverr",
  },
  {
    id: "2",
    name: "edbrigde",
    role: "Fiverr Buyer",
    company: "Edwin Oil Label",
    location: "Germany",
    projectType: "Label Design",
    quote: "Thanks for the label — will definitely use you again.",
    rating: 5,
    initials: "E",
    featured: true,
    source: "Fiverr",
  },
  {
    id: "3",
    name: "btafone",
    role: "Fiverr Buyer",
    company: "Label Design Project",
    location: "United States",
    projectType: "Label Design",
    quote:
      "Debby was very patient with my recurrent updates, while maintaining professionalism and constantly encouraging me to share my expectations. I enjoyed working with you Debby and I strongly recommend anyone trust you with their project. Thank you.",
    rating: 4.7,
    initials: "B",
    featured: true,
    ongoing: true,
    source: "Fiverr",
  },
  {
    id: "4",
    name: "swindlesea",
    role: "Fiverr Buyer",
    company: "Repeat Label Design",
    location: "United States",
    projectType: "Label Design",
    quote: "Thank you once again — did accordingly to what was requested.",
    rating: 5,
    initials: "S",
    featured: true,
    ongoing: true,
    source: "Fiverr",
  },
  {
    id: "5",
    name: "swindlesea",
    role: "Fiverr Buyer",
    company: "Mix Fruits Juice Label",
    location: "United States",
    projectType: "Label Design",
    quote: "Good work, thank you.",
    rating: 5,
    initials: "S",
    featured: false,
    ongoing: true,
    source: "Fiverr",
  },
];

/** @deprecated Prefer getAllTestimonials from @/lib/reviews for live + seed reviews */
export const testimonials = seedTestimonials;

export function getFeaturedTestimonials() {
  return seedTestimonials.filter((t) => t.featured);
}
