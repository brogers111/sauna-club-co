import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Learn how Sauna Club Co collects, uses, and protects your personal information.",
  path: "/privacy-policy",
});

function H2({ children }: { children: string }) {
  return <h2 className="mt-12 font-display text-3xl uppercase tracking-wide text-cream first:mt-0">{children}</h2>;
}

function H3({ children }: { children: string }) {
  return <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-cream">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-cream/80">{children}</p>;
}

function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-3 flex flex-col gap-2 pl-6 leading-relaxed text-cream/80 [&>li]:list-disc">{children}</ul>;
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-6xl uppercase tracking-wide text-cream md:text-7xl">Privacy Policy</h1>

        <H2>Introduction</H2>
        <P>
          Welcome to Sauna Club Co (&quot;Sauna Club Co&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;). Sauna Club Co respects your privacy and is committed to protecting it through our
          compliance with this privacy policy (&quot;Privacy Policy&quot;). As used in this Privacy Policy, the
          foregoing references include Sauna Club Co LLC.
        </P>
        <P>
          This Privacy Policy describes the types of information we may collect from you or that you may provide
          when you (i) use our website, mobile application(s), and other online services (collectively,
          &quot;Technology Service&quot;) that link to or explicitly reference this Privacy Policy, (ii) use the
          Sauna Club Co studio services as described in a Sauna Club Co membership agreement or other applicable
          written agreement or enrollment forms (the &quot;Services&quot;), and (iii) Sauna Club Co&apos;s practices
          for collecting, using, maintaining, protecting, and disclosing that information. Further, in the event
          Sauna Club Co offers a Technology Service that does not reference or link to a Sauna Club Co privacy
          policy, this Privacy Policy will apply to such Technology Service.
        </P>
        <P>
          Please read this Privacy Policy carefully to understand our policies and practices regarding your
          information and how we will treat it. If you do not agree with our policies and practices, your choice is
          not to use our Technology Service or the Services. By accessing or using a Technology Service and/or the
          Services, you agree to this Privacy Policy.
        </P>
        <P>
          This Privacy Policy may change from time to time (see the section entitled{" "}
          <strong>Updates to Our Privacy Policy</strong>). Your continued use of the Technology Service and/or the
          Services after we make changes or updates to this Privacy Policy is deemed to be acceptance of those
          changes and/or updates, so please check this Privacy Policy periodically for any updates or changes.
        </P>

        <H2>Collection and Use of Personal Information</H2>
        <P>
          When you use Sauna Club Co&apos;s Technology Service and/or the Services, we collect data and information
          from you that can be used to identify you (&quot;Personal Information&quot;). When you voluntarily submit
          your Personal Information on the Technology Service or through any interactive features (e.g., a web
          chat), or when you otherwise contact us (e.g., email), or when you provide information in connection with
          your membership documents to facilitate use of the Services, you are giving your consent to the
          collection, use, and disclosure of your Personal Information in accordance with this Privacy Policy.
          Personal Information includes, but is not limited to, name, address, email address, telephone number, and
          other information you choose to provide when creating an account, participating in any interactive
          features, filling out an online form, or signing a membership agreement.
        </P>
        <P>We may use the Personal Information that we collect from you or that you provide to us:</P>
        <UL>
          <li>in accordance with the Technology Service and/or Services&apos; respective terms of use;</li>
          <li>to provide customer and technical support;</li>
          <li>to perform updates and/or improvements to the Technology Service and/or Services;</li>
          <li>to provide you with related security alerts;</li>
          <li>to perform analytics related to the Technology Service and/or Services;</li>
          <li>to personalize your access to and use of the Technology Service and/or Services;</li>
          <li>
            to prevent illegal or fraudulent activities, including fraud detection, security enhancements, and
            investigating security incidents or other unauthorized access attempts;
          </li>
          <li>to provide you with information about Sauna Club Co and its offerings, products, Services, and events;</li>
          <li>to respond to your questions;</li>
          <li>in connection with account registration, to present our Technology Service and its contents to you;</li>
          <li>in any other way we may describe when you provide the Personal Information;</li>
          <li>
            for any legally permissible purposes in aggregated format that has been otherwise de-identified so that
            such Personal Information cannot be reasonably used to identify you; and
          </li>
          <li>for other legally permissible activities with your consent.</li>
        </UL>

        <H2>Collection and Use of Non-Personal Information</H2>
        <P>
          When you access our Technology Service, we also collect anonymous &quot;Non-Personal Information&quot;
          that does not identify you personally but does provide us with access and usage data such as: (i) log
          information (e.g., browser agent, IP address, internet domain, and the dates and times you access the
          Technology Service); (ii) location information (e.g., precise location of your device in accordance with
          device permissions); (iii) device information (e.g., information about the computer or mobile device
          being used to access the Technology Service, operating system information, unique device identifiers);
          and (iv) access and usage information obtained from cookies and other automated data collection
          technologies (see <strong>Information We Collect Through Automatic Data Collection Technologies</strong>{" "}
          below). This data helps us analyze and improve your experience on the Technology Service and the
          Services.
        </P>

        <H2>How and When We Collect Information</H2>
        <P>
          We collect information directly at the time you provide it to us (e.g., account registration, sign-up
          forms, emails, search queries on the Technology Service, or membership enrollment for use of the
          Services). We also collect information automatically as you navigate through the Technology Service.
        </P>

        <H2>Information We Collect Through Automatic Data Collection Technologies</H2>
        <P>
          As you navigate through and interact with our Technology Service, we reserve the right to monitor your
          use of the Technology Service through automatic data collection technologies to collect certain
          information about your equipment, browsing actions, and patterns, including:
        </P>
        <UL>
          <li>
            Details of your visits to our Technology Service, including traffic data, location data, logs, and
            other communication data and the resources that you access and use on the Technology Service.
          </li>
          <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
        </UL>
        <P>
          The information we collect automatically is only statistical Non-Personal Information, but we may
          maintain it or associate it with Personal Information we collect in other ways. It helps us improve our
          Technology Service and deliver a better, more personalized experience by enabling us to store your
          preferences, speed up your searches, and recognize you when you return to our Technology Service.
        </P>

        <H3>Cookies and Related Technologies</H3>
        <P>The technologies we use for automatic data collection may include:</P>
        <UL>
          <li>
            <strong>Cookies.</strong> A cookie is a small file placed on the hard drive of your computer.{" "}
            <strong>Persistent cookies</strong> remain after you close your browser and may collect or transmit
            information every time you use our Technology Service until manually cleared or expired.{" "}
            <strong>Session cookies</strong> typically disappear once you close your browser or mobile application.
          </li>
          <li>
            <strong>Web beacons.</strong> Pages of our Technology Service and our emails may contain small
            electronic files known as web beacons (also called clear gifs, pixel tags, and single-pixel gifs) that
            let us count users who have visited a page or opened an email, and help us compile aggregated
            statistics regarding the effectiveness of our promotional campaigns or other operations.
          </li>
          <li>
            <strong>Ability to accept or decline cookies.</strong> You may refuse to accept or decline cookies by
            activating the appropriate setting on your web browser. If you reject or decline cookies, you may be
            unable to access certain parts of our Technology Service. Unless you have adjusted your browser setting
            to refuse cookies, our system will issue cookies when you direct your browser to our Technology
            Service.
          </li>
        </UL>

        <H3>Third-Party Use of Cookies</H3>
        <P>
          Some content or applications on the Technology Service may be served by third parties, including
          advertisers, ad networks and servers, and content providers. These third parties may use cookies (alone
          or with web beacons or other tracking technologies) to collect information about you when you use our
          Technology Service. They may use this information to provide you with interest-based advertising or
          other targeted content. We do not control these third parties&apos; tracking technologies or how they may
          be used. We reserve the right to use third-party web analytics services that use their own cookies to
          collect Non-Personal Information about your use of this Technology Service.
        </P>

        <H2>Sharing or Disclosure of Information</H2>
        <P>
          We will not sell any of your Personal Information to any outside organization. We only disclose your
          Personal Information to third parties as reasonably necessary to carry out the permitted uses described
          in this Privacy Policy, including in connection with the following:
        </P>
        <UL>
          <li><strong>Affiliated entities</strong> — to our subsidiaries and affiliates.</li>
          <li>
            <strong>Service providers</strong> — to contractors and other third parties we use to support our
            business, who are bound by contractual obligations to keep Personal Information confidential and use it
            only for the purposes for which we disclose it to them.
          </li>
          <li>
            <strong>Successors</strong> — to a buyer or other successor in the event of a merger, restructuring, or
            sale or transfer of some or all of Sauna Club Co&apos;s assets, in which Personal Information is among
            the assets transferred.
          </li>
          <li><strong>Purpose fulfillment</strong> — to fulfill the purpose for which you provide it.</li>
          <li><strong>Disclosed purposes</strong> — for any other purpose disclosed by us when you provide the Personal Information.</li>
          <li><strong>Third-party advertising partners</strong> — see Third-Party Use of Cookies above.</li>
          <li><strong>With your consent or opt-in</strong> — see Use of Personal Information for Marketing Activities below.</li>
        </UL>
        <P>We may also disclose your Personal Information in connection with the following:</P>
        <UL>
          <li><strong>Legal process</strong> — to comply with any court order, subpoena, law, or legal process, including a government or regulatory request.</li>
          <li><strong>Enforcement</strong> — to investigate, respond to, or enforce our terms of use and other agreements, including for billing and collection purposes.</li>
          <li>
            <strong>Security</strong> — if we believe disclosure is necessary or appropriate to protect the rights,
            property, or safety of Sauna Club Co, our members, or others, or to detect, prevent, and address fraud
            or other illegal activity.
          </li>
        </UL>
        <P>We also reserve the right to disclose or share Non-Personal Information and/or de-identified information without restriction.</P>

        <H2>Use of Personal Information for Marketing Activities</H2>
        <P>
          We may act as a marketing affiliate, marketing partner, or reseller with a third-party marketing partner,
          and we reserve the right to disclose your Personal Information to such partners for purposes of
          transaction processing, order fulfillment, and support. These partners may also email you regarding
          complementary products or services; you can opt out at any time by contacting us (see{" "}
          <strong>Contact Us</strong> below) or by using the unsubscribe option in the partner&apos;s email.
        </P>
        <P>
          We may also provide you with the opportunity to receive promotional offers from specifically identified
          third parties, but only if you explicitly consent (opt in) to receive each offer. If you opt in, your
          Personal Information will be shared only with that specifically identified third party, and only in
          connection with that specific promotion, not on a continual basis. We have no responsibility or liability
          for the policies and practices of these third parties — you should review their privacy policies before
          providing information to them.
        </P>

        <H2>Choices About How We Use and Disclose Your Information</H2>
        <P>We strive to provide you with choices regarding the Personal Information you provide to us:</P>
        <UL>
          <li>
            <strong>Browser configuration.</strong> You can set your browser to refuse all or some cookies, or to
            alert you when cookies are being sent. If you disable or refuse cookies, some parts of the Technology
            Service may become inaccessible or not function properly.
          </li>
          <li>
            <strong>NAI targeted ads opt-out.</strong> We do not control third parties&apos; collection or use of
            your information to serve interest-based advertising, but you can opt out of receiving targeted ads
            from members of the Network Advertising Initiative (&quot;NAI&quot;) on the NAI&apos;s website.
          </li>
        </UL>

        <H3>State Resident Rights and Choices</H3>
        <P>
          In addition to U.S. federal law, certain states provide their residents with additional privacy rights
          and choices. Sauna Club Co does not sell your personal information as defined under any of these state
          privacy laws.
        </P>
        <P>
          <strong>Colorado.</strong> The Colorado Privacy Act (&quot;CPA&quot;) grants Colorado residents certain
          rights regarding the personal information businesses have about them, subject to certain limitations, and
          at this time does not extend to individuals acting in commercial or employment contexts. These rights
          include:
        </P>
        <UL>
          <li><strong>Right of access</strong> — to confirm the processing of your personal data and obtain a copy of it in a readily useable format, to the extent technically feasible.</li>
          <li><strong>Right to correct inaccuracies</strong> — to request that inaccuracies in your personal information are corrected.</li>
          <li><strong>Right to deletion</strong> — to delete personal information concerning you.</li>
          <li><strong>Right to data portability</strong> — to obtain a copy of your data in a portable, readily usable format, up to twice per year.</li>
          <li><strong>Right to opt out</strong> — of targeted advertising, sale of your personal information, and profiling for decisions with legal or similarly significant effects.</li>
        </UL>
        <P>
          A Colorado resident may designate another person to act on their behalf as an authorized agent with
          respect to these rights; we will seek to authenticate that an authorized agent is in fact authorized,
          which may include requesting a power of attorney or other legal document reflecting that relationship. To
          opt out of targeted advertising online, please adjust your cookie settings to reject marketing cookies as
          described above. Colorado residents may appeal our response to a request by emailing us at the address
          under <strong>Contact Us</strong> below.
        </P>
        <P>
          <strong>California.</strong> California residents and consumers may have additional personal information
          rights and choices. Please see <strong>Your California Privacy Rights</strong> below for more
          information.
        </P>

        <H2>Your California Privacy Rights</H2>
        <P>California consumers have the right to request the following information from Sauna Club Co regarding Personal Information collected about you during the preceding 12 months:</P>
        <UL>
          <li>The categories of Personal Information collected about you.</li>
          <li>The categories of sources from which the Personal Information is collected.</li>
          <li>The business or commercial purpose for collecting or selling Personal Information.</li>
          <li>The categories of third parties with whom we share Personal Information, if any.</li>
          <li>The specific Personal Information collected about you.</li>
        </UL>
        <P>
          We will provide this information free of charge up to two times in any twelve-month period, within 45
          days of receiving your verifiable request (including verification of your identity and California
          residency), subject to delays and exclusions permitted by law. As a California resident, you also have
          the right to request that we delete Personal Information we have collected about you, and the right to
          opt out of the sale of your Personal Information — though we do not sell your Personal Information. You
          can exercise your California privacy rights through the <strong>Contact Us</strong> process below; we
          will not discriminate against you for exercising any of these rights.
        </P>

        <H2>International Considerations</H2>
        <P>
          Sauna Club Co is based in the United States and will only process and store your Personal Information in
          the United States. Sauna Club Co does not currently transfer or store any member information outside of
          the United States.
        </P>

        <H2>Children Under the Age of 13</H2>
        <P>
          Our Technology Service is not intended for children under 13 years of age. No one under age 13 may
          provide any Personal Information through the Technology Service. In accordance with the Children&apos;s
          Online Privacy Protection Act (&quot;COPPA&quot;), we do not knowingly collect Personal Information from
          children under 13 through our Technology Service. If you are under 13, do not use or provide any
          information on this Technology Service. If we learn we have collected Personal Information from a child
          under 13 without verification of parental consent, we will delete that information.
        </P>

        <H2>Data Security</H2>
        <P>
          We have implemented reasonable measures designed to secure your Personal Information from accidental loss
          and from unauthorized access, use, alteration, and disclosure. Where we have given you (or you have
          chosen) a password for access to certain parts of our Technology Service, you are responsible for keeping
          this password confidential. Unfortunately, the transmission of information via the internet is not
          completely secure — although we do our best to protect your Personal Information, we cannot guarantee its
          security in transit to our Technology Service.
        </P>

        <H2>HIPAA and Protected Health Information</H2>
        <P>
          In connection with your use of the Technology Service and/or the Services, Sauna Club Co does not
          request, use, disclose, or otherwise access any Protected Health Information (&quot;PHI&quot;) as defined
          under the Health Insurance Portability and Accountability Act of 1996, as amended (&quot;HIPAA&quot;).
        </P>

        <H2>Updating Your Personal Information</H2>
        <P>
          If you are a registered user of the Technology Service and/or have enrolled with Sauna Club Co to use the
          Services, you can review, change, and/or correct the Personal Information you have provided to us at any
          time by using the features within the Technology Service or by submitting a written request through the{" "}
          <strong>Contact Us</strong> process below or as described in your membership agreement.
        </P>

        <H2>Deactivating Your Account</H2>
        <P>
          At any time, you may request that we deactivate your account by contacting us through the{" "}
          <strong>Contact Us</strong> process below. We will require you to provide information confirming that the
          account you are requesting to deactivate is yours, or that you have legal authority to make the request.
          We may retain certain cached or archived copies of your Personal Information as required by law or for
          legitimate business purposes for a certain period of time in accordance with applicable law.
        </P>

        <H2>Mobile Push Notifications; Alerts</H2>
        <P>
          If you are a registered user of the Technology Service and/or have entered into a membership agreement or
          other enrollment documents for the Services, we may, with your consent, send promotional and
          non-promotional push notifications or alerts to your mobile device. You can deactivate these messages at
          any time by changing the notification settings on your mobile device.
        </P>

        <H2>Email Messages; Promotional Communications; Opt-Outs</H2>
        <P>
          If you provide us with your email address, you may receive periodic messages with information specific to
          the Technology Service and/or the Services, required for their normal functioning, or for other
          promotional communication purposes. You may opt out of promotional communications by following the
          instructions in those communications or by emailing us at the address under{" "}
          <strong>Contact Us</strong> below. If you opt out, we may still send non-promotional emails, such as those
          about your account or our ongoing business relationship.
        </P>

        <H2>Sale of Your Personal Information</H2>
        <P>Neither Sauna Club Co nor our subcontractors will sell any of your Personal Information to any outside organization.</P>

        <H2>Links to Third-Party Websites</H2>
        <P>
          The Technology Service may contain links to or from other websites. We are not responsible and do not
          have any liability for the privacy practices of third-party websites or service providers. This Privacy
          Policy applies only to the Personal Information that Sauna Club Co collects via its Technology Service
          and/or Services as described in this Policy. We encourage you to carefully read the privacy policies and
          terms of use of any website you visit or link to or from the Technology Service.
        </P>

        <H2>Your Emails to Sauna Club Co</H2>
        <P>
          We welcome emails from you, and within the Technology Service there may be places for your questions and
          comments. We may share the information you send us with our team members capable of addressing your
          questions and concerns, or with certain third parties as necessary to assist you. Please note that
          non-encrypted internet email sent by you may be accessed and viewed by unintended third parties without
          your knowledge while in transit to us. If you use email to communicate confidential information to us,
          you do so at your own risk.
        </P>

        <H2>Updates to Our Privacy Policy</H2>
        <P>
          Sauna Club Co reserves the right to update or modify this Privacy Policy at any time and from time to
          time without prior notice. It is our policy to post any updates or modifications with a notice on the
          Technology Service that the Privacy Policy has been updated. If we make material changes to how we treat
          our users&apos; Personal Information, we will also notify you by email to the primary email address on
          your Sauna Club Co account and/or through a notice on the Technology Service home page. The date this
          Privacy Policy was last revised is identified at the top of this page. Your continued use of this
          Technology Service indicates your acceptance of the updated Privacy Policy.
        </P>

        <H2>Contact Us</H2>
        <P>
          If you have any questions about this Privacy Policy or how we collect, use, share, or protect the
          security of your Personal Information, please contact us at:
        </P>
        <P>
          Sauna Club Co LLC
          <br />
          9695 W 44th Ave
          <br />
          Wheat Ridge, CO 80033
          <br />
          Email: jenna@saunaclubco.com
        </P>
      </main>
      <Footer />
    </>
  );
}
