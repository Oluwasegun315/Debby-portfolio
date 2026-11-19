import { NextResponse } from "next/server";
import { addReview, getAllTestimonials } from "@/lib/reviews";

export const dynamic = "force-dynamic";

export async function GET() {
  const reviews = await getAllTestimonials();
  return NextResponse.json({ ok: true, count: reviews.length, reviews });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const review = await addReview(body);
    return NextResponse.json({ ok: true, review });
  } catch (error) {
    const message = error instanceof Error ? error.message : "ERROR";
    if (message === "UNAUTHORIZED") {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }
    if (message === "INVALID") {
      return NextResponse.json(
        { ok: false, error: "Name and review text are required" },
        { status: 400 }
      );
    }
    return NextResponse.json({ ok: false, error: "Could not save review" }, { status: 500 });
  }
}
