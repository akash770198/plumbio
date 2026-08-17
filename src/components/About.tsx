import Image from "next/image";
import { site, SectionProps, ServicesAboutData } from "@/data";
import { AccentTitleLines } from "./AccentTitle";
import { BadgeIcon, Icon, VerifiedIcon } from "./Icon";
import { Reveal } from "./Reveal";

export function About({ data, className }: SectionProps<ServicesAboutData>) {
  const about = data || site.about;

  return (
    <section className={className ?? "bg-white pt-5 pb-0 lg:pt-6"}>
      <div className="shell">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.88fr_1.08fr_1fr]">

          {/* ── Left: Copy ── */}
          <Reveal className="flex h-full flex-col justify-between lg:py-1 lg:pr-2">
            {/* label */}
            <p className="section-label">
              {about.label}
            </p>

            {/* heading */}
            <AccentTitleLines className="mt-3" lines={about.titleLines} />

            {/* body */}
            <p className="section-desc mt-4">
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
          <Reveal
            delay={100}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:aspect-[3/4] lg:h-full lg:min-h-[440px] lg:aspect-auto"
          >
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-[center_20%] lg:object-center"
              priority
            />
          </Reveal>

          {/* ── Right: Feature Cards ── */}
          <Reveal delay={200} className="grid grid-rows-3 gap-1.5">
            {about.cards.map((card) => (
              <article
                key={card.title}
                className="flex items-center gap-5 rounded-xl bg-brand px-5 py-5 lg:px-6"
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
