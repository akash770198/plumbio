"use client";

import Link from "next/link";
import Image from "next/image";
import { AccentTitle } from "./AccentTitle";
import { Reveal } from "./Reveal";
import { site, SectionProps, ServicesTestimonialsData } from "@/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-[15px] leading-none ${
            i < rating ? "text-[#e85d2a]" : "text-[#d5d9e0]"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection({ data, className }: SectionProps<ServicesTestimonialsData> = {}) {
  const testimonialsData = data || site.testimonialsSectionData;
  const { reviews, videoTestimonials } = testimonialsData;
  return (
    <div className="w-full">
      {/* ── Reviews Section ── */}
      <section className="relative overflow-hidden bg-white pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(80px,12vw,160px)] font-extrabold leading-none tracking-tight text-[#f0f2f7]"
        >
          Testimonial
        </div>

        <div className="shell relative">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-[2px] w-10 bg-[#1e6fd0]" />
                <p className="section-label text-[#1e6fd0]">{reviews.label}</p>
                <span className="h-[2px] w-10 bg-[#1e6fd0]" />
              </div>
              <h2 className="section-title mb-4">
                {reviews.titleBefore}{" "}
                <span className="text-[#1e6fd0]">{reviews.titleAccent}</span>
              </h2>
              <p className="section-desc">
                {reviews.description}
              </p>
            </div>
          </Reveal>

          <div className="mb-8 grid gap-8 md:grid-cols-2 lg:gap-10">
            {reviews.items.map((item, index) => (
              <Reveal
                key={`${item.title}-${index}`}
                delay={index * 80}
                as="article"
                className="group"
              >
                <div className="relative h-full rounded-md border-l-[10px] border-t-[10px] border-[#e6e9ef] bg-white px-7 pb-7 pt-8 shadow-[0_8px_28px_rgba(10,31,92,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(10,31,92,0.10)] sm:px-8">
                  {/* Closing double-quote mark — top right */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-3 -top-4 select-none font-serif text-[96px] font-bold leading-none text-[#0a1f5c] sm:right-4 sm:-top-6 sm:text-[120px]"
                  >
                    ”
                  </span>

                  <h3 className="relative z-[1] pr-14 text-[20px] font-extrabold text-[#0a1f5c] sm:text-[22px]">
                    {item.title}
                  </h3>

                  <p className="section-desc relative z-[1] mt-3">
                    {item.review}
                  </p>

                  <p className="relative z-[1] mt-5 text-[15px]">
                    <span className="font-bold text-[#0a1f5c]">
                      - {item.author}
                    </span>
                    <span className="text-[#999]">, {item.role}</span>
                  </p>

                  <div className="relative z-[1] mt-3">
                    <StarRating rating={item.rating} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href={reviews.moreButton.href}
              className="rounded border-2 border-[#1e6fd0] px-10 py-3 text-[15px] font-bold text-[#1e6fd0] transition-all duration-300 hover:bg-[#1e6fd0] hover:text-white"
            >
              {reviews.moreButton.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Video Testimonials Section ── */}
      <section className="relative overflow-hidden bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-8 top-4 select-none whitespace-nowrap text-[clamp(80px,12vw,160px)] font-extrabold leading-none tracking-tight text-[#f0f2f7] lg:left-14"
        >
          Videos
        </div>

        <div className="shell relative">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="section-label mb-4 text-[#1e6fd0]">
                  {videoTestimonials.label}
                </p>
                <AccentTitle
                  className="mb-6"
                  before={videoTestimonials.titleBefore}
                  accent={videoTestimonials.titleAccent}
                />
                <p className="section-desc mb-8">
                  {videoTestimonials.description}
                </p>
                <Link
                  href={videoTestimonials.cta.href}
                  className="inline-block rounded border-2 border-[#1e6fd0] px-8 py-3 text-[15px] font-bold text-[#1e6fd0] transition-all duration-300 hover:bg-[#1e6fd0] hover:text-white"
                >
                  {videoTestimonials.cta.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-4">
                <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={videoTestimonials.mainVideo.thumbnail}
                    alt={videoTestimonials.mainVideo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/40">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
                      <svg
                        className="ml-1 h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
                  {videoTestimonials.videos.map((video, index) => (
                    <div
                      key={index}
                      className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/40">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 sm:h-10 sm:w-10">
                          <svg
                            className="ml-0.5 h-3.5 w-3.5 text-white sm:h-4 sm:w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
