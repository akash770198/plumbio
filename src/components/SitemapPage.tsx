import Link from "next/link";
import { site } from "@/data";
import { Reveal } from "./Reveal";

function ColumnIcon({ name }: { name: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6 fill-none stroke-current",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "services":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "industries":
      return (
        <svg {...props}>
          <path d="M3 21h18M5 21V8l5-3v16M14 21V5l5 2v14M9 10h.01M9 14h.01M17 11h.01M17 15h.01" />
        </svg>
      );
    case "company":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 12h8M8 16h5" />
        </svg>
      );
    case "legal":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9z" />
        </svg>
      );
  }
}

export function SitemapPage() {
  const { sitemapPage: data } = site;

  return (
    <section className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
      <div className="shell">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          {data.columns.map((column, index) => (
            <Reveal key={column.title} delay={index * 60}>
              <div>
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#eef6ff] text-[#1e6fd0]">
                  <ColumnIcon name={column.icon} />
                </div>
                <h2 className="mt-5 text-[18px] font-bold text-[#0a1f5c]">
                  {column.title}
                </h2>
                <span className="mt-3 block h-[3px] w-10 rounded-full bg-[#1e6fd0]" />
                <ul className="mt-5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 border-b border-[#e8edf5] py-3 text-[15px] font-medium text-[#0a1f5c] transition hover:text-[#1e6fd0]"
                      >
                        <span className="text-[#1e6fd0]">›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl bg-[#eef4fb] px-5 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-[#1e6fd0] shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-none stroke-current"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M3 11a9 9 0 0118 0v3a3 3 0 01-3 3h-1a2 2 0 01-2-2v-2a2 2 0 012-2h2M5 14H4a2 2 0 01-2-2v-1a9 9 0 0118 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-[18px] font-bold text-[#0a1f5c]">
                    {data.helpBar.title}
                  </p>
                  <p className="section-desc mt-1">{data.helpBar.text}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:min-w-[200px]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#d9ebff] text-[#1e6fd0]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current"
                    strokeWidth="1.8"
                    aria-hidden
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.3 1.88.57 2.77a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.89.27 1.81.45 2.77.57A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <div>
                  <a
                    href={data.helpBar.phoneHref}
                    className="text-[16px] font-bold text-[#0a1f5c] transition hover:text-[#1e6fd0]"
                  >
                    {data.helpBar.phone}
                  </a>
                  <p className="mt-1 text-[13px] text-[#666]">{data.helpBar.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:min-w-[210px]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#d9ebff] text-[#1e6fd0]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current"
                    strokeWidth="1.8"
                    aria-hidden
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </span>
                <div>
                  <a
                    href={`mailto:${data.helpBar.email}`}
                    className="text-[16px] font-bold text-[#0a1f5c] transition hover:text-[#1e6fd0]"
                  >
                    {data.helpBar.email}
                  </a>
                  <p className="mt-1 text-[13px] text-[#666]">{data.helpBar.emailNote}</p>
                </div>
              </div>

              <Link
                href={data.helpBar.buttonHref}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#1e6fd0] px-6 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#1557a8]"
              >
                {data.helpBar.buttonLabel}
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
  );
}
