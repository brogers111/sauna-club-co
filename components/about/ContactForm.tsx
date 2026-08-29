"use client";

import { useState, type FormEvent } from "react";

type ContactFormProps = {
  phone?: string;
};

// TODO: wire this up to Resend — the payload is collected here for when
// that's ready, but submission is a no-op for now.
export function ContactForm({ phone }: ContactFormProps) {
  const [isMember, setIsMember] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      isMember,
      message: formData.get("message"),
    };
    void payload;
    setSubmitted(true);
  }

  if (submitted) {
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
        onSubmit={handleSubmit}
      >
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

        <button
          type="submit"
          className="mt-2 cursor-pointer rounded-xl bg-orange px-6 py-3 font-medium text-cream transition hover:opacity-80"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
