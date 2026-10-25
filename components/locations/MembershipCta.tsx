import { Button } from "@/components/ui/Button";

type MembershipCtaProps = {
  heading?: string;
  buttonLabel?: string;
  href?: string;
  // Outer spacing — the banner carries no vertical margin by default so the
  // sections around it control the gaps evenly.
  className?: string;
};

export function MembershipCta({
  heading = "Find the right membership for you",
  buttonLabel = "Book Now",
  href = "/book-session",
  className = "",
}: MembershipCtaProps) {
  return (
    <div className={`mx-[calc(50%-50vw)] px-5 ${className}`}>
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-green-light px-6 py-10 text-center">
        <p className="font-display text-4xl uppercase tracking-wide text-tan-light">{heading}</p>
        <Button href={href} variant="outline" size="lg">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
