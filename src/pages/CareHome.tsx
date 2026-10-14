import { CalendarCheck, HeartHandshake, Hospital, Pill, ShieldCheck, Video } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { ConnectedFlow } from "../components/extra";
import { Container, FeatureCard, FeatureGrid, Reveal, Section, SectionTitle, Split, StepList } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const MODEL = ["Assessment & Care Planning", "Service Coordination", "Monitoring & Review", "Family & Carer Support"];

const SERVICES = [
  { icon: Hospital, title: "Post-discharge Support", text: "Coordinated support designed to help individuals transition safely from hospital or clinic settings to home." },
  { icon: Video, title: "Remote Monitoring", text: "Connected devices and apps support ongoing health monitoring with clinical oversight." },
  { icon: CalendarCheck, title: "Home Visit Coordination", text: "Scheduling and coordination tools designed to support care professionals delivering home-based services." },
  { icon: Pill, title: "Medication Support", text: "Tools designed to support adherence, prescription management and pharmacy coordination for home care patients." },
  { icon: HeartHandshake, title: "Carer Coordination", text: "Connected support for informal carers and family members involved in home-based care delivery." },
  { icon: ShieldCheck, title: "Consent & Safety", text: "Every home care service is designed around informed consent, individual safety and the right to withdraw or modify care at any time." },
];

export default function CareHome() {
  return (
    <>
      <PageHero
        eyebrow="Care @ Home"
        title="Coordinated Support, Delivered With Dignity"
        text="Care beyond the clinic door designed to support individuals recovering, managing long-term conditions, or maintaining independence at home through connected services and professional oversight."
      />

      <Section>
        <Container>
          <Split
            center={false}
            left={
              <div>
                <SectionTitle eyebrow="Our Approach" title="Care Beyond the Clinic Door" />
                <Reveal delay={100}>
                  <p className="mt-5 text-[15.5px] leading-[1.8]">
                    For many individuals, the most important moments of care happen outside traditional clinical settings during recovery, in chronic condition management, or in supporting healthy ageing at home.
                  </p>
                </Reveal>
                <Reveal delay={170}>
                  <p className="mt-4 text-[15.5px] leading-[1.8]">
                    Telth Care @ Home is designed to support those moments with connected tools, coordinated services and the professional oversight needed to deliver care with confidence and dignity.
                  </p>
                </Reveal>
                <Reveal delay={240} dir="zoom">
                  <div className="img-zoom mt-8 overflow-hidden rounded-[20px] shadow-card">
                    <img src={IMG.techHome} alt="A Telth care professional supporting a family at home" loading="lazy" className="aspect-[16/9] w-full object-cover" />
                  </div>
                </Reveal>
              </div>
            }
            right={
              <div>
                <SectionTitle eyebrow="Care Management Model" title="Telth Care Management Model" text="A structured care management approach designed to coordinate home-based care across clinical teams, care professionals and the individuals they serve with a shared care plan at its centre." />
                <div className="mt-7"><StepList items={MODEL} /></div>
              </div>
            }
          />
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="How CM/CCM Connected" title={<>All linked in <span className="text-gradient">one system</span></>} />
          <ConnectedFlow />
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.waveTeal}>
        <Container>
          <SectionTitle center light eyebrow="Potential Services" title="Connected Home Care Services" />
          <FeatureGrid cols={3}>
            {SERVICES.map((s, i) => (
              <FeatureCard key={s.title} {...s} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <CtaBand
        title="Request a Care Conversation"
        text="Speak with our team about how Telth Care @ Home may support your organisation or individual care needs."
        primary={{ label: "Request a Care Conversation", to: ROUTES.enquiry }}
      />
    </>
  );
}
