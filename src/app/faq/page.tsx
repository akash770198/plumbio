import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";

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
        <FaqSection className="relative overflow-hidden bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]" />
      </main>
    </>
  );
}
