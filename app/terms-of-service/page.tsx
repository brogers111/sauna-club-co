import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using the Sauna Club Co website and booking Sauna Club Co sessions and memberships.",
  path: "/terms-of-service",
});

function H2({ children }: { children: string }) {
  return <h2 className="mt-12 font-display text-3xl uppercase tracking-wide text-black first:mt-0">{children}</h2>;
}

function H3({ children }: { children: string }) {
  return <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-black">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-black/80">{children}</p>;
}

function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-3 flex flex-col gap-2 pl-6 leading-relaxed text-black/80 [&>li]:list-disc">{children}</ul>;
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
        <h1 className="font-display text-6xl uppercase tracking-wide text-black md:text-7xl">Terms &amp; Conditions</h1>

        <H2>Late Cancellation and No-Show Policy</H2>
        <P>
          At Sauna Club Co, our mission is to make heat, cold, and community more accessible, so our members can do
          more of what they love. Part of that is making sure appointment scheduling works for everyone. Our Late
          Cancellation, Late Arrival, and No-Show Policies below help us keep our schedule accurate and our sessions
          available to as many members as possible.
        </P>

        <H3>Late Cancellation Policy</H3>
        <P>
          Sessions can be canceled up to 24 hours before the start time without a penalty fee, and any credits used
          to book the session will be automatically returned to your account.
        </P>
        <P>
          If a cancellation takes place within 24 hours of the session start time, a late cancellation fee of 25%
          (of the non-member cost) will be charged to the card on file.
        </P>

        <H3>No-Show Policy</H3>
        <P>Missed sessions will incur a penalty fee of 50% (of the non-member cost) of the session. This fee will be charged to the card on file.</P>
        <P>Both the Late Cancellation and No-Show Policy apply to all bookable session and studio time at Sauna Club Co.</P>

        <H3>Late Arrival Policy</H3>
        <P>
          If you are running late to your session, please give us a courtesy call as soon as possible so we can try
          to accommodate you. We uphold a 5-minute rule to be able to accommodate an abbreviated session. If you are
          more than 5 minutes late, we may not be able to accommodate your session, and you will be asked to
          reschedule.
        </P>
        <P>Thank you for your attention to this — it helps us keep your Sauna Club Co experience running smoothly.</P>

        <H3>Refund Policy</H3>
        <P>We do not offer refunds for sessions rendered.</P>

        <H3>Disclaimer</H3>
        <P>
          From time to time, we may review or update these fees. If we do, the update will be published on our
          website and in our booking system to reflect the latest version of our policies.
        </P>

        <H2>Sauna Club Co Terms &amp; Conditions of Use Agreement</H2>
        <P>
          This is our Terms &amp; Conditions of Use Agreement (the &quot;Agreement&quot;) for use of the Sauna Club
          Co website (the &quot;Website&quot;). This Website is not directed to persons under eighteen (18) years of
          age. The Website is owned by Sauna Club Co (&quot;Sauna Club Co&quot;). This Agreement applies to all of
          the products, services, and websites offered by the Website and Sauna Club Co, the mobile versions
          thereof, and any applications created by Sauna Club Co, whether available through a social networking
          site or its subsidiaries or affiliated companies (collectively, the &quot;Service&quot;). Please note that
          the availability of any app on a social networking site does not indicate any relationship or affiliation
          between Sauna Club Co and that social networking site.
        </P>
        <P>
          The information presented on this Website is in no way intended as medical advice or as a substitute for
          medical treatment. This information should only be used in conjunction with the guidance and care of your
          physician. Consult your physician before beginning any sauna, cold plunge, or contrast therapy routine
          offered through the Website, particularly if you have a heart condition, are pregnant, or have any other
          condition that heat or cold exposure could affect. Always seek the advice of your physician or other
          qualified health care provider if you have any questions regarding a medical condition or any matter
          related to your health and well-being.
        </P>
        <P>
          If you do not agree to be bound by this Agreement, please do not use or access this Website. Sauna Club Co
          reserves the right to refuse or cancel your account. We also reserve the right to cancel your membership
          should you violate any provision of this Agreement, or any other posted policy on the Website. The
          contents of this Website, including the videos, text, graphics, images, and information obtained from
          Sauna Club Co&apos;s third-party content providers, sponsors, suppliers, and licensors (collectively,
          &quot;Providers&quot;), and any other materials are to be used for informational purposes only.
        </P>

        <H2>Parental or Guardian Permission</H2>
        <P>
          You must be 13 years or older to use this Website, and by providing information about yourself to Sauna
          Club Co, you are representing that you are 13 years of age or older. If you are younger than thirteen (13)
          years of age and would like to become a registered member of, or provide information about yourself to,
          the Sauna Club Co Website, you are required to have your parent or legal guardian contact Sauna Club Co
          prior to use.
        </P>

        <H2>Privacy</H2>
        <P>
          Please review our{" "}
          <Link href="/privacy-policy" className="underline hover:text-orange">
            Privacy Policy
          </Link>
          , which also governs your visit to the Website, to understand our privacy practices.
        </P>

        <H2>Communications</H2>
        <P>
          When you visit the Website or send emails to us, you are communicating with us electronically. You
          consent to receive communications (including legal notices) from us electronically. We will communicate
          with you by email or by posting notices on the Website. You agree that all agreements, notices,
          disclosures, and other communications that we provide to you electronically satisfy any legal requirement
          that such communications be in writing. Sauna Club Co may deliver communications to you by any means set
          forth in any other Sauna Club Co policy or notice published on the Website.
        </P>

        <H2>License and Site Access</H2>
        <P>
          Sauna Club Co grants you a limited license to access and make personal use of the Website. You may not
          download (other than page caching) or modify it, or any portion of it, without our express written
          consent. This license does not include any resale or commercial use of the Website or its contents; any
          collection and use of any product listings, descriptions, or prices; any derivative use of the Website or
          its contents; or any use of data mining, robots, or similar data gathering and extraction tools. The
          Website or any portion of it may not be reproduced, duplicated, copied, sold, resold, or otherwise
          exploited for any commercial purpose without our express written consent.
        </P>
        <P>
          You may not frame or utilize any framing techniques to enclose any trademark, logo, or other proprietary
          information (including images, text, page layout, or form) of Sauna Club Co without our express written
          consent. You may not use any metatags or any other hidden text utilizing Sauna Club Co&apos;s name or
          trademarks without our express written consent. Any unauthorized use terminates the permission or license
          granted by Sauna Club Co. You are granted a limited, revocable, and non-exclusive right to create a
          hyperlink to the home page of the Website so long as the link does not portray Sauna Club Co, its
          affiliates, or their products or services in a false, misleading, derogatory, or otherwise offensive
          manner. You may not use any Sauna Club Co logo or other proprietary graphic or trademark as part of the
          link without express written permission.
        </P>

        <H2>Membership Account</H2>
        <P>
          If you use the Website, you are responsible for maintaining the confidentiality of your account and
          password and for restricting access to your computer, and you agree to accept responsibility for all
          activities that occur under your account or password. Sauna Club Co and its affiliates reserve the right
          to refuse service, terminate accounts, remove or edit content, or cancel orders in their sole discretion.
          Memberships are non-transferable.
        </P>
        <P>You agree to:</P>
        <UL>
          <li>maintain all computer and phone equipment necessary for your access to and use of the Website;</li>
          <li>maintain the security of your user identification, password, Personal Information (as defined in our Privacy Policy), and any other confidential information relating to your Sauna Club Co account;</li>
          <li>take responsibility for all charges resulting from use of your Sauna Club Co account, including unauthorized use prior to your notifying Sauna Club Co of such unauthorized use and taking the legal steps to prevent its further occurrence by contacting us to change your password; and</li>
          <li>update your Personal Information (as defined in our Privacy Policy), including email address, as appropriate.</li>
        </UL>
        <P>
          Sauna Club Co reserves the right to terminate any account that is using or trying to use more than one
          promotion. If a membership is terminated due to a violation of this Agreement, Sauna Club Co will not
          reimburse the member for the remainder of the paid month, nor will reimbursements be made for membership
          cancellations prior to the monthly renewal date.
        </P>

        <H2>Contacting Sauna Club Co</H2>
        <P>
          You may contact us at the{" "}
          <Link href="/contact" className="underline hover:text-orange">
            Contact Us
          </Link>{" "}
          link.
        </P>

        <H2>Disclaimers and Limitation of Liability</H2>
        <P>
          Users of the Website (individually and collectively, &quot;User&quot;) expressly agree that use of the
          Website is at User&apos;s sole risk. Neither Sauna Club Co, nor its employees or Providers, warrant that
          the Website will be uninterrupted or error-free, nor do they warrant or make any representation regarding
          the use of the information provided on the Website or the results that may be obtained from its use, or
          as to the accuracy, reliability, or currency of any information, content, service, or merchandise
          provided through the Website. Sauna Club Co does not endorse, recommend, or sponsor and is not affiliated
          with any individuals or entities listed or linked to on the Website unless that fact is expressly stated.
        </P>
        <P>
          The Website is provided by Sauna Club Co on an &quot;as is&quot; and &quot;as available&quot; basis.
          Sauna Club Co makes no representations or warranties of any kind, express or implied, as to the operation
          of the Website or the information, content, materials, products, or individuals included or listed on
          the Website. To the fullest extent permissible by applicable law, Sauna Club Co disclaims all warranties,
          express or implied, including but not limited to implied warranties of merchantability and fitness for a
          particular purpose.
        </P>
        <P>
          Under no circumstances shall Sauna Club Co or Providers be liable to you or any third party for any
          indirect, consequential, incidental, special, or punitive damages, including but not limited to lost
          profits and business interruption, whether in contract or in tort, including negligence, arising in any
          way from any product or service sold or provided on the Website or the use of the information or the
          results of the use of the information provided on the Website, even if Sauna Club Co is expressly advised
          of the possibility of such damages. In no event shall Sauna Club Co&apos;s liability exceed the price you
          paid for a product or service that is the subject of the claim. No oral advice or written information
          given by Sauna Club Co, Providers, or the like shall create a warranty, nor shall User rely on any such
          information or advice.
        </P>
        <P>
          In those states that do not allow the exclusion or limitation of liability for consequential or
          incidental damages, liability is limited to the fullest extent permitted by law.
        </P>

        <H2>Third-Party Content</H2>
        <P>
          The Website contains information, data, software, photographs, graphs, videos, typefaces, graphics,
          audio, and other material (collectively, &quot;Content&quot;). Regarding Content supplied by Users or
          parties other than Sauna Club Co, Sauna Club Co is a distributor and not a publisher, and has no more
          editorial control over such third-party or User Content than a public library or newsstand. Any opinions,
          advice, statements, services, offers, or other information that is part of Content expressed or made
          available by third parties, and not by Sauna Club Co, are those of the respective authors or
          distributors and not of Sauna Club Co. Under no circumstances shall Sauna Club Co be liable for any loss,
          damage, or harm caused by a User&apos;s reliance on information obtained through the Website. It is the
          responsibility of a User to evaluate the information, opinion, advice, or other Content available through
          the Website.
        </P>

        <H2>Online Conduct</H2>
        <P>
          User agrees to use the Website only for lawful purposes. User is prohibited from posting on or
          transmitting through the Website any unlawful, harmful, threatening, abusive, harassing, defamatory,
          vulgar, obscene, sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable
          material of any kind, including material that encourages conduct that would constitute a criminal
          offense, give rise to civil liability, or otherwise violate any applicable law or regulation.
        </P>
        <P>
          If Sauna Club Co is notified of allegedly infringing, defamatory, damaging, illegal, or offensive content
          provided by a User, Sauna Club Co may investigate the allegation and determine in its sole discretion
          whether to remove or request the removal of such content from the Website. Sauna Club Co reserves the
          right to prohibit conduct, communication, or content that it deems in its sole discretion to be harmful
          to individual Users, the Website, or any rights of Sauna Club Co or any third party, or to violate any
          applicable law.
        </P>

        <H2>Links to Other Sites</H2>
        <P>
          The Website may reference or link to third-party sites. Sauna Club Co has no control over these
          third-party sites or the content within them, and does not guarantee, represent, or warrant that content
          on these sites is accurate, legal, or inoffensive. Sauna Club Co does not endorse the content of any
          third-party site, nor warrant that it will not contain viruses or otherwise impact your computer. If you
          choose to link to or use a third-party website, you should carefully review that third party&apos;s
          privacy statement and other terms and conditions of use.
        </P>

        <H2>Copyrights</H2>
        <P>
          Copyright © Sauna Club Co. All materials and contents contained in the Website (including but not
          limited to the text, graphics, logos, button icons, images, digital downloads, data compilations, and
          software), and the Website itself, are copyrighted materials belonging exclusively to Sauna Club Co or
          its content suppliers and are protected by United States and international copyright law. Sauna Club Co
          enforces its copyright interests to the fullest extent permitted under the law. All rights are reserved.
        </P>

        <H2>Trademarks</H2>
        <P>
          Sauna Club Co and the related logos and other marks indicated on our Website are the exclusive property
          and trademarks of Sauna Club Co. Sauna Club Co reserves all rights, including all rights applicable under
          U.S. and international trademark law. All other trademarks not owned by Sauna Club Co that appear on this
          Website are the property of their respective owners, who may or may not be affiliated with, connected to,
          or sponsored by Sauna Club Co.
        </P>

        <H2>Indemnity</H2>
        <P>
          You agree to defend, indemnify, and hold Sauna Club Co and Providers harmless from and against any
          claims, actions or demands, liabilities, and settlements, including without limitation reasonable legal
          and accounting fees, resulting from, or alleged to result from, your violation of these Terms &amp;
          Conditions.
        </P>

        <H2>Applicable Law</H2>
        <P>
          The Website is created and controlled by Sauna Club Co in the State of Colorado. As such, the laws of
          the State of Colorado will govern these disclaimers, terms, and conditions, without giving effect to any
          principles of conflicts of laws. Sauna Club Co reserves the right to make changes to its Website and
          these disclaimers, terms, and conditions at any time. User hereby irrevocably and unconditionally
          consents to submit to the jurisdiction of the State of Colorado for any litigation arising out of or
          relating to use of or purchase made through the Website, waives any objection to the laying of venue of
          any such litigation in Colorado courts, and agrees not to plead or claim in any Colorado court that such
          litigation brought therein has been brought in an inconvenient forum.
        </P>

        <H2>Preservation/Disclosure</H2>
        <P>
          You acknowledge, consent, and agree that Sauna Club Co may access, preserve, and disclose your account
          information and Content if required to do so by law or in a good-faith belief that such access,
          preservation, or disclosure is reasonably necessary to: (a) comply with legal process; (b) enforce this
          Agreement; (c) respond to claims that any Content violates the rights of third parties; or (d) respond to
          your requests for customer service. Under no other circumstances will Sauna Club Co intentionally
          disclose your account information to any third party.
        </P>

        <H2>Miscellaneous Terms</H2>
        <P>
          In any action against us arising from the use of this Website, the prevailing party shall be entitled to
          recover all legal expenses incurred in connection with the action, including its costs, both taxable and
          non-taxable, and reasonable attorney&apos;s fees. Sauna Club Co reserves the right to make changes to the
          Website, these policies, and these Terms &amp; Conditions of Use at any time, effective immediately upon
          posting on this Website. Please check these Terms &amp; Conditions periodically — each time you access
          this Website, you will be deemed to have accepted any such changes.
        </P>
        <P>
          If any of these terms and conditions is deemed invalid, void, or for any reason unenforceable, that term
          or condition shall be deemed severable and shall not affect the validity and enforceability of any
          remaining terms and conditions. These Terms &amp; Conditions are the entire agreement between you and us
          relating to the subject matter herein. We may assign our rights and obligations under these Terms &amp;
          Conditions, which will inure to the benefit of our successors, assigns, and licensees. The failure of
          either party to insist upon or enforce the strict performance of the other party with respect to any
          provision of these Terms &amp; Conditions, or to exercise any right under them, will not be construed as
          a waiver of that party&apos;s right to assert or rely upon such provision or right in that or any other
          instance.
        </P>
      </main>
      <Footer />
    </>
  );
}
