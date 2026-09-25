import type { Metadata } from "next";
import { StartProjectForm } from "@/components/forms/start-project-form";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Share a project brief with Debby Tella to begin a graphic design collaboration.",
};

export default function StartProjectPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl sm:text-5xl">Start a Project</h1>
      <p className="mt-4 text-muted-foreground">
        A short onboarding brief. Take it step by step — you can review everything before sending.
      </p>
      <div className="mt-10 border border-border bg-card p-6 sm:p-8">
        <StartProjectForm />
      </div>
    </div>
  );
}
