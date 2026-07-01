interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}
    >
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight ${
          light ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-ivory/70" : "text-charcoal/70"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
