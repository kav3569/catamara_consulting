import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CarFront, Factory, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "CATAMARA industry focus across automotive and industrial manufacturing, built directly from the attached source material.",
};

export default function IndustriesPage() {
  return (
    <div className="space-y-24 pt-6 sm:space-y-28">
      <PageHero
        eyebrow="Industry focus"
        title="Built for automotive programs and industrial manufacturing supply chains."
        intro="CATAMARA's published materials describe deep expertise in two industries. This page strengthens the storytelling while staying faithful to the actual sector focus."
        facts={[
          { label: "Industry depth", value: "Automotive" },
          { label: "Industry depth", value: "Industrial manufacturing" },
          { label: "Operating support", value: "NPD · NVD · VAVE" },
        ]}
        actions={[
          { href: "/services", label: "Review capabilities" },
          { href: "/contact", label: "Discuss your sector", variant: "secondary" },
        ]}
        aside={
          <div className="surface-grid p-6 sm:p-8">
            <div className="grid gap-4">
              {siteContent.industries.map((industry) => (
                <div key={industry.title} className="surface-panel p-5">
                  <div className="flex items-center gap-3 text-[color:var(--color-data-cyan)]">
                    {industry.title === "Automotive" ? (
                      <CarFront className="h-5 w-5" />
                    ) : (
                      <Factory className="h-5 w-5" />
                    )}
                    <span className="text-sm font-semibold text-white">
                      {industry.title}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300/72">
                    {industry.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Sector narratives"
            title="Two sectors, each presented with more technical precision."
            description="The rebuild gives CATAMARA's industry presence more depth through use-case language, standards, and ecosystem context."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {siteContent.industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.05}>
              <article className="surface-grid h-full p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  {industry.title === "Automotive" ? (
                    <CarFront className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
                  ) : (
                    <ShieldCheck className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
                  )}
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {industry.title}
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-semibold text-white">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  {industry.summary}
                </p>
                <ul className="list-marker mt-5 grid gap-3">
                  {industry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-200/84">
                      <span />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.standards.map((standard) => (
                    <span
                      key={standard}
                      className="rounded-full border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-slate-300/72"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-3">
              <article className="surface-panel p-6">
                <div className="metric-value text-white">OEM</div>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  Automotive source material positions CATAMARA around OEM and Tier 1 supplier development.
                </p>
              </article>
              <article className="surface-panel p-6">
                <div className="metric-value text-white">Tier 1</div>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  Powertrain, chassis, body, and EV-related component ecosystems are called out directly in the source website content.
                </p>
              </article>
              <article className="surface-panel p-6">
                <div className="metric-value text-white">ISO</div>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  Industrial manufacturing focus includes quality and process discipline, including ISO 9001 and structured supplier assessment.
                </p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/case-studies" className={buttonVariants({ variant: "primary" })}>
                Review proof points
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
                Start an industry conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
