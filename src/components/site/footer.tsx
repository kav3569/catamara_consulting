import Link from "next/link";

import { futureArchitecture, navigation, siteContent } from "@/content/site";

import { SiteLogo } from "./logo-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/30">
      <div className="site-container grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <SiteLogo />
          <p className="max-w-md text-sm leading-7 text-slate-300/70">
            {siteContent.company.positioning}
          </p>
          <div className="space-y-1 text-sm text-slate-400">
            <div>{siteContent.company.locations.join(" / ")}</div>
            <div>
              <a href={`tel:${siteContent.company.phone.replace(/\s+/g, "")}`}>
                {siteContent.company.phone}
              </a>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Navigation
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300/78 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Future Architecture
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {futureArchitecture.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.14em] text-slate-300/72"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
