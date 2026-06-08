import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Factory, Globe2, Sparkles } from "lucide-react";

import {
  CapabilityMosaic,
  type CapabilityTile,
} from "@/components/site/capability-mosaic";
import {
  CommandCenterExperience,
  type ExperienceNode,
  type ExperienceRoute,
  type ExperienceSignal,
  type ExperienceStream,
} from "@/components/site/command-center-experience";
import { MarqueeBand } from "@/components/site/marquee-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SignalStage } from "@/components/site/signal-stage";
import { WorkflowTimeline } from "@/components/site/workflow-timeline";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industrial Supply Chain Intelligence",
  description:
    "A premium CATAMARA web experience built from the company's services, case studies, workflows, and global operating footprint.",
};

const networkNodes: ExperienceNode[] = [
  {
    id: "germany",
    label: "Germany",
    kicker: "European hub",
    detail:
      "Germany anchors CATAMARA's European operating presence and its automotive aftermarket proof point.",
    x: 24,
    y: 34,
    status: "Connected",
    notes: [
      "Project WB350 is rooted in Germany-based aftermarket work.",
      "Technical supplier management and value-engineering decisions surface here as executive signals.",
    ],
  },
  {
    id: "india",
    label: "India",
    kicker: "Engineering sourcing",
    detail:
      "India represents engineering sourcing support, supplier coordination, and workflow throughput inside CATAMARA's delivery model.",
    x: 51,
    y: 57,
    status: "Active",
    notes: [
      "Supports requirements translation, RFQ coordination, and supplier-development rhythms.",
      "Connects technical detail with commercial responsiveness across the operating network.",
    ],
  },
  {
    id: "china",
    label: "China",
    kicker: "Manufacturing network",
    detail:
      "China stands in for manufacturing reach, qualified supplier access, quality-gate coordination, and production readiness.",
    x: 76,
    y: 38,
    status: "Monitored",
    notes: [
      "Manufacturing network presence is explicitly called out in the source materials.",
      "Supports supplier qualification, inspection readiness, and production coordination.",
    ],
  },
  {
    id: "oem",
    label: "OEM Program",
    kicker: "Program intake",
    detail:
      "A program enters the CATAMARA system as a sourcing or product-development brief, then becomes a managed execution flow.",
    x: 18,
    y: 66,
    status: "Receiving",
    notes: [
      "Requirements definition, supplier selection, and product-launch planning are grounded in the attached source content.",
      "The site now presents this as a higher-value operating layer rather than a generic consulting intake.",
    ],
  },
  {
    id: "supplier",
    label: "Supplier Cell",
    kicker: "Execution lane",
    detail:
      "Qualified suppliers move through RFQ alignment, capability development, and performance monitoring before scale-up.",
    x: 66,
    y: 72,
    status: "Qualified",
    notes: [
      "New vendor development and supplier development provide the operational discipline behind this lane.",
      "Compliance, audits, and KPI monitoring remain part of CATAMARA's factual process model.",
    ],
  },
];

const networkRoutes: ExperienceRoute[] = [
  { from: "oem", to: "germany", label: "Program brief" },
  { from: "germany", to: "india", label: "Technical alignment" },
  { from: "india", to: "china", label: "Supplier routing" },
  { from: "china", to: "supplier", label: "Manufacturing readiness" },
  { from: "supplier", to: "germany", label: "Quality feedback" },
];

const networkSignals: ExperienceSignal[] = [
  {
    label: "Operating hubs",
    value: "3-country network",
    detail: "Germany, India, and China come directly from CATAMARA's source materials.",
  },
  {
    label: "Execution layer",
    value: "NPD / NVD / VAVE",
    detail: "Structured development, supplier onboarding, and cost engineering are integrated into one story.",
  },
  {
    label: "Product direction",
    value: "AI workflow enabled",
    detail: "Workflow automation is now treated as part of the platform, not a side note.",
  },
];

const networkStreams: ExperienceStream[] = [
  { label: "Supplier sourcing", value: "Signal live" },
  { label: "Technical supplier management", value: "Command active" },
  { label: "Supplier development", value: "Monitoring" },
  { label: "Value engineering / analysis", value: "Decision support" },
];

