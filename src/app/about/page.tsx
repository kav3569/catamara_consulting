import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Network, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "CATAMARA's mission, vision, global footprint, and value proposition presented with upgraded clarity and visual structure.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 pt-6 sm:space-y-28">
      <PageHero
        eyebrow="Global story"
        title="A focused team connecting product development, sourcing, and manufacturing execution."
        intro={`${siteContent.company.originStory} ${siteContent.company.differentiator}`}
        facts={[
          { label: "Geography", value: "Germany" },
          { label: "Geography", value: "India" },
          { label: "Geography", value: "China" },
        ]}
        actions={[
          { href: "/contact", label: "Start a conversation" },
          { href: "/case-studies", label: "See proof points", variant: "secondary" },
        ]}
        aside={
          <div className="surface-panel overflow-hidden p-3">
            <Image
              src="/assets/organization-structure.png"
              alt="CATAMARA organization structure reference"
              width={1200}
              height={760}
              className="w-full rounded-[1.25rem] border border-white/8 object-cover"
            />
          </div>
        }
      />

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Mission & vision"
            title="The founding statements remain intact, but they now read with more authority."
            description="The company profile defines CATAMARA's mission, vision, and core-value direction. The redesign keeps the meaning intact and strengthens the framing."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Reveal>
            <article className="surface-panel h-full p-6">
              <ShieldCheck className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
              <h2 className="mt-4 text-2xl font-semibold text-white">Mission</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300/72">
                {siteContent.company.mission}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="surface-panel h-full p-6">
              <Globe2 className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
              <h2 className="mt-4 text-2xl font-semibold text-white">Vision</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300/72">
                {siteContent.company.vision}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="surface-panel h-full p-6">
              <Network className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
              <h2 className="mt-4 text-2xl font-semibold text-white">Core belief</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300/72">
                {siteContent.company.coreBelief}
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Value proposition"
            title="Knowledge, network, and technical perspective as differentiators."
            description="The source profile lists five value-proposition points. They are preserved here and given stronger hierarchy."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {siteContent.company.valueProposition.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <article className="surface-panel h-full p-5">
                <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-signal-gold)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-200/84">{item}</p>
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
                <p className="eyebrow">Operating structure</p>
                <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">
                  A small core team, deliberately structured for growth.
                </h2>
                <p className="text-base leading-8 text-slate-300/74">
                  {siteContent.company.structure.detail}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {siteContent.company.locations.map((location) => (
                    <div key={location} className="surface-panel px-4 py-4">
                      <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                        Location
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="surface-grid p-6 sm:p-8">
                <div className="grid gap-4">
                  <div className="surface-panel p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      Positioning
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300/72">
                      {siteContent.company.positioning}
                    </p>
                  </div>
                  <div className="surface-panel p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      Tagline
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300/72">
                      {siteContent.company.tagline}
                    </p>
                  </div>
                  <div className="surface-panel p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      Summary
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300/72">
                      {siteContent.company.summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Next step</p>
              <h2 className="display-title mt-3 text-3xl sm:text-4xl">
                Turn the global footprint into a live conversation.
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
