"use client";

import { Shield, Download, BadgeCheck, RefreshCw } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const items = [
  { icon: Download, label: "Instant Download" },
  { icon: BadgeCheck, label: "Commercial Use" },
  { icon: Shield, label: "Secure Checkout" },
  { icon: RefreshCw, label: "Lifetime Access" },
];

export function TrustBar() {
  return (
    <section className="bg-gold/10 border-y border-gold/20 py-5">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.label} delay={i * 0.05}>
                <div className="flex items-center justify-center gap-2">
                  <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
                  <span className="text-xs md:text-sm font-bold text-navy uppercase tracking-wide">
                    {item.label}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
