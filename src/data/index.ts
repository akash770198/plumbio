import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type ServicesSchema = typeof siteData.Services;
export type ServicesSections = ServicesSchema["sections"];
export type ServicesTemplateComponents = ServicesSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type ServicesTopbarData = ServicesSections["Topbar"]["variants"]["ServicesTopbar1"];
export type ServicesHeaderData = ServicesSections["Header"]["variants"]["ServicesHeader1"];
export type ServicesHeroData = ServicesSections["Hero"]["variants"]["ServicesHero1"];
export type ServicesTrustedByData = ServicesSections["TrustedBy"]["variants"]["ServicesTrustedBy1"];
export type ServicesPageBannerData = ServicesSections["PageBanner"]["variants"]["ServicesInnerBanner1"];
export type ServicesAboutData = ServicesSections["About"]["variants"]["ServicesAbout1"];
export type ServicesCatalogData = ServicesSections["ServicesCatalog"]["variants"]["ServicesCatalog1"];
export type ServicesCommercialData = ServicesSections["CommercialServices"]["variants"]["ServicesCommercial1"];
export type ServicesWhyChooseData = ServicesSections["WhyChooseUs"]["variants"]["ServicesWhyChooseUs1"];
export type ServicesProcessData = ServicesSections["Process"]["variants"]["ServicesProcess1"];
export type ServicesCompanyShowcaseData = ServicesSections["CompanyShowcase"]["variants"]["ServicesCompanyShowcase1"];
export type ServicesTestimonialsData = ServicesSections["Testimonials"]["variants"]["ServicesTestimonials1"];
export type ServicesTeamData = ServicesSections["Team"]["variants"]["ServicesTeam1"];
export type ServicesAwardsData = ServicesSections["Awards"]["variants"]["ServicesAwards1"];
export type ServicesFAQData = ServicesSections["FAQ"]["variants"]["ServicesFAQ1"];
export type ServicesBlogData = ServicesSections["Blog"]["variants"]["ServicesBlog1"];
export type ServicesCTAData = ServicesSections["CTA"]["variants"]["ServicesCTA1"];
export type ServicesContactInfoData = ServicesSections["ContactInfo"]["variants"]["ServicesContactInfo1"];
export type ServicesPricingData = ServicesSections["Pricing"]["variants"]["ServicesPricing1"];
export type ServicesContactPageData = ServicesSections["ContactPage"]["variants"]["ServicesContactPage1"];
export type ServicesQuotePageData = ServicesSections["QuotePage"]["variants"]["ServicesQuotePage1"];
export type ServicesEnquiryPageData = ServicesSections["EnquiryPage"]["variants"]["ServicesEnquiryPage1"];
export type ServicesCareerPageData = ServicesSections["CareerPage"]["variants"]["ServicesCareerPage1"];
export type ServicesProjectsGalleryData = ServicesSections["ProjectsGallery"]["variants"]["ServicesProjectsGallery1"];
export type ServicesIndustriesWeServeData = ServicesSections["IndustriesWeServe"]["variants"]["ServicesIndustriesWeServe1"];
export type ServicesSitemapPageData = ServicesSections["SitemapPage"]["variants"]["ServicesSitemapPage1"];
export type ServicesTermsPageData = ServicesSections["TermsPage"]["variants"]["ServicesTermsPage1"];
export type ServicesFooterData = ServicesSections["Footer"]["variants"]["ServicesFooter1"];

// ── Legacy Site Map for Standalone Plumbio Site ──
const sec = siteData.Services.sections;

