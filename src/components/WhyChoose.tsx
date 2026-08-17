import Image from "next/image";
import { site, SectionProps, ServicesWhyChooseData } from "@/data";
import { Icon } from "./Icon";
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

export function WhyChoose({ className }: { className?: string }) {
  const { whyChoose } = site;

  return (
    <section
      className={
        className ??
        "relative w-full overflow-hidden bg-[#001746] pt-[3.25rem] pb-0 font-sans lg:min-h-[640px] lg:pt-[3.75rem]"
      }
    >
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
      <div className="pointer-events-none absolute bottom-0 right-[var(--page-gutter)] top-12 z-10 hidden w-[min(560px,52%)] translate-x-2 xl:translate-x-4 lg:block">
        <Image
          src={whyChoose.image}
          alt={whyChoose.imageAlt}
          fill
          sizes="52vw"
          className="object-contain object-top drop-shadow-2xl"
          priority
        />
      </div>

      {/* Desktop white wave + trust badges */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-[300px] lg:block">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#ffffff"
            d="M720 320
               C 775 320, 825 242, 870 198
               C 895 175, 925 168, 970 168
               L1440 168
               L1440 320 Z"
          />
        </svg>

        <div className="shell pointer-events-auto absolute inset-x-0 bottom-0 flex h-[110px] items-center pt-6">
          <div className="ml-auto flex w-full max-w-[560px] translate-x-5 -translate-y-10 items-stretch justify-between">
            {whyChoose.stats.map((stat, i) => (
              <div
                key={stat.title}
                className={`flex flex-1 flex-col items-center justify-center px-3 text-center ${
                  i > 0 ? "border-l border-[#d5deee]" : ""
                }`}
              >
                <FeatureIcon
                  name={stat.icon}
                  className="mb-1.5 h-6 w-6 text-[#002870]"
                />
                <p className="text-[12px] font-bold leading-[1.3] text-[#002870]">
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

      {/* Left copy + mobile image/stats */}
      <div className="shell relative z-30 flex flex-col pb-10 lg:min-h-[560px] lg:flex-row lg:items-start lg:pb-28">
        <div className="relative w-full lg:w-[48%] lg:pr-4">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-8 bg-[#20b2ff]" />
              <p className="section-label">{whyChoose.label}</p>
            </div>

            <h2 className="section-title mt-3 text-white">
              {whyChoose.titleLines.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === whyChoose.titleLines.length - 1 ? "text-[#20b2ff]" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p className="section-desc mt-4 max-w-[500px] text-white/90">
              {whyChoose.description}
            </p>

            <ul className="mt-6 flex max-w-[500px] flex-col divide-y divide-[#ffffff20]">
              {whyChoose.features.map((feature) => (
                <li key={feature.title} className="flex items-center gap-4 py-4 first:pt-0 sm:gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#0051d4] text-white shadow-lg sm:h-[52px] sm:w-[52px]">
                    {feature.iconType === "image" ? (
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="h-7 w-7 sm:h-8 sm:w-8"
                      />
                    ) : (
                      <FeatureIcon name={feature.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                  </span>
                  <span className="text-[16px] font-bold text-white sm:text-[18px]">
                    {feature.title}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-5 max-w-[500px] overflow-hidden rounded-[12px] border border-[#1b4a9a] bg-[#051c50] p-5 shadow-xl sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#20b2ff]/10 to-transparent" />
              <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#20b2ff] text-white shadow-[0_0_15px_rgba(32,178,255,0.4)] sm:h-[62px] sm:w-[62px]">
                  {whyChoose.highlightCard.iconType === "image" ? (
                    <Image
                      src={whyChoose.highlightCard.icon}
                      alt={whyChoose.highlightCard.title}
                      width={40}
                      height={40}
                      className="h-9 w-9 sm:h-10 sm:w-10"
                    />
                  ) : (
                    <FeatureIcon name={whyChoose.highlightCard.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                  )}
                </span>
                <div className="pt-0.5">
                  <h3 className="text-[17px] font-bold text-white sm:text-[19px]">
                    {whyChoose.highlightCard.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                    {whyChoose.highlightCard.text}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mobile plumber */}
        <div className="relative z-10 mt-8 flex w-full justify-center lg:hidden">
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

        {/* Mobile stats — in flow under image */}
        <div className="relative z-20 mt-6 grid grid-cols-2 gap-3 rounded-xl bg-white p-4 sm:grid-cols-4 lg:hidden">
          {whyChoose.stats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-center justify-center px-1 py-2 text-center"
            >
              <FeatureIcon
                name={stat.icon}
                className="mb-1.5 h-6 w-6 text-[#002870]"
              />
              <p className="text-[11px] font-bold leading-[1.3] text-[#002870]">
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
    </section>
  );
}
