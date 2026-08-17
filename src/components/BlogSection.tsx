import Image from "next/image";
import Link from "next/link";
import { site, SectionProps, ServicesBlogData } from "@/data";
import { AccentTitle } from "./AccentTitle";
import { Reveal } from "./Reveal";

type BlogItem = (typeof site.blog.items)[number];

export function BlogSection({
  className,
  items,
  showButton,
  data,
}: {
  items?: BlogItem[];
  showButton?: boolean;
} & SectionProps<ServicesBlogData> = {}) {
  const blog = data?.blog || site.blog;
  const blogItems = items ?? blog.items;
  const shouldShowButton = showButton ?? !items;

  return (
    <section
      className={
        className ??
        "relative overflow-hidden bg-[#fafbfc] pt-0 pb-[3.25rem] lg:pb-[3.75rem]"
      }
    >
      {/* ── BACKGROUND WATERMARKS ── */}
      {/* Faucet Outline (Left) */}
      <div className="pointer-events-none absolute left-[-5%] top-[10%] opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="h-[400px] w-[400px] fill-current text-[#0051d4]">
          {/* A simple placeholder faucet shape */}
          <path d="M50 150v-80c0-20 15-35 35-35h50c20 0 35 15 35 35v20h-30v-20c0-5-3-10-8-10H85c-5 0-8 5-8 10v80H50z" />
          <circle cx="65" cy="20" r="15" />
          <path d="M150 90v40c0 10-20 15-20 30 0 15 20 15 20 15s20 0 20-15c0-15-20-20-20-30V90h-20z" />
        </svg>
      </div>

      {/* Wrench Outline (Right) */}
      <div className="pointer-events-none absolute right-[-5%] top-[10%] opacity-[0.03] rotate-45">
        <svg viewBox="0 0 200 200" className="h-[400px] w-[400px] fill-current text-[#0051d4]">
          {/* A simple placeholder pipe wrench shape */}
          <path d="M30 90h140v20H30z" />
          <path d="M150 70h30v60h-30z" />
          <path d="M20 70h40v60H20z" />
          <circle cx="170" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="10" />
        </svg>
      </div>

      <div className="shell relative z-10">
        
        {/* ── HEADER ── */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* Label */}
            <div className="flex items-center justify-center gap-3">
              <span className="flex items-center justify-center text-[#0051d4]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </span>
              <p className="section-label">
                {blog.label}
              </p>
            </div>

            {/* Title */}
            <AccentTitle
              className="mt-4"
              before={blog.titleBefore}
              accent={blog.titleAccent}
            />

            <p className="section-desc mx-auto mt-5 max-w-2xl">
              {blog.description}
            </p>

            {/* Decorative Divider */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-[2px] w-12 bg-[#0051d4]" />
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-[#0051d4]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
              </svg>
              <span className="h-[2px] w-12 bg-[#0051d4]" />
            </div>
          </div>
        </Reveal>

        {/* ── BLOG CARDS GRID ── */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogItems.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg">
                
                {/* Image Container */}
                <div className="relative h-[220px] w-full overflow-hidden p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index === 0}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-7 pb-8 pt-3">
                  
                  {/* Meta (Category & Date) */}
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="section-label rounded bg-[#0051d4] px-3 py-1 text-[11px] tracking-[0.1em] text-white">
                      {item.category}
                    </span>
                    <span className="section-desc flex items-center gap-2 font-bold text-[#6b7a9a]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <Link
                    href={item.link}
                    className="section-title mb-4 block text-[clamp(18px,1.6vw,20px)] transition-colors hover:text-[#0051d4]"
                  >
                    {item.title}
                  </Link>

                  {/* Excerpt */}
                  <p className="section-desc mb-6">
                    {item.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-auto">
                    <Link
                      href={item.link}
                      className="section-desc inline-flex items-center gap-2 font-bold text-[#0051d4] transition-opacity hover:opacity-80"
                    >
                      Read More
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current transition-transform group-hover:translate-x-1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {shouldShowButton && blog.button ? (
          <Reveal delay={200}>
            <div className="mt-12 flex justify-center">
              <Link
                href={blog.button.href}
                className="inline-flex items-center gap-3 rounded-lg bg-[#0051d4] px-7 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#0041b0] hover:gap-4"
              >
                {blog.button.label}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