const legacySiteMap = {
  site: sec.Header.variants.ServicesHeader1.site,
  topbar: sec.Topbar.variants.ServicesTopbar1,
  nav: sec.Header.variants.ServicesHeader1.nav,
  header: sec.Header.variants.ServicesHeader1.header,
  hero: sec.Hero.variants.ServicesHero1,
  trustedBy: sec.TrustedBy.variants.ServicesTrustedBy1,
  aboutBanner: sec.PageBanner.variants.ServicesInnerBanner1.aboutBanner,
  servicesBanner: sec.PageBanner.variants.ServicesInnerBanner1.servicesBanner,
  servicesCatalog: sec.ServicesCatalog.variants.ServicesCatalog1,
  industriesBanner: sec.PageBanner.variants.ServicesInnerBanner1.industriesBanner,
  industriesWeServe: sec.IndustriesWeServe.variants.ServicesIndustriesWeServe1,
  projectsBanner: sec.PageBanner.variants.ServicesInnerBanner1.projectsBanner,
  blogBanner: sec.PageBanner.variants.ServicesInnerBanner1.blogBanner,
  projectsGallery: sec.ProjectsGallery.variants.ServicesProjectsGallery1,
  commercialServices: sec.CommercialServices.variants.ServicesCommercial1,
  about: sec.About.variants.ServicesAbout1,
  whyChoose: sec.WhyChooseUs.variants.ServicesWhyChooseUs1,
  process: sec.Process.variants.ServicesProcess1,
  companyShowcase: sec.CompanyShowcase.variants.ServicesCompanyShowcase1,
  testimonialsBanner: sec.PageBanner.variants.ServicesInnerBanner1.testimonialsBanner,
  reviews: sec.Testimonials.variants.ServicesTestimonials1.reviews,
  videoTestimonials: sec.Testimonials.variants.ServicesTestimonials1.videoTestimonials,
  testimonials: sec.Testimonials.variants.ServicesTestimonials1.testimonials,
  teamBanner: sec.PageBanner.variants.ServicesInnerBanner1.teamBanner,
  teamDetailBanner: sec.PageBanner.variants.ServicesInnerBanner1.teamDetailBanner,
  team: sec.Team.variants.ServicesTeam1.team,
  awardsBanner: sec.PageBanner.variants.ServicesInnerBanner1.awardsBanner,
  awards: sec.Awards.variants.ServicesAwards1.awards,
  faqBanner: sec.PageBanner.variants.ServicesInnerBanner1.faqBanner,
  faq: sec.FAQ.variants.ServicesFAQ1.faq,
  blog: sec.Blog.variants.ServicesBlog1.blog,
  ctaSection: sec.CTA.variants.ServicesCTA1,
  contactInfo: sec.ContactInfo.variants.ServicesContactInfo1,
  pricingBanner: sec.PageBanner.variants.ServicesInnerBanner1.pricingBanner,
  specialOffers: sec.Pricing.variants.ServicesPricing1.specialOffers,
  pricing: sec.Pricing.variants.ServicesPricing1.pricing,
  laborPricing: sec.Pricing.variants.ServicesPricing1.laborPricing,
  hourlyRatePricing: sec.Pricing.variants.ServicesPricing1.hourlyRatePricing,
  pricingCta: sec.Pricing.variants.ServicesPricing1.pricingCta,
  contactBanner: sec.PageBanner.variants.ServicesInnerBanner1.contactBanner,
  contactPage: sec.ContactPage.variants.ServicesContactPage1,
  quoteBanner: sec.PageBanner.variants.ServicesInnerBanner1.quoteBanner,
  quotePage: sec.QuotePage.variants.ServicesQuotePage1,
  enquiryBanner: sec.PageBanner.variants.ServicesInnerBanner1.enquiryBanner,
  enquiryPage: sec.EnquiryPage.variants.ServicesEnquiryPage1,
  sitemapBanner: sec.PageBanner.variants.ServicesInnerBanner1.sitemapBanner,
  sitemapPage: sec.SitemapPage.variants.ServicesSitemapPage1,
  footer: sec.Footer.variants.ServicesFooter1,
  termsBanner: sec.PageBanner.variants.ServicesInnerBanner1.termsBanner,
  termsPage: sec.TermsPage.variants.ServicesTermsPage1,
  careerBanner: sec.PageBanner.variants.ServicesInnerBanner1.careerBanner,
  careerPage: sec.CareerPage.variants.ServicesCareerPage1,
  
  industryPages: siteData.Services.industryPages,
  Services: siteData.Services
};

export type SiteData = typeof legacySiteMap;
export const site = legacySiteMap;
export default siteData;
