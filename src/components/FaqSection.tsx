"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/data";
import { Reveal } from "./Reveal";

type FaqItem = (typeof site.faq.items)[number];

function FaqIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: `${className} fill-none stroke-current`,
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "wallet":
      return (
        <svg {...props}>
          <rect x="2" y="6" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
          <rect x="16" y="13" width="4" height="3" rx="1" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      );
    case "hot-water":
      return (
        <svg {...props}>
          <path d="M12 3c0 4-4 5-4 9a4 4 0 108 0c0-4-4-5-4-9z" />
          <path d="M12 14v3" />
        </svg>
      );
    case "shower":
      return (
        <svg {...props}>
          <path d="M8 4h8v3H8z" />
          <path d="M12 7v2" />
          <path d="M8 11c0 0 1 2 4 2s4-2 4-2" />
          <path d="M9 15v1M12 15v2M15 15v1" />
        </svg>
      );
    case "thermometer":
      return (
        <svg {...props}>
          <path d="M14 15.5a3 3 0 11-4 0V6a2 2 0 114 0v9.5z" />
          <path d="M12 8v6" />
        </svg>
      );
    case "faucet":
      return (
        <svg {...props}>
          <path d="M8 10V7a2 2 0 012-2h1" />
          <path d="M14 5h2a2 2 0 012 2v3" />
          <path d="M6 10h12v2H6z" />
          <path d="M10 12v4a2 2 0 002 2h0" />
          <path d="M12 18v1" />
        </svg>
      );
    case "toilet":
      return (
        <svg {...props}>
          <path d="M7 8h10v7a3 3 0 01-3 3H10a3 3 0 01-3-3V8z" />
          <path d="M9 5h6v3H9z" />
          <path d="M12 18v2" />
        </svg>
      );
    case "location":
      return (
        <svg {...props}>
          <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      );
    case "hand-drop":
      return (
        <svg {...props}>
          <path d="M8.5 11V8.5a1.5 1.5 0 113 0V11" />
          <path d="M7 11c0 3.5 2.2 6.5 5 6.5s5-3 5-6.5" />
          <path d="M12 5.5v1.5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M9 10h.01M15 10h.01M9.5 14.5S10.5 16 12 16s2.5-1.5 2.5-1.5" />
        </svg>
      );
  }
}

