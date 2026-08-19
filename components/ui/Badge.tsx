import type { ReactNode } from "react";

const COLORS = ["bg-orange", "bg-wood-light", "bg-blue", "bg-green-light"];

export function Badge({ children, index = 0 }: { children: ReactNode; index?: number }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide text-tan-light ${COLORS[index % COLORS.length]}`}
    >
      {children}
    </span>
  );
}
