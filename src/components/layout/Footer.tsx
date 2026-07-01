import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory pb-20 md:pb-8">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-heading text-lg font-bold tracking-[0.1em] text-gold">
            {siteConfig.brand.name}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-ivory/50 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-ivory/30">
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
