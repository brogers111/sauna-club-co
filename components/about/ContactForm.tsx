"use client";

// TODO: wire this up to Resend — UI only for now.
export function ContactForm() {
  return (
    <form className="flex flex-col gap-4" aria-label="Contact Sauna Club Co" onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="font-sans text-sm font-medium text-black">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="rounded-xl border border-black/20 bg-tan-light px-4 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="font-sans text-sm font-medium text-black">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-black/20 bg-tan-light px-4 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/40"
        />
      </div>

      <label className="flex items-center gap-2 font-sans text-sm text-black">
        <input type="checkbox" name="isMember" className="h-4 w-4 rounded border-black/30 text-orange focus:ring-orange" />
        I&apos;m a Sauna Club Co member
      </label>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="font-sans text-sm font-medium text-black">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="rounded-xl border border-black/20 bg-tan-light px-4 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/40"
        />
      </div>

      <button
        type="submit"
        className="mt-2 cursor-pointer rounded-xl bg-orange px-6 py-3 font-medium text-tan-light transition hover:opacity-80"
      >
        Send Message
      </button>
    </form>
  );
}
