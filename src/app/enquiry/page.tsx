import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { QuoteFormPage } from "@/components/QuoteFormPage";
import { site } from "@/data";

export default function Page() {
  const { enquiryBanner, enquiryPage } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={enquiryBanner.title}
          breadcrumbs={enquiryBanner.breadcrumbs}
          backgroundImage={enquiryBanner.backgroundImage}
          backgroundImageAlt={enquiryBanner.backgroundImageAlt}
        />
        <QuoteFormPage data={enquiryPage} />
      </main>
    </>
  );
}
