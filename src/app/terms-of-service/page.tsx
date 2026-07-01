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
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.brand.name} digital products and website usage.`,
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <LegalSection title="Agreement to Terms">
        <LegalParagraph>
          By accessing or purchasing from {siteConfig.brand.name}, you agree to be
          bound by these Terms of Service. If you do not agree, please do not use
          our website or purchase our products.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Digital Products">
        <LegalParagraph>
          {siteConfig.brand.name} sells digital products consisting of
          downloadable printable wall art files. These are not physical products.
          Upon successful payment, you will receive access to download files via
          a secure Google Drive link sent to your email.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="License Grant">
        <LegalParagraph>
          Upon purchase, you receive a non-exclusive, non-transferable license
          to use the digital files for the following purposes:
        </LegalParagraph>
        <LegalList
          items={[
            "Personal use and home decoration",
            "Commercial use including selling physical prints",
            "Use on print-on-demand platforms (Etsy, Shopify, Amazon, etc.)",
            "Use in client projects for interior design or decoration",
            "Use in Airbnb, hotel, café, office, or commercial spaces",
          ]}
        />
      </LegalSection>

      <LegalSection title="License Restrictions">
        <LegalParagraph>You may not:</LegalParagraph>
        <LegalList
          items={[
            "Resell, redistribute, or share the digital files themselves",
            "Include files in other digital products or bundles for resale",
            "Claim ownership or authorship of the original artwork",
            "Use files in any way that violates applicable laws",
            "Transfer your license to another person or entity",
          ]}
        />
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <LegalParagraph>
          All artwork, designs, and content in {siteConfig.brand.name}{" "}
          collections remain the intellectual property of {siteConfig.brand.name}.
          Your license grants usage rights only as described above.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Account & Access">
        <LegalParagraph>
          Access to purchased collections is granted for the lifetime of the
          product. We reserve the right to update, modify, or discontinue
          collections with reasonable notice. Existing purchasers retain access
          to files purchased before any discontinuation.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <LegalParagraph>
          Digital products are provided &quot;as is&quot; without warranties of
          any kind. We do not guarantee specific print results, as output may
          vary based on printer, paper, and settings used.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <LegalParagraph>
          {siteConfig.brand.name} shall not be liable for any indirect,
          incidental, or consequential damages arising from the use of our
          products. Our total liability shall not exceed the amount paid for the
          product in question.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Governing Law">
        <LegalParagraph>
          These terms shall be governed by and construed in accordance with
          applicable laws. Any disputes shall be resolved through good-faith
          negotiation before pursuing formal legal remedies.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Contact Us">
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
