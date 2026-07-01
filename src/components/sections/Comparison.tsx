import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Comparison() {
  return (
    <section className="py-14 md:py-20 bg-ivory">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <AnimatedSection>
          <div className="rounded-lg border-2 border-navy/10 bg-white p-8 md:p-12 text-center shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
              The Math Is Simple
            </h2>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="rounded-lg bg-red-50 border border-red-100 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-red-600 mb-2">
                  Buying individually
                </p>
                <p className="text-3xl font-bold text-red-700">
                  {siteConfig.comparison.individualCost}
                </p>
                <p className="text-sm text-red-600/70 mt-2">
                  100 designs = $200–$1,000+
                </p>
              </div>
              <div className="rounded-lg bg-green-50 border-2 border-green-300 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-2">
                  With Noranzo
                </p>
                <p className="text-3xl font-bold text-green-800">
                  ${siteConfig.offer.salePrice} total
                </p>
                <p className="text-sm text-green-700/70 mt-2">
                  {siteConfig.comparison.totalDesigns} designs included
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-medium">
              {siteConfig.comparison.message}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
