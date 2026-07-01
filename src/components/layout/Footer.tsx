import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-[0.15em] text-gold">
              {siteConfig.brand.name}
            </h3>
            <p className="mt-2 text-sm text-ivory/60 tracking-wide">
              {siteConfig.brand.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ivory/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ivory/40 mb-4">
              Support
            </h4>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-ivory/70 transition-colors hover:text-gold"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-8 text-center">
          <p className="text-xs text-ivory/40 tracking-wide">
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
