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
    heroImage: {
      src: "/images/hero-image.webp",
      alt: "Steam rising inside the cedar sauna at Sauna Club Co's Wheat Ridge location",
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
