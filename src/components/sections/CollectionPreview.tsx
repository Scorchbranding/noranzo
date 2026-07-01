"use client";

import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const categoryGradients = [
  "from-slate-800 to-slate-900",
  "from-stone-700 to-stone-900",
  "from-emerald-800 to-emerald-950",
  "from-amber-900 to-amber-950",
  "from-green-800 to-green-950",
  "from-orange-900 to-orange-950",
  "from-zinc-800 to-zinc-950",
  "from-pink-800 to-pink-950",
  "from-blue-900 to-blue-950",
  "from-rose-800 to-rose-950",
  "from-indigo-900 to-indigo-950",
  "from-neutral-800 to-neutral-950",
];

export function CollectionPreview() {
  return (
    <section id="collections" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Explore Thousands of Ready-to-Print Designs" />
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {siteConfig.categories.map((category, i) => (
            <AnimatedSection key={category} delay={i * 0.05}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-default">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[i % categoryGradients.length]} transition-transform duration-500 group-hover:scale-105`}
                />
                {/* Mockup placeholder frame */}
                <div className="absolute inset-4 border border-white/10 rounded-sm" />
                <div className="absolute inset-8 bg-white/5 rounded-sm backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <div className="h-px w-8 bg-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="font-heading text-lg font-semibold text-white tracking-wide">
                      {category}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
