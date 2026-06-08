import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Route, Settings2, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Capability-focused CATAMARA services page built from sourcing, supplier development, NPD, NVD, market analysis, consulting, and VAVE source content.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-24 pt-6 sm:space-y-28">
      <PageHero
        eyebrow="Capabilities"
        title="A capability stack for sourcing, product execution, supplier performance, and cost architecture."
        intro="The attached company materials describe CATAMARA's work across technical supplier management, market analysis, business consulting, supplier development, NPD, NVD, and VAVE. This page organizes them into a scalable capability system."
        facts={[
          { label: "Core motions", value: "Source · Develop · Optimize" },
          { label: "Global footprint", value: "DE · IN · CN" },
          { label: "Process depth", value: "NPD + NVD" },
        ]}
        actions={[
          { href: "/contact", label: "Discuss capabilities" },
          { href: "/case-studies", label: "See business impact", variant: "secondary" },
        ]}
        aside={
          <div className="surface-grid p-6 sm:p-8">
            <div className="grid gap-4">
              <div className="surface-panel p-5">
                <Route className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
                <h2 className="mt-4 text-xl font-semibold text-white">
                  Technical execution
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-300/72">
                  Supplier qualification, RFQ flow, validation, and production ramp-up.
                </p>
              </div>
              <div className="surface-panel p-5">
                <Settings2 className="h-5 w-5 text-[color:var(--color-signal-gold)]" />
                <h2 className="mt-4 text-xl font-semibold text-white">
                  Commercial intelligence
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-300/72">
                  Market analysis, cost architecture, and make-or-buy support.
                </p>
              </div>
              <div className="surface-panel p-5">
                <Sparkles className="h-5 w-5 text-[color:var(--color-electric-blue)]" />
                <h2 className="mt-4 text-xl font-semibold text-white">
                  AI workflow enablement
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-300/72">
                  Inquiry parsing, RFQ drafting, quote analysis, and planned QC automation.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Capability matrix"
            title="Seven factual capabilities, reframed with enterprise clarity."
            description="The original materials list CATAMARA's offerings as services. The redesign presents them as capabilities that can be assembled into operating systems for clients."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {siteContent.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <article className="surface-panel h-full p-6 sm:p-7">
                <span className="rounded-full border border-[color:var(--color-signal-gold)]/20 bg-[color:var(--color-signal-gold)]/8 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-signal-gold)]">
                  {service.category}
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  {service.summary}
                </p>
                <ul className="list-marker mt-5 grid gap-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-200/84">
                      <span />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="NPD process"
            title="Ten stages of new product development orchestration."
            description="The company profile provides a detailed NPD flow. The website carries those steps forward and makes them easier to read, compare, and extend."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {siteContent.npdSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.03}>
              <article className="surface-panel h-full p-5">
                <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                  {step.step}
                </div>
                <h2 className="mt-3 text-lg font-semibold text-white">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="NVD process"
            title="An eleven-step new vendor development framework."
            description="The attached profile describes a full supplier onboarding discipline, from identifying need through pilot validation, KPI monitoring, and relationship management."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.nvdSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.03}>
              <article className="section-shell h-full">
                <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                  {step.step}
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-5">
                <p className="eyebrow">VAVE system</p>
                <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">
                  Early-stage intervention where the cost architecture is decided.
                </h2>
                <p className="text-base leading-8 text-slate-300/74">
                  CATAMARA&apos;s VAVE materials state that up to 80% of a product&apos;s
                  costs are determined during the design stage. That becomes the
                  highest-leverage intervention point in the redesigned service story.
                </p>
                <Link href="/case-studies" className={buttonVariants({ variant: "primary" })}>
                  View the proof points
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {siteContent.vaveSteps.map((step) => (
                  <article key={step.step} className="surface-panel p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-signal-gold)]">
                      {step.step}
                    </div>
                    <h2 className="mt-3 text-lg font-semibold text-white">{step.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300/72">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
