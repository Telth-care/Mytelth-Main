import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Btn, Container, Section } from "../components/ui";
import { ROUTES } from "../lib/links";

/** Shown whenever no route matches – keeps every unknown path inside the app. */
export default function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        text="The page you are looking for does not exist or may have been moved. Head back to the Telth home page or get in touch with our team."
      />
      <Section className="!py-12">
        <Container>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Btn to={ROUTES.home}>Back to Home</Btn>
            <Btn to={ROUTES.enquiry} variant="ghost">Contact us</Btn>
          </div>
        </Container>
      </Section>
    </>
  );
}
