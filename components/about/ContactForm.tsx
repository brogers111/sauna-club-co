"use client";

import { useActionState, useState } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/about/actions";

type ContactFormProps = {
  phone?: string;
};

const INITIAL_STATE: ContactFormState = { status: "idle" };

// Submits to sendContactMessage, which emails CONTACT_EMAIL via Resend.
export function ContactForm({ phone }: ContactFormProps) {
  const [isMember, setIsMember] = useState(false);
  const [state, formAction, pending] = useActionState(sendContactMessage, INITIAL_STATE);

  if (state.status === "success") {
    return (
      <p className="mt-8 text-center font-display text-2xl uppercase tracking-wide text-cream">
        Your message has been sent!
      </p>
    );
  }

  return (
    <>
      {phone ? (
        <p className="mt-3 text-center font-sans text-cream/80">
          Have questions? Need help booking a session or membership? Give us a call during normal business hours at{" "}
          <a href={`tel:${phone}`} className="font-medium text-cream hover:text-orange">
            {phone}
          </a>{" "}
          or fill out the form below.
        </p>
      ) : null}

      <form
        className="mt-8 flex flex-col gap-4 rounded-2xl border-2 border-orange bg-tan-dark p-6 shadow-[8px_8px_0_0_var(--color-orange)] sm:p-8"
        aria-label="Contact Sauna Club Co"
        action={formAction}
      >
        <input type="hidden" name="isMember" value={isMember ? "yes" : "no"} />
        {/* Honeypot for spam bots — hidden from people and screen readers. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="font-sans text-sm font-medium text-cream">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="rounded-xl border border-cream/20 bg-tan-light px-4 py-2 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/40"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="font-sans text-sm font-medium text-cream">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="rounded-xl border border-cream/20 bg-tan-light px-4 py-2 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/40"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="font-sans text-sm font-medium text-cream">Are you a Sauna Club Co member?</span>
          <div className="inline-flex shrink-0 rounded-full border border-cream/20 p-1">
            <button
              type="button"
              onClick={() => setIsMember(false)}
              aria-pressed={!isMember}
              className={`cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                !isMember ? "bg-orange text-cream" : "text-cream"
              }`}
            >
              No
            </button>
            <button
              type="button"
              onClick={() => setIsMember(true)}
              aria-pressed={isMember}
              className={`cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                isMember ? "bg-orange text-cream" : "text-cream"
              }`}
            >
              Yes
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="font-sans text-sm font-medium text-cream">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className="rounded-xl border border-cream/20 bg-tan-light px-4 py-2 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/40"
          />
        </div>

        {state.status === "error" ? (
          <p role="alert" className="font-sans text-sm text-orange-light">
            {state.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="mt-2 cursor-pointer rounded-xl bg-orange px-6 py-3 font-medium text-cream transition hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
