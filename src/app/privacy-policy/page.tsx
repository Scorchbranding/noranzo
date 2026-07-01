import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalContact,
} from "@/components/layout/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.brand.name} — how we collect, use, and protect your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalSection title="Introduction">
        <LegalParagraph>
          {siteConfig.brand.name} (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) operates the {siteConfig.brand.name} website and
          digital product services. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website or purchase our digital products.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <LegalParagraph>
          We may collect the following types of information:
        </LegalParagraph>
        <LegalList
          items={[
            "Personal information you provide during checkout (name, email address)",
            "Payment information processed securely through our payment provider (we do not store credit card details)",
            "Usage data such as pages visited, browser type, and device information",
            "Communications you send to us via email or contact forms",
          ]}
        />
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <LegalParagraph>We use collected information to:</LegalParagraph>
        <LegalList
          items={[
            "Process and fulfill your digital product purchases",
            "Deliver download links and access credentials via email",
            "Respond to your inquiries and provide customer support",
            "Send important updates about your purchase or our services",
            "Improve our website, products, and user experience",
            "Comply with legal obligations",
          ]}
        />
      </LegalSection>

      <LegalSection title="Digital Product Delivery">
        <LegalParagraph>
          After purchase, your digital files are delivered via a secure Google
          Drive link sent to the email address provided at checkout. We retain
          your email address to provide access support and product updates.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <LegalParagraph>
          We use trusted third-party services for payment processing, email
          delivery, and file hosting. These providers have their own privacy
          policies governing the use of your information. We do not sell, trade,
          or rent your personal information to third parties.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Data Security">
        <LegalParagraph>
          We implement appropriate technical and organizational measures to
          protect your personal information. However, no method of transmission
          over the Internet is 100% secure, and we cannot guarantee absolute
          security.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Your Rights">
        <LegalParagraph>
          Depending on your location, you may have the right to access, correct,
          or delete your personal information. To exercise these rights, please
          contact us using the information below.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <LegalParagraph>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated revision date. Your continued use
          of our services after changes constitutes acceptance of the updated
          policy.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Contact Us">
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
