"use client";

import {
  ImageIcon,
  FolderOpen,
  Download,
  BadgeCheck,
  RefreshCw,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const icons = [ImageIcon, FolderOpen, Download, BadgeCheck, RefreshCw];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-navy/5">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-4">
          {siteConfig.trustBar.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={item} delay={i * 0.05}>
                <div className="flex flex-col items-center text-center gap-2">
                  <Icon className="h-5 w-5 text-gold mb-2" strokeWidth={1.5} />
                  <span className="text-xs md:text-sm font-medium text-navy tracking-wide">
                    {item}
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
