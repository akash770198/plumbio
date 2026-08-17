"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

export type ServicePageData = {
  id?: string;
  label: string;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  industriesTitle: string;
  industriesIntro: string;
  industries: string[];
  experienceTitle: string;
  experienceText: string;
  experiencePoints: { title: string; text: string }[];
  bidCta: {
    text: string;
    vanImage: string;
    vanImageAlt: string;
  };
  servicesHeading: string;
  servicesList: { label: string; href: string }[];
  askQuestion: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    questionPlaceholder: string;
    buttonLabel: string;
  };
  bookCta: {
    title: string;
    text: string;
    phone: string;
    phoneHref: string;
  };
  reasons: {
    title: string;
    items: string[];
  };
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1.4 1.4 0 011.5-.34 11.4 11.4 0 003.5.56 1.4 1.4 0 011.4 1.4V20a1.4 1.4 0 01-1.4 1.4A17.4 17.4 0 012.6 4 1.4 1.4 0 014 2.6h3.2A1.4 1.4 0 018.6 4a11.4 11.4 0 00.56 3.5 1.4 1.4 0 01-.34 1.5L6.6 10.8z" />
    </svg>
  );
}

function DropletNumber({ n }: { n: number }) {
  return (
    <span className="relative inline-flex h-9 w-8 shrink-0 items-center justify-center">
      <svg viewBox="0 0 32 40" className="absolute inset-0 h-full w-full" aria-hidden>
        <path
          d="M16 2C16 2 4 16.5 4 24.5a12 12 0 0024 0C28 16.5 16 2 16 2z"
          fill="#3aa0f0"
        />
      </svg>
      <span className="relative z-10 text-[13px] font-extrabold text-white">{n}</span>
    </span>
  );
}

