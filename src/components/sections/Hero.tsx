"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold text-sm font-semibold uppercase tracking-[0.25em] mb-6"
          >
            {siteConfig.brand.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-ivory leading-[1.1] tracking-tight"
          >
            Transform Any Space with{" "}
            <span className="text-gold">Premium Printable Wall Art</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-ivory/70 leading-relaxed max-w-2xl"
          >
            Get instant access to the Noranzo Business Collection — a premium
            digital library with over 60,000 high-quality printable wall art
            designs for homes, offices, Airbnb properties, online shops, and
            creative businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {siteConfig.hero.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold tracking-wide"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Replace checkout.default with your Hotmart link in site.ts */}
            <Button href={siteConfig.checkout.default} variant="primary">
              Get Instant Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-sm text-ivory/40"
          >
            Instant digital delivery through secure checkout.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
