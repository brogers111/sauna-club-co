import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "./PricingCard";
import { pricingTiers } from "@/lib/data/pricing";

type PricingSectionProps = {
  ctaLabel?: string;
  sessionHref?: string;
  // Vertical spacing; pages that space their sections themselves can override it.
  className?: string;
};

export function PricingSection({ ctaLabel, sessionHref, className = "py-20" }: PricingSectionProps = {}) {
  return (
    <section className={className} id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading className="text-center">Pricing &amp; Memberships</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 sm:px-0 lg:grid-cols-5">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.slug} tier={tier} index={index} ctaLabel={ctaLabel} sessionHref={sessionHref} />
          ))}
        </div>
      </div>
    </section>
  );
}
