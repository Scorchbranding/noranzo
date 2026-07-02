/**
 * NORANZO Site Configuration
 * Update this file to change brand settings, checkout links, prices, and contact info.
 */

export const siteConfig = {
  brand: {
    name: "NORANZO",
    tagline: "Premium Digital Assets",
    product: "Business Collection",
    description:
      "Get instant access to 60,000+ high-quality printable wall art designs. Print, decorate, sell, or use for creative projects — commercial use included.",
  },

  // Replace these with your Hotmart checkout links
  checkout: {
    creator: "CREATOR_CHECKOUT_LINK",
    business: "BUSINESS_CHECKOUT_LINK",
    ultimate: "ULTIMATE_CHECKOUT_LINK",
    default: "BUSINESS_CHECKOUT_LINK", // Hero & main CTAs
  },

  contact: {
    email: "support@noranzo.com",
  },

  offer: {
    headline: "60,000+ Printable Wall Art Designs Ready to Download Today",
    subheadline:
      "Get instant access to a massive collection of high-quality wall art designs you can print, decorate with, or use for creative projects.",
    urgency: "Limited Launch Price — Save 50% Today",
    regularPrice: 99,
    salePrice: 49,
    savingsPercent: 50,
    cta: "Get Instant Access",
    trustLine: "Secure checkout • Instant delivery • Lifetime access",
    guarantee: "30-Day Money-Back Guarantee",
  },

  pricing: {
    sectionTitle: "Choose Your Collection",
    sectionSubtitle:
      "Start small or unlock the full Noranzo library. The Business Collection is our most popular option for creators and online sellers.",
    comparisonNote:
      "Not sure which one to choose? Most customers choose the Business Collection because it unlocks the full 60,000+ design library with weekly updates.",
    creator: {
      name: "Creator Collection",
      regularPrice: 39,
      salePrice: 19,
      bestFor: "Beginners",
      features: [
        "10,000+ Printable Wall Art Designs",
        "High-Resolution Files",
        "Commercial Use",
        "Lifetime Access",
        "Instant Google Drive Access",
      ],
      cta: "Get Creator Collection",
    },
    business: {
      name: "Business Collection",
      regularPrice: 99,
      salePrice: 49,
      badge: "MOST POPULAR",
      bestFor: "Creators & sellers",
      features: [
        "60,000+ Printable Wall Art Designs",
        "High-Resolution Files",
        "Commercial Use",
        "Lifetime Access",
        "Weekly New Collections",
        "Organized Categories",
        "Instant Google Drive Access",
      ],
      cta: "Get Business Collection",
    },
    ultimate: {
      name: "Ultimate Collection",
      regularPrice: 179,
      salePrice: 89,
      bestFor: "Serious businesses",
      features: [
        "Everything in Business Collection",
        "Premium Mockup Pack",
        "Bonus Design Collections",
        "Future Exclusive Drops",
        "Priority Support",
        "Commercial Use",
        "Lifetime Access",
      ],
      cta: "Get Ultimate Collection",
    },
  },

  whatYouGet: [
    "60,000+ printable designs",
    "High-resolution files",
    "Organized folders",
    "Commercial use",
    "Lifetime access",
    "Weekly new collections",
    "Instant Google Drive access",
  ],

  useCases: [
    "Etsy sellers",
    "Print-on-demand shops",
    "Home decorators",
    "Airbnb owners",
    "Office decoration",
    "Cafés and restaurants",
    "Digital product creators",
  ],

  comparison: {
    individualCost: "$2–$10 each",
    totalDesigns: "60,000+",
    message:
      "Buying individual designs can cost $2–$10 each. With Noranzo, you get 60,000+ designs for one small payment.",
  },

  testimonials: [
    {
      name: "Sarah M.",
      role: "Etsy Seller",
      quote:
        "I launched my print shop with Noranzo designs and made my first sales within a week. The variety is incredible.",
    },
    {
      name: "James R.",
      role: "Airbnb Host",
      quote:
        "Decorated 3 properties for a fraction of what I would have spent buying art individually. Guests love it.",
    },
    {
      name: "Lisa K.",
      role: "Interior Decorator",
      quote:
        "My clients always ask where I find the art. This collection saves me hours every single project.",
    },
  ],

  faq: [
    {
      question: "Is this a physical product?",
      answer:
        "No. This is a 100% digital product. After purchase, you receive instant access to downloadable files via Google Drive. You can print them at home, at a print shop, or through any print-on-demand service.",
    },
    {
      question: "How do I receive access?",
      answer:
        "Immediately after payment, you'll receive an email with a secure Google Drive link. All 60,000+ designs are organized in folders by category — ready to browse and download instantly.",
    },
    {
      question: "Can I use the designs commercially?",
      answer:
        "Yes. Your purchase includes a full commercial license. Sell prints on Etsy, run a print-on-demand store, use in client projects, or decorate commercial spaces — all included.",
    },
    {
      question: "Do I need design skills?",
      answer:
        "Not at all. Every file is ready to download and print. No editing, no design software, no experience needed. Just pick a design, download, and print.",
    },
    {
      question: "Are the files organized?",
      answer:
        "Yes. All designs are sorted into clearly labeled folders by category and style — Abstract, Minimal, Botanical, Vintage, Office, and more. Finding what you need takes seconds.",
    },
    {
      question: "Can I print them anywhere?",
      answer:
        "Yes. Files are high-resolution and print-ready. Use your home printer, a local print shop, Costco, Walgreens, or any online print-on-demand service.",
    },
    {
      question: "Can I use them for my business?",
      answer:
        "Absolutely. Use them for Etsy listings, Shopify products, Airbnb properties, office spaces, cafés, hotels, or any commercial project. Commercial use is fully included.",
    },
    {
      question: "What happens after payment?",
      answer:
        "You'll be redirected to a confirmation page and receive an email within minutes with your Google Drive access link. Download starts immediately — no waiting.",
    },
  ],

  footerLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
