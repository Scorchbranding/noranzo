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
      "Premium digital library with over 60,000 high-quality printable wall art designs for homes, offices, Airbnb properties, online shops, and creative businesses.",
  },

  // Replace these with your Hotmart checkout links
  checkout: {
    creator: "CREATOR_CHECKOUT_LINK",
    business: "BUSINESS_CHECKOUT_LINK",
    ultimate: "ULTIMATE_CHECKOUT_LINK",
    default: "BUSINESS_CHECKOUT_LINK", // Used for general CTAs
  },

  contact: {
    email: "support@noranzo.com",
  },

  social: {
    instagram: "",
    pinterest: "",
    facebook: "",
    twitter: "",
  },

  pricing: {
    creator: {
      name: "Creator Collection",
      price: 19,
      features: [
        "10,000+ Designs",
        "Instant Download",
        "Commercial Use",
        "Lifetime Access",
      ],
      cta: "Get Creator",
    },
    business: {
      name: "Business Collection",
      price: 49,
      badge: "Most Popular",
      features: [
        "60,000+ Designs",
        "High Resolution Files",
        "Weekly New Collections",
        "Commercial Use",
        "Lifetime Access",
        "Organized Categories",
      ],
      cta: "Get Business Collection",
    },
    ultimate: {
      name: "Ultimate Collection",
      price: 89,
      features: [
        "Everything in Business",
        "Bonus Collections",
        "Premium Mockups",
        "Future Updates",
        "Priority Support",
      ],
      cta: "Get Ultimate",
    },
  },

  hero: {
    badges: [
      "60,000+ Designs",
      "Commercial Use",
      "Lifetime Access",
      "Weekly New Collections",
    ],
  },

  trustBar: [
    "High Resolution Files",
    "Organized Categories",
    "Instant Download",
    "Commercial Use",
    "Weekly Updates",
  ],

  benefits: [
    {
      title: "60,000+ Premium Designs",
      description:
        "A vast library of curated wall art spanning every style, mood, and space.",
    },
    {
      title: "Commercial Use Included",
      description:
        "Sell on Etsy, print-on-demand platforms, or use in client projects with full rights.",
    },
    {
      title: "Lifetime Access",
      description:
        "One purchase, unlimited access. Download anytime, as many times as you need.",
    },
    {
      title: "Weekly New Collections",
      description:
        "Fresh designs added every week so your catalog never goes stale.",
    },
    {
      title: "Organized Library",
      description:
        "Every file sorted by category, style, and format for effortless browsing.",
    },
    {
      title: "High Resolution Files",
      description:
        "Print-ready files optimized for stunning results at any size.",
    },
  ],

  categories: [
    "Abstract",
    "Minimal",
    "Botanical",
    "Luxury",
    "Nature",
    "Vintage",
    "Black & White",
    "Kids Room",
    "Office",
    "Boho",
    "Modern",
    "Quotes",
  ],

  mockups: [
    {
      title: "Home Decor",
      description:
        "Elevate living rooms, bedrooms, and kitchens with gallery-worthy art.",
    },
    {
      title: "Airbnb & Hotels",
      description:
        "Create memorable guest experiences with cohesive, stylish interiors.",
    },
    {
      title: "Creative Businesses",
      description:
        "Stock your Etsy shop or POD store with thousands of ready-to-sell designs.",
    },
  ],

  faq: [
    {
      question: "How do I receive the files?",
      answer:
        "After your purchase, you'll receive instant access via a secure Google Drive link sent to your email. All files are organized in folders by category for easy browsing and downloading.",
    },
    {
      question: "Can I use the designs commercially?",
      answer:
        "Yes. Every collection includes a commercial license, allowing you to sell prints on Etsy, print-on-demand platforms, or use the artwork in client projects and business ventures.",
    },
    {
      question: "Are the files ready to print?",
      answer:
        "Absolutely. All designs are delivered in high-resolution formats optimized for printing at various sizes, from small frames to large gallery walls.",
    },
    {
      question: "Do I get lifetime access?",
      answer:
        "Yes. Your purchase grants lifetime access to the collection. You can download files anytime, as many times as you need, with no recurring fees.",
    },
    {
      question: "Are new designs added?",
      answer:
        "Yes. We add new collections every week. Business and Ultimate collection holders receive all future updates at no additional cost.",
    },
    {
      question: "Can I use this for Etsy or print-on-demand?",
      answer:
        "Yes. The commercial license included with every collection allows you to sell physical prints on Etsy, Shopify, Amazon, and any print-on-demand platform.",
    },
    {
      question: "Is this a physical product?",
      answer:
        "No. Noranzo is a digital product. You receive downloadable files that you can print at home, at a local print shop, or through a print-on-demand service.",
    },
    {
      question: "What if I need help?",
      answer:
        "Our support team is here to help. Reach out at support@noranzo.com and we'll respond within 24–48 hours. Ultimate collection holders receive priority support.",
    },
    {
      question: "Can I request a refund?",
      answer:
        "Due to the digital nature of our products, all sales are final. Please review the collection details carefully before purchasing. See our Refund Policy for full details.",
    },
    {
      question: "Are the files organized?",
      answer:
        "Yes. Every collection is meticulously organized into folders by category, style, and format, making it easy to find exactly what you need.",
    },
  ],

  navigation: [
    { label: "Benefits", href: "#benefits" },
    { label: "Collections", href: "#collections" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  footerLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
