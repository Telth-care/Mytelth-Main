import { Link, useLocation } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Btn, Container, Section } from "../components/ui";
import { ROUTES } from "../lib/links";

const TITLES: Record<string, string> = {
  [ROUTES.privacy]: "Privacy Policy",
  [ROUTES.terms]: "Terms of Use",
  [ROUTES.hipaa]: "HIPAA Compliance",
  [ROUTES.security]: "Security",
  [ROUTES.cookiePreferences]: "Cookie Preferences",
  [ROUTES.accessibility]: "Accessibility",
  [ROUTES.regulatoryInformation]: "Regulatory Information",
  [ROUTES.productAvailability]: "Product Availability",
  [ROUTES.corporateGovernance]: "Corporate Governance",
};

/** Placeholder so the footer legal links never 404. TODO: replace with the approved legal copy. */
export default function LegalPage() {
  const { pathname } = useLocation();
  const title = TITLES[pathname] ?? "Legal";
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text="This document is being finalised. For any questions in the meantime, please get in touch with our team." />
      <Section className="!py-12">
        <Container>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Btn to={ROUTES.enquiry}>Contact us</Btn>
            <Btn to={ROUTES.home} variant="ghost">Back to Home</Btn>
          </div>
        </Container>
      </Section>
    </>
  );
}
