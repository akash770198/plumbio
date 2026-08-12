import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";
import { AccentTitleLines } from "./AccentTitle";
import { Reveal } from "./Reveal";

type ServiceCard = {
  title: string;
  image: string;
  alt: string;
  icon: string;
  href: string;
  tagline?: string;
};

export function ServicesSection({
  className,
  services,
  limit,
}: {
  className?: string;
  services?: ServiceCard[];
  limit?: number;
}) {
  const { servicesCatalog } = site;
  const catalogItems = servicesCatalog.items.map((item) => ({
    title: item.title,
    image: item.image,
    alt: item.imageAlt,
    icon: item.icon,
    href: item.href,
    tagline: item.tagline,
  }));

  const displayCount = limit ?? servicesCatalog.homeDisplayCount;
  const list = (services ?? catalogItems).slice(0, services ? services.length : displayCount);

  return (
    <section
      className={
        className ??
        "relative overflow-hidden bg-white pt-0 pb-[3.25rem] lg:pb-[3.75rem]"
      }
    >
      <div className="pointer-events-none absolute left-[7%] top-3 select-none text-[clamp(90px,14vw,190px)] font-extrabold leading-none tracking-[-0.07em] text-[#f7f8fa]">
        Services
      </div>

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="lg:pr-2">
            <p className="section-label">{servicesCatalog.label}</p>
            <AccentTitleLines className="mt-3" lines={servicesCatalog.titleLines} />
          </Reveal>

          <Reveal delay={80} className="flex flex-col justify-center lg:pr-10 lg:pt-6">
            <p className="section-desc max-w-[470px]">{servicesCatalog.description}</p>
            <span className="mt-7 h-[2px] w-10 bg-[#3ba8df]" />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 pb-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-11 lg:gap-y-16">
          {list.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <Link
                href={service.href}
                className="group block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e6fd0]"
                aria-label={`View ${service.title} services`}
              >
                <article className="relative aspect-square bg-[#edf2f6] shadow-[0_12px_24px_rgba(6,51,105,0.10)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_40px_rgba(6,51,105,0.20)]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[#062f6d]/0 transition-colors duration-300 group-hover:bg-[#062f6d]/28"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.08em] text-[#0a3d9c] shadow-lg translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                        View Details
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
                      </span>
                    </span>
                  </div>

                  <div className="absolute -bottom-[20px] left-0 z-10 flex h-[110px] w-[calc(100%_-_32px)] items-center bg-white pl-[100px] pr-[72px] shadow-[0_10px_22px_rgba(5,48,102,0.14)] transition-all duration-300 group-hover:shadow-[0_16px_32px_rgba(5,48,102,0.22)]">
                    <span className="absolute -top-[20px] left-[16px] grid h-[90px] w-[72px] place-items-center pt-2 text-white drop-shadow-[0_7px_8px_rgba(0,77,151,0.2)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                      <svg
                        viewBox="0 0 88 108"
                        aria-hidden
                        className="absolute inset-0 h-full w-full fill-[#0870c9] transition-colors duration-300 group-hover:fill-[#0a3d9c]"
                      >
                        <path d="M44 0C38 17 0 38 0 65c0 25 19 43 44 43s44-18 44-43C88 38 50 17 44 0Z" />
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="relative z-10 h-[38px] w-[38px] fill-none stroke-current"
                        strokeWidth="1.35"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={service.icon} />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[24px] font-bold leading-none text-brand transition-colors duration-300 group-hover:text-[#0a3d9c]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[16px] leading-none text-[#43a3dc] transition-colors duration-300 group-hover:text-[#1e6fd0]">
                        {service.tagline ?? "Services"}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#d7e6f7] bg-[#eef6ff] text-[#1e6fd0] transition-all duration-300 group-hover:border-[#1e6fd0] group-hover:bg-[#1e6fd0] group-hover:text-white group-hover:shadow-[0_8px_18px_rgba(30,111,208,0.35)]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-0.5"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
