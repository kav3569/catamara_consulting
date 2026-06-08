import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-slate-300/78 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
