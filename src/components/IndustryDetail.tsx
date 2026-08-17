"use client";

import { ServicePageLayout, type ServicePageData } from "./ServicePageLayout";
import { site } from "@/data";

type IndustryItem = (typeof site.industryPages)[keyof typeof site.industryPages];

export function IndustryDetail({
  industry,
  className,
}: {
  industry: IndustryItem;
  className?: string;
}) {
  const shared = site.commercialServices;

  const pageData: ServicePageData = {
    id: `industry-${industry.slug}`,
    label: industry.label,
    title: industry.headline,
    image: industry.image,
    imageAlt: industry.imageAlt,
    intro: industry.intro,
    industriesTitle: industry.industriesTitle,
    industriesIntro: industry.industriesIntro,
    industries: industry.servicesList, // Map services to the list layout
    experienceTitle: industry.experienceTitle,
    experienceText: industry.experienceText,
    experiencePoints: industry.experiencePoints,
    bidCta: {
      text: `Request a quote for your ${industry.label} project from our professional team today!`,
      vanImage: shared.bidCta.vanImage,
      vanImageAlt: shared.bidCta.vanImageAlt,
    },
    servicesHeading: "Explore More Industries",
    servicesList: Object.values(site.industryPages).map(ind => ({
      label: ind.label,
      href: `/industries/${ind.slug}`
    })),
    askQuestion: shared.askQuestion,
    bookCta: shared.bookCta,
    reasons: shared.reasons,
  };

  return <ServicePageLayout data={pageData} className={className} hideReasons={true} />;
}
