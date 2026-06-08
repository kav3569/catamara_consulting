"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export type CapabilityTile = {
  title: string;
  kicker: string;
  detail: string;
  tone: "blue" | "gold" | "slate" | "light";
  size: "tall" | "wide" | "square" | "feature";
  image?: string;
};

type CapabilityMosaicProps = {
  tiles: CapabilityTile[];
  className?: string;
};

const sizeClasses: Record<CapabilityTile["size"], string> = {
  feature: "md:col-span-2 md:row-span-2 min-h-[28rem]",
  tall: "min-h-[26rem]",
  wide: "md:col-span-2 min-h-[18rem]",
  square: "min-h-[18rem]",
};

const toneClasses: Record<CapabilityTile["tone"], string> = {
  blue:
    "bg-[radial-gradient(circle_at_top_right,rgba(45,140,255,0.26),transparent_30%),linear-gradient(180deg,#0a1320,#0e1824)]",
  gold:
    "bg-[radial-gradient(circle_at_top_left,rgba(207,161,73,0.24),transparent_26%),linear-gradient(180deg,#14110c,#0d1015)]",
  slate:
    "bg-[radial-gradient(circle_at_bottom_right,rgba(105,229,255,0.12),transparent_26%),linear-gradient(180deg,#0a0f15,#0d141c)]",
  light:
    "bg-[linear-gradient(180deg,#d1d4ce,#bcc1bc)] text-[#0b0f14]",
};

export function CapabilityMosaic({
  tiles,
  className,
}: CapabilityMosaicProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-3 auto-rows-[minmax(220px,auto)]", className)}>
      {tiles.map((tile, index) => (
        <motion.article
          key={`${tile.kicker}-${tile.title}`}
          className={cn(
            "group relative overflow-hidden rounded-[2rem] border border-white/10 p-6 sm:p-7",
            toneClasses[tile.tone],
            sizeClasses[tile.size],
            tile.tone === "light" ? "border-black/8" : "",
          )}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: index * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, scale: 1.01 }}
        >
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
          {tile.image ? (
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,13,0.08),rgba(6,8,13,0.78))]" />
            </motion.div>
          ) : (
            <motion.div
              className={cn(
                "absolute -right-8 -top-8 h-48 w-48 rounded-full blur-3xl",
                tile.tone === "gold"
                  ? "bg-[rgba(207,161,73,0.24)]"
                  : tile.tone === "light"
                    ? "bg-white/30"
                    : "bg-[rgba(45,140,255,0.16)]",
              )}
              animate={{ scale: [1, 1.12, 1], x: [0, 16, 0], y: [0, -8, 0] }}
              transition={{ duration: 9 + index, repeat: Number.POSITIVE_INFINITY }}
            />
          )}

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div
                className={cn(
                  "text-[11px] uppercase tracking-[0.18em]",
                  tile.tone === "light"
                    ? "text-[#0b0f14]/58"
                    : "text-slate-300/72",
                )}
              >
                {tile.kicker}
              </div>
              <h3
                className={cn(
                  "mt-4 max-w-md text-2xl font-semibold sm:text-3xl",
                  tile.tone === "light" ? "text-[#0b0f14]" : "text-white",
                )}
              >
                {tile.title}
              </h3>
            </div>
            <p
              className={cn(
                "max-w-md text-sm leading-7",
                tile.tone === "light" ? "text-[#0b0f14]/76" : "text-slate-300/76",
              )}
            >
              {tile.detail}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
