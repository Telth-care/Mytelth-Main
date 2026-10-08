import { CreditCard, FlaskConical, Handshake, MonitorSmartphone, Pill, Cpu } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { CheckList, Container, FeatureCard, FeatureGrid, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const CONNECTIONS = [
  { icon: FlaskConical, title: "Diagnostics & Labs", text: "Designed to connect diagnostic services, laboratory networks and results delivery within a coordinated care workflow." },
  { icon: Pill, title: "Pharmacy Integration", text: "Proposed connections for prescription management, medication dispensing and pharmacy partner fulfilment." },
  { icon: MonitorSmartphone, title: "Digital Health Services", text: "A marketplace layer designed to connect vetted digital health services and applications to individuals and care teams." },
  { icon: Cpu, title: "Device Partners", text: "Supports integration with health devices, ensuring consent, security, and oversight." },
  { icon: CreditCard, title: "Care Payments", text: "A payment infrastructure layer to support care transactions, insurance, and partner fulfilment." },
  { icon: Handshake, title: "Partner Fulfilment", text: "A layer connecting healthcare partners to deliver verified, coordinated care through the platform." },
];

export default function IntelligentCareEconomyPage() {
  return (
    <>
      <PageHero
        eyebrow="Intelligent Care Economy"
        title="From a Care Need to Trusted Fulfilment"
        text="A trusted ecosystem layer designed to connect diagnostics, pharmacy, devices, care services, payments and partner fulfilment — coordinated through one intelligent platform."
      />

      <Section>
        <Container>
          <Split
            center={false}
            left={
              <div>
                <SectionTitle eyebrow="Care Orchestration" title="Connecting Need to Delivery" />
                <Reveal delay={100}>
                  <p className="mt-5 text-[15.5px] leading-[1.8]">
                    The Intelligent Care Economy is Telth's proposed infrastructure layer for connecting healthcare needs to trusted, coordinated fulfilment. It is designed to work across the ecosystem — linking community care, home care and personal care to the services and partners that can deliver what individuals need.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-4 text-[15.5px] leading-[1.8]">
                    This is not a general marketplace. It is a closed-loop ecosystem designed specifically for healthcare — with trust, consent and clinical governance at its foundation.
                  </p>
                </Reveal>
              </div>
            }
            right={
              <Reveal dir="right">
                <div className="rounded-[22px] border border-slate-100 bg-soft p-6 sm:p-8">
                  <h3 className="mb-5 text-[20px] font-semibold">How We Build Trust</h3>
                  <CheckList
                    items={[
                      "All ecosystem connections are subject to partner vetting and governance processes.",
                      "Patient consent and data privacy are central to every service connection.",
                      "Clinical accountability remains with qualified healthcare professionals.",
                      "Partners must meet Telth's published standards for safety, quality and ethics.",
                    ]}
                  />
                </div>
              </Reveal>
            }
          />
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.waveTeal}>
        <Container>
          <SectionTitle center light eyebrow="What the Ecosystem May Connect" title="Partner & Service Connections" />
          <FeatureGrid cols={3}>
            {CONNECTIONS.map((c, i) => (
              <FeatureCard key={c.title} {...c} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <CtaBand
        title="Become an Ecosystem Partner"
        text="Interested in connecting your diagnostics, pharmacy, device or digital health service to the Telth ecosystem?"
        primary={{ label: "Become an Ecosystem Partner", to: ROUTES.enquiry }}
      />
    </>
  );
}
