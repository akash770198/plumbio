import { About } from "@/components/About";
import { AboutCompany } from "@/components/AboutCompany";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { ProcessSection } from "@/components/ProcessSection";
import { TeamSection } from "@/components/TeamSection";
import { WhyChoose } from "@/components/WhyChoose";
import { site } from "@/data";

function SectionDivider() {
  return (
    <div aria-hidden className="section-divider">
      <span className="section-divider-line" />
    </div>
  );
}

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
        <About className="bg-white pt-[3.25rem] pb-0 lg:pt-[3.75rem]" />
        <SectionDivider />
        <ProcessSection />
        <SectionDivider />
        <WhyChoose />
        <SectionDivider />
        <AboutCompany contentClassName="shell pt-0 pb-[3.25rem] lg:pb-[3.75rem]" />
        <SectionDivider />
        <TeamSection className="relative overflow-hidden bg-white pt-0 pb-[3.25rem] lg:pb-[3.75rem]" />
      </main>
    </>
  );
}
