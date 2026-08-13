import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { CtaSection } from "@/components/CtaSection";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";
import { SECTION_LIGHT, SECTION_PAD } from "@/lib/section-styles";

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
        <AwardsSection className={`${SECTION_LIGHT} ${SECTION_PAD}`} />
        <CtaSection />
        <ContactSection />
      </main>
    </>
  );
}
