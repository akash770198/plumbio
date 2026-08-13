import Image from "next/image";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

export function PageBanner({
  title,
  breadcrumbs,
  backgroundImage = "/img/banner/Page_banner.jpeg",
  backgroundImageAlt = "Page banner background",
}: PageBannerProps) {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* Mobile: compact full-bleed banner (no stacked frames eating height) */}
      <div className="relative h-[100px] w-full overflow-hidden sm:h-[120px] lg:hidden">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062f6d]/80 via-[#0a3c83]/65 to-[#0c4b9d]/45" />
        <div className="absolute left-0 top-0 z-20 h-full w-2.5 bg-[#4aa8ef]" />

        <div className="relative z-10 flex h-full flex-col justify-center py-3 pl-5 pr-4">
          <h1 className="text-[22px] font-bold leading-tight tracking-[-0.01em] text-white sm:text-[26px]">
            {title}
          </h1>
          <nav className="mt-1" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-white/95 sm:text-[12px]">
              {breadcrumbs.map((crumb, index) => (
                <li
                  key={`${crumb.href}-${crumb.label}`}
                  className="flex items-center gap-1.5"
                >
                  {index < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="text-white transition-colors hover:underline"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="line-clamp-1 text-white">{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && <span>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Desktop: framed banner */}
      <div className="relative hidden w-full overflow-hidden bg-white lg:block">
        <div className="absolute left-0 top-0 z-20 h-full w-[36px] bg-[#4aa8ef]" />

        <div className="relative h-[40px] w-full bg-white">
          <div
            className="absolute left-0 top-0 h-full w-[58%] bg-[#4aa8ef]"
            style={{
              clipPath: "polygon(0 0, 100% 0, calc(100% - 35px) 100%, 0 100%)",
            }}
          />
        </div>

        <div className="relative mx-[36px] h-[240px] overflow-hidden">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062f6d]/90 via-[#0a3c83]/75 to-[#0c4b9d]/65" />

          <div className="relative z-10 flex h-full flex-col justify-center px-12">
            <h1 className="section-title text-white">{title}</h1>
            <nav className="mt-5" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-3 text-base font-medium text-white">
                {breadcrumbs.map((crumb, index) => (
                  <li
                    key={`${crumb.href}-${crumb.label}`}
                    className="flex items-center gap-3"
                  >
                    {index < breadcrumbs.length - 1 ? (
                      <Link
                        href={crumb.href}
                        className="text-white transition-colors hover:underline"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white">{crumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <span className="text-white">/</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        <div className="relative h-[40px] w-full bg-white">
          <div
            className="absolute left-0 top-0 h-full w-[47%] bg-[#4aa8ef]"
            style={{
              clipPath: "polygon(0 0, 100% 0, calc(100% - 35px) 100%, 0 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
