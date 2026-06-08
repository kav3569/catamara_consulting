"use client";

import { motion } from "framer-motion";

type SignalStageStat = {
  label: string;
  value: string;
};

type SignalStageProps = {
  eyebrow: string;
  title: string;
  stats: SignalStageStat[];
  signals: string[];
};

export function SignalStage({
  eyebrow,
  title,
  stats,
  signals,
}: SignalStageProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,12,20,0.95),rgba(9,16,24,0.86))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] sm:p-6">
      <motion.div
        className="absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-[conic-gradient(from_0deg,rgba(45,140,255,0.0),rgba(45,140,255,0.28),rgba(105,229,255,0.0))] blur-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ translateY: "-50%" }}
      />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[color:var(--color-electric-blue)]/16 bg-[rgba(45,140,255,0.08)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-data-cyan)]">
            {eyebrow}
          </span>
          <div className="h-2 w-2 rounded-full bg-[color:var(--color-data-cyan)] shadow-[0_0_0_6px_rgba(45,140,255,0.12)]" />
        </div>

        <motion.h3
          className="display-title mt-6 max-w-md text-3xl text-white sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h3>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${stat.value}`}
              className="rounded-[1.35rem] border border-white/10 bg-[rgba(6,8,13,0.62)] px-4 py-4 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08, duration: 0.55 }}
            >
              <div className="text-2xl font-semibold text-white">{stat.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-3">
          {signals.map((signal, index) => (
            <motion.div
              key={signal}
              className="flex items-center justify-between gap-4 rounded-[1rem] border border-white/10 bg-black/16 px-4 py-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.08, duration: 0.55 }}
            >
              <span className="text-sm text-slate-300/78">{signal}</span>
              <motion.span
                className="h-1.5 rounded-full bg-[linear-gradient(90deg,var(--color-electric-blue),var(--color-data-cyan))]"
                animate={{ width: [36, 72, 48] }}
                transition={{ duration: 3.8 + index * 0.4, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
