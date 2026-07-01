"use client";

import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FAQItem } from "@/components/ui/FAQItem";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Frequently Asked Questions" />
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
