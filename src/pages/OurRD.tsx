import { Activity, BarChart3, Brain, Database, Globe2, Network } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { Container, FeatureCard, FeatureGrid, Reveal, Section, SectionTitle, Split, StepList } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const PATH = [
  "Identify research question with clinical relevance",
  "Ethics review and governance approval",
  "Study design with independent methodology review",
  "Data collection with full consent frameworks",
  "Analysis and peer review",
  "Publication and transparent reporting",
  "Clinical translation where evidence supports it",
];

const THEMES = [
  { icon: Network, title: "Connected Care Systems", text: "Research into the design and effectiveness of integrated, multi-provider care systems for diverse populations." },
  { icon: Brain, title: "Responsible AI in Healthcare", text: "Investigation of appropriate, safe and accountable applications of AI in clinical and care management contexts." },
  { icon: Globe2, title: "Global Health Equity", text: "Research addressing how connected healthcare technology may reduce rather than amplify inequalities in access to care." },
  { icon: BarChart3, title: "Outcomes Measurement", text: "Developing rigorous methodologies for measuring the real-world impact of digital health interventions on patient outcomes." },
  { icon: Database, title: "Data Governance", text: "Research into consent models, data rights and governance frameworks appropriate for multi-stakeholder health ecosystems." },
  { icon: Activity, title: "Prevention & Healthy Ageing", text: "Investigation of technology-enabled preventive care approaches for population-level health improvement." },
];

export default function OurRD() {
  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Evidence First. Responsible Progress. Real-world Relevance"
        text="Telth's research and innovation programme is designed to ground our platform in evidence, advance responsible healthcare technology, and contribute to the global body of knowledge on connected, human-centered care."
      />

      <Section>
        <Container>
          <Split
            center={false}
            left={
              <div className="space-y-5">
                <SectionTitle eyebrow="Our Approach" title="How We Do Research" />
                <Reveal delay={100}>
                  <p className="text-[15.5px] leading-[1.8]">
                    Telth's research approach is grounded in intellectual honesty, ethical rigour and a commitment to real-world relevance. We do not pursue research to validate predetermined conclusions we pursue it to understand what works, for whom, and under what conditions.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-[15.5px] leading-[1.8]">
                    Research findings including findings that challenge our assumptions are published and made available for independent peer review.
                  </p>
                </Reveal>
              </div>
            }
            right={
              <div>
                <Reveal><h3 className="mb-4 text-[20px] font-semibold">Development Pathway</h3></Reveal>
                <StepList items={PATH} />
              </div>
            }
          />
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.waveTealWide}>
        <Container>
          <SectionTitle center light eyebrow="Research Themes" title="Areas of Research Focus" />
          <FeatureGrid cols={3}>
            {THEMES.map((t, i) => (
              <FeatureCard key={t.title} {...t} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.12em] text-brand">Participation &amp; Transparency</p>
              <h2 className="mt-2.5 text-[28px] font-semibold sm:text-[34px]">Open to Collaborate</h2>
              <p className="mt-5 text-[15.5px] leading-[1.85]">
                We welcome research partnerships with academic institutions, clinical organisations and independent researchers who share our commitment to evidence-grounded, ethical healthcare innovation. Research participation is always voluntary, consent-based and subject to independent ethics oversight.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Propose a Research Collaboration"
        text="Interested in contributing to responsible healthcare innovation with Telth?"
        bg={IMG.rdCta}
        primary={{ label: "Propose a Research Collaboration", to: ROUTES.enquiry }}
        secondary={{ label: "Explore THOS", to: ROUTES.thos }}
      />
    </>
  );
}
