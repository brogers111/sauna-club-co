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
  description: string;
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
    description:
      "Ready to relax and socialize with fellow locals? Stop by Sauna Club Co in Wheat Ridge, CO for your escape.",
    heroImage: {
      src: "/images/hero-image.webp",
      alt: "Steam rising inside the cedar sauna at Sauna Club Co's Wheat Ridge location",
    },
    image: {
      src: "/images/sauna-interior.webp",
      alt: "Interior of the wood-paneled sauna at Sauna Club Co Wheat Ridge",
    },
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}