const homeMosaicTiles: CapabilityTile[] = [
  {
    title: "The AI layer turns raw inquiry into supplier-ready action.",
    kicker: "Product showcase",
    detail:
      "The current MVP already parses inquiries, drafts supplier RFQs, and compares quotations inside CATAMARA's sourcing workflow.",
    tone: "blue",
    size: "feature",
    image: "/assets/ai-agent-mvp.png",
  },
  {
    title: "Structured global execution from a small core team.",
    kicker: "Organization",
    detail: siteContent.company.structure.detail,
    tone: "slate",
    size: "tall",
    image: "/assets/organization-structure.png",
  },
  {
    title: "20% GPC reduction with 35% margin maintained.",
    kicker: "Project WB350",
    detail:
      "CATAMARA's VAVE method reduced gross product cost while preserving a healthy profit margin for Schaeffler Automotive Aftermarket in Germany.",
    tone: "gold",
    size: "square",
  },
  {
    title: "180 products launched within one year with 70% faster lead times.",
    kicker: "Project NAPA",
    detail:
      "Feasibility analysis and make-or-buy discipline created repeatable launch throughput across the program year.",
    tone: "light",
    size: "wide",
  },
  {
    title: "Germany, India, and China operate as one supply network.",
    kicker: "Operating layer",
    detail:
      "Supplier sourcing, technical supplier management, and manufacturing coordination are presented as a single platform story rather than isolated service boxes.",
    tone: "slate",
    size: "square",
  },
];

