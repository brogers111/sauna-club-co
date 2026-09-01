export type PricingTier = {
  slug: string;
  name: string;
  // For tiers whose name needs a small label line above the main word
  // (e.g. "Monthly" / "Unlimited") instead of one plain heading.
  nameLines?: { small: string; large: string };
  tagline: string;
  features: string[];
  priceUSD: number | null;
  // e.g. "$24.75 each" — shown as a small note under multi-session prices.
  priceNote?: string;
  billingDescription: string;
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "single-session",
    name: "1 Session",
    tagline: "Perfect for first-timers, drop-ins, or simple resets.",
    features: [
      "Full facility access",
      "Saunas, cold plunges, & hot mineral tub",
      "Showers & changing rooms",
      "Great for trying contrast therapy or when traveling",
    ],
    priceUSD: 30,
    billingDescription: "One-time purchase",
  },
  {
    slug: "4-sessions",
    name: "4 Sessions",
    tagline: "Ideal for building a wellness routine 1x/week.",
    features: [
      "4 Single passes",
      "Full facility access",
      "Flexible drop-in scheduling",
      "Credits valid for 1 year after purchase",
    ],
    priceUSD: 99,
    priceNote: "$24.75 each",
    billingDescription: "One-time purchase",
  },
  {
    slug: "8-sessions",
    name: "8 Sessions",
    tagline: "Designed for committed recovery twice a week.",
    features: [
      "8 Single passes",
      "Full facility access",
      "Commitment with flexibility",
      "Credits valid for 1 year after purchase",
    ],
    priceUSD: 179,
    priceNote: "$22.38 each",
    billingDescription: "Billed monthly",
  },
  {
    slug: "monthly-unlimited",
    name: "Monthly Unlimited",
    nameLines: { small: "Monthly", large: "Unlimited" },
    tagline: "Maximum flexibility to develop a daily habit.",
    features: [
      "Unlimited visits every month",
      "Up to 2 sessions per day",
      "Full facility access",
      "Best value for regular drop-ins",
    ],
    priceUSD: 149,
    billingDescription: "Billed month-to-month",
  },
  {
    slug: "3-month-unlimited",
    name: "3 Month Unlimited",
    nameLines: { small: "3 Month", large: "Unlimited" },
    tagline: "Our best rate for long-term membership.",
    features: [
      "Unlimited 1-Hour visits for 90 days",
      "Up to 2 sessions per day",
      "Full facility access",
      "Lowest monthly price option",
    ],
    priceUSD: 399,
    billingDescription: "Billed every 3 months",
  },
];
