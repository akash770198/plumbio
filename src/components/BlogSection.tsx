import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";
import { Reveal } from "./Reveal";

export function BlogSection() {
  const { blog } = site;

  return (
    <section className="section-y relative overflow-hidden bg-[#fafbfc]">
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
              <p className="text-[14px] font-bold uppercase tracking-wider text-[#0051d4]">
                {blog.label}
              </p>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.2] text-[#0a1f5c]">
              <span className="text-black">{blog.title.split(" ").slice(0, 2).join(" ")}</span>{" "}
              {blog.title.split(" ").slice(2).join(" ")}
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.8] text-[#6b7a9a]">
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
          {blog.items.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-sm transition-all hover:shadow-lg">
                
                {/* Image Container */}
                <div className="relative h-[220px] w-full overflow-hidden p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-7 pb-8 pt-3">
                  
                  {/* Meta (Category & Date) */}
                  <div className="mb-4 flex items-center justify-between text-[13px] font-bold">
                    <span className="rounded bg-[#0051d4] px-3 py-1 uppercase text-white">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-2 text-[#6b7a9a]">
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
                  <Link href={item.link} className="mb-4 block text-[20px] font-extrabold leading-[1.3] text-[#0a1f5c] transition-colors hover:text-[#0051d4]">
                    {item.title}
                  </Link>

                  {/* Excerpt */}
                  <p className="mb-6 text-[15px] leading-[1.7] text-[#6b7a9a]">
                    {item.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-auto">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-[15px] font-bold text-[#0051d4] transition-opacity hover:opacity-80"
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
        
      </div>
    </section>
  );
}
