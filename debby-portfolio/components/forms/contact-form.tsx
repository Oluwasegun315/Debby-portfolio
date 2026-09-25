"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { site } from "@/data/site";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      projectDetails: "",
      howDidYouHear: "",
    },
  });

  async function onSubmit(values: ContactFormData) {
    setStatus("idle");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      reset();
      toast({
        title: "Inquiry sent",
        description: "Thank you. I will reply within 1–2 business days.",
        variant: "success",
      });
    } catch {
      setStatus("error");
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "error",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {status === "success" ? (
        <Alert variant="success">
          <AlertTitle>Inquiry received</AlertTitle>
          <AlertDescription>
            Thank you for reaching out. I typically reply within 1–2 business days.
          </AlertDescription>
        </Alert>
      ) : null}
      {status === "error" ? (
        <Alert variant="destructive">
          <AlertTitle>Could not send</AlertTitle>
          <AlertDescription>
            Please try again, or email {site.email} directly.
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input id="fullName" autoComplete="name" {...register("fullName")} />
          <FieldError>{errors.fullName?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          <FieldError>{errors.email?.message}</FieldError>
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="company">Company / Brand</FieldLabel>
        <Input id="company" {...register("company")} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field>
          <FieldLabel>Project Type</FieldLabel>
          <Select onValueChange={(value) => setValue("projectType", value, { shouldValidate: true })}>
            <SelectTrigger aria-label="Project type">
              <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
              {site.projectTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError>{errors.projectType?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel>Budget Range</FieldLabel>
          <Select onValueChange={(value) => setValue("budget", value)}>
            <SelectTrigger aria-label="Budget range">
              <SelectValue placeholder="Optional" />
            </SelectTrigger>
            <SelectContent>
              {site.budgetOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field>
        <FieldLabel>Project Timeline</FieldLabel>
        <Select onValueChange={(value) => setValue("timeline", value, { shouldValidate: true })}>
          <SelectTrigger aria-label="Project timeline">
            <SelectValue placeholder="Select a timeline" />
          </SelectTrigger>
          <SelectContent>
            {site.timelineOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError>{errors.timeline?.message}</FieldError>
      </Field>
      <Field>
        <FieldLabel htmlFor="projectDetails">Project Details</FieldLabel>
        <Textarea id="projectDetails" {...register("projectDetails")} />
        <FieldError>{errors.projectDetails?.message}</FieldError>
      </Field>
      <Field>
        <FieldLabel htmlFor="howDidYouHear">How did you hear about Debby?</FieldLabel>
        <Input id="howDidYouHear" {...register("howDidYouHear")} />
      </Field>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin" /> : null}
        Send Project Inquiry
      </Button>
    </form>
  );
}
