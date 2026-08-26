import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { ServicesCarousel } from "./ServicesCarousel";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-18 px-6 pt-20 pb-10 md:scroll-mt-21" id="services">
      <SectionHeading className="text-center">Our Services</SectionHeading>

      <div className="mt-4">
        <ServicesCarousel />
      </div>

      <div className="mx-[calc(50%-50vw)] mt-30 mb-10 px-5">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-blue px-6 py-10 text-center">
          <p className="font-display text-4xl uppercase tracking-wide text-cream">Schedule Your First Session</p>
          <BookNowButton variant="outline" size="lg" />
        </div>
      </div>
    </section>
  );
}
