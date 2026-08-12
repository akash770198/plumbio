"use client";

import { ServicePageLayout, type ServicePageData } from "./ServicePageLayout";
import { site } from "@/data";

export function CommercialServices({ className }: { className?: string }) {
  const data = site.commercialServices;

  const pageData: ServicePageData = {
    id: "commercial-services",
    label: data.label,
    title: data.title,
    image: data.image,
    imageAlt: data.imageAlt,
    intro: data.intro,
    industriesTitle: data.industriesTitle,
    industriesIntro: data.industriesIntro,
    industries: data.industries,
    experienceTitle: data.experienceTitle,
    experienceText: data.experienceText,
    experiencePoints: data.experiencePoints,
    bidCta: data.bidCta,
    servicesHeading: data.servicesHeading,
    servicesList: data.servicesList.map((label) => ({
      label,
      href: "/services/commercial",
    })),
    askQuestion: data.askQuestion,
    bookCta: data.bookCta,
    reasons: data.reasons,
  };

  return <ServicePageLayout data={pageData} className={className} />;
}
