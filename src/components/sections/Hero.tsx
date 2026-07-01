"use client";

import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function LaunchOffer() {
  return (
    <div className="fixed top-[52px] left-0 right-0 z-40 bg-urgency text-white text-center py-2 px-4 text-xs md:text-sm font-bold tracking-wide">
      <Zap className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
      {siteConfig.offer.urgency}
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-navy pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="inline-block rounded-full bg-gold/15 border border-gold/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold mb-5">
              {siteConfig.offer.urgency}
            </p>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {siteConfig.offer.headline}
            </h1>

            <p className="mt-5 text-base md:text-lg text-ivory/70 leading-relaxed">
              {siteConfig.offer.subheadline}
            </p>

            {/* Price anchor */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-2xl text-ivory/40 line-through font-medium">
                ${siteConfig.offer.regularPrice}
              </span>
              <span className="text-5xl md:text-6xl font-bold text-gold">
                ${siteConfig.offer.salePrice}
              </span>
              <span className="rounded-md bg-urgency px-2 py-0.5 text-xs font-bold text-white uppercase">
                Save {siteConfig.offer.savingsPercent}%
              </span>
            </div>

            <div className="mt-8">
              {/* Replace checkout.default with your Hotmart link in site.ts */}
              <Button href={siteConfig.checkout.default} variant="cta" pulse className="w-full sm:w-auto !px-10 !py-5">
                {siteConfig.offer.cta}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <p className="mt-4 text-xs text-ivory/50">
              {siteConfig.offer.trustLine}
            </p>
          </motion.div>

          {/* Product mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/10 bg-gradient-to-br from-slate-800 via-navy to-slate-900 aspect-[4/3]">
              {/* Mockup: folder grid representing design library */}
              <div className="absolute inset-0 p-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-sm bg-white/5 border border-white/10 overflow-hidden"
                  >
                    <div
                      className={`h-full w-full bg-gradient-to-br ${
                        [
                          "from-amber-900/60 to-amber-950/80",
                          "from-emerald-900/60 to-emerald-950/80",
                          "from-slate-700/60 to-slate-900/80",
                          "from-rose-900/60 to-rose-950/80",
                          "from-blue-900/60 to-blue-950/80",
                          "from-stone-700/60 to-stone-900/80",
                          "from-teal-900/60 to-teal-950/80",
                          "from-orange-900/60 to-orange-950/80",
                          "from-indigo-900/60 to-indigo-950/80",
                        ][i]
                      }`}
                    />
                  </div>
                ))}
              </div>
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-md bg-navy/90 backdrop-blur-sm border border-gold/30 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-ivory/60">Business Collection</p>
                  <p className="text-lg font-bold text-gold">60,000+ Designs</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ivory/40 line-through">${siteConfig.offer.regularPrice}</p>
                  <p className="text-xl font-bold text-white">${siteConfig.offer.salePrice}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
