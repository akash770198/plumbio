import Image from "next/image";
import Link from "next/link";
import { AccentTitle } from "./AccentTitle";
import { Reveal } from "./Reveal";

const GALLERY_IMAGES = [
  { src: "/img/gallery-1.jpg", alt: "Modern bathroom installation" },
  { src: "/img/gallery-2.jpg", alt: "Industrial pipe systems" },
  { src: "/img/gallery-3.jpg", alt: "Kitchen plumbing fixtures" },
  { src: "/img/gallery-4.jpg", alt: "Boiler and pipe installation" },
];

const SOLUTIONS = [
  {
    label: "Residential",
    sub: "Home Plumbing",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Commercial",
    sub: "Office & Retail",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    label: "Industrial",
    sub: "Heavy Duty Systems",
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  },
  {
    label: "Installation",
    sub: "New Fixtures",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Repairs",
    sub: "Fix & Replace",
    icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
  {
    label: "24/7 Support",
    sub: "Quick Response",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
];

const STATS = [
  {
    value: "25+",
    label: "Years Experience",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    value: "12K+",
    label: "Projects Completed",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    value: "9K+",
    label: "Happy Clients",
    icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
  {
    value: "50+",
    label: "Skilled Plumbers",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    value: "24/7",
    label: "Emergency Service",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export function AboutCompany({
  className,
  contentClassName,
}: {
  className?: string;
  contentClassName?: string;
}) {
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
            <p className="section-label">
              About Our Company
            </p>
            <AccentTitle
              className="mt-3"
              before="Delivering Quality Work"
              accent="That Lasts"
              breakBeforeAccent
            />
            <p className="section-desc mt-4">
              We combine expertise, advanced tools, and a commitment to excellence to deliver
              plumbing solutions you can rely on.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0051d4] px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-[#0041b0] hover:gap-3"
            >
              More About Us
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>

          {/* Right: 4-Panel Image Grid */}
          <Reveal delay={100} className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
            {GALLERY_IMAGES.map((img, i) => (
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
            <p className="section-label">
              We Provide Solutions For
            </p>
            <span className="h-[1.5px] w-14 bg-[#0051d4]" />
          </div>
          <AccentTitle
            as="h3"
            className="mb-8 text-center"
            before="Plumbing Services for"
            accent="Every Industry"
          />

          {/* 6-Col Solutions */}
          <div className="grid grid-cols-2 divide-x divide-[#dde3f0] overflow-hidden rounded-xl border border-[#dde3f0] md:grid-cols-3 lg:grid-cols-6">
            {SOLUTIONS.map((s) => (
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
            {STATS.map((stat) => (
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
