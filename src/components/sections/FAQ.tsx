"use client";

import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FAQItem } from "@/components/ui/FAQItem";

export function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-10">
            Common Questions
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div>
            {siteConfig.faq.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
