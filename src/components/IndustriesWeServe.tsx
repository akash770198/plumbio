import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/data";
import { AccentTitle } from "./AccentTitle";
import { Reveal } from "./Reveal";

const ICONS: Record<string, ReactNode> = {
  buildings: (
    <path d="M4 20V6l6-2v16M10 20V4l6 2v14M16 20V8l4-1v13M7 9h2M7 12h2M13 9h2M13 12h2M13 15h2M18 12h1M18 15h1M4 20h16" />
  ),
  school: (
    <>
      <path d="M3 20h18M5 20V9l7-4 7 4v11M9 20v-5h6v5" />
      <path d="M12 9v.01M8 12h.01M16 12h.01" />
    </>
  ),
  healthcare: (
    <>
      <path d="M4 20V8l8-4 8 4v12M4 20h16" />
      <path d="M12 10v6M9 13h6" />
    </>
  ),
  retail: (
    <>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 016 0v2" />
    </>
  ),
  industrial: (
    <>
      <path d="M3 20h18M5 20V10l5 3V10l5 3V8l4-2v14" />
      <path d="M8 6v2M13 5v3M18 4v3" />
    </>
  ),
  residential: (
    <path d="M4 20V10l8-6 8 6v10M4 20h16M9 20v-6h6v6" />
  ),
  hotel: (
    <>
      <path d="M4 20V8l8-4 8 4v12M4 20h16M9 20v-5h6v5" />
      <path d="M9 5l1.2-1.5L12 5l1.8-1.5L15 5" />
    </>
  ),
  government: (
    <>
      <path d="M8 4h8v16H8z" />
      <path d="M8 8h8M8 12h8M8 16h5M11 4V2" />
    </>
  ),
};

function IndustryIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 fill-none stroke-current"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name] ?? ICONS.buildings}
    </svg>
  );
}

function CtaIllustration() {
  return (
    <svg
      viewBox="0 0 120 90"
      className="h-[72px] w-[96px] text-[#1e6fd0] sm:h-[84px] sm:w-[112px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="28" cy="22" r="5" fill="currentColor" opacity="0.2" stroke="none" />
      <circle cx="48" cy="14" r="3.5" fill="currentColor" opacity="0.15" stroke="none" />
      <circle cx="18" cy="36" r="2.5" fill="currentColor" opacity="0.2" stroke="none" />
      <path d="M38 70c0-14 10-22 22-22s22 8 22 22" />
      <path d="M48 70h24" />
      <path d="M52 48v-8h16v8" />
      <path d="M70 40h18l6 22H64l6-22z" />
      <path d="M76 40V30a6 6 0 0112 0v10" />
      <path d="M20 58h22M20 58c0 8 6 14 14 14" />
      <path d="M26 48v10M34 50v8" />
    </svg>
  );
}

export function IndustriesWeServe() {
  const { industriesWeServe: data } = site;

  return (
    <section className="bg-white pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
      <div className="shell">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <article className="group flex h-full flex-col rounded-2xl border border-[#e6ebf2] bg-white p-6 shadow-[0_4px_18px_rgba(10,31,92,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#3aa0f0] hover:shadow-[0_24px_40px_rgba(10,31,92,0.12)]">
                <div className="flex items-start gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e8f3ff] text-[#1e6fd0] transition duration-300 group-hover:bg-[#d9ecff] group-hover:text-[#0051d4]">
                    <IndustryIcon name={item.icon} />
                  </span>
                  <h3 className="section-title pt-2 text-[clamp(18px,1.5vw,20px)] transition duration-300 group-hover:text-[#0051d4]">
                    {item.title}
                  </h3>
                </div>

                <p className="section-desc mt-4 flex-1">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="section-desc mt-5 inline-flex items-center gap-1.5 font-bold text-[#1e6fd0] transition hover:gap-2.5 hover:text-[#0a1f5c]"
                >
                  {data.learnMoreLabel}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-none stroke-current"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 rounded-2xl border border-dashed border-[#7eb6ef] bg-[#eef6ff] px-5 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-8">
              <div className="shrink-0">
                <CtaIllustration />
              </div>

              <div className="min-w-0 flex-1 text-center lg:text-left">
                <AccentTitle
                  as="h3"
                  before={data.cta.titleBefore}
                  accent={data.cta.titleAccent}
                />
                <p className="section-desc mt-2">
                  {data.cta.text}
                </p>
              </div>

              <Link
                href={data.cta.buttonHref}
                className="section-desc inline-flex shrink-0 items-center gap-2 rounded-md bg-[#0a3d9c] px-6 py-3.5 font-bold text-white transition hover:bg-[#083285]"
              >
                {data.cta.buttonLabel}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
