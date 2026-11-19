"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

export function AddReviewForm() {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [projectType, setProjectType] = useState("Design Project");
  const [location, setLocation] = useState("Fiverr");
  const [rating, setRating] = useState(5);
  const [secret, setSecret] = useState("debby-reviews");
  const [saving, setSaving] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          quote,
          projectType,
          location,
          rating,
          featured: true,
          source: "Fiverr",
          secret,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to save");
      }
      toast({
        title: "Review added",
        description: "It now appears with the other buyer reviews on the website.",
        variant: "success",
      });
      setName("");
      setQuote("");
      setProjectType("Design Project");
    } catch (error) {
      toast({
        title: "Could not add review",
        description: error instanceof Error ? error.message : "Try again",
        variant: "error",
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-border bg-card p-5 sm:p-6">
      <div>
        <h3 className="font-serif text-2xl">Add a new Fiverr buyer review</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          When Debby delivers an order and the buyer leaves a review, paste it here.
          It will join the reviews already on the homepage, marquee, and testimonials page.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm">
          <span>Buyer name</span>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. swindlesea"
            required
          />
        </label>
        <label className="space-y-1.5 text-sm">
          <span>Project type</span>
          <Input
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            placeholder="Label Design / Social Media / Magazine..."
          />
        </label>
        <label className="space-y-1.5 text-sm">
          <span>Location</span>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="United States"
          />
        </label>
        <label className="space-y-1.5 text-sm">
          <span>Rating</span>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={1}
              max={5}
              step={0.1}
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <Star className="h-4 w-4 text-gold" />
          </div>
        </label>
      </div>

      <label className="block space-y-1.5 text-sm">
        <span>Review text</span>
        <Textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Paste the buyer review from Fiverr..."
          rows={4}
          required
        />
      </label>

      <label className="block space-y-1.5 text-sm">
        <span>Passcode</span>
        <Input
          type="password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder="debby-reviews"
          required
        />
        <span className="text-xs text-muted-foreground">
          Default passcode is <code>debby-reviews</code> (change later with REVIEW_SECRET).
        </span>
      </label>

      <Button
        type="submit"
        disabled={saving}
        className="bg-gold text-charcoal hover:bg-gold/90"
      >
        {saving ? "Saving..." : "Add review to website"}
      </Button>
    </form>
  );
}
