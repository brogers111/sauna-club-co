import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocationBySlug, locations } from "@/lib/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/seo/schema";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return buildMetadata({
    title: `Sauna & Cold Plunge in ${location.name}, ${location.region} | Social Club`,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
  });
}

// Short, schema-facing service descriptions — see CARD_SERVICES below for
// the richer, benefit-forward copy shown on the page itself.
const SERVICES = (locationName: string) => [
  {
    name: "Sauna",
    description: `Custom sauna sessions at the ${locationName} location for deep relaxation, muscle recovery, and detoxification.`,
  },
  {
    name: "Cold Plunge",
    description: `Precision-chilled cold plunge tubs at the ${locationName} location for contrast therapy and recovery.`,
  },
  {
    name: "Hot Tub",
    description: `Hot tub access at the ${locationName} location for total-body recovery.`,
  },
];

const PILLARS = [
  {
    name: "Heat",
    description: "Two custom saunas built for a deep, consistent heat that helps you sweat out stress and loosen tight muscles.",
    border: "border-orange",
    shadow: "shadow-[8px_8px_0_0_var(--color-orange)]",
    accent: "text-orange",
  },
  {
    name: "Cold",
    description: "Three cold plunge tubs for real contrast therapy — proven to sharpen focus, speed recovery, and wake you right up.",
    border: "border-blue",
    shadow: "shadow-[8px_8px_0_0_var(--color-blue)]",
    accent: "text-blue",
  },
  {
    name: "Community",
    description: "A hot tub and lounge space built for lingering, not rushing out the door — bring a friend or make a new one.",
    border: "border-green-light",
    shadow: "shadow-[8px_8px_0_0_var(--color-green-light)]",
    accent: "text-green-light",
  },
];

const CARD_SERVICES = [
  {
    name: "Sauna",
    description: "Custom-built saunas designed for a deep, consistent heat that helps you sweat out stress, loosen tight muscles, and unwind after a long day.",
    border: "border-orange",
    shadow: "shadow-[8px_8px_0_0_var(--color-orange)]",
    accent: "text-orange",
  },
  {
    name: "Cold Plunge",
    description: "Precision-chilled cold plunge tubs for real contrast therapy — proven to sharpen focus, speed recovery, and leave you feeling wide awake.",
    border: "border-blue",
    shadow: "shadow-[8px_8px_0_0_var(--color-blue)]",
    accent: "text-blue",
  },
  {
    name: "Hot Tub",
    description: "A hot tub built for the come-down — the perfect place to relax, warm back up, and catch up with the people you came with.",
    border: "border-wood-light",
    shadow: "shadow-[8px_8px_0_0_var(--color-wood-light)]",
    accent: "text-wood-light",
  },
];

