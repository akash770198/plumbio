import { ContactPage } from "@/components/ContactPage";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";
import { SECTION_LIGHT } from "@/lib/section-styles";

export default function Page() {
  const { contactBanner, contactInfo } = site;

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
        <section className={`w-full ${SECTION_LIGHT} pb-[3.25rem] lg:pb-[3.75rem]`}>
          <div className="relative h-[360px] w-full overflow-hidden sm:h-[420px] lg:h-[480px]">
            <iframe
              src={contactInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}
