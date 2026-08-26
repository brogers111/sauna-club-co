import Link from "next/link";
import type { PricingTier } from "@/lib/data/pricing";

type PricingColor = {
  border: string;
  cardShadow: string;
  buttonShadow: string;
  accentBg: string;
  accentText: string;
  buttonHoverBg: string;
};

const PRICING_COLORS: PricingColor[] = [
  {
    border: "border-green-light",
    cardShadow: "shadow-[8px_8px_0_0_var(--color-green-light)]",
    buttonShadow: "shadow-[4px_4px_0_0_var(--color-green-light)]",
    accentBg: "bg-green-light",
    accentText: "text-green-light",
    buttonHoverBg: "hover:bg-green-light",
  },
  {
    border: "border-blue",
    cardShadow: "shadow-[8px_8px_0_0_var(--color-blue)]",
    buttonShadow: "shadow-[4px_4px_0_0_var(--color-blue)]",
    accentBg: "bg-blue",
    accentText: "text-blue",
    buttonHoverBg: "hover:bg-blue",
  },
  {
    border: "border-orange",
    cardShadow: "shadow-[8px_8px_0_0_var(--color-orange)]",
    buttonShadow: "shadow-[4px_4px_0_0_var(--color-orange)]",
    accentBg: "bg-orange",
    accentText: "text-orange",
    buttonHoverBg: "hover:bg-orange",
  },
  {
    border: "border-wood-light",
    cardShadow: "shadow-[8px_8px_0_0_var(--color-wood-light)]",
    buttonShadow: "shadow-[4px_4px_0_0_var(--color-wood-light)]",
    accentBg: "bg-wood-light",
    accentText: "text-wood-light",
    buttonHoverBg: "hover:bg-wood-light",
  },
  {
    border: "border-wood-dark",
    cardShadow: "shadow-[8px_8px_0_0_var(--color-wood-dark)]",
    buttonShadow: "shadow-[4px_4px_0_0_var(--color-wood-dark)]",
    accentBg: "bg-wood-dark",
    accentText: "text-wood-dark",
    buttonHoverBg: "hover:bg-wood-dark",
  },
];

// The two recurring membership tiers book through the memberships portal;
// the single/multi-session tiers still book through the sessions portal.
const MEMBERSHIP_SLUGS = ["monthly-unlimited", "3-month-unlimited"];

export function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const color = PRICING_COLORS[index % PRICING_COLORS.length];
  const bookingHref = MEMBERSHIP_SLUGS.includes(tier.slug) ? "/buy-membership" : "/book";

  return (
    <div className={`flex flex-col rounded-2xl border-2 ${color.border} bg-tan-dark px-4 py-6 ${color.cardShadow}`}>
      {tier.nameLines ? (
        <h3 className="font-display uppercase leading-none tracking-wide text-cream">
          <span className="block text-left text-lg">{tier.nameLines.small}</span>
          <span className="block text-center text-4xl">{tier.nameLines.large}</span>
        </h3>
      ) : (
        // Same two-line shape as the split headers (an invisible spacer line
        // matching the small-label line's height) so every card's underline
        // lands at the same vertical position regardless of title style.
        <h3 className="font-display uppercase leading-none tracking-wide text-cream">
          <span aria-hidden="true" className="invisible block text-left text-lg">
            &nbsp;
          </span>
          <span className="block text-center text-4xl">{tier.name}</span>
        </h3>
      )}
      <div className={`mt-2 h-1 w-full rounded-full ${color.accentBg}`} />

      {tier.priceUSD != null ? (
        <div className="mt-3 text-center">
          <span className="font-display text-3xl text-cream">${tier.priceUSD}</span>
          {tier.priceNote ? <span className="ml-1 font-sans text-xs text-cream/60">({tier.priceNote})</span> : null}
        </div>
      ) : null}

      <p className="mt-3 px-4 font-sans text-sm font-normal text-cream/80 md:px-0">{tier.tagline}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3 px-4 font-sans text-sm font-normal md:px-0">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span aria-hidden="true" className={`${color.accentText} text-xl leading-none`}>
              •
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={bookingHref}
        className={`mt-8 inline-flex items-center justify-center rounded-xl border-2 ${color.border} bg-tan-dark px-5 py-3 font-display text-lg uppercase tracking-wide text-cream transition-colors ${color.buttonShadow} ${color.buttonHoverBg} hover:text-white`}
      >
        Book Now
      </Link>
    </div>
  );
}
