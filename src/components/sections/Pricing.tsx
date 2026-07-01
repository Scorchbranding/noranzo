"use client";

import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    key: "creator" as const,
    checkoutKey: "creator" as const,
    popular: false,
  },
  {
    key: "business" as const,
    checkoutKey: "business" as const,
    popular: true,
  },
  {
    key: "ultimate" as const,
    checkoutKey: "ultimate" as const,
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Choose Your Collection" light />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, i) => {
            const config = siteConfig.pricing[plan.key];
            const checkoutLink = siteConfig.checkout[plan.checkoutKey];

            return (
              <AnimatedSection key={plan.key} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-sm p-8 transition-all duration-300 ${
                    plan.popular
                      ? "bg-white shadow-2xl shadow-gold/10 ring-2 ring-gold scale-[1.02] lg:scale-105"
                      : "bg-navy border border-ivory/10 hover:border-gold/30"
                  }`}
                >
                  {"badge" in config && config.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy">
                      {config.badge}
                    </span>
                  )}

                  <h3
                    className={`font-heading text-xl font-semibold ${
                      plan.popular ? "text-navy" : "text-ivory"
                    }`}
                  >
                    {config.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className={`font-heading text-5xl font-bold ${
                        plan.popular ? "text-navy" : "text-gold"
                      }`}
                    >
                      ${config.price}
                    </span>
                  </div>

                  <ul className="mt-8 flex-1 space-y-4">
                    {config.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`h-5 w-5 shrink-0 mt-0.5 ${
                            plan.popular ? "text-gold" : "text-gold"
                          }`}
                          strokeWidth={2}
                        />
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-charcoal/70" : "text-ivory/70"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    {/* Replace checkout links in site.ts with your Hotmart URLs */}
                    <Button
                      href={checkoutLink}
                      variant={plan.popular ? "primary" : "outline"}
                      className={`w-full text-center ${
                        !plan.popular ? "!border-gold !text-gold hover:!bg-gold hover:!text-navy" : ""
                      }`}
                    >
                      {config.cta}
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
