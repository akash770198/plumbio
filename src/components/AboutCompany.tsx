import Image from "next/image";
import Link from "next/link";
import { site, SectionProps } from "@/data";
import { AccentTitle } from "./AccentTitle";
import { Reveal } from "./Reveal";

type CompanyShowcaseData = typeof site.companyShowcase;

export function AboutCompany({
  className,
  contentClassName,
  data,
  isEditable,
  onUpdate
}: SectionProps<CompanyShowcaseData> = {}) {
  const showcaseData = data || site.companyShowcase;
  const {
    label,
    titleBefore,
    titleAccent,
    description,
    buttonLabel,
    buttonHref,
    galleryImages = [],
    solutionsLabel,
    solutionsTitleBefore,
    solutionsTitleAccent,
    solutions = [],
    stats = [],
  } = showcaseData;

  return (
    <section className={className ?? "bg-white"}>
      {/* ── Top: Copy + 4-Panel Image Grid ── */}
      <div
        className={
          contentClassName ??
          "shell pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]"
        }
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          {/* Left: Copy */}
          <Reveal className="flex-shrink-0 lg:w-[340px] xl:w-[380px]">
            {label && (
              <div className="flex items-center gap-3">
                <span className="block h-[2px] w-8 bg-[#3aa0f0]" />
                <p className="section-label">{label}</p>
              </div>
            )}
            <AccentTitle
              className="mt-3"
              before={titleBefore}
              accent={titleAccent}
              breakBeforeAccent
            />
            {description && <p className="section-desc mt-4">{description}</p>}
            {buttonLabel && buttonHref && (
              <Link
                href={buttonHref}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0051d4] px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-[#0041b0] hover:gap-3"
              >
                {buttonLabel}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </Reveal>

          {/* Right: 4-Panel Image Grid */}
          <Reveal delay={100} className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* ── Solutions For Row ── */}
      <div className="bg-white pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
        <Reveal className="shell">
          {/* Title */}
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[1.5px] w-14 bg-[#0051d4]" />
            {solutionsLabel && <p className="section-label">{solutionsLabel}</p>}
            <span className="h-[1.5px] w-14 bg-[#0051d4]" />
          </div>
          <AccentTitle
            as="h3"
            className="mb-8 text-center"
            before={solutionsTitleBefore}
            accent={solutionsTitleAccent}
          />

          {/* 6-Col Solutions */}
          <div className="grid grid-cols-2 divide-x divide-[#dde3f0] overflow-hidden rounded-xl border border-[#dde3f0] md:grid-cols-3 lg:grid-cols-6">
            {solutions.map((s) => (
              <div key={s.label} className="flex items-center gap-3 px-5 py-5 transition-colors hover:bg-[#f5f8ff]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 shrink-0 fill-none stroke-current text-[#0051d4]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={s.icon} />
                </svg>
                <div>
                  <p className="text-[14px] font-bold text-[#0a1f5c]">{s.label}</p>
                  <p className="text-[12px] text-[#6b7a9a]">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Stats Bar ── */}
      <div className="bg-[#0a2a7a] py-8">
        <div className="shell">
          <div className="grid grid-cols-2 divide-x divide-[#ffffff25] md:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 px-6 py-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 fill-none stroke-current text-white/70"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={stat.icon} />
                </svg>
                <p className="text-[clamp(28px,3vw,40px)] font-extrabold leading-none text-white">
                  {stat.value}
                </p>
                <p className="text-center text-[13px] font-medium text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
