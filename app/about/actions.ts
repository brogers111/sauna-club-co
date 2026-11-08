"use server";

import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site-config";

export type ContactFormState = { status: "idle" | "success" | "error"; message?: string };

// Resend only allows sending from a domain you've verified with them. Until
// saunaclubco.com is verified, onboarding@resend.dev works — but only to the
// Resend account's own address, which is CONTACT_EMAIL. Once the domain is
// verified, set CONTACT_FROM_EMAIL (e.g. website@saunaclubco.com) in Vercel.
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function sendContactMessage(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field, bots usually do.
  // Report success so bots don't learn to skip it.
  if (field(formData, "company", 200)) return { status: "success" };

  // Newlines stripped so the name can't break the subject line.
  const name = field(formData, "name", 100).replace(/[\r\n]+/g, " ");
  const email = field(formData, "email", 254);
  const message = field(formData, "message", 5000);
  const isMember = formData.get("isMember") === "yes";

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please fill in your name, a valid email, and a message." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return { status: "error", message: `Something went wrong. Please email us at ${CONTACT_EMAIL}.` };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `${SITE_NAME} Website <${FROM_ADDRESS}>`,
      to: [CONTACT_EMAIL],
      // Hitting "Reply" in the inbox goes straight to the visitor.
      reply_to: email,
      subject: `Website contact: ${name}`,
      // Plain text only, so nothing a visitor types is rendered as HTML.
      text: [`Name: ${name}`, `Email: ${email}`, `Member: ${isMember ? "Yes" : "No"}`, "", message].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Contact form: Resend error", response.status, await response.text());
    return { status: "error", message: `Something went wrong. Please email us at ${CONTACT_EMAIL}.` };
  }

  return { status: "success" };
}
