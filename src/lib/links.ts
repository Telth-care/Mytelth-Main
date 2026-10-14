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
} as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  ecosystem: "/ecosystem",
  technology: "/technology",
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
  enquirySubmitted: "/enquiry-submitted",
  privacy: "/privacy",
  terms: "/terms",
  hipaa: "/hipaa",
  security: "/security",
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
  { label: "Careers", to: R.careers },
  { label: "Our R&D", to: R.rd },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [...NAV, { label: "Contact", to: R.enquiry }],
  },
  {
    title: "Platform",
    links: [
      { label: "THOS", to: R.thos },
      { label: "T-CARE App", to: X.playstore },
      { label: "T-Doc App", to: R.tdoc },
      { label: "CM/CCM App", to: R.cmccm },
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
  { label: "Terms of Service", to: R.terms },
  { label: "HIPAA Compliance", to: R.hipaa },
  { label: "Security", to: R.security },
] as const;

/** "Log in" menu – every app the platform offers. */
export const LOGIN_LINKS = [
  { label: "T-CARE App", hint: "Google Play", to: X.playstore },
  { label: "Doctor App (T-Doc)", hint: "For physicians", to: R.tdoc },
  { label: "CM/CCM App", hint: "For care managers", to: R.cmccm },
] as const;
