import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  projectDetails: z.string().min(20, "Please provide at least 20 characters describing your project"),
  howDidYouHear: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Multi-step Start Project form
export const startProjectStep1Schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

export const startProjectStep2Schema = z.object({
  projectType: z.string().min(1, "Please select a project type"),
  businessName: z.string().min(1, "Please enter your business/brand name"),
  projectDescription: z.string().min(30, "Please describe your project in at least 30 characters"),
  targetAudience: z.string().min(10, "Please describe your target audience"),
});

export const startProjectStep3Schema = z.object({
  designGoals: z.string().min(10, "Please describe your design goals"),
  deliverables: z.array(z.string()).min(1, "Please select at least one deliverable"),
  budget: z.string().min(1, "Please select a budget range"),
  deadline: z.string().min(1, "Please select a deadline"),
  referenceLinks: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export type StartProjectStep1Data = z.infer<typeof startProjectStep1Schema>;
export type StartProjectStep2Data = z.infer<typeof startProjectStep2Schema>;
export type StartProjectStep3Data = z.infer<typeof startProjectStep3Schema>;
