import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

interface ServiceItem {
  title: string;
  image: string;
  alt: string;
  icon: string;
}

const defaultServices: ServiceItem[] = [
  {
    title: "Residential",
    image: "/img/service-residential-hd.png",
    alt: "Plumber repairing residential pipework",
    icon: "M4 13h16c0 3.5-3.6 6-8 6s-8-2.5-8-6Zm5 0V9a3 3 0 0 1 6 0v1m-3-6v2m-5 4h10m-5 9v2",
  },
  {
    title: "Commercial",
    image: "/img/service-commercial-hd.png",
    alt: "Commercial kitchen plumbing fixtures",
    icon: "M5 4v8a7 7 0 0 0 14 0V4h-4v8a3 3 0 0 1-6 0V4H5Zm-2 3h4m10 0h4M7 19h3m4 0h3m-8-4 2-2m4 2-2-2",
  },
  {
    title: "Emergency",
    image: "/img/service-emergency-hd.png",
    alt: "Emergency water cleanup",
    icon: "M12 4v5M6 9h12M6 9v4m12-4v4m-6-4v4M3 13h6v5H3v-5Zm12 0h6v5h-6v-5Zm-6 0h6v5H9v-5Zm3 5v3m0 0c-1.2-1.4-2-2.3-2-3.1a2 2 0 1 1 4 0c0 .8-.8 1.7-2 3.1Z",
  },
];

export function ServicesSection({
  className,
  services = defaultServices,
}: {
  className?: string;
  services?: ServiceItem[];
}) {
  return (
    <>
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
            {/* Left: Heading */}
            <Reveal className="lg:pr-2">
              {/* Label */}
              <p className="section-label">
                OUR SERVICES
              </p>

              {/* Title - Same style as About */}
              <h2 className="mt-3 font-sans text-[clamp(26px,2.6vw,36px)] font-bold leading-[1.22] tracking-[-0.01em] text-brand">
                <span className="block">From Leaking Faucet</span>
                <span className="block">to Gushing Pipes</span>
              </h2>
            </Reveal>

            {/* Right: Description (unchanged) */}
            <Reveal delay={80} className="flex flex-col justify-center lg:pr-10 lg:pt-6">
              <p className="max-w-[470px] text-[15px] leading-[1.6] text-[#686b70]">
                While certain plumbing issues, such as a minor toilet clog, can be quickly
                addressed with do-it-yourself methods, most plumbing problems require the
                assistance of a professional.
              </p>

              <span className="mt-7 h-[2px] w-10 bg-[#3ba8df]" />
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3 lg:gap-11">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <article className="group relative aspect-square bg-[#edf2f6] shadow-[0_12px_24px_rgba(6,51,105,0.10)]">
                  {/* Image container with overflow hidden */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>

                  {/* Tag positioned absolutely at the bottom, extending downwards */}
                  <div className="absolute -bottom-[20px] left-0 z-10 flex h-[110px] w-[calc(100%_-_32px)] items-center bg-white pl-[100px] pr-8 shadow-[0_10px_22px_rgba(5,48,102,0.14)]">
                    <span className="absolute -top-[20px] left-[16px] grid h-[90px] w-[72px] place-items-center pt-2 text-white drop-shadow-[0_7px_8px_rgba(0,77,151,0.2)]">
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
                      <p className="mt-2 text-[16px] leading-none text-[#43a3dc]">Services</p>
                    </div>
                    <Link
                      href="/services"
                      aria-label={`View ${service.title} services`}
                      className="absolute right-4 top-4 text-[22px] font-semibold leading-none text-brand"
                    >
                      +
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
