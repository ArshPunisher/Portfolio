import { Resend } from "resend";

/**
 * Built lazily on first send. Constructing at module scope throws during
 * `next build` ("Collecting page data"), which breaks builds on any machine
 * that doesn't have the mail env vars set.
 */
let resend: Resend | null = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  if (!process.env.MAIL_FROM) throw new Error("MAIL_FROM is not configured");
  if (!process.env.MAIL_TO) throw new Error("MAIL_TO is not configured");

  resend ??= new Resend(apiKey);
  return resend;
}

export async function sendMail({
  subject,
  html,
  text,
}: {
  subject: string;
  html: string;
  text: string;
}) {
  const { data, error } = await getResend().emails.send({
    from: process.env.MAIL_FROM!,
    to: process.env.MAIL_TO!,
    subject,
    html,
    text,
  });

  if (error) throw new Error(error.message);
  return data;
}
