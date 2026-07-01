"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg" : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/">
          <span className="font-heading text-lg md:text-xl font-bold tracking-[0.15em] text-ivory">
            {siteConfig.brand.name}
          </span>
        </Link>

        {/* Replace checkout.default with your Hotmart link in site.ts */}
        <Button
          href={siteConfig.checkout.default}
          variant="primary"
          className="!px-5 !py-2.5 !text-xs md:!px-6 md:!text-sm"
        >
          Get Access
        </Button>
      </div>
    </header>
  );
}
