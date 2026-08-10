"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data";
import { Reveal } from "./Reveal";

function FeatureIcon({ name }: { name: string }) {
  const className = "h-6 w-6 fill-none stroke-current";
  if (name === "quality") {
    return (
      <svg viewBox="0 0 24 24" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M3 8l4-3h10l4 3" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l7 3v6c0 4.4-2.8 8.2-7 9-4.2-.8-7-4.6-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.9v2a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 013.1 4.2 2 2 0 015 2h2a2 2 0 012 1.7c.1.8.3 1.5.6 2.2a2 2 0 01-.5 2.1L8 9.1a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.7.3 1.4.5 2.2.6A2 2 0 0122 16.9z" />
    </svg>
  );
}

export function ProjectsGallery() {
  const { projectsGallery: data } = site;
  const [activeFilter, setActiveFilter] = useState(data.filters[0]);

  const filtered =
    activeFilter === "All Projects"
      ? data.items
      : data.items.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-white pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-12 bg-[#1e6fd0]" />
              <p className="section-label">{data.label}</p>
              <span className="h-[2px] w-12 bg-[#1e6fd0]" />
            </div>

            <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] font-extrabold leading-tight text-[#0a1f5c]">
              {data.titleBefore}{" "}
              <span className="text-[#1e6fd0]">{data.titleAccent}</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-[#666]">
              {data.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {data.filters.map((filter) => {
              const active = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-md border px-4 py-2.5 text-[14px] font-semibold transition ${
                    active
                      ? "border-[#0a3d9c] bg-[#0a3d9c] text-white"
                      : "border-[#c5d7f0] bg-white text-[#1e6fd0] hover:border-[#1e6fd0] hover:bg-[#f3f8ff]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item, index) => (
            <Reveal key={`${item.image}-${item.category}-${index}`} delay={(index % 4) * 40}>
              <article className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#eef2f7]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-[15px] text-[#666]">
            No projects found in this category.
          </p>
        )}

        <Reveal delay={100}>
          <div className="mt-12 rounded-2xl bg-[#0a3d9c] px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-6">
              <div className="grid flex-1 gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-6">
                {data.banner.features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3.5 text-white">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                      <FeatureIcon name={feature.icon} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[16px] font-normal leading-snug text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-[1.55] text-white/85">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={data.banner.buttonHref}
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-md bg-white px-6 py-3.5 text-[14px] font-bold text-[#0a3d9c] transition hover:bg-[#eef4ff] lg:self-start"
              >
                {data.banner.buttonLabel}
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
        </Reveal>
      </div>
    </section>
  );
}
