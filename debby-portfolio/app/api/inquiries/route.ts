import { NextResponse } from "next/server";
import { submitInquiry } from "@/lib/inquiries";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitInquiry(body);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
