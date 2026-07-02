"use client";

import { ArrowRight, Check, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const plans = [
  { key: "creator" as const, checkoutKey: "creator" as const, popular: false },
  { key: "business" as const, checkoutKey: "business" as const, popular: true },
  { key: "ultimate" as const, checkoutKey: "ultimate" as const, popular: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-20 bg-ivory">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
              {siteConfig.pricing.sectionTitle}
            </h2>
            <p className="mt-4 text-base md:text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.pricing.sectionSubtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-5 lg:items-stretch">
          {plans.map((plan, i) => {
            const config = siteConfig.pricing[plan.key];
            const checkoutLink = siteConfig.checkout[plan.checkoutKey];
            const hasBadge = "badge" in config && config.badge;

            return (
              <AnimatedSection key={plan.key} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-xl p-6 md:p-8 transition-all duration-300 ${
                    plan.popular
                      ? "bg-navy border-2 border-gold shadow-2xl shadow-gold/15 lg:scale-105 lg:-my-2 lg:py-10 order-first lg:order-none"
                      : "bg-white border border-navy/10 shadow-sm"
                  }`}
                >
                  {hasBadge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy whitespace-nowrap">
                      {config.badge}
                    </span>
                  )}

                  <div className="mb-5">
                    <h3
                      className={`font-heading text-xl font-bold ${
                        plan.popular ? "text-ivory" : "text-navy"
                      }`}
                    >
                      {config.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm ${
                        plan.popular ? "text-gold" : "text-charcoal/50"
                      }`}
                    >
                      Best for: {config.bestFor}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p
                      className={`text-sm line-through ${
                        plan.popular ? "text-ivory/40" : "text-charcoal/40"
                      }`}
                    >
                      Regular price: ${config.regularPrice}
                    </p>
                    <p
                      className={`text-5xl font-bold mt-1 ${
                        plan.popular ? "text-gold" : "text-navy"
                      }`}
                    >
                      ${config.salePrice}
                    </p>
                  </div>

                  <ul className="flex-1 space-y-3 mb-8">
                    {config.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`h-5 w-5 shrink-0 mt-0.5 ${
                            plan.popular ? "text-gold" : "text-gold"
                          }`}
                          strokeWidth={2.5}
                        />
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-ivory/80" : "text-charcoal/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Replace checkout links in site.ts with your Hotmart URLs */}
                  <Button
                    href={checkoutLink}
                    variant={plan.popular ? "cta" : "primary"}
                    pulse={plan.popular}
                    className={`w-full !py-4 ${
                      !plan.popular
                        ? "!bg-navy !text-ivory hover:!bg-navy/90 !shadow-navy/20"
                        : ""
                    }`}
                  >
                    {config.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2}>
          <p className="mt-10 text-center text-sm md:text-base text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.pricing.comparisonNote}
          </p>

          <div className="mt-8 rounded-lg border border-gold/30 bg-white p-5 md:p-6 flex items-center gap-4 max-w-2xl mx-auto shadow-sm">
            <Shield className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.5} />
            <div>
              <p className="font-bold text-navy text-lg">{siteConfig.offer.guarantee}</p>
              <p className="text-sm text-charcoal/60 mt-0.5">
                Not satisfied? Get a full refund within 30 days. No questions asked.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
