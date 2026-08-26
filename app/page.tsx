import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_DESCRIPTION } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Sauna & Cold Plunge Studio in Wheat Ridge, CO",
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Header overlay />
      <main>
        <Hero />
        <ServicesSection />
        <LocationsSection />
        <PricingSection />
        <NewsletterSection />
        <GalleryTeaser />
      </main>
      <Footer />
    </>
  );
}
