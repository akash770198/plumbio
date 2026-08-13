import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { About } from "@/components/About";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChoose } from "@/components/WhyChoose";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutCompany } from "@/components/AboutCompany";
import { Testimonials } from "@/components/Testimonials";
import { TeamSection } from "@/components/TeamSection";
import { AwardsSection } from "@/components/AwardsSection";
import { FaqSection } from "@/components/FaqSection";
import { BlogSection } from "@/components/BlogSection";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";
import { site } from "@/data";
import { SECTION_LIGHT, SECTION_PAD } from "@/lib/section-styles";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="block">
        <Hero />
        <TrustedBy />
        <About className={`bg-white pt-5 pb-[3.25rem] lg:pt-6 lg:pb-[3.75rem]`} />
        <ServicesSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
        />
        <WhyChoose />
        <ProcessSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
        />
        <AboutCompany />
        <div className={`${SECTION_LIGHT} pt-[3.25rem] lg:pt-[3.75rem]`}>
          <Testimonials />
        </div>
        <TeamSection
          limit={site.team.homeDisplayCount}
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
        />
        <AwardsSection className={`bg-white ${SECTION_PAD}`} />
        <FaqSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
        />
        <BlogSection
          className={`relative overflow-hidden bg-white ${SECTION_PAD}`}
        />
        <CtaSection />
        <ContactSection />
      </main>
    </>
  );
}
