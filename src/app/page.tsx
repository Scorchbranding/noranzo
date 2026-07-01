import { LaunchOffer, Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { UseCases } from "@/components/sections/UseCases";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CTAStrip } from "@/components/ui/CTAStrip";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { JsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <LaunchOffer />
      <Hero />
      <TrustBar />
      <CTAStrip variant="light" />
      <WhatYouGet />
      <UseCases />
      <CTAStrip variant="dark" />
      <Comparison />
      <Testimonials />
      <CTAStrip variant="gold" />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <StickyCTA />
    </>
  );
}
