import type { ContactFormData } from "@/lib/validation";

/**
 * Inquiry submission layer.
 * Swap the body of this function for Supabase, Resend, or another service.
 * Keep secrets in server environment variables only.
 */
export async function submitInquiry(
  payload: ContactFormData | Record<string, unknown>
) {
  // Future: insert into Supabase `inquiries` table or send via Resend.
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (process.env.INQUIRY_WEBHOOK_URL) {
    const response = await fetch(process.env.INQUIRY_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Inquiry webhook failed");
    }
    return { ok: true as const };
  }

  return { ok: true as const, mock: true as const };
}
