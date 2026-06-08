"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Orbit, Radar, Waves } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

export type ExperienceNode = {
  id: string;
  label: string;
  kicker: string;
  detail: string;
  x: number;
  y: number;
  status: string;
  notes: string[];
};

export type ExperienceRoute = {
  from: string;
  to: string;
  label: string;
};

export type ExperienceSignal = {
  label: string;
  value: string;
  detail: string;
};

export type ExperienceStream = {
  label: string;
  value: string;
};

type CommandCenterExperienceProps = {
  eyebrow: string;
  title: string;
  description: string;
  nodes: ExperienceNode[];
  routes: ExperienceRoute[];
  signals: ExperienceSignal[];
  streams: ExperienceStream[];
  className?: string;
};

export function CommandCenterExperience({
  eyebrow,
  title,
  description,
  nodes,
  routes,
  signals,
  streams,
  className,
}: CommandCenterExperienceProps) {
  const [activeNodeId, setActiveNodeId] = useState(nodes[0]?.id);
  const nodeById = useMemo(
    () => Object.fromEntries(nodes.map((node) => [node.id, node])),
    [nodes],
  );
  const activeNode = nodeById[activeNodeId] ?? nodes[0];

  useEffect(() => {
    if (!nodes.length) return undefined;

    const interval = window.setInterval(() => {
      setActiveNodeId((current) => {
        const currentIndex = nodes.findIndex((node) => node.id === current);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % nodes.length;
        return nodes[nextIndex]?.id ?? nodes[0].id;
      });
    }, 3200);

    return () => window.clearInterval(interval);
  }, [nodes]);

  return (
    <section className={cn("site-container", className)}>
      <div className="section-shell relative overflow-hidden p-4 sm:p-6 lg:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(45,140,255,0.18),transparent_26%),radial-gradient(circle_at_20%_100%,rgba(207,161,73,0.08),transparent_18%)]" />
        <div className="relative grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_360px]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,8,13,0.9),rgba(10,18,28,0.78))] p-5 sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="eyebrow">{eyebrow}</p>
                <h2 className="display-title mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-slate-300/72">
                  Manufacturing intelligence
                </span>
                <span className="rounded-full border border-[color:var(--color-electric-blue)]/20 bg-[color:var(--color-electric-blue)]/8 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                  Live orchestration
                </span>
              </div>
            </div>
            <p className="relative z-10 mt-5 max-w-3xl text-base leading-8 text-slate-300/74">
              {description}
            </p>

            <div className="relative mt-10 min-h-[28rem] overflow-hidden rounded-[1.8rem] border border-white/8 bg-[radial-gradient(circle_at_50%_48%,rgba(45,140,255,0.08),transparent_30%),linear-gradient(180deg,rgba(5,8,16,0.28),rgba(5,8,16,0.72))]">
              <motion.div
                className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] rounded-full bg-[conic-gradient(from_0deg,rgba(45,140,255,0.0),rgba(45,140,255,0.12),rgba(105,229,255,0.0))]"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ translateX: "-50%", translateY: "-50%" }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_62%)]" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Supplier network / command layer
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  <Radar className="h-3.5 w-3.5 text-[color:var(--color-data-cyan)]" />
                  Signal sweep
                </div>
              </div>

              <svg
                viewBox="0 0 100 100"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <linearGradient id="command-route" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(45,140,255,0.08)" />
                    <stop offset="50%" stopColor="rgba(105,229,255,0.95)" />
                    <stop offset="100%" stopColor="rgba(45,140,255,0.08)" />
                  </linearGradient>
                </defs>
                {routes.map((route, index) => {
                  const from = nodeById[route.from];
                  const to = nodeById[route.to];

                  if (!from || !to) return null;

                  const cx = (from.x + to.x) / 2;
                  const cy = (from.y + to.y) / 2 + (index % 2 === 0 ? -10 : 10);
                  const d = `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;

                  return (
                    <g key={`${route.from}-${route.to}`}>
                      <motion.path
                        d={d}
                        fill="none"
                        stroke="url(#command-route)"
                        strokeWidth="0.45"
                        strokeLinecap="round"
                        initial={{ pathLength: 0.18, opacity: 0.2 }}
                        animate={{ pathLength: 1, opacity: [0.22, 0.9, 0.22] }}
                        transition={{
                          duration: 5 + index * 0.4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.circle
                        r="0.7"
                        fill="rgba(105,229,255,0.95)"
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: ["0%", "100%"] }}
                        transition={{
                          duration: 4.5 + index * 0.3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        style={{ offsetPath: `path("${d}")` }}
                      />
                    </g>
                  );
                })}
              </svg>

              {nodes.map((node, index) => {
                const isActive = node.id === activeNode.id;

                return (
                  <motion.button
                    key={node.id}
                    type="button"
                    className="group absolute z-20"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onFocus={() => setActiveNodeId(node.id)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.12 + index * 0.06,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                      <motion.div
                        className={cn(
                          "relative h-4 w-4 rounded-full border border-[color:var(--color-data-cyan)]/65 bg-[color:var(--color-electric-blue)] shadow-[0_0_0_10px_rgba(45,140,255,0.08)] transition",
                          isActive && "shadow-[0_0_0_16px_rgba(45,140,255,0.16)]",
                        )}
                      animate={{ scale: isActive ? [1, 1.18, 1.06] : [1, 1.08, 1] }}
                      transition={{ duration: isActive ? 1.8 : 2.6, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span className="absolute inset-0 rounded-full bg-white/60 opacity-80" />
                    </motion.div>
                    <div
                      className={cn(
                        "absolute left-1/2 top-[calc(100%+0.85rem)] -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.16em] transition",
                        isActive
                          ? "border-[color:var(--color-data-cyan)]/25 bg-[rgba(6,8,13,0.84)] text-white"
                          : "border-white/10 bg-[rgba(6,8,13,0.55)] text-slate-400 group-hover:border-white/20 group-hover:text-slate-200",
                      )}
                    >
                      {node.label}
                    </div>
                  </motion.button>
                );
              })}

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 lg:grid-cols-3">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-[1.35rem] border border-white/10 bg-[rgba(6,8,13,0.72)] px-4 py-4 backdrop-blur"
                  >
                    <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      {signal.label}
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      {signal.value}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-300/64">
                      {signal.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                className="surface-panel relative overflow-hidden p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-data-cyan)] to-transparent" />
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[color:var(--color-signal-gold)]/20 bg-[color:var(--color-signal-gold)]/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-signal-gold)]">
                    {activeNode.kicker}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    {activeNode.status}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-white">
                  {activeNode.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  {activeNode.detail}
                </p>
                <ul className="mt-5 grid gap-3">
                  {activeNode.notes.map((note) => (
                    <li key={note} className="flex items-start gap-3 text-sm leading-7 text-slate-200/84">
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-data-cyan)]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                <Orbit className="h-4 w-4 text-[color:var(--color-data-cyan)]" />
                Operating streams
              </div>
              <div className="mt-4 grid gap-3">
                {streams.map((stream) => (
                  <div
                    key={stream.label}
                    className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-white/10 bg-black/18 px-4 py-3"
                  >
                    <span className="text-sm text-slate-300/78">{stream.label}</span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                      {stream.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(6,8,13,0.52)] p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                <Waves className="h-4 w-4 text-[color:var(--color-data-cyan)]" />
                Interaction
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300/72">
                Hover each node to inspect how CATAMARA connects regional presence,
                supplier development, and workflow execution into one intelligence
                layer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
