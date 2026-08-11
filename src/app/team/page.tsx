import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { TeamSection } from "@/components/TeamSection";
import { site } from "@/data";

export default function Page() {
  const { teamBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={teamBanner.title}
          breadcrumbs={teamBanner.breadcrumbs}
          backgroundImage={teamBanner.backgroundImage}
          backgroundImageAlt={teamBanner.backgroundImageAlt}
        />
        <TeamSection
          className="relative overflow-hidden bg-white pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]"
          showButton={false}
          linkToDetail
        />
      </main>
    </>
  );
}
