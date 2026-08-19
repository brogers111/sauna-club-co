import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const VARIANT_STYLES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-orange text-tan-light hover:bg-wood-dark",
  secondary: "bg-blue text-tan-light hover:bg-green-dark",
  outline: "bg-tan-light text-green-dark border border-green-dark hover:bg-tan-dark",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
