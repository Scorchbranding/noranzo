"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-tight">
            Start Creating Beautiful Spaces Today
          </h2>
          <p className="mt-6 text-lg text-ivory/60 leading-relaxed">
            Join creators, decorators, and business owners using Noranzo to
            access premium printable wall art in minutes.
          </p>
          <div className="mt-10">
            {/* Replace checkout.default with your Hotmart link in site.ts */}
            <Button href={siteConfig.checkout.default} variant="primary">
              Get Instant Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
