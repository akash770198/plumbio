import Image from "next/image";
import { site } from "@/data";
import { Reveal } from "./Reveal";

const FEATURE_ICONS: Record<string, string> = {
  shield: "M12 3l7 3v6c0 4.4-2.8 8.2-7 9-4.2-.8-7-4.6-7-9V6l7-3z",
  wrench:
    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  clock: "M12 7v5l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  thumb:
    "M7 10v10M2 12v6a2 2 0 002 2h11.5a2 2 0 002-1.5l1.7-7A2 2 0 0017.2 9H14V5a2 2 0 00-2-2l-2 5-3 3",
  users:
    "M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9 11a4 4 0 100-8 4 4 0 000 8zM23 20v-1a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  badge:
    "M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z",
};

function FeatureIcon({ name, className }: { name: string; className: string }) {
  const d = FEATURE_ICONS[name] ?? FEATURE_ICONS.shield;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

export function WhyChoose() {
  const { whyChoose } = site;

  return (
    <section className="section-y relative w-full overflow-hidden bg-[#001746] font-sans lg:min-h-[640px]">
      {/* Layer 0: pipes background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={whyChoose.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-40 mix-blend-luminosity"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#001746]/95 from-35% via-[#001746]/82 to-[#012a7a]/70" />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[16%] left-[4%] z-[1] hidden h-32 w-32 opacity-25 lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/*
        Plumber layer (z-10): above blue bg, below white wave.
        Frame runs from content top to near section bottom so the FULL image
        fits with object-contain — nothing cropped; wave only covers the waist.
      */}
      <div className="pointer-events-none absolute bottom-0 right-[var(--page-gutter)] top-12 z-10 hidden w-[min(560px,52%)] -translate-x-8 xl:-translate-x-12 lg:block">
        <Image
          src={whyChoose.image}
          alt={whyChoose.imageAlt}
          fill
          sizes="52vw"
          className="object-contain object-top drop-shadow-2xl"
          priority
        />
      </div>

      {/* White wave + trust badges (z-20) — sits over plumber waist */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[180px] lg:h-[220px]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#1a4faa"
            fillOpacity="0.28"
            d="M0 175
               C 220 205, 420 210, 620 165
               C 860 110, 1040 55, 1220 42
               C 1320 36, 1390 44, 1440 56
               L1440 220 L0 220 Z"
          />
          <path
            fill="#ffffff"
            d="M0 188
               C 180 210, 360 214, 540 180
               C 760 132, 960 68, 1160 46
               C 1280 34, 1365 38, 1440 54
               L1440 220 L0 220 Z"
          />
        </svg>

        <div className="shell pointer-events-auto absolute inset-x-0 bottom-0 flex h-[100px] items-end pb-5 lg:h-[118px] lg:items-center lg:pb-0 lg:pt-8">
          <div className="ml-auto flex w-full max-w-[700px] items-stretch justify-between">
            {whyChoose.stats.map((stat, i) => (
              <div
                key={stat.title}
                className={`flex flex-1 flex-col items-center justify-center px-2 text-center lg:px-5 ${
                  i > 0 ? "border-l border-[#d5deee]" : ""
                }`}
              >
                <FeatureIcon
                  name={stat.icon}
                  className="mb-2 h-7 w-7 text-[#002870] lg:h-8 lg:w-8"
                />
                <p className="text-[12px] font-bold leading-[1.25] text-[#002870] lg:text-[13px]">
                  {stat.title}
                  {stat.value ? (
                    <>
                      <br />
                      {stat.value}
                    </>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Left copy — top aligns with plumber (same top-12) */}
      <div className="shell relative z-30 flex flex-col lg:min-h-[560px] lg:flex-row lg:items-start lg:pb-24">
        <div className="relative w-full lg:w-[48%] lg:pr-4">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-8 bg-[#20b2ff]" />
              <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#20b2ff]">
                {whyChoose.label}
              </p>
            </div>

            <h2 className="mt-3 text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.15] text-white">
              {whyChoose.titleLines.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === whyChoose.titleLines.length - 1 ? "text-[#20b2ff]" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-4 max-w-[500px] text-[17px] leading-relaxed text-white/90">
              {whyChoose.description}
            </p>

            <ul className="mt-6 flex max-w-[500px] flex-col divide-y divide-[#ffffff20]">
              {whyChoose.features.map((feature) => (
                <li key={feature.title} className="flex items-center gap-5 py-4 first:pt-0">
                  <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#0051d4] text-white shadow-lg">
                    <FeatureIcon name={feature.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-[18px] font-bold text-white">{feature.title}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-5 max-w-[500px] overflow-hidden rounded-[12px] border border-[#1b4a9a] bg-[#051c50] p-6 shadow-xl">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#20b2ff]/10 to-transparent" />
              <div className="relative z-10 flex items-start gap-5">
                <span className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-xl bg-[#20b2ff] text-white shadow-[0_0_15px_rgba(32,178,255,0.4)]">
                  <FeatureIcon name={whyChoose.highlightCard.icon} className="h-8 w-8" />
                </span>
                <div className="pt-0.5">
                  <h3 className="text-[19px] font-bold text-white">{whyChoose.highlightCard.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/80">
                    {whyChoose.highlightCard.text}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mobile plumber */}
        <div className="relative z-10 mt-6 flex w-full justify-center lg:hidden">
          <Image
            src={whyChoose.image}
            alt={whyChoose.imageAlt}
            width={800}
            height={1000}
            sizes="90vw"
            className="h-auto w-[88%] max-w-[480px] object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
