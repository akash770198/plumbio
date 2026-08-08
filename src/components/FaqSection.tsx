"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data";
import { Reveal } from "./Reveal";

export function FaqSection() {
  const { faq } = site;
  const [openIndex, setOpenIndex] = useState<number | null>(
    faq.items.findIndex((item) => item.defaultOpen) !== -1
      ? faq.items.findIndex((item) => item.defaultOpen)
      : 0
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-y relative overflow-hidden bg-white">
      <div className="shell flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
        
        {/* Left Column (Text & Button) */}
        <div className="relative w-full lg:w-[45%] xl:w-[40%]">
          {/* Huge watermark text behind */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 left-0 select-none text-[clamp(100px,12vw,160px)] font-black leading-none tracking-tighter text-[#f4f7fb]"
          >
            {faq.backgroundTitle}
          </div>

          <div className="relative z-10 pt-4">
            <Reveal>
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#2d95ff]" />
                <p className="text-[13px] font-bold uppercase tracking-wider text-[#2d95ff]">
                  {faq.label.toUpperCase()}
                </p>
              </div>

              {/* Title */}
              <h2 className="mt-5 text-[clamp(32px,3.5vw,46px)] font-extrabold leading-[1.2] text-[#0a1f5c]">
                {faq.titleLines[0]}
                <br />
                {faq.titleLines[1]}
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-[90%] text-[16px] leading-[1.8] text-[#6b7a9a]">
                {faq.description}
              </p>

              {/* Button */}
              <div className="mt-10">
                <Link
                  href={faq.button.href}
                  className="inline-block border-2 border-[#0a1f5c] px-8 py-4 text-[15px] font-bold text-[#0a1f5c] transition-all hover:bg-[#0a1f5c] hover:text-white"
                >
                  {faq.button.label}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div className="w-full flex-1 lg:pt-4">
          <Reveal>
            <div className="flex flex-col gap-4">
              {faq.items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="flex flex-col">
                    {/* Header Button */}
                    <button
                      onClick={() => toggle(index)}
                      className="flex w-full items-center justify-between bg-[#f8f9fc] px-8 py-6 text-left transition-colors hover:bg-[#f0f3f9]"
                    >
                      <span className="text-[17px] font-bold text-[#0a1f5c]">
                        {item.question}
                      </span>
                      
                      {/* Plus/Minus Icon */}
                      <div className="ml-6 flex items-center gap-4">
                        <span className="h-6 w-[2px] bg-[#2d95ff] opacity-40" />
                        <span className="flex h-5 w-5 items-center justify-center text-[24px] font-light text-[#0a1f5c] leading-none pb-1">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-8 pb-6 pt-5">
                        <p className="text-[16px] leading-[1.8] text-[#6b7a9a]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
        
      </div>
    </section>
  );
}
