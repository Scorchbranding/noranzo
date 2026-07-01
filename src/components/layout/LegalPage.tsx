import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPage({ title, children }: LegalPageProps) {
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
          {title}
        </h1>
        <p className="text-sm text-charcoal/50 mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
        <div className="prose-legal space-y-6 text-charcoal/80 leading-relaxed text-sm md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-navy mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalContact() {
  return (
    <p>
      For questions, contact us at{" "}
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="text-gold hover:underline"
      >
        {siteConfig.contact.email}
      </a>
      .
    </p>
  );
}
