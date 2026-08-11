import Image from "next/image";
import { site } from "@/data";
import { Reveal } from "./Reveal";

const ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

export function AwardsSection({ className }: { className?: string }) {
  const { awards } = site;

  return (
    <section className={className ?? "bg-[#fbfcff] pt-0 pb-0"}>
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* Label */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-6 bg-[#0051d4]" />
              <p className="section-label">
                {awards.label}
              </p>
              <span className="h-[2px] w-6 bg-[#0051d4]" />
            </div>

            {/* Title */}
            <h2 className="mt-5 text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.2] text-[#0a1f5c]">
              {awards.title.normal}{" "}
              <span className="text-[#0051d4]">{awards.title.highlight}</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.8] text-[#555]">
              {awards.description}
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.items.map((item, index) => {
            const isBlue = item.accent === "blue";
            const accentColor = isBlue ? "#0051d4" : "#e84d1c";
            const bgColor = isBlue ? "#f0f5fc" : "#fdf0ec";
            const Icon = ICONS[item.icon as keyof typeof ICONS];

            return (
              <Reveal key={item.title} delay={index * 100}>
                <div className="flex h-full flex-col items-center rounded-xl border border-[#eef2f9] bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                  
                  {/* Logo Image */}
                  <div className="relative mb-4 flex h-[160px] w-full items-end justify-center pb-2">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={190}
                      height={190}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  {/* Little Circle Icon */}
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: bgColor, color: accentColor }}
                  >
                    {Icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-2 text-[18px] font-bold text-[#0a1f5c]">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-[14px] leading-relaxed text-[#6b7a9a]">
                    {item.description}
                  </p>

                  {/* Spacer to push the bottom bar to the very bottom if texts differ in height */}
                  <div className="mt-auto pt-2">
                    <div
                      className="mx-auto h-[3px] w-8 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
