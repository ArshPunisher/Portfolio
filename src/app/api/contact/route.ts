import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/utils/contactSchema";
import { escapeHtml, sanitizeHeader } from "@/utils/escapeHtml";
import { checkRateLimit, pruneRateLimits } from "@/lib/rateLimit";
import { sendMail } from "@/lib/mail";

function clientKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first;
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  // --- Rate limit -----------------------------------------------------------
  pruneRateLimits();
  const { allowed, retryAfterSeconds } = checkRateLimit(clientKey(req));

  if (!allowed) {
    const minutes = Math.ceil(retryAfterSeconds / 60);
    return NextResponse.json(
      {
        error:
          `Too many messages sent from this network. ` +
          `Please try again in about ${minutes} minute${minutes === 1 ? "" : "s"}, ` +
          `or email me directly.`,
      },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } }
    );
  }

  // --- Parse ----------------------------------------------------------------
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  const finalSubject = sanitizeHeader(
    subject?.trim() ? subject : `New message from ${name}`
  );

  const text = `Name: ${name}\nEmail: ${email}\nSubject: ${finalSubject}\n\n${message}`;

  const html = `
      <h2>New Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
    `;

  // --- Send -----------------------------------------------------------------
  try {
    await sendMail({ subject: finalSubject, text, html });
    return NextResponse.json({ success: true });
  } catch (e) {
    // Log the real reason server-side; never hand provider/config detail to the client.
    console.error("[contact] send failed:", e);
    return NextResponse.json(
      {
        error:
          "Your message couldn't be delivered right now. " +
          "Please try again in a moment, or reach me directly by email.",
      },
      { status: 502 }
    );
  }
}
