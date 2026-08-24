"use client";

// TODO: wire this up to a real email provider (e.g. Klaviyo/Mailchimp) — UI only for now.
export function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      aria-label="Subscribe to the newsletter"
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email..."
        className="w-full rounded-xl border border-tan-light/20 bg-gray px-4 py-2 text-sm text-tan-light placeholder:text-tan-light/50 focus:outline-none focus:ring-2 focus:ring-tan-light/40 sm:w-64"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-xl bg-gray px-5 py-3 text-sm font-medium text-tan-light transition hover:bg-gray/70"
      >
        Subscribe
      </button>
    </form>
  );
}