function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const primaryOpen = isOpen && item.openStyle === "primary";

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-[0_8px_28px_rgba(10,31,92,0.06)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center gap-4 px-5 py-4 text-left transition-colors sm:px-6 sm:py-5 ${
          primaryOpen
            ? "bg-[#0a3d9c] text-white"
            : "bg-white text-[#0a1f5c] hover:bg-[#f8fbff]"
        }`}
      >
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${
            primaryOpen ? "bg-white text-[#0a3d9c]" : "bg-[#eef6ff] text-[#1e6fd0]"
          }`}
        >
          <FaqIcon name={item.icon} className="h-5 w-5" />
        </span>

        <span className="min-w-0 flex-1 text-[15px] font-bold leading-snug sm:text-[16px]">
          {item.question}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center text-[22px] font-light leading-none ${
            primaryOpen ? "text-white" : "text-[#1e6fd0]"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex items-start gap-4 bg-[#eef6ff] px-5 py-5 sm:px-6 sm:py-6">
            <p className="min-w-0 flex-1 text-[14px] leading-[1.75] text-[#666] sm:text-[15px]">
              {item.answer}
            </p>
            <div className="hidden shrink-0 text-[#1e6fd0] opacity-90 sm:block">
              <FaqIcon name={item.icon} className="h-16 w-16" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FaqSection({ className }: { className?: string }) {
  const { faq } = site;

  const defaultOpen = useMemo(
    () =>
      new Set(
        faq.items
          .map((item, index) => (item.defaultOpen ? index : -1))
          .filter((index) => index !== -1)
      ),
    [faq.items]
  );

  const [openItems, setOpenItems] = useState<Set<number>>(defaultOpen);

  const leftColumn = faq.items.filter((_, index) => index % 2 === 0);
  const rightColumn = faq.items.filter((_, index) => index % 2 === 1);

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const renderColumn = (items: FaqItem[], columnOffset: 0 | 1) => (
    <div className="flex flex-col gap-5">
      {items.map((item, colIndex) => {
        const index = colIndex * 2 + columnOffset;
        return (
          <Reveal key={item.question} delay={colIndex * 60}>
            <FaqCard
              item={item}
              isOpen={openItems.has(index)}
              onToggle={() => toggle(index)}
            />
          </Reveal>
        );
      })}
    </div>
  );

  return (
    <section className={className ?? "relative overflow-hidden bg-[#f7f9fc] pt-0 pb-0"}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(80px,12vw,160px)] font-extrabold leading-none tracking-tight text-[#eef1f6]"
      >
        {faq.backgroundTitle}
      </div>

      <div className="shell relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-10 bg-[#1e6fd0]" />
              <p className="section-label">{faq.label}</p>
              <span className="h-[2px] w-10 bg-[#1e6fd0]" />
            </div>
            <h2 className="section-title mt-4">
              {faq.title}
            </h2>
            <p className="section-desc mx-auto mt-4 max-w-2xl">
              {faq.description}
            </p>
          </div>
        </Reveal>

        {/* Independent columns — expanding one side does not stretch the other */}
        <div className="mt-10 grid items-start gap-5 md:grid-cols-2 lg:mt-12">
          {renderColumn(leftColumn, 0)}
          {renderColumn(rightColumn, 1)}
        </div>

        <Reveal delay={120}>
          <div
            className="relative mt-10 overflow-hidden rounded-2xl bg-[#0a3d9c] px-5 py-6 sm:px-8 sm:py-7 lg:mt-12"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.14) 1.1px, transparent 1.2px)",
              backgroundSize: "14px 14px",
              backgroundPosition: "right bottom",
            }}
          >
            <div className="relative z-[1] flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0">
              <div className="flex flex-1 items-center gap-4 lg:pr-8">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-[#0a3d9c]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                    <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1.4 1.4 0 011.5-.34 11.4 11.4 0 003.5.56 1.4 1.4 0 011.4 1.4V20a1.4 1.4 0 01-1.4 1.4A17.4 17.4 0 012.6 4 1.4 1.4 0 014 2.6h3.2A1.4 1.4 0 018.6 4a11.4 11.4 0 00.56 3.5 1.4 1.4 0 01-.34 1.5L6.6 10.8z" />
                  </svg>
                </div>
                <div className="text-white">
                  <p className="text-[13px] font-medium text-white/85">
                    {faq.cta.helpEyebrow}
                  </p>
                  <p className="text-[clamp(20px,2vw,26px)] font-extrabold leading-tight">
                    {faq.cta.helpTitle}
                  </p>
                </div>
              </div>

              <div className="hidden h-14 w-px shrink-0 bg-white/20 lg:block" />

              <div className="flex flex-1 items-center gap-4 lg:px-8">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-[#0a3d9c]">
                  <span className="text-[11px] font-extrabold leading-none">24/7</span>
                </div>
                <div className="text-white">
                  <p className="text-[13px] font-medium text-white/85">
                    {faq.cta.callLabel}
                  </p>
                  <a
                    href={faq.cta.phoneHref}
                    className="text-[clamp(20px,2vw,26px)] font-extrabold leading-tight transition hover:opacity-90"
                  >
                    {faq.cta.phone}
                  </a>
                </div>
              </div>

              <div className="hidden h-14 w-px shrink-0 bg-white/20 lg:block" />

              <div className="flex shrink-0 lg:pl-8">
                <Link
                  href={faq.cta.button.href}
                  className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-[15px] font-bold text-[#0a3d9c] transition hover:bg-[#eef5ff]"
                >
                  {faq.cta.button.label}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
