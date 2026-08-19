export type PricingTier = {
  slug: string;
  name: string;
  tagline: string;
  features: string[];
  // TODO: confirm real prices before launch — not present in the source design.
  priceUSD: number | null;
  billingDescription: string;
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "single-session",
    name: "Single Session",
    tagline: "Perfect for first-timers, drop-ins, or anyone needing a reset.",
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
    tagline: "Ideal for building a consistent weekly wellness routine.",
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
    tagline: "Maximum flexibility to make contrast therapy a daily habit.",
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
    tagline: "Our best rate for long-term dedication to daily wellness.",
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
