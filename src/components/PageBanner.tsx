import Image from "next/image";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage: string;
  backgroundImageAlt: string;
}

export function PageBanner({
  title,
  breadcrumbs,
  backgroundImage,
  backgroundImageAlt,
}: PageBannerProps) {
  return (
    <section className="relative h-[280px] w-full overflow-hidden bg-[#001a4d] lg:h-[320px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a4d]/90 via-[#001a4d]/85 to-[#001a4d]/70" />
      </div>

      {/* Content */}
      <div className="shell relative z-10 flex h-full flex-col justify-center">
        {/* Title */}
        <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] text-white">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="mt-4" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-[16px] text-white/90 lg:text-[18px]">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <Link
                  href={crumb.href}
                  className="transition hover:text-white hover:underline"
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-white/70">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
