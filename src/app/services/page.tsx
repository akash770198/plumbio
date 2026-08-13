import { CtaSection } from "@/components/CtaSection";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { site } from "@/data";
import { SECTION_LIGHT, SECTION_PAD } from "@/lib/section-styles";

export default function Page() {
  const { servicesBanner, servicesCatalog } = site;

  const services = servicesCatalog.items.map((item) => ({
    title: item.title,
    image: item.image,
    alt: item.imageAlt,
    icon: item.icon,
    href: item.href,
    tagline: item.tagline,
  }));

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={servicesBanner.title}
          breadcrumbs={servicesBanner.breadcrumbs}
          backgroundImage={servicesBanner.backgroundImage}
          backgroundImageAlt={servicesBanner.backgroundImageAlt}
        />
        <ServicesSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
          services={services}
        />
        <CtaSection />
        <div aria-hidden className="h-[3.25rem] bg-white lg:h-[3.75rem]" />
      </main>
    </>
  );
}
