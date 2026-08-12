import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";
import { Reveal } from "./Reveal";

type TeamMember = (typeof site.team.members)[number];

const SOCIAL_ICONS = {
  fb: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  tw: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  ),
  in: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
    </svg>
  ),
};

function CertIcon({ name }: { name: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5 fill-none stroke-current",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "badge":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 13.5L7 22l5-2.5L17 22l-1.5-8.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "hard-hat":
      return (
        <svg {...props}>
          <path d="M2 18h20M4 18V11l8-4 8 4v7M12 7V4" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
  }
}

function ContactIcon({ type }: { type: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5 shrink-0 fill-none stroke-current text-[#1e6fd0]",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "phone":
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.3 1.88.57 2.77a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.89.27 1.81.45 2.77.57A2 2 0 0122 16.92z" />
        </svg>
      );
    case "email":
      return (
        <svg {...props}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );
    case "location":
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
  }
}

function SectionCard({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#e8edf5] bg-white p-6 shadow-[0_8px_28px_rgba(10,31,92,0.05)] sm:p-8 ${className ?? ""}`}
    >
      <h3 className="text-[22px] font-extrabold text-[#0a1f5c]">{title}</h3>
      <span className="mt-3 block h-[3px] w-10 rounded-full bg-[#1e6fd0]" />
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function TeamMemberDetail({ member }: { member: TeamMember }) {
  const { team, topbar } = site;
  const cta = team.detailCta;
  const ctaDescription = cta.description.replace("{name}", member.name.split(" ")[0]);

  const contactItems = [
    { type: "phone", value: member.phone, href: `tel:${member.phone.replace(/\s/g, "")}` },
    { type: "email", value: member.email, href: `mailto:${member.email}` },
    { type: "location", value: member.location },
    { type: "clock", value: member.hours },
  ];

  return (
    <div className="bg-white">
      <section className="pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
        <div className="shell">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f0f2f6]">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl bg-[#0a3d9c] px-4 py-3 text-white shadow-lg">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/15">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" aria-hidden>
                      <circle cx="12" cy="8" r="4" />
                      <path d="M6 20v-1a6 6 0 0112 0v1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[22px] font-extrabold leading-none">{member.yearsExperience}</p>
                    <p className="text-[12px] font-medium text-white/85">Years Experience</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#1e6fd0]" />
                  <p className="section-label">{member.roleLabel}</p>
                </div>
                <h1 className="section-title mt-4">
                  {member.name}
                </h1>
                <p className="section-desc mt-5 max-w-xl">{member.bio}</p>

                <ul className="mt-8 space-y-4">
                  {contactItems.map((item) => (
                    <li key={item.type} className="flex items-center gap-3 text-[15px] text-[#444]">
                      <ContactIcon type={item.type} />
                      {item.href ? (
                        <a href={item.href} className="transition hover:text-[#1e6fd0]">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <p className="text-[15px] font-bold text-[#0a1f5c]">Follow On:</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {topbar.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="grid h-10 w-10 place-items-center rounded-full border border-[#1e6fd0] text-[#1e6fd0] transition hover:bg-[#1e6fd0] hover:text-white"
                      >
                        {SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f9fc] pt-0 pb-[3.25rem] lg:pb-[3.75rem]">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <SectionCard title={`About ${member.name}`}>
                <div className="space-y-4">
                  {member.aboutParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="section-desc">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 border-t border-[#e8edf5] pt-6">
                  <p className="font-[family-name:var(--font-signature)] text-[34px] leading-none text-[#1e6fd0]">
                    {member.name}
                  </p>
                  <p className="mt-2 text-[15px] font-bold capitalize text-[#0a1f5c]">
                    {member.roleLabel.toLowerCase()}
                  </p>
                </div>
              </SectionCard>
            </Reveal>

            <Reveal delay={80}>
              <SectionCard title="Expertise & Skills">
                <div className="space-y-5">
                  {member.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="text-[14px] font-bold text-[#0a1f5c]">{skill.name}</span>
                        <span className="text-[14px] font-bold text-[#1e6fd0]">{skill.percent}%</span>
                      </div>
                      <div className="h-[6px] overflow-hidden rounded-full bg-[#e8edf5]">
                        <div
                          className="h-full rounded-full bg-[#1e6fd0] transition-all duration-700"
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-[3.25rem] lg:pb-[3.75rem]">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <SectionCard title="Experience">
                <div className="relative space-y-8 pl-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-[2px] before:bg-[#1e6fd0]">
                  {member.experience.map((item) => (
                    <div key={`${item.period}-${item.title}`} className="relative">
                      <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-[#1e6fd0]" />
                      <p className="text-[13px] font-bold text-[#1e6fd0]">{item.period}</p>
                      <h4 className="mt-1 text-[16px] font-extrabold text-[#0a1f5c]">{item.title}</h4>
                      <p className="text-[14px] font-bold text-[#0a1f5c]">{item.company}</p>
                      <p className="mt-2 text-[14px] leading-[1.75] text-[#666]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </Reveal>

            <Reveal delay={80}>
              <SectionCard title="Certifications">
                <div className="space-y-4">
                  {member.certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-start gap-4 rounded-xl border border-[#e8edf5] px-4 py-4"
                    >
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eef6ff] text-[#1e6fd0]">
                        <CertIcon name={cert.icon} />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-extrabold text-[#0a1f5c]">{cert.title}</h4>
                        <p className="mt-1 text-[13px] leading-relaxed text-[#666]">{cert.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div
              className="relative mt-8 overflow-hidden rounded-2xl bg-[#0a3d9c] px-5 py-6 sm:px-8 sm:py-7"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.14) 1.1px, transparent 1.2px)",
                backgroundSize: "14px 14px",
                backgroundPosition: "right bottom",
              }}
            >
              <div className="relative z-[1] flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-[#0a3d9c]">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
                    <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1.4 1.4 0 011.5-.34 11.4 11.4 0 003.5.56 1.4 1.4 0 011.4 1.4V20a1.4 1.4 0 01-1.4 1.4A17.4 17.4 0 012.6 4 1.4 1.4 0 014 2.6h3.2A1.4 1.4 0 018.6 4a11.4 11.4 0 00.56 3.5 1.4 1.4 0 01-.34 1.5L6.6 10.8z" />
                  </svg>
                </div>
                <div className="flex-1 text-white">
                  <h3 className="text-[clamp(24px,2.5vw,32px)] font-extrabold leading-tight">
                    {cta.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-white/90">{ctaDescription}</p>
                </div>
                <Link
                  href={cta.phoneHref}
                  className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-[15px] font-bold text-[#0a3d9c] transition hover:bg-[#eef5ff]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                    <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1.4 1.4 0 011.5-.34 11.4 11.4 0 003.5.56 1.4 1.4 0 011.4 1.4V20a1.4 1.4 0 01-1.4 1.4A17.4 17.4 0 012.6 4 1.4 1.4 0 014 2.6h3.2A1.4 1.4 0 018.6 4a11.4 11.4 0 00.56 3.5 1.4 1.4 0 01-.34 1.5L6.6 10.8z" />
                  </svg>
                  {cta.buttonLabel}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-none stroke-current"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
