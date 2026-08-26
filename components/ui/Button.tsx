import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "muted";
  size?: "md" | "lg";
  className?: string;
};

const VARIANT_STYLES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-orange text-cream hover:opacity-80",
  secondary: "bg-green-light text-cream hover:opacity-80",
  outline: "bg-tan-dark text-cream hover:opacity-80",
  muted: "bg-tan-dark text-cream hover:bg-tan-dark/70",
};

const SIZE_STYLES: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export function Button({ href, children, variant = "primary", size = "md", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl font-medium transition ${SIZE_STYLES[size]} ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
