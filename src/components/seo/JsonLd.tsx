import { siteConfig } from "@/config/site";

export function JsonLd() {
  const plans = ["creator", "business", "ultimate"] as const;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteConfig.brand.name} ${siteConfig.pricing.business.name}`,
    description: siteConfig.brand.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.brand.name,
    },
    offers: plans.map((key) => ({
      "@type": "Offer",
      name: siteConfig.pricing[key].name,
      price: siteConfig.pricing[key].salePrice,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
