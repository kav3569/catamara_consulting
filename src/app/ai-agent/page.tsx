import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Files, ScanSearch, Scale, ShieldCheck } from "lucide-react";

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
import {
  OrchestrationMatrix,
  type OrchestrationColumn,
  type OrchestrationRow,
} from "@/components/site/orchestration-matrix";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SignalStage } from "@/components/site/signal-stage";
import { WorkflowTimeline } from "@/components/site/workflow-timeline";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "AI Agent",
  description:
    "The CATAMARA AI Agent page translates the source workflow MVP and planned automation layer into an enterprise product narrative.",
};

const productNodes: ExperienceNode[] = [
  {
    id: "intake",
    label: "Inquiry Intake",
    kicker: "Stage 01",
    detail:
      "Raw customer inquiry emails are transformed into structured sourcing inputs so the workflow starts with clean technical detail.",
    x: 18,
    y: 50,
    status: "Input normalized",
    notes: [
      "The MVP already parses line items, units, annual volume, and notes from inquiry text.",
      "This step is the visible front door to a larger CATAMARA workflow system.",
    ],
  },
  {
    id: "rfq",
    label: "RFQ Drafting",
    kicker: "Stage 02",
    detail:
      "Parsed demand becomes supplier-ready communication, preserving structure and speeding outbound sourcing motion.",
    x: 36,
    y: 30,
    status: "Supplier-ready",
    notes: [
      "The current prototype generates professional RFQ emails from parsed line items and supplier data.",
      "This helps position CATAMARA as a workflow layer rather than just a coordination intermediary.",
    ],
  },
  {
    id: "compare",
    label: "Quote Comparator",
    kicker: "Stage 03",
    detail:
      "Supplier quote replies are compared inside a structured recommendation flow that helps CATAMARA negotiate and decide faster.",
    x: 57,
    y: 56,
    status: "Decision support",
    notes: [
      "The MVP already exposes the compare-and-recommend motion as a visible product behavior.",
      "This is where the product begins to feel more like a command layer than a productivity tool.",
    ],
  },
  {
    id: "po",
    label: "PO Control",
    kicker: "Planned layer",
    detail:
      "The workbook describes AI-assisted PO drafting and document management as the next expansion of the platform.",
    x: 73,
    y: 28,
    status: "Planned orchestration",
    notes: [
      "PO drafting, version control, and searchable document management appear in the workflow spreadsheet.",
      "This extends the platform from decision support into transaction control.",
    ],
  },
  {
    id: "qc",
    label: "Quality Gate",
    kicker: "Planned layer",
    detail:
      "Inspection checklist generation and quality-report support move the product from commercial workflow into manufacturing execution readiness.",
    x: 82,
    y: 70,
    status: "Inspection logic",
    notes: [
      "The source workbook explicitly calls out pre-shipment quality checklist generation and inspection logging.",
      "This is a high-value differentiator for industrial and manufacturing buyers.",
    ],
  },
];

const productRoutes: ExperienceRoute[] = [
  { from: "intake", to: "rfq", label: "Structured demand" },
  { from: "rfq", to: "compare", label: "Outbound sourcing" },
  { from: "compare", to: "po", label: "Award decision" },
  { from: "po", to: "qc", label: "Execution control" },
  { from: "compare", to: "qc", label: "Risk visibility" },
];

const productSignals: ExperienceSignal[] = [
  {
    label: "Visible MVP",
    value: "Parse / RFQ / Compare",
    detail: "These three motions already exist in the supplied prototype files.",
  },
  {
    label: "Planned expansion",
    value: "PO / QC / tracking",
    detail: "The workbook defines the next automation layer through document control and inspection support.",
  },
  {
    label: "Positioning shift",
    value: "Workflow command layer",
    detail: "The page now makes the product feel closer to an industrial operating platform.",
  },
];

const productStreams: ExperienceStream[] = [
  { label: "Inquiry parsing", value: "Live MVP" },
  { label: "RFQ generation", value: "Live MVP" },
  { label: "Quote comparison", value: "Live MVP" },
  { label: "PO / QC automation", value: "Planned" },
];

const orchestrationColumns: OrchestrationColumn[] = [
  { id: "principal", label: "Principal" },
  { id: "catamara", label: "CATAMARA" },
  { id: "supplier", label: "Supplier" },
  { id: "ai", label: "AI layer" },
];