const FAQS = [
  {
    question: "What is contrast therapy?",
    answer:
      "Contrast therapy is the practice of alternating between heat and cold exposure — like moving between a sauna and a cold plunge — to support circulation, reduce inflammation, speed up recovery, and leave you feeling more alert and clear-headed.",
  },
  {
    question: "Do I need a membership to visit?",
    answer:
      "Not at all. Single sessions are available for first-timers and drop-ins, and memberships are there if you want to make it a regular habit. Check out our pricing to find what fits.",
  },
  {
    question: "What should I bring to my session?",
    answer: "We recommend bringing a swimsuit, a towel, and a water bottle. Showers and changing rooms are available on site.",
  },
  {
    question: "How do I book a session?",
    answer:
      "You can book online any time — pick a time from our class list, or grab a session bundle or membership from the Memberships tab.",
  },
];

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const services = SERVICES(location.name);

  const badges = [
    `${location.amenities.saunas} Sauna${location.amenities.saunas === 1 ? "" : "s"}`,
    `${location.amenities.coldPlunges} Cold Plunge${location.amenities.coldPlunges === 1 ? "" : "s"}`,
    `${location.amenities.hotTubs} Hot Tub${location.amenities.hotTubs === 1 ? "" : "s"}`,
    "∞ Community",
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: location.name, path: `/locations/${location.slug}` },
          ]),
          localBusinessSchema(location),
          ...services.map((service) => serviceSchema(location, service)),
          faqSchema(FAQS),
        ]}
      />
      <Header overlay />
      <main>
        <section className="relative flex h-[50dvh] min-h-90 items-center justify-center overflow-hidden">
          <Image src={location.heroImage.src} alt={location.heroImage.alt} fill priority sizes="100vw" className="object-cover" />
          {/* One H1, two visual weights — a deliberately different hero
              composition from the other pages' single-line FitText treatment,
              since this is a per-location landing page rather than a hub page. */}
          <h1 className="relative z-10 px-5 text-center font-display uppercase text-tan-light [text-shadow:0_4px_24px_rgb(0_0_0/45%)]">
            <span className="block text-5xl tracking-wide sm:text-6xl md:text-8xl">Sauna &amp; Cold Plunge</span>
            <span className="mt-2 block text-xl tracking-wide sm:text-2xl md:text-4xl">
              in {location.name}, {location.region}
            </span>
          </h1>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="flex flex-col gap-2 md:flex-row md:flex-wrap">
            <div className="flex gap-2 md:contents">
              <Badge index={0}>{badges[0]}</Badge>
              <Badge index={1}>{badges[1]}</Badge>
            </div>
            <div className="flex gap-2 md:contents">
              <Badge index={2}>{badges[2]}</Badge>
              <Badge index={3}>{badges[3]}</Badge>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4 text-black/80">
            {location.detailPageDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <BookNowButton className="mt-8" />
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading as="h2">A Sauna &amp; Cold Plunge Social Club</SectionHeading>
          <p className="mt-4 max-w-2xl text-black/80">
            {location.name}&apos;s sauna and cold plunge social club, built around three simple pillars:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div key={pillar.name} className={`rounded-2xl border-2 bg-white px-6 py-6 ${pillar.border} ${pillar.shadow}`}>
                <h3 className={`font-display text-2xl uppercase tracking-wide ${pillar.accent}`}>{pillar.name}</h3>
                <p className="mt-2 text-sm text-black/80">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative aspect-16/6 w-full overflow-hidden">
          <Image src={location.image.src} alt={location.image.alt} fill sizes="100vw" className="object-cover" />
        </div>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading as="h2">Sauna, Cold Plunge &amp; Hot Tub</SectionHeading>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {CARD_SERVICES.map((service) => (
              <div key={service.name} className={`rounded-2xl border-2 bg-white px-6 py-6 ${service.border} ${service.shadow}`}>
                <h3 className={`font-display text-2xl uppercase tracking-wide ${service.accent}`}>{service.name}</h3>
                <p className="mt-2 text-sm text-black/80">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-tan-dark/40 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading as="h2">{`Serving ${location.name} & ${location.nearbyAreas[0]}`}</SectionHeading>
            <p className="mt-4 text-black/80">
              Located just minutes from {location.nearbyAreas.slice(0, -1).join(", ")}, and {location.nearbyAreas[location.nearbyAreas.length - 1]},
              Sauna Club Co is the go-to sauna, cold plunge, and contrast therapy social club for the whole west
              Denver metro. Whether you&apos;re a {location.name} local or driving in from across town, you&apos;ll
              find us easy to get to and even easier to make a habit.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <SectionHeading as="h2">Contrast Therapy FAQs</SectionHeading>
          <div className="mt-8 flex flex-col gap-8">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display text-xl uppercase tracking-wide text-black">{faq.question}</h3>
                <p className="mt-2 text-black/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mx-[calc(50%-50vw)] mb-20 px-5">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-wood-dark px-6 py-10 text-center">
            <p className="font-display text-4xl uppercase tracking-wide text-tan-light">Ready to Sweat, Chill &amp; Connect?</p>
            <BookNowButton variant="outline" size="lg" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
