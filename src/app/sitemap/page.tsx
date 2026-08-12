import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { SitemapPage } from "@/components/SitemapPage";
import { site } from "@/data";

export default function Page() {
  const { sitemapBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={sitemapBanner.title}
          breadcrumbs={sitemapBanner.breadcrumbs}
          backgroundImage={sitemapBanner.backgroundImage}
          backgroundImageAlt={sitemapBanner.backgroundImageAlt}
        />
        <SitemapPage />
      </main>
    </>
  );
}
