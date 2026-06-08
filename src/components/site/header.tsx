"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/content/site";
import { cn } from "@/lib/utils";

import { SiteLogo } from "./logo-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(6,8,13,0.72)] backdrop-blur-xl">
      <div className="site-container flex items-center justify-between py-4">
        <Link href="/" aria-label="CATAMARA home">
          <SiteLogo />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs uppercase tracking-[0.18em] text-slate-300/72 transition hover:text-white",
                isActive(item.href) && "text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-[color:var(--color-electric-blue)]/45 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--color-electric-blue)] hover:bg-[color:var(--color-electric-blue)]/10"
          >
            Start a Conversation
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/8 bg-[rgba(6,8,13,0.94)] lg:hidden">
          <div className="site-container flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl border border-transparent px-4 py-3 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/[0.03] hover:text-white",
                  isActive(item.href) && "border-white/10 bg-white/[0.03] text-white",
                )}
              >
                <div className="font-medium uppercase tracking-[0.16em]">{item.label}</div>
                <div className="mt-1 text-sm leading-6 text-slate-400">
                  {item.summary}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
