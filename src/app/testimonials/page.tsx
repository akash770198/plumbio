import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Testimonials } from "@/components/Testimonials";
import { site } from "@/data";

export default function Page() {
  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={site.testimonialsBanner.title}
          breadcrumbs={site.testimonialsBanner.breadcrumbs}
          backgroundImage={site.testimonialsBanner.backgroundImage}
          backgroundImageAlt={site.testimonialsBanner.backgroundImageAlt}
        />
        <ReviewsSection
          reviews={site.reviews}
          videoTestimonials={site.videoTestimonials}
        />
      </main>
    </>
  );
}
