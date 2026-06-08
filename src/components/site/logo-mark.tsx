import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 72 72"
      aria-hidden="true"
      className={cn("h-8 w-8 text-white", className)}
      fill="none"
    >
      <path
        d="M36 7 56 18 46 24 36 18 19 28V48l17 10 10-6 10 6-20 11L10 54V22L36 7Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path d="M19 28 29 22v28l-10-6V28Z" fill="var(--color-titanium)" />
      <path d="M46 24 56 18v18l-10 6V24Z" fill="var(--color-titanium)" />
      <path d="M31 22h16l10 6H41l-10-6Z" fill="var(--color-titanium)" />
      <path d="M41 44H25l10 6h16l-10-6Z" fill="var(--color-titanium)" />
    </svg>
  );
}

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark />
      <div className="tracking-[0.34em] text-white text-sm font-medium uppercase">
        CATAMARA
      </div>
    </div>
  );
}
