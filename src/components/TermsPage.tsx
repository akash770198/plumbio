import Link from "next/link";
import { site } from "@/data";
import { Reveal } from "./Reveal";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function HelpIcon({ name }: { name: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5 fill-none stroke-current",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
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
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M3 11a9 9 0 0118 0v3a3 3 0 01-3 3h-1a2 2 0 01-2-2v-2a2 2 0 012-2h2M5 14H4a2 2 0 01-2-2v-1a9 9 0 0118 0" />
        </svg>
      );
  }
}

export function TermsPage() {
  const { termsPage: data } = site;

  return (
    <section className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-[#e6ebf2] bg-white px-5 py-5 sm:flex-row sm:items-center sm:gap-0 sm:px-7 sm:py-6">
            <div className="flex items-center gap-3 sm:pr-8">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eef6ff] text-[#1e6fd0]">
                <CalendarIcon className="h-5 w-5" />
              </span>
              <p className="section-desc">
                {data.effectiveDateLabel}{" "}
                <span className="font-bold text-brand">{data.effectiveDate}</span>
              </p>
            </div>

            <span
              aria-hidden
              className="hidden h-10 w-px bg-[#d9e0ea] sm:mx-2 sm:block lg:mx-6"
            />

            <p className="section-desc sm:pl-6">
              {data.lastUpdatedLabel}{" "}
              <span className="font-bold text-brand">{data.lastUpdated}</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          {data.sections.map((section, index) => (
            <Reveal key={section.title} delay={Math.min(index * 40, 200)}>
              <article
                className={
                  index < data.sections.length - 1
                    ? "border-b border-[#e8edf5] pb-7 mb-7"
                    : "pb-2"
                }
              >
                <h2 className="section-title text-[#1e6fd0]">{section.title}</h2>
                <p className="section-desc mt-3 max-w-4xl">{section.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl bg-[#eaf4ff] px-5 py-7 sm:px-8 sm:py-8">
            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
              {data.helpBar.items.map((item) => {
                const content = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#0a3d9c] text-white shadow-[0_8px_18px_rgba(10,61,156,0.22)]">
                      <HelpIcon name={item.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="section-title text-[clamp(18px,1.6vw,22px)]">
                        {item.title}
                      </p>
                      <p className="section-desc mt-1">{item.text}</p>
                    </div>
                  </>
                );

                const className =
                  "flex items-start gap-3.5 transition hover:opacity-90";

                if (item.href.startsWith("tel:") || item.href.startsWith("mailto:")) {
                  return (
                    <a key={item.title} href={item.href} className={className}>
                      {content}
                    </a>
                  );
                }

                return (
                  <Link key={item.title} href={item.href} className={className}>
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
