import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ServicesCarousel, type ServiceItem } from "@/components/home/ServicesCarousel";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocationBySlug, locations, type Location } from "@/lib/data/locations";
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
    title: `Sauna & Cold Plunge in ${location.name}, ${location.region}`,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
  });
}

// Short, schema-facing service descriptions.
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

function buildLocationServices(location: Location): ServiceItem[] {
  const nearestArea = location.nearbyAreas[0];

  return [
    {
      slug: "cold-plunge",
      heading: "Cold Plunge",
      steamVariant: "left",
      image: { src: "/images/man-cold-plunge.webp", alt: "Man submerged in a cold plunge tub at Sauna Club Co" },
      paragraph: `Our ${location.name} cold plunge tubs are precision-chilled for real contrast therapy — the kind that sharpens focus, speeds up recovery, and leaves you feeling wide awake. Whether you're searching for a cold plunge near ${nearestArea} or just want the best cold plunge in ${location.name}, this is where locals come to reset.`,
    },
    {
      slug: "sauna",
      heading: "Sauna",
      steamVariant: "middle",
      image: { src: "/images/guys-sauna-1.webp", alt: "Two men relaxing on the cedar benches inside the sauna" },
      paragraph: `Sink into the heat at ${location.name}'s go-to sauna. Our custom-built saunas are designed for a deep, consistent warmth that helps you sweat out stress, loosen tight muscles, and unwind after a long day — the kind of sauna experience ${nearestArea}-area locals keep coming back for.`,
    },
    {
      slug: "hot-tub",
      heading: "Hot Tub",
      steamVariant: "right",
      image: { src: "/images/people-sauna-2.webp", alt: "A group socializing together inside the sauna" },
      paragraph: `Every contrast therapy session ends the same way — easing into our ${location.name} hot tub to relax, warm back up, and catch up with the friends you came with. It's the social heart of the club, and the reason so many members treat Sauna Club Co like their neighborhood gathering spot.`,
    },
  ];
}

const DIFFERENTIATORS = [
  {
    name: "Wheat Ridge Owned",
    description: "We're not a national chain trying to check a wellness box in every zip code. Our founders actually live in the area, so Sauna Club Co was literally built by and for the local community — no corporate script, no upsell pressure, just a neighborhood spot that knows your name.",
    border: "border-orange",
    shadow: "shadow-[8px_8px_0_0_var(--color-orange)]",
    accent: "text-orange",
  },
  {
    name: "Fair, Simple Pricing",
    description: (
      <>
        Contrast therapy in the Denver Metro area shouldn&apos;t cost a fortune. Our{" "}
        <Link href="/pricing" className="underline hover:text-orange">
          pricing
        </Link>{" "}
        is built for regulars, not just first-timers — so dropping in a few times a week is actually realistic, not
        a luxury. We want to get to know you and welcome you by name each time you visit!
      </>
    ),
    border: "border-blue",
    shadow: "shadow-[8px_8px_0_0_var(--color-blue)]",
    accent: "text-blue",
  },
  {
    name: "A Local Place to Gather",
    description: "When other studios hand you a private suite and send you on your way or gyms encourage isolated headphone use, we built our experience the opposite way. Benches made for conversation, a communal space made for lingering, and a vibe you'll actually enjoy.",
    border: "border-green-light",
    shadow: "shadow-[8px_8px_0_0_var(--color-green-light)]",
    accent: "text-green-light",
  },
];

const AREA_COLORS = [
  { border: "border-green-light", shadow: "shadow-[8px_8px_0_0_var(--color-green-light)]", accent: "text-green-light" },
  { border: "border-blue", shadow: "shadow-[8px_8px_0_0_var(--color-blue)]", accent: "text-blue" },
  { border: "border-orange", shadow: "shadow-[8px_8px_0_0_var(--color-orange)]", accent: "text-orange" },
  { border: "border-wood-light", shadow: "shadow-[8px_8px_0_0_var(--color-wood-light)]", accent: "text-wood-light" },
  { border: "border-wood-dark", shadow: "shadow-[8px_8px_0_0_var(--color-wood-dark)]", accent: "text-wood-dark" },
];

