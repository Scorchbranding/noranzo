import { siteConfig } from "@/config/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteConfig.brand.name} ${siteConfig.brand.product}`,
    description: siteConfig.brand.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.brand.name,
    },
    offers: [
      {
        "@type": "Offer",
        name: siteConfig.pricing.creator.name,
        price: siteConfig.pricing.creator.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: siteConfig.pricing.business.name,
        price: siteConfig.pricing.business.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: siteConfig.pricing.ultimate.name,
        price: siteConfig.pricing.ultimate.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
