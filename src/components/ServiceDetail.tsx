"use client";

import { ServicePageLayout } from "./ServicePageLayout";
import { site, ServicePageData } from "@/data";

type ServiceItem = (typeof site.servicesCatalog.items)[number];

export function ServiceDetail({
  service,
  className,
}: {
  service: ServiceItem;
  className?: string;
}) {
  const shared = site.commercialServices;
  const page = site.industryPages[service.slug as keyof typeof site.industryPages];

  const servicesList = page?.servicesList
    ? page.servicesList.map((s) => ({
        label: s,
        href: `/services/${s.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      }))
    : site.servicesCatalog.items.map((item) => ({
      label: item.title,
      href: item.href,
    }));

  const pageData: ServicePageData = {
    id: `service-${service.slug}`,
    label: page?.label ?? service.label,
    title: page?.headline ?? service.headline,
    image: page?.image ?? service.image,
    imageAlt: page?.imageAlt ?? service.imageAlt,
    intro: page?.intro ?? service.intro,
    industriesTitle: page?.industriesTitle ?? shared.industriesTitle,
    industriesIntro: page?.industriesIntro ?? shared.industriesIntro,
    industries: page?.servicesList ?? shared.industries,
    experienceTitle: page?.experienceTitle ?? shared.experienceTitle,
    experienceText: page?.experienceText ?? shared.experienceText,
    experiencePoints: page?.experiencePoints ?? shared.experiencePoints,
    bidCta: {
      text: shared.bidCta.text,
      vanImage: shared.bidCta.vanImage,
      vanImageAlt: shared.bidCta.vanImageAlt,
    },
    servicesHeading: shared.servicesHeading,
    servicesList,
    askQuestion: shared.askQuestion,
    bookCta: shared.bookCta,
    reasons: shared.reasons,
  };

  return <ServicePageLayout data={pageData} className={className} />;
}
