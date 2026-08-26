import type { ComponentProps } from "react";
import { Button } from "./Button";

type BookNowButtonProps = {
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
  label?: string;
};

// Placeholder target until the Glofox booking iframe/link replaces this route.
export function BookNowButton({ variant = "primary", size, className, label = "Book Now" }: BookNowButtonProps) {
  return (
    <Button href="/book-session" variant={variant} size={size} className={className}>
      {label}
    </Button>
  );
}
