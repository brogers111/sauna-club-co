import { Button } from "./Button";

type BookNowButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  label?: string;
};

// Placeholder target until the Glofox booking iframe/link replaces this route.
export function BookNowButton({ variant = "primary", className, label = "Book Now" }: BookNowButtonProps) {
  return (
    <Button href="/book" variant={variant} className={className}>
      {label}
    </Button>
  );
}
