import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "./PricingCard";
import { pricingTiers } from "@/lib/data/pricing";

export function PricingSection() {
  return (
    <section className="py-20" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading className="text-center">Pricing &amp; Memberships</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.slug} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
