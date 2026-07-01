import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function UseCases() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-10">
            Perfect For
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteConfig.useCases.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-navy/8 bg-ivory px-5 py-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Check className="h-4 w-4 text-gold" strokeWidth={3} />
                </div>
                <span className="font-semibold text-navy">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
