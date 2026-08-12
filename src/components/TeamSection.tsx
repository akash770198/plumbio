import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";
import { Reveal } from "./Reveal";

type TeamSectionProps = {
  className?: string;
  limit?: number;
  showButton?: boolean;
  linkToDetail?: boolean;
};

export function TeamSection({
  className,
  limit,
  showButton = true,
  linkToDetail = false,
}: TeamSectionProps) {
  const { team } = site;
  const displayCount = limit ?? team.members.length;
  const members = team.members.slice(0, displayCount);

  return (
    <section
      className={
        className ??
        "relative overflow-hidden bg-white pt-[3.25rem] pb-0 lg:pt-[3.75rem]"
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(80px,12vw,160px)] font-extrabold leading-none tracking-tight text-[#f0f2f7]"
      >
        {team.backgroundTitle}
      </div>

      <div
        className="pointer-events-none absolute bottom-10 left-4 h-40 w-40 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #c7d4ea 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="shell relative">
        <Reveal>
          <div className="mb-10 text-center lg:mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-10 bg-[#1e6fd0]" />
              <p className="section-label">{team.label}</p>
              <span className="h-[2px] w-10 bg-[#1e6fd0]" />
            </div>
            <h2 className="section-title mt-4">
              {team.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => {
            const card = (
              <div className="group relative overflow-hidden rounded-xl border border-[#e8edf5] bg-white text-center shadow-[0_8px_28px_rgba(10,31,92,0.06)] transition-shadow hover:shadow-md">
                <div className="relative h-[280px] w-full overflow-hidden bg-[#f0f2f6]">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="relative px-5 py-5">
                  <h3 className="text-[18px] font-extrabold text-[#0a1f5c]">{member.name}</h3>
                  <p className="mt-2 text-[14px] text-[#6b7a9a]">{member.designation}</p>
                  {linkToDetail && (
                    <span
                      aria-hidden
                      className="absolute right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[#eef6ff] text-[#1e6fd0] transition-all duration-300 group-hover:bg-[#1e6fd0] group-hover:text-white group-hover:translate-x-0.5"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-current"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <Reveal key={member.slug} delay={i * 80}>
                {linkToDetail ? (
                  <Link
                    href={`/team/${member.slug}`}
                    className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e6fd0]"
                    aria-label={`View ${member.name} profile`}
                  >
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>

        {showButton && (
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
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
                  aria-hidden
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
