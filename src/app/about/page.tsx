import { About } from "@/components/About";
import { AboutCompany } from "@/components/AboutCompany";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { ProcessSection } from "@/components/ProcessSection";
import { TeamSection } from "@/components/TeamSection";
import { WhyChoose } from "@/components/WhyChoose";
import { site } from "@/data";
import { SECTION_LIGHT, SECTION_PAD } from "@/lib/section-styles";

export default function Page() {
  const { aboutBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={aboutBanner.title}
          breadcrumbs={aboutBanner.breadcrumbs}
          backgroundImage={aboutBanner.backgroundImage}
          backgroundImageAlt={aboutBanner.backgroundImageAlt}
        />
        <About className={`bg-white ${SECTION_PAD}`} />
        <ProcessSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
        />
        <WhyChoose />
        <AboutCompany className={SECTION_LIGHT} />
        <TeamSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
        />
      </main>
    </>
  );
}
