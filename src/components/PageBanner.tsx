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
    <section className="w-full bg-white">
      <div className="relative w-full overflow-hidden bg-white">

        {/* LEFT SKY-BLUE FRAME */}
        <div className="absolute left-0 top-0 z-20 h-full w-[36px] bg-[#4aa8ef]" />

        {/* TOP FRAME */}
        <div className="relative h-[40px] w-full bg-white">
          <div
            className="absolute left-0 top-0 h-full w-[58%] bg-[#4aa8ef]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, calc(100% - 35px) 100%, 0 100%)",
            }}
          />
        </div>

        {/* MAIN BANNER */}
        <div className="relative mx-[36px] h-[240px] overflow-hidden">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            priority
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062f6d]/90 via-[#0a3c83]/75 to-[#0c4b9d]/65" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-12 lg:px-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px]">
              {title}
            </h1>

            <nav className="mt-5" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-3 text-sm font-medium text-white sm:text-base">
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

        {/* BOTTOM FRAME */}
        <div className="relative h-[40px] w-full bg-white">
          <div
            className="absolute left-0 top-0 h-full w-[47%] bg-[#4aa8ef]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, calc(100% - 35px) 100%, 0 100%)",
            }}
          />
        </div>

      </div>
    </section>
  );
}