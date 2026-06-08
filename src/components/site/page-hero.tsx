"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type HeroFact = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: HeroAction[];
  facts?: HeroFact[];
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  actions,
  facts,
  aside,
}: PageHeroProps) {
  return (
    <section className="site-container relative pt-6 sm:pt-10">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,18,0.96),rgba(7,12,20,0.9))] px-6 py-8 shadow-[0_32px_100px_rgba(0,0,0,0.38)] sm:px-8 sm:py-10 lg:min-h-[78vh] lg:px-10 lg:py-12">
        <motion.div
          className="absolute -right-24 top-1/2 h-[28rem] w-[28rem] rounded-full bg-[conic-gradient(from_0deg,rgba(45,140,255,0.0),rgba(45,140,255,0.18),rgba(105,229,255,0.0))] blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ translateY: "-50%" }}
        />
        <motion.div
          className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[rgba(207,161,73,0.08)] blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.8fr)] lg:items-end">
          <div className="space-y-8">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              className="display-title max-w-4xl text-4xl text-white sm:text-5xl lg:text-[5.45rem]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="max-w-2xl text-base leading-8 text-slate-300/76 sm:text-lg"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {intro}
            </motion.p>

            {actions ? (
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {actions.map((action) => {
                  const classes = buttonVariants({
                    variant: action.variant ?? "primary",
                  });
                  const icon =
                    action.variant === "secondary" ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    );

                  if (/^(https?:|tel:)/.test(action.href)) {
                    return (
                      <a key={action.href} href={action.href} className={classes}>
                        {action.label}
                        {icon}
                      </a>
                    );
                  }

                  return (
                    <Link key={action.href} href={action.href} className={classes}>
                      {action.label}
                      {icon}
                    </Link>
                  );
                })}
              </motion.div>
            ) : null}

            {facts ? (
              <motion.div
                className="grid gap-3 border-t border-white/8 pt-6 sm:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
              >
                {facts.map((fact, index) => (
                  <motion.div
                    key={`${fact.label}-${fact.value}-${index}`}
                    className="rounded-[1.25rem] border border-white/10 bg-[rgba(6,8,13,0.48)] px-4 py-4 backdrop-blur"
                    whileHover={{ y: -4 }}
                  >
                    <div className="text-2xl font-semibold text-white">{fact.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                      {fact.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : null}
          </div>

          {aside ? (
            <motion.div
              className={cn("relative w-full")}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {aside}
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