function ImageSlot({
  src,
  alt,
  className,
  sizes,
}: {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-[#e8eef5] text-[13px] font-medium text-[#7a8699] ${className ?? ""}`}
        aria-label={alt}
      >
        Image placeholder
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image src={src} alt={alt} fill sizes={sizes ?? "100vw"} className="object-cover" />
    </div>
  );
}

export function ServicePageLayout({
  data,
  className,
  hideReasons,
}: {
  data: ServicePageData;
  className?: string;
  hideReasons?: boolean;
}) {
  const mid = Math.ceil(data.industries.length / 2);
  const industriesLeft = data.industries.slice(0, mid);
  const industriesRight = data.industries.slice(mid);
  const [questionSent, setQuestionSent] = useState(false);

  function handleAskQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuestionSent(true);
  }

  const leftTopContent = (
    <>
      <div className="flex items-center gap-3">
        <span className="block h-[2px] w-8 bg-[#3aa0f0]" />
        <p className="section-label">{data.label}</p>
      </div>

      <h2 className="section-title mt-3 max-w-[640px]">{data.title}</h2>

      <ImageSlot
        src={data.image || undefined}
        alt={data.imageAlt}
        className="mt-7 aspect-[16/9] w-full"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />

      <p className="section-desc mt-8">{data.intro}</p>

      <h3 className="section-title mt-16">{data.industriesTitle}</h3>
      <p className="section-desc mt-4">{data.industriesIntro}</p>

      <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {[industriesLeft, industriesRight].map((col, colIdx) => (
          <ul key={colIdx} className="flex flex-col gap-3">
            {col.map((item) => (
              <li
                key={item}
                className="group flex items-start gap-2.5 rounded-[20px] border border-[#e6eaef] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#3aa0f0] hover:bg-[#f0f7ff] hover:shadow-[0_18px_30px_rgba(0,49,127,0.08)]"
              >
                <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-[#0a1f5c] transition-colors duration-300 group-hover:text-[#0051d4]" />
                <span className="text-[15px] font-bold text-[#0a1f5c] transition-colors duration-300 group-hover:text-[#0051d4]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );

  const experienceSection = (
    <>
      <h3 className={`section-title ${hideReasons ? 'mt-0' : 'mt-12'}`}>{data.experienceTitle}</h3>
      <p className="section-desc mt-4">{data.experienceText}</p>

      <ul className="mt-6 flex flex-col gap-3.5">
        {data.experiencePoints.map((point) => (
          <li key={point.title} className="flex items-start gap-2.5">
            <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-[#0a1f5c]" />
            <p className="text-[15px] leading-[1.7] text-[#666]">
              <span className="font-bold text-[#0a1f5c]">{point.title}:</span>{" "}
              {point.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );

  const rectangularVanBox = (
    <div className="relative mt-10 mb-0 overflow-hidden sm:overflow-visible">
      <div className="relative flex min-h-[150px] items-center overflow-hidden bg-[#0b5bd3] px-5 py-8 pr-5 sm:min-h-[170px] sm:px-9 sm:pr-[44%] lg:min-h-[180px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1.2px)",
            backgroundSize: "14px 14px",
            maskImage:
              "linear-gradient(90deg, transparent 0%, transparent 45%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.9) 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, transparent 45%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.9) 100%)",
          }}
        />
        <p className="relative z-[1] max-w-[520px] text-[clamp(16px,1.7vw,21px)] font-bold leading-[1.45] text-white">
          {data.bidCta.text}
        </p>
      </div>

      <div className="pointer-events-none relative z-10 mx-auto mt-4 w-[72%] max-w-[300px] sm:absolute sm:bottom-[-64px] sm:right-[-12px] sm:mx-0 sm:mt-0 sm:w-[54%] sm:max-w-[380px] lg:max-w-[440px]">
        {data.bidCta.vanImage ? (
          <div className="relative w-full">
            <div
              aria-hidden
              className="absolute bottom-[18%] left-1/2 z-0 h-[9%] w-[68%] -translate-x-1/2 rounded-[100%] bg-black/40 blur-[7px]"
            />
            <div
              aria-hidden
              className="absolute bottom-[19%] left-1/2 z-0 h-[5%] w-[48%] -translate-x-1/2 rounded-[100%] bg-black/28 blur-[3px]"
            />
            <div className="relative z-[1] aspect-[5/3] w-full">
              <Image
                src={data.bidCta.vanImage}
                alt={data.bidCta.vanImageAlt}
                fill
                sizes="440px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );

  const tallSidebarVanBox = (
    <Reveal delay={80}>
      <div className="relative overflow-visible bg-[#0b5bd3] px-6 py-9 shadow-[0_8px_30px_rgba(10,31,92,0.08)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />
        <p className="relative z-[1] text-center text-[clamp(18px,1.8vw,22px)] font-bold leading-snug text-white">
          {data.bidCta.text}
        </p>

        {data.bidCta.vanImage && (
          <div className="pointer-events-none relative z-10 mx-auto mt-8 w-[90%] max-w-[280px]">
            <div className="relative w-full">
              <div
                aria-hidden
                className="absolute bottom-[18%] left-1/2 z-0 h-[9%] w-[68%] -translate-x-1/2 rounded-[100%] bg-black/40 blur-[7px]"
              />
              <div
                aria-hidden
                className="absolute bottom-[19%] left-1/2 z-0 h-[5%] w-[48%] -translate-x-1/2 rounded-[100%] bg-black/28 blur-[3px]"
              />
              <div className="relative z-[1] aspect-[5/3] w-full">
                <Image
                  src={data.bidCta.vanImage}
                  alt={data.bidCta.vanImageAlt}
                  fill
                  sizes="280px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );

  const rightTopContent = (
    <>
      <h3 className="section-title text-[clamp(22px,2vw,28px)]">
        {data.servicesHeading}
      </h3>

      <ul className="mt-5 bg-[#f4f6f8] px-6 py-2">
        {data.servicesList.map((item) => (
          <li key={item.label} className="border-b border-[#e6eaef] last:border-b-0">
            <Link
              href={item.href}
              className="flex items-center gap-3 py-3.5 text-[15px] font-bold text-[#0a1f5c] transition hover:text-[#0051d4]"
            >
              <ArrowIcon className="h-4 w-4 shrink-0 text-[#3aa0f0]" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="section-title mt-10 text-[clamp(22px,2vw,28px)]">
        {data.askQuestion.title}
      </h3>

      {questionSent ? (
        <p className="mt-5 rounded-md bg-[#eef6ff] px-4 py-5 text-[15px] font-medium text-[#0a1f5c]">
          Thanks — your question has been received. We&apos;ll get back to you shortly.
        </p>
      ) : (
        <form className="mt-5 space-y-3.5" onSubmit={handleAskQuestion}>
          <input
            type="text"
            name="name"
            required
            placeholder={data.askQuestion.namePlaceholder}
            className="w-full rounded-md border-0 bg-[#f4f6f8] px-4 py-3.5 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:ring-2 focus:ring-[#3aa0f0]/35"
          />
          <input
            type="email"
            name="email"
            required
            placeholder={data.askQuestion.emailPlaceholder}
            className="w-full rounded-md border-0 bg-[#f4f6f8] px-4 py-3.5 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:ring-2 focus:ring-[#3aa0f0]/35"
          />
          <textarea
            name="question"
            rows={5}
            required
            placeholder={data.askQuestion.questionPlaceholder}
            className="w-full resize-none rounded-md border-0 bg-[#f4f6f8] px-4 py-3.5 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:ring-2 focus:ring-[#3aa0f0]/35"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-[3px] bg-[#f07a1a] px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#d96a12]"
          >
            {data.askQuestion.buttonLabel}
          </button>
        </form>
      )}

      <div
        className="mt-8 bg-[#0051d4] px-6 py-9 text-center text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1.1px, transparent 1.1px)",
          backgroundSize: "12px 12px",
        }}
      >
        <p className="text-[clamp(22px,2vw,28px)] font-extrabold leading-tight">
          {data.bookCta.title}
        </p>
        <p className="mt-2 text-[14px] text-white/95">{data.bookCta.text}</p>
        <Link
          href={data.bookCta.phoneHref}
          className="mt-5 inline-flex items-center justify-center gap-2.5 text-[clamp(22px,2.2vw,28px)] font-extrabold text-white transition hover:opacity-90"
        >
          <PhoneIcon className="h-6 w-6" />
          {data.bookCta.phone}
        </Link>
      </div>

      {!hideReasons && (
        <div className="mt-8 border border-[#b8d8fa] bg-[#eef6ff] px-6 py-8 shadow-[0_8px_30px_rgba(10,31,92,0.08)]">
          <h3 className="section-title text-[clamp(20px,1.8vw,24px)]">
            {data.reasons.title}
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {data.reasons.items.map((reason, i) => (
              <li key={reason} className="flex items-center gap-3.5">
                <DropletNumber n={i + 1} />
                <span className="text-[15px] font-bold text-[#0a1f5c]">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

  if (hideReasons) {
    // Industry Detail Layout: 4-cell flattened grid for perfect row-start-2 horizontal alignment
    return (
      <section
        id={data.id ?? "service-detail"}
        className={className ?? "bg-white pt-0 pb-[3.25rem] lg:pb-[3.75rem]"}
      >
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.9fr)] lg:gap-14 xl:gap-16">
            <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              {leftTopContent}
            </div>
            <div className="min-w-0 lg:col-start-1 lg:row-start-2">
              <Reveal>{experienceSection}</Reveal>
            </div>
            <aside className="min-w-0 lg:col-start-2 lg:row-start-1 lg:pt-1">
              {rightTopContent}
            </aside>
            <div className="min-w-0 lg:col-start-2 lg:row-start-2">
              {tallSidebarVanBox}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Service Detail Layout: 2-column flex layout restoring the rectangular Van Box at the bottom left
  return (
    <section
      id={data.id ?? "service-detail"}
      className={className ?? "bg-white pt-0 pb-[3.25rem] lg:pb-[3.75rem]"}
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.9fr)] lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            {leftTopContent}
            <Reveal>{experienceSection}</Reveal>
            <Reveal delay={80}>{rectangularVanBox}</Reveal>
          </div>
          <aside className="min-w-0 lg:pt-1">
            {rightTopContent}
          </aside>
        </div>
      </div>
    </section>
  );
}
