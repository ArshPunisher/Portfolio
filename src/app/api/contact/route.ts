import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/utils/contactSchema";
import { sendMail } from "@/lib/mail";

interface ErrorWithMessage {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    const finalSubject = subject?.trim()
      ? subject
      : `New message from ${name}`;

    // Plain text email
    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${finalSubject}\n\n${message}`;

    // HTML email
    const html = `
      <h2>New Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
    `;

    await sendMail({
      subject: finalSubject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (e: unknown) {
    console.error("Contact form error:", e);
    let message = "Failed to send message";
    if (isErrorWithMessage(e)) {
      message = e.message;
    }
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
