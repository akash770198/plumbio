"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Hero() {
  const { hero } = site;
  const slides = hero.slides;
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const slide = slides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative flex min-h-[calc(100vh-114px)] w-full overflow-hidden bg-brand-deep">
      {slides.map((item, i) => (
        <Image
          key={item.image}
          src={item.image}
          alt={item.imageAlt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          } ${
            i === 0
              ? "animate-hero-zoom object-cover object-[left_15%]"
              : "object-cover object-center"
          }`}
        />
      ))}
      {/* Blue filter only on slides 2 & 3 — not the gloves/tools slide */}
      {index > 0 && (
        <>
          <span className="absolute inset-0 bg-[#044194]/22" />
          <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_40%,rgba(3,44,104,.08)_58%,rgba(4,55,124,.14)_100%)]" />
        </>
      )}

      <div className="relative z-10 flex w-full items-center">
        <div className="w-full px-[var(--page-gutter)] md:pr-12">
          <Reveal key={`title-${index}`}>
            <h1 className="text-[clamp(34px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.015em] text-white">
              {slide.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal key={`lead-${index}`} delay={100}>
            <p className="section-desc mt-4 max-w-[420px] text-white/95">
              {slide.lead}
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-6 flex flex-wrap gap-3.5">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-[46px] items-center justify-center rounded-[2px] bg-brand px-7 text-[14px] font-semibold text-white transition hover:bg-brand-deep"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-[46px] items-center justify-center rounded-[2px] border border-white/85 px-7 text-[14px] font-semibold text-white transition hover:bg-white hover:text-brand"
            >
              {hero.secondaryCta.label}
            </Link>
          </Reveal>
        </div>
      </div>

      {/* slide controls */}
      <div className="absolute bottom-0 right-[var(--page-gutter)] z-20 flex">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="grid h-[62px] w-[66px] place-items-center border-r border-line bg-white text-[22px] text-brand transition hover:bg-brand hover:text-white"
        >
          <Icon name="arrowLeft" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="grid h-[62px] w-[66px] place-items-center bg-white text-[22px] text-brand transition hover:bg-brand hover:text-white"
        >
          <Icon name="arrowRight" />
        </button>
      </div>
    </section>
  );
}
