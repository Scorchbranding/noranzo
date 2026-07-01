import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function WhatYouGet() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-10">
            What You Get Today
          </h2>
          <ul className="space-y-4">
            {siteConfig.whatYouGet.map((item, i) => (
              <li key={item} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-gold mt-0.5" strokeWidth={2} />
                <span className="text-lg text-charcoal font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
