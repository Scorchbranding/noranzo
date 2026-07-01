"use client";

import { Home, Building2, Store } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const icons = [Home, Building2, Store];

const mockupBackgrounds = [
  "from-stone-600 via-stone-700 to-stone-900",
  "from-slate-600 via-slate-700 to-slate-900",
  "from-neutral-600 via-neutral-700 to-neutral-900",
];

export function MockupSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Made for Real Spaces"
            subtitle="Whether you're decorating a living room, office, Airbnb, café, hotel, or online store, Noranzo gives you ready-to-use artwork for countless styles and projects."
          />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {siteConfig.mockups.map((mockup, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={mockup.title} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-sm bg-white border border-navy/8 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5">
                  <div
                    className={`relative aspect-[4/3] bg-gradient-to-br ${mockupBackgrounds[i]} overflow-hidden`}
                  >
                    {/* Interior mockup placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2/5 aspect-[3/4] bg-white/10 border border-white/20 rounded-sm shadow-2xl backdrop-blur-sm" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Icon className="h-5 w-5 text-white/60" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                      {mockup.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">
                      {mockup.description}
                    </p>
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
