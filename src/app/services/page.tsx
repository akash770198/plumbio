import { CommercialServices } from "@/components/CommercialServices";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { site } from "@/data";

const servicesPageServices = [
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
  {
    title: "Installation",
    image: "/img/service-1.jpg",
    alt: "Plumber installing a new fixture",
    icon: "M12 2l3 6H9l3-6Zm0 4v4m0 6v2m-4 3h8",
  },
  {
    title: "Repairs",
    image: "/img/service-2.jpg",
    alt: "Technician repairing pipes",
    icon: "M4 20h16M9 4l2.5 5.5L14 4m-1 8h4m-6 4h8",
  },
  {
    title: "24/7 Support",
    image: "/img/service-3.jpg",
    alt: "Emergency plumbing support team",
    icon: "M12 1.5c-5.8 0-10.5 4.7-10.5 10.5S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm0 6v6l4 2",
  },
];

function SectionDivider() {
  return (
    <div aria-hidden className="section-divider">
      <span className="section-divider-line" />
    </div>
  );
}

export default function Page() {
  const { servicesBanner } = site;

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
          services={servicesPageServices}
        />
        <SectionDivider />
        <CommercialServices />
      </main>
    </>
  );
}
