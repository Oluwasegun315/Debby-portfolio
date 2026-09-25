export type Milestone = {
  id: string;
  year: string;
  title: string;
  description: string;
  highlights: string[];
};

export type Skill = {
  name: string;
  level: number; // 0-100
  category: string;
};

export const milestones: Milestone[] = [
  {
    id: "1",
    year: "2021",
    title: "The Beginning",
    description:
      "Started my design journey driven by a passion for visual communication. Explored the fundamentals of graphic design — typography, color theory, composition and layout. Completed foundational design courses and began building my first portfolio pieces.",
    highlights: [
      "Learned design fundamentals and principles",
      "Explored typography and color theory",
      "Built first portfolio pieces",
      "Started learning Adobe Illustrator and Photoshop",
    ],
  },
  {
    id: "2",
    year: "2022",
    title: "First Projects",
    description:
      "Took on my first client projects — logo designs, social media graphics and branding work for small businesses and entrepreneurs. Learned what it means to design for real clients with real briefs, real deadlines and real expectations. Every project was a lesson.",
    highlights: [
      "Completed first paid client projects",
      "Developed professional communication skills",
      "Built expertise in logo and identity design",
      "Began working across branding and print",
    ],
  },
  {
    id: "3",
    year: "2023",
    title: "Growing Confidence",
    description:
      "Took on more complex, multi-disciplinary projects — full brand identities, packaging design, editorial layout and marketing campaigns. Developed a clearer design philosophy and a more distinctive personal approach. The work became more intentional.",
    highlights: [
      "Completed first full brand identity project",
      "Expanded into packaging and editorial design",
      "Developed a structured design process",
      "Built a growing client base through referrals",
    ],
  },
  {
    id: "4",
    year: "2024",
    title: "Established Practice",
    description:
      "Established a clear creative focus and professional process. Built a portfolio of work I'm genuinely proud of. Developed long-term client relationships and the ability to lead projects from initial concept through to final delivery with confidence.",
    highlights: [
      "Delivered multiple brand identity projects",
      "Developed robust client onboarding process",
      "Expanded services to presentation and marketing design",
      "Built reputation for quality, reliability and creativity",
    ],
  },
];

export const skills: Skill[] = [
  // Design Skills
  { name: "Brand Identity", level: 92, category: "Design" },
  { name: "Logo Design", level: 95, category: "Design" },
  { name: "Typography", level: 88, category: "Design" },
  { name: "Color Theory", level: 90, category: "Design" },
  { name: "Composition & Layout", level: 87, category: "Design" },
  { name: "Packaging Design", level: 80, category: "Design" },
  { name: "Editorial Design", level: 78, category: "Design" },
  { name: "Social Media Design", level: 93, category: "Design" },
  // Software
  { name: "Adobe Illustrator", level: 95, category: "Software" },
  { name: "Adobe Photoshop", level: 90, category: "Software" },
  { name: "Adobe InDesign", level: 82, category: "Software" },
  { name: "Figma", level: 85, category: "Software" },
  { name: "Canva Pro", level: 95, category: "Software" },
  // Professional
  { name: "Client Communication", level: 90, category: "Professional" },
  { name: "Project Management", level: 82, category: "Professional" },
  { name: "Creative Brief Analysis", level: 88, category: "Professional" },
];
