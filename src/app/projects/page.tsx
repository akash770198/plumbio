import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { site } from "@/data";

export default function Page() {
  const { projectsBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={projectsBanner.title}
          breadcrumbs={projectsBanner.breadcrumbs}
          backgroundImage={projectsBanner.backgroundImage}
          backgroundImageAlt={projectsBanner.backgroundImageAlt}
        />
        <ProjectsGallery />
      </main>
    </>
  );
}
