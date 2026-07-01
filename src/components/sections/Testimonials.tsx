import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-ivory">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-3">
            What Customers Are Saying
          </h2>
          <p className="text-center text-charcoal/60 mb-10 text-sm">
            Real results from creators and business owners
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="h-full rounded-lg border border-navy/8 bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-charcoal/80 leading-relaxed mb-5 text-sm md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-charcoal/50">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
