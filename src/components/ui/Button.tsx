import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold/90 shadow-lg shadow-gold/20 hover:shadow-gold/30",
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
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300",
    variants[variant],
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
