"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { testimonials } = site;
  const items = testimonials.items;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);
  const t = items[current];

  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-white lg:h-[580px]">
      {/* Right-side bands: top blue / middle white / bottom blue */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="relative h-[72px] w-full bg-[#0458d6] lg:h-[80px]">
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>
        <div className="w-full flex-1 bg-white" />
        <div className="h-[64px] w-full bg-[#0458d6] lg:h-[72px]" />
      </div>

      {/*
        Left column — ONE straight diagonal clip (no bend).
        Top white holds the apostrophes; image fills the middle; bottom white closes the frame.
      */}
      <div
        className="absolute inset-0 z-10 flex flex-col"
        style={{ clipPath: "polygon(0 0, 34% 0, 48% 100%, 0 100%)" }}
      >
        <div className="h-[72px] w-full bg-white lg:h-[80px]" />

        <div className="relative min-h-0 w-[62%] max-w-[760px] flex-1">
          <Image
            src={testimonials.image}
            alt={testimonials.imageAlt}
            fill
            sizes="50vw"
            className="object-cover object-[70%_36%]"
            priority
          />
        </div>

        <div className="relative h-[64px] w-full bg-white lg:h-[72px]">
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage: "radial-gradient(circle, #c7d4ea 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>
      </div>

      {/* Right content — compacted to fit shorter section */}
      <div className="absolute inset-y-0 right-0 z-30 flex w-[58%] flex-col justify-center pr-[var(--page-gutter)] pl-8 pt-[88px] pb-[80px] lg:w-[50%] lg:pl-12 xl:w-[48%]">
        <Reveal>
          {/* Apostrophes above the testimonial text block */}
          <span
            aria-hidden
            className="mb-1 block select-none font-serif text-[56px] font-bold leading-none tracking-[-0.08em] text-[#0458d6] lg:text-[64px]"
          >
            ””
          </span>

          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#0051d4]" />
            <p className="section-label">
              {testimonials.label.toUpperCase()}
            </p>
          </div>

          <h2 className="section-title mt-3">
            {testimonials.titleLines[0]}
            <br />
            {testimonials.titleLines[1]}
          </h2>

          <div className="mt-4 flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-[#e84d1c]">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <p className="mt-4 max-w-[480px] text-[14.5px] leading-[1.65] text-[#555] line-clamp-4 lg:text-[15px]">
            {t.review}
          </p>

          <p className="mt-4 text-[14px] text-[#333]">
            <span className="font-bold">- {t.name},</span>{" "}
            <span className="text-[#888]">{t.designation}</span>
          </p>

          <div className="mt-5 flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-sm transition-all ${
                  i === current ? "w-4 bg-[#0051d4]" : "w-2.5 bg-[#c5d0e6]"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {/* Arrows — above bottom blue bar */}
      <div className="absolute bottom-[80px] right-[var(--page-gutter)] z-30 flex items-center gap-3 lg:bottom-[88px]">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c5d0e6] bg-white text-[#0a1f5c] shadow-sm transition-all hover:border-[#0051d4] hover:bg-[#0051d4] hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-none stroke-current"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c5d0e6] bg-white text-[#0a1f5c] shadow-sm transition-all hover:border-[#0051d4] hover:bg-[#0051d4] hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-none stroke-current"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
