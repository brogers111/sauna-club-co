type ArrowIconProps = {
  direction?: "left" | "right" | "up" | "down";
  className?: string;
};

// Source icon (assets/icons-logos/arrow.svg) points left natively.
const ROTATION: Record<NonNullable<ArrowIconProps["direction"]>, string> = {
  left: "rotate-0",
  up: "rotate-90",
  right: "rotate-180",
  down: "-rotate-90",
};

export function ArrowIcon({ direction = "left", className = "" }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${ROTATION[direction]} ${className}`}
    >
      <path d="M15 20L10 15L15 10M10 15L20 15M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09645 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" />
    </svg>
  );
}
