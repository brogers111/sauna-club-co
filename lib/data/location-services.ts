import type { ServiceItem } from "@/components/home/ServicesCarousel";
import type { Location } from "@/lib/data/locations";

// Location-specific copy for the ServicesCarousel, shared by the location
// detail page and the early-signup landing page.
export function buildLocationServices(location: Location): ServiceItem[] {
  const nearestArea = location.nearbyAreas[0];

  return [
    {
      slug: "cold-plunge",
      heading: "Cold Plunge",
      steamVariant: "left",
      image: { src: "/images/man-cold-plunge.webp", alt: "Man submerged in a cold plunge tub at Sauna Club Co" },
      paragraph: `Our ${location.name} cold plunge tubs are precision-chilled for real contrast therapy, the practice of cycling between hot and cold. Contrast therapy promotes flushing of cardiovascular and lymphatic systems while also acting to sharpen focus, speed muscle recovery, and invigorate your entire body. If you're searching for a cold plunge near ${nearestArea} or ${location.name}, this is where locals come to reset.`,
    },
    {
      slug: "sauna",
      heading: "Sauna",
      steamVariant: "middle",
      image: { src: "/images/guys-sauna-1.webp", alt: "Two men relaxing on the cedar benches inside the sauna" },
      paragraph: `Sink into the heat at ${location.name}'s go-to sauna. Our custom-built saunas are designed for a deep, consistent warmth that helps you sweat out stress, loosen tight muscles, and unwind after a long day. This is a sauna experience that ${nearestArea}-area locals keep coming back for.`,
    },
    {
      slug: "hot-mineral-bath",
      heading: "Hot Mineral Bath",
      steamVariant: "right",
      image: { src: "/images/people-sauna-2.webp", alt: "A group socializing together inside the sauna" },
      paragraph: `Ease into our ${location.name} mineral bath to warm back up, soothe your joints, and elevate your complexion. Delicate minerals and magnesium soften your skin as you ease into a deep sense of relaxation, calming you from head to toe.`,
    },
  ];
}
