"use client";

import { useState } from "react";

import { siteContent } from "@/content/site";

type FormState = {
  name: string;
  company: string;
  email: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  interest: siteContent.contact.inquiryTypes[0],
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();

        const subject = encodeURIComponent(
          `CATAMARA Inquiry — ${formState.interest}`,
        );
        const body = encodeURIComponent(
          [
            `Name: ${formState.name}`,
            `Company: ${formState.company}`,
            `Email: ${formState.email}`,
            `Interest: ${formState.interest}`,
            "",
            formState.message,
          ].join("\n"),
        );

        window.location.href = `mailto:${siteContent.company.email}?subject=${subject}&body=${body}`;
      }}
    >
      <div>
        <p className="eyebrow">Prepare an inquiry</p>
        <h2 className="display-title text-3xl">Start with the right brief.</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300/72">
          This form prepares an email to CATAMARA using the published contact
          address, so the first conversation starts with context.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-200">
          <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Name
          </span>
          <input
            required
            value={formState.name}
            onChange={(event) =>
              setFormState((state) => ({ ...state, name: event.target.value }))
            }
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[color:var(--color-electric-blue)]"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Company
          </span>
          <input
            required
            value={formState.company}
            onChange={(event) =>
              setFormState((state) => ({
                ...state,
                company: event.target.value,
              }))
            }
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[color:var(--color-electric-blue)]"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Email
          </span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) =>
              setFormState((state) => ({ ...state, email: event.target.value }))
            }
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[color:var(--color-electric-blue)]"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Interest
          </span>
          <select
            value={formState.interest}
            onChange={(event) =>
              setFormState((state) => ({
                ...state,
                interest: event.target.value,
              }))
            }
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[color:var(--color-electric-blue)]"
          >
            {siteContent.contact.inquiryTypes.map((item) => (
              <option key={item} value={item} className="bg-slate-950">
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate-200">
        <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
          Message
        </span>
        <textarea
          required
          rows={6}
          value={formState.message}
          onChange={(event) =>
            setFormState((state) => ({ ...state, message: event.target.value }))
          }
          className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[color:var(--color-electric-blue)]"
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center rounded-full border border-[color:var(--color-electric-blue)] bg-[color:var(--color-electric-blue)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-[color:var(--color-data-cyan)]"
      >
        Create email draft
      </button>
    </form>
  );
}
