import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlofoxResizableEmbed } from "@/components/glofox/GlofoxResizableEmbed";
import { GLOFOX_BRANCH_ID, GLOFOX_URLS } from "@/lib/site-config";

type NewsletterSectionProps = {
  // "dark" is for the homepage, whose section background is black; other
  // pages (e.g. the Wheat Ridge location page) use the light default.
  background?: "light" | "dark";
};

// Glofox's lead-register embed — the client team confirmed this needs to
// replace the site's own newsletter form. Kept as its own section rather
// than swapped into the footer: it loads an external script that would
// then run on every page for a footer-only form, and its default Glofox
// styling (plus the required "powered by Glofox" badge) doesn't blend
// into the footer's tight, custom-branded layout the way a dedicated
// section can absorb it.
export function NewsletterSection({ background = "light" }: NewsletterSectionProps) {
  const isDark = background === "dark";

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <SectionHeading className={`text-center ${isDark ? "text-cream!" : ""}`}>Stay In The Loop</SectionHeading>
      <p className={`mx-auto mt-4 max-w-xl text-center ${isDark ? "text-cream/80" : "text-cream/80"}`}>
        Sign up to hear about new sessions, events, and offers at Sauna Club Co.
      </p>

      <div className="mt-8 rounded-2xl border-2 border-green-light bg-tan-dark p-2 shadow-[8px_8px_0_0_var(--color-green-light)]">
        <div className="overflow-hidden rounded-xl bg-tan-dark p-4">
          <GlofoxResizableEmbed
            id={`glofox_${GLOFOX_BRANCH_ID}_contact`}
            src={GLOFOX_URLS.leadRegister}
            title="Sign up for Sauna Club Co updates"
          />
        </div>
      </div>
    </section>
  );
}
