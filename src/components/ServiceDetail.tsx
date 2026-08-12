"use client";

import { ServicePageLayout, type ServicePageData } from "./ServicePageLayout";
import { site } from "@/data";

type ServiceItem = (typeof site.servicesCatalog.items)[number];

export function ServiceDetail({
  service,
  className,
}: {
  service: ServiceItem;
  className?: string;
}) {
  const shared = site.commercialServices;
  const page = "page" in service ? service.page : undefined;

  const industries =
    page?.industries ??
    (service.highlights.length > 0
      ? service.highlights
      : service.features.map((feature) => feature.title));

  const experiencePoints =
    page?.experiencePoints ??
    service.features.map((feature) => ({
      title: feature.title,
      text: feature.description,
    }));

  const servicesList =
    page?.servicesList?.map((label) => ({ label, href: service.href })) ??
    site.servicesCatalog.items.map((item) => ({
      label: `${item.title} Plumbing`,
      href: item.href,
    }));

  const pageData: ServicePageData = {
    id: `service-${service.slug}`,
    label: page?.label ?? service.label,
    title: page?.title ?? service.headline,
    image: page?.image ?? service.image,
    imageAlt: page?.imageAlt ?? service.imageAlt,
    intro: page?.intro ?? service.intro,
    industriesTitle: page?.industriesTitle ?? "Services We Cover Are:",
    industriesIntro:
      page?.industriesIntro ??
      "From everyday fixes to larger upgrades, our team brings the right tools, training, and care to every job.",
    industries,
    experienceTitle: page?.experienceTitle ?? "Extensive Experience for Plumbing",
    experienceText:
      page?.experienceText ??
      "Customers trust us for quality craftsmanship, clear communication, and dependable results. Here is how we support this service:",
    experiencePoints,
    bidCta: {
      text:
        page?.bidCtaText ??
        service.ctaText ??
        "Request a quote for your next plumbing project from our professional team today!",
      vanImage: shared.bidCta.vanImage,
      vanImageAlt: shared.bidCta.vanImageAlt,
    },
    servicesHeading: page?.servicesHeading ?? `${service.title} Services`,
    servicesList,
    askQuestion: shared.askQuestion,
    bookCta: shared.bookCta,
    reasons: shared.reasons,
  };

  return <ServicePageLayout data={pageData} className={className} />;
}
