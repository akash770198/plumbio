"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Hero() {
  const { hero } = site;

  return (
    <section className="relative h-[clamp(420px,36vw,520px)] w-full overflow-hidden bg-brand-deep max-sm:h-[470px]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="animate-hero-zoom object-cover object-[left_15%]"
      />
      <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_33%,rgba(3,44,104,.7)_42%,rgba(4,55,124,.85)_100%)]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 md:pl-[35%] md:pr-12">
          <Reveal>
            <h1 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.18] tracking-[-0.015em] text-white">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-white/95">
              {hero.lead}
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
          aria-label="Previous slide"
          className="grid h-[62px] w-[66px] place-items-center border-r border-line bg-white text-[22px] text-brand transition hover:bg-brand hover:text-white"
        >
          <Icon name="arrowLeft" />
        </button>
        <button
          aria-label="Next slide"
          className="grid h-[62px] w-[66px] place-items-center bg-white text-[22px] text-brand transition hover:bg-brand hover:text-white"
        >
          <Icon name="arrowRight" />
        </button>
      </div>
    </section>
  );
}
