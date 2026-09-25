import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">404</p>
      <h1 className="mt-3 font-serif text-4xl">Page not found</h1>
      <p className="mt-3 text-muted-foreground">The page you are looking for is not in this portfolio.</p>
      <Button asChild className="mt-8">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
