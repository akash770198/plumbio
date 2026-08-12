import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { TermsPage } from "@/components/TermsPage";
import { site } from "@/data";

export default function Page() {
  const { termsBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={termsBanner.title}
          breadcrumbs={termsBanner.breadcrumbs}
          backgroundImage={termsBanner.backgroundImage}
          backgroundImageAlt={termsBanner.backgroundImageAlt}
        />
        <TermsPage />
      </main>
    </>
  );
}
