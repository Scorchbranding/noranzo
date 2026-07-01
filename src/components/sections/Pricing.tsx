"use client";

import { ArrowRight, Check, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  const plan = siteConfig.pricing.business;

  return (
    <section id="pricing" className="py-14 md:py-20 bg-navy">
      <div className="mx-auto max-w-lg px-4 md:px-6">
        <AnimatedSection>
          <div className="rounded-xl border-2 border-gold bg-white p-8 md:p-10 shadow-2xl shadow-gold/10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gold mb-2">
              {siteConfig.offer.urgency}
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
              {plan.name}
            </h2>

            <div className="mb-6">
              <p className="text-lg text-charcoal/50 line-through">
                Regular price: ${plan.regularPrice}
              </p>
              <p className="text-6xl md:text-7xl font-bold text-navy mt-1">
                ${plan.salePrice}
              </p>
              <p className="text-sm font-semibold text-urgency mt-2">
                Save ${plan.regularPrice - plan.salePrice} today
              </p>
            </div>

            <ul className="text-left space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-gold mt-0.5" strokeWidth={2.5} />
                  <span className="text-charcoal font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Replace checkout.business with your Hotmart link in site.ts */}
            <Button href={siteConfig.checkout.business} variant="cta" pulse className="w-full !py-5">
              {plan.cta}
              <ArrowRight className="h-5 w-5" />
            </Button>

            <p className="mt-4 text-xs text-charcoal/50">
              {siteConfig.offer.trustLine}
            </p>
          </div>

          {/* Guarantee box */}
          <div className="mt-6 rounded-lg border border-gold/30 bg-gold/10 p-5 flex items-center gap-4">
            <Shield className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.5} />
            <div>
              <p className="font-bold text-ivory text-lg">{siteConfig.offer.guarantee}</p>
              <p className="text-sm text-ivory/60 mt-0.5">
                Not satisfied? Get a full refund within 30 days. No questions asked.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
