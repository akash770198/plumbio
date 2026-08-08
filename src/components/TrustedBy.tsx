import { site } from "@/data";
import { BrandLogo } from "./BrandLogos";
import { Reveal } from "./Reveal";

export function TrustedBy() {
  const { trustedBy } = site;

  return (
    <section className="bg-white pt-16 pb-8 lg:pt-20 lg:pb-10">
      <div className="shell">
        {/* heading */}
        <Reveal className="flex items-center justify-center gap-5 pb-9">
          <span className="h-[2px] w-[70px] bg-brand" />
          <h2 className="text-[22px] font-bold tracking-wide text-brand">{trustedBy.title}</h2>
          <span className="h-[2px] w-[70px] bg-brand" />
        </Reveal>

        {/* Vector/CSS wordmarks remain sharp at every viewport size. */}
        <Reveal delay={80}>
          <ul className="grid grid-cols-2 items-center gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
            {trustedBy.logos.map((logo, i) => (
              <li
                key={logo.name}
                className={`flex h-[48px] w-full items-center justify-center ${
                  i > 0 ? "lg:border-l lg:border-[#e0e0e0]" : ""
                }`}
              >
                <BrandLogo type={logo.type} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