const narrativeSignals = [
  {
    label: "Demand becomes signal",
    body:
      "Requirements definition, delivery schedules, quality expectations, and cost targets enter the system before supplier outreach starts.",
  },
  {
    label: "Suppliers become an intelligence surface",
    body:
      "Selection, capability, compliance, and quality risk are framed as visible operating variables rather than buried account-management tasks.",
  },
  {
    label: "Execution becomes measurable",
    body:
      "Prototype readiness, validation, ramp-up, and supplier development now read like orchestrated lanes in an industrial platform.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pt-6 sm:space-y-24">
      <PageHero
        eyebrow={siteContent.home.eyebrow}
        title={siteContent.home.title}
        intro={siteContent.home.intro}
        facts={[
          { label: "Operating footprint", value: "Germany / India / China" },
          { label: "Proof point", value: "20% GPC saved" },
          { label: "Launch velocity", value: "180 products / year" },
        ]}
        actions={[
          { href: "/ai-agent", label: "Explore the AI Agent" },
          { href: "/contact", label: "Discuss a project", variant: "secondary" },
        ]}
        aside={
          <SignalStage
            eyebrow="Live operating model"
            title="Supplier intelligence, development, and workflow orchestration in one view."
            stats={[
              { label: "Network", value: "3 countries" },
              { label: "Savings", value: "20% GPC" },
              { label: "Launches", value: "180 / year" },
            ]}
            signals={[
              "Supplier sourcing routed across Germany, India, and China",
              "Technical supplier management remains visible through the workflow",
              "NPD / NVD / VAVE decisions turn into one executive signal layer",
            ]}
          />
        }
      />

      <MarqueeBand
        items={[
          "Germany / India / China",
          "Supplier sourcing",
          "Technical supplier management",
          "Supplier development",
          "NPD",
          "NVD",
          "VAVE",
          "AI workflow orchestration",
        ]}
      />

      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 border-y border-black/8 bg-[#d3d6cf] text-[#0b0f14]">
        <div className="site-container grid gap-10 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[#0b0f14]/54">
              Platform narrative
            </p>
            <h2 className="display-title text-4xl sm:text-5xl lg:text-7xl">
              CATAMARA now reads like the operating layer between demand,
              supplier capability, and production readiness.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {narrativeSignals.map((signal, index) => (
              <Reveal key={signal.label} delay={index * 0.06}>
                <article className="rounded-[1.8rem] border border-black/8 bg-white/35 px-6 py-6 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0f14]/48">
                    {signal.label}
                  </div>
                  <p className="mt-3 text-base leading-8 text-[#0b0f14]/78">
                    {signal.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CommandCenterExperience
        eyebrow="Signature experience"
        title="An interactive supplier network and manufacturing intelligence layer."
        description="This is the memorable systems-theater moment of the site: a live-feeling operating view that ties together CATAMARA's regional footprint, supplier coordination model, and industrial workflow stack."
        nodes={networkNodes}
        routes={networkRoutes}
        signals={networkSignals}
        streams={networkStreams}
      />

      <section className="site-container">
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <Reveal className="space-y-6 xl:sticky xl:top-28">
            <p className="eyebrow">Animated workflow rail</p>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">
              The AI product spine is visible before visitors ever reach the product page.
            </h2>
            <p className="text-base leading-8 text-slate-300/74">
              CATAMARA&apos;s current workflow MVP already supports a strong
              product story: parse inquiry, draft RFQ, compare quotes. The new
              composition gives those motions clear narrative weight.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-agent" className={buttonVariants({ variant: "primary" })}>
                View the AI Agent
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className={buttonVariants({ variant: "secondary" })}>
                Review capabilities
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="section-shell overflow-hidden">
              <WorkflowTimeline steps={siteContent.aiAgent.stages} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Storytelling mosaic"
            title="Proof points, structure, and product direction now land in one editorial composition."
            description="Instead of repeating the same panel pattern, the home page uses a mixed-size showcase that combines CATAMARA's workflow MVP, organization structure, and delivered outcomes."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <CapabilityMosaic tiles={homeMosaicTiles} className="mt-10" />
        </Reveal>
      </section>

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Business impact"
            title="Enterprise proof points, elevated into stronger stories."
            description="The source files provide CATAMARA with explicit, measurable outcomes. The redesign gives each result more hierarchy, space, and context."
          />
        </Reveal>
        <div className="mt-10 space-y-6">
          {siteContent.caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.06}>
              <article className="section-shell overflow-hidden">
                <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300/72">
                        {study.project}
                      </span>
                      <span className="rounded-full border border-[color:var(--color-electric-blue)]/20 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                        {study.client} / {study.location}
                      </span>
                    </div>
                    <h3 className="display-title text-3xl sm:text-4xl lg:text-5xl">
                      {study.headline}
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-slate-300/72">
                      {study.summary}
                    </p>
                    <ul className="list-marker mt-2 grid gap-3">
                      {study.outcomes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200/84">
                          <span />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid gap-4">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-6"
                      >
                        <div className="metric-value text-white">{metric.value}</div>
                        <div className="mt-3 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                          {metric.label}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-300/68">
                          {metric.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              {siteContent.industries.map((industry, index) => (
                <div
                  key={industry.title}
                  className={cn(
                    "relative overflow-hidden p-8 sm:p-10 lg:p-12",
                    index === 0
                      ? "border-b border-white/8 lg:border-b-0 lg:border-r lg:border-white/8"
                      : "",
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,140,255,0.14),transparent_28%)]" />
                  <div className="relative space-y-5">
                    <div className="flex items-center gap-3 text-[color:var(--color-data-cyan)]">
                      {industry.title === "Automotive" ? (
                        <Factory className="h-5 w-5" />
                      ) : (
                        <Globe2 className="h-5 w-5" />
                      )}
                      <span className="text-xs uppercase tracking-[0.18em] text-slate-300/72">
                        Sector focus
                      </span>
                    </div>
                    <h2 className="display-title text-3xl sm:text-4xl">
                      {industry.title}
                    </h2>
                    <p className="max-w-xl text-base leading-8 text-slate-300/72">
                      {industry.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.standards.map((standard) => (
                        <span
                          key={standard}
                          className="rounded-full border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-slate-300/72"
                        >
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Next step</p>
              <h2 className="display-title text-3xl sm:text-4xl">
                Bring a real industrial brief into the CATAMARA system.
              </h2>
              <p className="text-sm leading-7 text-slate-300/72">
                The experience now leans into systems, signal, and narrative so
                CATAMARA feels closer to an industrial technology platform than a
                consulting brochure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
                Contact CATAMARA
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/ai-agent" className={buttonVariants({ variant: "secondary" })}>
                Explore the product layer
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
