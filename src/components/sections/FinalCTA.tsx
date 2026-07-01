"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-navy border-t border-gold/20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <AnimatedSection>
          <p className="text-sm font-bold uppercase tracking-widest text-gold mb-4">
            {siteConfig.offer.urgency}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            60,000+ Designs. One Payment. Instant Access.
          </h2>
          <p className="mt-5 text-lg text-ivory/60">
            Join thousands of creators, decorators, and business owners already using Noranzo.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-xl text-ivory/40 line-through">${siteConfig.offer.regularPrice}</span>
            <span className="text-5xl font-bold text-gold">${siteConfig.offer.salePrice}</span>
          </div>

          <div className="mt-8">
            {/* Replace checkout.default with your Hotmart link in site.ts */}
            <Button href={siteConfig.checkout.default} variant="cta" pulse className="!px-12 !py-5">
              {siteConfig.offer.cta}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <p className="mt-5 text-sm text-ivory/40">
            {siteConfig.offer.guarantee} • {siteConfig.offer.trustLine}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
