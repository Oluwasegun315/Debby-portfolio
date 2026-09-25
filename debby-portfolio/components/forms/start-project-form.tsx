"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { site } from "@/data/site";
import {
  startProjectStep1Schema,
  startProjectStep2Schema,
  startProjectStep3Schema,
} from "@/lib/validation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";

const fullSchema = startProjectStep1Schema
  .and(startProjectStep2Schema)
  .and(startProjectStep3Schema);

type FormData = z.infer<typeof fullSchema>;

const steps = ["About You", "Project", "Requirements", "Review", "Submit"];

export function StartProjectForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const form = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      projectType: "",
      businessName: "",
      projectDescription: "",
      targetAudience: "",
      designGoals: "",
      deliverables: [],
      budget: "",
      deadline: "",
      referenceLinks: "",
      additionalNotes: "",
    },
  });

  const values = useWatch({ control: form.control });
  const progress = ((step + 1) / steps.length) * 100;

  async function validateStep() {
    if (step === 0) return form.trigger(["fullName", "email", "website"]);
    if (step === 1)
      return form.trigger(["projectType", "businessName", "projectDescription", "targetAudience"]);
    if (step === 2)
      return form.trigger(["designGoals", "deliverables", "budget", "deadline"]);
    return true;
  }

  async function next() {
    const ok = await validateStep();
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function onSubmit(data: FormData) {
    setStatus("idle");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "start-project", ...data }),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      toast({ title: "Project brief received", variant: "success" });
    } catch {
      setStatus("error");
      toast({ title: "Could not submit", variant: "error" });
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-3 flex justify-between text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span>
            Step {step + 1} of {steps.length}
          </span>
          <span>{steps[step]}</span>
        </div>
        <Progress value={progress} />
        <ol className="mt-4 hidden gap-2 text-xs sm:flex">
          {steps.map((label, index) => (
            <li
              key={label}
              className={index <= step ? "text-foreground" : "text-muted-foreground"}
            >
              {String(index + 1).padStart(2, "0")} {label}
            </li>
          ))}
        </ol>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {step === 0 ? (
          <>
            <Field>
              <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
              <Input id="fullName" {...form.register("fullName")} />
              <FieldError>{form.formState.errors.fullName?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" {...form.register("email")} />
              <FieldError>{form.formState.errors.email?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone (optional)</FieldLabel>
              <Input id="phone" {...form.register("phone")} />
            </Field>
            <Field>
              <FieldLabel htmlFor="company">Company</FieldLabel>
              <Input id="company" {...form.register("company")} />
            </Field>
            <Field>
              <FieldLabel htmlFor="website">Website (optional)</FieldLabel>
              <Input id="website" placeholder="https://" {...form.register("website")} />
              <FieldError>{form.formState.errors.website?.message}</FieldError>
            </Field>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <Field>
              <FieldLabel>Project Type</FieldLabel>
              <Select onValueChange={(v) => form.setValue("projectType", v, { shouldValidate: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {site.projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError>{form.formState.errors.projectType?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="businessName">Business / Brand Name</FieldLabel>
              <Input id="businessName" {...form.register("businessName")} />
              <FieldError>{form.formState.errors.businessName?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="projectDescription">Project Description</FieldLabel>
              <Textarea id="projectDescription" {...form.register("projectDescription")} />
              <FieldError>{form.formState.errors.projectDescription?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="targetAudience">Target Audience</FieldLabel>
              <Textarea id="targetAudience" {...form.register("targetAudience")} />
              <FieldError>{form.formState.errors.targetAudience?.message}</FieldError>
            </Field>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <Field>
              <FieldLabel htmlFor="designGoals">Design Goals</FieldLabel>
              <Textarea id="designGoals" {...form.register("designGoals")} />
              <FieldError>{form.formState.errors.designGoals?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel>Required Deliverables</FieldLabel>
              <div className="grid gap-3 sm:grid-cols-2">
                {site.deliverableOptions.map((item) => (
                  <label key={item} className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={values.deliverables?.includes(item)}
                      onCheckedChange={(checked) => {
                        const next = checked
                          ? [...(values.deliverables || []), item]
                          : (values.deliverables || []).filter((d) => d !== item);
                        form.setValue("deliverables", next, { shouldValidate: true });
                      }}
                    />
                    {item}
                  </label>
                ))}
              </div>
              <FieldError>{form.formState.errors.deliverables?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel>Budget</FieldLabel>
              <Select onValueChange={(v) => form.setValue("budget", v, { shouldValidate: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {site.budgetOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError>{form.formState.errors.budget?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel>Deadline</FieldLabel>
              <Select onValueChange={(v) => form.setValue("deadline", v, { shouldValidate: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select deadline" />
                </SelectTrigger>
                <SelectContent>
                  {site.timelineOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError>{form.formState.errors.deadline?.message}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="referenceLinks">Reference Links</FieldLabel>
              <Textarea id="referenceLinks" {...form.register("referenceLinks")} />
            </Field>
            <Field>
              <FieldLabel htmlFor="additionalNotes">Additional Notes</FieldLabel>
              <Textarea id="additionalNotes" {...form.register("additionalNotes")} />
            </Field>
          </>
        ) : null}

        {step === 3 ? (
          <div className="space-y-3 border border-border p-5 text-sm">
            <p>
              <strong>Name:</strong> {values.fullName}
            </p>
            <p>
              <strong>Email:</strong> {values.email}
            </p>
            <p>
              <strong>Brand:</strong> {values.businessName}
            </p>
            <p>
              <strong>Type:</strong> {values.projectType}
            </p>
            <p>
              <strong>Budget:</strong> {values.budget}
            </p>
            <p>
              <strong>Deadline:</strong> {values.deadline}
            </p>
            <p>
              <strong>Deliverables:</strong> {values.deliverables?.join(", ")}
            </p>
            <p className="text-muted-foreground">{values.projectDescription}</p>
          </div>
        ) : null}

        {step === 4 ? (
          status === "success" ? (
            <Alert variant="success">
              <AlertTitle>Brief submitted</AlertTitle>
              <AlertDescription>
                Thank you. I will review your project details and reply soon.
              </AlertDescription>
            </Alert>
          ) : (
            <>
              {status === "error" ? (
                <Alert variant="destructive">
                  <AlertTitle>Submission failed</AlertTitle>
                  <AlertDescription>Please try again or email {site.email}.</AlertDescription>
                </Alert>
              ) : null}
              <p className="text-sm text-muted-foreground">
                Ready to send? I will review this brief and follow up with a conversation — not an
                automated quote.
              </p>
              <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : null}
                Submit project brief
              </Button>
            </>
          )
        ) : null}

        <div className="flex justify-between pt-2">
          <Button type="button" variant="outline" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
          {step < 4 ? (
            <Button type="button" onClick={next}>
              Continue
            </Button>
          ) : null}
        </div>
      </form>
    </div>
  );
}
