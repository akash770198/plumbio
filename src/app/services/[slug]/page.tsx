import { notFound } from "next/navigation";
import { CommercialServices } from "@/components/CommercialServices";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { ServiceDetail } from "@/components/ServiceDetail";
import { site } from "@/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.servicesCatalog.items.map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = site.servicesCatalog.items.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title, href: service.href },
  ];

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={service.title}
          breadcrumbs={breadcrumbs}
          backgroundImage={site.servicesBanner.backgroundImage}
          backgroundImageAlt={service.imageAlt}
        />
        {service.pageType === "commercial" ? (
          <CommercialServices className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]" />
        ) : (
          <ServiceDetail
            service={service}
            className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]"
          />
        )}
      </main>
    </>
  );
}
