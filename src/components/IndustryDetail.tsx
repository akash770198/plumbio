"use client";

import { ServicePageLayout } from "./ServicePageLayout";
import { site, ServicePageData } from "@/data";

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
    industries: industry.servicesList,
    experienceTitle: industry.experienceTitle,
    experienceText: industry.experienceText,
    experiencePoints: industry.experiencePoints,
    bidCta: {
      text: shared.bidCta.text,
      vanImage: shared.bidCta.vanImage,
      vanImageAlt: shared.bidCta.vanImageAlt,
    },
    servicesHeading: shared.servicesHeading,
    servicesList: industry.servicesList.map((s) => ({ label: s, href: "#" })),
    askQuestion: shared.askQuestion,
    bookCta: shared.bookCta,
    reasons: shared.reasons,
  };

  return <ServicePageLayout data={pageData} className={className} hideReasons={true} />;
}
