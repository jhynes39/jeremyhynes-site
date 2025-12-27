"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(input: string) {
  return input.replace(/\s+/g, " ").trim().slice(0, 2000);
}

export async function sendContactEmail(formData: FormData) {
  const name = clean(String(formData.get("name") ?? ""));
  const email = clean(String(formData.get("email") ?? ""));
  const message = clean(String(formData.get("message") ?? ""));

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in all fields." };
  }

  // Basic anti-abuse: simple length check
  if (message.length < 10) {
    return { ok: false, error: "Message is too short." };
  }

  await resend.emails.send({
    from: "JeremyHynes.com <onboarding@resend.dev>", // replace after domain verification
    to: ["info@jeremyhynes.com"],
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return { ok: true };
}
