import { AwardsSection } from "@/components/AwardsSection";
import { CtaSection } from "@/components/CtaSection";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";

function SectionDivider() {
  return (
    <div aria-hidden className="section-divider">
      <span className="section-divider-line" />
    </div>
  );
}

export default function Page() {
  const { awardsBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={awardsBanner.title}
          breadcrumbs={awardsBanner.breadcrumbs}
          backgroundImage={awardsBanner.backgroundImage}
          backgroundImageAlt={awardsBanner.backgroundImageAlt}
        />
        <AwardsSection className="bg-[#fbfcff] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]" />
        <SectionDivider />
        <CtaSection />
      </main>
    </>
  );
}
