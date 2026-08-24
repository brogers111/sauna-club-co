export type Location = {
  slug: string;
  name: string;
  city: string;
  region: string;
  // TODO: confirm real street address, postal code, phone, and coordinates before launch.
  streetAddress: string;
  postalCode: string;
  phone: string;
  latitude: number | null;
  longitude: number | null;
  amenities: {
    saunas: number;
    coldPlunges: number;
    hotTubs: number;
  };
  // Short, concise version for <meta> tags — not the full on-page copy.
  metaDescription: string;
  // On-page copy, one entry per paragraph.
  description: string[];
  // Reworded copy for the /locations index page — kept distinct from
  // `description` (used on the homepage and the location detail page) to
  // avoid duplicate content across pages.
  locationsIndexDescription: string[];
  // Longer, SEO-targeted copy for the location's own detail page — kept
  // distinct from `description` and `locationsIndexDescription` so all
  // three pages carry unique copy.
  detailPageDescription: string[];
  // Nearby cities/metro areas this location legitimately serves, used in
  // the detail page's "serving the area" section for local SEO.
  nearbyAreas: string[];
  heroImage: {
    src: string;
    alt: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export const locations: Location[] = [
  {
    slug: "wheat-ridge",
    name: "Wheat Ridge",
    city: "Wheat Ridge",
    region: "CO",
    streetAddress: "9695 W 44th Ave",
    postalCode: "80033",
    phone: "812-322-8066",
    latitude: null,
    longitude: null,
    amenities: {
      saunas: 2,
      coldPlunges: 3,
      hotTubs: 1,
    },
    metaDescription:
      "Ready to relax and socialize with fellow locals? Stop by Sauna Club Co in Wheat Ridge, CO for your escape.",
    description: [
      "Escape the rush and reset your body at our Wheat Ridge location. Designed around the core pillars of heat, cold, and connection, this facility offers an elevated space to push your limits, reduce stress, and restore your mind.",
      "Inside, you'll find two custom saunas for deep detoxification and muscle relief, complemented by three precision-chilled plunge tubs and a hot tub for total body recovery. Move seamlessly between fire and ice, then stick around to socialize and recharge in a welcoming, community-driven atmosphere.",
    ],
    locationsIndexDescription: [
      "Step away from the everyday grind and reconnect with yourself at our Wheat Ridge studio. Built around heat, cold, and community, the space gives you room to challenge your limits, unwind from stress, and clear your head.",
      "The studio features two saunas built for deep detox and muscle recovery, three chilled plunge tubs, and a hot tub to round out your session. Cycle between hot and cold at your own pace, then linger afterward in a laid-back, social setting built for making connections.",
    ],
    detailPageDescription: [
      "Sauna Club Co is Wheat Ridge's home for sauna, cold plunge, and hot tub contrast therapy — built as much for connection as for recovery. Alternate between heat and cold, ease into the hot tub, and stick around to talk it over with people who get it. This isn't a solo wellness routine; it's a social club built around feeling better together.",
      "Inside, you'll find two custom saunas, three precision-chilled cold plunge tubs, and a hot tub for total-body recovery — everything you need for a full contrast therapy circuit in one visit. Drop in for a single session or make it a habit with a membership; either way, you'll walk out looser, clearer-headed, and already planning your next visit.",
    ],
    nearbyAreas: ["Denver", "Lakewood", "Golden", "Arvada"],
    heroImage: {
      src: "/images/wheat-ridge-location.webp",
      alt: "Sunset view of the Denver skyline from the foothills near Wheat Ridge, CO",
    },
    image: {
      src: "/images/people-sauna-1.webp",
      alt: "Two men enjoying the sauna together at Sauna Club Co Wheat Ridge",
    },
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}
