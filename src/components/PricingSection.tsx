"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/data";
import { Reveal } from "./Reveal";

function CheckIcon() {
  return (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#1e6fd0] text-white transition-transform duration-300 group-hover/item:scale-110">
      <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 12l5 5L20 7" />
      </svg>
    </span>
  );
}

function PlanIcon({ name }: { name: string }) {
  const common = "h-8 w-8 fill-none stroke-current";
  const props = {
    viewBox: "0 0 24 24",
    className: common,
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "boiler" || name === "waterheater") {
    return (
      <svg {...props}>
        <rect x="7" y="3" width="10" height="18" rx="1.5" />
        <path d="M10 7h4M10 11h4M10 15h2" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg {...props}>
        <path d="M4 20V7l8-3 8 3v13M4 20h16M9 20v-5h6v5M9 10h.01M12 10h.01M15 10h.01M9 13h.01M12 13h.01M15 13h.01" />
      </svg>
    );
  }
  if (name === "drain") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5M9 12h6M8 16h8" />
      </svg>
    );
  }
  if (name === "home") {
    return (
      <svg {...props}>
        <path d="M4 20V10l8-6 8 6v10M4 20h16M9 20v-6h6v6" />
      </svg>
    );
  }
  if (name === "emergency") {
    return (
      <svg {...props}>
        <path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.3 6.3l2 2M15.7 15.7l2 2M17.7 6.3l-2 2M8.3 15.7l-2 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (name === "pipe") {
    return (
      <svg {...props}>
        <path d="M3 10h8v4H3zM13 10h8v4h-8zM11 8v8M13 8v8" />
      </svg>
    );
  }
  if (name === "filter") {
    return (
      <svg {...props}>
        <path d="M4 5h16l-6 7v5l-4 2v-7L4 5z" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M6 10V7a2 2 0 012-2h3v3M14 5h2a2 2 0 012 2v3" />
      <path d="M4 10h16v2H4zM7 12v5a2 2 0 002 2h0a2 2 0 002-2v-1" />
      <path d="M12 19v1M12 14v2" />
    </svg>
  );
}

function CouponCard({
  coupon,
  printLabel,
  delay = 0,
}: {
  coupon: (typeof site.specialOffers.coupons)[number];
  printLabel: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} as="article" className="group h-full">
      <div className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(10,31,92,0.10)] transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_40px_rgba(10,31,92,0.16)]">
        {/* Top: blue stub + offer copy */}
        <div className="flex min-h-0 flex-1">
          <div className="relative flex w-[140px] shrink-0 flex-col items-center justify-center bg-[#1e6fd0] px-2 text-center text-white transition-colors duration-300 group-hover:bg-[#0f5fc4] sm:w-[170px]">
            {/* Left ticket notch */}
            <span className="absolute left-0 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7f9fc]" />
            {/* Perforation circles at top/bottom of blue–white join */}
            <span className="absolute right-0 top-0 z-10 h-3.5 w-3.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            <span className="absolute bottom-0 right-0 z-10 h-3.5 w-3.5 translate-x-1/2 translate-y-1/2 rounded-full bg-white" />
            {/* Dashed perforation */}
            <div
              aria-hidden
              className="absolute inset-y-3 right-0 w-[2px]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #fff 50%, transparent 0)",
                backgroundSize: "2px 10px",
                backgroundRepeat: "repeat-y",
              }}
            />
            <span className="relative z-[1] text-[clamp(28px,2.6vw,34px)] font-extrabold leading-none transition-transform duration-300 group-hover:scale-105">
              {coupon.amount}
            </span>
            <span className="relative z-[1] mt-1 text-[13px] font-bold tracking-wide">
              {coupon.amountSuffix}
            </span>
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-5 py-6 text-center sm:px-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1e6fd0]">
              {coupon.tag}
            </p>
            <h3 className="mt-2 text-[20px] font-extrabold text-[#111] transition-colors duration-300 group-hover:text-[#0a3d9c] sm:text-[22px]">
              {coupon.title}
            </h3>
            <p className="mt-2 max-w-[280px] text-[14px] leading-[1.65] text-[#666] sm:text-[15px]">
              {coupon.description}
            </p>
          </div>
        </div>

        {/* Full-width white footer */}
        <div className="flex items-center justify-between gap-3 border-t border-[#eceff3] bg-white px-5 py-3.5 sm:px-6">
          <p className="text-[13px] text-[#666] sm:text-[14px]">
            * Expires: {coupon.expires}
          </p>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-[#1e6fd0] transition-all duration-300 hover:gap-2.5 hover:text-[#0a3d9c] sm:text-[14px]"
          >
            {printLabel}
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </Reveal>
  );
}

