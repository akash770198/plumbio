import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { PricingSection } from "@/components/PricingSection";
import { site } from "@/data";

export default function Page() {
  const { pricingBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={pricingBanner.title}
          breadcrumbs={pricingBanner.breadcrumbs}
          backgroundImage={pricingBanner.backgroundImage}
          backgroundImageAlt={pricingBanner.backgroundImageAlt}
        />
        <PricingSection />
      </main>
    </>
  );
}