// `answer` is what renders on the page (JSX with internal links where
// natural); `plainAnswer` is the same content as flat text for the
// FAQPage JSON-LD, which can't serialize markup.
const FAQS = [
  {
    question: "What is contrast therapy?",
    answer:
      "Contrast therapy is the practice of alternating between heat and cold exposure — like moving between a sauna and a cold plunge — to support circulation, reduce inflammation, speed up recovery, and leave you feeling more alert and clear-headed.",
    plainAnswer:
      "Contrast therapy is the practice of alternating between heat and cold exposure — like moving between a sauna and a cold plunge — to support circulation, reduce inflammation, speed up recovery, and leave you feeling more alert and clear-headed.",
  },
  {
    question: "Do I need a membership to visit?",
    answer: (
      <>
        Not at all. Single sessions are available for first-timers and drop-ins, and memberships are there if you
        want to make it a regular habit. Check out our{" "}
        <Link href="/pricing" className="underline hover:text-orange">
          pricing
        </Link>{" "}
        to find what fits.
      </>
    ),
    plainAnswer:
      "Not at all. Single sessions are available for first-timers and drop-ins, and memberships are there if you want to make it a regular habit. Check out our pricing to find what fits.",
  },
  {
    question: "What should I bring to my session?",
    answer: "We recommend bringing a swimsuit, a towel, and a water bottle. Showers and changing rooms are available on site.",
    plainAnswer: "We recommend bringing a swimsuit, a towel, and a water bottle. Showers and changing rooms are available on site.",
  },
  {
    question: "How do I book a session?",
    answer: (
      <>
        You can{" "}
        <Link href="/book" className="underline hover:text-orange">
          book online
        </Link>{" "}
        any time — pick a time from our class list, or grab a session bundle or membership from the Memberships tab.
      </>
    ),
    plainAnswer:
      "You can book online any time — pick a time from our class list, or grab a session bundle or membership from the Memberships tab.",
  },
  {
    question: "How much does a sauna and cold plunge session cost?",
    answer: (
      <>
        A single session starts at $30, with discounted multi-session bundles and unlimited memberships available
        for regulars. Visit our{" "}
        <Link href="/pricing" className="underline hover:text-orange">
          pricing page
        </Link>{" "}
        for the full breakdown.
      </>
    ),
    plainAnswer:
      "A single session starts at $30, with discounted multi-session bundles and unlimited memberships available for regulars. Visit our pricing page for the full breakdown.",
  },
  {
    question: "Is Sauna Club Co a good fit for first-timers?",
    answer:
      "Absolutely. Whether it's your first time trying contrast therapy or you're a longtime sauna and cold plunge regular, our team will walk you through how everything works before your first session.",
    plainAnswer:
      "Absolutely. Whether it's your first time trying contrast therapy or you're a longtime sauna and cold plunge regular, our team will walk you through how everything works before your first session.",
  },
  {
    question: "Do I need to book in advance, or can I walk in?",
    answer: (
      <>
        We recommend{" "}
        <Link href="/book" className="underline hover:text-orange">
          booking ahead online
        </Link>{" "}
        to guarantee your spot, but walk-ins are welcome whenever we have availability.
      </>
    ),
    plainAnswer: "We recommend booking ahead online to guarantee your spot, but walk-ins are welcome whenever we have availability.",
  },
  {
    question: "What makes Sauna Club Co different from other sauna and cold plunge studios near Denver?",
    answer: (
      <>
        We&apos;re locally owned, not a corporate franchise — so you&apos;ll get fair pricing, a genuine
        neighborhood social vibe, and a team that actually knows your name, instead of a private suite and a quick
        transaction.{" "}
        <Link href="/about" className="underline hover:text-orange">
          Learn more about us
        </Link>
        .
      </>
    ),
    plainAnswer:
      "We're locally owned, not a corporate franchise — so you'll get fair pricing, a genuine neighborhood social vibe, and a team that actually knows your name, instead of a private suite and a quick transaction.",
  },
];

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const services = SERVICES(location.name);
  const locationServices = buildLocationServices(location);
  const address = `${location.streetAddress}, ${location.city}, ${location.region} ${location.postalCode}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
          faqSchema(FAQS.map((faq) => ({ question: faq.question, answer: faq.plainAnswer }))),
        ]}
      />
      <Header overlay />
      <main>
        <section className="relative flex h-[75dvh] min-h-90 items-center justify-center overflow-hidden">
          <Image
            src={location.heroImage.src}
            alt={location.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <h1 className="relative z-10 px-5 text-center font-display uppercase text-cream [text-shadow:0_4px_24px_rgb(0_0_0/45%)]">
            <span className="block text-5xl tracking-wide sm:text-6xl md:text-8xl">Sauna &amp; Cold Plunge</span>
            <span className="mt-2 block text-xl tracking-wide sm:text-2xl md:text-4xl">
              {" "}in {location.name}, {location.region}
            </span>
          </h1>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <SectionHeading as="h2">About the Club</SectionHeading>
          <div className="mt-6 flex flex-col gap-2 md:flex-row md:flex-wrap">
            <div className="flex gap-2 md:contents">
              <Badge index={0}>{badges[0]}</Badge>
              <Badge index={1}>{badges[1]}</Badge>
            </div>
            <div className="flex gap-2 md:contents">
              <Badge index={2}>{badges[2]}</Badge>
              <Badge index={3}>{badges[3]}</Badge>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4 text-cream/80">
            {location.detailPageDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Ready to get started? Browse our{" "}
              <Link href="/pricing" className="underline hover:text-orange">
                pricing
              </Link>
              ,{" "}
              <Link href="/book" className="underline hover:text-orange">
                book your first session
              </Link>
              , or learn more{" "}
              <Link href="/about" className="underline hover:text-orange">
                about our story
              </Link>
              .
            </p>
          </div>
        </section>

        <div className="mx-[calc(50%-50vw)] mb-20 px-5">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-wood-dark px-6 py-10 text-center">
            <p className="font-display text-4xl uppercase tracking-wide text-cream">Schedule Your First Session</p>
            <BookNowButton variant="outline" size="lg" />
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading className="text-center">Our Wheat Ridge Offerings</SectionHeading>
          <div className="mt-4">
            <ServicesCarousel services={locationServices} />
          </div>
        </section>

        <div className="relative aspect-4/3 w-full overflow-hidden md:aspect-16/6">
          <Image src={location.midPageImage.src} alt={location.midPageImage.alt} fill sizes="100vw" className="object-cover" />
        </div>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading as="h2" className="text-center">{`Designed Different`}</SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-cream/80">
            More sauna and cold plunge studios are popping up around {location.nearbyAreas[0]} every year — most of
            them corporate-backed, expensive, and built for a quick transaction, not a real connection. Sauna Club
            Co is different. We&apos;re the friendly neighborhood sauna and cold plunge social club{" "}
            {location.name} locals actually look forward to visiting — not just another high-priced wellness
            franchise passing through.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.name} className={`rounded-2xl border-2 bg-tan-dark px-6 py-6 ${item.border} ${item.shadow}`}>
                <h3 className={`font-display text-2xl uppercase tracking-wide ${item.accent}`}>{item.name}</h3>
                <p className="mt-2 text-sm text-cream/80">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <SectionHeading as="h2" className="text-center">Areas We Serve</SectionHeading>
            <p className="mx-auto mt-4 text-center text-cream/80">
              Sauna Club Co is your go-to sauna, cold plunge, and contrast therapy social club in the Wheat Ridge area.
              Below is just a small segment of the neighborhoods and communities we&apos;re proud to serve. Your city not on the list? Join us so we can add it!
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3 px-6">
            {location.areasServed.map((area, index) => {
              const color = AREA_COLORS[index % AREA_COLORS.length];
              return (
                <div key={area} className={`rounded-xl border-2 bg-tan-dark px-5 py-2 ${color.border} ${color.shadow}`}>
                  <h3 className={`font-display text-lg uppercase tracking-wide ${color.accent}`}>{area}</h3>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading as="h2" className="text-center md:text-left">Directions</SectionHeading>

          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border-2 border-blue bg-tan-dark p-2 shadow-[8px_8px_0_0_var(--color-blue)]"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                <Image
                  src={location.mapImage.src}
                  alt={location.mapImage.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </a>

            <div>
              <p className="text-center font-sans text-cream/80 md:text-left">{location.drivingDirections}</p>

              <div className="mt-6 flex justify-center">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue px-6 py-3 text-sm font-medium text-cream transition hover:opacity-80"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="h-5 w-5 shrink-0">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21c-4-4.5-7-8.2-7-11.5A7 7 0 0 1 12 2a7 7 0 0 1 7 7.5C19 12.8 16 16.5 12 21Z"
                    />
                    <circle cx="12" cy="9.5" r="2.25" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        <NewsletterSection />

        <section className="mx-auto max-w-4xl px-6 py-16">
          <SectionHeading as="h2" className="text-center">Frequently Asked Questions</SectionHeading>
          <div className="mt-8">
            <FAQAccordion faqs={FAQS} />
          </div>
        </section>

        <div className="mx-[calc(50%-50vw)] mb-20 px-5">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-green-light px-6 py-10 text-center">
            <p className="font-display text-4xl uppercase tracking-wide text-cream">Find the right membership for you</p>
            <BookNowButton variant="outline" size="lg" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
