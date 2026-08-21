"use client";

import React from "react";
import { FormEvent, useState } from "react";
import { site } from "@/data";
import { AccentTitle } from "./AccentTitle";
import { Reveal } from "./Reveal";

const SOCIAL_ICONS = {
  fb: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2" aria-hidden>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  tw: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.694-5.867 6.694h-3.31l7.733-8.835L2.25 2.25h6.814l4.6 6.084 5.38-6.084zM17.002 18.807h1.844L6.844 3.556H4.939l12.063 15.251z" />
    </svg>
  ),
  in: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  yt: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2" aria-hidden>
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <path d="M9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="currentColor" />
    </svg>
  ),
};

export function ContactPage() {
  const { contactPage: data, contactInfo } = site;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-white pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(80px,12vw,160px)] font-extrabold leading-none tracking-tight text-[#f0f2f7]"
      >
        {data.backgroundTitle}
      </div>

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#1e6fd0]" />
                <p className="section-label">{data.label}</p>
              </div>

              <AccentTitle
                className="mt-4"
                before={data.titleBefore}
                accent={data.titleAccent}
              />

              <p className="mt-5 text-[15px] font-bold leading-[1.65] text-[#0a1f5c]">
                {data.guarantee}
              </p>
              <p className="section-desc mt-4 max-w-xl">{data.description}</p>

              <ul className="mt-8 space-y-5">
                {data.emails.map((item) => (
                  <li key={item.value} className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#eef6ff] text-[#1e6fd0]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-none stroke-current"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-[#0a1f5c]">{item.label}</p>
                      <a
                        href={`mailto:${item.value}`}
                        className="section-desc mt-1 block transition hover:text-[#1e6fd0]"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="text-[16px] font-bold text-[#0a1f5c]">{data.followTitle}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      aria-label={social.icon}
                      className="grid h-14 w-14 place-items-center rounded-md bg-[#e8edf5] text-[#1e6fd0] transition hover:bg-[#1e6fd0] hover:text-white"
                    >
                      {SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-xl bg-white p-6 shadow-[0_14px_40px_rgba(10,31,92,0.08)] sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center py-10 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#e7f7ee] text-[#1f9d55]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 fill-none stroke-current"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="section-title mt-6">{data.form.successTitle}</h3>
                  <p className="section-desc mt-3 max-w-md">
                    {data.form.successMessage}
                  </p>
                </div>
              ) : (
                <>
                  <AccentTitle
                    as="h3"
                    before={data.form.titleBefore}
                    accent={data.form.titleAccent}
                  />

                  <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={data.form.namePlaceholder}
                      className="w-full rounded-md border-0 bg-[#f4f6f8] px-4 py-3.5 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:ring-2 focus:ring-[#3aa0f0]/35"
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={data.form.emailPlaceholder}
                        className="w-full rounded-md border-0 bg-[#f4f6f8] px-4 py-3.5 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:ring-2 focus:ring-[#3aa0f0]/35"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder={data.form.phonePlaceholder}
                        className="w-full rounded-md border-0 bg-[#f4f6f8] px-4 py-3.5 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:ring-2 focus:ring-[#3aa0f0]/35"
                      />
                    </div>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder={data.form.messagePlaceholder}
                      className="w-full resize-none rounded-md border-0 bg-[#f4f6f8] px-4 py-3.5 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:ring-2 focus:ring-[#3aa0f0]/35"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-[3px] bg-[#f07a1a] px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#d96a12]"
                    >
                      {data.form.buttonLabel}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
