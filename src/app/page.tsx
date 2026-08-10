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

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="block">
        <Hero />
        <TrustedBy />
        <About />
        <div aria-hidden className="section-divider">
          <span className="section-divider-line" />
        </div>
        <ServicesSection />
        <WhyChoose/>
        <div aria-hidden className="section-divider">
          <span className="section-divider-line" />
        </div>
        <ProcessSection/>
        <AboutCompany/>
        <Testimonials/>
        <TeamSection/>
        <div aria-hidden className="section-divider">
          <span className="section-divider-line" />
        </div>
        <AwardsSection/>
        <div aria-hidden className="section-divider">
          <span className="section-divider-line" />
        </div>
        <FaqSection/>
        <div aria-hidden className="section-divider">
          <span className="section-divider-line" />
        </div>
        <BlogSection/>
        <CtaSection/>
      </main>
    </>
  );
}
