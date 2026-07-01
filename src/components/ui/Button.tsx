import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "cta";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  pulse?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold/90 shadow-lg shadow-gold/25 hover:shadow-gold/40",
  cta: "bg-gold text-navy hover:bg-gold/90 shadow-xl shadow-gold/30 hover:shadow-gold/50 text-base md:text-lg font-bold",
  secondary:
    "bg-navy text-ivory hover:bg-navy/90 shadow-lg shadow-navy/20",
  outline:
    "border-2 border-gold text-gold hover:bg-gold hover:text-navy",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = true,
  pulse = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-sm font-bold tracking-wide uppercase transition-all duration-300",
    variants[variant],
    pulse && "cta-pulse",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
