import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Premium CATAMARA case-study presentation built from the two explicit proof points in the attached source files.",
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-24 pt-6 sm:space-y-28">
      <PageHero
        eyebrow="Proof points"
        title="Two grounded outcomes. Told with more executive clarity."
        intro="The attached materials provide two concrete performance stories. This page keeps those numbers intact and expands their presentation into enterprise-ready case studies."
        facts={[
          { label: "Cost result", value: "20% GPC saved" },
          { label: "Margin result", value: "35% preserved" },
          { label: "Launch result", value: "180 products / year" },
        ]}
        actions={[
          { href: "/contact", label: "Discuss similar outcomes" },
          { href: "/services", label: "Review enabling capabilities", variant: "secondary" },
        ]}
      />

      <section className="site-container space-y-6">
        {siteContent.caseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.05}>
            <article className="section-shell">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300/72">
                      {study.project}
                    </span>
                    <span className="rounded-full border border-[color:var(--color-electric-blue)]/20 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                      {study.client} · {study.location}
                    </span>
                  </div>
                  <h2 className="display-title text-3xl sm:text-4xl">{study.headline}</h2>
                  <p className="text-base leading-8 text-slate-300/74">
                    {study.summary}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="surface-panel px-4 py-4">
                        <div className="text-3xl font-semibold text-white">
                          {metric.value}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="surface-panel p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                      Challenge
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300/72">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="surface-panel p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                      Approach
                    </div>
                    <ul className="list-marker mt-3 grid gap-3">
                      {study.approach.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200/84">
                          <span />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="surface-panel p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                      Execution & outcome
                    </div>
                    <ul className="list-marker mt-3 grid gap-3">
                      {[...study.execution, ...study.outcomes].map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200/84">
                          <span />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Next step</p>
              <h2 className="display-title mt-3 text-3xl sm:text-4xl">
                Turn sourcing, development, or VAVE objectives into a scoped engagement.
              </h2>
            </div>
            <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
              Contact CATAMARA
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
