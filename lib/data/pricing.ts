export type PricingTier = {
  slug: string;
  name: string;
  // For tiers whose name needs a small label line above the main word
  // (e.g. "Monthly" / "Unlimited") instead of one plain heading.
  nameLines?: { small: string; large: string };
  tagline: string;
  features: string[];
  // TODO: confirm real prices before launch — not present in the source design.
  priceUSD: number | null;
  billingDescription: string;
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "single-session",
    name: "1 Session",
    tagline: "Perfect for first-timers, drop-ins, or simple resets.",
    features: [
      "1 Hour full facility access",
      "Saunas, cold plunges & hot tub",
      "Showers & changing rooms included",
      "Great for trying contrast therapy",
    ],
    priceUSD: null,
    billingDescription: "One-time purchase",
  },
  {
    slug: "4-sessions",
    name: "4 Sessions",
    tagline: "Ideal for building a wellness routine.",
    features: [
      "4 Single-Hour passes",
      "Full access to all facility amenities",
      "Cycle between heat, cold & hot tub",
      "Flexible drop-in scheduling",
    ],
    priceUSD: null,
    billingDescription: "One-time purchase",
  },
  {
    slug: "8-sessions",
    name: "8 Sessions",
    tagline: "Designed for committed recovery twice a week.",
    features: [
      "8 Single-Hour passes per month",
      "Full access to all facility amenities",
      "Cycle between heat, cold & hot tub",
      "Best value for regular drop-ins",
    ],
    priceUSD: null,
    billingDescription: "Billed monthly",
  },
  {
    slug: "monthly-unlimited",
    name: "Monthly Unlimited",
    nameLines: { small: "Monthly", large: "Unlimited" },
    tagline: "Maximum flexibility to develop a daily habit.",
    features: [
      "Unlimited 1-Hour visits for 30 days",
      "Full access to all facility amenities",
      "Daily sauna, cold plunge & hot tub",
      "Billed month-to-month",
    ],
    priceUSD: null,
    billingDescription: "Billed month-to-month",
  },
  {
    slug: "3-month-unlimited",
    name: "3 Month Unlimited",
    nameLines: { small: "3 Month", large: "Unlimited" },
    tagline: "Our best rate for long-term dedication.",
    features: [
      "Unlimited 1-Hour visits for 90 days",
      "Full access to all facility amenities",
      "Daily sauna, cold plunge & hot tub",
      "Lowest monthly price option",
    ],
    priceUSD: null,
    billingDescription: "Billed every 3 months",
  },
];
