import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site-config";
import type { Location } from "@/lib/data/locations";
import type { PricingTier } from "@/lib/data/pricing";

// https://schema.org/Organization
export function organizationSchema() {
  const sameAs = Object.values(SOCIAL_LINKS).filter(Boolean);
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/full-logo-black.png`,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

// https://schema.org/WebSite
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

// https://schema.org/HealthClub (LocalBusiness subtype)
// TODO: wire aggregateRating from real Google Business Profile review data once available.
export function localBusinessSchema(location: Location) {
  return {
    "@type": "HealthClub",
    "@id": `${SITE_URL}/locations/${location.slug}#business`,
    name: `${SITE_NAME} – ${location.name}`,
    url: `${SITE_URL}/locations/${location.slug}`,
    image: `${SITE_URL}${location.image.src}`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.city,
      addressRegion: location.region,
      postalCode: location.postalCode,
      addressCountry: "US",
    },
    ...(location.latitude != null && location.longitude != null
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.latitude,
            longitude: location.longitude,
          },
        }
      : {}),
    telephone: location.phone,
  };
}

// https://schema.org/Service
export function serviceSchema(
  location: Location,
  service: { name: string; description: string },
) {
  return {
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    provider: { "@id": `${SITE_URL}/locations/${location.slug}#business` },
    areaServed: {
      "@type": "City",
      name: location.city,
    },
  };
}

// https://schema.org/Offer
export function offerSchema(tier: PricingTier) {
  return {
    "@type": "Offer",
    name: tier.name,
    description: tier.tagline,
    ...(tier.priceUSD != null
      ? { price: tier.priceUSD, priceCurrency: "USD" }
      : {}),
    availability: "https://schema.org/InStock",
  };
}

// https://schema.org/BreadcrumbList
export function breadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

// https://schema.org/Review + AggregateRating
// Stubbed until Google Business Profile reviews are synced for a location.
export function reviewSchema(location: Location) {
  void location;
  return null;
}

// https://schema.org/FAQPage — stub for when an FAQ section/page exists.
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// https://schema.org/Article + https://schema.org/Person — stub for the blog phase.
export function articleSchema(article: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorPath: string;
  image: string;
}) {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}${article.path}#article`,
    headline: article.headline,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: personSchema({ name: article.authorName, path: article.authorPath }),
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}${article.path}`,
  };
}

export function personSchema(author: { name: string; path: string }) {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}${author.path}#person`,
    name: author.name,
    url: `${SITE_URL}${author.path}`,
  };
}

// https://schema.org/HowTo — stub for how-to blog content.
export function howToSchema(guide: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@type": "HowTo",
    name: guide.name,
    description: guide.description,
    step: guide.steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
    })),
  };
}
