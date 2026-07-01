import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${siteConfig.brand.name} support team.`,
};

export default function ContactPage() {
  return (
    <div className="bg-ivory min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm text-gold hover:text-gold/80 transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-navy mb-2">
          Contact Us
        </h1>
        <p className="text-charcoal/60 mb-12 text-base md:text-lg">
          Have a question about your purchase, need technical help, or want to
          learn more about our collections? We&apos;re here to help.
        </p>

        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          <div className="rounded-sm border border-navy/8 bg-white p-6 text-center">
            <Mail className="h-6 w-6 text-gold mx-auto mb-3" strokeWidth={1.5} />
            <h3 className="font-medium text-navy text-sm mb-1">Email</h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-charcoal/60 hover:text-gold transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="rounded-sm border border-navy/8 bg-white p-6 text-center">
            <Clock className="h-6 w-6 text-gold mx-auto mb-3" strokeWidth={1.5} />
            <h3 className="font-medium text-navy text-sm mb-1">Response Time</h3>
            <p className="text-sm text-charcoal/60">24–48 hours</p>
          </div>
          <div className="rounded-sm border border-navy/8 bg-white p-6 text-center">
            <MessageCircle className="h-6 w-6 text-gold mx-auto mb-3" strokeWidth={1.5} />
            <h3 className="font-medium text-navy text-sm mb-1">Support</h3>
            <p className="text-sm text-charcoal/60">English</p>
          </div>
        </div>

        <div className="rounded-sm border border-navy/8 bg-white p-8">
          <h2 className="font-heading text-xl font-semibold text-navy mb-4">
            Send Us a Message
          </h2>
          <p className="text-sm text-charcoal/60 mb-6 leading-relaxed">
            For the fastest response, email us directly at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gold hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            . Please include your order email and a description of your question
            or issue.
          </p>

          <div className="space-y-4">
            <p className="text-sm text-charcoal/50 italic">
              Click the button below to open your email client with a pre-filled
              support template.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=NORANZO%20Support%20Request&body=Your%20email%3A%20%0A%0AMessage%3A%20`}
              className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-navy transition-all duration-300 hover:bg-gold/90 shadow-lg shadow-gold/20"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
