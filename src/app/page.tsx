import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Benefits } from "@/components/sections/Benefits";
import { CollectionPreview } from "@/components/sections/CollectionPreview";
import { MockupSection } from "@/components/sections/MockupSection";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustBar />
      <Benefits />
      <CollectionPreview />
      <MockupSection />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