export function PricingSection() {
  const {
    specialOffers,
    pricing,
    laborPricing,
    hourlyRatePricing,
    pricingCta,
  } = site;

  const [offerPage, setOfferPage] = useState(0);
  const [planPage, setPlanPage] = useState(0);
  const [rateMode, setRateMode] = useState<"hourly" | "fixed">("hourly");

  const offerPages = useMemo(() => {
    const pages: (typeof specialOffers.coupons)[] = [];
    for (let i = 0; i < specialOffers.coupons.length; i += 2) {
      pages.push(specialOffers.coupons.slice(i, i + 2));
    }
    return pages;
  }, [specialOffers]);

  const planPages = useMemo(() => {
    const pages: (typeof pricing.plans)[] = [];
    for (let i = 0; i < pricing.plans.length; i += 3) {
      pages.push(pricing.plans.slice(i, i + 3));
    }
    return pages;
  }, [pricing]);

  const visiblePlans = planPages[planPage] ?? [];

  const activeRates =
    rateMode === "hourly"
      ? hourlyRatePricing.rateTable
      : hourlyRatePricing.fixedRateTable;

  const rateTitleBefore =
    rateMode === "hourly"
      ? hourlyRatePricing.titleBefore
      : hourlyRatePricing.fixedTitleBefore;
  const rateTitleAccent =
    rateMode === "hourly"
      ? hourlyRatePricing.titleAccent
      : hourlyRatePricing.fixedTitleAccent;

  return (
    <div className="w-full">
      {/* ── Special Offers ── */}
      <section className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-[2px] w-10 origin-right bg-[#1e6fd0] transition-transform duration-500" />
                <p className="section-label">{specialOffers.label}</p>
                <span className="h-[2px] w-10 origin-left bg-[#1e6fd0]" />
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] font-extrabold leading-tight text-[#0a1f5c]">
                {specialOffers.titleBefore}{" "}
                <span className="text-[#1e6fd0]">{specialOffers.titleAccent}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-[#666]">
                {specialOffers.description}
              </p>
            </div>
          </Reveal>

          <div key={offerPage} className="pricing-fade-up mt-10 grid gap-12 md:grid-cols-2">
            {offerPages[offerPage]?.map((coupon, i) => (
              <CouponCard
                key={coupon.title}
                coupon={coupon}
                printLabel={specialOffers.printLabel}
                delay={i * 80}
              />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {offerPages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Offer slide ${i + 1}`}
                onClick={() => setOfferPage(i)}
                className={`h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                  i === offerPage ? "w-6 bg-[#1e6fd0]" : "w-2.5 bg-[#cfd8e6] hover:bg-[#9eb4d8]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Plans ── */}
      <section className="bg-[#f3f5f8] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-[2px] w-10 bg-[#1e6fd0]" />
                <p className="section-label">{pricing.label}</p>
                <span className="h-[2px] w-10 bg-[#1e6fd0]" />
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] font-extrabold leading-tight text-[#0a1f5c]">
                {pricing.titleBefore}{" "}
                <span className="text-[#1e6fd0]">{pricing.titleAccent}</span>
              </h2>
            </div>
          </Reveal>

          <div
            key={planPage}
            className="pricing-fade-up mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {visiblePlans.map((plan, index) => {
              const popular = Boolean(plan.badge);
              return (
                <Reveal
                  key={plan.name}
                  delay={index * 80}
                  as="article"
                  className="group relative h-full"
                >
                  <div
                    className={`relative flex h-full flex-col rounded-2xl bg-white px-7 pb-8 pt-10 shadow-[0_12px_36px_rgba(10,31,92,0.08)] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_22px_48px_rgba(10,31,92,0.16)] ${
                      popular
                        ? "pricing-popular-pulse border-2 border-[#1e6fd0]"
                        : "border border-transparent hover:border-[#c5d7f0]"
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded bg-[#0a3d9c] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                        {plan.badge}
                      </span>
                    )}

                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#1e6fd0] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <PlanIcon name={plan.icon} />
                    </div>

                    <h3 className="mt-5 text-center text-[clamp(20px,1.8vw,24px)] font-extrabold text-[#0a1f5c] transition-colors duration-300 group-hover:text-[#0a3d9c]">
                      {plan.name}
                    </h3>

                    <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="group/item flex items-start gap-3 text-[15px] text-[#555]">
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 border-t border-[#eceff3] pt-6 text-center">
                      <p className="text-[clamp(28px,3vw,34px)] font-extrabold leading-none text-[#1e6fd0] transition-transform duration-300 group-hover:scale-[1.03]">
                        {plan.price}
                        <span className="ml-1 text-[15px] font-medium text-[#888]">
                          {plan.period}
                        </span>
                      </p>
                      <Link
                        href={plan.cta.href}
                        className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-[#0a3d9c] px-5 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#083285] hover:shadow-lg"
                      >
                        {plan.cta.label}
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {planPages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Service plans page ${i + 1}`}
                aria-current={i === planPage ? "true" : undefined}
                onClick={() => setPlanPage(i)}
                className={`h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                  i === planPage
                    ? "w-6 bg-[#1e6fd0]"
                    : "w-2.5 bg-[#cfd8e6] hover:bg-[#9eb4d8]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Labor pricing hero ── */}
      <section className="relative overflow-hidden bg-[#041f4d]">
        <div className="absolute inset-0">
          <Image
            src={laborPricing.backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35 transition-transform duration-[8s] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#041f4d]/82" />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute right-8 top-1/2 hidden h-28 w-12 -translate-y-1/2 opacity-50 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(120,180,255,0.85) 1.4px, transparent 1.6px)",
            backgroundSize: "10px 10px",
          }}
        />

        <div className="shell relative z-10 py-12 lg:py-14">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-14">
              <div className="grid h-[104px] w-[104px] shrink-0 place-items-center rounded-full border-[5px] border-white bg-[#1e6fd0] text-white transition-transform duration-500 hover:scale-105 hover:rotate-3 lg:mt-1 lg:ml-12">
                <svg viewBox="0 0 48 48" className="h-14 w-14 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M18 28c0-5 4-8 8-8h8" />
                  <path d="M34 16v8h-6" />
                  <circle cx="20" cy="34" r="5" />
                  <path d="M24 20c2-4 6-6 10-5" />
                </svg>
              </div>

              <div className="min-w-0 flex-1 lg:ml-6">
                <h2 className="max-w-3xl text-[clamp(28px,3.4vw,44px)] font-extrabold leading-tight text-white">
                  {laborPricing.title}
                </h2>
                <p className="mt-3 text-[15px] font-bold leading-[1.6] text-white/95 sm:text-[17px]">
                  {laborPricing.subtitle}
                </p>

                <div className="mt-6 flex flex-col gap-6 sm:flex-row">
                  {laborPricing.options.map((option) => {
                    const active = rateMode === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setRateMode(option.id as "hourly" | "fixed")}
                        className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-[15px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                          active
                            ? "bg-[#1e6fd0] text-white shadow-md"
                            : "bg-white text-[#1e6fd0] hover:bg-[#eef5ff]"
                        }`}
                      >
                        <span aria-hidden className="transition-transform duration-300 group-hover:rotate-90">+</span>
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Hourly / Fixed rate list ── */}
      <section className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
            <Reveal>
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#1e6fd0]" />
                  <p className="section-label">{hourlyRatePricing.label}</p>
                </div>
                <h2
                  key={`${rateMode}-title`}
                  className="pricing-fade-up mt-3 text-[clamp(28px,3.4vw,44px)] font-extrabold leading-tight text-[#0a1f5c]"
                >
                  {rateTitleBefore}{" "}
                  <span className="text-[#1e6fd0]">{rateTitleAccent}</span>
                </h2>
                <p className="mt-5 text-[15px] leading-[1.85] text-[#666]">
                  {hourlyRatePricing.description}
                </p>
                <ul className="mt-7 flex flex-col gap-3.5">
                  {hourlyRatePricing.highlights.map((item) => (
                    <li key={item} className="group/item flex items-start gap-3 text-[15px] font-medium text-[#0a1f5c] transition-transform duration-300 hover:translate-x-1">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <div
                  key={rateMode}
                  className="pricing-fade-up overflow-hidden rounded-xl bg-white shadow-[0_14px_40px_rgba(10,31,92,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(10,31,92,0.14)]"
                >
                  <ul>
                    {activeRates.map((row, i) => (
                      <li
                        key={row.service}
                        className={`group flex items-center justify-between gap-4 px-6 py-4 transition-colors duration-300 hover:bg-[#f3f8ff] ${
                          i < activeRates.length - 1 ? "border-b border-[#edf0f5]" : ""
                        }`}
                      >
                        <span className="text-[15px] text-[#666] transition-colors duration-300 group-hover:text-[#0a3d9c]">
                          {row.service}
                        </span>
                        <span className="shrink-0 text-[15px] font-bold text-[#1e6fd0] transition-transform duration-300 group-hover:scale-105">
                          {row.rate}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-3 text-right text-[13px] italic text-[#888]">
                  {hourlyRatePricing.disclaimer}
                </p>
              </div>
            </Reveal>
          </div>

          {/* CTA banner */}
          <Reveal delay={120}>
            <div className="group mt-12 rounded-2xl bg-[#1e6fd0] px-5 py-6 transition-all duration-300 hover:bg-[#1860bc] hover:shadow-[0_18px_40px_rgba(30,111,208,0.35)] sm:px-8 sm:py-7">
              <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-8">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-[#0a3d9c] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                    <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1.4 1.4 0 011.5-.34 11.4 11.4 0 003.5.56 1.4 1.4 0 011.4 1.4V20a1.4 1.4 0 01-1.4 1.4A17.4 17.4 0 012.6 4 1.4 1.4 0 014 2.6h3.2A1.4 1.4 0 018.6 4a11.4 11.4 0 00.56 3.5 1.4 1.4 0 01-.34 1.5L6.6 10.8z" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1 text-center text-white lg:text-left">
                  <p className="text-[14px] font-medium text-white/90">{pricingCta.eyebrow}</p>
                  <p className="mt-0.5 text-[clamp(22px,2.2vw,28px)] font-extrabold leading-tight">
                    {pricingCta.title}
                  </p>
                </div>

                <div className="text-center text-white lg:text-left">
                  <p className="text-[14px] font-medium text-white/90">{pricingCta.callLabel}</p>
                  <a
                    href={pricingCta.phoneHref}
                    className="mt-0.5 block text-[clamp(22px,2.2vw,28px)] font-extrabold leading-tight transition-all duration-300 hover:scale-[1.03] hover:opacity-95"
                  >
                    {pricingCta.phone}
                  </a>
                </div>

                <Link
                  href={pricingCta.button.href}
                  className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3.5 text-[15px] font-bold text-[#1e6fd0] transition-all duration-300 hover:-translate-y-0.5 hover:gap-3 hover:bg-[#eef5ff] hover:shadow-md"
                >
                  {pricingCta.button.label}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default PricingSection;
