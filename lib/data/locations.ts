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
  // Full list of neighborhoods/cities shown in the detail page's "Areas We
  // Serve" pill grid and included in LocalBusiness schema's areaServed.
  areasServed: string[];
  heroImage: {
    src: string;
    alt: string;
  };
  image: {
    src: string;
    alt: string;
  };
  // Full-bleed banner image used partway down the location detail page.
  midPageImage: {
    src: string;
    alt: string;
  };
  // Map screenshot used in the detail page's "Get Directions" section.
  mapImage: {
    src: string;
    alt: string;
  };
  // Turn-by-turn driving directions for the detail page's "Get Directions"
  // section — worded distinctly from /about's version to avoid duplicate
  // content across the two pages.
  drivingDirections: string;
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
      "Ready to sauna, plunge, and socialize with fellow Wheat Ridge locals? Stop by Sauna Club Co for your post-work escape.",
    description: [
      "Tucked into the heart of Wheat Ridge, our flagship location is built around three simple pillars: heat, cold, and connection. It's a space to shake off the day, heighten your wellness, and leave lighter than you walked in.",
      "Inside, two custom-built Finnish saunas deliver deep heat for muscle relief and mental clarity, paired with three precision-chilled plunge tubs and a mineral hot tub for total-body recovery. Move between fire and ice at your own pace. Then stay awhile! This isn't a facility you rush through; it's a room full of regulars, new faces, and real conversation, built for the moment your workday ends and the rest of your life begins.",
    ],
    locationsIndexDescription: [
      "Welcome to Wheat Ridge — Sauna Club Co.'s home base, built around three simple pillars: heat, cold, and community. Come to sweat, come to plunge, come to sit still for the first time all day. Bring friends and family. Bring a warm heart. Bring an open mind.",
      "Two classic cedar saunas set the tone for deep, restorative heat. Three precision-chilled plunge tubs bring the shock that clears your head. A mineral hot tub rounds it all out, easing you back to baseline. Cycle through at your own pace — there's no clock here, no rush to the next thing. Just fire, ice, and a room full of people who get it. Stay for one round or many; either way, you'll leave better than you came.",
    ],
    detailPageDescription: [
      "Sauna Club Co is Wheat Ridge's home for sauna, cold plunge, and hot tub contrast therapy — built as much for connection as for recovery. Alternate between heat and cold, ease into the hot tub, and stick around to talk it over with people who get it. This isn't a solo wellness routine; it's a social club built around feeling better together.",
      "Inside, you'll find two custom saunas, three precision-chilled cold plunge tubs, and a hot tub for total-body recovery — everything you need for a full contrast therapy circuit in one visit. Drop in for a single session or make it a habit with a membership; either way, you'll walk out looser, clearer-headed, and already planning your next visit.",
    ],
    nearbyAreas: ["Denver", "Lakewood", "Golden", "Arvada"],
    areasServed: [
      "Wheat Ridge",
      "Arvada",
      "Applewood",
      "Edgewater",
      "Golden",
      "Lakewood",
      "Sloan's Lake",
      "Berkeley",
      "West Highland",
      "Mountain View",
      "Lakeside",
      "Fairmount",
      "Genesee",
    ],
    heroImage: {
      src: "/images/wheat-ridge-location.webp",
      alt: "Sunset view of the Denver skyline from the foothills near Wheat Ridge, CO",
    },
    image: {
      src: "/images/people-sauna-1.webp",
      alt: "Two men enjoying the sauna together at Sauna Club Co Wheat Ridge",
    },
    midPageImage: {
      src: "/images/wheat-ridge-location-mid.webp",
      alt: "Sauna heater stacked with rocks inside the cedar sauna at Sauna Club Co's Wheat Ridge location",
    },
    mapImage: {
      src: "/images/map.webp",
      alt: "Map showing the Sauna Club Co Wheat Ridge, CO location",
    },
    drivingDirections:
      "Heading to Sauna Club Co from I-70? Take the Kipling exit south, hang a left at Winchell's Donuts, and keep going past Dairy Queen — you'll spot us on the left, just before New Image Brewing Company.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}
