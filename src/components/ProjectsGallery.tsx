"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "All Projects"
      ? data.items
      : data.items.filter((item) => item.category === activeFilter);

  const currentItem = selectedIndex !== null ? filtered[selectedIndex] ?? null : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    if (filtered.length === 0) {
      setSelectedIndex(null);
      return;
    }

    if (selectedIndex >= filtered.length) {
      setSelectedIndex(filtered.length - 1);
    }
  }, [filtered.length, selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) => {
          if (prev === null) return filtered.length > 0 ? filtered.length - 1 : null;
          return prev === 0 ? filtered.length - 1 : prev - 1;
        });
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => {
          if (prev === null) return 0;
          return prev === filtered.length - 1 ? 0 : prev + 1;
        });
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filtered.length, selectedIndex]);

  const showPrevious = () => {
    if (selectedIndex === null || filtered.length === 0) return;
    setSelectedIndex((prev) => (prev === 0 ? filtered.length - 1 : (prev ?? 0) - 1));
  };

  const showNext = () => {
    if (selectedIndex === null || filtered.length === 0) return;
    setSelectedIndex((prev) => (prev === filtered.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-12 bg-[#1e6fd0]" />
              <p className="section-label">{data.label}</p>
              <span className="h-[2px] w-12 bg-[#1e6fd0]" />
            </div>

            <h2 className="section-title mt-4">
              {data.titleBefore}{" "}
              <span className="text-[#1e6fd0]">{data.titleAccent}</span>
            </h2>

            <p className="section-desc mx-auto mt-4 max-w-2xl">
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
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative block w-full overflow-hidden rounded-xl bg-[#eef2f7] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e6fd0]"
                aria-label={`Open project image ${index + 1}`}
              >
                <article className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-3 py-3 sm:px-4">
                    <span className="block text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[11px]">
                      {item.category}
                    </span>
                  </div>
                </article>
              </button>
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

      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4 lg:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative h-full w-full max-w-[100vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-[#0a3d9c] shadow-lg transition hover:bg-white"
              aria-label="Close project image"
            >
              ×
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#0a3d9c] shadow-lg transition hover:bg-white"
              aria-label="Previous project image"
            >
              ←
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#0a3d9c] shadow-lg transition hover:bg-white"
              aria-label="Next project image"
            >
              →
            </button>

            <div className="flex h-full w-full items-center justify-center">
              <div className="relative h-[92vh] w-[95vw] overflow-hidden rounded-2xl bg-[#050b16] shadow-2xl">
                <Image
                  src={currentItem.image}
                  alt={currentItem.alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 py-4 sm:px-6 sm:py-5">
                  <p className="text-left text-[11px] font-semibold uppercase tracking-[0.28em] text-white sm:text-[12px] lg:text-[13px]">
                    {currentItem.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
