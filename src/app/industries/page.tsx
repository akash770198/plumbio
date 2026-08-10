import { Header } from "@/components/Header";
import { IndustriesWeServe } from "@/components/IndustriesWeServe";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";

export default function Page() {
  const { industriesBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={industriesBanner.title}
          breadcrumbs={industriesBanner.breadcrumbs}
          backgroundImage={industriesBanner.backgroundImage}
          backgroundImageAlt={industriesBanner.backgroundImageAlt}
        />
        <IndustriesWeServe />
      </main>
    </>
  );
}
