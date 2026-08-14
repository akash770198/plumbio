import siteData from "@/data/site.json";

export type RawSiteData = typeof siteData;

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

  Services: siteData.Services
};

export type SiteData = typeof legacySiteMap;
export const site = legacySiteMap;
export default siteData;
