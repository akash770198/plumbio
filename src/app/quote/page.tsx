import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { QuoteFormPage } from "@/components/QuoteFormPage";
import { site } from "@/data";

export default function Page() {
  const { quoteBanner, quotePage } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={quoteBanner.title}
          breadcrumbs={quoteBanner.breadcrumbs}
          backgroundImage={quoteBanner.backgroundImage}
          backgroundImageAlt={quoteBanner.backgroundImageAlt}
        />
        <QuoteFormPage data={quotePage} />
      </main>
    </>
  );
}
