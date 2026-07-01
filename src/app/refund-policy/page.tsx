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
  title: "Refund Policy",
  description: `Refund Policy for ${siteConfig.brand.name} digital products.`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy">
      <LegalSection title="Digital Product Nature">
        <LegalParagraph>
          {siteConfig.brand.name} sells digital products that are delivered
          instantly upon purchase. Because digital files cannot be
          &quot;returned&quot; once downloaded or accessed, all sales are
          generally final.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="No Refund Policy">
        <LegalParagraph>
          Due to the nature of digital goods, we do not offer refunds once a
          purchase has been completed and access has been granted. By
          completing your purchase, you acknowledge and agree to this policy.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Before You Purchase">
        <LegalParagraph>
          We encourage you to carefully review the product description,
          included features, and sample previews before purchasing. If you have
          any questions about what is included in a collection, please contact us
          before making a purchase.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Exceptional Circumstances">
        <LegalParagraph>
          We may consider refunds in the following limited circumstances:
        </LegalParagraph>
        <LegalList
          items={[
            "Technical issues preventing you from accessing your purchased files after reasonable troubleshooting",
            "Duplicate charges or billing errors",
            "Failure to deliver access within 48 hours of purchase",
          ]}
        />
        <LegalParagraph>
          Refund requests must be submitted within 7 days of purchase and will
          be reviewed on a case-by-case basis. Approved refunds will be processed
          within 5–10 business days.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="How to Request a Refund">
        <LegalParagraph>
          To request a refund under exceptional circumstances, email us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-gold hover:underline"
          >
            {siteConfig.contact.email}
          </a>{" "}
          with your order details, purchase date, and a description of the
          issue. We will respond within 24–48 hours.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Chargebacks">
        <LegalParagraph>
          If you initiate a chargeback without first contacting us, your access
          to all purchased products may be revoked. We are committed to resolving
          issues directly and encourage you to reach out before disputing a
          charge with your bank.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Contact Us">
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