const orchestrationRows: OrchestrationRow[] = [
  {
    title: "Inquiry intake",
    detail:
      "SPR raises inquiry with specifications, quantities, and target price, and CATAMARA becomes the coordination hub.",
    assignments: {
      principal: "brief raised",
      catamara: "receives",
      ai: "planned parse",
    },
  },
  {
    title: "RFQ drafting",
    detail:
      "CATAMARA prepares and sends formal RFQs to qualified suppliers with technical alignment to the brief.",
    assignments: {
      catamara: "issues RFQ",
      supplier: "responds",
      ai: "draft assist",
    },
  },
  {
    title: "Quote analysis and negotiation",
    detail:
      "CATAMARA leads commercial negotiation against target price while the product layer prepares structured comparison support.",
    assignments: {
      catamara: "negotiates",
      supplier: "quotes",
      ai: "compare quotes",
    },
  },
  {
    title: "PO document control",
    detail:
      "The workbook describes CATAMARA as the central PO and documentation hub between principal and supplier.",
    assignments: {
      principal: "raises PO",
      catamara: "controls docs",
      supplier: "receives PO",
      ai: "draft / version",
    },
  },
  {
    title: "Quality gate",
    detail:
      "Pre-shipment inspection and quality conformance happen before release, with a planned AI layer for checklist generation and reporting.",
    assignments: {
      catamara: "inspects",
      supplier: "passes QC",
      ai: "checklists",
    },
  },
  {
    title: "FOB coordination and closure",
    detail:
      "CATAMARA manages coordination up to FOB and follows through on payment confirmation and transaction closure.",
    assignments: {
      principal: "payment",
      catamara: "coordinates",
      supplier: "handover",
      ai: "tracking log",
    },
  },
];

const aiExperienceTiles: CapabilityTile[] = [
  {
    title: "The product already proves the command-layer thesis.",
    kicker: "Current MVP",
    detail:
      "Inquiry parsing, RFQ drafting, and quote comparison are already visible product behaviors in CATAMARA's prototype.",
    tone: "blue",
    size: "feature",
    image: "/assets/ai-agent-mvp.png",
  },
  {
    title: "Order placement stays under CATAMARA control.",
    kicker: "Transaction hub",
    detail:
      "The source workflow positions CATAMARA as the documentation and coordination hub between principal and supplier.",
    tone: "gold",
    size: "square",
  },
  {
    title: "PO drafting and searchable document control are the next platform layer.",
    kicker: "Planned automation",
    detail:
      "The workbook explicitly extends the product into version control, central document handling, and AI-assisted PO generation.",
    tone: "light",
    size: "wide",
  },
  {
    title: "Quality logic enters before shipment approval.",
    kicker: "Inspection gate",
    detail:
      "Checklist generation, inspection reporting, and non-conformance alerts move the platform toward manufacturing execution readiness.",
    tone: "slate",
    size: "square",
  },
  {
    title: "CATAMARA remains the operator while AI compresses the workflow.",
    kicker: "Operating model",
    detail:
      "The goal is not to replace CATAMARA's role. It is to increase speed, structure, and decision quality across the same transaction path.",
    tone: "slate",
    size: "tall",
  },
];

