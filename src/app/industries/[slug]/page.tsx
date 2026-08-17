import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { IndustryDetail } from "@/components/IndustryDetail";
import { site } from "@/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.values(site.industryPages).map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const industry = site.industryPages[slug as keyof typeof site.industryPages];

  if (!industry) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: industry.label, href: `/industries/${industry.slug}` },
  ];

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={industry.label}
          breadcrumbs={breadcrumbs}
          backgroundImage={site.industriesBanner.backgroundImage}
          backgroundImageAlt={industry.imageAlt}
        />
        <IndustryDetail
          industry={industry}
          className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]"
        />
      </main>
    </>
  );
}
