import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";
import { SECTION_LIGHT, SECTION_PAD } from "@/lib/section-styles";

export default function Page() {
  const { faqBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={faqBanner.title}
          breadcrumbs={faqBanner.breadcrumbs}
          backgroundImage={faqBanner.backgroundImage}
          backgroundImageAlt={faqBanner.backgroundImageAlt}
        />
        <FaqSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
        />
      </main>
    </>
  );
}
