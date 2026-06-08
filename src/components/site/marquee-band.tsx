"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type MarqueeBandProps = {
  items: string[];
  className?: string;
  inverted?: boolean;
};

export function MarqueeBand({
  items,
  className,
  inverted = false,
}: MarqueeBandProps) {
  const repeated = [...items, ...items];

  return (
    <section
      className={cn(
        "relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden border-y",
        inverted
          ? "border-black/8 bg-[#d3d6cf] text-[#0b0f14]"
          : "border-white/8 bg-black/18 text-white",
        className,
      )}
    >
      <motion.div
        className="flex w-max gap-6 py-4 text-sm font-medium uppercase tracking-[0.22em] sm:text-[15px]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 34,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-6 whitespace-nowrap">
            <span className={inverted ? "text-[#0b0f14]" : "text-white/92"}>{item}</span>
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                inverted ? "bg-[#0b0f14]/35" : "bg-[color:var(--color-data-cyan)]/75",
              )}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
