import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FitText } from "@/components/home/FitText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/about/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocationBySlug } from "@/lib/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Learn about the history of Sauna Club Co, our founders, and our mission. Reach out with questions or feedback!",
  path: "/about",
});

export default function AboutPage() {
  const location = getLocationBySlug("wheat-ridge");
  const address = location ? `${location.streetAddress}, ${location.city}, ${location.region} ${location.postalCode}` : "";
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <Header overlay />
      <main>
        <section className="h-[70dvh] min-h-90">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/about-hero.webp"
              alt="Close-up of the cedar sauna interior at Sauna Club Co"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="relative z-10 flex h-full items-center px-5">
              <div className="w-full md:mx-auto md:w-[30.36%]">
                <FitText
                  as="h1"
                  className="font-display uppercase text-cream [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
                >
                  About Us
                </FitText>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-center font-display text-5xl uppercase tracking-wide text-cream md:text-left md:text-7xl">Our Story</h2>
              <div className="mt-4 flex flex-col gap-4 text-center text-cream/80 md:text-left">
                <p>
                  Sauna Club Co started with a simple idea: meeting together with friends at Clear Creek in Golden to hop in the river and 
                  spend time together outdoors. We’d play tunes on the river bank, share stories and laughs from our week, bask in the sun, 
                  and generally just enjoy nature together. A “Colorado Beach Day” as we’d call it! We saw a need to bring this experience to 
                  the public without the commute, and hence created a dedicated outdoor-indoor space where heat, cold, and community could 
                  live under one roof.
                </p>
                <p>
                  Sauna Club Co expands on our river gatherings with the added benefits of heat exposure and sauna culture. Our saunas are 
                  classic Finnish saunas, made entirely of natural cedar and are heated to the maximum temperature allowed in commercial 
                  markets. They CRANK. Our cold plunges are extra large, allow you to lay down completely for full immersion, and utilize 
                  temperatures 37-59 degrees. Our mineral hot tub will soothe your joints and soften your skin as you bathe in 102-104F 
                  degree water enhanced with delicate minerals and magnesium.
                </p>
                <p>
                  Our goal at Sauna Club Co is simple: bring together our community in a wellness-oriented space, where we all can unplug, 
                  unwind, and reconnect with each other and with ourselves. We welcome you all and hope to see you soon!
                </p>
              </div>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/exterior-white.webp"
                alt="Exterior of the Sauna Club Co Wheat Ridge building at dusk"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading as="h2" className="text-center md:text-left">Directions</SectionHeading>

          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl border-2 border-blue shadow-[8px_8px_0_0_var(--color-blue)]"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={location?.mapImage.src ?? "/images/map.webp"}
                  alt={location?.mapImage.alt ?? "Map showing the Sauna Club Co Wheat Ridge, CO location"}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </a>

            <div>
              <p className="text-center font-sans text-cream/80 md:text-left">{location?.drivingDirections}</p>

              <div className="mt-6 flex justify-center">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue px-6 py-3 text-sm font-medium text-tan-light transition hover:opacity-80"
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

        <section className="mx-auto max-w-2xl px-6 pt-16 pb-20">
          <h2 className="text-center font-display text-5xl uppercase tracking-wide text-cream md:text-7xl">Contact Us</h2>
          <ContactForm phone={location?.phone} />
        </section>
      </main>
      <Footer />
    </>
  );
}
