import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";
import { CONTACT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Sauna Club Co membership terms: billing, cancellations, booking and no-show fees, club rules, privacy, and communications.",
  path: "/terms-of-service",
});

function H2({ children }: { children: string }) {
  return <h2 className="mt-12 font-display text-3xl uppercase tracking-wide text-cream first:mt-0">{children}</h2>;
}

// One lettered clause, e.g. "a. Recurring billing. Monthly and annual…"
function Term({ letter, title, children }: { letter: string; title: string; children: ReactNode }) {
  return (
    <p className="mt-4 leading-relaxed text-cream/80">
      <span className="font-bold text-cream">
        {letter}. {title}.
      </span>{" "}
      {children}
    </p>
  );
}

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-of-service" },
        ])}
      />
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-6xl uppercase tracking-wide text-cream md:text-7xl">Terms &amp; Conditions</h1>

        <H2>1. Membership, Payments and Cancellation</H2>
        <Term letter="a" title="Recurring billing">
          Monthly and annual memberships renew automatically and are charged to the card on file on the same date
          each period until cancelled. Memberships are strictly personal and cannot be shared, assigned, or
          transferred to anyone else.
        </Term>
        <Term letter="b" title="Membership cancellation">
          Cancel with twenty four (24) hours&rsquo; written notice by email to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-orange-light">
            {CONTACT_EMAIL}
          </a>{" "}
          or in-person with a staff member at the club. Your membership stays active through the end of the paid
          period. We do not prorate partial months.
        </Term>
        <Term letter="c" title="Class packs and drop-ins">
          Session credits expire six (6) months after purchase and are non-refundable. Session credits can be used
          to book a session for a friend.
        </Term>
        <Term letter="d" title="Bookings">
          Sessions are reserved in advance. Cancellation must occur at least four (4) hours ahead or the session is
          forfeited. No-shows will be charged $10.00. Late cancellations will be charged $5.00. After three (3)
          no-shows or late cancellations (strikes), you will be blocked from booking another session until direct
          contact has been made with a member of the Sauna Club Co team.
        </Term>
        <Term letter="e" title="Failed payments">
          If a payment fails, membership is paused and no bookings will be able to be made until the balance is
          paid. Sauna Club Co may charge a fee for returned payments.
        </Term>
        <Term letter="f" title="Price changes">
          Sauna Club Co will give at least thirty (30) days&rsquo; notice of any change to membership rates.
        </Term>
        <Term letter="g" title="Refunds">
          All fees are non-refundable except where required by law or where Sauna Club Co cancels a session, in
          which case Sauna Club Co will credit or refund the session to the member.
        </Term>

        <H2>2. Club Access, Code of Conduct, and General Rules</H2>
        <Term letter="a" title="Check in">
          You must check in with the staff onsite or use the barcode associated with your booking when you arrive
          prior to using the facilities.
        </Term>
        <Term letter="b" title="Late arrival">
          Sessions start and end on time according to your booked session. Late arrivals will not be given
          additional time.
        </Term>
        <Term letter="c" title="Guest passes">
          Members are responsible for their guests, and every guest must sign the Sauna Club Co participation
          waiver and this agreement before entering.
        </Term>
        <Term letter="d" title="Session waitlist">
          Fully booked sessions will have a waitlist of max ten (10) spaces. When a space becomes available, the
          first person on the waitlist will automatically be notified and booked for the session.
        </Term>
        <Term letter="e" title="Hygiene">
          You must shower thoroughly before entering the cold plunges and mineral baths each time.
        </Term>
        <Term letter="f" title="Dress code">
          Swimsuit or athletic shorts and top must be worn at all times. Nudity is not allowed. Shoes are not
          allowed to be worn in the warehouse area.
        </Term>
        <Term letter="g" title="Personal belongings">
          Sauna Club Co assumes zero liability for lost, stolen, or damaged personal property inside the premises,
          locker rooms, or parking lot.
        </Term>
        <Term letter="h" title="Technology">
          No technology or backpacks/bags are allowed in the warehouse area. Use the Sauna Club Co-provided lockers
          for storing any personal items you bring into the club.
        </Term>

        <H2>3. Privacy and Communications</H2>
        <Term letter="a" title="Your information">
          Sauna Club Co uses your details to manage your membership, bookings and safety. We do not sell your
          personal information. See our{" "}
          <Link href="/privacy-policy" className="underline hover:text-orange-light">
            privacy policy
          </Link>
          .
        </Term>
        <Term letter="b" title="Communications">
          Sauna Club Co will email you about bookings and account matters. Marketing emails and texts are optional,
          and you can unsubscribe at any time.
        </Term>
        <Term letter="c" title="Security cameras">
          Cameras may monitor parking areas, entrances and lounge areas for safety. There are no cameras in
          changing rooms, showers or sauna rooms.
        </Term>

        <H2>4. General Terms</H2>
        <Term letter="a" title="Changes">
          Sauna Club Co may update these terms and facility rules from time to time. Sauna Club Co will post changes
          and notify members via email. Continued use after notice means you accept these changes.
        </Term>
        <Term letter="b" title="Governing law">
          This agreement is governed by the laws of the State of Colorado. Any dispute will be heard in the courts
          of Jefferson County, Colorado.
        </Term>
        <Term letter="c" title="Severability">
          If any provision of this Agreement is determined to be invalid or unenforceable, the remaining provisions
          will remain in full force and effect, and the affected provision will be enforced to the fullest extent
          permitted by law.
        </Term>
        <Term letter="d" title="Electronic signature">
          An electronic signature on this agreement shall be deemed original signatures and shall have the same
          legal validity, force, and effect as handwritten signatures.
        </Term>
      </main>
      <Footer />
    </>
  );
}
