import { ContactPage } from "@/components/ContactPage";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";

export default function Page() {
  const { contactBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={contactBanner.title}
          breadcrumbs={contactBanner.breadcrumbs}
          backgroundImage={contactBanner.backgroundImage}
          backgroundImageAlt={contactBanner.backgroundImageAlt}
        />
        <ContactPage />
      </main>
    </>
  );
}