export default function AiAgentPage() {
  return (
    <div className="space-y-20 pt-6 sm:space-y-24">
      <PageHero
        eyebrow={siteContent.aiAgent.label}
        title="A procurement workflow assistant that now feels like an industrial command platform."
        intro={siteContent.aiAgent.summary}
        facts={[
          { label: "Current motions", value: "Parse / RFQ / Compare" },
          { label: "Workflow owner", value: "CATAMARA" },
          { label: "Expansion path", value: "PO to QC" },
        ]}
        actions={[
          { href: "/contact", label: "Discuss the roadmap" },
          { href: "/services", label: "See the capability context", variant: "secondary" },
        ]}
        aside={
          <SignalStage
            eyebrow="Product telemetry"
            title="A sourcing command layer spanning inquiry, supplier, order, and quality states."
            stats={[
              { label: "Current", value: "3 live motions" },
              { label: "Next", value: "PO / QC" },
              { label: "Owner", value: "CATAMARA" },
            ]}
            signals={[
              "Inquiry normalization feeds structured supplier outreach",
              "Quote analysis becomes faster, more legible, and easier to negotiate from",
              "Document control and inspection logic create a larger product moat",
            ]}
          />
        }
      />

      <MarqueeBand
        items={[
          "Inquiry parser",
          "RFQ generator",
          "Quote comparator",
          "PO drafting",
          "Document control",
          "Quality checklist automation",
          "Transaction tracking",
        ]}
      />

      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 border-y border-black/8 bg-[#d3d6cf] text-[#0b0f14]">
        <div className="site-container grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[#0b0f14]/54">
              Product position
            </p>
            <h2 className="display-title text-4xl sm:text-5xl lg:text-7xl">
              Not a chatbot. A transaction command layer for industrial sourcing.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {siteContent.aiAgent.quickReference.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="rounded-[1.8rem] border border-black/8 bg-white/35 px-6 py-6 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0f14]/48">
                    {item.title}
                  </div>
                  <p className="mt-3 text-base leading-8 text-[#0b0f14]/78">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CommandCenterExperience
        eyebrow="Flagship experience"
        title="The AI Agent becomes the visual centerpiece of the CATAMARA platform story."
        description="Instead of presenting the AI page as a functional demo with repeated panels, this composition frames it as a command layer spanning inquiry intake, supplier outreach, negotiation support, document control, and quality readiness."
        nodes={productNodes}
        routes={productRoutes}
        signals={productSignals}
        streams={productStreams}
      />

      <section className="site-container">
        <div className="grid gap-10 xl:grid-cols-[0.74fr_1.26fr] xl:items-start">
          <Reveal className="space-y-6 xl:sticky xl:top-28">
            <p className="eyebrow">Product workflow rail</p>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">
              Three visible motions already make the product legible.
            </h2>
            <p className="text-base leading-8 text-slate-300/74">
              The current prototype already proves the product spine. The page
              now gives those stages more cinematic presence through an animated
              rail and a larger product frame.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
                Discuss the roadmap
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/case-studies" className={buttonVariants({ variant: "secondary" })}>
                Review proof points
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="space-y-4">
            <Reveal delay={0.08}>
              <div className="surface-grid overflow-hidden p-4 sm:p-5">
                <div className="relative rounded-[1.75rem] border border-white/8 bg-black/24 p-2">
                  <div className="absolute left-5 top-5 z-10 flex flex-wrap gap-2">
                    {["Inquiry parser", "RFQ generator", "Quote comparator"].map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-[color:var(--color-electric-blue)]/16 bg-[rgba(6,8,13,0.84)] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <Image
                    src="/assets/ai-agent-mvp.png"
                    alt="CATAMARA AI Agent product screenshot"
                    width={1600}
                    height={900}
                    className="w-full rounded-[1.4rem] object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="section-shell overflow-hidden">
                <WorkflowTimeline steps={siteContent.aiAgent.stages} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Transaction phases"
            title="The workbook flow is now staged as a horizontal operating sequence."
            description="Inquiry and negotiation, order placement, and quality to delivery are preserved exactly from the source workflow while being presented with much stronger visual rhythm."
          />
        </Reveal>
        <div className="hide-scrollbar mt-10 overflow-x-auto pb-4">
          <div className="relative flex min-w-max gap-5 px-2 pb-2 pt-4 sm:px-4">
            <div className="absolute left-10 right-10 top-10 h-px bg-gradient-to-r from-white/0 via-white/14 to-white/0" />
            {siteContent.aiAgent.transactionPhases.map((phase, index) => (
              <Reveal key={phase.title} delay={index * 0.06}>
                <article className="w-[22rem] flex-none rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-6 transition duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--color-data-cyan)]/22 bg-[rgba(7,15,26,0.92)] text-sm font-semibold text-white shadow-[0_0_0_10px_rgba(45,140,255,0.06)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      Workflow phase
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {phase.title}
                  </h3>
                  <div className="mt-5 grid gap-3">
                    {phase.steps.map((step) => (
                      <div
                        key={step}
                        className="rounded-[1.15rem] border border-white/10 bg-black/16 px-4 py-3 text-sm leading-7 text-slate-300/76"
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Orchestration matrix"
            title="The transaction workbook becomes a visual operating model."
            description="The attached spreadsheet describes CATAMARA as the central hub across principal, supplier, quality, logistics, and planned AI functions. The matrix below turns that into a clearer command structure."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <OrchestrationMatrix
            className="mt-10"
            columns={orchestrationColumns}
            rows={orchestrationRows}
          />
        </Reveal>
      </section>

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Platform roadmap"
            title="The planned AI layer now reads like a premium product roadmap."
            description="The workbook already outlines the next wave of automation. The page now gives that future state the visual weight of a flagship industrial software narrative."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <CapabilityMosaic tiles={aiExperienceTiles} className="mt-10" />
        </Reveal>
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell overflow-hidden">
            <div className="grid gap-10 xl:grid-cols-[0.76fr_1.24fr]">
              <div className="space-y-6 xl:sticky xl:top-28 xl:self-start">
                <p className="eyebrow">Automation stack</p>
                <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">
                  The future workflow has named, concrete capabilities instead of generic AI language.
                </h2>
                <p className="text-base leading-8 text-slate-300/74">
                  These planned system extensions are pulled directly from the
                  workbook and reframed as a more valuable product narrative.
                </p>
              </div>

              <div className="space-y-8">
                {siteContent.aiAgent.automationLayers.map((item, index) => {
                  const icons = [ScanSearch, Files, Scale, ShieldCheck];
                  const Icon = icons[index] ?? Bot;

                  return (
                    <Reveal key={item.step} delay={index * 0.05}>
                      <article className="relative border-t border-white/10 pt-8">
                        <div className="flex gap-6">
                          <div className="section-number">{item.step}</div>
                          <div className="max-w-2xl space-y-4">
                            <div className="flex items-center gap-3 text-[color:var(--color-data-cyan)]">
                              <Icon className="h-5 w-5" />
                              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                Planned system capability
                              </span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                              {item.title}
                            </h3>
                            <p className="text-base leading-8 text-slate-300/72">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Executive impression</p>
              <h2 className="display-title text-3xl sm:text-4xl">
                The AI page now carries the perceived weight of a flagship industrial platform.
              </h2>
              <p className="text-sm leading-7 text-slate-300/72">
                The goal of this pass was not just prettier UI. It was to move
                CATAMARA&apos;s product story closer to the visual seriousness of
                high-end industrial software.
              </p>
            </div>
            <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
              Start an AI workflow conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
