import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";
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
            <h2 className="section-title mt-3">
              {servicesCatalog.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
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
                <article className="relative aspect-square bg-[#edf2f6] shadow-[0_12px_24px_rgba(6,51,105,0.10)] transition-shadow duration-300 group-hover:shadow-[0_16px_32px_rgba(6,51,105,0.16)]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>

                  <div className="absolute -bottom-[20px] left-0 z-10 flex h-[110px] w-[calc(100%_-_32px)] items-center bg-white pl-[100px] pr-8 shadow-[0_10px_22px_rgba(5,48,102,0.14)] transition-shadow duration-300 group-hover:shadow-[0_14px_28px_rgba(5,48,102,0.18)]">
                    <span className="absolute -top-[20px] left-[16px] grid h-[90px] w-[72px] place-items-center pt-2 text-white drop-shadow-[0_7px_8px_rgba(0,77,151,0.2)] transition-transform duration-300 group-hover:-translate-y-0.5">
                      <svg
                        viewBox="0 0 88 108"
                        aria-hidden
                        className="absolute inset-0 h-full w-full fill-[#0870c9]"
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
                    <div>
                      <h3 className="text-[24px] font-bold leading-none text-brand">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[16px] leading-none text-[#43a3dc]">
                        {service.tagline ?? "Services"}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="absolute right-4 top-4 text-[22px] font-semibold leading-none text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110"
                    >
                      →
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
