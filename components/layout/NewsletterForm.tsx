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
        className="w-full rounded-full border border-green-dark/20 bg-tan-light px-4 py-2 text-sm text-green-dark placeholder:text-green-dark/50 focus:outline-none focus:ring-2 focus:ring-blue sm:w-64"
      />
      <button
        type="submit"
        className="rounded-full bg-green-dark px-5 py-2 text-sm font-medium uppercase tracking-wide text-tan-light hover:bg-blue"
      >
        Subscribe
      </button>
    </form>
  );
}
