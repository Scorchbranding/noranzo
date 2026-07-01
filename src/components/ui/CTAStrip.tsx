import { ArrowRight, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

interface CTAStripProps {
  variant?: "light" | "dark" | "gold";
}

export function CTAStrip({ variant = "dark" }: CTAStripProps) {
  const bg =
    variant === "dark"
      ? "bg-navy"
      : variant === "gold"
        ? "bg-gold"
        : "bg-ivory border-y border-navy/10";

  const textColor =
    variant === "gold" ? "text-navy" : variant === "dark" ? "text-ivory" : "text-navy";

  return (
    <section className={`${bg} py-10 md:py-14`}>
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${variant === "gold" ? "text-navy/70" : "text-gold"}`}>
          Limited Launch — Save {siteConfig.offer.savingsPercent}%
        </p>
        <p className={`font-heading text-2xl md:text-3xl font-bold mb-2 ${textColor}`}>
          Get {siteConfig.comparison.totalDesigns} Designs for Just ${siteConfig.offer.salePrice}
        </p>
        <p className={`text-sm mb-6 ${variant === "dark" ? "text-ivory/60" : "text-charcoal/60"}`}>
          <span className="line-through">${siteConfig.offer.regularPrice}</span> →{" "}
          <span className="font-bold text-gold">${siteConfig.offer.salePrice}</span> today only
        </p>
        {/* Replace checkout.default with your Hotmart link in site.ts */}
        <Button href={siteConfig.checkout.default} variant="cta" pulse className="!px-10 !py-5">
          {siteConfig.offer.cta}
          <ArrowRight className="h-5 w-5" />
        </Button>
        <p className={`mt-4 flex items-center justify-center gap-2 text-xs ${variant === "dark" ? "text-ivory/50" : "text-charcoal/50"}`}>
          <Shield className="h-3.5 w-3.5" />
          {siteConfig.offer.trustLine}
        </p>
      </div>
    </section>
  );
}
