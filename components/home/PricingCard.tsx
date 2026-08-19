import { BookNowButton } from "@/components/ui/BookNowButton";
import type { PricingTier } from "@/lib/data/pricing";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className="flex flex-col rounded-2xl border border-green-dark/10 bg-white/60 p-6">
      <h3 className="font-display text-xl uppercase tracking-wide">{tier.name}</h3>
      <p className="mt-2 text-sm text-green-dark/80">{tier.tagline}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span aria-hidden="true" className="text-orange">
              •
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <BookNowButton className="mt-8" />
    </div>
  );
}
