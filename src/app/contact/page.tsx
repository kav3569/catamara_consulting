import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Phone, Workflow } from "lucide-react";

import { MarqueeBand } from "@/components/site/marquee-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CATAMARA for sourcing, supplier development, NPD, NVD, VAVE, and AI workflow collaboration.",
};

export default function ContactPage() {
  const phoneHref = `tel:${siteContent.company.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteContent.company.phone.replace(/\D/g, "")}`;

  return (
    <div className="space-y-20 pt-6 sm:space-y-24">
      <PageHero
        eyebrow="Contact"
        title="Start with a direct conversation."
        intro="CATAMARA's public contact experience is intentionally streamlined around direct phone-based conversations for sourcing, supplier development, value engineering, and workflow discussions."
        facts={[
          { label: "Direct line", value: siteContent.company.phone },
          { label: "Coverage", value: "Germany / India / China" },
          { label: "Conversation type", value: "Project / Partner / AI" },
        ]}
        actions={[
          { href: phoneHref, label: "Call CATAMARA" },
          { href: whatsappHref, label: "Open WhatsApp", variant: "secondary" },
        ]}
      />

      <MarqueeBand
        items={[
          "Supplier sourcing",
          "Supplier development",
          "New product development",
          "New vendor development",
          "Value engineering",
          "AI workflow collaboration",
        ]}
      />

      <section className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Reach out"
            title="One published number. A clearer enterprise entry point."
            description="This page now keeps the contact surface deliberately focused: one direct number, one clear next step, and a tighter explanation of what conversations CATAMARA supports."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="section-shell overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div className="space-y-6">
                  <div className="eyebrow">Direct access</div>
                  <div className="display-title text-4xl text-white sm:text-5xl lg:text-6xl">
                    {siteContent.company.phone}
                  </div>
                  <p className="max-w-xl text-base leading-8 text-slate-300/74">
                    {siteContent.contact.note}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={phoneHref} className={buttonVariants({ variant: "primary" })}>
                      Call now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a href={whatsappHref} className={buttonVariants({ variant: "secondary" })}>
                      WhatsApp message
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="grid gap-4">
                  <article className="surface-panel p-6">
                    <Globe2 className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
                    <h2 className="mt-4 text-xl font-semibold text-white">Operating footprint</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300/72">
                      {siteContent.company.locations.join(" / ")}
                    </p>
                  </article>
                  <article className="surface-panel p-6">
                    <Workflow className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
                    <h2 className="mt-4 text-xl font-semibold text-white">
                      Typical conversation lanes
                    </h2>
                    <ul className="list-marker mt-4 grid gap-3">
                      {siteContent.contact.inquiryTypes.slice(0, 4).map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200/84">
                          <span />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="grid gap-4">
              <article className="surface-panel p-6">
                <Phone className="h-5 w-5 text-[color:var(--color-data-cyan)]" />
                <h2 className="mt-4 text-xl font-semibold text-white">Preferred channel</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  <a href={phoneHref}>{siteContent.company.phone}</a>
                </p>
              </article>
              <article className="surface-panel p-6">
                <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                  Consultation rhythm
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  Best suited for sourcing briefs, supplier-development programs,
                  VAVE discussions, and AI workflow roadmap conversations.
                </p>
              </article>
              <article className="surface-panel p-6">
                <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                  Response path
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  Direct phone conversations are now the only published intake
                  path surfaced across the site.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container">
        <Reveal>
          <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Need more context first?</p>
              <h2 className="display-title text-3xl sm:text-4xl">
                Review CATAMARA&apos;s capabilities before you call.
              </h2>
              <p className="text-sm leading-7 text-slate-300/72">
                The services, case studies, and AI Agent pages now frame the
                operating model in much more detail.
              </p>
            </div>
            <Link href="/services" className={buttonVariants({ variant: "secondary" })}>
              Review capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
