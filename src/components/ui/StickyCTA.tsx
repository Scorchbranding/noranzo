"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-gold/30 bg-navy p-3 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-ivory/60 truncate">Business Collection</p>
          <p className="text-xs text-ivory/40 line-through">${siteConfig.offer.regularPrice}</p>
          <p className="text-lg font-bold text-gold leading-tight">
            ${siteConfig.offer.salePrice}{" "}
            <span className="text-xs font-normal text-ivory/70">today</span>
          </p>
        </div>
        {/* Replace checkout.default with your Hotmart Business link in site.ts */}
        <a
          href={siteConfig.checkout.default}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-pulse flex shrink-0 items-center gap-1.5 rounded-md bg-gold px-4 py-3 text-xs font-bold uppercase text-navy"
        >
          Get Business
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
