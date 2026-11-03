/**
 * Single source of truth for navigation.
 * Internal targets start with "/", external targets are absolute URLs.
 * TODO: replace the external placeholders (Play Store, T-Mart, Natlife, social) with the real links.
 */
export const EXTERNAL = {
  playstore: "https://play.google.com/store/apps",
  tmart: "https://t-mart.myshopify.com",
  natlife: "https://natlife.myshopify.com",
  x: "https://x.com",
  linkedin: "https://www.linkedin.com",
  zohoRecruit: "https://mytelth.zohorecruit.in/jobs/Telth-career-portal?",
} as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  ecosystem: "/ecosystem",
  technology: "/technology",
  technologyDevices: "/technology/devices",
  technologyDevicesExplore: "/technology/devices/explore",
  healthConnect: "/technology/healthconnect-360",
  careers: "/careers",
  rd: "/rd",
  careCommunity: "/care-community",
  careHome: "/care-home",
  personalCare: "/personal-care",
  intelligentCareEconomy: "/intelligenT-CARE App-economy",
  carePlan: "/care-plan",
  partnership: "/partnership",
  thos: "/thos",
  thosV1: "/thos/v1",
  thosV2: "/thos/v2",
  thosV3: "/thos/v3",
  thosV4: "/thos/v4",
  tdoc: "/t-doc",
  cmccm: "/cm-ccm",
  enquiry: "/enquiry",
  cmApplication: "/cm-application",
  bookOrientation: "/book-orientation",
  orientation: "/book-orientation",
  enquirySubmitted: "/enquiry-submitted",
  privacy: "/privacy",
  terms: "/terms",
  hipaa: "/hipaa",
  security: "/security",
  accessibility: "/accessibility",
  regulatoryInformation: "/regulatory-information",
  productAvailability: "/product-availability",
  corporateGovernance: "/corporate-governance",
  cookiePreferences: "/cookie-preferences",
} as const;

const R = ROUTES;
const X = EXTERNAL;

export const isExternal = (to: string) => /^https?:\/\//i.test(to);

/** Main navigation (header pill + footer "Company"). */
export const NAV = [
  { label: "Home", to: R.home },
  { label: "About Us", to: R.about },
  { label: "Telth Ecosystem", to: R.ecosystem },
  { label: "Technology", to: R.technology },
  { label: "Devices", to: R.technologyDevices },
  { label: "Careers", to: R.careers },
  { label: "Our R&D", to: R.rd },
] as const;

/** Pages and common terms users may search for in the site navigation. */
export const SEARCH_PAGES = [
  { label: "Home", to: R.home, keywords: "welcome telth" },
  { label: "About Us", to: R.about, keywords: "company about telth who we are" },
  { label: "Telth Ecosystem", to: R.ecosystem, keywords: "platform ecosystem health care" },
  { label: "Technology", to: R.technology, keywords: "digital health innovation technology" },
  { label: "Devices", to: R.technologyDevices, keywords: "medical devices wearable monitor" },
  { label: "Explore Devices", to: R.technologyDevicesExplore, keywords: "device catalogue products explore" },
  { label: "HealthConnect 360", to: R.healthConnect, keywords: "healthconnect 360 connected health" },
  { label: "Careers", to: R.careers, keywords: "jobs work join team employment" },
  { label: "Our R&D", to: R.rd, keywords: "research development innovation" },
  { label: "Care @ Community", to: R.careCommunity, keywords: "community care services" },
  { label: "Care @ Home", to: R.careHome, keywords: "home care services" },
  { label: "Personal Care", to: R.personalCare, keywords: "personalized care" },
  { label: "Intelligent Care Economy", to: R.intelligentCareEconomy, keywords: "intelligent care economy t-care app" },
  { label: "Care Plan", to: R.carePlan, keywords: "care plan health planning" },
  { label: "Partnerships", to: R.partnership, keywords: "partner collaborate partnership" },
  { label: "THOS", to: R.thos, keywords: "health operating system platform" },
  { label: "THOS v1", to: R.thosV1, keywords: "thos version one" },
  { label: "THOS v2", to: R.thosV2, keywords: "thos version two" },
  { label: "THOS v3", to: R.thosV3, keywords: "thos version three" },
  { label: "THOS v4", to: R.thosV4, keywords: "thos version four" },
  { label: "T-DOC", to: R.tdoc, keywords: "physician doctor app" },
  { label: "CM/CCM", to: R.cmccm, keywords: "care manager care management app" },
  { label: "Contact Us", to: R.enquiry, keywords: "contact enquiry email message" },
  { label: "CM Application", to: R.cmApplication, keywords: "care manager application apply" },
  { label: "Book an Orientation", to: R.bookOrientation, keywords: "orientation booking schedule appointment" },
  { label: "Privacy Policy", to: R.privacy, keywords: "privacy data" },
  { label: "Terms of Use", to: R.terms, keywords: "terms conditions" },
  { label: "HIPAA", to: R.hipaa, keywords: "health information privacy compliance" },
  { label: "Security", to: R.security, keywords: "security information protection" },
  { label: "Accessibility", to: R.accessibility, keywords: "accessibility inclusion" },
  { label: "Regulatory Information", to: R.regulatoryInformation, keywords: "regulatory compliance" },
  { label: "Product Availability", to: R.productAvailability, keywords: "product availability" },
  { label: "Corporate Governance", to: R.corporateGovernance, keywords: "governance corporate" },
  { label: "Cookie Preferences", to: R.cookiePreferences, keywords: "cookies preferences settings" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "Home", to: R.home },
      { label: "About Us", to: R.about },
      { label: "Telth Ecosystem", to: R.ecosystem },
      { label: "Our R&D", to: R.rd },
      { label: "Contact", to: R.enquiry },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "THOS", to: R.thos },
      { label: "T-CARE APP", to: X.playstore },
      { label: "T-DOC APP", to: R.tdoc },
      { label: "CM/CCM APP", to: R.cmccm },
      { label: "T-Mart", to: X.tmart },
      { label: "Natlife", to: X.natlife },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Care @ Community", to: R.careCommunity },
      { label: "Care @ Home", to: R.careHome },
      { label: "Personal Care", to: R.personalCare },
      { label: "Intelligent Care Economy", to: R.intelligentCareEconomy },
    ],
  },
] as const;

export const LEGAL = [
  { label: "Privacy Policy", to: R.privacy },
  { label: "Terms of Use", to: R.terms },
  { label: "Cookie Preferences", to: R.cookiePreferences },
  { label: "Accessibility", to: R.accessibility },
  { label: "Regulatory Information", to: R.regulatoryInformation },
  { label: "Product Availability", to: R.productAvailability },
  { label: "Corporate Governance", to: R.corporateGovernance },
] as const;

/** "Log in" menu – every app the platform offers. */
export const LOGIN_LINKS = [
  { label: "T-CARE App", hint: "Google Play", to: X.playstore },
  { label: "T-DOC App", hint: "For physicians", to: R.tdoc },
  { label: "T-CM/CCM App", hint: "For care managers", to: R.cmccm },
] as const;
