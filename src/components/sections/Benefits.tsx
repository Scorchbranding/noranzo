"use client";

import {
  Palette,
  BadgeCheck,
  Infinity,
  RefreshCw,
  FolderOpen,
  ImageIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const icons = [Palette, BadgeCheck, Infinity, RefreshCw, FolderOpen, ImageIcon];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Everything You Need to Create, Print & Profit" />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={benefit.title} delay={i * 0.08}>
                <div className="group h-full rounded-sm border border-navy/8 bg-white p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <div className="mb-5 inline-flex rounded-sm bg-gold/10 p-3">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
