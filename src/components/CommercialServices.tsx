"use client";

import { ServicePageLayout, type ServicePageData } from "./ServicePageLayout";
import { site, SectionProps, ServicesCommercialData } from "@/data";

export function CommercialServices({ className, data }: SectionProps<ServicesCommercialData> = {}) {
  const sectionData = data || site.commercialServices;

  const pageData: ServicePageData = {
    id: "commercial-services",
    label: sectionData.label,
    title: sectionData.title,
    image: sectionData.image,
    imageAlt: sectionData.imageAlt,
    intro: sectionData.intro,
    industriesTitle: sectionData.industriesTitle,
    industriesIntro: sectionData.industriesIntro,
    industries: sectionData.industries,
    experienceTitle: sectionData.experienceTitle,
    experienceText: sectionData.experienceText,
    experiencePoints: sectionData.experiencePoints,
    bidCta: sectionData.bidCta,
    servicesHeading: sectionData.servicesHeading,
    servicesList: sectionData.servicesList.map((label) => ({
      label,
      href: "/services/commercial",
    })),
    askQuestion: sectionData.askQuestion,
    bookCta: sectionData.bookCta,
    reasons: sectionData.reasons,
  };

  return <ServicePageLayout data={pageData} className={className} />;
}
