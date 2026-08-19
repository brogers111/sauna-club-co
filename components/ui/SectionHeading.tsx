type SectionHeadingProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({ children, className = "", as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  return (
    <Tag className={`font-display text-4xl md:text-5xl uppercase tracking-wide ${className}`}>
      {children}
    </Tag>
  );
}
