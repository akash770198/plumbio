import Image from "next/image";
import { site } from "@/data";
import { BadgeIcon, Icon, VerifiedIcon } from "./Icon";
import { Reveal } from "./Reveal";

export function About() {
  const { about } = site;

  return (
    <section className="bg-white pt-8 pb-16 lg:pt-10 lg:pb-20">
      <div className="shell">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.88fr_1.08fr_1fr]">

          {/* ── Left: Copy ── */}
          <Reveal className="flex h-full flex-col justify-between lg:py-1 lg:pr-2">
            {/* label */}
            <p className="font-sans text-[14px] font-bold uppercase tracking-[0.12em] text-brand">
              {about.label}
            </p>

            {/* heading */}
            <h2 className="mt-3 font-sans text-[clamp(26px,2.6vw,36px)] font-bold leading-[1.22] tracking-[-0.01em] text-brand">
              {about.titleLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h2>

            {/* body */}
            <p className="mt-4 font-sans text-[clamp(15.5px,1.2vw,17px)] font-normal leading-[1.65] text-[#555]">
              {about.text}
            </p>

            {/* checklist */}
            <ul className="mt-4 grid gap-2">
              {about.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 font-sans text-[clamp(15px,1.1vw,16px)] font-medium text-brand">
                  <Icon name="check" className="h-[16px] w-[16px] shrink-0 text-brand" />
                  {point}
                </li>
              ))}
            </ul>

            {/* signature */}
            <div className="mt-6 flex items-center gap-4">
              <span className="font-script text-[40px] leading-none text-[#222]">
                {about.signature.script}
              </span>
              <span className="h-[44px] w-px bg-[#ddd]" />
              <span>
                <span className="block text-[15px] font-bold text-[#111]">{about.signature.name}</span>
                <span className="block text-[13px] text-[#888]">{about.signature.role}</span>
              </span>
            </div>
          </Reveal>

          {/* ── Middle: Photo ── */}
          <Reveal delay={100} className="relative min-h-[440px] overflow-hidden rounded-[8px] lg:aspect-[0.86] lg:min-h-0">
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-center"
            />
          </Reveal>

          {/* ── Right: Feature Cards ── */}
          <Reveal delay={200} className="grid grid-rows-3 gap-1.5">
            {about.cards.map((card) => (
              <article
                key={card.title}
                className="flex items-center gap-5 rounded-[4px] bg-brand px-5 py-5 lg:px-6"
              >
                {/* icon circle */}
                <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-white text-brand">
                  {card.icon === "shield" ? (
                    <VerifiedIcon className="h-[30px] w-[30px]" />
                  ) : card.icon === "badge" ? (
                    <BadgeIcon className="h-[30px] w-[30px]" />
                  ) : (
                    <Icon name={card.icon} className="h-[30px] w-[30px]" />
                  )}
                </span>
                <div>
                  <h3 className="text-[18px] font-extrabold text-white">{card.title}</h3>
                  <p className="mt-1 text-[15px] font-medium leading-[1.5] text-white/90">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </Reveal>

        </div>
      </div>
    </section>
  );
}
