import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { site } from "@/data";

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
          className="relative overflow-hidden bg-white pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]"
          services={services}
        />
      </main>
    </>
  );
}
