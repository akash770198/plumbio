import Link from "next/link";
import Image from "next/image";
import { site } from "@/data";
import { Reveal } from "./Reveal";

export function CtaSection() {
  const { ctaSection } = site;

  return (
    <section className="section-y relative overflow-hidden bg-[#044fc2] text-white">
      {/* ── BACKGROUND LAYER ── */}
      {/* Dot Pattern (Left side) */}
      <div
        className="absolute bottom-0 left-0 w-[40%] h-[70%] opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to top right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top right, black, transparent)",
        }}
      />
      
      {/* Image (Right side) */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[50%]">
        <div className="relative h-full w-full">
          <Image
            src={ctaSection.backgroundImage}
            alt="Plumbing pipes"
            fill
            className="object-cover object-center"
          />
          {/* Gradient Overlay to blend the image smoothly into the blue background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#044fc2] via-[#044fc2]/80 to-transparent" />
          <div className="absolute inset-0 bg-[#044fc2]/30" /> {/* Extra tint if image isn't blue enough */}
        </div>
      </div>

      {/* ── CONTENT LAYER ── */}
      <div className="shell relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal>
          {/* Subtitle */}
          <h3 className="mb-4 text-[18px] font-bold tracking-wide text-white md:text-[20px]">
            {ctaSection.subtitle}
          </h3>

          <h2 className="section-title mb-6 text-white">
            {ctaSection.title}
          </h2>

          <p className="section-desc mb-10 text-white">
            {ctaSection.description}
          </p>

          {/* Phone Number with Lines */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span className="hidden h-[1px] w-12 bg-white/30 sm:block md:w-24" />
            
            <a
              href={ctaSection.phoneHref}
              className="group flex items-center gap-2 transition-transform hover:scale-105 sm:gap-3"
            >
              {/* Phone Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#044fc2] sm:h-10 sm:w-10">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" stroke="currentColor" strokeWidth="0">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </div>
              <span className="text-[22px] font-extrabold sm:text-[28px] md:text-[34px]">
                {ctaSection.phone}
              </span>
            </a>

            <span className="hidden h-[1px] w-12 bg-white/30 sm:block md:w-24" />
          </div>

          {/* Button */}
          <Link
            href={ctaSection.button.href}
            className="inline-flex items-center justify-center gap-3 rounded bg-white px-8 py-4 text-[15px] font-bold text-[#044fc2] shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Calendar Icon */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" stroke="currentColor" strokeWidth="0">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
            </svg>
            {ctaSection.button.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
