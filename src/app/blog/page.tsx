import { Header } from "@/components/Header";
import { BlogSection } from "@/components/BlogSection";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";
import { SECTION_LIGHT, SECTION_PAD } from "@/lib/section-styles";

export default function Page() {
  const { blogBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={blogBanner.title}
          breadcrumbs={blogBanner.breadcrumbs}
          backgroundImage={blogBanner.backgroundImage}
          backgroundImageAlt={blogBanner.backgroundImageAlt}
        />
        <BlogSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
          items={site.blog.pageItems}
        />
      </main>
    </>
  );
}
