"use client";

import { motion } from "framer-motion";

import type { ProcessStep } from "@/content/site";

type WorkflowTimelineProps = {
  steps: ProcessStep[];
  className?: string;
};

export function WorkflowTimeline({
  steps,
  className,
}: WorkflowTimelineProps) {
  return (
    <div className={className}>
      <div className="hide-scrollbar overflow-x-auto pb-4">
        <div className="relative flex min-w-max gap-8 px-2 pb-2 pt-4 sm:gap-10 sm:px-4">
          <div className="absolute left-7 right-7 top-9 h-px bg-gradient-to-r from-white/0 via-white/14 to-white/0 sm:left-9 sm:right-9" />
          <div className="absolute left-7 right-7 top-[1.78rem] hidden h-3 sm:block">
            <motion.div
              className="h-3 w-3 rounded-full bg-[color:var(--color-data-cyan)] shadow-[0_0_0_8px_rgba(45,140,255,0.12)]"
              animate={{ x: ["0%", "100%"] }}
              transition={{
                duration: Math.max(steps.length * 2.6, 8),
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.article
              key={step.step}
              className="relative w-[17rem] flex-none rounded-[1.6rem] border border-white/8 bg-[rgba(6,8,13,0.42)] px-4 py-5 backdrop-blur sm:w-[19rem] sm:px-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-data-cyan)]/25 bg-[rgba(7,15,26,0.92)] text-sm font-semibold text-white shadow-[0_0_0_10px_rgba(45,140,255,0.06)]"
                  animate={{
                    boxShadow: [
                      "0 0 0 10px rgba(45,140,255,0.06)",
                      "0 0 0 16px rgba(45,140,255,0.14)",
                      "0 0 0 10px rgba(45,140,255,0.06)",
                    ],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.18,
                  }}
                >
                  {step.step}
                </motion.div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Workflow node
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-slate-300/72">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
