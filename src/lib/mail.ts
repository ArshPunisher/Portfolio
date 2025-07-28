import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendMail({
  subject,
  html,
  text,
}: {
  subject: string;
  html: string;
  text: string;
}) {
    console.log("Sending email with subject:", subject, text, html);
  return resend.emails.send({
    from: process.env.MAIL_FROM!,
    to: process.env.MAIL_TO!,
    subject,
    html,
    text,
  });
}
