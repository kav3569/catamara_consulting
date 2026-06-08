import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold tracking-[0.18em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-electric-blue)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]",
  {
    variants: {
      variant: {
        primary:
          "border-[color:var(--color-electric-blue)] bg-[color:var(--color-electric-blue)] px-5 py-3 text-slate-950 shadow-[0_0_30px_rgba(45,140,255,0.24)] hover:-translate-y-0.5 hover:bg-[color:var(--color-data-cyan)] hover:border-[color:var(--color-data-cyan)]",
        secondary:
          "border-white/12 bg-white/[0.03] px-5 py-3 text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]",
        tertiary:
          "border-[color:var(--color-signal-gold)]/25 bg-[color:var(--color-signal-gold)]/8 px-4 py-2 text-[color:var(--color-signal-gold)] hover:border-[color:var(--color-signal-gold)]/40 hover:bg-[color:var(--color-signal-gold)]/12",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs tracking-[0.16em]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);
