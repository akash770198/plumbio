import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";
import { Reveal } from "./Reveal";

export function TeamSection({ className }: { className?: string }) {
  const { team } = site;

  return (
    <section
      className={
        className ??
        "relative overflow-hidden bg-white pt-[3.25rem] pb-0 lg:pt-[3.75rem]"
      }
    >

      {/* Large watermark text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(80px,12vw,160px)] font-extrabold leading-none tracking-tight text-[#f0f2f7]"
      >
        {team.backgroundTitle}
      </div>

      {/* Subtle dot pattern — bottom left */}
      <div
        className="pointer-events-none absolute bottom-10 left-4 h-40 w-40 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #c7d4ea 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="shell relative">

        {/* Heading */}
        <Reveal>
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#0051d4]" />
              <p className="section-label">{team.label.toUpperCase()}</p>
            </div>
            <h2 className="mt-3 text-[clamp(26px,3vw,40px)] font-extrabold text-[#0a1f5c]">
              {team.title}
            </h2>
          </div>
        </Reveal>

        {/* Team cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <div className="group overflow-hidden rounded-xl border border-[#e8edf5] bg-white shadow-sm transition-shadow hover:shadow-md">

                {/* Photo area — light gray bg */}
                <div className="relative h-[280px] w-full overflow-hidden bg-[#f0f2f6]">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Info */}
                <div className="px-5 py-5">
                  <h3 className="text-[18px] font-extrabold text-[#0a1f5c]">{member.name}</h3>
                  <div className="my-2 h-[2px] w-8 rounded-full bg-[#0051d4]" />
                  <p className="text-[14px] text-[#6b7a9a]">{member.designation}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Team button */}
        <Reveal delay={200}>
          <div className="mt-10">
            <Link
              href={team.button.href}
              className="inline-flex items-center gap-3 rounded-lg bg-[#0051d4] px-7 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#0041b0] hover:gap-4"
            >
              {team.button.label}
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
          </div>
        </Reveal>

      </div>
    </section>
  );
}
